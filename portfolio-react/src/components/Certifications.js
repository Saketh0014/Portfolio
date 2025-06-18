import React from 'react';

const certifications = [
  {
    title: 'Full Stack Web Development using Python',
    issuer: 'AICTE',
    link: null,
  },
  {
    title: 'Python Programming Course',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/0d1d4599a643',
  },
  {
    title: 'SQL course from Hackerrank',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/cff61a7796fb',
  },
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications & Achievements</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>
            {cert.title} – {cert.issuer}
            {cert.link && (
              <>
                {' '}
                - <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
