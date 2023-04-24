import styles from "./index.module.scss";

const GridOverlay: React.FunctionComponent = () => {
  const columns = [...new Array(12)];

  return (
    <div className={`${styles.container} row-container`}>
      <div className={`row ${styles.overlayRow}`}>
        {columns.map(() => (
          <div className={`col-1 ${styles.overlayColumn}`}></div>
        ))}
      </div>
    </div>
  );
};

export default GridOverlay;
