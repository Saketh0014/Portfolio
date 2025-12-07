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
      minHeight: '100vh',
      position: 'relative'
    }}>
       <h4 style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', marginBottom: '20px', fontSize: '16px' }}>Hi, I am</h4>
       <h1 style={{ color: 'var(--lightest-slate)', fontSize: 'clamp(40px, 8vw, 70px)', lineHeight: '1.1', marginBottom: '10px' }}>
         Sri Saketh.
       </h1>
       <h2 style={{ color: 'var(--slate)', fontSize: 'clamp(30px, 5vw, 50px)', lineHeight: '1.1', marginBottom: '20px' }}>
         I build scalable backend systems.
       </h2>
       <p style={{ maxWidth: '540px', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px', color: 'var(--slate)', margin: '0 auto 40px auto' }}>
         I'm a B.Tech CSE graduate and Software Development Engineer, specializing in building production-grade RESTful APIs, real-time systems, and AI-driven platforms.
       </p>
       
       <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
          <a href="https://github.com/Saketh0014" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px' }}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sri-saketh-35767224a" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px' }}><FaLinkedin /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=srisaketh111@gmail.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px' }}><FaEnvelope /></a>
       </div>

       <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
         <a href="#about" style={{ color: 'var(--lightest-slate)', fontSize: '24px' }}>↓</a>
       </div>
       <style>
         {`
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
