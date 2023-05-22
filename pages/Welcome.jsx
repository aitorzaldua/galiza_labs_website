
import Image from "next/image";
import WelcomeImg from "../images/Welcome001.png";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

export default function Welcome() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        {/* Left side */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            World Class Smart Contract Auditing <br />
            and Security Audit Education
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Draft Digital is a Web3 security company dedicated to bringing
            industry-leading protection and education to our partners and their
            projects. 
            <br />
            Our goal is to create a safe, reliable, and transparent
            environment for everyone in Web3 and DeFi.
          </p>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={companyCommonStyles}>Reliability</div>
            <div className={companyCommonStyles}>Security</div>
            <div className={companyCommonStyles}>Resilience</div>
            <div className={companyCommonStyles}>Mature</div>
            <div className={companyCommonStyles}>Decentralized</div>
            <div className={companyCommonStyles}>Innovation</div>
          </div>
        </div>
        {/* End of the Left side */}

        {/* Rigth side */}
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <Image src={WelcomeImg} alt="WelcomeImg" className="w-800 cursor-pointer" />
        </div>
        {/* End of the Rigth side */}
      </div>
    </div>
  );
}
