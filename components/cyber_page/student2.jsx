"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Student2({
  title = "Over 12000+ Careers Launched with Impressive Salary Packages",
  paragraph = "100% PLACEMENT",
  bgColor = "#EDF2E4",
}) {
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
    <div className={`w-full`} style={{ backgroundColor: bgColor }}>
      <div className="text-center pt-12 pb-8 max flex flex-col gap-2 px-[5%]">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="font-bold  text-[#163123] h2t text-center  leading-[1.2] ">
            {title}
          </h2>
          <p className="text-black text-[15px] md:text-[16px] mt-2">
            {paragraph}
          </p>
        </div>

        {/* Carousel Section */}
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
