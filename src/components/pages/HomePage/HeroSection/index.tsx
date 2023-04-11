import GridOverlay from "@/components/blocks/GridOverlay";
import Header from "@/components/infrastructure/Header";
import styles from "./index.module.scss";

export default function HeroSection() {
  return (
    <div className={`row-container ${styles.container}`}>
      <div className={`row ${styles.content}`}>
        <div className="col-5-lg col-5-md col-12-sm">
          <img
            className={styles.image}
            src="/assets/images/homeHeroImage.png"
            alt=""
          />
        </div>
        <div
          className={`col-7-lg col-7-md col-12-sm ${styles.textContent}`}
        >
          <h1>Unlocking the Secrets of the Universe:</h1>
          <p className={styles.subheading}>One Stupid Book at a Time</p>
        </div>
      </div>
    </div>
  );
}
