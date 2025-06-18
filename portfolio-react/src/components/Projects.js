import React from 'react';

const projects = [
  {
    title: 'American Sign Language Recognition',
    description: 'A machine learning-based system that recognizes ASL gestures and translates them into text or speech. It uses neural networks to bridge communication gaps for the hearing-impaired.',
    tech: 'Python, OpenCV, Neural Networks, Machine Learning',
  },
  {
    title: 'Kidney Disease Detection',
    description: 'Developed a predictive model that analyzes patient medical data to detect kidney disease. Integrated with a web interface for real-time user interaction.',
    tech: 'Python, Pandas, Scikit-learn, Flask, ML Algorithms',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tools & Tech:</strong> {project.tech}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
