import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ darkMode, changeTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    // "education",
    "contact",
  ];

  // Scroll par active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll
  const scrollToSection = (section) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div
        className="navbar-logo"
        onClick={() => scrollToSection("home")}
      >
        <span>&lt;/&gt;</span> Ranjan
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        {sections.map((section) => (
          <button
            key={section}
            className={
              activeSection === section
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => scrollToSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Right Side */}
      <div className="nav-actions">

        {/* Theme Button */}
        <button
          className="theme-btn"
          onClick={changeTheme}
          title="Change Theme"
        >
          {darkMode ? "☀" : "☾"}
        </button>

        {/* Resume */}
        <a href="Resume.pdf">
        <button className="resume-btn">
          Download Resume
        </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          {sections.map((section) => (
            <button
              key={section}
              className={
                activeSection === section
                  ? "mobile-link active"
                  : "mobile-link"
              }
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() +
                section.slice(1)}
            </button>
          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;