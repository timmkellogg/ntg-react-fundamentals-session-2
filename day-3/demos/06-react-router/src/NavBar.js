import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Northern Trust</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/todo-list'>To Do List</Nav.Link>
            <Nav.Link as={Link} to='/counter'>Counter</Nav.Link>
            <Nav.Link as={Link} to='/controlled-form'>Controlled Form</Nav.Link>
            <Nav.Link as={Link} to='/jeopardy'>Jeopardy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;