import Link from "next/link";
import Image from "next/image"; // ✅ Importing Next.js Image component
import Form from "../others/form";
import Form2 from "../others/form2";

export default function Enroll2() {
  return (
    <>
      <div className="flex bg-[#0A1F14] px-[5%] gap-8 flex-col lg:flex-row lg:gap-12 rm">
        <div className="lg:w-[60%] text-white flex flex-col gap-6 justify-center">
          <h2 className="h2t leading-[1.2] font-bold">
            Take the First Step <br /> Toward Your Cyber <br /> Security Career
          </h2>

          <p className="text-[15px] md:text-[16px]">
            Fill out the form below to get started. One of our career counselors
            will <br /> get in touch with you to help you choose the right
            course and guide <br /> you through the enrollment process.
          </p>
        </div>
        <div className="lg:w-[40%]">
          <Form2 idPrefix="bottom" />
        </div>
      </div>
    </>
  );
}
