import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: { post }
  };
}

export function removePost(postId) {
  return {
    type: DELETE_POST,
    payload: { postId }
  };
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    payload: post
  };
}

export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, postId }
  };
}
export function deleteComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    payload: { commentId, postId }
  };
}
