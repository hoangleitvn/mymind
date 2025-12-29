/**
 * Export blog cover template to PNG
 * Usage: node export-blog-template.mjs
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportCover() {
  const inputPath = path.resolve(__dirname, 'blog-cover-template.html');
  const outputPath = path.resolve(__dirname, 'aws-reinvent-eks-cover-v2.png');
  const scale = 1; // 1x = 1920x1080, use 2 for 3840x2160

  console.log('Exporting blog cover template...\n');

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
      console.log(`✓ Exported: aws-reinvent-eks-cover-v2.png`);
      console.log(`  Resolution: ${1920 * scale}x${1080 * scale}px`);
    }

  } finally {
    await browser.close();
  }
}

exportCover().catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
