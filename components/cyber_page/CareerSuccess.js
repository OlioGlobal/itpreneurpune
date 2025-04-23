import Image from "next/image";
const CareerSuccessComponents = () => {
  // Define icons as objects for cleaner usage
  const icons = {
    briefcase: "/icon/work-2.png", // Replace with your actual image paths
    training: "/icon/tech.png",
    certification: "/icon/check1.png",
  };

  // Feature card items
  const features = [
    { title: "100% Job Guarantee", icon: "/icon/s1.png" },
    { title: "Real-World Training", icon: "/icon/s2.png" },
    { title: "Day 1 Offer Letter", icon: "/icon/s3.png" },
    { title: "Lectures Prepared by Industry Experts", icon: "/icon/s4.png" },
    { title: "Tie Up With 300+ Companies", icon: "/icon/s5.png" },
    { title: "Daily 6-8 Hours Training", icon: "/icon/s6.png" },
    { title: "Live Projects and Onsite Internships", icon: "/icon/s7.png" },
    {
      title: "Emphasis on Soft Skill, Interview & Personality Devlopement",
      icon: "/icon/s8.png",
    },
    {
      title: "Tie Up With MNC’s, MLC’s and Fintech Companies",
      icon: "/icon/s9.png",
    },
    { title: "Education loan with No Cost EMI", icon: "/icon/s10.png" },
  ];

  return (
    <div className="px-[5%] rm max" id="benefits">
      <h2 className=" font-bold text-[#163123] mb-8 text-center h2t  leading-[1.2]">
        Everything you need for a successful career
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-[1%]">
        {features.map((feature, index) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 border border-[#D7D7D7] rounded-md p-4 w-full sm:w-auto   transition-all duration-300 hover:shadow-md hover:border-green-500"
          >
            <div className="bg-green-700  rounded-md  ">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={50}
                height={50}
                className="text-white "
              />
            </div>
            <div>
              <span className="text-[16px] font-bold">{feature.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerSuccessComponents;
