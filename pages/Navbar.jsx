//import { AiOutlineClose } from "react-icons/ai";
//import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";

import logo from "../images/Logo052302.png";

/* const NavbarItem = ({ title, classProps }) => {
  return <li className="mx-4 cursor-pointer ${classProps}">{title}</li>;
}; */

export default function Navbar() {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center py-4 pr-8">
      <div className="md:flex-[0.5] flex flex-row flex-initial justify-center items-center">
        <Image src={logo} alt="logo" className="w-12 cursor-pointer" />
        <p className=" text-white draftDigital-gradient pl-3 py-1">DRAFT DIGITAL</p>
      </div>
      {/* Nota: en el ul hemos quitado el hidden */}
      <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">What We do</li>
        <li className="mx-4 cursor-pointer">The Audit Process</li>
        <li className="mx-4 cursor-pointer">University</li>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Request an audit
        </li>
      </ul>
    </nav>
  );
}
