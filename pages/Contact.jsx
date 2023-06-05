import { BsLinkedin } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-scroll/modules";
//import emailjs from '@emailjs/browser';
import Image from "next/image";
import logo from "../images/Logo052302.png";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gradient-bg-contact min-w-full pt-36" id="Contact">
      <div className="md:flex-[0.5] flex flex-row justify-center items-center">
        <Image src={logo} alt="logo" className="w-12 cursor-pointer" />
        <p className=" text-white draftDigital-gradient pl-3 py-1 mr-[7rem]">
          DRAFT DIGITAL
        </p>
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <div className="flex mf:flex-col flex-col justify-start py-12 px-4 md:p-20 sm:p-10">
          <h1 className="text-8xl  text-white text-gradient pt-4 px-16">
            Let´s
          </h1>
          <h1 className="text-8xl  text-white text-gradient pt-4 px-16">
            connect
          </h1>
          <div className="py-12 px-4 md:p-20 sm:p-10">
            <form
              ref={null}
              onSubmit={null}
              className="flex flex-row gap-4 rounded-md"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-md"
                required
              />
              <button
                type="submit"
                className="bg-[#005d62] py-2 px-7 mx-4  rounded-md cursor-pointer hover:bg-[#2546bd]"
              >
                Request an audit
              </button>
            </form>
          </div>
        </div>

        <div className="flex mf:flex-col flex-col justify-start py-12 px-4 md:p-20 sm:p-10">
          <p className="pb-1">Email Us</p>
          <p className="pb-3">info@draftdigital.org</p>
          <p className="pb-3">Follow us</p>
          <div className="flex flex-row gap-3">
            <a
              href="https://www.linkedin.com/in/aitor-zaldua/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://twitter.com/azdraft_"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="https://github.com/aitorzaldua"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="flex mf:flex-col flex-col justify-start py-12 px-4 md:p-20 sm:p-10">
          <p lassName="pb-3">Navigation</p>
          <ul className="flex flex-col text-white md:flex list-none justify-start">
            <Link
              activeClass="active"
              to="Nav"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
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
              className="cursor-pointer"
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
              className="cursor-pointer"
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
              className="cursor-pointer"
            >
              Check Audits
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-row text-white">
        <small>Draft Digital founded in 2021. &copy; UI Designed with 🤍 by MG. Make the web3 a better place.</small>
      </div>
    </div>
  );
}
