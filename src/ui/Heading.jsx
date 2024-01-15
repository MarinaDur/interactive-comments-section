import { styled, css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 700;
      color: var(--cl-dark-blue);
      font-size: 1.6rem;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 700;
      color: var(--cl-dark-blue);
      font-size: 2rem;
    `}
`;

export default Heading;
