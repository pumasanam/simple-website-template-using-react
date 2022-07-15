import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import HeroImg1 from './HeroImg1/HeroImg1';
// import Workcard from './WorkCard/Workcard';
import Pricing from './Pricing Card/Pricing';
import Work from './Work/Work';

const Project = () => {
  return (
    <>
     <Navbar/>
     <HeroImg1 heading="PROJECTS." text="Some of my recent works"/>
     <Work/>
     <Pricing/>
     <Footer/>
     
    </>
  );
};

export default Project;
