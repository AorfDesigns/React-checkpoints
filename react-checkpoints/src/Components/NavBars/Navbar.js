import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Navigationbar() {
  return (
    <>
    {/*Navbar Design */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='nav-Brand'>AORF Designs</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">My Portfolio</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Button variant="primary">Get Started</Button>
        </Container>
      </Navbar>
    
     
    </>
  );
}

export default Navigationbar;