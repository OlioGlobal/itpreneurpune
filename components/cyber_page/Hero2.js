import Image from "next/image";
import Form2 from "../others/form2";

export default function Hero2({ pageSource }) {
  return (
    <>
      <div className="relative bg-[#26784E] lg:h-[650px] text-white flex-col lg:flex-row flex px-[5%] py-10 gap-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(233.41deg, rgba(20, 47, 33, 0) 28.7%, #142F21 63.37%), url('/icon/herobg.png')",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 lg:w-[70%] flex flex-col gap-6 justify-center">
          <h1 className="text-[48px] sm:text-[50px] md:text-[58px] lg:text-[64px] leading-[1.1] font-bold">
            Become a Certified <br /> Ethical Hacker
          </h1>
          <p className="text-[24px] leading-[30px] font-bold">
            Start Your High Paying Cyber Security Career
          </p>

          <p className="text-[20px] font-normal">
            Become the digital guardian the world desperately needs. <br />{" "}
            Start your cyber security journey today.{" "}
          </p>

          <p className="text-[18px] font-bold flex items-center gap-2 animate-floatText">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </span>
            Reserve Your Spot — Next Batch Filling Fast
          </p>

          {/* <div className="flex gap-2 flex-wrap">
         
        </div> */}
        </div>

        {/* Form */}
        <div className="relative z-10 lg:w-[50%] flex justify-end items-center">
          <Form2 pageSource={pageSource} />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col gap-2 lg:flex-row bg-[#F1F3EF] justify-center items-center py-4 px-[5%]"
      >
        <div className="lg:w-[50%]">
          <p className="text-[#0A1F14] text-[16px] font-semibold md:text-[24px] text-center">
            iTpreneur - A hallmark of quality and <br /> highly regarded IT
            institute in India
          </p>
        </div>
        <div className="lg:w-[50%]  flex gap-5 justify-center">
          {[
            { src: "/icon/aicte.png", alt: "AICTE" },
            { src: "/icon/nsdc-logo.png", alt: "NSDC" },
            { src: "/icon/aictsd-logo.png", alt: "AICSTD" },
            { src: "/icon/skill-india-logo.png", alt: "Skill India" },
          ].map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-full p-3 flex items-center justify-center h-[70px] sm:h-[100px] md:h-[100px]  lg:h-28"
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
    </>
  );
}
