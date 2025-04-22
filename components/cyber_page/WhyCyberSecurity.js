"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Massive Global Demand",
    description:
      "With cyber threats rising daily, there’s a global shortage of skilled professionals — over 3.5 million unfilled roles worldwide. It’s one of the fastest-growing career paths in tech.",
    icon: "/icon/gd1.png",
  },
  {
    title: "High Salary, High Growth",
    description:
      "Cyber security experts are among the top-paid professionals in IT. As demand rises, so does the pay — even for entry-level roles.",
    icon: "/icon/gd2.png",
  },
  {
    title: "Ever-Evolving, Never Boring",
    description:
      "Every day brings new challenges. From ethical hacking to protecting global systems, it’s a field that keeps you sharp and constantly learning.",
    icon: "/icon/gd3.png",
  },
  {
    title: "Massive Global Demand",
    description:
      "With cyber threats rising daily, there’s a global shortage of skilled professionals — over 3.5 million unfilled roles worldwide. It’s one of the fastest-growing career paths in tech.",
    icon: "/icon/gd1.png",
  },
  {
    title: "High Salary, High Growth",
    description:
      "Cyber security experts are among the top-paid professionals in IT. As demand rises, so does the pay — even for entry-level roles.",
    icon: "/icon/gd2.png",
  },
  {
    title: "Ever-Evolving, Never Boring",
    description:
      "Every day brings new challenges. From ethical hacking to protecting global systems, it’s a field that keeps you sharp and constantly learning.",
    icon: "/icon/gd3.png",
  },
];

export default function WhyCyberSecurity() {
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

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Change slide every 3 seconds

    emblaApi.on("select", onSelect);
    onSelect();

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section className="px-[5%] rm bg-white">
      <div className="text-center mb-10">
        <h2 className=" font-bold text-[#163123] text-[24px]  sm:text-[32px] text-center md:text-[32px] lg:text-[36px]  leading-[1.2]">
          Why Cyber Security Is Your Future-
          <br className="hidden md:block" />
          Proof Career Path
        </h2>

        <p className="text-[#4D5C54] text-[15px] md:text-[16px] mt-2">
          In Today&apos;s digital landscape, cyber threats are evolving faster
          than ever. Organizations worldwide are{" "}
          <br className="hidden md:block" /> desperately seeking skilled cyber
          security professionals to protect their critical assets.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {cards.map((card, index) => (
              <div
                className="embla__slide shrink-0 px-3 md:basis-1/2 lg:basis-1/3 basis-full"
                key={index}
              >
                <div className="bg-[#26784E] flex flex-col items-start gap-10 rounded-xl h-full p-5 text-left hover:shadow-lg transition-all duration-200">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={70}
                    height={70}
                  />
                  <div>
                    <h3 className="text-[20px] font-bold text-[#ffffff] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#ffffff] text-[16px] font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
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
