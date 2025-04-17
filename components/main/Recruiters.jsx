"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Array of actual image paths (custom filenames)
const topLogos = [
  "/company/ADP-3.webp",
  "/company/Allscripts.webp",
  "/company/AMSoft-Group-1.webp",
  "/company/ATOS-2.webp",
  "/company/AVALARA-1-1.webp",
  "/company/Calsoft-1.webp",
  "/company/CAPITA-1.webp",
  "/company/Emerson-2.webp",
  "/company/Enzigma-1.webp",
  "/company/Figmd.webp",
  "/company/IBM-1.webp",
  "/company/KPIT-1.webp",
  "/company/Maxxton.webp",
  "/company/Mphasis.webp",
  "/company/Opus-1.webp",
  "/company/Simplify-healthcare.webp",
  "/company/Softenger-1.webp",
  "/company/Sterlite-1.webp",
  "/company/Tech-Mahindra-1.webp",
  "/company/Vodafone-1.webp",
  "/company/Vyomlabs-1.webp",
  "/company/wns.webp",
  "/company/Zensoft-2.webp",
  "/company/Zenssar-1.webp",
];

const bottomLogos = [
  "/company/Zenssar-1.webp",
  "/company/Zensoft-2.webp",
  "/company/wns.webp",
  "/company/Vyomlabs-1.webp",
  "/company/Vodafone-1.webp",
  "/company/Tech-Mahindra-1.webp",
  "/company/Sterlite-1.webp",
  "/company/Softenger-1.webp",
  "/company/Simplify-healthcare.webp",
  "/company/Opus-1.webp",
  "/company/Mphasis.webp",
  "/company/Maxxton.webp",
  "/company/KPIT-1.webp",
  "/company/IBM-1.webp",
  "/company/Figmd.webp",
  "/company/Enzigma-1.webp",
  "/company/Emerson-2.webp",
  "/company/CAPITA-1.webp",
  "/company/Calsoft-1.webp",
  "/company/AVALARA-1-1.webp",
  "/company/ATOS-2.webp",
  "/company/AMSoft-Group-1.webp",
  "/company/Allscripts.webp",
  "/company/ADP-3.webp",
];

const LogoCarouselRow = ({ logos, reverse = false }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      direction: reverse ? "rtl" : "ltr",
      dragFree: true,
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div className="overflow-hidden" dir={reverse ? "rtl" : "ltr"}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {logos.map((src, index) => (
            <div
              key={index}
              className="embla__slide shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-[14.2857%] px-2"
            >
              <div className="bg-gray-100  p-4 rounded-md shadow-md flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  width={180}
                  height={90}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function CompanyLogoDoubleCarousel() {
  return (
    <div className="py-16 space-y-6 px-4 bg-gray-50">
      <h2 className="font-bold text-center text-[#0a1f14] text-[28px] sm:text-[32px] md:text-[35px] lg:text-[40px] ">
        Our Top Recruiters
      </h2>
      <LogoCarouselRow logos={topLogos} reverse={true} />
      <LogoCarouselRow logos={bottomLogos} reverse={false} />
    </div>
  );
}
