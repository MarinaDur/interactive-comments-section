import { styled } from "styled-components";

const Avatar = styled.div`
  width: ${(props) => props.$width && `${props.$width}`};
  height: ${(props) => props.$height && `${props.$height}`};
  border-radius: 50%;
  background: ${(props) =>
    props.$avatar && `url("${props.$avatar}") no-repeat center`};
  background-size: cover;
`;

export default Avatar;
