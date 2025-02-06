import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project One',
    description: 'An innovative app that solves problem X.',
    link: 'https://github.com/yourusername/project-one',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View on GitHub</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
