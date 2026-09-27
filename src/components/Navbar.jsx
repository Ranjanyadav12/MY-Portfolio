import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <span>&lt;/&gt;</span> Ranjan
      </div>

      {/* Desktop Menu */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <span className="active">Home</span>
        <span>About</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Experience</span>
        <span>Education</span>
        <span>Contact</span>
      </div>

      {/* Right Side */}
      <div className="nav-right">

        {/* Dark Mode */}
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀" : "☾"}
        </button>

        {/* Resume */}
        <button className="resume-btn">
          Download Resume ↓
        </button>

        {/* Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;