import React from 'react';
import "./HeroImg.css";
import { Link } from 'react-router-dom';
import introImg from "./../../img/banner.jpg"

const HeroImg = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
            <img src={introImg} alt="intro img" className='intro_img'  />
        </div>

        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer</h1>

            <div>
                <Link to="/project" className='btn '>Project</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default HeroImg;
