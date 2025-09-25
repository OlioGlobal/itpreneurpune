import React from "react";

const StickyFooter2 = ({ message }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-[#121c72] text-center py-3 px-3 
  text-[13px] sm:hidden z-50 shadow-md cursor-pointer"
      onClick={scrollToTop}
    >
      <span className="animate-blink-green font-bold relative z-10">
        {message || "Register Now & 100% Guaranteed IT Job Placement Offer"}
      </span>
    </div>
  );
};

export default StickyFooter2;
