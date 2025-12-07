import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  {
    title: 'Full Stack Web Development using Python',
    issuer: 'AICTE',
    link: null,
  },
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/cff61a7796fb',
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/0d1d4599a643',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="fade-in-section">
      <h2 className="section-title">Certifications</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {certifications.map((cert, index) => (
          <li key={index} style={{ marginBottom: '15px', position: 'relative', paddingLeft: '20px' }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--green)' }}>▹</span>
            <span style={{ color: 'var(--lightest-slate)', fontWeight: 500 }}>{cert.title}</span> 
            <span style={{ color: cert.issuer === 'AICTE' ? 'var(--green)' : 'var(--slate)' }}> — {cert.issuer}</span>
            {cert.link && (
               <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link"><FaExternalLinkAlt /></a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
