import Image from "next/image";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: "/company/it-icon-7.webp", // replace with your actual image path
      title: "Choose Your Course",
      description:
        "Select from our wide range of industry-aligned IT courses like Full Stack Development, Data Science, Cloud Computing, and more.",
    },
    {
      icon: "/company/it-icon-8.webp",
      title: "Get Trained by Industry Experts",
      description:
        "Learn from seasoned professionals with 13+ years of experience in the industry. Get practical exposure with live projects.",
    },
    {
      icon: "/company/it-icon-9.webp",
      title: "Get Your Job Offer",
      description:
        "Receive a placement offer before finishing your course. Our strong network of 4,000+ hiring partners ensures you’ll be job-ready from Day 1.",
    },
    {
      icon: "/company/it-icon-10.webp",
      title: "Start Your Career",
      description:
        "Start your career with confidence, backed by a job guarantee and hands-on training experience.",
    },
  ];

  return (
    <section className="py-14 px-[5%] bg-white text-[#163123]">
      <p className="text-[#26784e] mb-2 text-[18px] md:text-[22px] font-bold text-center">
        OUR SIMPLE PROCESS
      </p>
      <h2 className="text-[#0a1f14] font-bold text-[24px] mb-8  sm:text-[32px] text-center md:text-[35px] lg:text-[40px]  leading-[1.2]">
        Hear It From Our Students
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-gray-100 rounded-lg p-4 cursor-default  shadow-sm border-[1px] border-gray-300 transition-all duration-300 hover:shadow-lg hover:bg-[#e0f2e9]"
          >
            <div className="flex  mb-4">
              <Image
                src={step.icon}
                alt={step.title}
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <h3 className="font-bold text-[22px] text-[#0a1f14] mb-2">
              {step.title}
            </h3>
            <p className="text-[16px] text-[#163123] font-normal leading-[1.5]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
