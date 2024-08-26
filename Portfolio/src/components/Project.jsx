import React from "react";

function Project( {source,live,code,title,description,update}){
  return(
  <div className="card">
    <img className="card-img-top" src={source} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text"><small className="text-muted">{update}</small></p>
      
    </div>
     <div className="card-footer bg-transparent border-success">
        <a href={live} className="btn btn-outline-primary me-5" >Live Demo</a>
        <a href={code} className="btn btn-outline-primary ">Source Code</a>

       </div>
  </div>
  )
}
export default Project;