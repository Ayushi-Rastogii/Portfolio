import React from "react";
import AboutImg from '/images/About_me.jpg'
import '../SCSS/custom.scss'; 
function AboutSection()
{
  return(
    <div className="bg-dark text-light py-5" id='about'>
      <div className="container">
        <div className="flex-column-reverse flex-md-row row">
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
            <img src={AboutImg} alt="Me" className='about-me-image' />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>About <span className="text-primary">Me</span> </h2>
            <p className="text-start">Hello! I'm a passionate full-stack developer with a recent focus on the MERN stack (MongoDB, Express.js, React.js, and Node.js). My journey into the world of web development has been both exciting and fulfilling as I've worked on creating dynamic and interactive applications.<br></br>
            <br></br>

Before diving into full-stack development, I had the opportunity to work as a Research Assistant at IIT Kharagpur, where I was involved in the "Design and Implementation of Searchable Symmetric Encryption" project . This experience honed my problem-solving skills and deepened my understanding of complex algorithms and data security.
<br></br>
<br></br>
My transition into full-stack development allowed me to bring my analytical and research skills into the realm of web technologies, and I am eager to build innovative and user-friendly applications. I thrive on challenges and am constantly seeking opportunities to learn and grow in this ever-evolving field.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutSection;