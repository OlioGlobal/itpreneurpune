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
        "We have a high placement rate for our graduates. Our career services team works with you on resume building, interview preparation, and connecting with our industry partners to maximize your employment opportunities.",
    },
    {
      id: 3,
      question:
        "How is your course different from online tutorials or YouTube videos?",
      answer:
        "Our structured curriculum is designed by industry experts, includes hands-on projects, personalized feedback, and mentorship. Unlike free resources, we provide a comprehensive learning path with accountability and support throughout your journey.",
    },
    {
      id: 4,
      question: "What kind of practical training will I get?",
      answer:
        "You'll work on real-world projects, industry-relevant case studies, and gain hands-on experience with the latest tools and technologies. Our curriculum includes lab exercises, hackathons, and capstone projects that simulate actual workplace scenarios.",
    },
    {
      id: 5,
      question:
        "Do you offer EMI or financial support options for course fees?",
      answer:
        "Yes, we offer flexible payment plans including EMI options through our banking partners. We also have scholarship programs for deserving candidates. Our admissions team can guide you through the available financial support options.",
    },
    {
      id: 6,
      question:
        "I'm preparing for government exams but not getting results. Should I consider IT as a career?",
      answer:
        "IT offers excellent career growth and stability. Many of our successful students have transitioned from government exam preparation. We recommend scheduling a career counseling session with our advisors to explore if your aptitude and interests align with an IT career path.",
    },
  ];

  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle function for opening/closing FAQs
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="  flex  flex-col gap-5 md:flex-row py-16 px-[5%]">
      <div className="md:w-[40%]">
        <h2 className="font-bold text-[#163123] text-[24px]  sm:text-[32px]  md:text-[32px] lg:text-[36px]  leading-[1.2]">
          Frequently Asked Questions
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
