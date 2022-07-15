import React from 'react';
import "./ContactList.css";

const ContactList = () => {
  return (
    <>
     <div className="contact">
        <h1>Contact Us</h1>
        <form action="">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='PassWord' />
            <button>Submit</button>
        </form>
     </div>
    </>
  );
};

export default ContactList;
