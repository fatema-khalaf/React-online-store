import styles from "../../theme/main.module.scss";

const NavbarItem = ({ item }) => {
  return (
    <li className={`${styles["body-1"]} ${styles["nav__link"]}`}>{item}</li>
  );
};
export default NavbarItem;
