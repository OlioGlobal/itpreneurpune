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
    title: "Step Into the World of Creative & High-Paying Design Careers",
    Partnertitle: "Our Accreditations",
    subtitle: (
      <span className="text-[#FFFFFFCC]">
        Become a Master of
        <span className="text-white font-bold">
          {" "}
          UI/UX Design & Front-End Development
        </span>
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
        imgSrc: "/icon/s6.png",
        main: <span>Learn from</span>,
        sub: "Industry Designers",
      },
      {
        imgSrc: "/icon/s5.png",
        main: " 1,200+",
        sub: "Placement Partners",
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
    "Product Designer",
    "Front-End Developer",
    "Visual Designer",
    "Interaction Designer",
    "Design Analyst",
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
      range: "₹10+ LPA",
      level: "Senior-level Job",
      color: "text-[#6726D9] border-[#6726D9]",
    },
  ];
  const services = [
    {
      id: 1,
      title: "120 Days of Creative Learning",
      description:
        "85% practical, 15% conceptual — learn to design intuitive, user-focused interfaces with real-time mentorship.",
      image: "/icon/h1.jpg",
    },
    {
      id: 2,
      title: "Live Sessions + Video Lectures",
      description:
        "Learn at your own pace while mastering design tools and techniques.",
      image: "/icon/h2.jpg",
    },
    {
      id: 3,
      title: "Hands-On Experience",
      description:
        "Work on real projects — from wireframing to prototyping — and build a professional portfolio on Figma, Adobe XD, and Illustrator.",
      image: "/icon/h3.jpg",
    },
    {
      id: 4,
      title: "Mock Interviews",
      description:
        "Gain confidence with design-specific and HR interview prep sessions led by industry mentors.",
      image: "/icon/h4.jpg",
    },
    {
      id: 5,
      title: "Placement Assistance",
      description: "100% job guarantee with access to 1,200+ hiring partners.",
      image: "/icon/h5.jpg",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "Who can join this program?",
      answer:
        "Anyone with a creative mindset — graduates from any stream can apply.",
    },
    {
      id: 2,
      question: "Do I need coding experience?",
      answer: "Not required! We teach the technical side from scratch.",
    },
    {
      id: 3,
      question: "Is there job assistance?",
      answer: "Yes! 100% placement guarantee with interview preparation.",
    },
    {
      id: 4,
      question: "What kind of projects will I work on?",
      answer: "Real-world app and web design projects for your portfolio.",
    },
  ];

  const reasons = [
    "You’re a creative thinker passionate about design & technology.",
    "You want to master design tools and front-end development.",
    "You want to switch from a non-IT background to a creative IT role.",
    "You want a future-proof design career with global opportunities.",
  ];
  const tools = [
    { title: "Adobe XD", icon: "/tech/Adobe XD.png" },
    { title: "Canva", icon: "/tech/Canva.png" },
    { title: "Design Thinking", icon: "/tech/Design Thinking.png" },
    { title: "Figma", icon: "/tech/Figma.png" },
    { title: "Illustrator", icon: "/tech/Illustrator.png" },
    { title: "Photoshop", icon: "/tech/Photoshop.png" },
    { title: "Usability Testing", icon: "/tech/Usability Testing.png" },
    { title: "HTML", icon: "/tech/HTML.png" },
    { title: "CSS", icon: "/tech/CSS.png" },
    { title: "JS", icon: "/tech/JavaScript.png" },
    { title: "React", icon: "/tech/React.png" },
    { title: "Git - GitHub", icon: "/tech/dot10.png" },
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

      <Hero2 data={heroData} pageSource={"UI/UX-Design-Development"} />
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
            UI/UX Design & Development <br /> Program Is for You If...
          </span>
        }
        subtitle={""}
      />

      <CareerTransformation
        title={"Your Career Transformation Starts Here"}
        subtitle={
          " Gain hands-on experience and mentorship to unlock roles like:"
        }
        roles={roles}
        salaryData={salaryData}
      />
      <WhyChoose
        data={cards}
        heading={
          <>
            Why Choose Our UI/UX Design
            <br className="hidden md:block" />& Development Program?
          </>
        }
        subheading={
          <>
            This program combines user research, wireframing, prototyping, and
            front-end technologies (HTML, CSS, JavaScript, React) to help you
            create user-friendly digital experiences. Learn with real-world
            projects, using tools like Figma, Adobe XD, and Illustrator, while
            building a standout portfolio.
          </>
        }
      />

      <ProgramHighlights
        data={services}
        title={
          <span>
            UI/UX Design & Development
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
        description="With UI/UX Design & Development, you'll master these tools step-by-step."
        hideSecondRow={true}
      />
      <WhyChooseITpreneur
        title={"Why UI/UX Design & Development?"}
        subtitle={"We Are iTpreneur"}
        para={
          <span>
            From apps to websites, seamless user experience is key. As global
            companies prioritize human-centered design, the demand for UI/UX
            professionals is booming. Combine creativity with technical skills
            to design impactful solutions and land high-paying IT roles.
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
            <br className="hidden md:block" /> Your Design Career
          </span>
        }
        para={
          <span>
            Fill out the form to connect with our career counselor{" "}
            <br className="hidden md:block" /> who’ll guide you through the
            program, portfolio building, <br className="hidden md:block" /> and
            placement process. process.
          </span>
        }
        pageSource={"UI/UX-Design-Development"}
      />

      <StickyFooter2
        message={
          "Register yourself for UI/UX Design & Development Program with 100% Job Guarantee Assurance"
        }
      />
    </>
  );
}
