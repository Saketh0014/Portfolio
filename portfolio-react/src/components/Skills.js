import React from 'react';
import {
  SiPython, SiC, SiCplusplus, SiJavascript,
  SiDjango, SiFlask, SiFastapi,
  SiReact, SiNextdotjs, SiHtml5, SiCss3,
  SiPostgresql, SiMysql, SiMariadb, SiSqlite, SiSupabase,
  SiAmazonwebservices, SiDocker, SiGithubactions, SiRedis, SiCelery,
  SiOpenai, SiLangchain, SiOpencv
} from 'react-icons/si';
import { FaRobot, FaBrain, FaDatabase, FaServer, FaCode, FaCloud, FaJava, FaLaptopCode } from 'react-icons/fa';

// Icon mapping - Original Brand Colors
const skillIcons = {
  'Python': <SiPython color="#3776AB" />,
  'C': <SiC color="#A8B9CC" />,
  'C++': <SiCplusplus color="#00599C" />,
  'Java': <FaJava color="#007396" />,
  'JavaScript': <SiJavascript color="#F7DF1E" />,
  'SQL': <FaDatabase color="#F29111" />,
  
  'Django': <SiDjango color="#092E20" />,
  'Django REST Framework': <SiDjango color="#092E20" />,
  'Flask': <SiFlask color="#FFFFFF" />,
  'FastAPI': <SiFastapi color="#009688" />,
  'Redis': <SiRedis color="#DC382D" />,
  'Celery': <SiCelery color="#37814A" />,
  'PostgreSQL': <SiPostgresql color="#336791" />,
  'Supabase': <SiSupabase color="#3ECF8E" />,
  'MySQL': <SiMysql color="#4479A1" />,
  'MariaDB': <SiMariadb color="#003545" />,
  'SQLite': <SiSqlite color="#003B57" />,

  'React': <SiReact color="#61DAFB" />,
  'Next.js': <SiNextdotjs color="#000000" />, // Next.js is black/white
  'HTML': <SiHtml5 color="#E34F26" />,
  'CSS': <SiCss3 color="#1572B6" />,

  'OpenAI/Gemini APIs': <SiOpenai color="#412991" />,
  'LangChain': <SiLangchain color="#1C3C3C" />,
  'Agentic AI': <FaRobot color="#64ffda" />, // Custom
  'NLP': <FaBrain color="#64ffda" />, // Custom
  'Computer Vision': <SiOpencv color="#5C3EE8" />,

  'Docker': <SiDocker color="#2496ED" />,
  'AWS (EC2, Lambda)': <SiAmazonwebservices color="#FF9900" />,
  'GitHub Actions': <SiGithubactions color="#2088FF" />,
};

const skillsList = [
  'Python', 'C', 'C++', 'Java', 'JavaScript', 'Django',
  'Django REST Framework', 'Flask', 'React', 'Next.js', 'HTML', 'CSS',
  'PostgreSQL', 'MySQL', 'MariaDB', 'SQLite', 'Supabase', 'AWS (EC2, Lambda)',
  'Docker', 'Redis', 'Celery', 'OpenAI/Gemini APIs', 'Agentic AI', 'NLP'
];

const Skills = () => {
  return (
    <section id="skills" className="fade-in-section">
      <h2 className="section-title">Skills</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(145px, 1fr))', // Tighter grid
        gap: '15px',
        marginTop: '20px'
      }}>
        {skillsList.map((skill, index) => (
          <div key={index} style={{
            background: '#000000', // Solid Black
            padding: '15px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            border: '1px solid transparent', // No visible border by default
            transition: 'transform 0.2s, background 0.2s, border 0.2s, box-shadow 0.2s',
            cursor: 'default'
          }}
          onMouseOver={(e) => {
             e.currentTarget.style.transform = 'translateY(-5px)';
             e.currentTarget.style.border = '1px solid #8b5cf6'; // Violet Trigger
             e.currentTarget.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.3)';
          }}
          onMouseOut={(e) => {
             e.currentTarget.style.transform = 'translateY(0)';
             e.currentTarget.style.border = '1px solid transparent';
             e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ fontSize: '24px', display: 'flex' }}>
              {skillIcons[skill] || <FaCode color="var(--slate)" />}
            </div>
            <span style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '14px', 
              color: 'var(--lightest-slate)',
              fontWeight: '500'
            }}>
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
