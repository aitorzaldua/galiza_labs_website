import Link from "next/link";
import Image from "next/image";

import audit01 from "../images/auditsArticlesNews/audit01.png";
import audit02 from "../images/auditsArticlesNews/audit02.png";
import audit03 from "../images/auditsArticlesNews/audit03.png";
import audit04 from "../images/auditsArticlesNews/audit04.png";
import tech01 from "../images/auditsArticlesNews/tech01.png";
import tech02 from "../images/auditsArticlesNews/tech02.png";
import tech03 from "../images/auditsArticlesNews/tech03.png";
import tech04 from "../images/auditsArticlesNews/tech04.png";
import news01 from "../images/auditsArticlesNews/news01.png";
import news02 from "../images/auditsArticlesNews/news02.png";
import news03 from "../images/auditsArticlesNews/news03.png";
import news04 from "../images/auditsArticlesNews/news04.png";

const ServiceCard = ({ title, icon1, icon2, icon3, icon4 }) => (
  <div
    className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 gap-12 hover:shadow-xl hover:bg-[#0d1f31]"
    id="Audits"
  >
    <h1 className="mt-2 text-white text-lg">{title}</h1>
    <div className={`w-[16rem] rounded-full flex justify-center items-center`}>
      {icon1}
    </div>
    <div className={`w-[16rem] rounded-full md:flex hidden justify-center items-center`}>
      {icon2}
    </div>
    <div className={`w-[16rem] rounded-full md:flex hidden justify-center items-center`}>
      {icon3}
    </div>
    <div className={`w-[16rem] rounded-full md:flex hidden justify-center items-center`}>
      {icon4}
    </div>
  </div>
);

export default function AuditProcess() {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-audits">
      <div className="flex mf:flex-row flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-gradient text-3xl sm:text-5xl pt-12">
            Check Audits, Articles and News
          </h1>
        </div>
      </div>

      <p className="text-[#dce0e5] pb-8">
        Web security3 is a journey of continuous discovery. It is essential to
        keep up to date with the latest exploits and discoveries.
      </p>
      <div className="flex-1 flex flex-row justify-start items-center rounded-md max-w-full pb-8">
        <ServiceCard
          title="Code Audits"
          icon1={
            <Link
              href="https://ipfs.io/ipfs/bafybeicjla2h26q3wz4s344bsrtvhkxr3ypm44owvrzyorb2t6tcptlmem/C4%20Slingshot%20report.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={audit01}
                alt=""
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
          icon2={
            <Link
              href="https://github.com/code-423n4/2023-05-base"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={audit02}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
          icon3={
            <Link
              href="https://github.com/code-423n4/2023-05-juicebox"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={audit03}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
          icon4={
            <Link
              href="https://github.com/code-423n4/2023-05-venus"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={audit04}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
        />
      </div>
      <div className="flex-1 flex flex-row justify-start items-center max-w-full  pb-8">
        <ServiceCard
          title="Tech Articles"
          icon1={
            <Link
              href="https://medium.com/coinsbench/hardhat-testing-without-knowing-javascript-73099c05b1d4"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={tech01}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
          icon2={
            <Link
              href="https://medium.com/@aitorzaldua/how-to-become-a-smart-contract-auditor-in-2023-2503ecd5dcb4"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={tech02}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
          icon3={
            <Link
              href="https://medium.com/coinsbench/ethernaut-18-the-meaning-of-life-3ae7c9654c34"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={tech03}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
          icon4={
            <Link
              href="https://medium.com/coinsbench/what-next-after-learning-solidity-basics-try-secureum-b2392042d1c9"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={tech04}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
        />
      </div>

      <div className="flex-1 flex flex-row justify-start items-center max-w-full">
        <ServiceCard
          title="Crypto News"
          icon1={
            <Link
              href="https://cryptonews.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={news01}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
          icon2={
            <Link
              href="https://www.coindesk.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={news02}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
          icon3={
            <Link
              href="https://cointelegraph.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={news03}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
          icon4={
            <Link
              href="https://coinmarketcap.com/headlines/news/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={news04}
                alt="astroPlanets"
                className="w-800 cursor-pointer rounded-md"
              />
            </Link>
          }
        />
      </div>
    </div>
  );
}
