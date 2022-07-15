import React from 'react';
import "./Workcard.css";
// import pro1 from "./../../img/img.jpg";
import { NavLink } from 'react-router-dom';


const Workcard = (props) => {
  return (
    <>
      <div className="project_card">
                <img src={props.imgsrc} alt="code" />
                <h2 className='project_Title'>{props.title}</h2>
                <div className="pro_details">
                    <p>{props.text}</p>

                    <div className="pro_btn">
                        <NavLink to={props.view} className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
    </>
  );
};

export default Workcard;
