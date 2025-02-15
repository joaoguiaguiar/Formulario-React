import styled from "styled-components";
import CadastroEndereco from "./CadastroEndereco";

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
  width: 90%;
  max-width: 800px; 
  height: auto; 
  padding: 2rem; 
  border-radius: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormEndereço = () => {
  return (
    <ComponenteBaseForm>
      <ComponeteContainerForm>
        <ComponenteBoxForm>
          <CadastroEndereco />
        </ComponenteBoxForm>
      </ComponeteContainerForm>
    </ComponenteBaseForm>
  );
};

export default FormEndereço;