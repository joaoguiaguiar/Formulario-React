import { useForm } from "react-hook-form";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import Titulo from "../../../components/Titulo";
import ErrorMessage from "../../../components/ErrorMessage";
import Fieldset from "../../../components/Fieldset";
import FormContainer from "../../../components/FormContainer";
import styled from "styled-components";
import FormInputEndereco from "../../../interface/formEndereco";
import { useNavigate } from "react-router-dom";


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

const CampoInput = styled(Input)`
  width: 100%;
  max-width: 600px; 
`;

const FormularioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const TituloContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem; 
`;

const CadastroEndereco = () => {

    const navigate = useNavigate();
  

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors, isValid }, 
  } = useForm<FormInputEndereco>({
    mode: "all",
    defaultValues: {
      cep: "",
      rua: "",
      bairro: "",
      numero: "",
      localidade: "",
    },
  });

  const aoSubmeter = (dados: FormInputEndereco) => {
    if (isValid) { 
      navigate("/especialidade"); 
    }
    console.log(dados);
  };

  const cepDigitado = watch("cep");

  const fethEndereco = async (cep: string) => {
    if (!cep) {
      setError("cep", {
        type: "manual",
        message: "Cep inválido",
      });

      return;
    }

    try {
      const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (response.ok) {
        setValue("rua", data.logradouro);
        setValue("localidade", `${data.localidade}, ${data.uf}`);
        setValue("bairro", data.bairro);
      } else {
        throw new Error("Cep inválido");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormularioContainer>
      <TituloContainer>
        <Titulo>Agora, mais alguns dados sobre você:</Titulo>
      </TituloContainer>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-cep">CEP</Label>
          <CampoInput
            id="campo-cep"
            placeholder="Insira seu CEP"
            type="text"
            {...register("cep", { required: "O campo é obrigatório" })}
            $error={!!errors.cep}
            onBlur={() => fethEndereco(cepDigitado)}
          />
          {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-rua">Rua</Label>
          <CampoInput
            id="campo-rua"
            placeholder=""
            type="text"
            $error={!!errors.rua}
            {...register("rua", { required: "O campo é obrigatório" })}
          />
          {errors.rua && <ErrorMessage>{errors.rua.message}</ErrorMessage>}
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label htmlFor="campo-numero-rua">Número</Label>
            <CampoInput
              id="campo-numero-rua"
              placeholder="Ex: 1440"
              type="text"
              $error={!!errors.numero}
              {...register("numero", { required: "O campo é obrigatório" })}
            />
            {errors.numero && (
              <ErrorMessage>{errors.numero.message}</ErrorMessage>
            )}
          </Fieldset>
          <Fieldset>
            <Label htmlFor="campo-bairro">Bairro</Label>
            <CampoInput
              id="campo-bairro"
              placeholder=""
              type="text"
              $error={!!errors.bairro}
              {...register("bairro", { required: "O campo é obrigatório" })}
            />
            {errors.bairro && (
              <ErrorMessage>{errors.bairro.message}</ErrorMessage>
            )}
          </Fieldset>
        </FormContainer>
        <Fieldset>
          <Label htmlFor="campo-localidade">Localidade</Label>
          <CampoInput
            id="campo-localidade"
            placeholder=""
            type="text"
            $error={!!errors.localidade}
            {...register("localidade", { required: "O campo é obrigatório" })}
          />
          {errors.localidade && (
            <ErrorMessage>{errors.localidade.message}</ErrorMessage>
          )}
        </Fieldset>
        <BotaoEnviar type="submit">Cadastrar</BotaoEnviar>
      </Form>
    </FormularioContainer>
  );
};

export default CadastroEndereco;