import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Charan Tej</h2>

      <div>
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/projects" className="link">Projects</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;