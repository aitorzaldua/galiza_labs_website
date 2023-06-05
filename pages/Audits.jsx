import { SiWeb3Dotjs } from "react-icons/si";
import { BsShieldFillCheck } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { ImNewspaper } from "react-icons/im";
import Image from "next/image";
import hats from "../images/auditsArticlesNews/hats.png";
import sherlock from "../images/auditsArticlesNews/sherlock.png";
import code4rena from "../images/auditsArticlesNews/code4rena.png";

const ServiceCard = ({ title, icon1, icon2, icon3 }) => (
  <div
    className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 gap-16 hover:shadow-xl hover:bg-[#383f51]"
    id="Audits"
  >
    <h1 className="mt-2 text-white text-lg">{title}</h1>
    <div className={`w-36 rounded-full flex justify-center items-center`}>
      {icon3}
    </div>
    <div className={`w-36 rounded-full flex justify-center items-center`}>
      {icon3}
    </div>
    <div className={`w-36 rounded-full flex justify-center items-center`}>
      {icon3}
    </div>
    <div className={`w-36 rounded-full flex justify-center items-center`}>
      {icon3}
    </div>
  </div>
);

export default function AuditProcess() {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-audits">
      <div className="flex mf:flex-row flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2">
            Check Audits, Articles and News
          </h1>
        </div>
      </div>

      <p className="text-white py-2">
        Web security3 is a journey of continuous discovery. It is essential to
        keep up to date with the latest exploits and discoveries.
      </p>
      <div className="flex-1 flex flex-row justify-start items-center max-w-full">
        <ServiceCard
          title="Code Audits"
          icon1={
            <Image
              src={code4rena}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
          icon2={
            <Image
              src={hats}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
          icon3={
            <Image
              src={sherlock}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
        />
      </div>
      <div className="flex-1 flex flex-row justify-start items-center max-w-full">
        <ServiceCard
          title="Tech Articles"
          icon1={
            <Image
              src={code4rena}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
          icon2={
            <Image
              src={hats}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
          icon3={
            <Image
              src={sherlock}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
        />
      </div>

      <div className="flex-1 flex flex-row justify-start items-center max-w-full">
        <ServiceCard
          title="Crypto News"
          icon1={
            <Image
              src={code4rena}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
          icon2={
            <Image
              src={hats}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
          icon3={
            <Image
              src={sherlock}
              alt="astroPlanets"
              className="w-800 cursor-pointer"
            />
          }
        />
      </div>
    </div>
  );
}
