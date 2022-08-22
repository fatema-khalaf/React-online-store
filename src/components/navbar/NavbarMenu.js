import styles from "../../theme/main.module.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import ReactDOM from "react-dom";

const ModalOverlay = ({ state }) => {
  console.log(state);
  return (
    <div
      className={`${styles["side-menu"]} ${styles[`side-menu__${state}`]}`}
    ></div>
  );
};
const NavbarMenu = ({ state }) => {
  console.log(document.getElementById("backdrop-root"));
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay state={state} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default NavbarMenu;
