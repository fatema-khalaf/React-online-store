import ProductCard from "../components/ProductCard";
import Slider from "../components/slider/Slider";
import BestSellerTabs from "../components/tabs/BestSellerTabs";
import NewProducts from "../sections/NewProducts";
import styles from "../theme/main.module.scss";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Slider />
      <BestSellerTabs />
      <NewProducts />
      {children}
    </>
  );
};
export default Layout;
