import BlackoutText from "@/components/blocks/BlackoutText";
import styles from "./index.module.scss";

const HeroSection: React.FunctionComponent = () => {
  return (
    <div className="row-container">
      <div className={`row column-reverse-sm ${styles.content}`}>
        <div className="col-4-lg col-4-md col-12-sm">
          <img
            className={styles.image}
            src="/assets/images/homePage/heroImage.png"
            alt=""
          />
        </div>
        <div
          className={`col-8-lg col-8-md col-12-sm ${styles.textContent}`}
        >
          <h1>Unlocking the <BlackoutText text="Fake Ass" /> Secrets of the <BlackoutText text="Stupid" /> Universe:</h1>
          <span className="subheading1">One <BlackoutText text="Baseless" /> Book at a Time</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
