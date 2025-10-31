import React from "react";

const CareerTransformation = () => {
  // Data variables for easy management
  const headerData = {
    title: "Your Career Transformation Starts Here.",
    buttonText: "Get Free Career Consultation",
  };

  const transformationSteps = [
    {
      id: 1,
      title: "Training",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Projects",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Interviews",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.04 7h-.82c-.8 0-1.54.5-1.85 1.26l-1.92 5.76A2 2 0 0 0 15.35 16H16v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zm1.5 1h-4c-1.1 0-2 .9-2 2v5.5c0 .83.67 1.5 1.5 1.5S11 20.33 11 19.5V18h2v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V14.5c0-1.1-.9-2-2-2z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Placement.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Main Container with Green Background */}
      <div className="bg-green-600 rounded-2xl mx-4 sm:mx-6 lg:mx-8 xl:mx-auto xl:max-w-7xl p-6 sm:p-8 lg:p-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Title */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              {headerData.title}
            </h2>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-white text-green-600 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base lg:text-lg whitespace-nowrap w-full sm:w-auto">
              {headerData.buttonText}
            </button>
          </div>
        </div>

        {/* Transformation Flow */}
        <div className="bg-green-700 bg-opacity-50 rounded-xl p-4 sm:p-6 lg:p-8">
          {/* Mobile Layout (Vertical) */}
          <div className="block sm:hidden">
            <div className="space-y-6">
              {transformationSteps.map((step, index) => (
                <div key={step.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white">
                    {step.icon}
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

          {/* Tablet Layout (2x2 Grid) */}
          <div className="hidden sm:block lg:hidden">
            <div className="grid grid-cols-2 gap-6">
              {transformationSteps.map((step, index) => (
                <div key={step.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white">
                    {step.icon}
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

          {/* Desktop Layout (Horizontal Flow) */}
          <div className="hidden lg:flex items-center justify-between">
            {transformationSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex-shrink-0 w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < transformationSteps.length - 1 && (
                  <div className="flex-shrink-0 mx-4 text-white">
                    <svg
                      className="w-6 h-6"
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

export default CareerTransformation;
