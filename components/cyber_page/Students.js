"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const profiles = [
  { name: "Nutan Bhanuse", salary: "7 LPA", image: "/placement/2.webp" },
  { name: "Rupali Aswar", salary: "7.5 LPA", image: "/placement/3.webp" },
  { name: "Amarnath Chadchankar", salary: "8 LPA", image: "/placement/4.webp" },
  { name: "Om Tangade", salary: "7 LPA", image: "/placement/5.webp" },
  { name: "Chandani Sude", salary: "4 LPA", image: "/placement/6.webp" },
  { name: "Puja Rasal", salary: "4 LPA", image: "/placement/7.webp" },
  { name: "Puja Powar", salary: "3 LPA", image: "/placement/1.webp" },
];

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className="rm" id="placements">
      <h2 className="font-bold px-[5%] text-[24px] sm:text-[32px] text-center md:text-[32px] lg:text-[36px] leading-[1.2] mb-10">
        <span className="text-[#26784E]">100%</span> of Our Students Land Jobs{" "}
        <br />
        <span className="text-[#26784E]"> Within 60 Days </span>
      </h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {profiles.map((profile, index) => (
            <div
              className="embla__slide flex-none px-2 w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/5"
              key={index}
            >
              <div className="rounded-full text-center">
                {profile.image ? (
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={200}
                    height={200}
                    className="rounded-full border-[1px] border-[#5BD253] mx-auto"
                  />
                ) : (
                  <div className="mx-auto rounded-full border" />
                )}
                <p className="mt-2 font-normal text-[15px] leading-[1.3] sm:text-[17px] md:text-[18px] lg:text-[20px] text-[#7E7E7E]">
                  {profile.name}
                </p>
                <p className="text-[#26784E] mt-1 text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold">
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
