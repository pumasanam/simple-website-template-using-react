import React from 'react';
import Navbar from './Navbar/Navbar';
import HeroImg from './HeroImg/HeroImg';
import Footer from './Footer/Footer';
import Work from './Work/Work';

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <Footer/>
    </>
  );
};

export default Home;
