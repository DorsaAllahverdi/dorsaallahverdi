import React from 'react';
import './ProjectsLayout.css';
import htmllogo from '../html5logo.png';
import csslogo from '../css3logo.png';
import jslogo from '../jslogo.png';
import reactlogo from '../reactlogo.png';
import live from '../Vercel.svg';
import git from '../git.png';

const ProjectsLayout = ({projImg, projTitle, projDesc, projLiveUrl, projCodeUrl}) => {
    return (
        <div className='madiv flex justify-center'>
            <div className='img-wrap'>
                <div>
                    <img alt='' src={projImg} />
                    <div className='img-description'>
                        <div className='flex overflow-y-auto flex-column proj-description'>
                            <h3>{projTitle}</h3>
                            <div>
                                <img className='logo-size' alt='' src={htmllogo} />
                                <img className='logo-size' alt='' src={csslogo} />
                                <img className='logo-size' alt='' src={jslogo} />
                                <img className='logo-size' alt='' src={reactlogo} />
                            </div>
                            <div className='tl'>
                                <p>
                                {projDesc}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center code-container h-inherit'>
                            <div className='flex flex-column justify-around code-frame'>
                                <div className='flex flex-column items-center code-ma'>
                                    <button className='code-button'>
                                        <a href={projLiveUrl} target='_self'>
                                            <img className='logo-size' alt='' src={live} />
                                        </a>
                                    </button>
                                    <p>Live</p>
                                </div>
                                <div className='flex flex-column items-center code-ma'>
                                    <button className='code-button'>
                                        <a href={projCodeUrl} target='_self'>
                                            <img className='logo-size' alt='' src={git} /> 
                                        </a>
                                    </button>
                                    <p>Code</p>
                                </div>   
                            </div>             
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
  }

export default ProjectsLayout;