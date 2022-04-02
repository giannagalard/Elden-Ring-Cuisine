import React, { Fragment } from "react";
import "../styles/home.css";
import logo from "../images/logo.png";

export default function Home() {
  return (
    <Fragment>
      <div className="header">
        <h1>The Elden Ring Restaurant</h1>
      </div>
      <div className="image">
        <img className="stockImage" src={logo} alt="logo" />
      </div>
      <div className="body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          dictum sodales rutrum. Vivamus ut risus et tortor tincidunt tincidunt
          gravida ut nisl. Pellentesque justo est, feugiat eget augue quis,
          convallis lacinia quam. Curabitur interdum sodales velit vitae
          pulvinar. Nam ultrices quam vitae pulvinar porta. Vivamus cursus
          porttitor venenatis. Cras gravida urna quam, quis egestas diam blandit
          eu. Maecenas euismod nisl tortor, vel laoreet tortor efficitur vel.
          Nulla dictum viverra elit eget finibus. Aliquam finibus turpis odio,
          sit amet volutpat ex fringilla non. Nunc vel sollicitudin purus.
        </p>
      </div>
    </Fragment>
  );
}
