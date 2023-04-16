import { ReactNode } from "react";
import styles from "./index.module.scss";

type Icon = {
  src: string;
  altText: string;
  alignment: "before" | "after";
};

type Props = {
  children: ReactNode;
  style: "solid" | "outlined";
  smallSize?: boolean;
  icon?: Icon;
  status?: "loading" | "disable" | "normal";
};

const Button: React.FunctionComponent<Props> = ({
  children,
  style,
  smallSize = false,
  icon,
  status = "normal",
}) => {
  const isLoading = status === "loading";
  const iconBefore = icon && icon.alignment === "before";
  const iconAfter = icon && icon.alignment === "after";
  const sizeClass = smallSize ? styles.small : ''

  return (
    <button
      className={`${styles.container} ${styles[style]} ${styles[status]} ${sizeClass}`}
    >
      <img
        className={`${styles.loadingIcon} ${styles.icon}`}
        src="/assets/icons/loading.svg"
        alt="loading"
      />
      {iconBefore && !isLoading && (
        <img className={styles.beforeIcon} src={icon.src} alt={icon.altText} />
      )}
      {children}
      {iconAfter && (
        <img className={styles.afterIcon} src={icon.src} alt={icon.altText} />
      )}
    </button>
  );
};

export default Button;
