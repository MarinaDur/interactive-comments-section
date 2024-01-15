import { styled } from "styled-components";
import Flex from "../ui/Flex";
import AllCommentsMain from "./AllCommentsMain";
import ReplyInput from "./ReplyInput";
import { useComments } from "../context/CommentsContext";

const StyledAllCommentsCon = styled(Flex)`
  width: 90%;
  max-width: 700px;
  padding: 8rem 0;
  gap: 1.5rem;
`;

function AllCommentsCon() {
  const { valueMain, handleMainComment, handleComment } = useComments();

  return (
    <StyledAllCommentsCon>
      <AllCommentsMain />
      <ReplyInput
        buttontext="Send"
        value={valueMain}
        handleInput={handleMainComment}
        handleComment={() => handleComment(null, valueMain, null)}
      />
    </StyledAllCommentsCon>
  );
}

export default AllCommentsCon;
