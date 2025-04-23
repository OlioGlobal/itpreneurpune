import Link from "next/link";
import Form from "../others/form";

export default function Enroll() {
  return (
    <>
      <div className="bg-[#0A1F14]">
        <div className="flex max px-[5%] gap-8 flex-col lg:flex-row lg:gap-12 py-16">
          <div className="lg:w-[60%] text-white flex flex-col gap-6 justify-center">
            <h2 className=" text-[38px] sm:text-[42px] md:text-[45px] lg:text-[50px] leading-[1.2] font-bold ">
              <span className="text-[28px] sm:text-[32px] md:text-[35px] lg:text-[40px] font-bold ">
                Are you Ready to Begin Your IT Career?
              </span>
              <br />
              Enroll Today!
            </h2>

            <p className="text-[16px] font-normal">
              Fill out the form to get started. One of our career counselors
              will get in touch with you to help you choose the right course and
              guide you through the enrollment process.
            </p>

            <div className="flex flex-wrap gap-5 text-[18px]">
              <div className="flex items-center gap-1 pr-4 border-r-[2px] border-white h-5 self-center">
                <img
                  src="/icon/smartphone-w.png"
                  alt="phone"
                  className="h-6 w-6"
                />
                <Link href={"tel:+918237002020"}>+91 82370 02020</Link>
              </div>

              <div className="flex items-center gap-2">
                <img src="/icon/email-w.png" alt="email" className="h-6 w-6" />
                <Link href={"mailto:info@itpreneurpune.com"}>
                  info@itpreneurpune.com
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
