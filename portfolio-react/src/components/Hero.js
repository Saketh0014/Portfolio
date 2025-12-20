import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(200);

  const words = ["Backend Developer", "Full Stack Learner", "Software Developer", "AI & Agentic Systems"];

  React.useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(prev => 
        isDeleting 
          ? fullText.substring(0, prev.length - 1) 
          : fullText.substring(0, prev.length + 1)
      );

      // Typing Speed Control (Slower)
      setTypingSpeed(isDeleting ? 100 : 200);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        return; 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]); 

  return (
    <section id="hero" className="fade-in-section" style={{ 
      padding: '95px 20px 40px 20px', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start',
      minHeight: '100vh',
      position: 'relative',
    }}>
      {/* Decorative Tech Lines */}
      <div className="hero-lines-container">
        <div className="hero-line"></div>
        <div className="hero-line"></div>
        <div className="hero-line-v"></div>
        <div className="hero-line-v"></div>
      </div>

       <h4 style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', marginBottom: '5px', fontSize: '16px' }}>Hi, I am</h4>
       <h1 className="hero-name" style={{ 
         color: 'var(--lightest-slate)', 
         fontSize: 'clamp(40px, 7vw, 70px)', 
         lineHeight: '1.1', 
         marginBottom: '0px', 
         display: 'inline-block',
         transition: 'all 0.3s ease',
         position: 'relative',
         zIndex: 1
       }}>
         {/* Violet Backlight: Vertical bridge from Name to Box */}
         <span style={{
            position: 'absolute',
            top: '85%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '160%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 65%)',
            filter: 'blur(45px)',
            zIndex: -1,
            pointerEvents: 'none'
         }}></span>
         Sri Saketh.
       </h1>
       <h2 style={{ color: 'var(--slate)', fontSize: 'clamp(25px, 5vw, 45px)', lineHeight: '1.1', marginBottom: '20px' }}>
         <span className="typing-text">{text}</span>
       </h2>
       
       {/* Backend System Monitor */}
       <div className="system-monitor">
         <div className="monitor-header">
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
             <span className="status-dot blink"></span>
             <span className="monitor-title">STUFF I ACTUALLY BUILT</span>
           </div>
           <FaTerminal style={{ color: 'var(--green)', fontSize: '14px' }} />
         </div>
         <div className="monitor-grid">
           <div className="monitor-item">
             <span className="label">CORE SYSTEMS</span>
             <span className="value">Django • Flask • PostgreSQL</span>
           </div>
           <div className="monitor-item">
             <span className="label">REAL-TIME & ASYNC</span>
             <span className="value">WebSockets • Celery • Redis</span>
           </div>
           <div className="monitor-item">
             <span className="label">AI INTEGRATIONS</span>
             <span className="value">OpenAI • Gemini • LangChain</span>
           </div>
           <div className="monitor-item">
             <span className="label">IMPACT</span>
             <span className="value success">50+ APIs • Scalable Systems</span>
           </div>
         </div>
         <div className="monitor-footer">
           <span className="log-text">{`> Shipped production-ready backend systems`}</span>
           <span className="log-text">{`> Built real-time APIs used by actual users`}</span>
           <span className="log-text">{`> Integrated AI workflows into live products`}</span>
           <span className="log-text" style={{ color: 'var(--green)' }}>{`> ...and many more`}</span>
         </div>
       </div>
       
       <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          <a href="https://github.com/Saketh0014" target="_blank" rel="noopener noreferrer" className="hero-icon" style={{ fontSize: '30px' }}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sri-saketh-35767224a" target="_blank" rel="noopener noreferrer" className="hero-icon" style={{ fontSize: '30px' }}><FaLinkedin /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=srisaketh111@gmail.com" target="_blank" rel="noopener noreferrer" className="hero-icon" style={{ fontSize: '30px' }}><FaEnvelope /></a>
       </div>

       <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
         <a href="#about" className="scroll-down-arrow" aria-label="Scroll Down">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
           </svg>
         </a>
       </div>
       <style>
         {`
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
