import React from 'react'
import { Box, Button, Avatar } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app  } from "../firebase/firebase.js";


export default function GoogleLogin({ signInWithGoogle }) {
    const navigate = useNavigate();
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigate("/home")
        }
    });
    return (
        <Box sx={{ height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
            <Avatar src={require('../images/logo.png')} sx={{ width: "500px", height: "500px" }} />
            <Button startIcon={<GoogleIcon />} color="error" variant="contained" onClick={signInWithGoogle}>
                Sign in with Google
            </Button>
        </Box >
    )
}
