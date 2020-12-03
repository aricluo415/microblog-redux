import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Button, Modal, Col, Row, Container } from "react-bootstrap";
import PostForm from "./PostForm";
import CommentForm from "./CommentForm";
import { useHistory } from "react-router";
import CommentList from "./CommentList";
import { useSelector, useDispatch } from "react-redux";
import {
  removePostFromAPI,
  editPostFromAPI,
  getPostAPI
} from "./reducers/actionCreators";
import Vote from "./Vote";
function PostView() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  let post = useSelector((store) => store.posts[postId]);
  console.log("POST ALREADY EXISTS?", post);

  useEffect(() => {
    console.log("------->UPDATE POST DETAIL VIA API");
    dispatch(getPostAPI(postId));
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const history = useHistory();

  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }
  async function handleDelete() {
    await dispatch(removePostFromAPI(postId));
    history.push("/");
  }
  if (!post) return <div>Loading...</div>;
  console.log(post);
  return (
    <div>
      <Card className="m-4">
        <Card.Header>
          <Container className="p-0">
            <Row>
              <Col className="col-auto mr-auto">{post.title}</Col>
              <Col className="col-auto m-0">
                <Vote post={post} type={"post"} />
              </Col>
            </Row>
          </Container>
        </Card.Header>
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

  async function handleSubmit(evt, editedPost) {
    evt.preventDefault();
    await dispatch(editPostFromAPI(editedPost));
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
