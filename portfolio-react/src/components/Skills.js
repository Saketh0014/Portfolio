import {
  SiPython, SiC, SiCplusplus, SiJavascript,
  SiDjango, SiFlask, SiFastapi,
  SiReact, SiNextdotjs, SiHtml5, SiCss3,
  SiPostgresql, SiMysql, SiMariadb, SiSqlite, SiSupabase,
  SiAmazonwebservices, SiDocker, SiGithubactions, SiRedis, SiCelery,
  SiOpenai, SiLangchain, SiOpencv
} from 'react-icons/si';
import { FaRobot, FaBrain, FaDatabase, FaServer, FaCode, FaCloud, FaJava } from 'react-icons/fa';

// Icon mapping
const skillIcons = {
  'Python': <SiPython color="#3776AB" />,
  'C': <SiC color="#A8B9CC" />, // Generic color or specific
  'C++': <SiCplusplus color="#00599C" />,
  'Java': <FaJava color="#007396" />,
  'JavaScript': <SiJavascript color="#F7DF1E" />,
  'Django': <SiDjango color="#092E20" />,
  'Django REST Framework': <SiDjango color="#092E20" />, // Reusing Django
  'Flask': <SiFlask color="#FFFFFF" />,
  'FastAPI': <SiFastapi color="#009688" />,
  'React': <SiReact color="#61DAFB" />,
  'Next.js': <SiNextdotjs color="#000000" />, // Might need white in dark mode
  'HTML': <SiHtml5 color="#E34F26" />,
  'CSS': <SiCss3 color="#1572B6" />,
  'PostgreSQL': <SiPostgresql color="#336791" />,
  'MySQL': <SiMysql color="#4479A1" />,
  'MariaDB': <SiMariadb color="#003545" />,
  'SQLite': <SiSqlite color="#003B57" />,
  'Supabase': <SiSupabase color="#3ECF8E" />,
  'AWS (EC2, Lambda)': <SiAmazonwebservices color="#FF9900" />,
  'Docker': <SiDocker color="#2496ED" />,
  'GitHub Actions': <SiGithubactions color="#2088FF" />,
  'Redis': <SiRedis color="#DC382D" />,
  'Celery': <SiCelery color="#37814A" />,
  'OpenAI/Gemini APIs': <SiOpenai color="#412991" />,
  'LangChain': <SiLangchain color="#1C3C3C" />, // Custom or generic
  'Agentic AI': <FaRobot color="#64ffda" />,
  'NLP': <FaBrain color="#64ffda" />,
  'Pinecone': <FaDatabase color="#000000" />,
  'Computer Vision': <SiOpencv color="#5C3EE8" />,
};

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
      <div className="skills-container">
        {skillsData.map((group, index) => (
          <div key={index} className="skill-category">
            <h3>{group.category}</h3>
            <div className="skill-cards">
              {group.skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <span className="skill-icon">
                    {skillIcons[skill] || <FaCode />} {/* Fallback icon */}
                  </span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
