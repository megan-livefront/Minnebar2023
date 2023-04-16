import GridOverlay from "@/components/infrastructure/GridOverlay";
import ScrollingCategoriesBar from "@/components/blocks/ScrollingCategoriesBar";
import Header from "@/components/infrastructure/Header";
import HeroSection from "./HeroSection";
import NewArrivalsSection from "./NewArrivalsSection";
import DicksPicksSection from "./DicksPicksSection";
import Footer from "@/components/infrastructure/Footer";

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <GridOverlay />
      <Header />
      <HeroSection />
      <NewArrivalsSection />
      <DicksPicksSection />
      <Footer />
    </>
  );
}

export default HomePage
