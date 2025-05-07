import CareerSuccess from "../../components/cyber_page/CareerSuccess";
import CareerTransformation from "../../components/cyber_page/CareerTransformation";
import Enroll2 from "../../components/cyber_page/Enroll2";
import FaqSection from "../../components/cyber_page/Faq";
import CyberSecurityBenefits from "../../components/cyber_page/ForYouIf";
import HearformStud from "../../components/cyber_page/HearformStud";
import Hero2 from "../../components/cyber_page/Hero2";
import Partner_slider from "../../components/cyber_page/Partner_slider";
import ProgramHighlights from "../../components/cyber_page/ProgramHighlights";
import StudentPlacedStats from "../../components/cyber_page/StudentPlacedStats.tsx";
import Students from "../../components/cyber_page/Students";
import ToolsCarousel from "../../components/cyber_page/ToolsCarousel";
import WhyChooseITpreneur from "../../components/cyber_page/WhyChoose";
import WhyCyberSecurity from "../../components/cyber_page/WhyCyberSecurity";
import Header2 from "../../components/header2";
import Enroll from "../../components/main/Enroll";
import StickyFooter from "../../components/stickyfooter2";

export default function Cyber() {
  const heroData = {
    title: "Become a Certified\nEthical Hacker",
    subtitle: "Start Your High Paying Cyber Security Career",
    description:
      "Become the digital guardian the world desperately needs.\nStart your cyber security journey today.",
    notice: "Reserve Your Spot — Next Batch Filling Fast",
    backgroundImage: "/icon/herobg.webp",
    instituteNote:
      "iTpreneur - A hallmark of quality and\nhighly regarded IT institute in India",
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
      title: "Massive Global Demand",
      description:
        "With cyber threats rising daily, there’s a global shortage of skilled professionals — over 3.5 million unfilled roles worldwide. It’s one of the fastest-growing career paths in tech.",
      icon: "/icon/gd1.png",
    },
    {
      title: "High Salary, High Growth",
      description:
        "Cyber security experts are among the top-paid professionals in IT. As demand rises, so does the pay — even for entry-level roles.",
      icon: "/icon/gd2.png",
    },
    {
      title: "Ever-Evolving, Never Boring",
      description:
        "Every day brings new challenges. From ethical hacking to protecting global systems, it’s a field that keeps you sharp and constantly learning.",
      icon: "/icon/gd3.png",
    },
    {
      title: "Job Security in a Digital World",
      description:
        "As businesses shift online, cyber protection has become a non-negotiable priority. Your skills will always be relevant and in demand.",
      icon: "/icon/gd4.png",
    },
    {
      title: "Make Real-World Impact",
      description:
        "You don’t just get a job — you become a digital guardian, protecting people, companies, and governments from real threats.",
      icon: "/icon/gd5.png",
    },
  ];
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
      question:
        "I don't have a strong technical background. Can I still join your IT courses?",
      answer:
        "Yes! Our courses are designed for beginners too. We start from the basics and provide step-by-step guidance to build your skills from the ground up.",
    },
    {
      id: 2,
      question: "Will I get a job after completing the course?",
      answer:
        "Absolutely. iTpreneur has a strong placement track record and dedicated support to help you land interviews with top IT companies.",
    },
    {
      id: 3,
      question:
        "How is your course different from online tutorials or YouTube videos?",
      answer:
        "We offer structured learning, real-time mentoring, live projects, and doubt-solving — everything you won’t get from scattered online content.",
    },
    {
      id: 4,
      question: "What kind of practical training will I get?",
      answer:
        "You’ll work on real-life projects, simulated cyber attacks (in Cyber Security), and industry case studies to gain hands-on experience.",
    },
    {
      id: 5,
      question:
        "Do you offer EMI or financial support options for course fees?",
      answer:
        "Yes, we have easy EMI plans and guidance to make learning affordable for every student.",
    },
    {
      id: 6,
      question:
        "I’m preparing for government exams but not getting results. Should I consider IT as a career?",
      answer:
        "Definitely. IT offers faster growth, stable job opportunities, and a future-proof career — even if you're switching from a different path.",
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
      <Hero2 data={heroData} pageSource={"cyber_security"} />
      <Students
        title={
          <span>
            100%{" "}
            <span className="text-[#0A1F14]">of Our Students Land Jobs</span>
            <br />
            Within 60 Days
          </span>
        }
        students={profiles}
      />
      <Partner_slider />
      <CyberSecurityBenefits
        reasons={reasons}
        title={"Cyber Security Course Is For You If..."}
        subtitle={
          "With Cyber Security and Ethical Hacking skills, you can unlock roles like"
        }
      />
      <CareerTransformation
        title={"Your Career Transformation Starts Here"}
        subtitle={
          "With Cyber Security and Ethical Hacking skills, you can unlock roles like"
        }
        roles={roles}
        salaryData={salaryData}
      />
      <WhyCyberSecurity
        data={cards}
        heading={
          <>
            Why Cyber Security Is Your Future-
            <br className="hidden md:block" />
            Proof Career Path
          </>
        }
        subheading={
          <>
            In Today&#39;s digital landscape, cyber threats are evolving faster
            than ever. Organizations worldwide are{" "}
            <br className="hidden md:block" /> desperately seeking skilled cyber
            security professionals to protect their critical assets.
          </>
        }
      />
      <ProgramHighlights
        data={services}
        title={
          <span>
            Cyber Security and Ethical Hacking{" "}
            <br className="hidden md:block" /> Program Highlights
          </span>
        }
      />
      <ToolsCarousel
        tools={tools}
        title="Tools and Technologies That You Will Learn"
        description="With Cyber Security and Ethical Hacking skills, you'll master these tools step-by-step."
      />
      <WhyChooseITpreneur
        title={"Why Choose ITpreneur?"}
        para={
          "iTpreneur is one of Maharashtra’s leading IT training institutes, known for its industry-aligned curriculum and strong placement support. With expert mentors and hands-on learning, we prepare students to confidently step into real-world IT roles — especially in high-demand fields like Cyber Security."
        }
      />
      <HearformStud />
      <CareerSuccess />
      <FaqSection faqData={faqData} />
      <Enroll2
        title={
          <span>
            Take the First Step Toward <br /> Your Cyber Security Career
          </span>
        }
        para={
          <span>
            Fill out the form below to get started. One of our career counselors
            will <br /> get in touch with you to help you choose the right
            course and guide <br /> you through the enrollment process.
          </span>
        }
        pageSource={"cyber_security"}
      />
      <StickyFooter />
    </>
  );
}
