import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function NavComponent() {
    const auth = useAuth()
    const navigate = useNavigate()

    const signout = () => {
        auth.signout(() => {
            navigate('/login')
        })
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Giphy App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                        <Nav.Link as={Link} to="/saved">Saved</Nav.Link>
                        {auth.user 
                            ? <Nav.Link as={Link} onClick={signout}>Log Out</Nav.Link>
                            : <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComponent