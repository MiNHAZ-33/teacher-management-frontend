import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to={'/'} className="navbar-brand">Teacher Management</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to={'/billrate'} className="nav-link">Bill Rate</Link>
                        </Nav>
                        <Nav>
                            <Link to={'/billing'} className="nav-link">Billing</Link>
                        </Nav>
                        <Nav>
                            <Link to={'/login'} className="nav-link">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;  