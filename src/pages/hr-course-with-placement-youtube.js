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
import MythBuster from "../../components/HR/MythBuster";
import ProgramComparison from "../../components/HR/ProgramComparison";
import WhoIsThisProgramFor from "../../components/HR/WhoIsThisProgramFor";
import CareerJourney from "../../components/HR/CareerJourney";
import CareerTransformation_2 from "../../components/cyber_page/CareerTransformation";
import CareerTransformation from "../../components/HR/CareerTransformation";
import PlacementStats from "../../components/HR/PlacementStats";

export default function Full_stack() {
  const heroData = {
    title: (
      <span className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] leading-1.3">
        Launch Your HR Career in 90 Days - 100% Job Guarantee for Any Graduates
      </span>
    ),
    Partnertitle: "Our Accreditations",
    subtitle: (
      <span className="text-[#FFFFFFCC]">
        Transform from Any Graduate to{" "}
        <span className="text-white font-bold">HR Professional</span>
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
        imgSrc: "/icon/g.png",
        main: (
          <span>
            4.6 ★ <br />
            Google Rated
          </span>
        ),
        sub: "",
      },
      {
        imgSrc: "/icon/s.png",
        main: (
          <span>
            12000 + <br />
            Students
          </span>
        ),
        sub: "",
      },

      {
        imgSrc: "/icon/pp.png",
        main: (
          <span>
            1200+ <br /> Placement Partner
          </span>
        ),
        sub: "",
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
            Access to 300+ hiring partners, including top MNCs and startups
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
      title: " 10+ Years Industry Experience",
      description:
        "Our trainers currently work in HR departments of leading companies",
      image: "/icon/HR1.png",
    },
    {
      id: 2,
      title: "Real-World Curriculum",
      description:
        "Learn actual HR practices used in MNCs today, not outdated textbook theory",
      image: "/icon/HR@.png",
    },
    {
      id: 3,
      title: "1-to-1 Mentorship",
      description:
        "Personal doubt-clearing sessions, career guidance, and placement counseling",
      image: "/icon/HR3.png",
    },
    {
      id: 4,
      title: "Industry Connections",
      description:
        "Direct access to HR networks and hiring managers through trainer connections",
      image: "/icon/HR4.png",
    },
  ];
  const faqData = [
    {
      id: 1,
      question:
        "I'm a B.Com/B.Sc graduate with no HR background. Can I really become an HR professional?",
      answer:
        "Absolutely! This program is DESIGNED for non-HR graduates. We start from basics and teach you everything needed for HR roles. 70% of our placed students came from non-HR backgrounds.",
    },
    {
      id: 2,
      question:
        'What exactly does "100% Job Guarantee" mean? What if I don’t get placed?',
      answer:
        "We commit to providing you minimum 15-20 interview opportunities with our 300+ hiring partners. We continue scheduling interviews until you're placed. This is valid for 12 months post-completion, provided you meet attendance and project completion requirements.",
    },
    {
      id: 3,
      question: "How is this different from an HR MBA?",
      answer:
        "MBA takes 2 years and costs ₹5-10 lakhs. Our 90-day program costs a fraction, focuses 70% on practical skills, and gets you job-ready faster. Placement opportunities are comparable to MBA graduates in entry-level HR roles.",
    },
    {
      id: 4,
      question: "What HR roles will I qualify for after this program?",
      answer:
        "You’ll be eligible for roles such as HR Generalist, Talent Acquisition Specialist, HR Coordinator, Recruiter, HR Executive, HRBP, HR Operations, Payroll Specialist, and Training Coordinator.",
    },
    {
      id: 5,
      question: "Do I need to be in Pune? Is this online or offline?",
      answer:
        "Hybrid model - You can attend live online sessions from any where OR come to our Pune center. Internship can be done remotely or locally based on availability.",
    },
    {
      id: 6,
      question: "What's the typical salary for freshers in HR?",
      answer:
        "Entry-level HR roles range from ₹3-5 LPA. With good communication skills and our training, our students get ₹3.5-8 LPA depending on company, location, and interview performance.",
    },
    {
      id: 7,
      question:
        "What if I can’t attend classes daily due to my current job or college?",
      answer:
        "We offer flexible batch timings (morning/evening/weekend). All sessions are recorded for lifetime access. However, you must maintain 85% attendance for placement guarantee.",
    },
    {
      id: 8,
      question: "Will I get a certificate?",
      answer:
        "Yes, you receive iTpreneur HR Generalist Certification upon successful completion of training, projects, and internship. This is recognized by our 300+ hiring partners.",
    },
    {
      id: 9,
      question: "How much does the program cost? Are there EMI options?",
      answer:
        "Program fee is shared during free counseling sessions based on current offers. Yes, we have 0% EMI options and education loan assistance available.",
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
    ctaText: "Get Career Consultation",
  };

  return (
    <>
      <Header2
        links={[
          { href: "#Partners", label: "Placement Partners" },
          { href: "#why-itpm", label: "Why iTpreneur" },
          { href: "#Reviews", label: "Testimonials" },
          { href: "#FAQ", label: "FAQs" },
        ]}
      />

      <ProfessionalMarquee />
      <Hero2
        data={heroData}
        showAccreditations={false}
        pageSource={"hr-course-with-placement-youtube"}
      />
      <MythBuster />
      <Partner_slider
        title={
          <span>
            1,200+ Companies Trust <br /> Our Graduates
          </span>
        }
      />
      <PlacementStats />
      <ProgramComparison />
      <WhoIsThisProgramFor />
      <Testimonials title="Hear It From Our Students" subtitle={null} />
      <CareerTransformation_2 />
      <CareerJourney />
      <ProgramHighlights
        data={services}
        title={<span>Trained by Active HR Leaders, Not Just Trainers</span>}
      />
      <FaqSection faqData={faqData} />
      <Enroll2
        title={
          <span>
            Your HR Career Starts Here. <br className="hidden md:block" /> Take
            the First Step.
          </span>
        }
        para={
          <span>
            Join 30,000+ graduates who transformed their careers with
            <br className="hidden md:block" /> iTpreneur&apos;s 100% Job
            Guarantee
          </span>
        }
        pageSource={"hr-course-with-placement-youtube"}
      />
      <StickyFooter2
        message={
          "Register yourself for HR Program with 100% Job Guarantee Assurance"
        }
      />
      {/* <ProfessionalMarqueeForSimpleText /> */}
      {/* <Student2
        title="Struggling to start your IT career?"
        paragraph="Join over 12,000+ people who’ve kickstarted their careers with great salary packages."
        bgColor="#ffffff"
      /> */}
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
      {/* <ITStruggleSection data={itStruggleData} /> */}
      {/* <CyberSecurityBenefits
        reasons={reasons}
        title={"Java Full Stack Course Is For You If..."}
        subtitle={
          "This Java Full Stack Journey Is Designed For Individuals Who"
        }
      /> */}
      {/* <CareerTransformation
        title={"Your Career Transformation Starts Here"}
        subtitle={
          "With Java Full Stack Development skills, you can unlock roles like"
        }
        roles={roles}
        salaryData={salaryData}
      /> */}
      {/* <WhyChoose
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
      /> */}
      {/* <ToolsGrid
        tools={tools}
        title={
          <span>
            Tools and Technologies <br /> That You Will Learn
          </span>
        }
        description="With Full Stack Java Development, you'll master these tools step-by-step."
        hideSecondRow={true}
      /> */}
      {/* <WhyChooseITpreneur
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
      /> */}
      {/* <HearformStud /> */}
      {/* <Testimonials title="Hear It From Our Students" subtitle={null} />
      <CareerSuccessComponents /> */}
    </>
  );
}
