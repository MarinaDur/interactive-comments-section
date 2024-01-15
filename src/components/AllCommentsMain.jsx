import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Comments from "./Comments";
import Comment from "./Comment";
import React from "react";
import { useComments } from "../context/CommentsContext";

const StyledAllCommentsMain = styled(Flex)`
  width: 100%;
  gap: 1.5rem;
  align-items: flex-end;
`;

function renderComments(comments, replyKey, editKey) {
  return (
    <>
      {comments.map((comment, index) => (
        <Comments key={index}>
          <Comment
            obj={comment}
            key={comment.key}
            isReply={comment.key === replyKey}
            isEdit={comment.key === editKey}
          />
          {comment.replies?.length > 0 && (
            <Comments hasReplies={comment.replies?.length > 0}>
              {renderComments(comment.replies, replyKey, editKey)}
            </Comments>
          )}
        </Comments>
      ))}
    </>
  );
}

function AllCommentsMain() {
  const { replyKey, comments, editKey } = useComments();

  return (
    <StyledAllCommentsMain>
      {renderComments(comments, replyKey, editKey)}
    </StyledAllCommentsMain>
  );
}

export default AllCommentsMain;
