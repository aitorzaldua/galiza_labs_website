//import { AiOutlineClose } from "react-icons/ai";
//import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";

import logo from "../images/DraftDigitalLogo.png";

/* const NavbarItem = ({ title, classProps }) => {
  return <li className="mx-4 cursor-pointer ${classProps}">{title}</li>;
}; */

export default function Navbar() {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      {/* Nota: en el ul hemos quitado el hidden */}
      <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">Services</li>
        <li className="mx-4 cursor-pointer">Blog</li>
        <li className="mx-4 cursor-pointer">Contact Us</li>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Wallet
        </li>
      </ul>
    </nav>
  );
}
