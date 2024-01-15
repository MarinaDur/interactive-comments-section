export function editComment(comments, key, editedComment) {
  return comments.map((comment) => {
    if (comment.key === key) {
      return {
        ...comment,
        content: editedComment,
      };
    } else if (comment.replies?.length > 0) {
      // Only continue the recursion if the comment hasn't been found yet
      const editedReplies = editComment(comment.replies, key, editedComment);
      if (editedReplies !== comment.replies) {
        // If the replies were edited, return a new comment object with updated replies
        return {
          ...comment,
          replies: editedReplies,
        };
      }
    }
    // Return the comment as is if it doesn't match the key
    return comment;
  });
}
