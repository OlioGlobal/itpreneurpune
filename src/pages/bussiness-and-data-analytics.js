import CareerTransformation from "../../components/cyber_page/CareerTransformation";
import FaqSection from "../../components/cyber_page/Faq";
import CyberSecurityBenefits from "../../components/cyber_page/ForYouIf";
import Hero2 from "../../components/cyber_page/Hero2";
import Partner_slider from "../../components/cyber_page/Partner_slider";
import ProgramHighlights from "../../components/cyber_page/ProgramHighlights";
import StudentCarousel from "../../components/cyber_page/Students";
import ToolsGrid from "../../components/cyber_page/ToolsCarousel";
import WhyChooseITpreneur from "../../components/cyber_page/WhyChoose";
import WhyChoose from "../../components/cyber_page/WhyCyberSecurity";
import Header2 from "../../components/header2";
import Hero from "../../components/main/Hero";
import HearformStud from "../../components/cyber_page/HearformStud";
import CareerSuccessComponents from "../../components/cyber_page/CareerSuccess";
import StickyFooter2 from "../../components/stickyfooter2";
import Enroll2 from "../../components/cyber_page/Enroll2";

export default function Full_stack() {
  const heroData = {
    title: "Become a Certified Business Analyst + Data Analytics Professional",
    subtitle: "Master In 180 Days and Secure Your Dream Job!",
    description:
      "Ready to transform your career? Join iTpreneur’s Business Analyst + Data Analytics program and gain dual certifications, hands-on experience, and personalized career support to switch careers with confidence.",
    notice: "Reserve Your Spot — Next Batch Filling Fast",
    backgroundImage: "/icon/da_bg.webp",
    instituteNote:
      "Global certifications from along with iTpreneur course \n completion certificate certified by",
      partnerLogos: [
        { src: "/icon/aicte.png", alt: "AICTE", name: "All India Council for Technical Education" },
        { src: "/icon/nsdc-logo.png", alt: "NSDC", name: "National Skill Development Corporation (NSDC)" },
        { src: "/icon/aictsd-logo.png", alt: "AICSTD", name: "All India Council for Technical Skill Development"   },
        { src: "/icon/skill-india-logo.png", alt: "Skill India", name: "National Skills Development Mission of India" },
        { src: "/icon/iso.png", alt: "ISO", name: "International Organization for Standardization" },
      ],
  };
  const profiles = [
    {
      name: "Amarnath Chadchankar",
      salary: "8 LPA",
      image: "/placement/4.webp",
    },
    { name: "Rupali Aswar", salary: "7.5 LPA", image: "/placement/3.webp" },
    { name: "Nutan Bhanuse", salary: "7 LPA", image: "/placement/2.webp" },
    { name: "Om Tangade", salary: "7 LPA", image: "/placement/5.webp" },
    { name: "Chandani Sude", salary: "4 LPA", image: "/placement/6.webp" },
    { name: "Puja Rasal", salary: "4 LPA", image: "/placement/7.webp" },
    { name: "Puja Powar", salary: "3 LPA", image: "/placement/1.webp" },
  ];
  const cards = [
    {
      title: "100% Job Guarantee",
      description:
        "Your success is our commitment. With a Day 1 Offer Letter or a refund policy, we ensure you land a high-paying job in the IT industry.",
      icon: "/icon/gd1.png",
    },
    {
      title: "Hands-On Training",
      description:
        "Work on real-world projects like e-commerce dashboards, sales analytics, and attendance management systems using tools like Tableau and Excel.",
      icon: "/icon/gd2.png",
    },
    {
      title: "Flexible Learning Options",
      description:
        "Choose from online, offline, or hybrid batches. Weekend and self-paced modules are designed to fit your schedule, whether you’re a student or a working professional.",
      icon: "/icon/gd3.png",
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn from industry experts with over 10 years of experience. Get 1-on-1 guidance, doubt resolution, and career coaching to excel in Business Analysis and Data Analytics.",
      icon: "/icon/gd4.png",
    },
    {
      title: "Comprehensive Career Support",
      description:
        "From mock interviews to resume building and LinkedIn optimization, we’ve got you covered. Access 300+ hiring partners, including top MNCs and startups, to secure your dream role.",
      icon: "/icon/gd5.png",
    },
  ];
  const roles = [
    "Business Analyst",
    "Data Analyst",
    "Functional Business Analyst",
    "Product Owner",
    "Technical Business Analyst",
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
  const services = [
    {
      id: 1,
      title: "120 Days of Intensive Training",
      description: "85% practical, 15% theory",
      image: "/icon/h1.webp",
    },
    {
      id: 2,
      title: "Live Sessions + Video Lectures",
      description: "Learn at your own pace",
      image: "/icon/h2.webp",
    },
    {
      id: 3,
      title: "Hands-On Labs",
      description: "Build real-world projects and showcase them on GitHub",
      image: "/icon/h3.webp",
    },
    {
      id: 4,
      title: "Mock Interviews",
      description: "Prepare for technical and HR rounds with confidence",
      image: "/icon/h4.webp",
    },
    {
      id: 5,
      title: "Placement Assistance",
      description: "100% job guarantee with access to 300+ hiring partners",
      image: "/icon/h5.webp",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "Who can join this program?",
      answer:
        "This course is ideal for final-year students, fresh graduates, and working professionals looking to upskill or switch careers in Business Analysis and Data Analytics.",
    },
    {
      id: 2,
      question: "What is the duration of the course?",
      answer:
        "The program is designed to be completed in just 180 days, with flexible learning options to suit your needs.",
    },
    {
      id: 3,
      question: "Is there a job guarantee?",
      answer:
        "Absolutely! We offer a 100% job guarantee with a Day 1 offer letter or a refund policy for peace of mind.",
    },
    {
      id: 4,
      question: "What kind of projects will I work on?",
      answer:
        "You’ll build real-world projects like e-commerce dashboards, sales analytics, and attendance management systems using tools like Tableau, Power BI, and Excel.",
    },
  ];
  const reasons = [
    "You're An Engineering Graduate But Still Job Hunting.",
    "You're Exhausted By The MPSC/UPSC Grind.",
    "You're Looking To Switch Into A Stable, High-Demand IT Career.",
    "You Want A Future-Proof Skill With Global Demand.",
  ];
  const tools = [
    { title: "Python", icon: "/tech/data-science-1.png" },
    { title: "NumPy", icon: "/tech/data-science-2.png" },
    { title: "Matplotlib", icon: "/tech/data-science-3.png" },
    { title: "Streamlit", icon: "/tech/data-science-4.png" },
    { title: "Burp Suite", icon: "/tech/data-science-5.png" },
    { title: "SQL", icon: "/tech/data-science-7.png" },
  ];

  return (
    <>
      <Header2 />
      <Hero2 data={heroData} pageSource={"Bussiness_and_Data_Analytics"} />
      <StudentCarousel
        title={
          <span className="text-[#163123]">
            Over <span className="text-[#26784E]">12000+</span> Careers Launched
            with Impressive <br /> Salary Packages
          </span>
        }
        students={profiles}
      />
      <Partner_slider />
      <CyberSecurityBenefits
        reasons={reasons}
        title={
          <span>
            Business Analyst + Data Analytics <br className="hidden md:block" />{" "}
            Program Is For You If...
          </span>
        }
        subtitle={
          <span>
            In today&#39;s competitive tech landscape, companies are desperately
            seeking skilled Business <br className="hidden md:block" /> Analysts
            with data analytics expertise to drive insights and informed
            decisions.
          </span>
        }
      />

      <CareerTransformation
        title={"Your Career Transformation Starts Here"}
        subtitle={
          "With expertise in Business Analysis and Data Analytics, you can unlock in-demand roles like:"
        }
        roles={roles}
        salaryData={salaryData}
      />
      <WhyChoose
        data={cards}
        heading={
          <>
            Why Choose Our Business Analysis and{" "}
            <br className="hidden md:block" /> Data Analytics Program?
          </>
        }
        subheading={
          <>
            In today&#39;s rapidly evolving tech landscape, our program empowers
            aspiring Business <br className="hidden md:block" /> and Data
            Analysts to turn raw data into impactful strategies that drive
            real-world results.
          </>
        }
      />

      <ProgramHighlights
        data={services}
        title={
          <span>
            Business Analysis and Data Analytics{" "}
            <br className="hidden md:block" /> Program Highlights
          </span>
        }
      />
      <ToolsGrid
        tools={tools}
        title="Tools and Technologies That You Will Learn"
        description="With Business Analysis and Data Analytics Program, you'll master these tools step-by-step."
      />
      <WhyChooseITpreneur
        title={"Why Business Analysis and Data Analytics?"}
        para={
          "Business Analysis and Data Analytics are among the most sought-after skills in industries like finance, healthcare, e-commerce, and IT. By mastering these skills, you’ll become a versatile professional ready to tackle real-world challenges and drive business success."
        }
      />
      <HearformStud />
      <CareerSuccessComponents />
      <FaqSection faqData={faqData} />
      <Enroll2
        title={
          <span>
            Take the First Step Toward <br className="hidden md:block" /> Your
            Business and Data Analytics Program
            <br className="hidden md:block" /> Career
          </span>
        }
        para={
          <span>
            Fill out the form below to get started. One of our career counselors
            will <br className="hidden md:block" /> get in touch with you to
            help you choose the right course and guide{" "}
            <br className="hidden md:block" /> you through the enrollment
            process.
          </span>
        }
        pageSource={"Bussiness_and_Data_Analytics"}
      />

      <StickyFooter2 />
    </>
  );
}
