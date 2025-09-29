const express = require('express');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const { exec } = require('child_process');
const open = require('open');

// Ensure output directory exists
const outputDir = path.dirname(config.output);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created output directory: ${outputDir}`);
}

// Create a simple Express server to serve the built files
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

// Add a special route for PDF export
app.get('/export-pdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Add a special route for PNG export
app.get('/export-png', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const server = app.listen(config.port, async () => {
  console.log(`Server started on http://localhost:${config.port}`);
  
  try {
    console.log('Opening browser for manual export...');
    
    // Open the browser to the export pages
    await open(`http://localhost:${config.port}/export-pdf`);
    
    console.log('
=================================================');
    console.log('请按照以下步骤导出简历：');
    console.log('1. 在浏览器中，使用浏览器的打印功能 (Ctrl+P 或 Cmd+P)');
    console.log('2. 选择"另存为PDF"，并保存到以下位置：');
    console.log(`   ${config.output}.pdf`);
    console.log('3. 完成PDF导出后，请截取整个页面作为PNG图片');
    console.log(`4. 将截图保存到：${config.output}.png`);
    console.log('5. 完成后，请关闭此终端窗口');
    console.log('=================================================
');
    
    console.log('按Ctrl+C退出此程序...');
    
  } catch (error) {
    console.error('Error during export process:', error);
    server.close(() => {
      process.exit(1);
    });
  }
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});