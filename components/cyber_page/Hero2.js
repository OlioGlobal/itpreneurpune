import Image from "next/image";
import Form2 from "../others/form2";

export default function Hero2({ pageSource, data, showAccreditations = true }) {
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
    Partnertitle,
  } = data;

  return (
    <>
      <div className="relative bg-[#26784E] flex lg:h-[680px] text-white overflow-hidden">
        {/* Desktop & Tablet Background */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(293.16deg, #017D3E 5.94%, #16228E 46.95%), url('${backgroundImage}')`,
            }}
          />
        </div>

        {/* Mobile Background */}
        <div className="absolute inset-0 z-0 block md:hidden">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(189.5deg, #16228E 57.9%, #017D3E 76.71%), url('${backgroundImage}')`,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row px-[5%] py-10 md:py-10 gap-12 w-full max">
          <div className="lg:w-[80%] flex flex-col gap-6 justify-center">
            <div>
              <div className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-md">
                <div className="flex gap-2 items-center">
                  <img
                    src="/icon/google.png"
                    alt="Google"
                    className="h-6 w-6"
                  />
                  <p className="text-black text-[20px] font-bold">4.6</p>
                </div>
                <span className="text-yellow-500 text-[24px] pl-1">★</span>
                <span className="text-black text-sm">(2,087 Reviews)</span>
              </div>
            </div>

            <h1 className="text-[30px] sm:text-[50px] md:text-[58px] font-bold leading-[1.1] max-w-3xl">
              {title}
            </h1>

            {subtitle && (
              <span className="text-[22px] md:text-[24px] leading-[30px]">
                {subtitle}
              </span>
            )}

            {description && (
              <div className="text-[18px] md:text-[20px] md:max-w-xl font-normal">
                {description}
              </div>
            )}

            {section && (
              <div className="flex w-full py-5 divide-x md:gap-4 divide-gray-500/40">
                {section.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-4 items-start ${
                      idx === 0 ? "pl-0 pr-6" : "px-6"
                    }`}
                  >
                    <div className="rounded-xl w-fit">
                      <img
                        src={item.imgSrc}
                        alt={item.sub}
                        className="w-13 h-13"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bold text-white mb-1">
                        {item.main}
                      </div>
                      <div className="text-md text-[#FFFFFFCC] font-medium">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:w-[50%] flex justify-end items-center">
            <Form2 pageSource={pageSource} />
          </div>
        </div>
      </div>

      {/* ✅ Toggle Accreditations Section */}
      {showAccreditations && (
        <div className="bg-[#F1F3EF] py-5">
          <div className="flex flex-col gap-4 justify-center items-center py-6 px-[5%] max-w-7xl mx-auto">
            {/* Institute Note Section */}
            <div className="text-center mb-3">
              <h2 className="h2t font-bold text-[#163123] leading-[1.3]">
                {Partnertitle}
              </h2>
              <p className="text-[16px] text-[#4D5C54] mt-2">
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
                  <span className="text-center text-[12px] md:text-[15px] font-medium mt-2">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
