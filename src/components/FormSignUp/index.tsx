import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";

type InputTypes = {
  name: string;
  email: string;
  password: string;
};

export function FormSignUp() {
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
    navigate("/")
  };

  return (
    <Container>
      <h2>Faça seu cadastro</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      <section>
          <label>
            Name:
            <input
              type="text"
              placeholder="digite seu nome"
              {...register("name", { required: "campo obrigatório",
              
               })}
            />
          </label>
          <span className="inputError">{errors.name?.message}</span>
        </section>

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
              {...register("password",
               { required: "campo obrigatório",
               minLength: {
                value: 7,
                message: "A senha deve ter no mínimo 7 dígitos",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?,./\\[\]-]).+$/,
                message:
                  "A senha deve ter número, letra maiúscula e caractere especial",
              },
              
               })}/>
          </label>
          <span className="inputError">{errors.password?.message}</span>
        </section>

        <Button title="Finalizar" loading={false}  variant="secondary"/>
      </form>

      <span className="messageChangePage">Já tem uma conta? </span>
      <button className="buttonChangePage" onClick={() => navigate("/")}>
        Registre-se
      </button>
    </Container>
  );
}
