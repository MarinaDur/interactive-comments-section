import { styled, css } from "styled-components";
import Flex from "../ui/Flex";

const StyledComments = styled(Flex)`
  gap: 1.5rem;
  width: 100%;
  align-items: flex-end;
  position: relative;

  ${(props) =>
    props.$hasReplies &&
    css`
      width: 95%;
      &::before {
        content: "";
        width: 2px;
        height: 100%;
        background: var(--cl-light-gray);
        position: absolute;
        top: 0;
        left: -5%;
      }

      @media (min-width: 1024px) {
        width: 89%;
        &::before {
          content: "";
          width: 2px;
          height: 100%;
          background: var(--cl-light-gray);
          position: absolute;
          top: 0;
          left: -6.5%;
        }
      }
    `}
`;

function Comments({ children, hasReplies }) {
  return (
    <StyledComments className="comments" $hasReplies={hasReplies}>
      {children}
    </StyledComments>
  );
}

export default Comments;
