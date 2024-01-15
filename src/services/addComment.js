export function addComment(commentList, targetKey, newReply) {
  return commentList.map((comment) => {
    if (comment.key === targetKey) {
      // If this is the target comment, add the new reply
      return {
        ...comment,
        replies: [...comment.replies, newReply],
      };
    } else if (comment.replies?.length > 0) {
      // If the comment has replies, recursively update them
      return {
        ...comment,
        replies: addComment(comment.replies, targetKey, newReply),
      };
    } else {
      // Otherwise, return the comment unchanged
      return comment;
    }
  });
}
