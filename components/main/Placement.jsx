"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EmblaCarousel() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const slides = Array.from({ length: 37 }, (_, i) => ({
    id: i + 1,
    src: `/placement/itpreneurpune-${i + 1}.webp`,
  }));

  return (
    <div className="bg-[#EDF2E4] ">
      <div className="text-center  py-16 max flex flex-col gap-8  px-[5%]">
        <div data-aos="fade-up">
          <p className="text-[#26784e] mb-2 text-[18px] md:text-[22px] font-bold">
            100% PLACEMENT
          </p>
          <h2 className="text-[#0a1f14] font-bold text-[24px]  sm:text-[32px] md:text-[35px] lg:text-[40px]  leading-[1.2]">
            Over <span className="text-[#246a3e]">12000+</span> Careers Launched
            with Impressive <br /> Salary Packages
          </h2>
        </div>
        <div className="relative w-full overflow-hidden" data-aos="fade-up">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="embla__slide shrink-0 w-1/2 md:w-1/4 lg:w-1/6 px-2"
                  data-aos="fade-up"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={slide.src}
                      alt={`ITpreneur Placement ${slide.id}`}
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
