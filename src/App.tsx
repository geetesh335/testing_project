import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} /> {/* Projects page */}
        <Route path="/contact" element={<div>Contact Us</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
