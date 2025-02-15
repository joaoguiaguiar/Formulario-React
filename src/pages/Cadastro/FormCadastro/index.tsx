import styled from "styled-components";
import CadastroPessoal from "./CadastroPessoal";

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
  width: 1000px;
  height: 710px;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    min-height: auto;
    padding: 1rem;
    margin: 1rem;
  }


`;

const FormCadastro = () => {
  return (
    <ComponenteBaseForm>
      <ComponeteContainerForm>
        <ComponenteBoxForm>
          <CadastroPessoal />
        </ComponenteBoxForm>
      </ComponeteContainerForm>
    </ComponenteBaseForm>
  );
};

export default FormCadastro;