import styles from "../theme/main.module.scss";
import image3 from "../assets/image3.jpg";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { useState } from "react";

const ProductCard = ({ animate, setAnimate }) => {
  const [fill, setFill] = useState(false);
  return (
    <div className={styles["card"]}>
      <div className={styles["card__img"]}>
        <img src={image3} />
      </div>
      <div className={styles["card__content"]}>
        <h1 className={styles["h2"]}>Product Name</h1>
        <p className={styles["body-1"]}>
          Lorem ipsum dolor sit amet, vis an labore percipit electram, eu his
          oblique ocurreret torquatos. Ex mei diam paulo.
        </p>
        <div className={styles["card__content--price"]}>
          <span className={styles["body-1"]} style={{ fontSize: "1.2rem" }}>
            Price:
          </span>
          <span
            className={styles["body-2"]}
            style={{ textDecoration: "line-through" }}
          >
            1200$
          </span>
          <span className={styles["body-2"]} style={{ fontSize: "1.2rem" }}>
            1200$
          </span>
        </div>
        <div className={styles["card__btns"]}>
          <a>
            <IoAddSharp className={styles["icon"]} />
          </a>
          <a onClick={() => setFill(!fill)}>
            {fill ? (
              <IoMdHeart className={styles["icon"]} />
            ) : (
              <IoMdHeartEmpty className={styles["icon"]} />
            )}
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
