import styles from "./index.module.scss";

const GridOverlay: React.FunctionComponent = () => {
  const rows = [...new Array(12)];
  const overlayRows = rows.map(() => (
    <div className={`col-1 ${styles.overlayColumn}`}></div>
  ));

  return (
    <div className={`${styles.container} row-container align-center`}>
      <div className={`row ${styles.overlayRow}`}>{overlayRows}</div>
    </div>
  );
};

export default GridOverlay;
