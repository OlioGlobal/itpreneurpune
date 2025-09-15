import React from "react";

const StickyFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-[#29E81C] text-white text-center py-3 text-[15px] sm:hidden z-50 shadow-md cursor-pointer"
      onClick={scrollToTop}
    >
      Apply Now
    </div>
  );
};

export default StickyFooter;
