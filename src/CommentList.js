import React from "react";
import { Button, ListGroup, Col, Row } from "react-bootstrap";
import { deleteComment } from "./reducers/actions";
import { useDispatch } from "react-redux";

function CommentList({ comments, postId }) {
  const dispatch = useDispatch();

  function handleDelete(commentId) {
    dispatch(deleteComment(commentId, postId));
  }

  return (
    <div>
      <h3 className="mx-4">Comments</h3>
      <ListGroup>
        {comments.map((c) => (
          <ListGroup.Item className="mx-4" key={c.id}>
            <Row>
              <Col className="py-1" sm={11}>
                <div>{c.comment}</div>
              </Col>
              <Col sm={1}>
                <Button variant="light" onClick={() => handleDelete(c.id)}>
                  <i className="fas fa-trash"></i>
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CommentList;
