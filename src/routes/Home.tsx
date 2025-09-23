import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/Home/HeroSection";
import StatsSection from "../components/Home/StatsSection";
import ServiceGrid from "../components/Home/ServiceGrid";
import CTASection from "../components/Home/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
        <TopBar />
        <NavBar />
        <HeroSection />
        <StatsSection />
        <ServiceGrid />
        <CTASection />
        <Footer />
    </>
  )
}
