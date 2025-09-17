import Image from "next/image";
import Form2 from "../others/form2";

export default function Hero2({ pageSource, data }) {
  const {
    title,
    subtitle,
    description,
    notice,
    backgroundImage,
    instituteNote,
    partnerLogos,
  } = data;

  return (
    <>
      <div className="relative bg-[#26784E] flex lg:h-[680px] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(233.41deg, rgba(20, 47, 33, 0) 28.7%, #142F21 63.37%), url('${backgroundImage}')`,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row px-[5%] py-10 gap-12 w-full max">
          <div className="lg:w-[80%] flex flex-col gap-6 justify-center">
            <h1 className="text-[30px] sm:text-[50px] md:text-[58px] lg:text-[px] leading-[1.1] font-bold">
              <span>{title}</span>
            </h1>
            {subtitle && (
              <p className="text-[22px] md:text-[24px] leading-[30px] font-bold">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-[18px] md:text-[20px] md:max-w-xl font-normal">
                {description.split("\n").map((line, i) => (
                  <sapn key={i}>{line}</sapn>
                ))}
              </p>
            )}
            {notice && (
              <p className="text-[18px] font-bold flex items-center gap-2 animate-floatText">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
                {notice}
              </p>
            )}
          </div>

          <div className="lg:w-[50%] flex justify-end items-center">
            <Form2 pageSource={pageSource} />
          </div>
        </div>
      </div>

      <div className="bg-[#F1F3EF]">
        <div className="flex flex-col gap-2 lg:flex-row justify-center items-center py-4 px-[5%] max-w-screen-2xl mx-auto">
          <div className="lg:w-[50%]">
            <p className="text-[#0A1F14] text-[16px] font-semibold md:text-[24px] text-center">
              {instituteNote?.split("\n").map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </p>
          </div>
          <div className="lg:w-[50%] flex gap-2 sm:gap-5 justify-center flex-wrap">
            {partnerLogos?.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-full p-3 flex items-center justify-center h-[70px] sm:h-[100px] md:h-[100px] lg:h-28"
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
    </>
  );
}
