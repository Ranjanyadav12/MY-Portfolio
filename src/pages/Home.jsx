import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">

      {/* Left Content */}
      <div className="home-content">

        <span className="available">
          🟢 Full Stack Developer
        </span>

        <h1>
          Hi, I'm <span>Ranjan</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build modern, responsive and scalable web applications
          with a focus on great user experiences and clean code.
          Turning ideas into real products.
        </p>

        {/* Buttons */}
        <div className="home-buttons">
          <button className="project-btn">
            View My Projects →
          </button>

          <button className="download-btn">
            ↓ Download Resume
          </button>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <span>◉</span>
          <span>in</span>
          <span>𝕏</span>
          <span>✉</span>
        </div>

      </div>


      {/* Right Content */}
      <div className="home-image">

        <div className="glow"></div>


         {/* image add krni hai */}
         
        {/* <img
          src="/images/profile.png"
          alt="Ranjan"
        /> */}

        {/* Code Card */}
        <div className="code-card">
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre>
{`const developer = {
  frontend: ["React", "Next.js", "JS"],
  backend: ["Node.js", "Express"],
  database: ["MongoDB", "MySQL"],
  tools: ["Git", "Docker"]
};`}
          </pre>
        </div>

      </div>

    </section>
  );
};

export default Home;