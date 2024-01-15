function upVoteComment(comments, key) {
  return comments.map((comment) => {
    if (comment.key === key) {
      return {
        ...comment,
        score: comment.score + 1,
        hasUpVoted: true,
        hasDownVoted: false,
      };
    } else if (comment.replies?.length > 0) {
      const editedReplies = upVoteComment(comment.replies, key);
      if (editedReplies !== comment.replies) {
        // If the replies were edited, return a new comment object with updated replies
        return {
          ...comment,
          replies: editedReplies,
        };
      }
    }
    // Default case: return the original comment if none of the conditions are met
    return comment;
  });
}

function downVoteComment(comments, key) {
  return comments.map((comment) => {
    if (comment.key === key) {
      return {
        ...comment,
        score: comment.score - 1,
        hasUpVoted: false,
        hasDownVoted: true,
      };
    } else if (comment.replies?.length > 0) {
      const editedReplies = downVoteComment(comment.replies, key);
      if (editedReplies !== comment.replies) {
        // If the replies were edited, return a new comment object with updated replies
        return {
          ...comment,
          replies: editedReplies,
        };
      }
    }
    return comment;
  });
}

export { upVoteComment, downVoteComment };
