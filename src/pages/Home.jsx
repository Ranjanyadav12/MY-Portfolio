import React from "react";
import "./Home.css";

const Home = () => {
   const goToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="home" id="home">

      {/* Left Content */}
      <div className="home-content">

        {/* Small Badge */}
        <div className="home-badge">
          <span></span>
          Full Stack Developer
        </div>

        {/* Heading */}
        <h1>
          Hi, I'm <span>Ranjan</span>
        </h1>

        <h2>Full Stack Developer</h2>

        {/* Description */}
        <p className="home-description">
          I build modern, responsive and scalable web applications
          with a focus on great user experiences and clean code.
          Turning ideas into real products.
        </p>

        {/* Buttons */}
        <div className="home-buttons">

          <button className="primary-btn"
          onClick={goToProjects}>
            View My Projects →
          </button>

          <button className="secondary-btn">
            ↓ Download Resume
          </button>

        </div>

        {/* Social Icons */}
        <div className="social-links">

          <span>◉</span>
          <span>in</span>
          <span>𝕏</span>
          <span>✉</span>

        </div>

      </div>


      {/* Right Side */}
      <div className="home-right">

        {/* Glow */}
        <div className="home-glow"></div>

        {/* Code Card */}
        <div className="code-card">

          {/* Top Dots */}
          <div className="code-dots">

            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>

          </div>


          {/* Code */}
          <div className="code-text">

            <div>
              <span className="keyword">const</span>{" "}
              <span className="variable">developer</span> = {"{"}
            </div>

            <div className="indent">
              <span className="property">frontend</span>: [
              <span className="string">"React"</span>,{" "}
              <span className="string">"Next.js"</span>,{" "}
              <span className="string">"JS"</span>],
            </div>

            <div className="indent">
              <span className="property">backend</span>: [
              <span className="string">"Node.js"</span>,{" "}
              <span className="string">"Express"</span>],
            </div>

            <div className="indent">
              <span className="property">database</span>: [
              <span className="string">"MongoDB"</span>,{" "}
              <span className="string">"MySQL"</span>],
            </div>

            <div className="indent">
              <span className="property">tools</span>: [
              <span className="string">"Git"</span>,{" "}
              <span className="string">"Docker"</span>]
            </div>

            <div>
              {"};"}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;