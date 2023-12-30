import React from 'react';
import linkedin from "../assets/linkedin.png";
import { insta } from '../assets';

const Feedbacks = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center pb-10">
        <p>Get in touch :-</p>
      <a href="https://www.linkedin.com/in/badhmasharan/" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <img
          src={linkedin}
          alt="LinkedIn"
          className="w-8 h-8 cursor-pointer"
        />
        <span className="ml-2">LinkedIn</span>
      </a>
      <a href="https://www.instagram.com/sharann.07/" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <img
          src={insta}
          alt="Instagram"
          className="w-8 h-8 cursor-pointer"
        />
        <span className="ml-2">Instagram</span>
      </a>
    </div>
  );
};

export default Feedbacks;
