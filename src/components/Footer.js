import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <footer
        className=" text-center text-white"
        style={{ backgroundColor: "#84719b" }}
      >
        <div className="container p-4"></div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="#">
            The Fellowship of the Elden Ring
          </a>
        </div>
      </footer>
    </Fragment>
  );
}
