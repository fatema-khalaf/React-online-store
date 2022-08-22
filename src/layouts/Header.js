import NavbarList from "../components/navbar/NavbarList";
import styles from "../theme/main.module.scss";
import logo from "../logo3.png";
import NavbarIcons from "../components/navbar/NavbarIcons";

const Header = () => {
  const items = [
    "item test",
    "item test",
    "item test",
    "item test",
    "item test",
  ];
  return (
    <header className={styles["header"]}>
      <div className={styles["logo"]}>
        <img src={logo} className={styles["logo__img"]} />
      </div>
      <div>
        <NavbarList items={items} />
      </div>
      <div>
        <NavbarIcons />
      </div>
    </header>
  );
};
export default Header;
