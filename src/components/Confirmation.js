import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";
import { Box, Typography, CircularProgress } from "@mui/material";

export default function Confirmation() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login")
    } else {
      setUser(user);
    }
  });

  setTimeout(function () {
    navigate("/home");
  }, 2000);

  return (
    <Fragment>
      <Box sx={{ height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", color: "white" }}>
        <Box sx={{ width: "500px", background: "#721702", p: 5, borderRadius: "5px" }}>
          <Typography variant="h4">
            Thank you for your order!
          </Typography>
          <Typography variant="h6">
            Your order will be ready for pickup in 30 minutes.
          </Typography>
          <CircularProgress sx={{ mt: 1 }} />
        </Box>
      </Box>
    </Fragment>
  );
}
