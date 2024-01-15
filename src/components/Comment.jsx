import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Grid from "../ui/Grid";
import Likes from "./Likes";
import Avatar from "../ui/Avatar";
import Actions from "../ui/Actions";
import { useComments } from "../context/CommentsContext";
import ReplyInput from "./ReplyInput";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import React from "react";

const StyledCommentCon = styled(Flex)`
  width: 100%;
  gap: 1rem;
`;

const StyledComment = styled(Grid)`
  min-height: 10rem;
  background: var(--cl-white);
  padding: 2rem 1.5rem;
  border-radius: 5px;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 1024px) {
    align-items: start;
    padding: 2.2rem;
    gap: 2.2rem;
  }
`;

const StyledTextCon = styled(Flex)`
  gap: 1rem;
  grid-column: 1/3;
  grid-row: 1/3;

  @media (min-width: 1024px) {
    grid-column: 2/4;
    gap: 1.5rem;
  }
`;

const StyledUserDetails = styled(Flex)`
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StyledActionsCon = styled(Flex)`
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  grid-column: 2/3;
  justify-content: flex-end;

  @media (min-width: 1024px) {
    grid-row: 1/2;
    grid-column: 3/4;
  }
`;

const StyledButton = styled(Button)`
  grid-column: 2/3;

  @media (min-width: 1024px) {
    grid-row: 3/4;
    grid-column: 3/4;
  }
`;

const StyledSpanRegular = styled.span`
  word-wrap: break-word;
`;

const StyledSpanHash = styled.span`
  color: var(--cl-moderate-blue);
  font-weight: 700;
`;

const StyledYou = styled.div`
  background: var(--cl-moderate-blue);
  padding: 1px 0.6rem;
  color: var(--cl-white);
  font-size: 1.2rem;
  font-weight: 500;
`;

function Comment({ obj, isReply, isEdit }) {
  const {
    key,
    content,
    user,
    replyingTo,
    score,
    hasUpVoted,
    hasDownVoted,
    timePassed,
  } = obj;
  const {
    hanldeReply,
    valueReply,
    handleReplyComment,
    handleComment,
    handleEditInput,
    handleEdit,
    editValue,
    handleEditComment,
    handleDeletePopUp,
    handleDownvote,
    handleUpvote,
  } = useComments();

  const highlightQueryText = (text, filterValue) => {
    const isMention = filterValue.startsWith("@");
    const reg = new RegExp(`(${filterValue})`, "gi");
    const textParts = text.split(reg);

    return (
      <Paragraph $type="text">
        {textParts.map((part, index) => (
          <React.Fragment key={index}>
            {isMention && index % 2 !== 0 ? (
              <StyledSpanHash>{part}</StyledSpanHash>
            ) : (
              <StyledSpanRegular>{part}</StyledSpanRegular>
            )}
          </React.Fragment>
        ))}
      </Paragraph>
    );
  };

  return (
    <StyledCommentCon>
      <StyledComment>
        <StyledTextCon>
          <StyledUserDetails>
            <Avatar $width="3rem" $height="3rem" $avatar={user.image.webp} />
            <Heading as="h2">{user.username}</Heading>
            {user.username === "juliusomo" && <StyledYou>you</StyledYou>}
            <Paragraph $type="text">{timePassed}</Paragraph>
          </StyledUserDetails>
          {isEdit ? (
            <TextArea
              name="edit"
              rows="4"
              cols="50"
              value={editValue}
              handleInput={handleEditInput}
            />
          ) : (
            highlightQueryText(content, `@${replyingTo}`)
          )}
        </StyledTextCon>
        <Likes
          handleUpvote={!hasUpVoted ? () => handleUpvote(key) : null}
          handleDownvote={!hasDownVoted ? () => handleDownvote(key) : null}
          score={score}
          hasUpVoted={hasUpVoted}
          hasDownVoted={hasDownVoted}
        />
        {user.username === "juliusomo" ? (
          <StyledActionsCon>
            <Actions
              width="12"
              height="14"
              d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
              fill="#ED6368"
              hoverColor="--cl-pale-red"
              text="Delete"
              textColor="--cl-soft-red"
              isEdit={isEdit}
              handleClick={() => handleDeletePopUp(key)}
            />
            <Actions
              width="14"
              height="14"
              d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
              fill="#5357B6"
              hoverColor="--cl-light-grayish-blue"
              text="Edit"
              textColor="--cl-moderate-blue"
              handleClick={() => handleEdit(key, content)}
              isEdit={isEdit}
            />
          </StyledActionsCon>
        ) : (
          <Actions
            width="13"
            height="13"
            d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
            fill="#5357B6"
            hoverColor="--cl-light-grayish-blue"
            text="Reply"
            textColor="--cl-moderate-blue"
            handleClick={() => hanldeReply(key, user.username)}
          />
        )}
        {isEdit && (
          <StyledButton onClick={() => handleEditComment(key, editValue)}>
            Update
          </StyledButton>
        )}
      </StyledComment>
      {isReply && (
        <ReplyInput
          buttontext="Reply"
          value={valueReply}
          handleInput={handleReplyComment}
          handleComment={() => handleComment(key, valueReply, user.username)}
        />
      )}
    </StyledCommentCon>
  );
}

export default Comment;
