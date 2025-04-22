import CountUp from "../utils/CountUp";
import React from "react";

export default function StudentPlacedStats() {
  const stats = [
    { from: 0, to: 1, suffix: "Lakh+", label: "Student Placed" },
    { from: 0, to: 10, suffix: "K+", label: "Student Placed" },
    { from: 0, to: 500, suffix: "+", label: "Student Placed" },
    { from: 0, to: 4, suffix: "k", label: "Student Placed" },
  ];

  return (
    <div className="flex px-[5%] flex-wrap justify-center md:justify-evenly gap-8 md:gap-20 rm  text-center">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="font-bold  text-[#163123]  text-[24px]  sm:text-[32px] text-center md:text-[32px] lg:text-[36px]  leading-[1.2]">
            <CountUp
              from={stat.from}
              to={stat.to}
              duration={2}
              direction="up"
              className="inline"
            />
            <span>{stat.suffix}</span>
          </div>
          <div className="text-[#26784E] font-bold mt-2 text-[15px] leading-[1.3]  sm:text-[17px] md:text-[18px] lg:text-[20px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
