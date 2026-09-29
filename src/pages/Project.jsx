import React from "react";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      title: "Job Find Labour",
      description:
        "A web application that connects labourers with employers and helps users find and post jobs easily.",
      tech: ["React.js", "Node.js", "MongoDB"],
    },
    {
      title: "CliniVoice",
      description:
        "A web-based solution designed to support stuttering detection and therapy using speech analysis.",
      tech: ["React.js", "JavaScript", "Python"],
    },
    {
      title: "Titanic Survival Prediction",
      description:
        "A machine learning project that predicts passenger survival using data analysis and feature engineering.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      title: "To-Do List",
      description:
        "A simple task management application for adding, completing and managing daily tasks.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Counter App",
      description:
        "A simple React application that allows users to increase, decrease and reset a counter.",
      tech: ["React.js", "JavaScript", "CSS"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <p className="projects-subtitle">
        Some of the projects I have built while learning and developing my skills.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((technology, techIndex) => (
                <span key={techIndex}>
                  {technology}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
