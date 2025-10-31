import React, { useState } from "react";

const CareerJourney = () => {
  // State for accordion
  const [openAccordion, setOpenAccordion] = useState(0);

  // Data variables for easy management
  const headerData = {
    title: (
      <span>
        90 Days to HR Career: Complete <br /> Transformation Journey
      </span>
    ),
  };

  const phases = [
    {
      id: 0,
      title: "PHASE 1: HR Foundations (Month 1) Core Modules",
      modules: [
        "Introduction to Human Resource Management",
        "Understanding Employee Life Cycle",
        "HR Policies, Practices & Organizational Development",
        "Talent Acquisition & Recruitment Fundamentals",
        "Job Analysis, Description & Specification",
        "Employee Engagement & Relations",
      ],
    },
    {
      id: 1,
      title: "PHASE 2: Advanced HR Functions (Month 2) Core Modules",
      modules: [
        "Performance Management Systems (PMS)",
        "Compensation & Payroll Management",
        "Training & Development Programs",
        "Labour Laws & Statutory Compliance",
        "HR Analytics & Data-Driven Decision Making",
        "Strategic HRM & Business Partnering",
      ],
    },
    {
      id: 2,
      title:
        "PHASE 3: Practical Application & Placement (Month 3) Core Modules",
      modules: [
        "4 Live Company HR Projects",
        "3-Month Hands-on Internship",
        "Emerging Trends & Global HRM",
        "HR Technology & HRIS Systems",
      ],
    },
    {
      id: 3,
      title: "PHASE 4: Career Preparation",
      modules: [
        "Soft skills & English communication training",
        "Resume building for HR roles",
        "Mock interviews (Technical + HR rounds)",
        "Aptitude & reasoning preparation",
        "LinkedIn profile optimization",
        "Interview confidence building",
        "Company placement drives begin",
      ],
    },
    {
      id: 4,
      title: "BONUS MODULES INCLUDED",
      modules: [
        "Advanced Excel for HR Analytics",
        "Personality Development",
        "Business Communication",
        "Interview Techniques Masterclass",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="w-full max pad rm">
      <div className="max-w-7xl  mx-auto bg-[#F1F3EF] p-8 rounded-[10px]">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="h2t font-bold leading-[120%]">{headerData.title}</h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`bg-white rounded-[12px] shadow-md overflow-hidden border ${
                phase.isBonus
                  ? "border-yellow-200 bg-yellow-50"
                  : "border-gray-200"
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(phase.id)}
                className={`w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  phase.isBonus
                    ? "bg-yellow-50 hover:bg-yellow-100"
                    : "bg-white hover:bg-gray-50"
                } transition-colors duration-200`}
              >
                <div className="flex items-center   space-x-3">
                  {phase.isBonus && (
                    <span className="text-yellow-500 text-xl">✨</span>
                  )}
                  <h3
                    className={`font-bold para transition-colors duration-200 ${
                      openAccordion === phase.id
                        ? "text-[#26784E]" // title color when open
                        : phase.isBonus
                        ? "text-yellow-800"
                        : "text-[#163123]"
                    }`}
                  >
                    {phase.title}
                  </h3>
                </div>
                <div
                  className={`transform transition-transform  duration-200 ${
                    openAccordion === phase.id ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className={`w-10 h-10 ${
                      phase.isBonus ? "text-yellow-600" : "text-[#26784E]"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300  overflow-hidden ${
                  openAccordion === phase.id
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`px-6 pb-6   ${
                    phase.isBonus ? "bg-yellow-50" : "bg-white"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.modules.map((module, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className={`w-4 h-4 ${
                              phase.isBonus
                                ? "text-yellow-600"
                                : "text-green-600"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span
                          className={`text-[16px] ${
                            phase.isBonus ? "text-yellow-800" : "text-[#163123]"
                          } font-medium`}
                        >
                          {module}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        {/* <div className="text-center mt-8">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg shadow-md hover:shadow-lg transform hover:scale-105">
            Download Complete 90-Day Module Breakdown
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CareerJourney;
