import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from '../logo2.webp'
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home" >
          <img
              src={logo2}
              width="200"
              height="60" 
              className="d-inline-block align-top" 
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link href="#home" className='active'>Inicio</Nav.Link> 
            <Nav.Link href="#features" className='active'>Productos</Nav.Link>
            <Nav.Link href="#pricing" className='active'>Nosotros</Nav.Link>
          </Nav>
          <CartWidget className="justify-content-end" />
        </Container>
      </Navbar>
  
    );
}
export default NavBar;