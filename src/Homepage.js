import React from "react";
import PostList from "./PostList";
import { Jumbotron } from "react-bootstrap";

function Homepage() {
  return (
    <div>
      <Jumbotron>
        <h1>You have arrived.</h1>
        <p>
          Welcome to Microblog, where you'll find the greatest thoughts the
          internet has to offer.
        </p>
      </Jumbotron>
      <div className="mx-4">
        <PostList />
      </div>
    </div>
  );
}

export default Homepage;
