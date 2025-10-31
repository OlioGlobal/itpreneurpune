import React from "react";

const mythsData = [
  {
    id: 1,
    title: '"HR Needs MBA" — Told You Need An Expensive MBA For HR Roles',
  },
  {
    id: 2,
    title:
      "Your B.Com/B.Sc/BA Doesn't Qualify You For HR Jobs — Degree Doesn't Match Dream",
  },
  {
    id: 3,
    title:
      "No Practical HR Knowledge — Theory-Based Education Didn't Teach Real HR Skills",
  },
];

const MythBuster = () => {
  return (
    <div className="max-w-7xl mx-auto pad rm bg-white">
      {/* Main Title */}
      <h2 className="h2t font-bold text-center mb-6">Myth Buster</h2>

      {/* Myth Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {mythsData.map((myth) => (
          <div
            key={myth.id}
            style={{
              boxShadow: "0px 3px 59.2px 0px #0000000D",
            }}
            className="bg-[#F1F3EF] rounded-lg p-6 shadow-sm"
          >
            <div className="mb-4">
              <span className=" text-[#017D3E] para font-bold">Myth</span>
            </div>
            <h3 className="text-[20px] font-semibold text-gray-900 leading-tight">
              {myth.title}
            </h3>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#017D3E] cursor-pointer hover:bg-green-800 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 text-lg"
        >
          You Don&apos;t Need an HR Degree. You Need Real HR Skills.
        </button>
      </div>
    </div>
  );
};

export default MythBuster;
