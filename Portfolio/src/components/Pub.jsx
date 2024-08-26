import React from 'react';
import '../SCSS/custom.scss'; // Assuming you have styles defined here
import '../SCSS/custom.scss'
const Pub = ({ link, text }) => {
  return (
    <div className="publication-link">
      <a className='text-decoration-none'
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
};

export default Pub;