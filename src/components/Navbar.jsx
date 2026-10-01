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

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });

      },
      {
        root: null,
        threshold: 0.25,
      }
    );

    sections.forEach((section) => {

      const element = document.getElementById(section);

      if (element) {
        observer.observe(element);
      }

    });

    return () => {
      observer.disconnect();
    };

  }, []);

  
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


      {/* Desktop Menu */}

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


      {/* Right Buttons */}

      <div className="nav-actions">

        <button
          className="theme-btn"
          onClick={changeTheme}
          title="Change Theme"
        >
          {darkMode ? "☀" : "☾"}
        </button>

        <button className="resume-btn">
          Download Resume
        </button>

      </div>


      {/* Mobile Menu Button */}

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>


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
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>

          ))}

        </div>

      )}

    </nav>
  );
};

export default Navbar;