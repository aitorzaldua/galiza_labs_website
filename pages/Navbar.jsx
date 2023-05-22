//import { AiOutlineClose } from "react-icons/ai";
//import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import logo from "../images/Logo052302.png";

/* const NavbarItem = ({ title, classProps }) => {
  return <li className="mx-4 cursor-pointer ${classProps}">{title}</li>;
}; */

export default function Navbar() {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center py-4 pr-24">
      <div className="md:flex-[0.5] flex flex-row flex-initial justify-center items-center pr-24">
        <Image src={logo} alt="logo" className="w-12 cursor-pointer" />
        <p className=" text-white draftDigital-gradient pl-3 py-1">
          DRAFT DIGITAL
        </p>
      </div>
      {/* Nota: en el ul hemos quitado el hidden */}
      <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial px-24">
        <Link
          activeClass="active"
          to="/"
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
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
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
