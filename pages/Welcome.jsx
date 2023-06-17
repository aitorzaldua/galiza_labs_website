import Image from "next/image";
import WelcomeImg from "../images/welcome/compas16.png";


export default function Welcome() {
  return (
    <div className="flex w-full justify-center items-center 2xl:px-40">
      <div className="flex md:flex-row flex-col items-start justify-between  py-24 md:p-20 ">
        {/* Left side */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-6xl text-gradient pt-24 px-16">
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
        <div className="md:flex-[0.5] flex-initial justify-center items-center pt-2">
          <Image
            src={WelcomeImg}
            alt="WelcomeImg"
            className="imgWelcome"
          />
        </div>
        {/* End of the Rigth side */}
      </div>
    </div>
  );
}
