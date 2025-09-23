import Link from "next/link";
import Image from "next/image"; // ✅ Importing Next.js Image component
import Form from "../others/form";
import Form2 from "../others/form2";

export default function Enroll2({ pageSource, title, para }) {
  return (
    <>
      <div className="relative bg-[#0A1F14]">
        {/* Desktop & Tablet Gradient */}
        <div className="absolute inset-0 hidden md:block">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(293.16deg, #017D3E 5.94%, #16228E 46.95%)",
            }}
          />
        </div>

        {/* Mobile Gradient */}
        <div className="absolute inset-0 block md:hidden">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(189.5deg, #16228E 57.9%, #017D3E 76.71%)",
            }}
          />
        </div>

        <div className="relative z-10 flex max px-[5%] gap-8 flex-col lg:flex-row lg:gap-12 rm">
          <div className="lg:w-[60%] text-white flex flex-col gap-6 justify-center">
            <h2 className="h2t leading-[1.2] font-bold">{title}</h2>

            <p className="text-[15px] md:text-[16px]">{para}</p>
          </div>
          <div className="lg:w-[40%]">
            <Form2 idPrefix="bottom" pageSource={pageSource} />
          </div>
        </div>
      </div>
    </>
  );
}
