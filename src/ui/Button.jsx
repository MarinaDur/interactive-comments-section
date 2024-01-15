import { css, styled } from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  background: var(--cl-moderate-blue);
  padding: 0.7rem 2rem;
  color: var(--cl-white);
  border: none;

  ${(props) =>
    props.$delete &&
    css`
      background: var(--cl-soft-red);
      padding: 1rem 2rem;
    `}

  ${(props) =>
    props.$cancel &&
    css`
      background: var(--cl-grayish-blue);
      padding: 1rem 2rem;
    `}


`;

export default Button;
