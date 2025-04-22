import Image from "next/image";
const courses = [
  { title: "Python Programming", icon: "/icon/python.webp" },
  { title: ".NET Development", icon: "/icon/dot-net.webp" },
  { title: "MEAN Stack Developer", icon: "/icon/mean-stack.webp" },
  { title: "MEARN Stack Developer", icon: "/icon/mearn-stack.webp" },
  { title: "UI/UX Web Development", icon: "/icon/ui-ux.webp" },
  { title: "Data Science", icon: "/icon/data-science.webp" },
  { title: "Java Programming", icon: "/icon/java.webp" },
  { title: "Business Analysis", icon: "/icon/business-analysic.webp" },
  { title: "Software Testing", icon: "/icon/testing.webp" },
  { title: "HR", icon: "/icon/hr.webp" },
  { title: "Salesforce", icon: "/icon/salesforce.webp" },
  { title: "Data Analytics", icon: "/icon/data-analyst.webp" },
];

const CourseGrid = () => {
  return (
    <div className="bg-[#EFF7FA] py-10 px-[5%] ">
      <div className=" ">
        <div className="mb-8">
          <p className="text-[#26784e] mb-2 text-[18px] md:text-[22px] font-bold">
            OUR COURSES FOR
          </p>
          <h2 className="text-[#0a1f14] font-bold text-[24px]  sm:text-[32px] md:text-[35px] lg:text-[40px]  leading-[1.2]">
            <span className="text-[#246a3e]">Job-Oriented Courses</span>{" "}
            Approved by Industry <br className="hidden md:block" /> Leaders
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white shadow-md rounded-lg p-4 flex gap-2 flex-col items-center justify-center text-sm hover:scale-105 transition-transform"
            >
              <Image
                src={course.icon}
                width={200}
                height={200}
                className="h-18 w-18"
              />
              <div className="text-[#0a1f14] font-semibold text-[16px] mt-1 text-center">
                {course.title}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "linear-gradient(90deg, #34A76C 0%, #26784E 100%)",
          }}
          className=" mt-10 md:mt-20 rounded-lg p-5 md:p-8 flex flex-col gap-5 md:flex-row justify-between items-start sm:items-center text-white"
        >
          <div className=" ">
            <p className="font-bold text-[24px]  sm:text-[32px] md:text-[35px] lg:text-[40px]  leading-[1.2]">
              💬 Chat with Our Career Advisor Now!
            </p>
            <p className="text-[22px] font-bold mt-2">
              We’re here to help you take the next step.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#29E81C] text-[17px] cursor-pointer text-white hover:text-black p-4 rounded-lg font-semibold hover:bg-[#DBECBE] transition"
          >
            Talk to a Career Advisor
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
