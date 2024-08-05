import React from 'react';

const AppHeader = () => {
    return (
        <header id='home' className="App-header flex">
            <div className='ma5'>
                <h1 className='f1 tl'>
                    Hi, my name is <span className='gradient-font-color'>Dorsa Allahverdi</span>.
                    <br />I'm the Front-End Developer you need!
                </h1>
                <p className='flex'>
                    <a href='#about' className='no-underline pa3 ba f3 gradient-font-color gradient-border-color'>Discover My Journey</a>
                </p>
            </div>
        </header>
    );
  }

export default AppHeader;