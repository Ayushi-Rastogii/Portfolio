import React from "react";

function Skills({key,source,title}) {


  return (

      <div className="skill-card">
        <img className="card-img-top skill-image   rounded-circle img-fluid mb-2" src={source} alt="Card image cap rounded-circle" />
        <div className="card-body">
          <h5 className="card-title skill-title">{title}</h5>
        </div>
      </div>
  )
}

export default Skills;
