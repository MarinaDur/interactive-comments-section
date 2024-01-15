import { styled } from "styled-components";

const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: var(--cl-grayish-blue);
  opacity: 0.5;
  top: 0;
  left: 0;
  position: absolute;
`;

function Overlay() {
  return <StyledOverlay>Overlay</StyledOverlay>;
}

export default Overlay;
