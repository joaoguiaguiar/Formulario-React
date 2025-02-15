import Button from "../../components/Button";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Form from "../../components/Form";
import Titulo from "../../components/Titulo";
import ErrorMessage from "../../components/ErrorMessage";
import Fieldset from "../../components/Fieldset";
import esquemaLogin from "../../esquemas/loguin";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 

type FormInputTipos = z.infer<typeof esquemaLogin>;


const BotaoEnviar = styled.button`
  margin-top: 2rem;
  padding: 0.75em 6em;
  background-color: #3fa2f6;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  max-width: 400px; 
  &:hover {
    background-color: #2c7bbf;
  }
`;


const Login = () => {
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputTipos>({
    mode: "all",
    resolver: zodResolver(esquemaLogin),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const aoSubmeter = (dados: FormInputTipos) => {
    console.log("Dados do login:", dados);
  };

  return (
    <>
      <Titulo>Login</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-email">E-mail</Label>
          <Input
            id="campo-email"
            placeholder="Insira seu endereço de email"
            type="email"
            {...register("email")}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-senha">Senha</Label>
          <Input
            id="campo-senha"
            placeholder="Insira sua senha"
            type="password"
            {...register("senha")}
          />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </Fieldset>

        <BotaoEnviar type="submit">Entrar</BotaoEnviar>

        <Button
          type="button"
          onClick={() => navigate('/cadastro')}
          style={{ marginTop: "10px", backgroundColor: "transparent", color: "red" }}
        >
          Não tem uma conta? Crie uma agora
        </Button>
      </Form>
    </>
  );
};

export default Login;