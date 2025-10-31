import React from "react";

const WhoIsThisProgramFor = () => {
  // Data variables for easy management
  const headerData = {
    title: "Who is This Program For",
    subtitle: "This HR Program Is Perfect for You If...",
  };

  const programCards = [
    {
      id: 1,
      title: "Fresh Graduates",
      subtitle: "(B.Com / B.Sc / BA / BBA)",

      bulletPoint: ["Want to start HR career", "Any stream, any college"],
      backgroundImage: "/thumbnails/stock1.png", // Replace with actual image path
      bgColor: "bg-green-700",
    },
    {
      id: 2,
      title: "Career Switchers",
      subtitle: "Working in different field",

      bulletPoints: ["Want to transition to HR", "Looking for growth"],
      backgroundImage: "/thumbnails/stock2.png", // Replace with actual image path
      bgColor: "bg-green-600",
    },
    {
      id: 3,
      title: "Strong Communicators",
      subtitle: "Good at conversations",
      bulletPoints: ["People-oriented person", "Enjoy working with teams"],
      backgroundImage: "/thumbnails/stock3.png", // Replace with actual image path
      bgColor: "bg-green-700",
    },
    {
      id: 4,
      title: "Job Seekers",
      subtitle: "Unemployed graduates",
      bulletPoints: ["Completed education", "Need guaranteed career start"],
      backgroundImage: "/thumbnails/stock4.png", // Replace with actual image path
      bgColor: "bg-green-600",
    },
  ];

  const requirements = {
    minimum: {
      title: "Minimum Eligibility:",
      items: [
        "Any graduation degree (any stream)",
        "Good communication skills",
        "Basic computer knowledge",
        "Willingness to learn",
      ],
    },
    no: {
      title: "No Requirements",
      items: [
        "MBA or post-graduation",
        "HR degree or background",
        "Work experience",
        "Technical knowledge",
      ],
    },
  };

  return (
    <div className="rm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="h2t font-bold mb-1">{headerData.title}</h2>
          <p className="text-[16px] md:text-[18px] text-[#163123] ">
            {headerData.subtitle}
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
          {programCards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl cursor-pointer"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "380px",
              }}
            >
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(38, 120, 78, 0) 0%, #26784E 68.79%)",
                }}
              />

              {/* Text Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="para leading-[120%] font-bold mb-1">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="text-[16px] font-bold mb-3 text-[#ffffff]">
                    {card.subtitle}
                  </p>
                )}
                <p className="text-[16px]  mb-2">{card.description}</p>
                {card.bulletPoint && (
                  <p className="text-[16px]  font-medium">{card.bulletPoint}</p>
                )}
                {card.bulletPoints && (
                  <div className="">
                    {card.bulletPoints.map((point, index) => (
                      <p key={index} className="text-[16px]  font-medium">
                        {point}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Minimum Eligibility */}
          <div className="bg-[#F1F3EF] rounded-lg p-6 shadow-lg">
            <h3 className="text-[16px] font-bold text-[#163123] mb-4">
              {requirements.minimum.title}
            </h3>
            <div className="space-y-3">
              {requirements.minimum.items.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <svg
                      className="w-5 h-5 text-[#26784E]"
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
                  <span className="text-[#163123] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* No Requirements */}
          <div className="bg-[#F1F3EF] rounded-lg p-6 shadow-lg">
            <h3 className="text-[16px] font-bold text-gray-900 mb-4">
              {requirements.no.title}
            </h3>
            <div className="space-y-3">
              {requirements.no.items.map((item, index) => (
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
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid-cols-4 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default WhoIsThisProgramFor;
