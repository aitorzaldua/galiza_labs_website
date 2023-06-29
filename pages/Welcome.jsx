import Image from "next/image";
import WelcomeImg from "../images/welcome/compas16.png";


export default function Welcome() {
  return (

    <div className="flex w-full justify-center items-center 2xl:px-40 2xl:pb-4">
      <div className="flex md:flex-row flex-col items-start justify-between  py-24 md:p-20 ">
        {/* Left side */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <p className="md:text-6xl text-4xl text-gradient md:pt-24 pt-10 px-16 font-light">
            Smart contract security services for EVM Blockchains
          </p>

          <p className="text-md text-[#8db9e2] pt-12 px-16 font-light">
            We provide smart contract security analysis services, studying
            potential breaches and overseeing the implementation of secure smart
            contract protocols.
          </p>
        </div>
        {/* End of the Left side */}

        {/* Rigth side */}
        <div className="md:flex hidden flex-initial  justify-center md:w-[32rem] items-center md:pt-2 2xl:pt-0 md:pr-4 2xl:pr-0">
          <Image
            src={WelcomeImg}
            alt="WelcomeImg"
            className="imgWelcome"
          />
        </div>
      </div>
    </div>
  );
}
