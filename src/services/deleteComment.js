export function deleteComment(comments, key) {
  return comments.reduce((acc, comment) => {
    if (comment.key === key) {
      // If the comment matches the key, don't include it in the accumulator array
      return acc;
    }

    if (comment.replies?.length > 0) {
      // If the comment has replies, recursively call deleteComment on its replies
      return [
        ...acc,
        { ...comment, replies: deleteComment(comment.replies, key) },
      ];
    }

    // If the comment doesn't match the key and has no replies, include it in the accumulator array
    return [...acc, comment];
  }, []);
}
