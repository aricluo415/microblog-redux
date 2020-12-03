import {
  GET_ALL_TITLES,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_POST,
  VOTE_POST,
  VOTE_TITLE
} from "./actionTypes";

export function updatePostVote(postId, votes) {
  return {
    type: VOTE_POST,
    payload: { postId, votes }
  };
}

export function updateTitleVote(postId, votes) {
  return {
    type: VOTE_TITLE,
    payload: { postId, votes }
  };
}

export function getAllTitles(titles) {
  console.log("GET ALL TITLES actions.js");
  return {
    type: GET_ALL_TITLES,
    payload: { titles }
  };
}

export function getPost(post) {
  console.log("GET POST actions.js");
  return {
    type: GET_POST,
    payload: { post }
  };
}

export function addPost(post) {
  console.log("ADD TO POST actions.js");
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
    payload: { post }
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
