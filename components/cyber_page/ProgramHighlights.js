import React from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "120 Days of Intensive Training",
    description: "85% practical, 15% theory",
    image: "/icon/h1.png",
  },
  {
    id: 2,
    title: "Live Sessions + Video Lectures",
    description: "Learn at your own pace",
    image: "/icon/h2.png",
  },
  {
    id: 3,
    title: "Hands-On Labs",
    description: "Build real-world projects and showcase them on GitHub",
    image: "/icon/h3.png",
  },
  {
    id: 4,
    title: "Mock Interviews",
    description: "Prepare for technical and HR rounds with confidence",
    image: "/icon/h1.png",
  },
  {
    id: 5,
    title: "Placement Assistance",
    description: "100% job guarantee with access to 300+ hiring partners",
    image: "/icon/h2.png",
  },
];

export default function ProgramHighlights() {
  return (
    <section className="px-[5%] rm bg-white">
      <h2 className="font-bold mb-8 text-[#163123] text-center h2t leading-[1.2]">
        Cyber Security and Ethical Hacking <br /> Program Highlights
      </h2>

      <div className="flex flex-wrap  cursor-pointer justify-center">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`w-full md:w-1/2 lg:w-1/3 sm:px-4  mb-8 ${
              index > 2 ? "lg:w-1/2" : ""
            }`}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
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
