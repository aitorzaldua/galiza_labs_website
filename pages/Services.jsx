import Image from "next/image";
import eth2 from "../images/services/eth2.png";
import shield1 from "../images/services/shield1.png";

import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#0d1f31]">
    <div
      className={`w-[12rem] rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-[#a1acba] text-lg">{title}</h1>
      <p className="mt-2 text-[#dce0e5] text-sm md:w-9/12 font-light">
        {subtitle}
      </p>
    </div>
  </div>
);

const ServiceCard2 = ({ color, title, subtitle }) => (
  <div className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#0d1f31]">
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-[#a1acba] text-lg">{title}</h1>
      <p className="mt-2 text-[#dce0e5] text-sm md:w-9/12 font-light">
        {subtitle}
      </p>
    </div>
  </div>
);

const ServiceCard3 = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#0d1f31]">
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-[#a1acba] text-lg">{title}</h1>
      <p className="mt-2 text-[#dce0e5] text-sm md:w-9/12 font-light">
        {subtitle}
      </p>
    </div>
    <div
      className={`w-[12rem] rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
  </div>
);

export default function Services() {
  return (
    <div
      className="flex w-full flex-col justify-center items-center gradient-bg-services 2xl:px-40 2xl:pb-20"
      id="Services"
    >
      <div className="flex flex-col  2xl:py-14 md:py-12 py-6">
        <p className="flex justify-center md:text-6xl text-3xl text-gradient pb-4 pt-6 font-light">
          Services
        </p>
        <p className="flex items-center justify-center text-[#8db9e2] md:w-[62rem] w-[24rem] md:pt-6 md:pl-0 font-light">
          Draft Digital is a Web3 security company dedicated to providing high
          standards of protection and security for our partners and their
          projects. Our mission is to create a secure, reliable and transparent
          environment for everyone on Web3 and DeFi.
        </p>
      </div>

      <div className="flex-1 flex md:flex-row flex-col justify-start items-center md:w-[85rem]">
        <ServiceCard
          color=""
          title="Smart Contract Audits"
          icon={
            <Image
              src={shield1}
              alt="astroPlanets"
              className="cursor-pointer"
              height={200}
            />
          }
          subtitle={
            <a>
              A professional service that will allow you to increase the
              security of your smart contracts and minimise the risk of being
              hacked. Our professionals go line by line to secure your code and
              create clear and concise reports that build trust with our
              partners.
            </a>
          }
        />
        <ServiceCard2
          color=""
          title="Code analysis & Consulting"
          subtitle={
            <a>
              Our consultants work closely with the developers during the
              project, creating a climate of trust in the code and ensuring the
              highest standards when placing the code in production.
            </a>
          }
        />
      </div>

      <div className="flex-1 flex md:flex-row flex-col justify-start items-center md:w-[85rem]">
        <ServiceCard2
          color="bg-[#25bdf8]"
          title="Web3 Security Education"
          subtitle={
            <a>
              At Draft Digital we believe that the best prevention is knowledge.
              We provide courses and bootcamps for developers so that their code
              is guaranteed safe from the first line.
            </a>
          }
        />
        <ServiceCard3
          color=""
          title="News and Ecosystem Information"
          icon={
            <Image
              src={eth2}
              alt="astroPlanets"
              className="cursor-pointer"
              height={200}
            />
          }
          subtitle={
            <a>
              In addition to our education services, research plays an essential
              role in web3 and is central to its security. New exploits emerge
              every day and we need to be aware of them immediately. Our news
              and information service is kept up to date to prevent any new
              attacks.
            </a>
          }
        />
      </div>
      {/* <div className="flex flex-row  pl-[80rem] text-[#8db9e2] md:gap-3 gap-16">
        <a href="https://twitter.com/azdraft_" target="_blank" rel="noreferrer">
          <BsFillArrowUpSquareFill />
        </a>
        <a
          href="https://github.com/aitorzaldua"
          target="_blank"
          rel="noreferrer"
        >
          <BsFillArrowDownSquareFill />
        </a>
      </div> */}
    </div>
  );
}
