import React from "react";
import Experience from "./Experience";
import data from './data/experience.json';

function ExperienceSection()
{
  return (
    <div className="experience-container" id="experience">
      <h2 className='text-primary'>EXPER<span className="text-dark">IENCE</span></h2>
    <div className="experience-containers" id="experience">
      <div className="experience-cards">
      {data.map((experience,id) => (
        <div key={experience.id}>
        <Experience
          source={experience.imageSrc}
          role={experience.role}
          organisation={experience.organisation}
          startDate={experience.startDate}
          endDate={experience.endDate}
          location={experience.location}
          experiences={experience.experiences}
        />
        </div>

      ))}
    </div>
    </div>
    </div>
  )

}
export default ExperienceSection;