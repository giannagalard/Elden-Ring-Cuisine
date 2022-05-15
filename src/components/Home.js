import React, { Fragment } from "react";
import "../styles/home.css";
import logo from "../images/logo.png";

export default function Home() {
  return (
    <Fragment>
      <div className="header">
        <h1>THE ELDEN RING RESTAURANT</h1>
      </div>
      <div className="image">
        <img className="stockImage" src={logo} alt="logo" />
      </div>
      <div className="divider">
        <a href="/order">
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            style={{ backgroundColor: " #721702" }}
          >
            Order Online
          </button>
        </a>
      </div>
    </Fragment>
  );
}
