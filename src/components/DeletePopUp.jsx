import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import { useComments } from "../context/CommentsContext";

const StyledDeletePopUp = styled(Flex)`
  position: absolute;
  top: calc(50% - 50vh);
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.5rem;
  border-radius: 10px;
  background: var(--cl-white);
  gap: 1.5rem;
  width: 90%;
  z-index: 999;
  max-width: 350px;
`;

const StyledButtons = styled(Flex)`
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 50%;
`;

function DeletePopUp({ handleCancelClick, handleDeleteClick }) {
  const { popupRef } = useComments();
  //   console.log("popupRef in DeletePopUp:", popupRef);

  return (
    <StyledDeletePopUp ref={popupRef}>
      <Heading as="h3">Delete comment</Heading>
      <Paragraph $type="popup">
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </Paragraph>
      <StyledButtons>
        <StyledButton $cancel="cancel" onClick={handleCancelClick}>
          NO, CANCEL
        </StyledButton>
        <StyledButton $delete="delete" onClick={handleDeleteClick}>
          YES, DELETE
        </StyledButton>
      </StyledButtons>
    </StyledDeletePopUp>
  );
}

export default DeletePopUp;
