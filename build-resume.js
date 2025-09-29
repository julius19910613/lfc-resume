。/const { execSync } = require('child_process');
const config = require('./config');
const path = require('path');
const fs = require('fs');

// Ensure output directory exists
const outputDir = path.dirname(config.output);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created output directory: ${outputDir}`);
}

try {
  // First build the project with webpack
  console.log('Building project with webpack...');
  execSync('npx webpack --mode production', { stdio: 'inherit' });
  
  // Then run the export script
  console.log('Starting export process...');
  execSync('node export-resume.js', { stdio: 'inherit' });
  
} catch (error) {
  console.error('Error during build or export process:', error);
  process.exit(1);
}