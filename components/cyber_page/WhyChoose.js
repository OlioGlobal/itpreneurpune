import Image from "next/image";
import CountUp from "../utils/CountUp";

export default function WhyChooseITpreneur() {
  const stats = [
    { to: 40000, label: "Happy Students" },

    { to: 13, label: "Years of Experience" },
    { to: 4000, label: "Hiring Companies" },
    { to: 2000, label: "Off Campus Drives" },
  ];
  return (
    <div
      id="about"
      className="flex px-[5%] flex-col md:flex-row items-center justify-between  py-16 bg-white gap-3 md:gap-10"
    >
      <div className="w-full  md:w-[40%]">
        <Image
          src="/icon/why.png" // ⬅️ Replace this with your actual image path (e.g., '/images/cyber-training.jpg')
          alt="IT Training"
          width={1000}
          height={1000}
          className="rounded-xl  w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Text */}
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

        <div className="grid grid-cols-2 gap-8  ">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-bold  text-[#163123]  text-[24px]  sm:text-[32px]  md:text-[32px] lg:text-[36px]  leading-[1.2]">
                <CountUp
                  from={stat.from}
                  to={stat.to}
                  duration={2}
                  direction="up"
                  className="inline"
                />
                <span>{stat.suffix}+</span>
              </div>
              <div className="text-[#26784E] font-bold mt-2 text-[15px] leading-[1.3]  sm:text-[17px] md:text-[18px] lg:text-[20px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
