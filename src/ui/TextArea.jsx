import { styled } from "styled-components";

const StyledTextArea = styled.textarea`
  grid-column: 1/3;
  outline: none;
  border-radius: 5px;
  width: 100%;
  height: 10rem;
  border: ${(props) =>
    props.$borderCl === "gray"
      ? "1px solid var(--cl-light-gray)"
      : "1px solid var(--cl-dark-blue)"};
  padding: 2rem;

  &:focus {
    border: ${(props) =>
      props.$borderCl === "gray"
        ? "1px solid var(--cl-light-gray)"
        : "1px solid var(--cl-dark-blue)"};
    outline: none;
  }

  @media (min-width: 1024px) {
    grid-column: 2/3;
    grid-row: 1/3;
  }
`;

function TextArea({ name, value, handleInput, placeholder, borderCl }) {
  return (
    <StyledTextArea
      placeholder={placeholder}
      name={name}
      rows="4"
      cols="50"
      value={value}
      onChange={handleInput}
      $borderCl={borderCl}
    />
  );
}

export default TextArea;
