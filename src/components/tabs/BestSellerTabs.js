import styles from "../../theme/main.module.scss";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.webp";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../App.css";
import { useState } from "react";
import dataSlider from "./dataSlider";
import "./slide.css";

const BestSellerTabs = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className={`${styles["tabs-holder"]}`}>
      <h1 className={styles["h2"]}>Best Sellings</h1>
      <div className={styles["tab-header"]}>
        {Array.from({ length: 5 }).map((item, index) => (
          <p
            onClick={() => moveDot(index + 1)}
            // className={`slideIndex === index + 1 ? dot active : dot"`}
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
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img src={image3} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BestSellerTabs;
