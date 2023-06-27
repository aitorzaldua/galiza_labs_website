import Image from "next/image";
import WelcomeImg from "../images/welcome/compas16.png";


export default function Welcome() {
  return (

    <div className="flex w-full justify-center items-center 2xl:px-40">
      <div className="flex md:flex-row flex-col items-start justify-between  py-24 md:p-20 ">
        {/* Left side */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="md:text-6xl text-4xl text-gradient md:pt-24 pt-10 px-16">
            Smart contract security services for EVM Blockchains
          </h1>

          <p className="text-md text-[#dce0e5] pt-12 px-16">
            We provide smart contract security analysis services, studying
            potential breaches and overseeing the implementation of secure smart
            contract protocols.
          </p>
        </div>
        {/* End of the Left side */}

        {/* Rigth side */}
        <div className="md:flex hidden flex-initial  justify-center w-[26rem] items-center pt-2">
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
