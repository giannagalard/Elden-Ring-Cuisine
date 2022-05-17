import React, { Fragment } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Hidden } from "@mui/material";
import "../styles/contact.css";

export default function Contact() {

  const [state, handleSubmit] = useForm("mgedrdwr");
  return (
    <Fragment>
      <section className="mb-4" style={{ marginLeft: "20px", marginRight: "20px" }}>
        <h2
          className="h1-responsive font-weight-bold text-center my-4"
          style={{ color: "#F2D1C8" }}
        >
          Contact us
        </h2>

        <Hidden smUp>
          <div className="col-md-3 text-center" style={{ color: "#F2D1C8" }}>
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Royal Capital, Atlus Plateau, 02022</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>1-337-EDN-RING </p>
                <p>EXT: G1T-GUD</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>eldenRingCuisine@gmail.com</p>
              </li>
            </ul>
          </div>
        </Hidden>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            {state.succeeded ? (
              <div className="alert alert-success" role="alert">
                Thank you for your message!
              </div>
            ) : (

              <form
                id="contact-form"
                name="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" for="name" className="" style={{ color: "#F2D1C8" }}>
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      {/* <label for="name" className="" style={{ color: "#F2D1C8" }}>
                      Your name
                    </label> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" for="email" className="" style={{ color: "#F2D1C8" }}>
                        Email:
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        color="#F2D1C8"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                      {/* <label for="email" className="" style={{ color: "#F2D1C8" }}>
                      Your email
                    </label> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label for="subject" className="" style={{ color: "#F2D1C8" }}>
                        Subject:
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      {/* <label for="subject" className="" style={{ color: "#F2D1C8" }}>
                      Subject
                    </label> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12" style={{ color: "#F2D1C8" }}>
                    <div className="md-form">
                      <label for="message">Your Message:</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                      {/* <label for="message">Your message</label> */}
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <p>&nbsp;</p>
                  <button type="submit" disabled={state.submitting}>
                    Submit
                  </button>
                </div>
              </form>
            )}
            <div className="status"></div>
          </div>
          <Hidden smDown>
            <div className="col-md-3 text-center" style={{ color: "#F2D1C8" }}>
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Royal Capital, Atlus Plateau, 02022</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>1-337-EDN-RING </p>
                  <p>EXT: G1T-GUD</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
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
