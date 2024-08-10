import React from 'react';
import './ProjectsLayout.css';

const ProjectsLayout = (props) => {
    return (
        <div className='madiv flex justify-center'>
            <div className='img-wrap'>
                {props.children}
            </div>
        </div> 
    );
  }

export default ProjectsLayout;