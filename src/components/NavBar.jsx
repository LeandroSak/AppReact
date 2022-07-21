import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from '../logo2.webp'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar bg="warning" variant="light" style={{ marginBottom: "20px" }}>
      <Container>
        <Navbar.Brand >
          <Link to={"/"}>
            <img
              src={logo2}
              width="200"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Nav className="justify-content-center">
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Todos los productos</NavDropdown.Item>
            <NavDropdown.Item href="/category/Game Boy">Game Boy</NavDropdown.Item>
            <NavDropdown.Item href="/category/Game Boy Color">Game Boy Color</NavDropdown.Item>
            <NavDropdown.Item href="/category/Game Boy Advance">Game Boy Advance</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget className="justify-content-end" />
      </Container>
    </Navbar>

  );
}
export default NavBar; 