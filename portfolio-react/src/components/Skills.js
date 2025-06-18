import React from 'react';

const primarySkills = ['Python', 'C', 'C++', 'JavaScript'];
const webDevelopment = ['HTML', 'CSS', 'JavaScript', 'Django', 'React'];
const databases = ['SQL', 'MySQL'];
const coreConcepts = ['Object-Oriented Programming (OOP)', 'Data Structures', 'Algorithms'];
const softSkills = ['Communication', 'Critical Thinking', 'Problem Solving'];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <h3>Primary Skills</h3>
      <ul className="skills-list">
        {primarySkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Web Development</h3>
      <ul className="skills-list">
        {webDevelopment.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Databases</h3>
      <ul className="skills-list">
        {databases.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Core Concepts</h3>
      <ul className="skills-list">
        {coreConcepts.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Soft Skills</h3>
      <ul className="soft-skills-list">
        {softSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
