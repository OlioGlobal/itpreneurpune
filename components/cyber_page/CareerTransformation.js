import { useState } from "react";
import Image from "next/image";

export default function CareerTransformation({
  roles,
  salaryData,
  title,
  subtitle,
}) {
  const [hoveredRole, setHoveredRole] = useState(null);

  return (
    <section className="px-[5%] rm max">
      <div className="mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-bold text-[#163123] text-center h2t leading-[1.2]">
            {title}
          </h2>
          <p className="text-[#4D5C54] text-[15px] md:text-[16px] mt-2">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 md:px-[20%]">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="flex transition-all duration-200 hover:bg-[#E8F5EF] hover:scale-[1.03] items-center gap-2 border border-[#26784E] cursor-default rounded-full px-3 py-2 text-[15px] md:text-[16px] text-[#163123]"
              onMouseEnter={() => setHoveredRole(idx)}
              onMouseLeave={() => setHoveredRole(null)}
            >
              <Image
                src={
                  hoveredRole === idx ? "/icon/check2.png" : "/icon/check.png"
                }
                alt="check"
                width={35}
                height={35}
              />
              {role}
            </div>
          ))}
        </div>

        <div className="flex justify-evenly flex-wrap gap-10 mt-8">
          {salaryData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3
                className={`relative inline-block text-[24px] font-medium sm:text-[32px] text-center 
  md:text-[35px] lg:text-[40px] leading-[1.2] overflow-hidden ${item.color}`}
              >
                {item.range}
                {/* Shine sweep */}
                <span
                  className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/30 
     skew-x-12 animate-[shine_2.5s_linear_infinite]"
                ></span>
              </h3>

              <div
                className={`h-[2px] w-10 mt-2 mb-2 ${item.color} bg-current rounded-full`}
              />
              <p className="text-[#163123] text-[16px] font-bold">
                {item.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
