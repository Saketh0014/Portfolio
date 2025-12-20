import React from 'react';

const experiences = [
  {
    role: 'Backend Developer Intern (Remote)',
    company: 'Whatbytes',
    companyUrl: 'https://whatbytes.com', 
    date: 'July 2025',
    points: [
      'Full-Stack & API Development: Built scalable backend systems using Django, DRF, Flask, and FastAPI, delivering 50+ production-grade RESTful APIs across construction, e-commerce, fintech, ed-tech, pet-care, and digital asset platforms.',
      'Real-Time Systems (Webhooks & WebRTC): Implemented Webhooks for live system triggers and developed WebRTC/WebSocket features using Django Channels for telemedicine video calls, live bidding, and chat systems.',
      'AI & LLM Integrations: Contributed to modules involving MCP-based cost intelligence, multi-agent wellness automation, and metadata generation using GPT-4, GPT-5, Gemini, LangChain, and Pinecone.',
      'Asynchronous Processing: Integrated Celery + Redis pipelines for background workflows including image processing, cost computation, password resets, notifications, analytics, and document parsing.',
      'Cloud, DevOps & Deployments: Containerized services with Docker and deployed applications to AWS EC2/ECS, GCP, Railway, and CloudFront/S3. Built CI/CD pipelines using GitHub Actions for automated deployments.',
      'Secure Architecture & Platform Features: Implemented JWT and OTP authentication, Google OAuth login, Stripe and Razorpay payments, role-based access control, scheduling engines, EMR modules, semantic search, and analytics systems.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-container fade-in-section">
      <h2 className="section-title">Internship</h2>
      <div className="experience-content">
        {experiences.map((job, index) => (
          <div key={index} className="job">
            <h3 className="job-role">
              {job.role} <span className="job-company">@ <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="company-link">{job.company}</a></span>
            </h3>
            <p className="job-duration">{job.date}</p>
            <ul className="job-desc-list">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
