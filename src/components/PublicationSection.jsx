
import React from 'react';
import '../SCSS/custom.scss'; // Assuming you have styles defined here
import Pub from './Pub';
const Publications = () => {
  return (
    <div className='pub-outer'>
      <h3 className='text-primary'>Publi<span className='text-dark' >cations</span> </h3>

    <div className="publications-container" id="publication">
      
        <div className="flex-column-reverse flex-md-row row">
{/* Font Awesome Google Scholar icon */}
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">

       <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="250" /* Adjust width and height as needed */
          height="250"
          fill="#4285f4" /* Optional: Set color */
        >
          <path d="M390.9 298.5c0 0 0 .1 .1 .1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64h0c1.7-3.6 3.6-7.2 5.6-10.7c4.4-7.6 9.4-14.7 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7 256 0 512 202.7l-94.7 77.1z"/>
        </svg>
        
          </div>

     
      <div className="col-md-6 d-flex flex-column justify-content-left">
                           

        <Pub link="https://petsymposium.org/popets/2023/popets-2023-0008.php" text=" Bag, Arnab, Debadrita Talapatra, Ayushi Rastogi, Sikhar Patranabis, and Debdeep Mukhopadhyay. 'Two-in-one-sse: Fast, scalable and storage-efficient searchable symmetric encryption for conjunctive and disjunctive boolean queries.' Proceedings on Privacy Enhancing Technologies (2023)."></Pub>
        <Pub link="https://petsymposium.org/popets/2023/popets-2023-0008.php" text="Upasana Mandal, Shubhi Shukla, Ayushi Rastogi, Sarani Bhattacharya, and Debdeep Mukhopadhyay. 'µLAM: A LLM-Powered Assistant for Real-Time Micro-architectural Attack Detection and Mitigation.' In 2024 IEEE/ACM International Conference on Computer-Aided Design (ICCAD), pp. 1-6. IEEE, 2024."></Pub>
         </div>
      </div>
    </div>
    </div>
  );
};

export default Publications;
