import Image from "next/image";
import WelcomeImg from "../images/Welcome001.png";


export default function Welcome() {
  return (
    <div className="flex w-full justify-center items-center 2xl:px-40">
      <div className="flex md:flex-row flex-col items-start justify-between  py-24 md:p-20 ">
        {/* Left side */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-6xl  text-white text-gradient pt-24 px-16">
            Smart contract security services for EVM Blockchains
          </h1>

          <p className="text-md text-white pt-12 px-16">
            We provide smart contract security analysis services, studying
            potential breaches and overseeing the implementation of secure smart
            contract protocols.
          </p>
        </div>
        {/* End of the Left side */}

        {/* Rigth side */}
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <Image
            src={WelcomeImg}
            alt="WelcomeImg"
            className="w-800"
          />
        </div>
        {/* End of the Rigth side */}
      </div>
    </div>
  );
}
