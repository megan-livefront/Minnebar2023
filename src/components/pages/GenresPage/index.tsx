import { Inter } from "next/font/google";
import styles from "./index.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container row-container-center">
      <div className="row">
        <div className="col-3">Genre here!</div>
        <div className="col-3">Genre here!</div>
        <div className="col-3">Genre here!</div>
        <div className="col-3">Genre here!</div>
      </div>
      <div className="row">
        <div className="col-2">Genre here!</div>
        <div className="col-8">Genre here!</div>
        <div className="col-2">Genre here!</div>
      </div>
    </div>
  );
}
