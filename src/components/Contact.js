import React, { Fragment } from "react";
import { Hidden } from "@mui/material";
import "../styles/contact.css";

export default function Contact() {
  return (
    <Fragment>
      <section class="mb-4" style={{ marginLeft: "20px", marginRight: "20px" }}>
        <h2
          class="h1-responsive font-weight-bold text-center my-4"
          style={{ color: "#F2D1C8" }}
        >
          Contact us
        </h2>

        <Hidden smUp>
          <div class="col-md-3 text-center" style={{ color: "#F2D1C8" }}>
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Royal Capital, Atlus Plateau, 02022</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>1-337-EDN-RING </p>
                <p>EXT: G1T-GUD</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>eldenRingCuisine@gmail.com</p>
              </li>
            </ul>
          </div>
        </Hidden>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="name" class="" style={{ color: "#F2D1C8" }}>
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                    {/* <label for="name" class="" style={{ color: "#F2D1C8" }}>
                      Your name
                    </label> */}
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="email" class="" style={{ color: "#F2D1C8" }}>
                      Email:
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                      color="#F2D1C8"
                    />
                    {/* <label for="email" class="" style={{ color: "#F2D1C8" }}>
                      Your email
                    </label> */}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" class="" style={{ color: "#F2D1C8" }}>
                      Subject:
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                    {/* <label for="subject" class="" style={{ color: "#F2D1C8" }}>
                      Subject
                    </label> */}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12" style={{ color: "#F2D1C8" }}>
                  <div class="md-form">
                    <label for="message">Your Message:</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    {/* <label for="message">Your message</label> */}
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left">
              <p>&nbsp;</p>
              <a
                class="btn btn-secondary"
                onclick="document.getElementById('contact-form').submit();"
                style={{ backgroundColor: " #721702" }}
              >
                Send
              </a>
            </div>
            <div class="status"></div>
          </div>
          <Hidden smDown>
            <div class="col-md-3 text-center" style={{ color: "#F2D1C8" }}>
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>Royal Capital, Atlus Plateau, 02022</p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>1-337-EDN-RING </p>
                  <p>EXT: G1T-GUD</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>eldenRingCuisine@gmail.com</p>
                </li>
              </ul>
            </div>
          </Hidden>
        </div>
      </section>
    </Fragment>
  );
}
