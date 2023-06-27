import Image from "next/image";
import logo from "../images/Logos/DDLogo6.png";

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
      title: "First Review and Estimations",
      note: "After reviewing the information, we made estimates of expected costs and completion time. Each client is treated on a personalised basis according to their interests and resources.",
    },
    {
      id: 2,
      image: logo,
      title: "Agreement & Start of Service",
      note: "After reaching a service agreement, we start the audit by adjusting the work to the agreed timescales and taking into account the committed partial deliverables.tiemp",
    },
    {
      id: 3,
      image: logo,
      title: "Audit Time",
      note: "Our auditors are dedicated full-time to a single client during their audit time, which guarantees 100% audit attention. They maintain open channels of communication with the client's contacts at all times.",
    },
    {
      id: 4,
      image: logo,
      title: "Initial report",
      note: "The so-called initial report is the one that already contains the 100% code review. It will be delivered for review by the client and, subsequently, a meeting will be held between the engineers involved to review and explain each vulnerability or possible improvement detected."
    },
      {
      id: 5,
      image: logo,
      title: "Mitigation",
      note: "The client's developers and engineers proceed to test and implement the results of the initial report, always with open channels of communication with the auditors. ",
    },
    {
      id: 6,
      image: logo,
      title: "Final Report",
      note: "Once all checks have been performed and the agreed fixes have been applied, our auditors will review the code again and update the report, indicating the vulnerabilities already fixed and making the final assessments.",
    },
  ];
  return (
    <div
      className="flex flex-col w-full justify-center items-center gradient-bg-auditProcess pt-12 pb-16 2xl:px-[4rem]"
      id="AuditProcess"
    >
      <h1 className="text-6xl text-gradient pb-4 pt-6 px-16">
        The Auditing Process
      </h1>
      <p className="text-xl text-[#dce0e5] py-12">
        An audit is a meticulous and detailed process. We guarantee the
        success of the service by providing a detailed roadmap.
      </p>
      <Swiper
        className="container w-[75%]"
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map(({ id, image, title, note }) => {
          return (
            <SwiperSlide className="flex flex-row  justify-start items-center py-3 px-[2rem] 2xl:px-[4rem] m-2 cursor-pointer hover:text-xl">
              <h5 className="text-[#046bf1] flex justify-center items-center pb-5">
                {title}
              </h5>
              <div className="flex flex-row justify-center items-center">
                <p className="flex justify-center items-center text-[#dce0e5]">
                  {note}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
