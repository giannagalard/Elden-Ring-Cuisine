import React, { Fragment } from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <Fragment>
      <footer
        className=" text-center text-white"
        style={{
          backgroundColor: "#721702",
          position: "absolute",
          width: "100%",
          left: "0",
          bottom: "0",
        }}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:&nbsp;
          <a className="text-white" href="#">
            The Fellowship of the Elden Ring
          </a>
        </div>
      </footer>
    </Fragment>
  );
}
