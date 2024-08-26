import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavBar(){
  return(
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
// <a class="navbar-brand" href="#">Navbar</a>
// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//   <span class="navbar-toggler-icon"></span>
// </button>
// <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//   <div class="navbar-nav">
//     <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
//     <a class="nav-item nav-link" href="#">Features</a>
//     <a class="nav-item nav-link" href="#">Pricing</a>
//     <a class="nav-item nav-link disabled" href="#">Disabled</a>
//   </div>
// </div>
// </nav>
    <Navbar expand='lg' className="bg-dark w-100 fixed-top z-1 navbar-light " data-bs-theme='light'>
      <Container>
        <Navbar.Brand href="#" className="fs-4 text-white"> Ayushi <span className="text-primary">Rastogi</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-navbar-toggler">
        <span className="custom-navbar-toggler-icon navbar-toggler-icon"></span>
      </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mc-auto w-100 d-flex justify-content-end">
            <Nav.Link href="#header" className="text-white" >Home</Nav.Link>
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
            <Nav.Link href="#experience" className="text-white">Work Experience</Nav.Link>
            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
            <Nav.Link href="#publication" className="text-white">Publications</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default NavBar;