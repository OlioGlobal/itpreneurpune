"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function StudentCarousel({ title, subtitle, students = [] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className="rm max px-[5%]" id="placements">
      {/* <h2 className="font-bold text-[#26784E] px-[5%] text-center h2t leading-[1.2] mb-10">
        {title}
      </h2>
      <p className="text-[#4D5C54] text-[15px] md:text-[16px] mt-2">
        {subtitle}
      </p> */}

      <div className="text-center mb-8">
        <h2 className="font-bold  text-[#163123] h2t text-center  leading-[1.2] ">
          {title}
        </h2>
        <p className="text-[#4D5C54] text-[15px] md:text-[16px] mt-2">
          {subtitle}
        </p>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {students.map((student, index) => (
            <div
              className="embla__slide flex-none px-2 w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/5"
              key={index}
            >
              <div className="rounded-full text-center">
                {student.image ? (
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={200}
                    height={200}
                    className="rounded-full border-[1px] border-[#5BD253] mx-auto"
                  />
                ) : (
                  <div className="w-[200px] h-[200px] mx-auto rounded-full border bg-gray-100" />
                )}
                <p className="mt-2 font-normal text-[15px] leading-[1.3] sm:text-[17px] md:text-[18px] lg:text-[20px] text-[#7E7E7E]">
                  {student.name}
                </p>
                <p className="text-[#26784E] mt-1 text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold">
                  {student.salary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
