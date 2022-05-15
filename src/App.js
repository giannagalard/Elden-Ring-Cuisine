import Home from "./components/Home.js";
import NotFound from "./components/NotFound.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Gallery from "./components/Gallery.js";
import Menu from "./components/Menu.js";
import Order from "./components/Order.js";
import Chef from "./components/Chef.js";
import GoogleLogin from "./components/GoogleLogin.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/firebase.js";
import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState(null);

  const auth = getAuth(app);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        setUser(user);
        setToken(token);
        setCredentials(credential);
        setIsAuthenticated(true);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        setError({ errorCode, errorMessage, email, credential });
      });
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ position: "relative", minHeight: "100vh" }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<GoogleLogin signInWithGoogle={signInWithGoogle} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/chef" element={<Chef />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
