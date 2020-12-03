import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import Vote from "./Vote";
function PostList() {
  const posts = useSelector(
    (store) => Object.keys(store.titles).map((key) => store.titles[key]),
    shallowEqual
  );

  console.log("TITLES from PostList.js", posts);

  return (
    <Container className="post-list">
      <Row lg={4} md={3} sm={2} xs={1}>
        {posts.map((post) => (
          <Col key={post.id} style={{ maxHeight: "15rem" }}>
            <Card className="mb-2">
              <Link to={`/post/${post.id}`}>
                <Card.Header>{post.title}</Card.Header>
              </Link>
              <Card.Body>
                <Card.Title>{post.description}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Vote post={post} type={"title"} />
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PostList;
