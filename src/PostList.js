import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PostList() {
  const posts = useSelector((store) =>
    Object.keys(store.posts).map((key) => store.posts[key])
  );
  console.log(posts);
  return (
    <Container className="post-list">
      <Row lg={4} md={3} sm={2} xs={1}>
        {posts.map((post) => (
          <Col key={post.id} style={{ height: "10rem" }}>
            <Card className="">
              <Link to={`/post/${post.id}`}>
                <Card.Header>{post.title}</Card.Header>
              </Link>
              <Card.Body>
                <Card.Title>{post.description}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PostList;
