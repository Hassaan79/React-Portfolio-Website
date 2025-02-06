// Projects.js

import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project One',
    description: 'An innovative app that solves problem X.',
    link: 'https://github.com/yourusername/project-one',
    image: '/images/project-one.jpg',
  },
  {
    title: 'Project Two',
    description: 'A creative solution for problem Y.',
    link: 'https://github.com/yourusername/project-two',
    image: '/images/project-two.jpg',
  },
  {
    title: 'Project Three',
    description: 'A unique tool addressing issue Z.',
    link: 'https://github.com/yourusername/project-three',
    image: '/images/project-three.jpg',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={`Screenshot of ${project.title}`} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
