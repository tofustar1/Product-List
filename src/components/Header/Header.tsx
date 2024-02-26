import React from 'react';
import {Container, Navbar} from "react-bootstrap";

const Header = () => {
  return (
      <Navbar className="bg-dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Product List</Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default Header;