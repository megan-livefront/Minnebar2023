import ScrollingCategoriesBar from "@/components/blocks/ScrollingCategoriesBar";
import SearchSection from "./SearchSection";
import HeadingSection from "./HeadingSection";
import styles from './index.module.scss'

const HeroSection: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <HeadingSection />
      <SearchSection />
      <ScrollingCategoriesBar />
    </div>
  );
};

export default HeroSection;
