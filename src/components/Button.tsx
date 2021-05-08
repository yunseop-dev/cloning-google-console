import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: inherit;
  padding: 0.25rem;
  color: ${(props) => props.color};
  &:hover {
    background: #efefef;
  }
`;

export default Button;
