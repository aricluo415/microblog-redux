import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const INITIAL_DATA = {
  title: "",
  description: "",
  body: ""
};

function PostForm({ handleSubmit, post }) {
  const [formData, setFormData] = useState(post || INITIAL_DATA);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  }

  return (
    <Form className="m-4" onSubmit={(evt) => handleSubmit(evt, formData)}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="What's your post title?"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Describe your post"
          value={formData.description}
          onChange={handleChange}
          name="description"
        />
      </Form.Group>

      <Form.Group controlId="formBody">
        <Form.Label>Body</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows={5}
          placeholder="Your post goes here"
          value={formData.body}
          onChange={handleChange}
          name="body"
        />
      </Form.Group>

      <Button className="mr-2" variant="primary" type="submit">
        Submit
      </Button>
      <Link to="/" className="btn btn-secondary">
        Cancel
      </Link>
    </Form>
  );
}

export default PostForm;
