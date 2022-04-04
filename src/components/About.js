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
              The Elden Ring Restaurant has been around for a very long time,
              even during the reign of the first elden lord. Our business is has
              spread all across the Lands Between having one restaurant in each
              area. Limgrave, Caelid, Liurnia of the Lakes, Atlus Plateau, Mt.
              Gelmir, Mountaintops of the Giants, and The River Kingdoms. These
              are the areas where thy restaurants lies. We welcome anyone, the
              living, the undead, the spirits, and even the maidenless. Any soul
              with a rune to spare may rejoice in our generous establishment.
              Our consumables are one of a kind, it's as if you've received the
              blessing from thy Erdtree. Even the tarnished could feel like
              they've reclaimed their grace once they've had a bite of our food.
              Not only do we have the best stuff here, we have plenty of maidens
              serving here. What is thou waiting for? Come and visit any of our
              establishments!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
