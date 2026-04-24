import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParticlesBg from "./components/ParticlesBg";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <ParticlesBg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;