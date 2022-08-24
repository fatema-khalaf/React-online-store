import styles from "../../theme/main.module.scss";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.webp";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import { createRef, useEffect, useRef, useState } from "react";
const Slider = () => {
  const items = [
    {
      id: 0,
      image: image5,
      title: "this is thew main heading",
      caption: "Creative touch",
    },
    {
      id: 1,
      image: image4,
      title: "this is the second heading",
      caption: "Creative touch second",
    },
    {
      image: image8,
      title: "third",
      captiom: "third",
    },
    {
      image: image7,
      title: "third",
      captiom: "third",
    },
  ];

  const elementsRef = useRef(items.map(() => createRef()));
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const animate = async () => {
    elementsRef.current.map((ref, i) => {
      ref.current.firstChild.className = `${styles["slider__img"]}`;
      ref.current.lastChild.className = `${styles["slider__title"]}`;
      ref.current.className = `${styles["slider"]}`;
      setTimeout(() => {
        console.log(i);
        const z = window
          .getComputedStyle(ref.current)
          .getPropertyValue("z-index");
        ref.current.className = `${styles["slider"]} ${styles["blur"]}`;
        ref.current.firstChild.className = `${styles["slider__img"]} ${styles["img-scale"]}`;
        ref.current.lastChild.className = `${styles["slider__title"]} ${styles["title-scale"]}`;
        ref.current.style.zIndex = +z + 1;
      }, i * 4000);
    });
  };

  async function load() {
    for (var i = 0; i < 9; i++) {
      if (i !== 0) {
        animate();
      }
      if (i === 8) {
        i = 1;
      }
      await timer(16000); // this value must be items.length * item animation duration 4*4000
    }
  }
  load();

  return (
    <div className={styles["holder"]}>
      {items.map((item, i) => (
        <div key={i} ref={elementsRef.current[i]} className={styles["slider"]}>
          <div
            className={styles["slider__img"]}
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className={styles["slider__title"]}>
            <p className={styles["h4"]}>{item.caption}</p>
            <h1 className={styles["h1"]}>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Slider;
