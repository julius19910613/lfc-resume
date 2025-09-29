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
      <div className="main-container">
        <aside className="aside">
          <div className="aside-section">
            <h3>联系方式</h3>
            <ul>
              <li>电话: 13641875733</li>
              <li>邮箱: lifanchenjulius@hotmail.com</li>
            </ul>
          </div>
          <div className="aside-section">
            <h3>专业技能</h3>
            <ul>
              <li>VueJS / ReactJS</li>
              <li>JavaScript ES6+</li>
              <li>前端工程化</li>
              <li>CSS3 / HTML5</li>
              <li>敏捷开发</li>
            </ul>
          </div>
        </aside>
        <main className="main">
          <Education />
          <Skills />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default Resume;