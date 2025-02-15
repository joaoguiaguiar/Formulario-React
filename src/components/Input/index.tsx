import styled from "styled-components";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $error?: boolean;
}

const Input = styled.input<InputProps>`
  background: #f0f0f0;
  box-sizing: border-box;
  margin: 0.5em 0;
  border-radius: 8px;
  width: 100%;
  max-width: 550px;
  padding: 12px 16px;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  border: 2px solid ${(props) => (props.$error ? "#a71e1e" : "#ccc")};

  &::placeholder {
    color: rgba(107, 110, 113, 1);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }

  &:focus {
    border-color: ${(props) => (props.$error ? "#a71e1e" : "#007bff")};
    outline: none;
    box-shadow: ${(props) =>
      props.$error
        ? "0 0 0 2px rgba(167, 30, 30, 0.5)"
        : "0 0 0 2px rgba(0, 123, 255, 0.5)"};
  }

  &:disabled {
    background: #e9ecef;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

export default Input;