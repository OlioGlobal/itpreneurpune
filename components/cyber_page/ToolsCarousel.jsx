import Image from "next/image";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ToolsGrid({ tools, title, description }) {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplayRef.current]
  );

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add any additional carousel controls here
    }
  }, [emblaApi]);

  return (
    <section className="px-[5%] mb-8 max bg-white">
      <div className="flex flex-col items-center text-center gap-3 mb-8 leading-[1.2]">
        <div>
          <h2 className="h2t font-bold text-[#163123]">{title}</h2>
          <p className="text-[16px] text-[#4D5C54] mt-2">{description}</p>
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="embla overflow-hidden" ref={emblaRef}>
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
    </section>
  );
}
