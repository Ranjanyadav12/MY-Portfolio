import React from "react";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      image: "/images/amazon.png",
      category: "WEB DEVELOPMENT",
      title: "Amazon Webpage UI Clone",
      description:
        "A responsive UI clone of the Amazon homepage built using HTML and CSS. This project focuses on layout design, flexbox, and modern styling techniques.",
      technologies: ["HTML", "CSS"],
      github: "#",
      live: "#",
    },

    {
      image: "/images/labour.png",
      category: "WEB APPLICATION",
      title: "Labour Job Finder",
      description:
        "A job finding platform designed to help workers discover suitable jobs and connect with potential employers.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      github: "#",
      live: "#",
      private: true,
    },

    {
      image: "/images/gaming.png",
      category: "E-COMMERCE",
      title: "Gaming Store",
      description:
        "A modern gaming store interface with products, categories and a responsive user-friendly design.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },

    {
      image: "/images/education.png",
      category: "WEB DESIGN",
      title: "Ambience Complete Education – Website Clone",
      description:
        "Developed a responsive educational website clone with modern UI, course sections, navigation, and interactive components.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">

      {/* Heading */}

      <div className="projects-heading">
        <p>MY WORK</p>
      </div>

      <h2 className="projects-title">
        My <span>Projects</span>
      </h2>

      <p className="projects-subtitle">
        Some of the projects I have created while learning
        and improving my development skills.
      </p>


      {/* Projects */}

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            {/* Image */}

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>


            {/* Content */}

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>


              {/* Technologies */}

              <div className="project-technologies">

                {project.technologies.map((technology, techIndex) => (
                  <span key={techIndex}>
                    {technology}
                  </span>
                ))}

              </div>


              {/* Buttons */}

              <div className="project-buttons">

                {!project.private && (
                  <a
                    href={project.live}
                    className="live-button"
                  >
                    ↗ Live Demo
                  </a>
                )}

                {project.private && (
                  <button className="private-button">
                    🔒 Private Startup Project
                  </button>
                )}

                <a
                  href={project.github}
                  className="github-button"
                >
                  ⚭ GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;