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
    title: "Step Into the World of High-Paying IT Careers",
    Partnertitle: "Our Accreditations",
    subtitle: (
      <span className="text-[#FFFFFFCC]">
        Become a{" "}
        <span className="text-white font-bold">Full Stack Java Developer</span>
      </span>
    ),

    // description: (
    //   <ul className="list-disc pl-5 text-[18px] md:text-[20px] md:max-w-xl font-normal space-y-2">
    //     <li>100% Job Guarantee</li>
    //     <li>300+ Placement Partners</li>
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
        imgSrc: "/icon/s6.png",
        main: "Master",
        sub: "Coding Skills",
      },
      {
        imgSrc: "/icon/s5.png",
        main: "1,200+",
        sub: "Placement Partners",
      },
    ],

    notice: "2735 Students Have Registered So Far!",
    noticePara: "Limited Seats. Register your interest for FREE.",
    backgroundImage: "/icon/java_bg.webp",
    instituteNote:
      "iTpreneur is a hallmark of quality and a highly regarded \n IT Training & Job Placement institute in India",
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
    "Full Stack Developer",
    "Java Developer",
    "Software Engineer",
    "Backend Developer",
    "Web Developer",
  ];

  const salaryData = [
    {
      range: "₹2.5 to 5 LPA",
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
      question: "What makes this course different from other IT courses?",
      answer:
        "Our course combines hands-on projects, expert-led training, and job placement support, ensuring you're not just learning, but ready to start your IT career with real-world experience.",
    },
    {
      id: 2,
      question: "Do I need prior experience to join this course?",
      answer:
        "No prior experience is needed. This course is designed for freshers and anyone looking to make a career switch, giving you the skills and confidence you need to succeed in IT.",
    },
    {
      id: 3,
      question: "How soon will I get a job after completing the course?",
      answer:
        "Our course includes job placement assistance, helping you connect with top companies. While job timelines vary, our students have successfully secured positions soon after completing the course.",
    },
    {
      id: 4,
      question: "Who can join this program?",
      answer:
        "Final-year students, fresh graduates, and working professionals looking to upskill or switch careers.",
    },
    {
      id: 5,
      question: "Will I get hands-on experience during the course?",
      answer:
        "Yes! You'll work on real-world projects, giving you practical experience and the chance to showcase your skills to potential employers.",
    },
    {
      id: 6,
      question: "What is the duration of the course?",
      answer:
        "The program is designed to be completed in 180 days, with flexible learning options.",
    },

    {
      id: 8,
      question: "Is there a job guarantee?",
      answer:
        "Yes, we offer a 100% job guarantee with a Day 1 offer letter or a refund policy.",
    },
    {
      id: 9,
      question: "What if I don't get placed after completing the course?",
      answer:
        "We are committed to your success. If you face challenges finding a job, we'll continue to support you with extra career coaching and job search assistance until you secure a role.",
    },
    {
      id: 10,
      question: "How flexible is the course schedule?",
      answer:
        "Our courses are designed to be flexible, with options to learn at your own pace while still receiving support from instructors and peers.",
    },
    {
      id: 11,
      question:
        "What kind of job roles can I expect after completing this course?",
      answer:
        "You can expect to qualify for roles like Java Full Stack Developer, Front-End Developer, Back-End Developer, and other high-demand IT positions.",
    },
    {
      id: 12,
      question: "Is financial support available for the course?",
      answer:
        "We offer flexible payment plans and financing options, making it easier for you to start your career in IT without financial stress.",
    },
    {
      id: 13,
      question: "What kind of salary can I expect after completing the course?",
      answer:
        "Graduates of this course have gone on to secure jobs with competitive salary packages in the IT industry. Salaries vary depending on the role and location but can range from ₹2.5 LPA to ₹10 LPA for entry-level positions.",
    },
    {
      id: 14,
      question: "What kind of projects will I work on?",
      answer:
        "Real-world projects like e-commerce platforms, library management systems, and more, using tools like Git, JIRA, and Jenkins.",
    },
    {
      id: 15,
      question:
        "How will this course help me transition from a non-technical background?",
      answer:
        "This course is designed to make the transition smooth for non-technical individuals. You'll learn step-by-step, from basic concepts to advanced skills, so you can confidently enter the IT field.",
    },
  ];
  const reasons = [
    "You're An Engineering Graduate But Still Job Hunting.",
    "You're Exhausted By The MPSC/UPSC Grind.",
    "You're Looking To Switch Into A Stable, High-Demand IT Career.",
    "You Want A Future-Proof Skill With Global Demand.",
  ];
  const tools = [
    { title: "Core Java", icon: "/tech/java-1.png" },
    { title: "Spring", icon: "/tech/java-2.png" },
    { title: "Spring Boot", icon: "/tech/java-3.png" },
    { title: "Maven", icon: "/tech/java-5.png" },
    { title: "J-Unit 5", icon: "/tech/java-6.png" },
    { title: "Mockito", icon: "/tech/java-7.png" },
    { title: "Spring Security", icon: "/tech/java-4.png" },
    { title: "HTML - CSS - JS", icon: "/tech/java-8.png" },
    { title: "Angular", icon: "/tech/java-9.png" },
    { title: "My SQL", icon: "/tech/java-10.png" },
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
    ctaText: "Get Free Career Consultation",
  };

  return (
    <>
      <Header2 />
      <ProfessionalMarquee />

      <Hero2 data={heroData} pageSource={"Java_Full_Stack_Developer_meta"} />
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
      <ITStruggleSection data={itStruggleData} />
      <CyberSecurityBenefits
        reasons={reasons}
        title={"Java Full Stack Course Is For You If..."}
        subtitle={
          "This Java Full Stack Journey Is Designed For Individuals Who"
        }
      />

      <CareerTransformation
        title={"Your Career Transformation Starts Here"}
        subtitle={
          "With Java Full Stack Development skills, you can unlock roles like"
        }
        roles={roles}
        salaryData={salaryData}
      />
      <WhyChoose
        data={cards}
        heading={
          <>
            Why Choose iTpreneur for Full Stack
            <br className="hidden md:block" />
            Java Development Program?
          </>
        }
        subheading={
          <>
            In today&#39;s competitive tech landscape, companies are desperately
            seeking skilled Full Stack <br className="hidden md:block" /> Java
            developers who can build complete applications from front to back.
          </>
        }
      />

      <ProgramHighlights
        data={services}
        title={
          <span>
            Java Full Stack Development <br className="hidden md:block" />{" "}
            Program Highlights
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
        description="With Full Stack Java Development, you'll master these tools step-by-step."
        hideSecondRow={true}
      />
      <WhyChooseITpreneur
        title={"Shaping Tomorrow's Tech Workforce"}
        subtitle={"We Are iTpreneur"}
        para={
          <span>
            iTpreneur is one of the Best IT Training Institutes in Pune, India,
            dedicated to introducing new skills and talent into India&apos;s IT
            sector. We take pride in offering comprehensive services that span
            IT recruitment and skill development, helping over 4000 individuals
            launch their careers in tech while simultaneously supporting their
            professional growth through expert training and strategic placement.
            <br />
            <br />
            With a global outlook and a deep-rooted focus on India&apos;s IT
            ecosystem, iTpreneur aims to bridge the skills gap by preparing
            candidates for the workforce of tomorrow. Our mission is clear: To
            drive IT growth, both locally and globally, for the benefit of our
            candidates, clients, and the ever-expanding IT sector.
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
            Take the First Step Toward <br className="hidden md:block" /> Your
            Java Full Stack Developer
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
        pageSource={"Java_Full_Stack_Developer_meta"}
      />

      <StickyFooter2
        message={
          "Register yourself for Full Stack Java Development Program with 100% Job Guarantee Assurance"
        }
      />
    </>
  );
}
