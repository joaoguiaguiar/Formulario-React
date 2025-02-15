import Label from "../../../components/Label";
import Input from "../../../components/Input";
import InputMask from "../../../components/InputMask";
import Form from "../../../components/Form";
import Titulo from "../../../components/Titulo";
import ErrorMessage from "../../../components/ErrorMessage";
import Fieldset from "../../../components/Fieldset";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import esquemaCadastro from "../../../esquemas/cadastro";
import { useNavigate } from "react-router-dom";

type FormInputTipos = z.infer<typeof esquemaCadastro>;

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

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CampoInput = styled(Input)`
  width: 100%;
  max-width: 400px;
`;

const CampoInputMask = styled(InputMask)`
  width: 100%;
  max-width: 400px;
`;

const CadastroPessoal = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, 
    control,
  } = useForm<FormInputTipos>({
    mode: "all",
    resolver: zodResolver(esquemaCadastro),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      senha: "",
      senhaVerificada: "",
    },
  });

  const aoSubmeter = (dados: FormInputTipos) => {
    console.log(dados);
    if (isValid) { 
      navigate("/endereco"); 
    }
  };
 

  

  return (
    <FormContainer>
      <Titulo>Insira alguns dados básicos:</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-nome">Nome</Label>
          <CampoInput
            id="campo-nome"
            placeholder="Digite seu nome completo"
            type="text"
            $error={!!errors.nome}
            {...register("nome")}
          />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-email">E-mail</Label>
          <CampoInput
            id="campo-email"
            placeholder="Insira seu endereço de email"
            type="email"
            $error={!!errors.email}
            {...register("email")}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Fieldset>

        <Controller
          control={control}
          name="telefone"
          rules={{
            pattern: {
              value: /^\(\d{2,3}\) \d{5}-\d{4}$/,
              message: "O telefone inserido está no formato incorreto",
            },
            required: "O campo telefone é obrigatório",
          }}
          render={({ field }) => (
            <Fieldset>
              <Label>Telefone</Label>
              <CampoInputMask
                mask="(99) 99999-9999"
                placeholder="Ex: (DD) XXXXX-XXXX"
                $error={!!errors.telefone}
                onChange={field.onChange}
              />
              {errors.telefone && (
                <ErrorMessage>{errors.telefone.message}</ErrorMessage>
              )}
            </Fieldset>
          )}
        />

        <Fieldset>
          <Label htmlFor="campo-senha">Crie uma senha</Label>
          <CampoInput
            id="campo-senha"
            placeholder="Crie uma senha"
            type="password"
            $error={!!errors.senha}
            {...register("senha")}
          />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-senha-confirmacao">Repita a senha</Label>
          <CampoInput
            id="campo-senha-confirmacao"
            placeholder="Repita a senha anterior"
            type="password"
            $error={!!errors.senhaVerificada}
            {...register("senhaVerificada")}
          />
          {errors.senhaVerificada && (
            <ErrorMessage>{errors.senhaVerificada.message}</ErrorMessage>
          )}
        </Fieldset>

        <BotaoEnviar 
        type="submit">Avançar</BotaoEnviar>
      </Form>
    </FormContainer>
  );
};

export default CadastroPessoal;