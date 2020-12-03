import React, { useState } from "react";
import { useParams } from "react-router";
import { Card, Button, Modal } from "react-bootstrap";
import PostForm from "./PostForm";
import CommentForm from "./CommentForm";
import { useHistory } from "react-router";
import CommentList from "./CommentList";
import { useSelector, useDispatch } from "react-redux";
import { removePost, editPost } from "./reducers/actions";

function PostView() {
  const { postId } = useParams();
  const post = useSelector((store) => store.posts[postId]);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const history = useHistory();

  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }
  function handleDelete() {
    dispatch(removePost(postId));
    history.push("/");
  }
  return (
    <div>
      <Card className="m-4">
        <Card.Header>{post.title}</Card.Header>
        <Card.Body>
          <Card.Title>{post.description}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button className="mr-2" variant="primary" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      <CommentList comments={post.comments} postId={postId} />
      <CommentForm postId={postId} />
      <EditForm show={show} handleClose={handleClose} post={post} />
    </div>
  );
}

function EditForm({ show, handleClose, post }) {
  const dispatch = useDispatch();

  function handleSubmit(evt, editedPost) {
    evt.preventDefault();
    dispatch(editPost(editedPost));
    handleClose();
  }
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <PostForm handleSubmit={handleSubmit} post={post} />
      </Modal.Body>
    </Modal>
  );
}
export default PostView;
