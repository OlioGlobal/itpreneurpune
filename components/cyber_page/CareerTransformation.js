import { useState } from "react";
import Image from "next/image";

const roles = [
  "Security Analyst",
  "Penetration Tester",
  "Digital Forensics Analyst",
  "Incident Responder",
  "Ethical Hacker",
];

const salaryData = [
  {
    range: "₹3 to 5 LPA",
    level: "Entry-level Job",
    color: "text-[#0E75A9] border-[#0E75A9]",
  },
  {
    range: "₹8 to 12 LPA",
    level: "Mid-level Job",
    color: "text-[#C07B19] border-[#C07B19]",
  },
  {
    range: "₹15+ LPA",
    level: "Senior-level Job",
    color: "text-[#6726D9] border-[#6726D9]",
  },
];

export default function CareerTransformation() {
  // State to keep track of hovered role
  const [hoveredRole, setHoveredRole] = useState(null);

  return (
    <section className="px-[5%] rm">
      <div className=" mx-auto">
        <div className="text-center mb-8">
          <h2 className=" font-bold text-[#163123] text-center h2t leading-[1.2]">
            Your Career Transformation Starts Here
          </h2>

          <p className="text-[#4D5C54] text-[15px] md:text-[16px] mt-2">
            With Cyber Security and Ethical Hacking skills, you can unlock roles
            like
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 md:px-[20%]">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="flex transition-all duration-200 hover:bg-[#E8F5EF] hover:scale-[1.03] items-center gap-2 border border-[#26784E] cursor-default rounded-full px-3 py-2 text-[15px] md:text-[16px] text-[#163123]"
              // Track hover state
              onMouseEnter={() => setHoveredRole(idx)}
              onMouseLeave={() => setHoveredRole(null)}
            >
              <Image
                src={
                  hoveredRole === idx ? "/icon/check2.png" : "/icon/check.png"
                } // Change image on hover
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
                className={`text-[24px] sm:text-[32px] text-center md:text-[35px] lg:text-[40px] leading-[1.2] font-medium ${item.color}`}
              >
                {item.range}
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
