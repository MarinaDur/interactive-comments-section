import { css, styled } from "styled-components";

const StyledSvgIcons = styled.svg`
  cursor: pointer;

  &:hover {
    path {
      fill: var(--cl-moderate-blue);
      transition: all 0.2s ease-in-out;

      ${(props) =>
        props.$hasDownVoted &&
        css`
          fill: var(--cl-light-gray);
        `}

      ${(props) =>
        props.$hasUpVoted &&
        css`
          fill: var(--cl-light-gray);
        `}
    }
  }

  path {
    ${(props) =>
      props.$hasDownVoted &&
      css`
        fill: var(--cl-light-gray);
      `}

    ${(props) =>
      props.$hasUpVoted &&
      css`
        fill: var(--cl-light-gray);
      `}
  }
`;

function Svg({
  width,
  height,
  d,
  viewBox,
  fill,
  handleClick,
  hasDownVoted,
  hasUpVoted,
}) {
  return (
    <StyledSvgIcons
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={handleClick}
      $hasDownVoted={hasDownVoted}
      $hasUpVoted={hasUpVoted}
    >
      <path fill={fill} d={d} />
    </StyledSvgIcons>
  );
}

export default Svg;
