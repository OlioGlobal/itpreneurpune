// components/WhyCyberSecurity.js
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    name: "John Doe",
    label: "Student",
    description:
      "Our students has ben placed in lorem ipsum. Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry .",
  },
  {
    name: "John Doe",
    label: "Student",
    description:
      "Our students has ben placed in lorem ipsum. Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry .",
  },
  {
    name: "John Doe",
    label: "Student",
    description:
      "Our students has ben placed in lorem ipsum. Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry .",
  },

  {
    name: "John Doe",
    label: "Student",
    description:
      "Our students has ben placed in lorem ipsum. Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry .",
  },
  {
    name: "John Doe",
    label: "Student",
    description:
      "Our students has ben placed in lorem ipsum. Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry .",
  },
  {
    name: "John Doe",
    label: "Student",
    description:
      "Our students has ben placed in lorem ipsum. Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry .",
  },

  {
    name: "John Doe",
    label: "Student",
    description:
      "Our students has ben placed in lorem ipsum. Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry Get placed lorem ipsum in the IT Industry .",
  },
];

export default function HearformStud() {
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
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div>
      <section className="px-[5%] py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className=" font-bold text-[#163123] text-[24px]  sm:text-[32px] text-center md:text-[32px] lg:text-[36px]  leading-[1.2]">
            Hear It From Our Students
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cards.map((card, index) => (
                <div
                  className="embla__slide shrink-0 px-3 md:basis-1/2 lg:basis-1/3 basis-full"
                  key={index}
                >
                  <div className="bg-[#F1F3EF] border-[1px] border-[#EDF2E4] flex flex-col items-start gap-14 rounded-xl h-full p-5 text-left hover:shadow-lg transition-all duration-200">
                    <div className="flex flex-col gap-5">
                      <div className="flex ">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src="/icon/star.png"
                              alt="Star"
                              width={20}
                              height={20}
                              priority
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-[16px] font-normal text-[#163123] mb-2">
                        {card.description}
                      </h3>
                      <div>
                        <p className="text-[#163123] text-[20px] font-bold">
                          {card.name}
                        </p>
                        <p className="text-[16px] mt-2 font-normal text-[#163123] ">
                          {card.label}
                        </p>
                      </div>
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

        <div
          style={{
            background: "linear-gradient(90deg, #34A76C 0%, #26784E 100%)",
          }}
          className=" mt-10 md:mt-20 rounded-lg p-5 md:p-8 flex flex-col gap-5 md:flex-row justify-between items-start sm:items-center text-white"
        >
          <div className=" ">
            <p className="font-bold text-[24px]  sm:text-[32px] md:text-[35px] lg:text-[40px]  leading-[1.2]">
              💬 Talk to Our Career Advisor Today!
            </p>
            <p className="text-[22px] font-bold mt-2">Get 100% Job Guarantee</p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#29E81C] text-[17px] cursor-pointer text-white hover:text-black p-4 rounded-lg font-semibold hover:bg-[#DBECBE] transition"
          >
            Let’s Plan Your Career
          </button>
        </div>
      </section>
    </div>
  );
}
