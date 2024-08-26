import React, { useState } from 'react';
import projectData from './data/Skills.json'; 
import Skills from './Skills';



function SkillSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 10; // Number of items to show per slide

  // Handle next and previous button clicks
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, projectData.length - itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  return (
    <div className="skill-container p-4 position-relative" id="skills">
      <h2 className="text-light mb-4">Skills</h2>
      <div className="d-flex align-items-center justify-content-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="btn btn-outline-primary position-absolute p-3 border-2"
          style={{ left: 0, zIndex: 1 }}
          disabled={currentIndex === 0}
        >
          &#8249; {/* Left Arrow */}
        </button>
        
        <div className="row g-0 w-100 mx-1"> 
         {projectData.slice(currentIndex, currentIndex + itemsPerPage).map((project, id) => (
            <div className="col justify-content-center d-flex" key={id}>
              <Skills source={project.source} title={project.name} />
            </div>
          ))}
        </div>
        
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="btn btn-outline-primary position-absolute p-3 border-2 "
          style={{ right: 0, zIndex: 1 }}
          disabled={currentIndex >= projectData.length - itemsPerPage}
        >
          &#8250; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
}

export default SkillSection;
