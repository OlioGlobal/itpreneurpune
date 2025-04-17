import React from "react";
import CountUp from "../utils/CountUp";

const stats = [
  { to: 40000, label: "Happy Students" },
  { to: 170, label: "Expert Teachers" },
  { to: 13, label: "Years of Experience" },
  { to: 4000, label: "Hiring Companies" },
  { to: 2000, label: "Off Campus Drives" },
];

const StatsSection = () => {
  return (
    <div className="bg-[#f3f7eb] py-12 px-[5%]">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center
              ${index >= 4 ? "col-span-2 md:col-span-1 justify-center" : ""}
            `}
          >
            <h2 className="text-[28px] lg:text-[42px] font-bold text-black">
              <CountUp
                from={0}
                to={stat.to}
                separator=","
                direction="up"
                duration={1.5}
                className="count-up-text"
              />
              +
            </h2>
            <p className="text-[#26784e] mt-1 text-[15px] md:text-[19px] font-semibold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
