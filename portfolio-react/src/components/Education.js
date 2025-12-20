import React from 'react';

const education = [
  {
    degree: 'Bachelors of Technology',
    institution: 'Rajamahendri Institute Of Engineering & Technology',
    period: '2020 – 2024',
  },
  {
    degree: 'Intermediate',
    institution: 'Aditya Junior College',
    period: '2018 – 2020',
  },
  {
    degree: 'SSC (10th Grade)',
    institution: 'Pragati E.M High School',
    period: '2017 – 2018',
  },
];

const Education = () => {
  return (
    <section id="education" className="fade-in-section">
      <h2 className="section-title">Education</h2>
      {education.map((item, index) => (
        <div className="education-item" key={index}>
          <h3 style={{ marginBottom: '5px', color: 'var(--lightest-slate)' }}>{item.degree}</h3>
          <p style={{ color: 'var(--green)', marginBottom: '5px' }}>{item.institution}</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>{item.period}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
