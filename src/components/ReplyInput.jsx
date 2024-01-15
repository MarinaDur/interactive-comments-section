import { styled } from "styled-components";
import Grid from "../ui/Grid";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import TextArea from "../ui/TextArea";

const StyledReplyInput = styled(Grid)`
  padding: 2rem;
  background: var(--cl-white);
  gap: 2rem;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  grid-column: 1/2;

  @media (min-width: 1024px) {
    grid-row: 1/2;
  }
`;

const StyledButton = styled(Button)`
  grid-column: 2/3;
  transition: all 0.2s ease-in-out;

  @media (min-width: 1024px) {
    grid-row: 1/2;
    grid-column: 3/4;
  }

  &:hover {
    background: var(--cl-light-grayish-blue);
  }
`;

function ReplyInput({ buttontext, value, handleInput, handleComment }) {
  return (
    <StyledReplyInput>
      <TextArea
        placeholder="Add a comment..."
        name="reply"
        rows="4"
        cols="50"
        value={value}
        handleInput={handleInput}
        borderCl="gray"
      />
      <StyledAvatar
        $width="3rem"
        $height="3rem"
        $avatar="./avatars/image-juliusomo.webp"
      />
      <StyledButton onClick={handleComment}>{buttontext}</StyledButton>
    </StyledReplyInput>
  );
}

export default ReplyInput;
