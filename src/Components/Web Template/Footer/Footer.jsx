import React from 'react';
import "./Footer.css";
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLink} from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>

                    <div>
                        <p>123 Housing Society.</p>
                        <p>Bangladesh.</p>
                    </div>
                </div>

               

                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        1-123123-123123
                    </h4>
                </div>

                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        info@gmail.com
                    </h4>
                </div>
            </div>
            {/* right section is here */}
            <div className="right">
                    <h4>About The Company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a animi repellendus ex ea.</p>

                    <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>

                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>


                    <FaLink size={30} style={{color:"#fff", marginRight:"1rem"}}/>

                    </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
