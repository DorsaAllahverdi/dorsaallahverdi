import React from 'react';
import './Projects.css';

const Projects = (props) => {
    return (
        <section id='projects' className='projects'>
            <div className='pa2 ma5'>
                <h1>My Projects</h1>
                <div className='project-list'>
                    {props.children}
                </div>
            </div>
        </section>   
    );
  }

export default Projects;