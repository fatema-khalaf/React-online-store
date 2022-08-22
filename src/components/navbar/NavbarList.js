import styles from "../../theme/main.module.scss";
import NavbarItem from "./NavbarItem";

const NavbarList = ({ items }) => {
  console.log(items);
  return (
    <ul className={`${styles["nav"]} ${styles["nav__mid"]}`}>
      {items.map((item) => (
        <NavbarItem item={item} />
      ))}
    </ul>
  );
};
export default NavbarList;
