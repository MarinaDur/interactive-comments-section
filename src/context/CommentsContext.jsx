import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import data from "../data/data.json";
import { v4 as uuid4 } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { addComment } from "../services/addComment";
import { editComment } from "../services/editComment";
import { deleteComment } from "../services/deleteComment";
import { downVoteComment, upVoteComment } from "../services/voteComment";
import { calculateTimePassed } from "../services/calculateTimePassed";

const CommentsContext = createContext();

function CommentsProvider({ children }) {
  const [comments, setComments] = useLocalStorage(data.comments, "comments");
  const [valueMain, setvalueMain] = useState("");
  const [replyKey, setReplyKey] = useState(0);
  const [valueReply, setvalueReply] = useState("");
  const [editKey, setEditKey] = useState(0);
  const [editValue, setEditValue] = useState("");
  const [deleteKey, setDeleteKey] = useState(null);
  const popupRef = useRef(null);

  function handleMainComment(e) {
    setvalueMain(e.target.value);
  }

  function handleReplyComment(e) {
    setvalueReply(e.target.value);
  }

  function handleComment(key, myComment, replyingTo) {
    const currentTime = new Date();
    const commentCreationTime = currentTime.toString();

    const newReply = {
      id: 2,
      key: uuid4(),
      content: myComment,
      createdAt: commentCreationTime,
      timePassed: calculateTimePassed(currentTime),
      score: 0,
      replyingTo,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "../public/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
      replies: [],
    };

    setComments((prev) => {
      if (key === null) {
        setvalueMain("");
        return [...prev, newReply];
      } else {
        setvalueReply("");
        setReplyKey(0);
        return addComment(prev, key, newReply);
      }
    });
  }

  function handleEditComment(key, editedComment) {
    setComments((prev) => editComment(prev, key, editedComment));
    setEditKey(0);
  }

  function hanldeReply(key, replyTo) {
    setReplyKey(key);
    setvalueReply(`@${replyTo}`);
  }

  function handleEdit(key, content) {
    setEditKey(key);
    setEditValue(content);
  }

  function handleEditInput(e) {
    setEditValue(e.target.value);
  }

  function handleDeletePopUp(key) {
    setDeleteKey(key);
  }

  function handleCancelPopUp() {
    setDeleteKey(null);
  }

  function handleDeleteComment(key) {
    setComments((prev) => deleteComment(prev, key));
    setDeleteKey(null);
  }

  function handleUpvote(key) {
    setComments((prev) => upVoteComment(prev, key));
  }

  function handleDownvote(key) {
    setComments((prev) => downVoteComment(prev, key));
  }

  const updateCreationTime = useCallback((comments) => {
    // Update the creation time in the comments state
    return comments.map((comment) => {
      return {
        ...comment,
        timePassed: calculateTimePassed(comment.createdAt),
        ...(comment.replies?.length > 0 && {
          replies: updateCreationTime(comment.replies),
        }),
      };
    });
  }, []);

  // Call updateCreationTime when the page is reloaded
  useEffect(() => {
    setComments((prev) => updateCreationTime(prev));
  }, [updateCreationTime, setComments]);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [deleteKey]);

  return (
    <CommentsContext.Provider
      value={{
        handleMainComment,
        handleReplyComment,
        valueReply,
        valueMain,
        hanldeReply,
        replyKey,
        handleComment,
        comments,
        editKey,
        handleEdit,
        handleEditInput,
        editValue,
        handleEditComment,
        handleDeletePopUp,
        handleCancelPopUp,
        deleteKey,
        handleDeleteComment,
        popupRef,
        handleUpvote,
        handleDownvote,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

function useComments() {
  const context = useContext(CommentsContext);
  if (context === undefined)
    throw new Error("CommentsContext was used outside of the CommentsProvider");
  return context;
}

export { CommentsProvider, useComments };
