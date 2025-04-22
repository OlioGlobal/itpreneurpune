"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const tools = [
  { title: "Java Full Stack", icon: "/icon/java.webp" },
  { title: "Python Full Stack", icon: "/icon/python.webp" },
  { title: ".Net Full Stack", icon: "/icon/dot-net.webp" },
  { title: "UI/UX Web Development", icon: "/icon/ui-ux.webp" },
  { title: "Business Analysis", icon: "/icon/business-analysic.webp" },
  { title: "Data Science", icon: "/icon/data-science.webp" },
  { title: "Data Analysis", icon: "/icon/data-analyst.webp" },
  { title: "Business Intelligence", icon: "/icon/bus.png" },
  { title: "Software Testing", icon: "/icon/testing.webp" },
  { title: "Salesforce", icon: "/icon/salesforce.webp" },
  { title: "MERN Stack", icon: "/icon/mearn-stack.webp" },
  { title: "MEAN Stack", icon: "/icon/mean-stack.webp" },
];

export default function ToolsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="px-[5%] py-16 bg-white">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-6 leading-[1.2]">
        <div>
          <h2 className="text-[22px] md:text-[28px] font-bold text-[#163123]">
            Tools and Technologies That You Will Learn
          </h2>
          <p className="text-[16px] text-[#4D5C54] mt-2">
            With Cyber Security and Ethical Hacking skills, you can unlock roles
            like
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="bg-[#163123] w-10 h-10 text-white rounded-full p-2"
          >
            ‹
          </button>
          <button
            onClick={scrollNext}
            className="bg-[#163123] w-10 h-10 text-white rounded-full p-2"
          >
            ›
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 flex flex-col gap-1 bg-[#F5F5F5] rounded-xl p-4 text-center hover:shadow-md transition-all
                w-[calc(100%/2-1rem)] 
                sm:w-[calc(100%/4-1rem)] 
                md:w-[calc(100%/6-1rem)] 
                lg:w-[calc(100%/7-1rem)]
              "
            >
              <img
                src={tool.icon}
                alt={tool.title}
                className="h-20 mx-auto mb-3"
              />
              <h3 className="text-[14px] font-bold text-[#163123]">
                {tool.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
