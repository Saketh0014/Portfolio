import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="nav-container">
        <a href="#" className="logo" aria-label="Home" onClick={closeMenu}>
          <FaHome />
        </a>
        
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Overlay for clicking outside to close */}
        <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>

        <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Internship</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a href="https://drive.google.com/file/d/1AX5FHYG8FLAuR75XcatBn1AX2ZTa26G9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-btn" onClick={closeMenu}>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
