import content from "@/content/footer-v1.json";
import styles from "./index.module.scss";

const Footer: React.FunctionComponent = () => {
  const { marketingBody, copyRight, linkCategories, socialIcons } =
    content.attributes;

  const socialSection = (
    <div className={styles.socialWrapper}>
      {socialIcons.map((icon) => (
        <img src={icon.src} alt={icon.altText} />
      ))}
    </div>
  );

  return (
    <>
      <div className={`row-container ${styles.container}`}>
        <div className="row">
          <div className={`${styles.logoWrapper} col-12`}>
            <img src="/assets/images/logo.svg" alt="tin foil hat logo" />
          </div>
        </div>
        <div className={`row ${styles.content}`}>
          <div
            className={`${styles.textAndSocial} col-6-lg col-12-md col-2-sm`}
          >
            <div className={styles.marketingBody}>{marketingBody}</div>
            <div className="desktop-and-up">
              {socialSection}
            </div>
          </div>
          <div className={`${styles.linkWrapper} col-6-lg col-12-md col-2-sm`}>
            {linkCategories.map((category, index) => (
              <div className={styles.linkCategory}>
                <div className={`${styles.linkCategoryHeading} subheading3`}>
                  {category.title}
                </div>
                {category.links.map((link) => (
                  <a className={styles.link} href={link.href}>
                    {link.text}
                  </a>
                ))}
                {index === linkCategories.length - 1 && (
                  <div className="tablet-and-down">{socialSection}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.copyRight} row-container`}>
        <div className="row">
          <div className="col-12">{copyRight}</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
