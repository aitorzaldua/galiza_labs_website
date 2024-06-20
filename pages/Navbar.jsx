import Image from "next/image";
import { Link } from "react-scroll/modules";
import logo from "../images/Logos/galizaLabsLogoTemp.png";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const Menu = () => (
    <>
      <div>
        <a
          href="#Services"
          className="px-4 md:font-bold tablet:font-light font-light relative w-max two"
        >
          <span>Services</span>
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#046bf1]"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#046bf1]"></span>
        </a>
      </div>
      <div>
        <a
          href="#AuditProcess"
          className="px-4 pt-6 md:font-bold tablet:font-light font-light relative w-max two"
        >
          <span>Methodology</span>
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#046bf1]"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#046bf1]"></span>
        </a>
      </div>
      <div>
        <a
          href="#Audits"
          offset={400}
          className="px-4 md:font-bold tablet:font-light font-light relative w-max two"
        >
          <span>Audits</span>
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#046bf1]"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#046bf1]"></span>
        </a>
      </div>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className="w-full flex md:justify-center tablet:justify-between justify-between items-center pt-6 md:gap-2 2xl:gap-4"
      id="Nav"
    >
      <div className="flex flex-initial justify-start items-center md:pr-56 2xl:pr-64 tablet:pr-0">
        <Image src={logo} alt="logo" className="w-[9rem]" />
      </div>

      <div className="text-[#8db9e2] md:flex tablet:hidden hidden list-none flex-row justify-between items-center flex-initial md:pl-32 2xl:pl-56 tablet:pl-0">
        <Menu className="text-[#8db9e2] md:flex tablet:hidden hidden list-none flex-row justify-between items-center flex-initial" />
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="bg-[#1a4b61] py-2 px-7 mx-4  rounded-md cursor-pointer hover:bg-[#046bf1] font-bold"
        >
          Request an audit
        </Link>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenu
            fontSize={28}
            className="text-[#8db9e2] md:hidden tablet:flex cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-[#8db9e2] md:hidden tablet:flex cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] gap-5 h-screen shadow-2xl md:hidden tablet:flex list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-[#8db9e2] animate-slide-in"
          >
            <div className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </div>
            <Menu />
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="bg-[#1a4b61] py-2 px-7 mx-4  my-4 rounded-md cursor-pointer font-light  hover:bg-[#A0AECD] "
            >
              Request an audit
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
}
