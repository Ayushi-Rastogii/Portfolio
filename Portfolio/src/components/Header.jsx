import React from "react";
import headerImg from "/images/header.jpg";
import { Image } from 'react-bootstrap';
import resume from './pdf/resume.pdf';

function Header() {
  return (
    <header className="pt-5" id='header'>
      <div className="container py-md-5 ar">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
            <h4 className="text-secondary fw-bold">Ayushi Rastogi</h4>
            <h2 className="text-capitalize text-start text-primary mb-5">Software Developer</h2>
            <a href={resume} download="AR_resume.pdf" className="btn btn-outline-primary"> Download Resume</a>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end liquid-container">
            <Image className="img-fluid custom-image liquid-image rounded-circle shadow my-5" src={headerImg} alt="header_image" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
