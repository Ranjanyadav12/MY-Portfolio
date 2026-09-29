import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      {/* Section Heading */}
      <div className="skills-heading">
        <span></span>
        <p>My Skills</p>
      </div>

      <h2 className="skills-title">
        Technologies I <span>Work With</span>
      </h2>

      <p className="skills-subtitle">
        I use modern technologies and tools to build responsive,
        interactive and scalable web applications.
      </p>


      {/* ================= FRONTEND ================= */}

      <div className="skill-row">

        <div className="row-heading">
          <div className="row-icon">⚡</div>

          <div>
            <h3>Frontend</h3>
            <p>Creating modern and responsive user interfaces.</p>
          </div>
        </div>

        <div className="technology-container">

          <div className="technology-box">
            <div className="technology-icon html-icon">HTML</div>
            <h4>HTML</h4>
            <span>90%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon css-icon">CSS</div>
            <h4>CSS</h4>
            <span>95%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon js-icon">JS</div>
            <h4>JavaScript</h4>
            <span>90%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon react-icon">⚛</div>
            <h4>React.js</h4>
            <span>85%</span>
          </div>

        </div>

      </div>


      {/* ================= BACKEND ================= */}

      <div className="skill-row">

        <div className="row-heading">
          <div className="row-icon">⚙</div>

          <div>
            <h3>Backend</h3>
            <p>Developing server-side applications and APIs.</p>
          </div>
        </div>

        <div className="technology-container">

          <div className="technology-box">
            <div className="technology-icon node-icon">JS</div>
            <h4>Node.js</h4>
            <span>75%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon express-icon">EX</div>
            <h4>Express.js</h4>
            <span>70%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon api-icon">API</div>
            <h4>REST API</h4>
            <span>75%</span>
          </div>

        </div>

      </div>


      {/* ================= DATABASE ================= */}

      <div className="skill-row">

        <div className="row-heading">
          <div className="row-icon">🗄</div>

          <div>
            <h3>Database</h3>
            <p>Managing and working with application databases.</p>
          </div>
        </div>

        <div className="technology-container">

          <div className="technology-box">
            <div className="technology-icon mongo-icon">MDB</div>
            <h4>MongoDB</h4>
            <span>75%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon mysql-icon">SQL</div>
            <h4>MySQL</h4>
            <span>75%</span>
          </div>

        </div>

      </div>


      {/* ================= TOOLS ================= */}

      <div className="skill-row">

        <div className="row-heading">
          <div className="row-icon">🛠</div>

          <div>
            <h3>Tools & Others</h3>
            <p>Tools and technologies I use in development.</p>
          </div>
        </div>

        <div className="technology-container">

          <div className="technology-box">
            <div className="technology-icon git-icon">Git</div>
            <h4>Git</h4>
            <span>95%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon github-icon">GH</div>
            <h4>GitHub</h4>
            <span>95%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon vscode-icon">VS</div>
            <h4>VS Code</h4>
            <span>90%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon python-icon">Py</div>
            <h4>Python</h4>
            <span>70%</span>
          </div>

          <div className="technology-box">
            <div className="technology-icon cpp-icon">C++</div>
            <h4>C++</h4>
            <span>75%</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;