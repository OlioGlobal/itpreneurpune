import Link from "next/link";
import Image from "next/image"; // ✅ Importing Next.js Image component
import Form from "../others/form";
import Form2 from "../others/form2";

export default function Enroll2() {
  return (
    <>
      <div className="flex bg-[#0A1F14] px-[5%] gap-8 flex-col lg:flex-row lg:gap-12 py-16">
        <div className="lg:w-[60%] text-white flex flex-col gap-6 justify-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[32px] lg:text-[36px] leading-[1.2] font-bold">
            Take the First Step <br /> Toward Your Cyber <br /> Security Career
          </h2>

          <p className="text-[15px] md:text-[16px]">
            Fill out the form below to get started. One of our career counselors
            will <br /> get in touch with you to help you choose the right
            course and guide <br /> you through the enrollment process.
          </p>

          <div className="flex flex-wrap gap-5 text-[15px]">
            <div className="flex items-center gap-1 pr-4 border-r-[2px] border-white h-5 self-center">
              <Image
                src="/icon/smartphone-w.png"
                alt="phone"
                width={24}
                height={24}
              />
              <Link href="tel:+918237002020">+91 82370 02020</Link>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/icon/email-w.png"
                alt="email"
                width={24}
                height={24}
              />
              <Link href="mailto:info@itpreneurpune.com">
                info@itpreneurpune.com
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <Form2 />
        </div>
      </div>
    </>
  );
}
