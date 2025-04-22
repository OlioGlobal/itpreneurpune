import React from "react";
import Image from "next/image";
const highlightItems = Array(6).fill({
  title: "120 Days of Intensive Training",
  subtitle: "85% practical, 15% theory",
  icon: "/icon/work-1.png",
});

export default function ProgramHighlights() {
  return (
    <section className="px-[5%] py-16 bg-white">
      <h2 className="font-bold mb-8  text-[#163123]  text-[24px]  sm:text-[32px] text-center md:text-[32px] lg:text-[36px]  leading-[1.2] ">
        Cyber Security and Ethical Hacking <br /> Program Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlightItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-center md:justify-start items-center md:items-start gap-4 border  border-[#D7D7D7] p-5 rounded-xl hover:shadow-md transition-all duration-200"
          >
            <div className="bg-[#198754] p-3 rounded-lg">
              <Image
                src={item.icon}
                alt="icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="text-[16px] font-semibold text-[#163123]">
                {item.title}
              </h3>
              <p className="text-[16px] text-[#4D5C54]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
