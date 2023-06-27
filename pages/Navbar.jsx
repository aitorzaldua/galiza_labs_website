import Image from "next/image";
import { Link } from "react-scroll/modules";
import logo from "../images/Logos/DDLogo6.png";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({ title, classProps }) => {
  return <li className={"mx-4 cursor-pointer ${classProps}"}>{title}</li>;
};

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className="w-full flex md:justify-center justify-between items-center pt-6"
      id="Nav"
    >
      <div className="md:flex-[0.5] flex flex-row flex-initial justify-start items-center ">
        <Image src={logo} alt="logo" className="w-[12rem]" />
      </div>
      <ul className="text-[#dce0e5] md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {/* This is all the new implementation for mobiles */}
        {["What we Do", "The Process", "Check Audits"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="bg-[#8db9e2] py-2 px-7 mx-4  rounded-md cursor-pointer hover:bg-[#A0AECD] "
        >
          Request an audit
        </Link>
        </ul>

        <div className="flex relative">
          {toggleMenu
            ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/> 
            : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>}
            {toggleMenu && (
              <ul className="z-10 fixed top-0 -right-2 p-3 w-[70w] h-screen shadow-2xl 
              md:hidden list-none flex flex-col justify-start items-end rounded-md 
              blue-glassmorphism text-white animate-slide-in">
                <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)}/>

              </li>
              {["What we Do", "The Process", "Check Audits"].map((item, index) => (
                <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
              ))}
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="bg-[#8db9e2] py-2 px-7 mx-4  rounded-md cursor-pointer hover:bg-[#A0AECD] "
              >
                Request an audit
              </Link>
              </ul>
            )

            }
        </div>

        {/* Till here, the new implementation for mobiles */}

        {/* <Link
          activeClass="active"
          to="Services"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="mx-4 cursor-pointer hover:text-xl hover:menu2"
        >
          What We Do
        </Link>
        <Link
          activeClass="active"
          to="AuditProcess"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="mx-4 cursor-pointer hover:text-xl"
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
          className="mx-4 cursor-pointer hover:text-xl"
        >
          Check Audits
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="bg-[#8db9e2] py-2 px-7 mx-4  rounded-md cursor-pointer hover:bg-[#A0AECD] "
        >
          Request an audit
        </Link> */}

    </nav>
  );
}
