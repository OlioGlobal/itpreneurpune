export default function ToolsGrid({ tools, title, description }) {
  return (
    <section className="px-[5%] mb-8 max bg-white">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-8 leading-[1.2]">
        <div>
          <h2 className="h2t font-bold text-[#163123]">{title}</h2>
          <p className="text-[16px] text-[#4D5C54] mt-2">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 bg-[#F1F3EF] rounded-xl p-4 text-center hover:shadow-md transition-all"
          >
            <img
              src={tool.icon}
              alt={tool.title}
              className="h-20 w-auto mx-auto mb-1"
            />
            <h3 className="text-[14px] font-bold text-[#163123]">
              {tool.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
