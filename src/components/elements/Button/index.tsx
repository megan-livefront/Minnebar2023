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
  status?: "loading" | "disabled";
};

const Button: React.FunctionComponent<Props> = ({
  children,
  style,
  smallSize = false,
  icon,
  status,
}) => {
  const isLoading = status === "loading";
  const iconPlacementClass = icon && styles[`icon-${icon.alignment}`];
  const sizeClass = smallSize ? styles.small : "";
  const statusClass = status ? styles[status] : "";

  return (
    <button
      className={`${styles.container} ${styles[style]} ${statusClass} ${sizeClass} ${iconPlacementClass}`}
    >
      <img
        className={`${styles.loadingIcon} ${styles.icon}`}
        src="/assets/icons/loading.svg"
        alt="loading"
      />
      {icon && !isLoading && <img src={icon.src} alt={icon.altText} />}
      {children}
    </button>
  );
};

export default Button;
