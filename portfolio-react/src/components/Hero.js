import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {

  return (
    <section id="hero" className="fade-in-section" style={{ 
      padding: '0', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100dvh', /* mobile viewport fix */
      position: 'relative',
      paddingBottom: '60px' /* visual balance */
    }}>
       <h4 style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', marginBottom: '15px', fontSize: '16px' }}>Hi, I am</h4>
       <h1 style={{ color: 'var(--lightest-slate)', fontSize: 'clamp(40px, 8vw, 70px)', lineHeight: '1.1', marginBottom: '10px' }}>
         Sri Saketh.
       </h1>
       <h2 style={{ color: 'var(--slate)', fontSize: 'clamp(30px, 5vw, 50px)', lineHeight: '1.1', marginBottom: '15px' }}>
           Software Developer
       </h2>
       <p style={{ maxWidth: '540px', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px', color: 'var(--slate)', margin: '0 auto 30px auto', padding: '0 20px' }}>
          {/* A B.Tech CSE graduate and Software Development Engineer, specializing in building production-grade RESTful APIs, real-time systems, and AI-driven platforms. */}
          Designing scalable APIs, real-time communication systems, and AI-integrated platforms.
       </p>
       
       <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', marginBottom: '40px' }}>
          <a href="https://github.com/Saketh0014" target="_blank" rel="noopener noreferrer" className="hero-icon" style={{ fontSize: '28px' }}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sri-saketh-35767224a" target="_blank" rel="noopener noreferrer" className="hero-icon" style={{ fontSize: '28px' }}><FaLinkedin /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=srisaketh111@gmail.com" target="_blank" rel="noopener noreferrer" className="hero-icon" style={{ fontSize: '28px' }}><FaEnvelope /></a>
       </div>

       <div style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
         <a href="#about" className="more-btn">
           More About Me
         </a>
       </div>
       <style>
         {`
           .hero-icon {
             color: var(--green);
             transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
           }
           .hero-icon:hover {
             color: var(--lightest-slate);
             transform: translateY(-3px);
           }
           .more-btn {
             display: inline-flex;
             justify-content: center;
             align-items: center;
             border: 1px solid var(--green);
             border-radius: 50px;
             padding: 12px 24px;
             color: var(--lightest-slate); /* Reverted to Lightest Slate */
             font-family: var(--font-mono);
             font-size: 13px;
             text-decoration: none;
             background-color: transparent;
             transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
             animation: bounce 2s infinite;
           }
           .more-btn:hover {
             color: var(--green);
             background-color: transparent;
           }
           @keyframes bounce {
             0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
             40% {transform: translateY(-10px);} 
             60% {transform: translateY(-5px);} 
           }
         `}
       </style>
    </section>
  );
};

export default Hero;
