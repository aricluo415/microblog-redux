import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_ALL_TITLES,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_POST,
  VOTE_POST,
  VOTE_TITLE
} from "./actionTypes";
/**posts = */
const INITIAL_STATE = { posts: {}, titles: {} };
function rootReducer(state = INITIAL_STATE, action) {
  let postId;

  switch (action.type) {
    /** for POST_VIEW */
    case VOTE_POST:
      console.log("votes", action.payload.votes);
      const updatedPost = {
        ...state.posts[action.payload.postId],
        votes: action.payload.votes.votes
      };
      return {
        ...state,
        posts: { ...state.posts, [action.payload.postId]: updatedPost }
      };
    /** for TITLE_LIST */
    case VOTE_TITLE:
      const updatedTitle = {
        ...state.titles[action.payload.postId],
        votes: action.payload.votes.votes
      };
      return {
        ...state,
        titles: { ...state.titles, [action.payload.postId]: updatedTitle }
      };

    case GET_ALL_TITLES:
      const titles = {};
      action.payload.titles.forEach(
        (title) => (titles[title.id] = { ...title })
      );
      return {
        ...state,
        titles: titles
      };
    case GET_POST:
      return {
        ...state,
        posts: { [action.payload.post.id]: action.payload.post }
      };

    case DELETE_POST:
      let newTitles = { ...state.titles };
      postId = action.payload.postId;
      delete newTitles[postId];
      return { ...state, titles: newTitles };

    case EDIT_POST:
      postId = action.payload.post.id;
      const editedPost = {
        ...state.posts[postId],
        ...action.payload.post
      };
      return {
        ...state,
        posts: { ...state.posts, [postId]: editedPost }
      };

    case ADD_COMMENT:
      postId = action.payload.postId;
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
      postId = action.payload.postId;
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
