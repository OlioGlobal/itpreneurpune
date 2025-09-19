import Image from "next/image";
import Form2 from "../others/form2";

export default function Hero2({ pageSource, data }) {
  const {
    title,
    subtitle,
    description,
    section,
    notice,
    noticePara = null,
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
              <div className="text-[18px] md:text-[20px] md:max-w-xl font-normal">
                {description}
              </div>
            )}

          {section && (
              <div className="flex w-full py-5 divide-x divide-gray-500/40">
                {section.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex-grow-0 w-fit flex flex-col gap-4 items-start ${
                      idx === 0 ? "pl-0 pr-6" : "px-6"
                    }`}
                  >
                    <div className="bg-[#23B26D] rounded-xl p-3 w-fit">
                      <img src={item.imgSrc} alt={item.sub} className="w-6 h-6" />
                    </div>
                    <div className="w-full text-left">
                      <div className="text-xl font-bold text-white mb-1">
                        {item.main}
                      </div>
                      <div className="text-md text-emerald-100 font-medium">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            )}

            {/* {notice && (
              <div>
                <p className="text-[18px] font-bold flex items-center gap-2 animate-floatText">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                  </span>
                  {notice}
                </p>
                <p className="pl-5">{noticePara}</p>
              </div>
            )} */}
          </div>

          {/* {noticePara && (
            <p className="text-[18px] font-bold flex items-center gap-2 ">
              {noticePara}
            </p>
          )} */}

          <div className="lg:w-[50%] flex justify-end items-center">
            <Form2 pageSource={pageSource} />
          </div>
        </div>
      </div>

      <div className="bg-[#F1F3EF]">
      <div className="flex flex-col gap-4 justify-center items-center py-6 px-[5%] max-w-screen-2xl mx-auto">
        
        {/* Institute Note Section */}
        <div className="text-center mb-3">
          <p className="text-[#0A1F14] text-[16px] font-semibold md:text-[24px]">
            {instituteNote?.split("\n").map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {partnerLogos?.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[calc(50%-1.5rem)] sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-2rem)]"
            >
              <div className="bg-white rounded-full p-3 h-[70px] sm:h-[100px] md:h-[100px] lg:h-[120px] w-[70px] sm:w-[100px] md:w-[100px] lg:w-[120px] flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="object-contain h-full w-full"
                />
              </div>
             
              <span className="text-center text-[12px] md:text-[14px] font-medium mt-2">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>

    </>
  );
}
