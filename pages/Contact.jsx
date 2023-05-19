import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-col  w-80 justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#383f51]">
    <div className={`w-12 h-12 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
    <h1 className="mt-2 text-white text-lg">{title}</h1>
    <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
  </div>
);



export default function Contact() {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-contact" id="Contact">
      {/* Tittle */}
      <div className="flex mf:flex-row flex-col items-center justify-between py-12 px-4 md:p-20 sm:p-10">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2">Contact Us</h1>
        </div>
      </div>

      {/* Contact Area */}
      <div>
        <ServiceCard
          color="bg-[#8945f8]"
          title="Email"
          icon={<MdOutlineEmail fontSize={22} className="text-white" />}
          subtitle={<a>info@draftdigital.org</a>}
        />
        <ServiceCard
          color="bg-[#8945f8]"
          title="Email"
          icon={<MdOutlineEmail fontSize={22} className="text-white" />}
          subtitle={<a>info@draftdigital.org</a>}
        />
        <ServiceCard
          color="bg-[#8945f8]"
          title="Email"
          icon={<MdOutlineEmail fontSize={22} className="text-white" />}
          subtitle={<a>info@draftdigital.org</a>}
        />
        </div>

      {/* Image */}
    </div>
  );
}
