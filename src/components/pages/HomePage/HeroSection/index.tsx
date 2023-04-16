import ScrollingCategoriesBar from "@/components/blocks/ScrollingCategoriesBar";
import SearchSection from "./SearchSection";
import HeadingSection from "./HeadingSection";

const HeroSection: React.FunctionComponent = () => {
  return (
    <>
      <HeadingSection />
      <SearchSection />
      <ScrollingCategoriesBar />
    </>
  );
};

export default HeroSection;
