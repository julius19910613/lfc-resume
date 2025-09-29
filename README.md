 # 李繁宸的简历 (LFC Resume)

一个简单的HTML简历项目，可以导出为PDF和PNG格式。

> **注意**：如果在 Windows 上遇到 PowerShell 执行策略限制问题，请查看 [解决PowerShell执行策略限制.md](./解决PowerShell执行策略限制.md) 文件，或直接使用提供的批处理文件（`.bat`）运行项目。

## 功能特点

- 响应式HTML/CSS简历设计
- 开发服务器自动刷新
- 一键导出为PDF和PNG格式
- 简洁的构建流程

## 安装

确保已安装Node.js，然后运行：

```bash
npm install
```

## 使用方法

### 在 Windows 上使用批处理文件（推荐）

如果你在 Windows 上遇到 PowerShell 执行策略限制，可以直接使用提供的批处理文件：

1. 双击 `install.bat` 安装依赖
2. 双击 `dev.bat` 启动开发服务器
3. 双击 `export.bat` 导出简历为 PDF 和 PNG

### 使用 npm 命令

#### 开发模式

启动开发服务器，支持热重载：

```bash
npm run dev
```

然后在浏览器中访问 http://localhost:7000

#### 导出简历

一键生成PDF和PNG格式的简历：

```bash
npm run export
```

生成的文件将保存在 `dist` 目录中：
- `dist/jianli.pdf` - PDF格式简历
- `dist/jianli.png` - PNG格式简历

## 自定义配置

编辑 `config.js` 文件可以修改：
- 开发服务器端口
- 输出文件路径和名称

## 项目结构

```
lfc-resume/
├── src/                        # 源文件
│   ├── index.html              # 简历HTML
│   └── style.css               # 样式表
├── dist/                       # 生成的PDF和PNG文件
├── build.js                    # PDF/PNG生成脚本
├── build-resume.js             # 一键构建脚本
├── config.js                   # 项目配置
├── gulpfile.js                 # Gulp任务
├── install.bat                 # 安装依赖的批处理文件
├── dev.bat                     # 启动开发服务器的批处理文件
├── export.bat                  # 导出简历的批处理文件
└── 解决PowerShell执行策略限制.md  # PowerShell执行策略问题解决方案
```

## 技术栈

- HTML/CSS - 简历内容和样式
- Gulp - 开发服务器和自动刷新
- Puppeteer - PDF和PNG导出
- Node.js - 构建脚本