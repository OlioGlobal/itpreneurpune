import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky  top-0 z-50 bg-white shadow-md">
      <div className="  flex items-center justify-center sm:justify-between py-4 px-[5%]">
        <div className="text-xl font-bold text-blue-600">
          <Image
            src="/itpreneur-pune-logo-img.png"
            alt="Logo"
            width={220}
            height={220}
          />
        </div>

        <div className="   text-[18px] items-center font-medium text-[#26784E] ">
          <div className="text-[18px] items-center font-medium text-[#26784E]">
            <div className="flex gap-5">
              <div className="hidden lg:flex items-center gap-1 pr-4 border-r-[2px] border-[#26784E] h-5 self-center">
                <img
                  src="/icon/smartphone.png"
                  alt="phone"
                  className="h-6 w-6"
                />
                <Link href={"tel:+918237002020"}>+91 82370 02020</Link>
              </div>

              <div className="hidden lg:flex items-center gap-2">
                <img src="/icon/email.png" alt="email" className="h-6 w-6" />
                <Link href={"mailto:info@itpreneurpune.com"}>
                  info@itpreneurpune.com
                </Link>
              </div>

              {/* Enroll Button */}
              <button className="group hidden sm:flex bg-[#26784E] gap-2 justify-center items-center text-white py-2 px-10 2xl:px-14 hover:bg-white hover:text-[#26784E] border-[2px] cursor-pointer rounded-[10px]">
                Enroll Now
                <img
                  src="/icon/chat-box.png"
                  alt=""
                  className="h-5 block group-hover:hidden"
                />
                <img
                  src="/icon/chat-box-b.png"
                  alt=""
                  className="h-5 hidden group-hover:block"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
