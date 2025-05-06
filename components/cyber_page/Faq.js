import React, { useState } from "react";

const FaqSection = ({ faqData }) => {
  // FAQ data structure

  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle function for opening/closing FAQs
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className=" max flex  flex-col gap-5 md:flex-row rm px-[5%]">
      <div className="md:w-[40%]">
        <h2 className="font-bold text-[#163123] h2t  leading-[1.2]">
          Frequently Asked <br /> Questions
        </h2>
      </div>

      <div className="space-y-4 md:w-[60%] leading-[1.3]">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border-b-[1px] border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="flex gap-2 justify-between items-center w-full py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleFaq(faq.id)}
            >
              <span className=" text-[15px] md:text-[16px] text-[#163123] font-semibold ">
                {faq.question}
              </span>
              <div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openFaq === faq.id ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaq === faq.id ? "py-4" : "max-h-0"
              }`}
            >
              <p className="text-[#163123] text-[15px] md:text-[16px] font-normal">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
