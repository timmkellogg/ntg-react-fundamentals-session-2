import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from './contexts/authContext'

function NavBar() {
  const auth = useAuth()
  const navigate = useNavigate()

  const signout = () => {
    auth.signout(() => {
      navigate('/login')
    })
  }

  return (
    <Navbar expand="lg" className='new-class' variant="dark">
      <Container>
        <Navbar.Brand href="#home">Northern Trust</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to='/todo-list' as={Link}>To Do List</Nav.Link>
            <Nav.Link to='/jeopardy' as={Link}>Jeopardy</Nav.Link>
            {auth.user 
            ? <Nav.Link onClick={signout} as={Link}>Log out</Nav.Link>
            : <Nav.Link to='/login' as={Link}>Log in</Nav.Link>
            }
            
            {auth.user && `Welcome, ${auth.user.username}` }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;