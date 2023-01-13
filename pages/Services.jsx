import { SiWeb3Dotjs } from "react-icons/si";
import { BsShieldFillCheck } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { ImNewspaper } from "react-icons/im";

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
    <div className="flex flex-col w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2">
            We take your vision to production.
          </h1>
        </div>
      </div>

      <div className="flex-1 flex flex-row justify-start items-center w-[85rem]">
        <ServiceCard
          color="bg-[#8945f8]"
          title="Web3 Projects"
          icon={<SiWeb3Dotjs fontSize={22} className="text-white" />}
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
        <ServiceCard
          color="bg-[#65b800]"
          title="Smart Contract Audits"
          icon={<BsShieldFillCheck fontSize={22} className="text-white" />}
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

      <div className="flex-1 flex flex-row justify-start items-center w-[85rem]">
        <ServiceCard
          color="bg-[#25bdf8]"
          title="Blockchain University"
          icon={<TiPencil fontSize={22} className="text-white" />}
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


