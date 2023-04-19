import styles from "./index.module.scss";

type Props = {
  title: string;
  imgSrc: string;
  price: string;
};

const BookPick: React.FunctionComponent<Props> = ({ title, imgSrc, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bookInfo}>
        <div className={styles.title}>{title}</div>
        <hr />
        <div className={styles.price}>{price}</div>
      </div>
      <img className={styles.bookCover} src={imgSrc} alt={`${title} book cover`} />
    </div>
  );
};

export default BookPick;
