// components/EmblaCarousel.js
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const profiles = [
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/icon/student.png" },
];

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="py-16 ">
      <h2 className="font-bold px-[5%]   text-[24px]  sm:text-[32px] text-center md:text-[32px] lg:text-[36px]  leading-[1.2] mb-10">
        <span className="text-[#26784E]">100%</span> of Our Students Land Jobs{" "}
        <br />
        <span className="text-[#26784E]"> Within 60 Days </span>
      </h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {profiles.map((profile, index) => (
            <div
              className="embla__slide flex-none px-2 w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/5 "
              key={index}
            >
              <div className=" rounded-full  text-center">
                {profile.image ? (
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={230}
                    height={230}
                    className="rounded-full mx-auto"
                  />
                ) : (
                  <div className=" mx-auto rounded-full border" />
                )}
                <p className="mt-2 font-normal text-[15px] leading-[1.3]  sm:text-[17px] md:text-[18px] lg:text-[20px] text-[#7E7E7E]">
                  {profile.name}
                </p>
                <p className="text-[#26784E] mt-1  text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px]  font-bold ">
                  {profile.salary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
