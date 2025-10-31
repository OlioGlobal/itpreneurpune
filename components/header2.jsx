import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header2({
  logoSrc = "/itpreneur-pune-logo.png",
  logoAlt = "Logo",
  links = [
    { href: "#about", label: "About iTpreneur" },
    { href: "#placements", label: "Our Placements" },
    { href: "#Partners", label: "Placement Partners" },
    { href: "#Highlights", label: "Program Highlights" },
  ],
  buttonText = "Request Call Back",
  onButtonClick, // optional custom click handler
}) {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // adjust offset for header height
            behavior: "smooth",
          });
        }
      });
    });

    // Cleanup on unmount
    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  const handleButtonClick = () => {
    if (onButtonClick) onButtonClick();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-[5%]">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={500}
              height={500}
              className="w-auto h-12 sm:h-13 md:h-14 lg:h-15"
            />
          </Link>
        </div>

        {/* Navigation + Button */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex text-[18px] text-[#0A1F14] items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-green-700 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Request Call Button */}
          <button
            onClick={handleButtonClick}
            className="group flex relative bg-[#017D3E] gap-2 justify-center items-center 
            text-white py-2 px-4 sm:py-3 sm:px-6 border-[#017D3E] cursor-pointer rounded-[12px] 
            shadow-lg shadow-[#017D3E]/20 transition-all duration-300
            hover:bg-white hover:text-[#017D3E] hover:shadow-[#017D3E]/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
              {buttonText}
              <div className="hidden md:block">
                <img
                  src="/icon/chat-box.png"
                  alt=""
                  className="h-4 sm:h-5 block group-hover:hidden"
                />
                <img
                  src="/icon/chat-box-b.png"
                  alt=""
                  className="h-4 sm:h-5 hidden group-hover:block"
                />
              </div>
            </span>

            {/* Shine sweep */}
            <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/30 skew-x-12 animate-[shine_2.5s_linear_infinite]" />

            {/* Glow pulse ring */}
            <span className="absolute inset-0 rounded-[12px] border-2 border-[#017D3E] opacity-90 animate-[glow_3s_ease-in-out_infinite]" />
          </button>
        </div>
      </div>
    </header>
  );
}
