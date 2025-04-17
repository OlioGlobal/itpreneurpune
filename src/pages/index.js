import Header from "../../components/Header";
import AboutUs from "../../components/main/about-us";
import BenefitsSection from "../../components/main/Benefits";
import StatsSection from "../../components/main/counts";
import CourseGrid from "../../components/main/Courses";
import Hero from "../../components/main/Hero";
import Placement from "../../components/main/Placement";
import ProcessSection from "../../components/main/Process";
import CompanyLogoDoubleCarousel from "../../components/main/Recruiters";
import Testimonials from "../../components/main/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Placement />
      <CompanyLogoDoubleCarousel />
      <CourseGrid />
      <Testimonials />
      <StatsSection />
      <BenefitsSection />
      <AboutUs />
      <ProcessSection />
    </>
  );
}
