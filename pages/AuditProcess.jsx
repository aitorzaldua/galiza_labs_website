import { SiWeb3Dotjs } from "react-icons/si";
import { BsShieldFillCheck } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { ImNewspaper } from "react-icons/im";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#383f51]" id="AuditProcess">
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

export default function AuditProcess() {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2">
            The Audit Process
          </h1>
        </div>
      </div>

      <p className="text-white py-2">
        Security is a journey. We help mitigate security risks, teach your
        developers best practices and provide ongoing support to ensure a safer
        Web3.
      </p>

      <div className="flex-1 flex flex-col justify-start items-center w-[85rem]">
        <ServiceCard
          color="bg-[#8945f8]"
          title="Code Reviews"
          icon={<SiWeb3Dotjs fontSize={22} className="text-white" />}
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
          icon={<BsShieldFillCheck fontSize={22} className="text-white" />}
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
              Draft Digital wants everyone to feel empowered with the resources needed
              to flourish in the DeFi/Web3 world. We believe that knowledge
              should be open, available, and free.
            </a>
          }
        />
      </div>
    </div>
  );
}
