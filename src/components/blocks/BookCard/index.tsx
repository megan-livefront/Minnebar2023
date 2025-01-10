import Button from "../../elements/Button";
import styles from "./index.module.scss";

type Props = {
  imgSrc: string;
  title: string;
  author: string;
  price: string;
};

const BookCard: React.FunctionComponent<Props> = ({
  imgSrc,
  title,
  author,
  price,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bookCoverWrapper}>
          <img
            className={styles.bookCover}
            src={imgSrc}
            alt={`${title} book cover`}
          />
        </div>
        <Button
          style="solid"
          icon={{
            src: "/assets/icons/orangeShoppingBag.svg",
            altText: "",
            alignment: "before",
          }}
        >
          <span>Add To Bag</span>
        </Button>
        <div className={styles.bookInfoWrapper}>
          <div className={styles.nameAndAuthor}>
            <span className="subheading3">{title}</span>
            <span className={styles.author}>{author}</span>
          </div>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
