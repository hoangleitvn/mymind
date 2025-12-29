/**
 * Export AWS re:Invent blog covers to PNG using Puppeteer
 *
 * Usage: node export-blog-covers.mjs
 *
 * Exports all 3 covers at 2x scale (2400x1260px) for high-quality blog images
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const covers = [
  { id: 'eks-cover', output: 'aws-reinvent-2025-eks-cover.png' },
  { id: 'lambda-cover', output: 'aws-reinvent-2025-lambda-cover.png' },
  { id: 'rds-cover', output: 'aws-reinvent-2025-rds-cover.png' }
];

async function exportCovers() {
  const inputPath = path.resolve(__dirname, 'aws-reinvent-2025-blog-cover.html');
  const scale = 2; // 2x for retina quality

  console.log('Exporting AWS re:Invent 2025 blog covers...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Blog cover dimensions: 1200x630 (standard OG image size)
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: scale
    });

    await page.goto(`file://${inputPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 500));

    for (const cover of covers) {
      const outputPath = path.resolve(__dirname, cover.output);

      const element = await page.$(`#${cover.id}`);

      if (element) {
        await element.screenshot({
          path: outputPath,
          type: 'png',
          omitBackground: false
        });
        console.log(`✓ ${cover.output}`);
        console.log(`  Resolution: ${1200 * scale}x${630 * scale}px\n`);
      } else {
        console.log(`✗ Could not find element #${cover.id}\n`);
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
