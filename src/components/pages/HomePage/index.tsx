import GridOverlay from "@/components/infrastructure/GridOverlay";
import Header from "@/components/infrastructure/Header";
import HeroSection from "./HeroSection";
import NewArrivalsSection from "./NewArrivalsSection";
import RicksPicksSection from "./RicksPicksSection";
import Footer from "@/components/infrastructure/Footer";

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <GridOverlay />
      <Header />
      <HeroSection />
      <NewArrivalsSection />
      <RicksPicksSection />
      <Footer />
    </>
  );
}

export default HomePage
