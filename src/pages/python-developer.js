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
    title: "Master Python Web Development + Data Analytics",
    subtitle: "100% Job Guarantee with Day 1 Offer Letter",
    description:
      "Become a certified Python Web Developer and Data Analyst in just 120 days with hands-on training, real-world projects, and personalized career support. Whether you're a student, fresh graduate, or working professional, this program is designed to help you switch careers with confidence and secure a high-paying job in the IT industry.",
    notice: "Reserve Your Spot — Next Batch Filling Fast",
    backgroundImage: "/icon/herobg.webp",
    instituteNote:
      "Global certifications from along with iTpreneur course \n completion certificate certified by",
    partnerLogos: [
      { src: "/icon/aicte.png", alt: "AICTE" },
      { src: "/icon/nsdc-logo.png", alt: "NSDC" },
      { src: "/icon/aictsd-logo.png", alt: "AICSTD" },
      { src: "/icon/skill-india-logo.png", alt: "Skill India" },
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
        "We don’t just train you; we ensure you land your dream job. With a Day 1 offer letter or a refund policy, your success is our priority.",
      icon: "/icon/gd1.png",
    },
    {
      title: "Hands-On Training",
      description:
        "Work on live projects like penetration testing, digital forensics, and web application security. Gain practical experience that employers value.",
      icon: "/icon/gd2.png",
    },
    {
      title: "Flexible Learning Options",
      description:
        "Choose from online, offline, or hybrid batches. Weekend and self-paced modules are available to fit your schedule.",
      icon: "/icon/gd3.png",
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn from industry veterans with 10+ years of experience. Get personalized guidance, 1-on-1 doubt resolution, and career coaching.",
      icon: "/icon/gd4.png",
    },
    {
      title: "Comprehensive Career Support",
      description: (
        <ul className="list-disc list-inside">
          <li>Mock interviews and grooming sessions</li>
          <li>Resume building and LinkedIn optimization</li>
          <li>
            Access to 300+ hiring partners, including top MNCs and startups
          </li>
        </ul>
      ),
      icon: "/icon/gd5.png",
    },
  ];
  const roles = [
    "Python Developer",
    "Data Analyst",
    "Web Developer",
    "Backend Developer",
    "Data Engineer",
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
        "This course is perfect for final-year students, fresh graduates, and working professionals looking to upskill or switch careers in IT.",
    },
    {
      id: 2,
      question: "What is the duration of the course?",
      answer:
        "The program is designed to be completed in just 120 days, with flexible learning options to suit your needs.",
    },
    {
      id: 3,
      question: "Is there a job guarantee?",
      answer:
        " Absolutely! We offer a 100% job guarantee with a Day 1 offer letter or a refund policy for peace of mind.",
    },
    {
      id: 4,
      question: "What kind of projects will I work on?",
      answer:
        "You’ll build real-world projects like e-commerce platforms and data analytics dashboards using tools like Git, JIRA, and Jenkins.",
    },
  ];
  const reasons = [
    "You're An Engineering Graduate But Still Job Hunting.",
    "You're Exhausted By The MPSC/UPSC Grind.",
    "You're Looking To Switch Into A Stable, High-Demand IT Career.",
    "You Want A Future-Proof Skill With Global Demand.",
  ];
  const tools = [
    { title: "Kali Linux", icon: "/icon/tool1.png" },
    { title: "Wireshark", icon: "/icon/tool2.png" },
    { title: "Metasploit", icon: "/icon/tool3.png" },
    { title: "NMAP", icon: "/icon/tool4.png" },
    { title: "Burp Suite", icon: "/icon/tool5.png" },
    { title: "Splunk", icon: "/icon/tool6.png" },
  ];

  return (
    <>
      <Header2 />
      <Hero2 data={heroData} pageSource={"Python_Developer"} />
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
            Python Web Development + Data Analytics{" "}
            <br className="hidden md:block" /> Program Is For You If...
          </span>
        }
        subtitle={
          <span>
            In today&#39;s competitive tech landscape, companies are desperately
            seeking skilled Python Web Development{" "}
            <br className="hidden md:block" /> with data analytics expertise to
            drive insights and informed decisions.
          </span>
        }
      />

      <CareerTransformation
        title={"Your Career Transformation Starts Here"}
        subtitle={
          "With Python Web Development and Data Analytics skills, you can unlock roles like:"
        }
        roles={roles}
        salaryData={salaryData}
      />
      <WhyChoose
        data={cards}
        heading={
          <>
            Why Choose Our Python Web Development{" "}
            <br className="hidden md:block" /> + Data Analytics Program?
          </>
        }
        subheading={
          <>
            In today&#39;s rapidly evolving tech landscape, our program empowers
            aspiring Python Developers and <br className="hidden md:block" />
            Data Analysts to craft web solutions and extract insights that fuel
            smart decisions.
          </>
        }
      />

      <ProgramHighlights
        data={services}
        title={
          <span>
            Python Web Development + Data Analytics{" "}
            <br className="hidden md:block" /> Program Highlights
          </span>
        }
      />
      <ToolsGrid
        tools={tools}
        title="Tools and Technologies That You Will Learn"
        description="With Python Web Development + Data Analytics Program, you'll master these tools step-by-step."
      />
      <WhyChooseITpreneur
        title={"Why Python Web Development + Data Analytics?"}
        para={
          "Python is one of the most versatile and in-demand programming languages in the IT industry. With this course, you’ll gain the expertise to build scalable web applications and analyze data, making you a valuable asset to any organization."
        }
      />
      <HearformStud />
      <CareerSuccessComponents />
      <FaqSection faqData={faqData} />
      <Enroll2
        title={
          <span>
            Take the First Step Toward <br className="hidden md:block" /> Your
            Software Testing Program
            <br className="hidden md:block" /> Career
          </span>
        }
        para={
          <span>
            Fill out the form below to get started. One of our career counselors
            will <br /> get in touch with you to help you choose the right
            course and guide <br /> you through the enrollment process.
          </span>
        }
        pageSource={"Python_Developer"}
      />

      <StickyFooter2 />
    </>
  );
}
