import Image from "next/image";
import { Link } from "react-scroll/modules";
import logo from "../images/Logos/DDLogo6.png";


export default function Navbar() {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center pt-6" id="Nav">
      <div className="md:flex-[0.5] flex flex-row flex-initial justify-start items-center ">
        <Image src={logo} alt="logo" className="w-[12rem]" />
      </div>
      <ul className="text-[#dce0e5] md:flex hidden list-none flex-row justify-between items-center flex-initial">
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
          offset={-200}
          duration={500}
          className="bg-[#8db9e2] py-2 px-7 mx-4  rounded-md cursor-pointer hover:bg-[#A0AECD] "
        >
          Request an audit
        </Link>
      </ul>
    </nav>
  );
}
