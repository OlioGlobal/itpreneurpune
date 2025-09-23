import React, { useState } from "react";

const FaqSection = ({ faqData }) => {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // State to track how many FAQs to show
  const [visibleCount, setVisibleCount] = useState(6);

  // Toggle function for opening/closing FAQs
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Show more FAQs
  const loadMoreFaqs = () => {
    setVisibleCount(faqData.length);
  };

  // Check if there are more FAQs to show
  const hasMore = visibleCount < faqData.length;

  // Get visible FAQs
  const visibleFaqs = faqData.slice(0, visibleCount);

  // FAQ Item Component
  const FaqItem = ({ faq, index }) => (
    <div
      key={faq.id}
      className="border-b-[1px] border-gray-200 rounded-lg overflow-hidden animate-fadeIn"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      <button
        className="flex gap-4 justify-between items-center w-full py-4 px-2 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={() => toggleFaq(faq.id)}
      >
        <span className="text-[15px] md:text-[16px] text-[#163123] font-semibold pr-4">
          {faq.question}
        </span>
        <div className="flex-shrink-0">
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
        className={`overflow-hidden transition-all duration-300 ease-in-out px-2 ${
          openFaq === faq.id ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <p className="text-[#163123] text-[15px] md:text-[16px] font-normal">
          {faq.answer}
        </p>
      </div>
    </div>
  );

  return (
    <div className="max flex flex-col gap-5 rm px-[5%]">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="font-bold text-[#163123] h2t leading-[1.2]">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Single Column Layout - Centered */}
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-4 leading-[1.3]">
          {visibleFaqs.map((faq, index) => (
            <FaqItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreFaqs}
              className="px-6 cursor-pointer py-3 bg-[#017D3E] text-white font-semibold rounded-lg hover:bg-[#076b39] transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              More FAQ&apos;s
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FaqSection;
