import React from "react";
import PostForm from "./PostForm";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addPost } from "./reducers/actions";
import { v4 as uuid } from "uuid";

function NewPost() {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(evt, formData) {
    evt.preventDefault();
    const newPost = {
      title: formData.title,
      description: formData.description,
      body: formData.body,
      id: uuid()
    };
    dispatch(addPost(newPost));
    history.push("/");
  }

  return (
    <div>
      <PostForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default NewPost;
