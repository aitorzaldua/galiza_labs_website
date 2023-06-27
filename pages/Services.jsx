import Image from "next/image";
import eth2 from "../images/services/eth2.png";
import shield1 from "../images/services/shield1.png";



const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#0d1f31]">
    <div
      className={`w-[12rem] rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-[#a1acba] text-lg">{title}</h1>
      <p className="mt-2 text-[#dce0e5] text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const ServiceCard2 = ({ color, title, subtitle }) => (
  <div className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#0d1f31]">
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-[#a1acba] text-lg">{title}</h1>
      <p className="mt-2 text-[#dce0e5] text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const ServiceCard3 = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#0d1f31]">
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-[#a1acba] text-lg">{title}</h1>
      <p className="mt-2 text-[#dce0e5] text-sm md:w-9/12">{subtitle}</p>
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
      className="flex w-full flex-col justify-center items-center gradient-bg-services 2xl:px-40" id="Services">
      <div className="flex md:flex-row flex-col  2xl:py-12 py-6">
        <h1 className=" text-6xl text-gradient pt-8 px-16">
          What we do
        </h1>
        <p className="flex items-center justify-center text-[#dce0e5] md:w-[26rem] w-[20rem] pt-6 md:pl-0 pl-12">
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
              className="w-800 cursor-pointer"
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
              className="w-800 cursor-pointer"
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
    </div>
  );
}
