import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ darkMode, changeTheme }) {

  // Mobile menu open/close karne ke liye
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile menu close karne ke liye
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      {/* ================= LOGO ================= */}

      <div className="logo">
        <span>&lt;/&gt;</span> Ranjan
      </div>


      {/* ================= DESKTOP MENU ================= */}

      <div className="nav-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#experience">Experience</a>

        <a href="#education">Education</a>

        <a href="#contact">Contact</a>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="nav-right">

        {/* Light / Dark Button */}

        <button
          className="theme-button"
          onClick={changeTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>


        {/* Resume Button */}

        <button className="resume-button">
          Download Resume
        </button>

      </div>


      {/* ================= MOBILE MENU BUTTON ================= */}

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (

        <div className="mobile-menu">

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>


          {/* Mobile Theme Button */}

          <button
            className="mobile-theme-button"
            onClick={changeTheme}
          >
            {darkMode
              ? "☀️ Light Mode"
              : "🌙 Dark Mode"
            }
          </button>

        </div>

      )}

    </nav>
  );
}

export default Navbar;