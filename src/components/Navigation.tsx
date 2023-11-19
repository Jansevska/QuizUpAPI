import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

type HeaderProps = {
    isLoggedIn: boolean
    handleLogOut: ()=>void
}

export default function Header({ isLoggedIn, handleLogOut }: HeaderProps) {

    return (
        <Navbar expand="lg" className="bg-body-dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Quiz Up API</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/questions'>Questions</Nav.Link>
                    { isLoggedIn ? (
                            <Nav.Link as={Link} to="/" onClick={handleLogOut}>Logout</Nav.Link>
                    ):(
                        <>
                            <Nav.Link as={Link} to="login">Log In</Nav.Link>
                            <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>
                        </>
                        )}
                </Nav>
            </Container>
        </Navbar>
    );
}