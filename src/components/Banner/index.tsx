import styled from "styled-components";
import banner from "../../assets/banner_principal.jpeg";

const ContainerIMG = styled.figure`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Banner = () => {
  return (
    <ContainerIMG>
      <img src={banner} alt="Banner tech" className="banner" />
    </ContainerIMG>
  );
};

export default Banner;