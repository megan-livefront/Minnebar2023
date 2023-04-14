import styles from "./index.module.scss";

type Props = {
  placeholder: string;
  icon?: {
    src: string;
    altText: string;
  };
};

const InputField: React.FunctionComponent<Props> = ({ placeholder, icon }) => {
  return (
    <div className={styles.container}>
      {icon && <img src={icon.src} alt={icon.altText} />}
      <input
        className={styles.input}
        placeholder={placeholder}
        aria-label={placeholder}
      ></input>
    </div>
  );
};

export default InputField;
