import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavComponent({ user }) {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand  to="/">My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>About Me</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                        {user 
                            ? <Nav.Link>Log Out</Nav.Link>
                            : <Nav.Link>Log In</Nav.Link>
                        }
                    </Nav>
          
                    <Navbar.Text className="justify-content-end">
                        Signed in as: {user.username}
                    </Navbar.Text>

                </Navbar.Collapse>
             
            </Container>
        </Navbar>
    )
}

export default NavComponent