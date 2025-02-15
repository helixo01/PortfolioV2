import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Application Web E-commerce",
      description: "Développement d'une plateforme e-commerce avec React et Node.js",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Système de Gestion de Données",
      description: "Application de gestion de données pour entreprise",
      technologies: ["Python", "Django", "PostgreSQL"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 