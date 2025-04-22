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
import Enroll from "../../components/main/Enroll";

export default function Cyber() {
  return (
    <>
      <Hero2 />
      <Students />
      <Partner_slider />
      <CyberSecurityBenefits />
      <CareerTransformation />
      <WhyCyberSecurity />
      <ProgramHighlights />
      <ToolsCarousel />
      <WhyChooseITpreneur />
      <StudentPlacedStats />
      <HearformStud />
      <CareerSuccess />
      <FaqSection />
      <Enroll2 />
    </>
  );
}
