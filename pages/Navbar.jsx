//import { AiOutlineClose } from "react-icons/ai";
//import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import logo from "../images/DDLogo2.png";

/* const NavbarItem = ({ title, classProps }) => {
  return <li className="mx-4 cursor-pointer ${classProps}">{title}</li>;
}; */

export default function Navbar() {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center pt-6" id="Nav">
      <div className="md:flex-[0.5] flex flex-row flex-initial justify-start items-center ">
        <Image src={logo} alt="logo" className="w-[10rem]" />
        {/* <p className=" text-[#2a68a2] py-1 mr-[7rem]">
          draft digital
        </p> */}
      </div>
      {/* Nota: en el ul hemos quitado el hidden */}
      <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
        <Link
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
          offset={0}
          duration={500}
          className="bg-[#8db9e2] py-2 px-7 mx-4  rounded-md cursor-pointer hover:bg-[#A0AECD] "
        >
          Request an audit
        </Link>

        {/* <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">What We do</li>
        <li className="mx-4 cursor-pointer">The Audit Process</li>
        <li className="mx-4 cursor-pointer">University</li>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Request an audit
        </li> */}
      </ul>
    </nav>
  );
}
