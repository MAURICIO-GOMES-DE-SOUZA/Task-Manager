import { PropsWithChildren, createContext, useState } from "react";
import { API } from "../configs/api";

export type SignInTypes = {
  email: string;
  password: string;
};

export type SignUpTypes = {
  name: string;
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (params: SignInTypes) => Promise<boolean | void>;
  signUp: (params: SignUpTypes) => Promise<boolean | void>;
  isLoading: boolean;
  signOut: () => void
};

export const AuthContext = createContext({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsoLoading] = useState(false);

  async function signIn({ email, password }: SignInTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha");

    setIsoLoading(true);

    return API.post("/login", { email, password })
      .then((res) => {
        const userID = { userID: res.data.id };
        localStorage.setItem("@task_manager:user", JSON.stringify(userID));

        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado no  login");
        }

        console.log(error);
      })
      .finally(() => {
        setIsoLoading(false);
      });
  }

  function signOut() {
    localStorage.removeItem("@task_manager:user")
    // remove Cookie
  }



  async function signUp({ name, email, password }: SignUpTypes) {
    if ((!name || !email || !password))
      throw alert("Por favor informar nome, email e senha");

    setIsoLoading(true);

    return API.post("/user", { name, email, password })
      .then((res) => {
        alert(res?.data.message);
        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado ao criar usuário!");
        }

        console.log(error);
      })
      .finally(() => {
        setIsoLoading(false);
      });
  }

  return (
    <AuthContext.Provider value={{ signIn, isLoading, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
