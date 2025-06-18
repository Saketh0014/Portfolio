import React from 'react';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech) – Computer Science & Engineering',
    institution: 'Rajamahendri Institute of Technology',
    period: '2020 – 2024',
  },
  {
    degree: 'Intermediate Education',
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
    <section id="education">
      <h2>Education</h2>
      {education.map((item, index) => (
        <div className="education-item" key={index}>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <p>{item.period}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
