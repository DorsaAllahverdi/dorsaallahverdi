import React, { useState } from 'react';
import FooterImg from './FooterImg.svg';
import GitPurple from './LogoIcons/github-purple.png';
import GitBlack from './LogoIcons/github-black.png';
import InPurple from './LogoIcons/linkedin-purple.png';
import InBlack from './LogoIcons/linkedin-black.png';
import MailBlack from './LogoIcons/mail-black.jpg';
import MailPurple from './LogoIcons/mail-purple.jpg';
import TelegramBlack from './LogoIcons/telegram-black.png';
import TelegramPurple from './LogoIcons/telegram-purple.png';
import SkypeBlack from './LogoIcons/skype-black.jpg';
import SkypePurple from './LogoIcons/skype-purple.jpg';
import './ContactMe.css';

const ContactMe = () => {
    const [InOver, setInOver] = useState(false);
    const [GitOver, setGitOver] = useState(false);
    const [MailOver, setMailOver] = useState(false);
    const [TelegramOver, setTelegramOver] = useState(false);
    const [SkypeOver, setSkypeOver] = useState(false);
    return (
        <section id='contact' className='about-me'>
            <img alt='' src={FooterImg} />
            <div className='dib relative pa5 ma4'>          
                <h1 className='text pa2'>Contact Me</h1>
                <p className='f4 text pa2'>
                I'm a passionate front-end developer with a keen eye for detail and a love for creating seamless user experiences. Whether you're looking for a full-time developer to join your team or need someone to tackle exciting projects, I'm here to help. Feel free to reach out to me for collaboration opportunities, project inquiries, or just to connect. Let's build something amazing together!
                </p>
                <div className='flex justify-center pa2'>
                    <button className='dib relative ma1 items-center bg-inherit'>
                        <a href="https://www.linkedin.com/in/dorsa-allahverdi-front-end-developer" target="_blank">
                            <div
                            onMouseOver={() => setInOver(true)}
                            onMouseOut={() => setInOver(false)}
                            >
                                <img className='contactIcons br3' alt='linkedIn'
                                src={InOver ? InBlack : InPurple}
                                />
                            </div>
                        </a>
                    </button>
                    <button className='dib relative ma1 items-center bg-inherit'>
                        <a href="https://github.com/DorsaAllahverdi" target="_blank">
                            <div
                            onMouseOver={() => setGitOver(true)}
                            onMouseOut={() => setGitOver(false)}
                            >
                                <img className='contactIcons br3' alt='git'
                                src={GitOver ? GitBlack : GitPurple}
                                />
                            </div>
                        </a>
                    </button>
                    <button className='dib relative ma1 items-center bg-inherit'>
                        <a href="mailto:allahverdi.dorsa@gmail.com" target="_blank">
                            <div
                            onMouseOver={() => setMailOver(true)}
                            onMouseOut={() => setMailOver(false)}
                            >
                                <img className='contactIcons br3' alt='Mail'
                                src={MailOver ? MailBlack : MailPurple}
                                />
                            </div>
                        </a>
                    </button>
                    <button className='dib relative ma1 items-center bg-inherit'>
                        <a href="https://join.skype.com/invite/abQSvg5m8FOJ" target="_blank">
                            <div
                            onMouseOver={() => setSkypeOver(true)}
                            onMouseOut={() => setSkypeOver(false)}
                            >
                                <img className='contactIcons br3' alt='Skype'
                                src={SkypeOver ? SkypeBlack : SkypePurple}
                                />
                            </div>
                        </a>
                    </button>
                    <button className='dib relative ma1 items-center bg-inherit'>
                        <a href="https://t.me/DAllahverdi" target="_blank">
                            <div
                            onMouseOver={() => setTelegramOver(true)}
                            onMouseOut={() => setTelegramOver(false)}
                            >
                                <img className='contactIcons br3' alt='Telegram'
                                src={TelegramOver ? TelegramBlack : TelegramPurple}
                                />
                            </div>
                        </a>
                    </button>
                </div>
            </div>
        </section>   
    );
  }

export default ContactMe;