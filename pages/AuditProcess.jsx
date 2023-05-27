import Image from "next/image";
import logo from "../images/world01.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; 
import "swiper/css/navigation";

export default function AuditProcess() {
  const data = [
    {
      id: 1,
      image: logo,
      title: "Price & timeline",
      note: "Our Engineers will estimate the timeline and price based on codebase complexity and size. We want you to know that we strive to match this with your expectations.",
    },
    {
      id: 2,
      image: logo,
      title: "Lock commit hash, start date & downpayment",
      note: "We agree on a start date and a commit hash to base our audit. To get the most out of an audit, it is recommended that this commit hash not change during the audit.",
    },
    {
      id: 3,
      image: logo,
      title: "Audit begins",
      note: "Our Engineers will spend the allotted time on your contracts. We strongly recommend keeping an open communication channel between your engineers and us during this process.",
    },
    {
      id: 4,
      image: logo,
      title: "Initial report",
      note: "The initial report will explain each issue categorised as High, Medium, Low or Informational. A call will be set up for your engineers to ask questions about the findings.",
    },
    {
      id: 5,
      image: logo,
      title: "Mitigation",
      note: "Your Engineers will have a chance to mitigate the findings using the recommendations in the report.",
    },
    {
      id: 6,
      image: logo,
      title: "Final Report",
      note: "Once the mitigations have been applied, our engineers will check them and amend the issues on the report as Acknowledged or Resolved with any necessary extra information.",
    },
  ];
  return (
    <div
      className="flex flex-col w-full justify-center items-center gradient-bg-services global-Padding"
      id="AuditProcess"
    >
      <h1 className="text-6xl  text-white text-gradient pt-4 px-16">
        The Auditing Process
      </h1>
      <p className="text-xl text-white py-12">
        Security is a journey. We help mitigate security risks, teach your
        developers best practices and provide ongoing support to ensure a safer
        Web3.
      </p>
      <Swiper
        className="container blog__container"
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map(({ id, image, title, note}) => {
          return (
            <SwiperSlide className="flex flex-row  justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#383f51]">
              <h5 className="text-white">{title}</h5>
              <div className="w-400 h-400 cursor-pointer">
                <Image src={image} alt=""></Image>
              </div>
              <small className="text-white">{note}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
