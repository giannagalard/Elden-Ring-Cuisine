import React, { Fragment, useEffect } from "react";
import underConstruction from "../images/underConstruction.svg";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app as app } from "../firebase/firebase.js";

export default function Order() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login")
    }
  });

  return (
    <Fragment>
      <div className="menuImage">
        <img className="menuSize" src={underConstruction} alt="menu" />
      </div>
      <div className="menuDivider"></div>
    </Fragment>
  );
}
