import styles from "../../theme/main.module.scss";
import { useState } from "react";
import dataSlider from "./dataSlider";
import "./slide.css";
import DetailedProductCard from "../DetailedProductCard";

const BestSellerTabs = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
    setAnimate(true); // for rerun the keyfram animation on each view of new slide
  };

  const [animate, setAnimate] = useState(true);
  return (
    <div className={`${styles["tabs-holder"]}`}>
      <h1 className={styles["h2"]}>Best Sellings</h1>
      <div className={styles["tab-header"]}>
        {Array.from({ length: 5 }).map((item, index) => (
          <p
            onClick={() => moveDot(index + 1)}
            className={`${styles["tab-header__link"]} ${styles["h5"]} ${
              slideIndex === index + 1 && styles["tab-header__link--active"]
            }`}
          >
            Item {index}{" "}
          </p>
        ))}
      </div>
      <div className={styles["container-slider"]}>
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={`${styles["tab"]} ${
                slideIndex === index + 1 && styles["tab__active"]
              }`}
            >
              <DetailedProductCard animate={animate} setAnimate={setAnimate} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BestSellerTabs;
