import React from 'react';

import Workcard from '../WorkCard/Workcard';
import WorkCardData from './WorkCardData';


const Work = () => {
  return (
    <>
      <div className="work_container">
        <h1 className='project_Heading'>Projects</h1>
        <div className="project_container">
            {WorkCardData.map((value,index)=>{
                return (
                    <>
                        <Workcard key={index}
                         imgsrc={value.imgsrc}
                         title={value.title}
                         text={value.text}
                         view={value.view}
                         />
                    </>
                );
            })}
        </div>
      </div>
    </>
  );
};

export default Work;
