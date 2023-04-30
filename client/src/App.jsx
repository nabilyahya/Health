import { EthProvider } from "./contexts/EthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SginUp from "./Pages/SginUp";
import OurServices from "./Pages/OurServices";
import { AboutUs } from "./Pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
  return (
    <EthProvider>
      <div className="wrap">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourservices" element={<OurServices />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sginup" element={<SginUp />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </EthProvider>
  );
}

export default App;
