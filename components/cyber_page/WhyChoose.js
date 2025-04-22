import Image from "next/image";
import CountUp from "../utils/CountUp";

export default function WhyChooseITpreneur() {
  const stats = [
    {
      to: 40000,
      label: "Happy Students",
      img: "/icon/happystud.png",
    },
    {
      to: 13,
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
      className="flex px-[5%] flex-col md:flex-row items-center justify-between py-16 bg-white gap-3 md:gap-10"
    >
      {/* Left Image */}
      <div className="w-full md:w-[40%]">
        <Image
          src="/icon/why.png"
          alt="IT Training"
          width={1000}
          height={1000}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[60%] flex gap-5 md:gap-10 flex-col">
        <div>
          <h2 className="h2t font-bold text-[#163123]">
            Why Choose ITpreneur?
          </h2>
          <p className="text-[16px] text-[#4D5C54] mt-2">
            iTpreneur is one of Maharashtra’s leading IT training institutes,
            known for its industry-aligned curriculum and strong placement
            support. With expert mentors and hands-on learning, we prepare
            students to confidently step into real-world IT roles — especially
            in high-demand fields like Cyber Security.
          </p>
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
      </div>
    </div>
  );
}
