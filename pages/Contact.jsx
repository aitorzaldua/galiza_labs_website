import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { Link } from "react-scroll/modules";
import Image from "next/image";
import Logo from "../images/Logos/logoFooter.png";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6jpfh8l",
      "template_wxm06id",
      form.current,
      "QwiFEJA8fMbHMfnSL"
    );

    e.target.reset();
  };

  return (
    <div
      className="flex flex-col w-full justify-center items-center gradient-bg-welcome 2xl:pt-8 pt-10 2xl:px-[4rem]"
      id="Contact"
    >
      <p className="md:text-6xl text-3xl text-gradient pb-4 px-16 font-light">
        Request an Audit
      </p>
      <p className="md:text-xl text-[#8db9e2] md:w-[62rem] w-[24rem] 2xl:pb-24 pb-16 pt-6 md:pl-0 pl-4 font-light">
        Or simply get in touch and let us know how we can help you and your
        business. From a simple free consultation to a full audit, your project
        will definitely be safer.
      </p>
      <div className="flex flex-row w-full justify-center items-center">
        {/* Right Side */}
        <div className="justify-start">
          <div className="md:flex hidden flex-initial  justify-center items-center 2xl:pt-0 md:pr-4 2xl:pr-0">
            <Image src={Logo} alt="Logo" height={400} />
          </div>
        </div>

        {/* Left Side */}

        <div className="flex flex-col 2xl:pt-0 2xl:pl-16">
          {/* Email us and Sitemap */}
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col justify-start pl-20 pr-12">
              <p className="md:flex text-[#a1acba] pb-1">Email Us</p>
              <p className="text-[#8db9e2] pb-3 md:pr-0 pr-8 font-light">
                info@draftdigital.org
              </p>
              <p className="flex flex-col text-[#a1acba] pt-8 pb-3">
                Follow us
              </p>
              <div className="text-[#8db9e2] flex flex-row gap-3">
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
                <a
                  href="https://medium.com/@aitorzaldua"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsMedium />
                </a>
              </div>
            </div>

            <div className="md:flex hidden flex-col justify-center pl-28">
              <p className="pb-3 text-[#a1acba]">Sitemap</p>
              <ul className="flex flex-col text-[#8db9e2] gap-1 md:flex list-none justify-start font-light">
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
                  Services
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
                  Methodology
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
                  Audits
                </Link>
              </ul>
            </div>
          </div>
          <div className="px-4 pl-20 pr-11 2xl:pt-32 md:pt-20 pt-12">
            <p className="text-[#a1acba] font-light pb-4">
              Let us know your email address and we will contact you.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex md:flex-row flex-col md:gap-4 gap-2 rounded-md md:w-[30rem] w-[16rem]"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-md pl-6"
                required
              />
              <button
                type="submit"
                className="bg-[#8db9e2] py-2 px-7 md:mx-4  rounded-md cursor-pointer hover:bg-[#A0AECD] "
              >
                Request an audit
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer class="footer-section 2xl:pt-16 md:pt-5">
        {/* The line! */}
        <div class="footer-cta pt-5 pb-5"></div>
        {/* Till here the line */}
        <div className="md:flex flex-row md:gap-56 text-[#8db9e2] font-light md:text-base text-[0.6rem] p-4">
          <small>Draft Digital founded in 2021.</small>
          <small className="md:pl-0 pl-4">
            &copy; UI Designed with 🩵 by MG.
          </small>
          <small className="md:flex hidden">
            Make the web3 a better place.
          </small>
        </div>
      </footer>
    </div>
  );
}
