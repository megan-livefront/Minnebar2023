import BlackoutText from "@/components/blocks/BlackoutText";
import Button from "@/components/elements/Button";
import BookPick from "@/components/blocks/BookPick";
import content from "@/content/book-picks-v1.json";
import styles from "./index.module.scss";

const DicksPicksSection: React.FunctionComponent = () => {
  const { books } = content.attributes;

  return (
    <div className={`${styles.container} row-container`}>
      <div className="row">
        <div className={`${styles.headingWrapper} col-12`}>
          <h3>
            <BlackoutText text="Ridiculous" /> Dick's Picks
          </h3>
          <Button
            style="outlined"
            icon={{
              src: "/assets/images/icons/arrowPrimary.svg",
              altText: "right arrow",
              alignment: "after",
            }}
          >
            See all
          </Button>
        </div>
      </div>
      <div className={`${styles.introWrapper} row`}>
        <div className={`${styles.headingWrapper} col-8`}>
          <div>
            Welcome to Dick’s Picks, where you can find all of the books the
            government doesn't want you to read. This collection of books are
            for those who love to question everything, except their own critical
            thinking skills. If you're ready to take the red pill and dive
            headfirst into your great awakening, then look no further.
          </div>
        </div>
        <div className={`${styles.headingWrapper} col-4`}>
          <div>placeholder</div>
        </div>
      </div>
      <div className="row">
        <div className={`${styles.booksWrapper} col-12`}>
          {books.map((book) => (
            <BookPick
              title={book.title}
              imgSrc={book.imgSrc}
              price={book.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DicksPicksSection;
