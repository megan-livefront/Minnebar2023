import styles from "./index.module.scss";

const DesktopTabletNav: React.FunctionComponent = () => {
  return (
    <div className={`${styles.tabletAndUpNav} tablet-and-up`}>
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
        <img
          src="/assets/icons/shoppingBagIcon.svg"
          alt="Shopping bag"
        />
      </a>
    </div>
  );
};

const MobileNav: React.FunctionComponent = () => {
  return (
    <div className="mobile-and-down">
      <img src="/assets/icons/menu.svg" alt="navigation menu" />
    </div>
  );
};

const Header: React.FunctionComponent = () => {
  return (
    <div className="row-container">
      <div className="row">
        <div className="col-6-lg col-6-md col-1-sm">
          <img
            className={styles.logo}
            src="/assets/logos/logo.svg"
            alt="The Tinfoil hat logo"
          />
        </div>
        <div className={`col-6-lg col-6-md col-1-sm ${styles.nav}`}>
          <DesktopTabletNav />
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
