import styled from "styled-components";
import Login from "../Loguin";

const ContainerForm = styled.div`
  padding: 1rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%; 
  max-width: 500px; 
  margin: 0 auto; 

  @media (max-width: 768px) {
    padding: 0;
  }

`;

const BaseForm = () => {
  return (
    <ContainerForm>
      <Login />
    </ContainerForm>
  );
};

export default BaseForm;