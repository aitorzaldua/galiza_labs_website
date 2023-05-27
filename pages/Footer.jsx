import React from 'react';


import {BsLinkedin} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';

const Footer = () => {
  return (
    <section id='footer' className='footer'>
      <a href='#header' className='footer__logo'>Draft Digital</a>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        {/* <li><a href='#experience'>Experience</a></li> */}
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#blog'>Blog</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

    <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/aitor-zaldua/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href='https://twitter.com/azdraft_' target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
      <a href='https://github.com/aitorzaldua' target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; Designed with 🤍 by MG</small>
    </div>


    </section>
  )
}

export default Footer;