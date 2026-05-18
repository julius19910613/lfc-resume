import React, { useState } from 'react';
import { Button, Group, SegmentedControl } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';
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
      notifications.show({
        title: targetLang === 'zh' ? 'PDF 已生成' : 'PDF ready',
        message: targetLang === 'zh' ? '已开始下载当前简历 PDF。' : 'The resume PDF download has started.',
        color: 'indigo'
      });
    } catch (error) {
      notifications.show({
        title: targetLang === 'zh' ? 'PDF 生成失败' : 'PDF generation failed',
        message: error instanceof Error ? error.message : 'Unknown error',
        color: 'red'
      });
    } finally {
      setPdfLoadingLang(null);
    }
  };

  const handleReset = () => {
    modals.openConfirmModal({
      title: '重置当前简历内容',
      centered: true,
      children: '该操作会清空浏览器本地编辑内容，并恢复默认数据。',
      labels: { confirm: '确认重置', cancel: '取消' },
      confirmProps: { color: 'red' },
      onConfirm: () => {
        resetData();
        notifications.show({
          title: '已重置',
          message: '本地编辑内容已恢复为默认数据。',
          color: 'indigo'
        });
      }
    });
  };

  return (
    <div className="page-wrapper">
      <div className="toolbar">
        <Group gap="sm" className="toolbar-left">
          <Button
            type="button"
            variant={editing ? 'light' : 'default'}
            color="indigo"
            className="mantine-toolbar-btn"
            onClick={() => setEditing(!editing)}
          >
            {editing ? '预览' : '编辑'}
          </Button>
          <SegmentedControl
            aria-label="Language switch"
            className="lang-switch"
            value={lang}
            onChange={setLang}
            data={[
              { label: getUi.langSwitch?.zh ?? '中文', value: 'zh' },
              { label: getUi.langSwitch?.en ?? 'EN', value: 'en' }
            ]}
          />
        </Group>
        <Group gap="sm" className="toolbar-right">
          {editing && (
            <Button type="button" variant="subtle" color="red" className="mantine-toolbar-btn" onClick={handleReset}>
              重置
            </Button>
          )}
          <div className="pdf-buttons">
            <Button
              type="button"
              className="mantine-toolbar-btn pdf-btn"
              variant="light"
              color="indigo"
              onClick={() => handlePdfDownload('zh')}
              loading={pdfLoadingLang === 'zh'}
              disabled={Boolean(pdfLoadingLang) && pdfLoadingLang !== 'zh'}
            >
              下载中文PDF
            </Button>
            <Button
              type="button"
              className="mantine-toolbar-btn pdf-btn"
              variant="light"
              color="indigo"
              onClick={() => handlePdfDownload('en')}
              loading={pdfLoadingLang === 'en'}
              disabled={Boolean(pdfLoadingLang) && pdfLoadingLang !== 'en'}
            >
              Download EN PDF
            </Button>
          </div>
        </Group>
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
