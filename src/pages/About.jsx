import React from "react";
import "./About.css";

const About = () => {

  const goToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="about" id="about">

      {/* LEFT SIDE */}
      <div className="about-left">

        <div className="section-title">
          <span></span>
          <p>About Me</p>
        </div>

        <h2>
          Turning Ideas Into
          <br />
          <span>Scalable Web Applications</span>
        </h2>

        <p className="about-description">
          I'm Ranjan, a full stack developer passionate about
          building modern and responsive web applications.
          I enjoy solving real-world problems, writing clean
          code, and continuously learning new technologies.
        </p>

        <button className="about-btn"
        onClick={goToContact}>
          Contact Me →
        </button>

      </div>


      {/* MIDDLE SIDE */}
      <div className="about-info">

        <div className="info-item">
          <div className="info-icon">⌖</div>

          <div>
            <small>Location</small>
            <p>India</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">✉</div>

          <div>
            <small>Email</small>
            <p>ranjanyadav3124@gmail.com</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">💼</div>

          <div>
            <small>Experience</small>
            <p>Fresher</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">✓</div>

          <div>
            <small>Availability</small>
            <p>Open to opportunities</p>
          </div>
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="quote-card">

        <div className="quote-icon">
          "
        </div>

        <p>
          Good software doesn't just work,
          it solves real problems and makes
          life easier.
        </p>

        <div className="quote-line"></div>

        <span>— Ranjan</span>

      </div>

    </section>
  );
};

export default About;