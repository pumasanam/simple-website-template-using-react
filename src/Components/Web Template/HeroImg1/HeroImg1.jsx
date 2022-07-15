import React from 'react';
import "./HeroImg1.css";

const HeroImg1 = ({heading, text}) => {
  return (
    <>
      <div className="hero_img">
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default HeroImg1;
