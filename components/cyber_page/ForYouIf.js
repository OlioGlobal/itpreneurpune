// components/CyberSecurityBenefits.js
import Image from "next/image";

const reasons = [
  "You're An Engineering Graduate But Still Job Hunting.",
  "You're Exhausted By The MPSC/UPSC Grind.",
  "You're Looking To Switch Into A Stable, High-Demand IT Career.",
  "You Want A Future-Proof Skill With Global Demand.",
];

export default function CyberSecurityBenefits() {
  return (
    <div className="px-[5%] rm max" data-aos="zoom-in">
      <div className="text-center mb-8">
        <h2 className="font-bold text-[#163123] h2t leading-[1.2]">
          Cyber Security Course Is For You If...
        </h2>

        <p className="text-[#4D5C54] text-[15px] md:text-[16px] mt-2">
          With Cyber Security and Ethical Hacking skills, you can unlock roles
          like
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-[#F1F3EF] p-6 flex flex-col items-start gap-5 justify-between rounded-xl text-left shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col gap-5">
              <Image
                src="/icon/que.png"
                alt="question icon"
                width={54}
                height={54}
              />
              <p className="text-[17px]  sm:text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-[#163123] leading-[1.3]">
                {reason}
              </p>
            </div>
            <div className="mt-2 w-6 h-[1px] bg-[#00000040] rounded"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#5BD253] hover:bg-[#44bb3c] text-white text-[16px] font-bold py-3 cursor-pointer rounded-[5px] px-8"
        >
          Get Free Career Consultation
        </button>
      </div>
    </div>
  );
}
