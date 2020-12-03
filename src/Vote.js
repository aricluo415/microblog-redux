import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateVoteApi } from "./reducers/actionCreators";

function Vote({ post, type }) {
  const dispatch = useDispatch();

  async function handleClick(direction) {
    await dispatch(updateVoteApi(post.id, direction, type));
  }
  return (
    <div>
      {post.votes} votes
      <Button
        className="mx-2"
        onClick={() => handleClick("up")}
        variant="danger"
        size="sm"
      >
        <i className="fas fa-fire"></i>
      </Button>
      <Button onClick={() => handleClick("down")} variant="dark" size="sm">
        <i className="fas fa-poo"></i>
      </Button>
    </div>
  );
}

export default Vote;
