import NavbarList from "../components/navbar/NavbarList";
import styles from "../theme/main.module.scss";
import logo from "../logo3.png";
import NavbarIcons from "../components/navbar/NavbarIcons";
import { useEffect, useState } from "react";

const Header = () => {
  const items = [
    "item test",
    "item test",
    "item test",
    "item test",
    "item test",
  ];
  const [back, setBack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (event) => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > document.documentElement.clientHeight - 100) {
      setBack(true);
    }
    if (winScroll < document.documentElement.clientHeight - 100) {
      setBack(false);
    }
  };

  return (
    <header className={`${styles["header"]} ${back && styles["header--2"]}`}>
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
