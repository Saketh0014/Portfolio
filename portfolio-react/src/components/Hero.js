import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from 'react-icons/fa';

const Hero = () => {

  return (
    <section id="hero" className="fade-in-section" style={{ 
      padding: '110px 20px 20px 20px', /* Compact padding */
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100dvh',
      position: 'relative',
    }}>
      {/* Decorative Tech Lines */}
      <div className="hero-lines-container">
        <div className="hero-line"></div>
        <div className="hero-line"></div>
        <div className="hero-line-v"></div>
        <div className="hero-line-v"></div>
      </div>

       <h4 style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', marginBottom: '10px', fontSize: '16px' }}>Hi, I am</h4>
       <h1 className="hero-name" style={{ 
         color: 'var(--lightest-slate)', 
         fontSize: 'clamp(40px, 7vw, 70px)', 
         lineHeight: '1.1', 
         marginBottom: '5px',
         display: 'inline-block',
         transition: 'all 0.3s ease'
       }}>
         Sri Saketh.
       </h1>
       <h2 style={{ color: 'var(--slate)', fontSize: 'clamp(25px, 5vw, 45px)', lineHeight: '1.1', marginBottom: '20px' }}>
         <span className="typing-text">Software Developer</span>
       </h2>
       
       {/* Backend System Monitor */}
       <div className="system-monitor">
         <div className="monitor-header">
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
             <span className="status-dot blink"></span>
             <span className="monitor-title">MY_TECH_DNA</span>
           </div>
           <FaTerminal style={{ color: 'var(--green)', fontSize: '14px' }} />
         </div>
         <div className="monitor-grid">
           <div className="monitor-item">
             <span className="label">CORE STACK</span>
             <span className="value">Django • Flask • PostgreSQL</span>
           </div>
           <div className="monitor-item">
             <span className="label">INFRASTRUCTURE</span>
             <span className="value">REST • WebSockets • WebRTC</span>
           </div>
           <div className="monitor-item">
             <span className="label">ASYNC PROCESSING</span>
             <span className="value success">Celery + Redis</span>
           </div>
           <div className="monitor-item">
             <span className="label">AI INTEGRATIONS</span>
             <span className="value">OpenAI • Gemini • LangChain</span>
           </div>
         </div>
         <div className="monitor-footer">
           <span className="log-text">{`> APIs Delivered: 50+ Production Endpoints`}</span>
           <span className="log-text">{`> System Status: SCALABLE & OPTIMIZED`}</span>
           <span className="log-text" style={{ color: 'var(--green)' }}>{`> ...and many more`}</span>
         </div>
       </div>
       
       <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
          <a href="https://github.com/Saketh0014" target="_blank" rel="noopener noreferrer" className="hero-icon" style={{ fontSize: '30px' }}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sri-saketh-35767224a" target="_blank" rel="noopener noreferrer" className="hero-icon" style={{ fontSize: '30px' }}><FaLinkedin /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=srisaketh111@gmail.com" target="_blank" rel="noopener noreferrer" className="hero-icon" style={{ fontSize: '30px' }}><FaEnvelope /></a>
       </div>

       <div style={{ zIndex: 10, marginTop: '10px' }}>
         <a href="#about" className="scroll-down-arrow" aria-label="Scroll Down">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
           </svg>
         </a>
       </div>
       <style>
         {`
           .hero-name:hover {
             color: var(--green) !important;
             text-shadow: 0 0 10px rgba(139, 92, 246, 0.4);
           }
           .hero-icon {
             color: var(--lightest-slate); /* Default white/slate */
             transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
             display: flex;
             align-items: center;
             justify-content: center;
           }
           .hero-icon svg {
             width: 1em;
             height: 1em;
           }
           .hero-icon:hover {
             color: var(--green); /* Purple on hover */
             transform: translateY(-3px);
             text-shadow: 0 0 10px var(--green);
           }
           .scroll-down-arrow {
             color: var(--green);
             transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
             animation: bounce 2s infinite;
             display: inline-block;
             cursor: pointer;
           }
           .scroll-down-arrow:hover {
             color: var(--lightest-slate);
             transform: translateY(5px);
           }
           @keyframes bounce {
             0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
             40% {transform: translateY(-10px);} 
             60% {transform: translateY(-5px);} 
           }

           /* Creative Animations */
           .typing-text {
             border-right: 2px solid var(--green);
             white-space: nowrap;
             overflow: hidden;
             animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
           }

           @keyframes spin { 100% { transform: rotate(360deg); } }
           @keyframes typing { from { width: 0 } to { width: 100% } }
           @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: var(--green) } }

           /* System Monitor Styles */
           .system-monitor {
             width: 100%;
             max-width: 520px; /* Reduced to fix size */
             background: rgba(10, 10, 15, 0.6);
             border: 1px solid rgba(139, 92, 246, 0.15);
             border-radius: 4px;
             margin: 0 auto 20px auto; /* Reduced margin */
             padding: 0;
             font-family: 'Space Grotesk', monospace;
             backdrop-filter: blur(5px);
           }
           .monitor-header {
             display: flex;
             align-items: center;
             justify-content: space-between; /* Pushes icon to corner */
             padding: 12px 20px;
             background: rgba(139, 92, 246, 0.05);
             border-bottom: 1px solid rgba(139, 92, 246, 0.1);
           }
           .status-dot {
             width: 10px;
             height: 10px;
             background-color: #00ff88;
             border-radius: 50%;
             margin-right: 12px;
             box-shadow: 0 0 8px #00ff88;
           }
           .blink { animation: blink 2s infinite; }
           @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }
           
           .monitor-title {
             color: var(--green);
             font-size: 12px;
             letter-spacing: 1.5px;
             font-weight: 600;
           }
           
           .monitor-grid {
             display: grid;
             grid-template-columns: 1fr;
             gap: 20px;
             padding: 25px;
           }
           @media (min-width: 600px) {
             .monitor-grid {
               grid-template-columns: 1fr 1fr;
             }
           }
           .monitor-item {
             display: flex;
             flex-direction: column;
             text-align: left;
           }
           .monitor-item .label {
             color: var(--slate);
             font-size: 11px;
             margin-bottom: 6px;
             text-transform: uppercase;
           }
           .monitor-item .value {
             color: var(--lightest-slate);
             font-size: 14px;
             font-weight: 500;
           }
           .monitor-item .value.success { color: #00ff88; text-shadow: 0 0 5px rgba(0,255,136,0.3); }
           
           .monitor-footer {
             padding: 10px 15px;
             border-top: 1px solid rgba(139, 92, 246, 0.1);
             text-align: left;
             background: rgba(0, 0, 0, 0.2);
           }
           .log-text {
             display: block;
             color: var(--slate);
             font-size: 10px;
             font-family: 'Fira Code', monospace;
             margin-bottom: 2px;
           }
         `}
       </style>
    </section>
  );
};

export default Hero;
