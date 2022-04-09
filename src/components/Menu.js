import React, { Fragment } from "react";
import menu from "../images/menu.svg";
import "../styles/menu.css";
// import menu from "../images/menu.png";

export default function Menu() {
  return (
    <Fragment>
      <div className="menuImage">
        <img className="menuSize" src={menu} alt="menu" />
      </div>
      <div className="menuDivider"></div>
    </Fragment>
  );
}
