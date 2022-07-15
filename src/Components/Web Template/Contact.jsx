import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import HeroImg1 from './HeroImg1/HeroImg1';
import ContactList from './Contact/ContactList';
const Contact = () => {
  return (
    <>
      <Navbar/>
      <HeroImg1 heading="CONTACT" text="Let's Have A Chat"/>
      <ContactList/>
      <Footer/>
    </>
  );
};

export default Contact;
