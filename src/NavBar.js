import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="ml-2" as={Link} to="/">
          🦉 Microblog
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/new">
            New Post
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
