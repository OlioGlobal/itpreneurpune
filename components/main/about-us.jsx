import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="bg-[#EDF2E4]">
      <div className="flex flex-col lg:flex-row px-[5%] py-16 gap-8 max">
        <div className="lg:w-[40%] flex justify-start items-center">
          <Image
            src="/company/about-us.webp"
            alt="About Us"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:w-[60%] flex gap-2 flex-col justify-center                  ">
          <div>
            <p className="text-[#26784e] mb-2 text-[18px] md:text-[22px] font-bold">
              ABOUT US
            </p>
            <h2 className="text-[#0a1f14] font-bold text-[24px]  sm:text-[32px] md:text-[35px] lg:text-[40px]  leading-[1.2]">
              Shaping Tomorrow’s Tech Workforce
            </h2>
          </div>
          <p className="text-[16px] text-[#163123] leading-[1.5]">
            iTpreneur is one of the Best IT Training Institutes in Pune
            dedicated to introducing new skills and talent into Pune’s IT
            sector. We are a proudly unique company with services covering all
            levels of IT recruitment and skill development. Since 2014 we have
            helped over 4000 people launch their careers in the Tech and Digital
            industries and supported their further development with our blend of
            training and recruitment services. Across all our services, our
            mission is simple. To make IT happen – for the benefit of our
            candidates, our clients, and the growing IT sector in Pune.
          </p>
        </div>
      </div>
    </div>
  );
}
