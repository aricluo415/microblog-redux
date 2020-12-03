import axios from "axios";
import {
  addPost,
  getPost,
  getAllTitles,
  removePost,
  editPost,
  addComment,
  deleteComment,
  updatePostVote,
  updateTitleVote
} from "./actions";

const BASE_URL = "http://localhost:5000/";
export function updateVoteApi(postId, direction, type) {
  return async function (dispatch) {
    let res = await axios.post(
      `${BASE_URL}api/posts/${postId}/vote/${direction}`
    );
    console.log("UPDATE POST API actionCreator.js", res);
    if (type === "post") dispatch(updatePostVote(postId, res.data));
    else dispatch(updateTitleVote(postId, res.data));
  };
}
export function addPostToAPI(post) {
  return async function (dispatch) {
    let res = await axios.post(`${BASE_URL}api/posts`, post);
    console.log("ADD POST API actionCreator.js", res);
  };
}
export function getPostAPI(postId) {
  return async function (dispatch) {
    let res = await axios.get(`${BASE_URL}api/posts/${postId}`);
    console.log("GET POST API actionCreator.js", res);
    dispatch(getPost(res.data));
  };
}
export function removePostFromAPI(postId) {
  return async function (dispatch) {
    let res = await axios.delete(`${BASE_URL}api/posts/${postId}`);
    console.log("REMOVE POST API actionCreator.js", res);
    if (res.status === 200) {
      dispatch(removePost(postId));
    }
  };
}
export function editPostFromAPI(post) {
  return async function (dispatch) {
    let res = await axios.put(`${BASE_URL}api/posts/${post.id}`, post);
    console.log("EDIT POST API actionCreator.js", res);
    if (res.status === 200) {
      dispatch(editPost(post));
    }
  };
}
export function getAllTitlesAPI() {
  return async function (dispatch) {
    let res = await axios.get(`${BASE_URL}api/posts`);
    console.log("GET TITLES API actionCreator.js", res);
    dispatch(getAllTitles(res.data));
  };
}

export function addCommentsAPI(text, postId) {
  return async function (dispatch) {
    let res = await axios.post(`${BASE_URL}api/posts/${postId}/comments`, {
      text
    });
    console.log("ADD COMMENTS API actionCreator.js", res);
    const comment = { id: res.data.id, text: res.data.text };
    dispatch(addComment(comment, postId));
  };
}

export function deleteCommentAPI(commentId, postId) {
  return async function (dispatch) {
    let res = await axios.delete(
      `${BASE_URL}api/posts/${postId}/comments/${commentId}`
    );
    console.log("DELETE COMMENT API actionCreator.js", res);
    if (res.status === 200) {
      dispatch(deleteComment(commentId, postId));
    }
  };
}

// normal action creator & action
