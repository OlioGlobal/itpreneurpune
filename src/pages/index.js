import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUs from "../../components/main/about-us";
import BenefitsSection from "../../components/main/Benefits";
import StatsSection from "../../components/main/counts";
import CourseGrid from "../../components/main/Courses";
import Enroll from "../../components/main/Enroll";
import Hero from "../../components/main/Hero";
import Placement from "../../components/main/Placement";
import ProcessSection from "../../components/main/Process";
import CompanyLogoDoubleCarousel from "../../components/main/Recruiters";
import Testimonials from "../../components/main/Reviews";
import StickyFooter from "../../components/StickyFooter";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Placement />
      <CompanyLogoDoubleCarousel />
      <CourseGrid />
      <Testimonials />
      <StatsSection />
      <BenefitsSection />
      <AboutUs />
      <ProcessSection />
      <Enroll />
      <StickyFooter />
    </>
  );
}
