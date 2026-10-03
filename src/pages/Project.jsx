import React from "react";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      image: "/images/amazon.png",
      category: "WEB DEVELOPMENT",
      title: "Amazon Webpage UI Clone",
      description:
        "A responsive Amazon homepage UI clone created using HTML and CSS with a clean and modern layout.",
      technologies: ["HTML", "CSS"],
      live: "#",
      github: "#",
    },
    {
      image: "/images/labour.png",
      category: "WEB APPLICATION",
      title: "Labour Job Finder",
      description:
        "A job finding platform that helps labourers find suitable jobs and allows employers to connect with workers.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      live: "#",
      github: "#",
    },
    {
      image: "/images/gaming.png",
      category: "E-COMMERCE",
      title: "Gaming Store",
      description:
        "A modern gaming store interface with product sections, categories and a responsive user-friendly design.",
      technologies: ["React", "CSS", "JavaScript"],
      live: "#",
      github: "#",
    },
    {
      image: "/images/education.png",
      category: "WEB DESIGN",
      title: "Education Website Clone",
      description:
        "A responsive educational website clone with modern UI, navigation, course sections and interactive components.",
      technologies: ["React", "CSS", "JavaScript"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">

      {/* Heading */}
      <div className="projects-heading">
        <span></span>
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
                {project.technologies.map((technology, index) => (
                  <span key={index}>
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="project-buttons">

                <a
                  href={project.live}
                  className="live-button"
                >
                  ↗ Live Demo
                </a>

                <a
                  href={project.github}
                  className="github-button"
                >
                  GitHub
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