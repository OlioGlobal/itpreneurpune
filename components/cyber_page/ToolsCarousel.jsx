import Image from "next/image";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ToolsGrid({ tools, title, description }) {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
  });

  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
  });

  useEffect(() => {
    let animationFrame1;
    let animationFrame2;

    const scroll1 = () => {
      if (emblaApi1 && emblaApi1.canScrollNext()) {
        emblaApi1.scrollNext();
      } else if (emblaApi1) {
        emblaApi1.scrollTo(0);
      }
      animationFrame1 = setTimeout(scroll1, 3000);
    };

    const scroll2 = () => {
      if (emblaApi2 && emblaApi2.canScrollPrev()) {
        emblaApi2.scrollPrev();
      } else if (emblaApi2) {
        emblaApi2.scrollTo(emblaApi2.scrollSnapList().length - 1);
      }
      animationFrame2 = setTimeout(scroll2, 3000);
    };

    if (emblaApi1 && emblaApi2) {
      scroll1();
      scroll2();
    }

    return () => {
      clearTimeout(animationFrame1);
      clearTimeout(animationFrame2);
    };
  }, [emblaApi1, emblaApi2]);

  return (
    <section className="px-[5%] mb-8 max bg-white">
      <div className="flex flex-col items-center text-center gap-3 mb-12 leading-[1.2]">
        <div>
          <h2 className="h2t font-bold text-[#163123]">{title}</h2>
          <p className="text-[16px] text-[#4D5C54] mt-2">{description}</p>
        </div>
      </div>

      {/* First Carousel - Scrolling Right */}
      <div className="embla overflow-hidden" ref={emblaRef1}>
        <div className="embla__container flex">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="embla__slide shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-[14.2857%] px-2"
            >
              <div className="flex flex-col items-center gap-2 bg-[#F1F3EF] rounded-xl p-4 text-center hover:shadow-md transition-all h-full">
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  height={80}
                  width={80}
                  className="h-20 w-20 object-contain mx-auto mb-2"
                />
                <h3 className="text-[16px] font-bold text-[#163123]">
                  {tool.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Carousel - Scrolling Left */}
      <div className="embla overflow-hidden mt-5" ref={emblaRef2}>
        <div className="embla__container flex">
          {tools.map((tool, index) => (
            <div
              key={`second-${index}`}
              className="embla__slide shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-[14.2857%] px-2"
            >
              <div className="flex flex-col items-center gap-2 bg-[#F1F3EF] rounded-xl p-4 text-center hover:shadow-md transition-all h-full">
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  height={80}
                  width={80}
                  className="h-20 w-20 object-contain mx-auto mb-2"
                />
                <h3 className="text-[16px] font-bold text-[#163123]">
                  {tool.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
