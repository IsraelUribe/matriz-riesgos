import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ptar from './Ptar';
function NavBarMatriz() {
  return (
    <>
      {/*<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  <br />*/}
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home" className='pl-10 m-10'>ITESHU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav>
                <Nav.Link href="/MapaRiesgos">Mapa de Riesgos</Nav.Link>
                <Nav.Link href="/Ptar">PTAR</Nav.Link>
                <Nav.Link href="/Avance">Avance</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
      </Navbar>

      <br />
      {/*
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
</Navbar>*/}
    </>
  );
}

export default NavBarMatriz;