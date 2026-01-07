/**
 * Export INNOMIZE Happy New Year 2026 visual to PNG at 3x quality
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportVisual() {
  const scale = 3; // 3x quality = 3240x3240
  const inputPath = path.resolve(__dirname, '2026-01-01__innomize__happy-new-year-2026.html');
  const outputPath = path.resolve(__dirname, '2026-01-01__innomize__happy-new-year-2026.png');

  console.log('Exporting INNOMIZE New Year 2026 visual at 3x quality...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({
      width: 1080,
      height: 1080,
      deviceScaleFactor: scale
    });

    await page.goto(`file://${inputPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = await page.$('#visual');

    if (element) {
      await element.screenshot({
        path: outputPath,
        type: 'png',
        omitBackground: false
      });
      console.log(`✓ 2026-01-01__innomize__happy-new-year-2026.png`);
      console.log(`  Resolution: ${1080 * scale}x${1080 * scale}px\n`);
    } else {
      console.log('✗ Could not find element #visual');
    }

    console.log('Export complete!');

  } finally {
    await browser.close();
  }
}

exportVisual().catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
