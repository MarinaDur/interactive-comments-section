import { styled } from "styled-components";
import Flex from "../ui/Flex";
import AllCommentsCon from "./AllCommentsCon";
import DeletePopUp from "./DeletePopUp";
import Overlay from "../ui/Overlay";
import { useComments } from "../context/CommentsContext";

const StyledMain = styled(Flex)`
  width: 100%;
  min-height: 100vh;
  background: var(--cl-very-light-gray);
  align-items: center;
  position: relative;
`;

function Main() {
  const { deleteKey, handleCancelPopUp, handleDeleteComment } = useComments();
  return (
    <StyledMain>
      <AllCommentsCon />
      {deleteKey && (
        <DeletePopUp
          handleCancelClick={handleCancelPopUp}
          handleDeleteClick={() => handleDeleteComment(deleteKey)}
        />
      )}
      {deleteKey && <Overlay />}
    </StyledMain>
  );
}

export default Main;
