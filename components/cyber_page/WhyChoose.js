import Image from "next/image";
import CountUp from "../utils/CountUp";

export default function WhyChooseITpreneur({ title, para }) {
  const stats = [
    {
      to: 12000,
      label: "Happy Students",
      img: "/icon/happystud.png",
    },
    {
      to: 14,
      label: "Years of Experience",
      img: "/icon/yearsexp.png",
    },
    {
      to: 4000,
      label: "Hiring Companies",
      img: "/icon/hiringcom.png",
    },
    {
      to: 2000,
      label: "Off Campus Drives",
      img: "/icon/offcam.png",
    },
  ];

  return (
    <div
      id="about"
      className=" max flex px-[5%] flex-col md:flex-row items-center justify-between py-16 bg-white gap-3 md:gap-10"
    >
      {/* Left Image */}
      <div className="w-full md:w-[40%]">
        <Image
          src="/icon/why.png"
          alt="IT Training"
          width={1500}
          height={1500}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[60%] flex gap-5 md:gap-10 flex-col">
        <div>
          <h2 className="h2t font-bold text-[#163123] leading-[1.3]">
            {title}
          </h2>
          <p className="text-[16px] text-[#4D5C54] mt-2">{para}</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div>
                <Image src={stat.img} height={60} width={60} alt={stat.label} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="font-bold text-[#163123] text-[24px] sm:text-[32px] md:text-[32px] lg:text-[36px] leading-[1.2]">
                    <CountUp
                      from={stat.from}
                      to={stat.to}
                      duration={2}
                      direction="up"
                      className="inline"
                    />
                    <span>+</span>
                  </div>
                </div>
                <div className="text-[#26784E] font-bold mt-2 text-[15px] leading-[1.3] sm:text-[17px] md:text-[18px] lg:text-[20px]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          {" "}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative bg-[#017D3E] text-white text-[16px] font-bold py-3 px-8 
             rounded-[10px] cursor-pointer shadow-lg shadow-[#017D3E]/20 transition-all duration-300
             hover:bg-white hover:text-[#017D3E] hover:shadow-[#017D3E]/20 overflow-hidden"
          >
            {/* Text + Icons */}
            <span className="relative z-10 flex items-center gap-2">
              Get Career Consultation
            </span>

            {/* Shine sweep */}
            <span
              className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/30 skew-x-12 
               animate-[shine_2.5s_linear_infinite]"
            ></span>

            {/* Glow pulse ring */}
            <span
              className="absolute inset-0 rounded-[10px] border-2 border-[#017D3E] opacity-70 
               animate-[glow_3s_ease-in-out_infinite]"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
