import GridOverlay from "@/components/blocks/GridOverlay";
import Header from "@/components/infrastructure/Header";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";

export default function Home() {
  return (
    <>
      {/* <GridOverlay /> */}
      <Header />
      <HeroSection />
      <SearchSection />
    </>
  );
}
