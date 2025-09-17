import React from "react";

const StickyFooter2 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-[#5BD253] text-white text-center py-3 px-3 text-[15px] sm:hidden z-50 shadow-md cursor-pointer"
      onClick={scrollToTop}
    >
      Register Now & 100% Guaranteed IT Job Placement Offer
    </div>
  );
};

export default StickyFooter2;
