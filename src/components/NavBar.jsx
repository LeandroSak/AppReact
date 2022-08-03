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
      <Container >
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
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center" >
          <Nav >
            <NavDropdown title="Productos" id="basic-nav-dropdown" >
              <NavDropdown.Item ><Link to={"category/Game Boy"} style={{textDecoration:"none", color:"black"}}>Game Boy</Link>
                </NavDropdown.Item>
              <NavDropdown.Item ><Link to={"category/Game Boy Color"} style={{textDecoration:"none", color:"black"}}>Game Boy Color</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"category/Game Boy Advance"} style={{textDecoration:"none", color:"black"}}>Game Boy Advance</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar >

  );
}
export default NavBar; 