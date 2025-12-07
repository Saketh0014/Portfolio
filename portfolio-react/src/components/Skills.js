import React from 'react';

const skillsData = [
  {
    category: 'Primary Languages',
    skills: ['Python', 'C', 'C++', 'Java', 'JavaScript'],
  },
  {
    category: 'Backend Frameworks',
    skills: ['Django', 'Django REST Framework', 'Flask', 'FastAPI'],
  },
  {
    category: 'Frontend & Web',
    skills: ['React', 'Next.js', 'HTML', 'CSS'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQLite', 'Supabase'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, Lambda)', 'Docker', 'GitHub Actions', 'Redis', 'Celery'],
  },
  {
    category: 'AI / ML & LLMs',
    skills: ['OpenAI/Gemini APIs', 'LangChain', 'Agentic AI', 'NLP', 'Pinecone', 'Computer Vision'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="fade-in-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div key={index} className="skill-category">
            <h3>{group.category}</h3>
            <ul className="skill-tags">
              {group.skills.map((skill, i) => (
                <li key={i} className="skill-tag">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
