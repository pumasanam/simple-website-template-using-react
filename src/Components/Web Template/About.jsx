import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import HeroImg1 from './HeroImg1/HeroImg1';
import AboutList from './About/AboutList';

const About = () => {
  return (
    <>
      <Navbar/>
      <HeroImg1 heading="ABOUT" text="I Am A Friendly Front End Developer"/>
      <AboutList/>
      <Footer/>
    </>
  );
};

export default About;
