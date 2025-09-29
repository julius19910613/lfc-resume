import React from 'react';
import Header from './Header';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';

const Resume = () => {
  return (
    <div className="content">
      <Header />
      <div className="main">
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default Resume;