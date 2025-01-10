import ScrollingCategoriesBar from "@/components/blocks/ScrollingCategoriesBar";
import SearchSection from "./SearchSection";
import HeadingSection from "./HeadingSection";
import styles from "./index.module.scss";

const HeroSection: React.FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <HeadingSection />
      <SearchSection />
      <ScrollingCategoriesBar />
    </section>
  );
};

export default HeroSection;
