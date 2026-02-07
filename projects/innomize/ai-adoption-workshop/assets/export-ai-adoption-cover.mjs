/**
 * Export AI Adoption blog cover to PNG at 3x quality
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportCover() {
  const scale = 3; // 3x quality = 5760x3240
  const inputPath = path.resolve(__dirname, 'blog-cover-ai-adoption-v1.html');
  const outputPath = path.resolve(__dirname, 'ai-adoption-workflow-first-cover.png');

  console.log('Exporting AI Adoption cover at 3x quality...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: scale
    });

    await page.goto(`file://${inputPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = await page.$('#cover');

    if (element) {
      await element.screenshot({
        path: outputPath,
        type: 'png',
        omitBackground: false
      });
      console.log(`✓ ai-adoption-workflow-first-cover.png`);
      console.log(`  Resolution: ${1920 * scale}x${1080 * scale}px\n`);
    } else {
      console.log('✗ Could not find element #cover');
    }

    console.log('Export complete!');

  } finally {
    await browser.close();
  }
}

exportCover().catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
