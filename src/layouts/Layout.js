import Slider from "../components/slider/Slider";
import BestSellerTabs from "../components/tabs/BestSellerTabs";
import styles from "../theme/main.module.scss";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Slider />
      <BestSellerTabs />
      {children}
    </>
  );
};
export default Layout;
