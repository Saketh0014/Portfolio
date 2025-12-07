import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHome } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <a href="#" className="logo" aria-label="Home" style={{ 
          border: '1px solid var(--lightest-slate)', 
          borderRadius: '4px', 
          padding: '7px 10px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'var(--lightest-slate)',
          fontSize: '18px'
        }}>
          <FaHome />
        </a>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#experience">Internship</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href="https://drive.google.com/file/d/1AX5FHYG8FLAuR75XcatBn1AX2ZTa26G9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-btn">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
