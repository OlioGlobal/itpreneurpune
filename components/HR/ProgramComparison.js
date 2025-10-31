import React from "react";

const ProgramComparison = () => {
  // Data variables for easy management
  const headerData = {
    title: (
      <span>
        Why iTpreneur&apos;s HR Program <br /> Works for{" "}
        <span className="text-[#017D3E]">Non-HR Graduates</span>
      </span>
    ),
    subtitle: "Career-Ready in 90 Days | 100% Job Guarantee.",
  };

  const traditionalApproach = {
    title: "Traditional Approach",
    items: [
      "Requires HR/MBA degree",
      "Theory-heavy courses",
      "No job guarantee",
      "Generic HR overview",
      "No real experience",
      "You search for jobs alone",
      "1-2 year programs",
    ],
  };

  const itpreneurAdvantage = {
    title: "ITpreneur Advantage",
    items: [
      "Any graduate can join",
      "70% Practical, 30% Theory",
      "100% Job Guarantee Contract",
      "Complete HR function training",
      "3-month live company internship",
      "500+ Direct Placement Partners",
      "Career-ready in 90 days",
    ],
  };

  return (
    <div id="why-itpm" className="max-w-6xl mx-auto rm pad bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="h2t leading-[120%] font-bold">{headerData.title}</h2>
        <p className="text-[16px] md:text-[18px] text-[#163123] mt-2">
          {headerData.subtitle}
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 max-w-3xl mx-auto lg:grid-cols-2 gap-8">
        {/* Traditional Approach Card */}
        <div className="bg-[#F1F3EF] rounded-lg p-5 md:p-8">
          <div>
            <h3 className="para font-bold text-[#163123] mb-4">
              {traditionalApproach.title}
            </h3>
          </div>
          <div className="space-y-4">
            {traditionalApproach.items.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <svg
                    className="w-5 h-5 text-[#26784E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ITpreneur Advantage Card */}
        <div className="bg-[#1C7B3E] rounded-lg p-5 md:p-8 text-white">
          <h3 className="para font-bold text-[#ffffff] mb-4">
            {itpreneurAdvantage.title}
          </h3>
          <div className="space-y-4">
            {itpreneurAdvantage.items.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
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
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramComparison;
