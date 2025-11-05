import React from "react";

const CarrerPath = () => {
  const headerData = {
    title: (
      <span>
        Your Career Transformation <br /> Starts Here.
      </span>
    ),
    buttonText: "Get Free Career Consultation",
  };

  const transformationSteps = [
    { id: 1, title: "Training", icon: "/icon/T1.png" },
    { id: 2, title: "Projects", icon: "/icon/T2.png" },
    { id: 3, title: "Interviews", icon: "/icon/T3.png" },
    { id: 4, title: "Placement", icon: "/icon/T4.png" },
  ];

  return (
    <div className="w-full rm">
      <div className="bg-[#1C7B3E] rounded-[22px] mx-4 sm:mx-6 lg:mx-8 xl:mx-auto xl:max-w-7xl p-6 sm:p-8 lg:p-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 mb-8 lg:mb-12">
          <div className="flex-1">
            <h2 className="h2t font-bold text-white leading-tight">
              {headerData.title}
            </h2>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white cursor-pointer text-[#017D3E] font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-[5px] hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base lg:text-lg whitespace-nowrap w-full sm:w-auto"
            >
              {headerData.buttonText}
            </button>
          </div>
        </div>

        {/* Transformation Flow */}
        <div className="bg-[#359965] bg-opacity-50 rounded-[12px] p-4 sm:p-4 lg:p-6">
          {/* Mobile */}
          <div className="block sm:hidden">
            <div className="space-y-6">
              {transformationSteps.map((step, index) => (
                <div key={step.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-opacity-20 rounded-lg flex items-center justify-center text-white">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  {index < transformationSteps.length - 1 && (
                    <div className="text-white text-xl">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tablet */}
          <div className="hidden sm:block lg:hidden">
            <div className="grid grid-cols-2 gap-6">
              {transformationSteps.map((step, index) => (
                <div key={step.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12  bg-opacity-20 rounded-lg flex items-center justify-center text-white">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  {index < 2 && <div className="text-white text-xl">→</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop */}
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between">
            {transformationSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center space-x-4 flex-1 justify-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[28px] font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {index < transformationSteps.length - 1 && (
                  <div className="flex-shrink-0 flex items-center justify-center mx-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerPath;
