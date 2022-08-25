import styles from "../theme/main.module.scss";
import { useState } from "react";
// import "./slide.css";
import ProductCard from "../components/ProductCard";

const NewProducts = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={`${styles["tabs-holder"]} ${styles["tabs-holder--blue"]}`}>
      <h1 className={styles["h2"]}>New Arraivals</h1>
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
        {Array.from({ length: 5 }).map((obj, index) => {
          return (
            <div
              key={obj}
              className={`${styles["tab"]} ${
                slideIndex === index + 1 && styles["tab__active"]
              }`}
            >
              {/* <div className={styles["cards--holder"]}> */}
              <ProductCard />
              {/* <ProductCard /> */}
              {/* <ProductCard /> */}
              {/* </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NewProducts;
