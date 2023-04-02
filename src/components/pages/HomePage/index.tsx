import GridOverlay from "@/components/blocks/GridOverlay";
import { Inter } from "next/font/google";
import styles from "./index.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <GridOverlay />
    <div className="row-container align-center">
      <div className="row">
        <div className="col-3-lg col-3-md col-6-sm exampleContent">Megan here!</div>
        <div className="col-3-lg col-3-md col-6-sm exampleContent">Megan here!</div>
        <div className="col-3-lg col-3-md col-6-sm exampleContent">Megan here!</div>
        <div className="col-3-lg col-3-md col-6-sm exampleContent">Megan here!</div>
      </div>
      <div className="row">
        <div className="col-2-lg col-2-md col-2-sm exampleContent">Megan here!</div>
        <div className="col-8-lg col-8-md col-8-sm exampleContent">Megan here!</div>
        <div className="col-2-lg col-2-md col-2-sm exampleContent">Megan here!</div>
      </div>
      <div className="row align-center">
        <div className={`col-6-lg col-6-md col-12-sm ${styles.contentBlockLeft}`}>Block of image content</div>
        <div className={`col-6-lg col-6-md col-12-sm ${styles.contentBlockRight}`}>Block of text content</div>
      </div>
    </div>
    </>
  );
}
