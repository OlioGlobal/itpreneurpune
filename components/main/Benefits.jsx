"use client";
import Image from "next/image";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/company/it-icon-1.webp",
      title: "100% Job Guarantee",
      description:
        "Get the right support to land your dream IT job. We have a proven track record of successful placements with top companies.",
    },
    {
      icon: "/company/it-icon-2.webp",
      title: "Real-World Project Training",
      description:
        "Gain practical skills through real-world projects, industry scenarios, and hands-on learning designed to make you job-ready from day one.",
    },
    {
      icon: "/company/it-icon-3.webp",
      title: "Global Certification Pathways",
      description:
        "Earn globally recognized certifications aligned with industry standards to boost your credibility and career opportunities worldwide.",
    },
    {
      icon: "/company/it-icon-4.webp",
      title: "Industry Expert Trainers",
      description:
        "Learn from top IT professionals who bring real-world knowledge and insights to the classroom.",
    },
    {
      icon: "/company/it-icon-5.webp",
      title: "Hands-on Training & Projects",
      description:
        "Practical experience by working on real projects and building a portfolio that showcases your skills.",
    },
    {
      icon: "/company/it-icon-6.webp",
      title: "Affordable Fees with EMI Option",
      description:
        "Quality IT education at convenient rates with flexible payment options to make our courses accessible to everyone.",
    },
  ];

  return (
    <div className="bg-[#f1fbfc] py-14 px-[5%] ">
      <p className="text-[#26784e] mb-2 text-[18px] text-center md:text-[22px] font-bold">
        BENEFITS
      </p>
      <h2 className="font-bold text-[24px]  sm:text-[32px] text-center md:text-[35px] lg:text-[40px]  leading-[1.2] mb-10">
        What Makes Us Different
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((item, idx) => (
          <div key={idx} className="bg-[#EDF2E4] rounded-lg p-4 shadow-md">
            <div className=" mb-2">
              <Image
                src={item.icon}
                alt={item.title}
                width={70}
                height={70}
                className="object-contain rounded-lg"
              />
            </div>
            <h4 className="text-[22px] font-bold text-[#26784e]">
              {item.title}
            </h4>
            <p className="mt-2 text-[#163123] font-normal  text-[16px] leading-[1.5]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-[#26784E] to-[#1F5D40] mt-10 rounded-lg p-5 md:p-8 flex flex-col gap-5 md:flex-row justify-between items-start sm:items-center text-white">
        <div className=" ">
          <p className="font-bold text-[24px]  sm:text-[32px] md:text-[35px] lg:text-[40px]  leading-[1.2]">
            💬 Talk to Our Career Advisor Today!
          </p>
          <p className="text-[22px] font-bold mt-2">Get 100% Job Guarantee</p>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#29E81C] text-[17px] cursor-pointer text-white hover:text-green-700 p-4 rounded-lg font-semibold hover:bg-[#3cd031] transition"
        >
          Let’s Plan Your Career
        </button>
      </div>
    </div>
  );
};

export default BenefitsSection;
