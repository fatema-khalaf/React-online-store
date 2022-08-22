import NavbarList from "../components/navbar/NavbarList";
import styles from "../theme/main.module.scss";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles["slider"]}></div>
      {/* <div className={styles["slider"]}></div> */}
      {/* <div className={styles["slider"]}></div> */}
      {children}
    </>
  );
};
export default Layout;
