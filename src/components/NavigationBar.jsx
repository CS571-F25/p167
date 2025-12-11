import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" aria-label="Music Festival Home">Music Festival</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation menu" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" aria-label="Navigate to home page">Home</Nav.Link>
            <Nav.Link as={Link} to="/artists" aria-label="Navigate to artists page">Artists</Nav.Link>
            <Nav.Link as={Link} to="/cart" aria-label="Navigate to shopping cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

