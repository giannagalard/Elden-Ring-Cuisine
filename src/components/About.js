import React, { Fragment } from "react";
import paper from "../images/paper.png";
import "../styles/about.css";

export default function About() {
  return (
    <Fragment>
      <div style={{ paddingBottom: "2.5rem" }}>
        <div className="aboutImage">
          <img className="paper" src={paper} alt="paper" />
          <div className="aboutHeader">
            <h1>About Us</h1>
          </div>
          <div className="aboutText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
              aliquam nunc, eget egestas nisl nisi eu ipsum. Nulla facilisi.
              Nulla facilisi. Pellentesque euismod, urna eu tincidunt
              consectetur, nisi nisl aliquam nunc, eget egestas nisl nisi eu
              ipsum. Nulla facilisi. Nulla facilisi. Pellentesque euismod, urna
              eu tincidunt consectetur, nisi nisl aliquam nunc, eget egestas
              nisl nisi eu ipsum. Nulla facilisi. Nulla facilisi. Pellentesque
              euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc,
              eget egestas nisl nisi eu ipsum. Nulla facilisi. Nulla facilisi.
              Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
              aliquam nunc, eget egestas nisl nisi eu ipsum. Nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
