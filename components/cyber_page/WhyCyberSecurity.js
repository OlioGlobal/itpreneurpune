"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function WhyChoose({ data, heading, subheading }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    emblaApi.on("select", onSelect);
    onSelect();

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section className="px-[5%] rm bg-white max">
      {heading && (
        <div className="text-center mb-10">
          <h2 className="font-bold text-[#163123] h2t text-center leading-[1.2]">
            {heading}
          </h2>
          {subheading && (
            <p className="text-[#4D5C54] text-[15px] md:text-[16px] mt-2 max-w-3xl mx-auto ">
              {subheading}
            </p>
          )}
        </div>
      )}

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((card, index) => (
              <div
                className="embla__slide shrink-0 px-3 md:basis-1/2 lg:basis-1/3 basis-full"
                key={index}
              >
                <div className="bg-[#26784E] flex flex-col items-start gap-10 rounded-xl h-full p-8 text-left hover:shadow-lg transition-all duration-200">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={70}
                    height={70}
                  />
                  <div>
                    <h3 className="text-[20px] font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <span className="text-white text-[16px] font-normal ">
                      {card.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          disabled={!canScrollPrev}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          disabled={!canScrollNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
