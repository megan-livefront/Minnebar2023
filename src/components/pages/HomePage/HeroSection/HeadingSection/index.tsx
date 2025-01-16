import BlackoutText from "@/components/blocks/BlackoutText";
import styles from "./index.module.scss";

const HeadingSection: React.FunctionComponent = () => {
  return (
    <section className="row-container">
      <div className={`row column-reverse-sm ${styles.content}`}>
        <div className={`${styles.imageWrapper} col-4-lg col-6-md col-2-sm`}>
          <img
            className={styles.image}
            src="/assets/photos/heroImage.png"
            alt=""
          />
        </div>
        <div className={`col-7-lg col-6-md col-12-sm ${styles.textContent}`}>
          <h1>
            Unlocking the <BlackoutText text="possibly" /> true secrets of the{" "}
            <BlackoutText text="made up" /> universe
          </h1>
          <span className={`${styles.subheading} subheading1`}>
            One <BlackoutText text="baseless" /> book at a time
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
