import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";

type InputTypes = {
  email: string;
  password: string;
};

export function FormLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    console.log(data);
    reset()
  };

  return (
    <Container>
      <h2>Faça seu login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>
            Email:
            <input
              type="email"
              placeholder="exemplo@email.com"
              {...register("email", { required: "campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Endereço de e-mail inválido",
              },
               })}
            />
          </label>
          <span className="inputError">{errors.email?.message}</span>
        </section>

        <section>
          <label>
            Senha:
            <input type="password" placeholder="mínimo de 7 carácters"     
              {...register("password", { required: "campo obrigatório",
              
               })}/>
          </label>
          <span className="inputError">{errors.password?.message}</span>
        </section>

        <Button title="login" loading={false} />
      </form>

      <span className="messageChangePage">Não tem uma conta? </span>
      <button className="buttonChangePage" onClick={() => navigate("/signup")}>
        Registre-se
      </button>
    </Container>
  );
}
