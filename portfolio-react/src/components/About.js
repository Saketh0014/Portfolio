import React from "react";

const About = () => {
  return (
    <section id="about" className="fade-in-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p>
          Hello! My name is Saketh and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about how the web works!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an <strong>innovative startup (Whatbytes)</strong>, where I've contributed to full-stack and AI-driven platforms across e-commerce, telemedicine, and fintech.
        </p>
        <p>
         I specialize in backend engineering, using <strong>Python, Django, Flask, and FastAPI</strong> to build scalable infrastructure. I'm also deeply interested in AI integrations, working with <strong>LLMs (GPT-4, Gemini)</strong> and <strong>vector databases</strong> to create intelligent agents.
        </p>
      </div>
    </section>
  );
};

export default About;
