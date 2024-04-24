import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="navTitles">
        <li>
          <Link className="navLinks" to="/aboutme">About Me</Link>
        </li>
        <li>
          <Link className="navLinks" to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link className="navLinks" to="/contact">Contact</Link>
        </li>
        <li>
          <Link className="navLinks" to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;