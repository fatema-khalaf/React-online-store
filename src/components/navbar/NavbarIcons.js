import styles from "../../theme/main.module.scss";
import { IoSearch } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavbarIcons = () => {
  const items = [
    {
      link: "test",
      icon: <IoSearch />,
      id: 1,
    },
    {
      link: "test",
      icon: <HiOutlineUser />,
      id: 2,
    },
    {
      link: "test",
      icon: <MdOutlineShoppingCart />,
      id: 3,
    },
  ];
  return (
    <ul className={styles["nav"]}>
      <li className={`${styles["body-1"]} ${styles["nav__link"]}`}>Language</li>
      {items.map((item) => (
        <li
          className={`${styles["icon"]} ${styles["nav__link"]}`}
          key={item.id}
        >
          {item.icon}
        </li>
      ))}
      <li
        className={`${styles["icon"]} ${styles["nav__link"]} ${styles["nav__menu"]}`}
      >
        <HiOutlineMenuAlt3 />
      </li>
    </ul>
  );
};
export default NavbarIcons;
