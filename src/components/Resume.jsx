import React, { useState } from 'react';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Achievements from './Achievements';
import useResumeData, { ResumeDataProvider } from '../hooks/useResumeData';
import { downloadResumePdf } from '../pdf/downloadResumePdf';

const Resume = () => {
  return (
    <ResumeDataProvider>
      <ResumeInner />
    </ResumeDataProvider>
  );
};

const ResumeInner = () => {
  const { lang, setLang, getUi, editing, setEditing, data, resetData } = useResumeData();
  const [pdfLoadingLang, setPdfLoadingLang] = useState(null);

  const handlePdfDownload = async (targetLang) => {
    if (pdfLoadingLang) {
      return;
    }

    setPdfLoadingLang(targetLang);
    try {
      await downloadResumePdf({
        data,
        lang: targetLang,
        fileName: targetLang === 'zh' ? '李繁宸_简历.pdf' : 'FanchenLi_Resume.pdf'
      });
    } finally {
      setPdfLoadingLang(null);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="toolbar">
        <div className="toolbar-left">
          <button
            type="button"
            className={`toolbar-btn ${editing ? 'active' : ''}`}
            onClick={() => setEditing(!editing)}
          >
            {editing ? '预览' : '编辑'}
          </button>
          <div className="lang-switch" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`lang-btn ${lang === 'zh' ? 'active' : ''}`}
              onClick={() => setLang('zh')}
            >
              {getUi.langSwitch?.zh ?? '中文'}
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              {getUi.langSwitch?.en ?? 'EN'}
            </button>
          </div>
        </div>
        <div className="toolbar-right">
          {editing && (
            <button type="button" className="toolbar-btn reset-btn" onClick={resetData}>
              重置
            </button>
          )}
          <div className="pdf-buttons">
            <button
              type="button"
              className="toolbar-btn pdf-btn"
              onClick={() => handlePdfDownload('zh')}
              disabled={Boolean(pdfLoadingLang)}
            >
              {pdfLoadingLang === 'zh' ? '生成中...' : '下载中文PDF'}
            </button>
            <button
              type="button"
              className="toolbar-btn pdf-btn"
              onClick={() => handlePdfDownload('en')}
              disabled={Boolean(pdfLoadingLang)}
            >
              {pdfLoadingLang === 'en' ? 'Generating...' : 'Download EN PDF'}
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <aside className="sidebar">
          <Header />
          <Summary />
          <Skills />
          <Education />
        </aside>
        <main className="main">
          <Experience />
          <Projects />
          <Achievements />
        </main>
      </div>
    </div>
  );
};

export default Resume;
