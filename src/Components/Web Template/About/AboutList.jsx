import React from 'react';
import aboutImg from "./../../img/img3.jpg";
import "./AboutList.css";


const AboutList = () => {
  return (
    <>
      <div className="about">
        <div className="about_list">
            <div className="innerabout">
                <h2>Who Am I ?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam unde qui quae nobis incidunt autem cupiditate quis sunt molestiae doloremque suscipit obcaecati tempora laboriosam, laudantium fuga alias ipsum. Molestiae, labore sunt? Deleniti fuga assumenda doloremque qui, suscipit ipsum animi veritatis ipsam cum hic. Reprehenderit, harum dolor. Minus harum consequuntur impedit!</p>
            </div>

            <div className="about_img">
                <img src={aboutImg} alt="about_img" />
            </div>
        </div>
      </div>
    </>
  );
};

export default AboutList;
