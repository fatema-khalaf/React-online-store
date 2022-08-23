import Slider from "../components/slider/Slider";
import styles from "../theme/main.module.scss";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Slider />
      {children}
    </>
  );
};
export default Layout;
