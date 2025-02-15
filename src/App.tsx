import styled from "styled-components";
import Banner from "./components/Banner";
import BaseForm from "./pages/BaseForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormCadastro from "./pages/Cadastro/FormCadastro";
import FormEndereço from "./pages/Cadastro/FormEndereco";
import FormEspecialidade from "./pages/Cadastro/FormEspecialidade";

const ComponeteContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem; 
`;

const ComponenteBoxForm = styled.main`
  background-color: white;
  width: 100%; 
  max-width: 1300px;
  height: auto; 
  border-radius: 2rem;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  overflow: hidden; 

  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<FormCadastro />} />
        <Route path="/endereco" element={<FormEndereço />} />
        <Route path="/especialidade" element={<FormEspecialidade />} />

        <Route
          path="/"
          element={
            <ComponeteContainerForm>
              <ComponenteBoxForm>
                <Banner />
                <BaseForm />
              </ComponenteBoxForm>
            </ComponeteContainerForm>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;