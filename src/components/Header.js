import React, { Fragment, useState } from "react";
import "../styles/header.css";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app  } from "../firebase/firebase.js";

export default function Header() {

  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
    }
  });

  const signOut = () => {
    auth.signOut();
    setIsAuthenticated(false);
  }
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: " #721702" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Elden Ring Cuisine
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/contact">
                  Contact Us
                </a>
              </li>
              {isAuthenticated ? (
                <Fragment>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/order">
                      Order Online
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={signOut} aria-current="page" href="/order">
                      Logout
                    </a>
                  </li>
                </Fragment>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/login">
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
