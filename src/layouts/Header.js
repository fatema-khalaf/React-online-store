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
  //   componentDidMount: function() {
  //     window.addEventListener('scroll', this.handleScroll);
  // },

  // componentWillUnmount: function() {
  //     window.removeEventListener('scroll', this.handleScroll);
  // },
  // const handleScroll = (event) => {
  //   console.log("scrollTop: ", event.currentTarget.scrollTop);
  //   console.log("offsetHeight: ", event.currentTarget.offsetHeight);
  // };
  const handleScroll = (event) => {
    // let scrollTop = event.srcElement.body.scrollY;
    // // itemTranslate = Math.min(0, scrollTop / 3 - 60);
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log(document.documentElement.clientHeight);
    console.log(winScroll - 100);
    console.log(winScroll > document.documentElement.clientHeight - 100);
    if (winScroll > document.documentElement.clientHeight - 100) {
      setBack(true);
    }
    if (winScroll < document.documentElement.clientHeight - 100) {
      setBack(false);
    }
  };
  // const onscroll = (e) => {};
  console.log(back);
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
