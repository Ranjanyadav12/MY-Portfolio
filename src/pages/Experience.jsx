import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">

      {/* Section Heading */}
      <div className="exp-heading">
        <span></span>
        <p>Experience & Education</p>
      </div>

      <h2 className="exp-title">
        My <span>Journey</span>
      </h2>


      <div className="journey-container">

        {/* ================= EXPERIENCE ================= */}

        <div className="journey-column">

          <h3 className="column-title">
            💼 Experience
          </h3>

          {/* Experience 1 */}
          <div className="journey-card">

            <div className="card-top">
              <div>
                <h4>Full Stack Developer</h4>
                <p className="company">
                  Personal & College Projects
                </p>
              </div>

              <span className="date">
                2025 - Present
              </span>
            </div>

            <p className="card-description">
              Developed responsive web applications using
              React.js, JavaScript, Node.js and MongoDB.
              Worked on frontend design, API integration and
              database management.
            </p>

            <div className="skills">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

          </div>


          {/* Experience 2 */}
          <div className="journey-card">

            <div className="card-top">
              <div>
                <h4>Web Development Projects</h4>
                <p className="company">
                  College Projects
                </p>
              </div>

              <span className="date">
                2024 - 2025
              </span>
            </div>

            <p className="card-description">
              Built real-world projects to improve frontend
              and backend development skills. Focused on
              responsive UI, problem solving and clean code.
            </p>

            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
              <span>Git</span>
            </div>

          </div>

        </div>


        {/* ================= EDUCATION ================= */}

        <div className="journey-column">

          <h3 className="column-title">
            🎓 Education
          </h3>

          {/* Education 1 */}
          <div className="journey-card education-card">

            <div className="card-top">

              <div>
                <h4>B.Tech</h4>

                <p className="company">
                  Computer Science & Engineering
                </p>
              </div>

              <span className="date">
                2023 - 2027
              </span>

            </div>

            <p className="institute">
              Manav Rachna International Institute of
              Research and Studies
            </p>

            <p className="card-description">
              Currently pursuing B.Tech with a focus on
              software development, data structures,
              databases and web technologies.
            </p>

          </div>


          {/* Education 2 */}
          <div className="journey-card education-card">

            <div className="card-top">

              <div>
                <h4>Higher Secondary</h4>

                <p className="company">
                  Science Stream
                </p>
              </div>

              <span className="date">
                Completed
              </span>

            </div>

            <p className="card-description">
              Completed higher secondary education with
              a focus on mathematics and computer science.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;