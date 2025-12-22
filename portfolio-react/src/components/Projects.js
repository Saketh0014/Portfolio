import React from 'react';

const projects = [
  {
    title: 'Eleganz Interiors',
    tech: ['Python', 'Django', 'OpenAI API', 'TF-IDF', 'Redis'],
    description: 'AI-Powered Construction Cost Estimation Platform. Automates cost estimation using GPT-5 for material classification and TF-IDF for similarity search. Features approval workflows and Celery pipelines.',
  },
  {
    title: 'Padhega India',
    tech: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'Razorpay'],
    description: 'Scalable e-commerce book platform replacing Excel workflows. Features inventory management, secure auth, stock updates, and dynamic pricing.',
  },
  {
    title: 'Health Agent (Lemon)',
    tech: ['React Native', 'FastAPI', 'HealthKit', 'LangChain'],
    description: 'AI-Driven Wellness & Meal Planning System. Integrates HealthKit/Fitbit data, orchestrates multi-agent workflows for meal plans, and uses cron jobs for recommendations.',
  },
  {
    title: 'PawBud',
    tech: ['WebRTC', 'Django Channels', 'WebSocket', 'LLMs'],
    description: 'Veterinary Telemedicine Platform with video calling, chat, and EMR generation using LLM-based SOAP notes. Secure 3-role system for Vets, Owners, and Admins.',
  },
  {
    title: 'InPixr',
    tech: ['Python', 'Stripe', 'Image Processing', 'AI Metadata'],
    description: 'Digital Asset Marketplace for high-res media. Built image processing pipelines (resizing, watermarking), Stripe payments, and AI metadata generation.',
  },
  {
    title: 'ASL Recognition',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    description: 'Real-time American Sign Language translation using Convolutional Neural Networks. Bridges communication gaps for the hearing-impaired by converting hand gestures to text/speech with high accuracy.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="fade-in-section">
      <h2 className="section-title">Some Things I've Built</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} style={{ padding: '2rem' }}>
            <h3 className="project-title" style={{ marginBottom: '1rem', color: 'var(--lightest-slate)' }}>{project.title}</h3>
            <p className="project-desc" style={{ marginBottom: '1.5rem' }}>{project.description}</p>
            <ul className="project-tech-list" style={{ marginTop: 'auto' }}>
              {project.tech.map((tech, i) => (
                <li key={i} style={{ color: 'var(--slate)', fontFamily: 'var(--font-mono)', fontSize: '12px', marginRight: '10px' }}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
