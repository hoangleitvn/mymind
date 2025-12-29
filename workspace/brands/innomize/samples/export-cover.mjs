/**
 * Export HTML cover to PNG using Puppeteer
 *
 * Usage: node export-cover.mjs [input.html] [output.png] [scale]
 *
 * Examples:
 *   node export-cover.mjs goodsfirm-review-christmas-2025.html output.png 3
 *   node export-cover.mjs hiring-software-engineers.html hiring-3x.png 3
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportToPNG(inputFile, outputFile, scale = 3) {
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

    // Set viewport to match the card size at desired scale
    const cardSize = 1080;
    await page.setViewport({
      width: cardSize,
      height: cardSize,
      deviceScaleFactor: scale
    });

    // Load the HTML file
    await page.goto(`file://${inputPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');

    // Additional wait for any animations/transitions
    await new Promise(resolve => setTimeout(resolve, 500));

    // Find the card element and screenshot it
    const cardElement = await page.$('.card');

    if (cardElement) {
      await cardElement.screenshot({
        path: outputPath,
        type: 'png',
        omitBackground: false
      });
      console.log(`✓ Exported successfully: ${outputPath}`);
      console.log(`  Resolution: ${cardSize * scale}x${cardSize * scale}px`);
    } else {
      // Fallback to full page screenshot if no .card element
      await page.screenshot({
        path: outputPath,
        type: 'png',
        clip: {
          x: 0,
          y: 0,
          width: cardSize,
          height: cardSize
        }
      });
      console.log(`✓ Exported (full page): ${outputPath}`);
    }

  } finally {
    await browser.close();
  }
}

// CLI handling
const args = process.argv.slice(2);
const inputFile = args[0] || 'goodsfirm-review-christmas-2025.html';
const outputFile = args[1] || inputFile.replace('.html', '-3x.png');
const scale = parseInt(args[2]) || 3;

exportToPNG(inputFile, outputFile, scale).catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
