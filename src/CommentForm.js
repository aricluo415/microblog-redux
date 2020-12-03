import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addComment } from "./reducers/actions";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";

const INITIAL_DATA = { comment: "" };

function CommentForm({ postId }) {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const dispatch = useDispatch();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const comment = { comment: formData.comment, id: uuid() };
    dispatch(addComment(comment, postId));
    setFormData(INITIAL_DATA);
  }

  return (
    <Form className="m-4" onSubmit={handleSubmit}>
      <Form.Group controlId="formComment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="comment"
          placeholder="What did you think of the post?"
          value={formData.comment}
          onChange={handleChange}
          name="comment"
        />
      </Form.Group>
      <Button className="mr-2" variant="primary" type="submit">
        Add Comment
      </Button>
    </Form>
  );
}

export default CommentForm;
