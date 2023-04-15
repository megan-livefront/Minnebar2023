import InputField from "@/components/elements/InputField";
import styles from "./index.module.scss";

const SearchSection: React.FunctionComponent = () => {
  const icon = {
    src: "/assets/images/icons/search.svg",
    altText: "search icon",
  };

  return (
    <div className={`row-container ${styles.container}`}>
      <div
        className={`row row-justify-end-md row-justify-end-lg ${styles.searchSection}`}
      >
        <div className={`col-7-lg col-12-md col-2-sm ${styles.textContent}`}>
          <div className={styles.searchHeader}>
            Ignite your great awakening
          </div>
          <InputField
            placeholder="Search for a title, author, or topic..."
            icon={icon}
          />
        </div>
      </div>
      <img
        className={styles.floatingImage}
        src="/assets/images/homePage/floatingSearchImage.png"
        alt="man in tinfoil hat reading"
      />
    </div>
  );
}

export default SearchSection
