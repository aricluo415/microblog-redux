import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";
/**posts = */
const INITIAL_STATE = { posts: {} };
function rootReducer(state = INITIAL_STATE, action) {
  let postId = action.payload.id;

  switch (action.type) {
    case ADD_POST:
      const newPost = { ...action.payload.post, comments: [] };
      return {
        ...state,
        posts: { ...state.posts, [postId]: newPost }
      };

    case DELETE_POST:
      let newPosts = { ...state.posts };
      delete newPosts[postId];
      return { ...state, posts: newPosts };

    case EDIT_POST:
      const editedPost = {
        ...state.posts[postId],
        ...action.payload
      };
      return {
        ...state,
        posts: { ...state.posts, [postId]: editedPost }
      };

    case ADD_COMMENT:
      return {
        ...state,
        posts: {
          ...state.posts,
          [postId]: {
            ...state.posts[postId],
            comments: [
              ...state.posts[postId].comments,
              { ...action.payload.comment }
            ]
          }
        }
      };

    case DELETE_COMMENT:
      const newComments = state.posts[postId].comments.filter(
        (c) => c.id !== action.payload.commentId
      );

      return {
        ...state,
        posts: {
          ...state.posts,
          [postId]: {
            ...state.posts[postId],
            comments: newComments
          }
        }
      };
    default:
      return state;
  }
}

export default rootReducer;

/**
 * comment {id:1 , comment:""}
 * {posts : {}, {5 : {title: , description: , body: , id: 5, comments: []}, {}}
 *
 */
