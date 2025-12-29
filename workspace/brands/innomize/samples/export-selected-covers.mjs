/**
 * Export selected blog covers to PNG at 3x quality
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const covers = [
  { input: 'blog-cover-eks-v1.html', output: 'aws-reinvent-2025-eks-cover.png' },
  { input: 'blog-cover-lambda-v2.html', output: 'aws-reinvent-2025-lambda-cover.png' },
  { input: 'blog-cover-rds-v2.html', output: 'aws-reinvent-2025-rds-cover.png' }
];

async function exportCovers() {
  const scale = 3; // 3x quality = 5760x3240

  console.log('Exporting covers at 3x quality...\n');

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

    for (const cover of covers) {
      const inputPath = path.resolve(__dirname, cover.input);
      const outputPath = path.resolve(__dirname, cover.output);

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
        console.log(`✓ ${cover.output}`);
        console.log(`  Resolution: ${1920 * scale}x${1080 * scale}px\n`);
      }
    }

    console.log('Export complete!');

  } finally {
    await browser.close();
  }
}

exportCovers().catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
