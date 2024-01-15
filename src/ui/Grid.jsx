import { styled } from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);

  @media (min-width: 1024px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: auto 1fr auto;
  }
`;

export default Grid;
