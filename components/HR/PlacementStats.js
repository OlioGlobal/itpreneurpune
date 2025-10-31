import React from "react";

const PlacementStats = () => {
  // Data variables for easy management
  const stats = [
    {
      id: 1,
      mainText: "85% placed",
      subText: (
        <span>
          within 3 months <br /> of completion
        </span>
      ),
      color: "text-[#26784E]",
    },
    {
      id: 2,
      mainText: "₹2.5-5 LPA",
      subText: (
        <span>
          Average <br /> salary
        </span>
      ),
      color: "text-[#26784E]",
    },
    {
      id: 3,
      mainText: "₹10 LPA",
      subText: (
        <span>
          Highest <br /> package
        </span>
      ),
      color: "text-[#26784E]",
    },
    {
      id: 4,
      mainText: "All Sectors",
      subText: (
        <span>
          MNCs, Mid-sized <br /> & Startups
        </span>
      ),
      color: "text-[#26784E]",
    },
  ];

  return (
    <div className="w-full rm bg-white">
      <div className="max pad">
        {/* Stats Container */}
        <div className="flex flex-col lg:flex-row lg:divide-x lg:divide-gray-200">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="flex-1 text-center px-4 lg:px-8 py-6 lg:py-0">
                {/* Main Statistic */}
                <div
                  className={`text-[22px] sm:text-[24px] lg:text-[34px] font-bold ${stat.color} mb-3`}
                >
                  {stat.mainText}
                </div>

                {/* Sub Text */}
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#163123] font-bold leading-tight max-w-xs mx-auto">
                  {stat.subText}
                </div>
              </div>

              {/* Mobile Divider */}
              {index < stats.length - 1 && (
                <div className="lg:hidden border-b border-gray-200 mx-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;
