import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navbar tl pa3'>
            <a href='#home' className='no-underline pa3'>Home</a>
            <a href='#about' className='no-underline pa3'>About Me</a>
        </div> 
    );
  }

export default Navigation;