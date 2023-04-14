import BlackoutText from "@/components/blocks/BlackoutText";
import styles from "./index.module.scss";

export default function HeroSection() {
  return (
    <div className="row-container">
      <div className={`row ${styles.content}`}>
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
          <p className="subheading">One Bullshit Book at a Time</p>
        </div>
      </div>
      <div className={`row ${styles.searchSection}`}>
        <div
          className={`col-7-lg col-7-md col-12-sm ${styles.textContent}`}
        >
          <input />
        </div>
      </div>
    </div>
  );
}
