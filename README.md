# LFC Resume

[![Deploy to GitHub Pages](https://img.shields.io/badge/deploy-gh--pages-blue)](https://julius19910613.github.io/lfc-resume/)
[![Vite](https://img.shields.io/badge/built%20with-Vite-646CFF)](https://vite.dev/)
[![React](https://img.shields.io/badge/ui-React-61DAFB)](https://react.dev/)

一个基于 React + Vite 的在线简历项目，支持中英文切换、页面内编辑、浏览器本地持久化，以及按需动态加载的 PDF 下载能力。

## Live Demo

- GitHub Pages: [https://julius19910613.github.io/lfc-resume/](https://julius19910613.github.io/lfc-resume/)

## Features

- A4 版式简历页面，适配屏幕浏览与打印导出
- 中英文简历数据切换
- 在线编辑简历内容，并自动保存到 `localStorage`
- 一键重置到默认数据
- PDF 下载按需加载（减少首屏包体积）
- `npm run export` 提供本地导出辅助流程（PDF/PNG）

## Tech Stack

- React 18
- Vite 7
- `@react-pdf/renderer`（懒加载）
- Express（本地导出辅助服务）
- gh-pages（GitHub Pages 发布）

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

默认地址：`http://localhost:7000`

### Production Build

```bash
npm run build
```

### Preview Build Locally

```bash
npm run preview
```

## Export Resume (PDF/PNG)

```bash
npm run export
```

该命令会先构建项目，再启动本地导出服务并打开浏览器。按照终端提示进行：

1. 使用浏览器打印为 PDF（保存到 `dist/jianli.pdf`）
2. 截图保存 PNG（保存到 `dist/jianli.png`）

## Deploy to GitHub Pages

本项目采用 `gh-pages` 分支发布静态资源。

```bash
npm run deploy
```

部署前会自动执行 `npm run build`，构建输出目录为 `dist`。

### Automatic Deployment (Recommended)

- 已内置 GitHub Actions 工作流：`.github/workflows/deploy-pages.yml`
- 当代码 push 到 `master` 分支时，会自动构建并发布到 `gh-pages`
- 也支持在 GitHub Actions 页面手动触发 `workflow_dispatch`

> 若仓库名变更，请同步更新 `vite.config.js` 中的 `base` 配置。

## Project Structure

```text
lfc-resume/
├── index.html
├── vite.config.js
├── config.js
├── export-resume.js
├── src/
│   ├── index.js
│   ├── style.css
│   ├── data/
│   │   └── resumeData.js
│   ├── hooks/
│   │   └── useResumeData.js
│   ├── components/
│   │   ├── Resume.jsx
│   │   ├── Header.jsx
│   │   ├── Summary.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   └── EditableField.jsx
│   └── pdf/
│       ├── ResumePDF.jsx
│       └── downloadResumePdf.js
└── README.md
```

## Data Editing

- 默认简历内容在 `src/data/resumeData.js`
- 页面中的编辑会写入浏览器 `localStorage`
- 点击“重置”按钮会恢复默认数据

## License

MIT