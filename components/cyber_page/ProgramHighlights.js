import React from "react";
import Image from "next/image";

export default function ProgramHighlights({ title, data }) {
  return (
    <section className="px-[5%] rm bg-white max">
      <h2 className="font-bold mb-8 text-[#163123] text-center h2t leading-[1.2]">
        {title}
      </h2>

      <div className="flex flex-wrap cursor-default justify-center">
        {data.map((service, index) => (
          <div
            key={service.id}
            data-aos="zoom-in"
            className={`w-full md:w-1/2 lg:w-1/3 sm:px-4 py-3 md:py-5 ${
              index > 2 ? "lg:w-1/2" : ""
            }`}
          >
            <div className="bg-white rounded-lg overflow-hidden border border-[#D7D7D7] hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="relative h-44 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[24px] text-[#163123] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#163123] text-[16px]">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
