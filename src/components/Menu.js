import React, { Fragment } from "react";
import menu from "../images/menu.svg";
import "../styles/menu.css";

export default function Menu() {
  return (
    <Fragment>
      <div className="menuImage">
        <img className="menu" src={menu} alt="menu" />
      </div>
    </Fragment>
  );
}
