import React from 'react';
import Header from './Header';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';

const Resume = () => {
  return (
    <div className="content">
      <aside className="sidebar">
        <Header />
        <Skills />
        <Education />
      </aside>
      <main className="main">
        <Experience />
        <Projects />
      </main>
    </div>
  );
};

export default Resume;
