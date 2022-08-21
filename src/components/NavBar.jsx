import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from '../logo2.webp'
import CartWidget from './CartWidget';
import { Link, NavLink} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/style.css"

const NavBar = () => {
  return (<>
    <Navbar  expand="lg" style={{ marginBottom: "20px" , background:"#2DC3FF"}}>
    <Container >
        <Navbar.Brand >

          <Link to={"/"}>
            <img
              src={logo2}
              width="210"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center" >
          <Nav>
            <NavDropdown title="Productos"  id="nav-dropdown" >
              <NavDropdown.Item ><Link to={"/"} className="linkNav">Todos los productos</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"category/Game Boy"} className="linkNav">Game Boy</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"category/Game Boy Color"} className="linkNav">Game Boy Color</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"category/Game Boy Advance"} className="linkNav">Game Boy Advance</Link></NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link ><Link to={"/searchorder"} className="linkNav">Buscar Orden</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
          <CartWidget />
        
      </Container>
    </Navbar>

    {/*<Navbar bg="warning" variant="light" style={{ marginBottom: "20px" }}>
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center" >
          <Nav >
            <NavDropdown title="Productos" id="basic-nav-dropdown" style={{ textDecoration: "none", color: "black" }}>
              <NavDropdown.Item ><Link to={"/"} style={{ textDecoration: "none", color: "black" }}>Todos los productos</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"category/Game Boy"} style={{ textDecoration: "none", color: "black" }}>Game Boy</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"category/Game Boy Color"} style={{ textDecoration: "none", color: "black" }}>Game Boy Color</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"category/Game Boy Advance"} style={{ textDecoration: "none", color: "black" }}>Game Boy Advance</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to={"/"} >Buscar Orden </Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
          <CartWidget />
        
      </Container>
  </Navbar >*/}

    </>);
}
export default NavBar; 