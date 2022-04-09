import React, { Fragment } from "react";
import underConstruction from "../images/underConstruction.svg";

export default function Order() {
  return (
    <Fragment>
      <div className="menuImage">
        <img className="menuSize" src={underConstruction} alt="menu" />
      </div>
      <div className="menuDivider"></div>
    </Fragment>
  );
}
