/**
 * Export AI Anatomy diagram to PNG using Puppeteer
 *
 * Usage: node export-anatomy-diagram.mjs
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportToPNG() {
  const inputFile = '2026-01-16__ai-architecture-body-diagram.html';
  const outputFile = '2026-01-16__ai-architecture-body-diagram-3x.png';
  const scale = 3;

  const inputPath = path.resolve(__dirname, inputFile);
  const outputPath = path.resolve(__dirname, outputFile);

  console.log(`Exporting: ${inputFile}`);
  console.log(`Output: ${outputFile}`);
  console.log(`Scale: ${scale}x`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Canvas is 1200x1200
    const canvasWidth = 1200;
    const canvasHeight = 1200;

    await page.setViewport({
      width: canvasWidth,
      height: canvasHeight,
      deviceScaleFactor: scale
    });

    await page.goto(`file://${inputPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Screenshot the .canvas element
    const canvasElement = await page.$('.canvas');

    if (canvasElement) {
      await canvasElement.screenshot({
        path: outputPath,
        type: 'png',
        omitBackground: false
      });
      console.log(`✓ Exported successfully: ${outputPath}`);
      console.log(`  Resolution: ${canvasWidth * scale}x${canvasHeight * scale}px`);
    } else {
      console.error('Canvas element not found');
    }

  } finally {
    await browser.close();
  }
}

exportToPNG().catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
