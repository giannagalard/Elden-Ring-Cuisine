import React, { Fragment } from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <Fragment>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: " #721702" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">
            Elden Ring Cuisine
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav d-flex">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/menu">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/gallery">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/order">
                  Order Online
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
