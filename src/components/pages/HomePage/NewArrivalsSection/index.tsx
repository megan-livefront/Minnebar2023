import styles from "./index.module.scss";
import content from "../../../../content/new-arrivals-v1.json";
import BookCard from "@/components/blocks/BookCard";

const NewArrivalsSection: React.FunctionComponent = () => {
  const { books } = content.attributes;

  return (
    <div className={`${styles.container} row-container`}>
      <div className="row-justify-center">
        <div className={`${styles.headingWrapper} col-12`}>
          <h2>New Arrivals</h2>
        </div>
      </div>
      <div className="row">
        {books.map((book) => (
          <div className={`${styles.bookCard} col-4-lg col-4-md col-12-sm`}>
            <BookCard
              imgSrc={book.imgSrc}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsSection;
