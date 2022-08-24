import styles from "../theme/main.module.scss";
import image3 from "../assets/image3.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

const DetailedProductCard = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const data = {
    name: "Product Name",
    brand: "brand",
    thambnail: image3,
    link: "#",
    images: [image4, image5, image7],
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["card__slider"]}>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={true} // should stop playing on user interaction
          interval={2000}
          bullets={false}
          fillParent={true}
          animation="openAnimation"
          AwesomeSliderStyles
        >
          {data.images.map((img) => (
            <div data-src={img} />
          ))}
        </AutoplaySlider>
      </div>
      <div className={styles["card__info"]}>
        <div className={styles["card__info--inner"]}>
          <div className={styles["card__info--inner--animate"]}>
            <span className={styles["body-2"]}>{data.brand} </span>
            <h3 className={styles["h3"]}>{data.name}</h3>
            <span className={styles["body-2"]}>Best selling this month</span>
            <button className={styles["btn"]}>Buy now</button>
          </div>
        </div>
      </div>
      <div className={styles["card__image"]}>
        <img src={image3} />
      </div>
    </div>
  );
};
export default DetailedProductCard;
