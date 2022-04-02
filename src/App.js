import Home from "./components/Home.js";
import Stocks from "./components/Stocks.js";
import Settings from "./components/Settings.js";
import NotFound from "./components/NotFound.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
