import { styled, css } from "styled-components";

const Paragraph = styled.p`
  word-wrap: break-word;

  ${(props) =>
    props.$type === "text" &&
    css`
      color: var(--cl-grayish-blue);
    `}

  ${(props) =>
    props.$type === "popup" &&
    css`
      color: var(--cl-grayish-blue);
    `}

  ${(props) =>
    props.$type === "likes" &&
    css`
      color: var(--cl-moderate-blue);
      font-weight: 500;
    `}
`;

export default Paragraph;
