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
import ProfessionalMarquee from "../../components/ProfessionalMarquee";
import ITStruggleSection from "../../components/main/ITStruggleSection";
import ProfessionalMarqueeForSimpleText from "../../components/ProfessionalMarqueeForSimpleText";
import Student2 from "../../components/cyber_page/student2";
import Testimonials from "../../components/main/Reviews";

export default function Full_stack() {
  const heroData = {
    title: "Start Your Journey in Business Analysis & Data Analytics Today!",
    Partnertitle: "Our Accreditations",
    subtitle: (
      <span className="text-[#FFFFFFCC] text-[22px]">
        Master the essential skills needed for high-demand roles in{" "}
        <br className="hidden md:block" /> Business Analysis and Data Analytics
        with hands-on training <br className="hidden md:block" /> and a
        <span className="text-white font-bold"> guaranteed job offer.</span>
      </span>
    ),

    // description: (
    //   <ul className="list-disc pl-5 text-[18px] md:text-[20px] md:max-w-xl font-normal space-y-2">
    //     <li>100% Job Guarantee</li>
    //     <li>1,200+ Placement Partners</li>
    //     <li>Master Coding Skills</li>
    //   </ul>
    // ),

    section: [
      {
        imgSrc: "/icon/s7.png",
        main: "100%",
        sub: "Job Guarantee",
      },

      {
        imgSrc: "/icon/s5.png",
        main: " 1,200+",
        sub: "Placement Partners",
      },
      {
        imgSrc: "/icon/s5.png",
        main: "12000+",
        sub: "Students Placed",
      },
    ],

    notice: "2735 Students Have Registered So Far!",
    noticePara: "Limited Seats. Register your interest for FREE.",
    backgroundImage: "/icon/java_bg.webp",
    instituteNote:
      "iTpreneur is an ISO-certified institute offering industry-recognized, job-oriented training and placement programs.",
    partnerLogos: [
      {
        src: "/icon/aicte.png",
        alt: "AICTE",
        name: (
          <span>
            All India Council <br /> for Technical <br /> Education
          </span>
        ),
      },
      {
        src: "/icon/nsdc-logo.png",
        alt: "NSDC",
        name: (
          <span>
            National Skill <br /> Development Corporation (NSDC)
          </span>
        ),
      },
      {
        src: "/icon/aictsd-logo.png",
        alt: "AICSTD",
        name: (
          <spna>
            All India Council <br /> for Technical Skill Development
          </spna>
        ),
      },
      {
        src: "/icon/skill-india-logo.png",
        alt: "Skill India",
        name: (
          <span>
            National Skills Development Mission <br /> of India
          </span>
        ),
      },
      {
        src: "/icon/iso.png",
        alt: "ISO",
        name: (
          <span>
            International <br /> Organization <br /> for Standardization
          </span>
        ),
      },
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
        <ul className="list-disc list-inside ">
          <li>Mock interviews and grooming sessions</li>
          <li>Resume building and LinkedIn optimization</li>
          <li>
            Access to 1,200+ hiring partners, including top MNCs and startups
          </li>
        </ul>
      ),
      icon: "/icon/gd5.png",
    },
  ];
  const roles = [
    "Business Analyst",
    "Business Analyst",
    "Data Scientist",
    "Business Intelligence Analyst",
    "Data Visualization Specialist",
  ];

  const salaryData = [
    {
      range: "₹2.5 to 5 LPA",
      level: "Junior level",
      color: "text-[#0E75A9] border-[#0E75A9]",
    },
    {
      range: "₹6 to 10 LPA",
      level: "Mid-level Job",
      color: "text-[#C07B19] border-[#C07B19]",
    },
    {
      range: "₹14+ LPA",
      level: "Senior-level Job",
      color: "text-[#6726D9] border-[#6726D9]",
    },
  ];
  const services = [
    {
      id: 1,
      title: "120 Days of Intensive Training",
      description: "85% practical, 15% theory",
      image: "/icon/h1.jpg",
    },
    {
      id: 2,
      title: "Live Sessions + Video Lectures",
      description: "Learn at your own pace",
      image: "/icon/h2.jpg",
    },
    {
      id: 3,
      title: "Hands-On experience",
      description: "Build real-world projects and showcase them on GitHub",
      image: "/icon/h3.jpg",
    },
    {
      id: 4,
      title: "Mock Interviews",
      description: "Prepare for technical and HR rounds with confidence",
      image: "/icon/h4.jpg",
    },
    {
      id: 5,
      title: "Placement Assistance",
      description: "100% job guarantee with access to 1,200+ hiring partners",
      image: "/icon/h5.jpg",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "Do I need prior technical knowledge to join this program?",
      answer:
        "No, this program is designed for beginners. We’ll start with the basics and take you through advanced concepts.",
    },
    {
      id: 2,
      question: "How is the job assistance provided?",
      answer:
        "We provide 100% job guarantee support, including mock interviews, resume building, and direct placement opportunities with our 300+ partners.",
    },
    {
      id: 3,
      question: "Is the program available online?",
      answer:
        "Yes, we offer both online and offline modes to cater to your learning preferences.",
    },
    {
      id: 4,
      question: "What roles will I qualify for after completing this course?",
      answer:
        "You will be prepared for various roles, including Business Analyst, Data Analyst, Data Scientist, and more.",
    },
  ];

  const reasons = [
    "You’re eager to analyze and interpret data to make informed business decisions.",
    "You want to learn how to gather, clean, and visualize data for actionable insights.",
    "You want to shift to an in-demand role in the data-driven business world, even with a non-IT background.",
    "You seek a future-proof career with global opportunities in business and data analytics.",
  ];
  const tools = [
    { title: "Excel", icon: "/tech/Excel.png" },
    { title: "Informatica", icon: "/tech/Informatica.png" },
    { title: "MySQL", icon: "/tech/MySQL.png" },
    { title: "NoSQL", icon: "/tech/NoSQL.png" },
    { title: "Power BI", icon: "/tech/Power BI.png" },
    { title: "Python", icon: "/tech/Python.png" },
    { title: "SQL", icon: "/tech/SQL.png" },
    { title: "Tableau", icon: "/tech/Tableau.png" },
    { title: "ChatGPT", icon: "/tech/ChatGPT.png" },
    { title: "AWS", icon: "/tech/AWS.png" },
    { title: "AI", icon: "/tech/AI.png" },
  ];

  const itStruggleData = {
    videoSrc: "/videos/Java.mp4",
    posterSrc: "/thumbnails/full-stack-java-thumnail.png",
    title: "Struggling to Kick Start a Career in IT?",
    description:
      "We understand the struggle of trying to break into the IT industry. The endless job applications, the pressure to have hands-on experience, and the feeling of being overlooked despite your potential.",
    struggles: [
      "Struggling to crack interviews?",
      "Not getting interview calls?",
      "No hands-on experience?",
      "Unsure how to bridge your career gap?",
      "Rejected despite the right qualifications?",
      "Confused by industry tools and tech?",
      "Overwhelmed by job market competition?",
      "Want to switch to IT from another field?",
      "Lost confidence after rejections?",
      "Lack the right connections?",
      "Don't know which IT skill to focus on?",
      "Unsure where to start your IT career?",
    ],
    ctaText: "Get Career Consultation",
  };

  return (
    <>
      <Header2 />
      <ProfessionalMarquee />

      <Hero2 data={heroData} pageSource={"bussiness-and-data-analytics"} />
      <ProfessionalMarqueeForSimpleText />
      <Student2
        title="Struggling to start your IT career?"
        paragraph="Join over 12,000+ people who’ve kickstarted their careers with great salary packages."
        bgColor="#ffffff"
      />
      {/* <StudentCarousel
        title={
          <span className="text-[#163123]">
            Struggling to start your IT career?
          </span>
        }
        subtitle={
          "Join over 12,000+ people who’ve kickstarted their careers with great salary packages."
        }
        students={profiles}
      /> */}
      <Partner_slider />

      <CyberSecurityBenefits
        reasons={reasons}
        title={
          <span>
            Business Analysis & Data Analytics <br /> Program Is for You If...
          </span>
        }
        subtitle={""}
      />

      <CareerTransformation
        title={"Your Career Transformation Starts Here"}
        subtitle={
          "Gain hands-on experience and mentorship to unlock roles like:"
        }
        roles={roles}
        salaryData={salaryData}
      />
      <WhyChoose
        data={cards}
        heading={
          <>
            Why Choose Our Business Analysis
            <br className="hidden md:block" />& Data Analytics Program?
          </>
        }
        subheading={
          <>
            <div className="flex flex-col gap-1">
              <div>
                {" "}
                Our program combines business analysis methodologies with data
                analytics tools to help you become a well-rounded professional.
                Whether you&apos;re analyzing business processes or uncovering
                data-driven insights, you&apos;ll learn the core competencies
                needed to succeed in these roles.{" "}
              </div>
              <div>
                {" "}
                With hands-on training, real-world projects, and 1:1 mentorship,
                you will build a standout portfolio that will open doors to
                exciting career opportunities.
              </div>
            </div>
          </>
        }
      />

      <ProgramHighlights
        data={services}
        title={
          <span>
            Business Analysis & Data Analytics
            <br className="hidden md:block" /> Program Highlights
          </span>
        }
      />
      <ToolsGrid
        tools={tools}
        title={
          <span>
            Tools and Technologies <br /> That You Will Learn
          </span>
        }
        description="With Business Analysis and Data Analytics, you'll master these tools step-by-step."
        hideSecondRow={true}
      />
      <WhyChooseITpreneur
        title={"Why Business Analysis & Data Analytics?"}
        subtitle={"We Are iTpreneur"}
        para={
          <span>
            Business Analysis and Data Analytics are crucial for driving
            business strategies. With high demand for data professionals, these
            roles offer lucrative pay and global opportunities. The field’s
            rapid evolution ensures continuous learning and career growth.
          </span>
        }
      />
      {/* <HearformStud /> */}
      <Testimonials title="Hear It From Our Students" subtitle={null} />
      <CareerSuccessComponents />
      <FaqSection faqData={faqData} />
      <Enroll2
        title={
          <span>
            Take the First Step Toward
            <br className="hidden md:block" /> Your Data Career
          </span>
        }
        para={
          <span>
            Fill out the form to connect with our career counselor, who will
            guide <br className="hidden md:block" /> you through the who will{" "}
            guide you through the program, help you build{" "}
            <br className="hidden md:block" /> your portfolio, and support you
            during the placement process.
          </span>
        }
        pageSource={"bussiness-and-data-analytics"}
      />

      <StickyFooter2
        message={
          "Register yourself for Business Analysis and Data Analytics Program with 100% Job Guarantee Assurance"
        }
      />
    </>
  );
}
