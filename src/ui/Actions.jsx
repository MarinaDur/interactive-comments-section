import { styled, css } from "styled-components";
import Flex from "./Flex";

const StyledReply = styled(Flex)`
  grid-column: 2/3;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  cursor: pointer;
  @media (min-width: 1024px) {
    grid-row: 1/2;
    grid-column: 3/4;
  }

  &:hover {
    span {
      color: ${(props) => `var(${props.$hoverColor})`};
      transition: all 0.2s ease-in-out;

      ${(props) =>
        props.$isEdit &&
        css`
          color: var(--cl-light-gray);
        `}
    }
    path {
      fill: ${(props) => `var(${props.$hoverColor})`};
      transition: all 0.2s ease-in-out;

      ${(props) =>
        props.$isEdit &&
        css`
          fill: var(--cl-light-gray);
        `}
    }
  }

  path {
    ${(props) =>
      props.$isEdit &&
      css`
        fill: var(--cl-light-gray);
      `}
  }
`;

const StyledSvg = styled.svg``;

const StyledText = styled.span`
  color: ${(props) => `var(${props.$textColor})`};
  font-weight: 700;

  ${(props) =>
    props.$isEdit &&
    css`
      color: var(--cl-light-gray);
    `}
`;

function Actions({
  width,
  height,
  fill,
  hoverColor,
  d,
  text,
  textColor,
  handleClick,
  isEdit,
}) {
  return (
    <StyledReply
      $isEdit={isEdit}
      $hoverColor={hoverColor}
      onClick={isEdit ? null : handleClick}
    >
      <StyledSvg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={d} fill={fill} />
      </StyledSvg>
      <StyledText $textColor={textColor} $isEdit={isEdit}>
        {text}
      </StyledText>
    </StyledReply>
  );
}

export default Actions;
