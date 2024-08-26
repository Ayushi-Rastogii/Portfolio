import React from "react";
import Project from "./Project";
import projectData from "./data/Project.json"; // Adjust the path if necessary

function ProjectSection() {
  return (
    <div className="project-container" id="projects">
      <h2 className="text-primary">Pro<span className="text-dark">jects</span></h2>
      {projectData.map((project, id) => (
        <Project
          key={id}
          source={project.source}
          live={project.live}
          code={project.code}
          update={project.update}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectSection;
