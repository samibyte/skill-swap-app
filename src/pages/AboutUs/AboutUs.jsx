import useAOS from "../../hooks/useAOS";
import HeroSection from "./components/HeroSection";
import StatsSections from "./components/StatsSections";
import OurStory from "./components/OurStory";
import OurTeam from "./components/OurTeam";
import CTASection from "./components/CTASection";
import OurValues from "./components/OurValues";
import Timeline from "./components/Timeline";

const AboutUs = () => {
  useAOS({ duration: 1200, once: true });

  return (
    <div className="min-h-screen bg-linear-to-b from-base-100 via-base-100 to-base-200">
      <HeroSection />
      <StatsSections />
      <OurStory />
      <OurValues />
      <OurTeam />
      <Timeline />
      <CTASection />
    </div>
  );
};

export default AboutUs;
