import styled from "styled-components";
import CadastroEspecialistaTecnico from "./CadastroEspecialidade";

const ComponenteBaseForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const ComponeteContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const ComponenteBoxForm = styled.main`
  background-color: white;
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
    margin: 1rem;
  }
`;

const FormEspecialidade = () => {
  return (
    <ComponenteBaseForm>
      <ComponeteContainerForm>
        <ComponenteBoxForm>
          <CadastroEspecialistaTecnico />
        </ComponenteBoxForm>
      </ComponeteContainerForm>
    </ComponenteBaseForm>
  );
};

export default FormEspecialidade