import BlackoutText from "@/components/blocks/BlackoutText";
import Button from "@/components/elements/Button";
import BookPick from "@/components/blocks/BookPick";
import content from "@/content/book-picks-v1.json";
import styles from "./index.module.scss";

const RicksPicksSection: React.FunctionComponent = () => {
  const { books } = content.attributes;
  const booksToDisplayDesktop = books;
  const booksToDisplayTabletAndDown = books.slice(0, 3);

  const getBookPicks = (booksToDisplay: typeof books, className: string) =>
    booksToDisplay.map((book, index) => (
      <div className={`${className} col-4 col-2-sm`} key={index}>
        <BookPick title={book.title} imgSrc={book.imgSrc} price={book.price} />
      </div>
    ));

  return (
    <div className={`${styles.container} row-container`}>
      <div className="row">
        <div className={`${styles.headingWrapper} col-12`}>
          <h3 className={styles.heading}>
            <BlackoutText text="Ridiculous" /> Rick's Picks
          </h3>
          <Button
            style="outlined"
            icon={{
              src: "/assets/icons/arrowPrimary.svg",
              altText: "right arrow",
              alignment: "after",
            }}
          >
            See All
          </Button>
        </div>
      </div>
      <div className={`${styles.introWrapper} row`}>
        <div className={`${styles.headingWrapper} col-8`}>
          <div className={styles.bodyText}>
            Welcome to Rick’s Picks, where you can find all of the books the
            government doesn't want you to read. This collection of books are
            for those who love to question everything, except their own critical
            thinking skills. If you're ready to take the red pill and dive
            headfirst into your great awakening, then look no further.
          </div>
        </div>
        <div className={`${styles.imgWrapper} col-4`}>
          <img src="/assets/photos/rick.png" alt="photo of Richard" />
        </div>
      </div>
      <div className="row">
        <div className={`${styles.booksWrapper} col-12`}>
          {getBookPicks(booksToDisplayTabletAndDown, "tablet-and-down")}
          {getBookPicks(booksToDisplayDesktop, "desktop-and-up")}
        </div>
      </div>
    </div>
  );
};

export default RicksPicksSection;
