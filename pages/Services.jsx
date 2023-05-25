import { SiWeb3Dotjs } from "react-icons/si";
import { BsShieldFillCheck } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { ImNewspaper } from "react-icons/im";
import Image from "next/image";
import astronaut002 from "../images/astronaut002.png";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#383f51]">
    <div
      className={`w-12 h-12 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-white text-lg">{title}</h1>
      <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

export default function Services() {
  return (
    <div
      className="flex flex-col w-full justify-center items-center gradient-bg-services"
      id="Services"
    >
      <div className="flex mf:flex-row flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">
        <div className="framer-Services">
          {/* <h1 className="text-8xl  text-white text-gradient pt-4 pl-60">What we do</h1> */}
          <h1 className="flex flex-row items-center gap-2.5  text-white text-8xl justify-center min-h-0 min-w-0">What we do</h1>
          <p className="text-xl text-white  pt-4 pr-32">
            Cyfrin is a Web3 security company dedicated to bringing
            industry-leading protection and education to our partners and their
            projects. Our goal is to create a safe, reliable, and transparent
            environment for everyone in Web3 and DeFi.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-row justify-start items-center w-[85rem]">
        <ServiceCard
          color=""
          title="Code Reviews"
          icon={
            <Image
              src={astronaut002}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
          subtitle={
            <a>
              A code review is a great way to confirm you're building in the
              right direction, with the right tech stack, and making use of
              cost-savings. It supplies you with the understanding needed to
              prepare for a full security audit.
            </a>
          }
        />
        <ServiceCard
          color="bg-[#65b800]"
          title="Smart Contract Audits"
          icon={
            <Image
              src={astronaut002}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
          subtitle={
            <a>
              Our auditors work with your developers to understand your project.
              We go line by line to secure your code, so you feel confident to
              push your code into the wild.
            </a>
          }
        />
      </div>

      <div className="flex-1 flex flex-row justify-start items-center w-[85rem]">
        <ServiceCard
          color="bg-[#25bdf8]"
          title="Web3 Security University"
          icon={<TiPencil fontSize={22} className="text-white" />}
          subtitle={
            <a>
              Draft Digital wants everyone to feel empowered with the resources
              needed to flourish in the DeFi/Web3 world. We believe that
              knowledge should be open, available, and free.
            </a>
          }
        />
        <ServiceCard
          color="bg-[#f54952]"
          title="News and Ecosystem Information"
          icon={<ImNewspaper fontSize={22} className="text-white" />}
          subtitle={
            <a>
              We help you identify opportunities to improve user experience,
              supplier relationships or increase performance with the latest
              cryptographic and economic innovations. <br />
              New technological and economic infrastructures are constantly
              being built and are accompanied by new trade-offs. Our research
              team helps you identify the opportunities and risks inherent in
              these new technologies as they relate to your specific project.
            </a>
          }
        />
      </div>
    </div>
  );
}
