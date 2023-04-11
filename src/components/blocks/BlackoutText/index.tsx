import styles from "./index.module.scss";

type Props = {
    text: string
}

const BlackoutText: React.FunctionComponent<Props> = ({ text }) => {
  return (
    <div className={styles.container} aria-hidden>
      {text}
      <div className={styles.blackoutLine}></div> 
    </div>
  );
}

export default BlackoutText
