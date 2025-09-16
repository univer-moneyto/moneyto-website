import HeroSection from "../components/HeroSection";
import PetSection from "../components/PetSection";
import ServiceSectionPart1 from "../components/ServiceSectionPart1";
import ServiceSectionPart2 from "../components/ServiceSectionPart2";
import GiftCardSection from "../components/DownloadSection";
import { useScrollSnap } from "../hooks/useScrollSnap";

const HomePage = () => {
  useScrollSnap();

  return (
    <div>
      <HeroSection />
      <PetSection />
      <ServiceSectionPart1 />
      <ServiceSectionPart2 />
      <GiftCardSection />
    </div>
  );
};

export default HomePage;
