import React from 'react';
import './AboutMe.css';
import myimg from './Me.jpg';

const AboutMe = () => {
    return (
        <section id='about' className='about-me'>
            <div className='dib relative pa5 ma2'>
                <h1>About Me</h1>
                    <img className='db fl image' alt='' src={myimg} />
                    <p className='f4 tl text'>
                        My passion for programming began when I was 15 years old with C++, leading me to join our province's RoboCup 2D team. This early experience laid the foundation for my career in technology. I hold a Bachelor's degree in Computer Engineering from BIHE, which, along with my diverse work experience, makes me a skilled developer.
                        <br /><br />As a front-end programmer, I excel in creating seamless and dynamic user interfaces using HTML, CSS, JavaScript, and React. I have successfully completed courses on React and other front-end development skills, which have equipped me with the knowledge to build responsive and user-friendly web applications. Additionally, I have undertaken several projects in this field, further honing my expertise and practical experience.
                        <br /><br />I've also worked as a full stack developer with Node.js and CFML, managing data with Oracle and SQL Server databases. My background as a database administrator and data analyst has strengthened my data management skills.
                        <br /><br />Throughout my career, I've demonstrated strong problem-solving abilities, efficiently troubleshooting and resolving issues, which has been key to my success as a developer.
                    </p>
            </div>
        </section>   
    );
  }

export default AboutMe;