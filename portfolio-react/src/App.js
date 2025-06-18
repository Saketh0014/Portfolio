import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
