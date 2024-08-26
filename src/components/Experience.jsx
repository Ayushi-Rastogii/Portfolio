import React from 'react'; 

function Experience ({ source, startDate, endDate, role, location,experiences, organisation }) {
  return(
  
<div className="experiences-card">
  <img src={source} className="card-img-top ex-imgs" alt="Organisation"/>
  <div className="card-body">
    <h4 className="card-title">{role},</h4><h5>{organisation}, {location}</h5>
    <ul className='lists-style'>
    <li className="card-text">{experiences[0]}</li>

    <li className="card-text">{experiences[1]}</li>

    <li className="card-text">{experiences[2]}</li>
    </ul>
<div className="card-footer text-body-secondary">{startDate}-{endDate}
      </div>
  </div>
</div>


  )}
//   const isOdd = key % 2 !== 0;
  
//   return (
//     <div className={`experience-card ${isOdd ? 'odd' : 'even'}`}>
//       <div className={`experience-content ${isOdd ? 'content-left' : 'content-right'}`}>
//         <img src={Image} alt="Experience" className="experience-image" />
//         <div className="experience-details">
//           <h3>{Role}</h3>
//           <p>{startdate} - {enddate}</p>
//           <p>{location}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Experience;

