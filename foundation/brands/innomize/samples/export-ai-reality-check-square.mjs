/**
 * Export AI Reality Check 2025 LinkedIn visual (square) to PNG
 *
 * Usage: node export-ai-reality-check-square.mjs
 *
 * Exports at 3x scale (3600x3600px) for high-quality LinkedIn images
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportCover() {
  const inputPath = path.resolve(__dirname, 'visual-linkedin-ai-reality-check-2025-square.html');
  const outputPath = path.resolve(__dirname, 'visual-linkedin-ai-reality-check-2025-square-3x.png');
  const scale = 3;

  // Square dimensions: 1200x1200
  const width = 1200;
  const height = 1200;

  console.log('Exporting AI Reality Check 2025 LinkedIn visual (square)...\n');
  console.log(`Input: visual-linkedin-ai-reality-check-2025-square.html`);
  console.log(`Output: visual-linkedin-ai-reality-check-2025-square-3x.png`);
  console.log(`Scale: ${scale}x`);
  console.log(`Resolution: ${width * scale}x${height * scale}px\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({
      width: width,
      height: height,
      deviceScaleFactor: scale
    });

    await page.goto(`file://${inputPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = await page.$('.card');

    if (element) {
      await element.screenshot({
        path: outputPath,
        type: 'png',
        omitBackground: false
      });
      console.log(`✓ Exported successfully!`);
      console.log(`  File: ${outputPath}`);
    } else {
      // Fallback to clip screenshot
      await page.screenshot({
        path: outputPath,
        type: 'png',
        clip: { x: 0, y: 0, width: width, height: height }
      });
      console.log(`✓ Exported (clip mode)`);
    }

  } finally {
    await browser.close();
  }
}

exportCover().catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
