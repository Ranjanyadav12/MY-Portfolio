import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      icon: "</>",
      title: "HTML",
      description: "Building clean and semantic website structures.",
      percentage: "90%",
      width: "90%",
    },
    {
      icon: "🎨",
      title: "CSS",
      description: "Creating responsive and attractive user interfaces.",
      percentage: "85%",
      width: "85%",
    },
    {
      icon: "JS",
      title: "JavaScript",
      description: "Creating interactive and dynamic web applications.",
      percentage: "80%",
      width: "80%",
    },
    {
      icon: "⚛",
      title: "React",
      description: "Developing reusable and modern UI components.",
      percentage: "80%",
      width: "80%",
    },
    {
      icon: "⑂",
      title: "Git & GitHub",
      description: "Managing source code and project versions.",
      percentage: "75%",
      width: "75%",
    },
    {
      icon: "▣",
      title: "Responsive Design",
      description: "Creating websites for all screen sizes.",
      percentage: "85%",
      width: "85%",
    },
  ];

  return (
    <section className="skills-section" id="skills">

      {/* Heading */}
      <div className="skills-heading">
        <span></span>
        <p>MY SKILLS</p>
      </div>

      <h2 className="skills-title">
        My <span>Technical Skills</span>
      </h2>

      <p className="skills-subtitle">
        Technologies and tools I use to build modern,
        responsive and user-friendly web applications.
      </p>

      {/* Skills Cards */}
      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>

            <div className="progress-section">

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: skill.width }}
                ></div>
              </div>

              <span>{skill.percentage}</span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;