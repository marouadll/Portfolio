// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Nos Projets</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="placeholder"></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">Voir projet</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;