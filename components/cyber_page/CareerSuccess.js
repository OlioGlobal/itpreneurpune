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
    { title: "100% Job Guarantee", icon: icons.briefcase },
    { title: "Real-World Training", icon: icons.training },
    { title: "100% Job Guarantee", icon: icons.briefcase },
    { title: "Global Certification Pathways", icon: icons.certification },
    { title: "Global Certification Pathways", icon: icons.certification },
    { title: "Real-World Training", icon: icons.training },
    { title: "Real-World Training", icon: icons.training },
    { title: "100% Job Guarantee", icon: icons.briefcase },
    { title: "Global Certification Pathways", icon: icons.certification },
    { title: "Real-World Training", icon: icons.training },
    { title: "100% Job Guarantee", icon: icons.briefcase },
  ];

  return (
    <div className="px-[5%] rm" id="benefits">
      <h2 className=" font-bold text-[#163123] mb-8 text-center h2t  leading-[1.2]">
        Everything you need for a successful career
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-[1%]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-[#D7D7D7] rounded-md p-4 w-full sm:w-auto cursor-pointer  transition-all duration-300 hover:shadow-md hover:border-green-500"
          >
            <div className="bg-green-700 p-2 rounded-md flex items-center justify-center ">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={24}
                height={24}
                className="text-white"
              />
            </div>
            <span className="text-[16px] font-bold">{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerSuccessComponents;
