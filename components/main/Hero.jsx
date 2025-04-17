import Image from "next/image";
import From from "../others/form";
export default function Hero() {
  return (
    <div className="bg-[url('/icon/itpreneur-banner.webp')] bg-cover bg-center bg-no-repeat bg-[#26784E] flex-col lg:h-[650px] gap-12 lg:flex-row text-white flex px-[5%] py-10">
      <div className="lg:w-[70%] flex flex-col gap-6 justify-center">
        <h1 className="text-[38px] sm:text-[42px] md:text-[45px] lg:text-[50px] leading-[50px] font-bold ">
          <span className="text-[28px] sm:text-[32px] md:text-[35px] lg:text-[40px] leading-[30px] font-bold text-white">
            Kickstart Your IT Career
          </span>
          <br />
          with 100% Job Guarantee.
        </h1>
        <p className="text-[22px] leading-[30px] font-normal">
          Join India’s No.1 IT Training & Placement Institute with Guaranteed
          Placements, Real-World Project Training, and Expert Guidance.
        </p>

        <div className=" ">
          <div className="flex gap-2 ">
            {[
              { src: "/icon/aicte.png", alt: "AICTE" },
              { src: "/icon/nsdc-logo.png", alt: "NSDC" },
              { src: "/icon/aictsd-logo.png", alt: "AICSTD" },
              { src: "/icon/skill-india-logo.png", alt: "Skill India" },
            ].map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-full p-3 flex items-center justify-center 
               h-[70px] sm:h-[100px] md:h-[150px] lg:w-32 lg:h-32"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="object-contain h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] flex justify-end items-center ">
        <From />
      </div>
    </div>
  );
}
