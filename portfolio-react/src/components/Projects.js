import React from 'react';
const projects = [
  {
    title: 'Eleganz Interiors — AI-Powered Construction Cost Estimation Platform',
    tech: 'Python, Django REST Framework, OpenAI API, TF-IDF, SQLite/PostgreSQL, Postman',

    description: [
      'Contributed to the development of a scalable backend system for a next-generation construction analytics platform focused on AI-driven cost estimation.',
      'Integrated OpenAI GPT-5 models to intelligently interpret raw item descriptions and automatically classify materials with high accuracy.',
      'Implemented TF-IDF (NLP)-based item similarity matching, improving item recognition precision across 10,000+ materials.',
      'Built modular REST APIs for projects, items, users, and approvals, enabling seamless interaction between multiple user roles.',
      'Developed a multi-tier workflow system (Maker → Checker → Admin) for structured project cost submissions and validations.',
      'Created CSV ingestion pipelines to automate the extraction, mapping, and cost computation of construction materials.',
      'Delivered a production-ready backend reducing manual estimation time, enhancing accuracy, and enabling intelligent cost analysis for enterprises.',
    ],
  },
  {
    title: 'Padhega India — Book E-commerce and Automation Platform',
    tech: 'Django, Django REST Framework, PostgreSQL, Postman',

    description: [
      'Contributed to the development of a feature-rich e-commerce backend for a large-scale digital bookstore, automating all core operations.',
      'Migrated the client’s legacy Excel- and WordPress-based processes into a fully automated Django REST API system.',
      'Built APIs for book inventory, author management, categories, carts, orders, users, and reviews, enabling full CRUD, filtering, sorting, and real-time synchronization.',
      'Implemented secure authentication and user management with JWT tokens and admin-level dashboards.',
      'Automated inventory tracking, stock updates, and dynamic pricing to eliminate repetitive manual workflows.',
      'Delivered a production-grade backend enabling a smooth, reliable, and data-driven shopping experience for thousands of users.',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <p><strong>TECH STACK:</strong> {project.tech}</p>
          <ul>
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
