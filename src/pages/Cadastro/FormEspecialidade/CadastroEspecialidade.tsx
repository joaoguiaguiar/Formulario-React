import { useFieldArray, useForm } from "react-hook-form";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import Titulo from "../../../components/Titulo";
import ErrorMessage from "../../../components/ErrorMessage";
import Fieldset from "../../../components/Fieldset";
import FormContainer from "../../../components/FormContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import Divisor from "../../../components/Divisor";
import esquemaCadastroEspecialista from "../../../esquemas/especialidade";
import { z } from "zod";
import ButtonContainer from "../../../components/ButtonContainer";
import styled from 'styled-components';

type FormEspecialista = z.infer<typeof esquemaCadastroEspecialista>;


const TituloContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledFieldset = styled(Fieldset)`
text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BotaoEnviar = styled.button`
  margin-top: 2rem;
  padding: 0.75em 2em; /* Reduzi o padding para telas menores */
  background-color: #3fa2f6;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  white-space: nowrap;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 0.75em 1em; 
    font-size: 0.875rem; 
  }

  &:hover {
    background-color: #2c7bbf;
  }
`;

const BotaoAvancar = styled.button`
  margin-top: 2rem;
  padding: 0.75em 2em; 
  background-color: #143D60;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  white-space: nowrap;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 0.75em 1em; 
    font-size: 0.875rem; 
  }

  &:hover {
    background-color: #0020ed;
  }
`;


const CadastroEspecialistaTecnico = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormEspecialista>({
    resolver: zodResolver(esquemaCadastroEspecialista),
    mode: "all",
    defaultValues: {
      registroProfissional: "",
      habilidadesTecnicas: [],
    },
  });

  const aoSubmeter = (dados: FormEspecialista) => {
    console.log(dados);
  };

  const { fields, append } = useFieldArray({
    control,
    name: "habilidadesTecnicas",
  });

  const adicionarNovaHabilidade = () => {
    append({
      tecnologia: "",
      nivelExperiencia: 0,
      instituicaoCertificacao: "",
    });
  };

  return (
    <Container>
      <TituloContainer>
        <Titulo className="titulo">Agora, suas habilidades técnicas:</Titulo>
      </TituloContainer>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <StyledFieldset>
          <Label>Registro Profissional</Label>
          <Input
            id="campo-registro-profissional"
            type="text"
            placeholder="Insira seu número de registro"
            $error={!!errors.registroProfissional}
            {...register("registroProfissional")}
          />
          {errors.registroProfissional && (
            <ErrorMessage>{errors.registroProfissional.message}</ErrorMessage>
          )}
        </StyledFieldset>
        <Divisor />

        {fields.map((field, index) => (
          <div key={field.id}>
            <StyledFieldset>
              <Label>Tecnologia</Label>
              <Input
                id={`campo-tecnologia-${index}`}
                type="text"
                placeholder="Ex: React, Node.js, Python"
                $error={!!errors.habilidadesTecnicas?.[index]?.tecnologia}
                {...register(`habilidadesTecnicas.${index}.tecnologia`)}
              />
              {errors.habilidadesTecnicas?.[index]?.tecnologia && (
                <ErrorMessage>
                  {errors.habilidadesTecnicas?.[index]?.tecnologia?.message}
                </ErrorMessage>
              )}
            </StyledFieldset>

            <FormContainer>
              <StyledFieldset>
                <Label>Nível de Experiência</Label>
                <Input
                  id={`campo-nivel-experiencia-${index}`}
                  type="number"
                  placeholder="Ex: 1 (Iniciante) a 5 (Especialista)"
                  $error={!!errors.habilidadesTecnicas?.[index]?.nivelExperiencia}
                  {...register(`habilidadesTecnicas.${index}.nivelExperiencia`, {
                    valueAsNumber: true,
                  })}
                />
                {errors.habilidadesTecnicas?.[index]?.nivelExperiencia && (
                  <ErrorMessage>
                    {errors.habilidadesTecnicas?.[index]?.nivelExperiencia?.message}
                  </ErrorMessage>
                )}
              </StyledFieldset>
              <StyledFieldset>
                <Label>Instituição de Certificação</Label>
                <Input
                  id={`campo-instituicao-certificacao-${index}`}
                  type="text"
                  placeholder="Ex: Udemy, Coursera, Faculdade X"
                  $error={!!errors.habilidadesTecnicas?.[index]?.instituicaoCertificacao}
                  {...register(`habilidadesTecnicas.${index}.instituicaoCertificacao`)}
                />
                {errors.habilidadesTecnicas?.[index]?.instituicaoCertificacao && (
                  <ErrorMessage>
                    {errors.habilidadesTecnicas?.[index]?.instituicaoCertificacao?.message}
                  </ErrorMessage>
                )}
              </StyledFieldset>
            </FormContainer>
            <Divisor />
          </div>
        ))}

        <ButtonContainer>
          <BotaoEnviar
            type="button"
            onClick={adicionarNovaHabilidade}
            className="btnCriar"
          >
            Adicionar Habilidade Técnica
          </BotaoEnviar>
          <BotaoAvancar type="submit">Avançar</BotaoAvancar>
        </ButtonContainer>
        
      </Form>
    </Container>
  );
};

export default CadastroEspecialistaTecnico;