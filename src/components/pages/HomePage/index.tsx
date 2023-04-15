import GridOverlay from "@/components/blocks/GridOverlay";
import ScrollingCategoriesBar from "@/components/blocks/ScrollingCategoriesBar";
import Header from "@/components/infrastructure/Header";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import NewArrivalsSection from "./NewArrivalsSection";

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      {/* <GridOverlay /> */}
      <Header />
      <HeroSection />
      <SearchSection />
      <ScrollingCategoriesBar />
      <NewArrivalsSection />
    </>
  );
}

export default HomePage
