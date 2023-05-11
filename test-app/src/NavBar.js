import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

import { useUser } from './contexts/userContext';

function NavBar() {
  const auth = useUser()

  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Northern Trust</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/todo-list'>To Do List</Nav.Link>
            <Nav.Link as={Link} to='/counter'>Counter</Nav.Link>
            <Nav.Link as={Link} to='/memo-counter'>Memo Counter</Nav.Link>
            <Nav.Link as={Link} to='/ref-counter'>Ref Counter</Nav.Link>
            <Nav.Link as={Link} to='/controlled-form'>Controlled Form</Nav.Link>
            <Nav.Link as={Link} to='/jeopardy'>Jeopardy</Nav.Link>
            <Nav.Link as={Link} to='/redux-counter'>Redux Counter</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          </Nav>
          {auth.user && `Welcome, ${auth.user.username}`}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;