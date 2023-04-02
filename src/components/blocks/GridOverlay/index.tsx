import { Inter } from "next/font/google";
import styles from "./index.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function GridOverlay() {
  const twelveColumnRow = (
    <div className={`row ${styles.overlayRow}`}>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
      <div className={`col-1-lg col-1-md col-1-sm ${styles.overlayColumn}`}></div>
    </div>
  );
  return (
    <div className="row-container align-center">
      {twelveColumnRow}
    </div>
  );
}
