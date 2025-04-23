import React, { useState } from "react";

const FaqSection = () => {
  // FAQ data structure
  const faqData = [
    {
      id: 1,
      question:
        "I don't have a strong technical background. Can I still join your IT courses?",
      answer:
        "Yes! Our courses are designed for beginners too. We start from the basics and provide step-by-step guidance to build your skills from the ground up.",
    },
    {
      id: 2,
      question: "Will I get a job after completing the course?",
      answer:
        "Absolutely. iTpreneur has a strong placement track record and dedicated support to help you land interviews with top IT companies.",
    },
    {
      id: 3,
      question:
        "How is your course different from online tutorials or YouTube videos?",
      answer:
        "We offer structured learning, real-time mentoring, live projects, and doubt-solving — everything you won’t get from scattered online content.",
    },
    {
      id: 4,
      question: "What kind of practical training will I get?",
      answer:
        "You’ll work on real-life projects, simulated cyber attacks (in Cyber Security), and industry case studies to gain hands-on experience.",
    },
    {
      id: 5,
      question:
        "Do you offer EMI or financial support options for course fees?",
      answer:
        "Yes, we have easy EMI plans and guidance to make learning affordable for every student.",
    },
    {
      id: 6,
      question:
        "I’m preparing for government exams but not getting results. Should I consider IT as a career?",
      answer:
        "Definitely. IT offers faster growth, stable job opportunities, and a future-proof career — even if you're switching from a different path.",
    },
  ];

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
