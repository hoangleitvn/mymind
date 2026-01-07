/**
 * Export Year-End Quote visual to PNG at 3x quality
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const visual = {
  input: 'visual-year-end-2025-quote-v4.html',
  output: 'year-end-2025-quote-v4.png',
  width: 1080,
  height: 1080
};

async function exportVisual() {
  const scale = 3; // 3x quality

  console.log('Exporting Year-End Quote v4 at 3x quality...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    const inputPath = path.resolve(__dirname, visual.input);
    const outputPath = path.resolve(__dirname, visual.output);

    await page.setViewport({
      width: visual.width,
      height: visual.height,
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
      console.log(`✓ ${visual.output}`);
      console.log(`  Resolution: ${visual.width * scale}x${visual.height * scale}px\n`);
    } else {
      console.log(`✗ Could not find element #visual in ${visual.input}`);
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
