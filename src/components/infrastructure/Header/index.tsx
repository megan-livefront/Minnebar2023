import styles from "./index.module.scss";

export default function Header() {
  return (
    <div className={`row-container ${styles.container}`}>
      <div className={`row ${styles.content}`}>
        <div className="col-6-lg col-6-md col-6-sm">
          <img
            className={styles.logo}
            src="/assets/images/logo.svg"
            alt="The Tinfoil hat logo"
          />
        </div>
        <div className={`col-6-lg col-6-md col-6-sm ${styles.nav}`}>
          <a className={styles.navLink} href="/">
            Home
          </a>
          <a className={styles.navLink} href="/">
            Shop
          </a>
          <a className={styles.navLink} href="/">
            About
          </a>
          <a className={styles.navLink} href="/">
            Account
          </a>
          <a className={styles.navLink} href="/">
            <img src="/assets/images/header/shoppingBagIcon.svg" alt="Shopping bag" />
          </a>
        </div>
      </div>
    </div>
  );
}
