import {BsLinkedin} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';
import { Link } from "react-scroll/modules";
//import emailjs from '@emailjs/browser';




export default function Contact() {
  return (
    <div className="flex flex-row w-full justify-center items-center gradient-bg-contact" id="Contact">
      <div className="flex mf:flex-row flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2">
            Let´s Connect
          </h1>
        </div>
      </div>

      <div className="flex mf:flex-col flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">

        <form ref={null} onSubmit={null} className="flex flex-col  justify-start items-center white-glassmorphism p-3 m-2 gap-4 hover:shadow-xl hover:bg-[#383f51]">
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='bg-[#005d62] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>Request an audit</button>
        </form>
      </div>
      <div className="flex mf:flex-col flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">
        <p>Email Us</p>
        <p>info@draftdigital.org</p>
        <p>Follow us</p>
        <a href='https://www.linkedin.com/in/aitor-zaldua/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://twitter.com/azdraft_' target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
        <a href='https://github.com/aitorzaldua' target="_blank" rel="noreferrer"><BsGithub/></a>
      </div>
      <div className="flex mf:flex-col flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">
        <p>Navigation</p>
      <ul className="flex flex-col text-white md:flex list-none justify-between items-center flex-initial">
        <Link
          activeClass="active"
          to="Nav"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="mx-4 cursor-pointer"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Services"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="mx-4 cursor-pointer"
        >
          What We Do
        </Link>
        <Link
          activeClass="active"
          to="AuditProcess"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="mx-4 cursor-pointer"
        >
          The Process
        </Link>
        <Link
          activeClass="active"
          to="Audits"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="mx-4 cursor-pointer"
        >
          Check Audits
        </Link>
      </ul>
      </div>
      <div className="text-white">
      <small >&copy; Designed with 🤍 by MG</small>
    </div>

    </div>
  );
}
