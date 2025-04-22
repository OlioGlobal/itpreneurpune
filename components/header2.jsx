import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header2() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    // Add event listeners for each link
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1); // Get the section id
        const targetElement = document.getElementById(targetId);

        // Scroll to the section smoothly with an offset for the fixed header
        window.scrollTo({
          top: targetElement.offsetTop - 5000, // Adjust the value (100px) as needed
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-center sm:justify-between py-4 px-[5%]">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href={""}>
            <Image
              src="/itpreneur-pune-logo-img.png"
              alt="Logo"
              width={180}
              height={180}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="text-[18px] font-medium text-[#26784E]">
          <div className="flex text-[18px] text-[#0A1F14] items-center gap-8">
            <div className="hidden lg:flex text-[18px] text-[#0A1F14] items-center gap-8">
              <Link href="#about" className="hover:text-green-700 transition">
                About Us
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-green-700 transition"
              >
                Testimonials
              </Link>
              <Link
                href="#placements"
                className="hover:text-green-700 transition"
              >
                Our Placements
              </Link>
              <Link
                href="#benefits"
                className="hover:text-green-700 transition"
              >
                Benefits
              </Link>
            </div>

            {/* Enroll Now Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group hidden sm:flex bg-[#5BD253] gap-2 justify-center items-center text-white py-3 px-5 hover:bg-white hover:text-[#5BD253] border-[2px] cursor-pointer rounded-[10px]"
            >
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
    </header>
  );
}
