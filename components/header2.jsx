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
    <header className="sticky top-10 md:top-13   z-50 bg-white shadow-md">
      <div className="flex max items-center justify-center sm:justify-between py-4 px-[5%]">
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
              className="group hidden sm:flex relative bg-[#017D3E] gap-2 justify-center items-center 
             text-white py-3 px-6 border-[#017D3E] cursor-pointer rounded-[12px] 
             shadow-lg shadow-[#017D3E]/20 transition-all duration-300
             hover:bg-white hover:text-[#017D3E] hover:shadow-[#017D3E]/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
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
              </span>

              {/* Shine sweep */}
              <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/30 skew-x-12 animate-[shine_2.5s_linear_infinite]"></span>

              {/* Glow pulse ring */}
              <span className="absolute inset-0 rounded-[12px] border-2 border-[#017D3E] opacity-90 animate-[glow_3s_ease-in-out_infinite]"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
