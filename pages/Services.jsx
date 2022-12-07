import Image from "next/image";
import DD from "../images/DraftDigitalLogo.png";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#383f51]">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
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
           color=""
           title="Web3 Projects"
           icon={<Image src={DD} alt="" />}
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
           color=""
           title="Audits"
           icon={<Image src={DD} alt="" />}
           subtitle={
             <a>
               We design decentralized systems that weave distributed
               technologies, economics and governance structures into beautiful
               interfaces. <br /> 
               Decentralized technologies require a multidisciplinary
               approach, which requires taking into account technological,
               economic and social aspects of the system. We are experts in
               weaving all these aspects together and help you design the entire
               product stack, from low-level protocols to user-facing interfaces.
             </a>
           }
         />
       </div>


       <div className="flex-1 flex flex-row justify-start items-center w-[85rem]">
         <ServiceCard
           color=""
           title="Academy"
           icon={<Image src={DD} alt="" />}
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
           color=""
           title="Design"
           icon={<Image src={DD} alt="" />}
           subtitle={
             <a>
               We design decentralized systems that weave distributed
               technologies, economics and governance structures into beautiful
               interfaces. <br /> 
               Decentralized technologies require a multidisciplinary
               approach, which requires taking into account technological,
               economic and social aspects of the system. We are experts in
               weaving all these aspects together and help you design the entire
               product stack, from low-level protocols to user-facing interfaces.
             </a>
           }
         />
       </div>

    </div>
  );
}
