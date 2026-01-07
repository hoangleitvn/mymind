import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportVisual() {
  const scale = 3;
  const inputPath = path.resolve(__dirname, '2026-01-01__innomize__happy-new-year-2026-v2.html');
  const outputPath = path.resolve(__dirname, '2026-01-01__innomize__happy-new-year-2026-v2.png');

  console.log('Exporting v2 at 3x quality...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: scale });
    await page.goto('file://' + inputPath, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = await page.$('#visual');
    if (element) {
      await element.screenshot({ path: outputPath, type: 'png', omitBackground: false });
      console.log('Done: 2026-01-01__innomize__happy-new-year-2026-v2.png (3240x3240px)');
    }
  } finally {
    await browser.close();
  }
}

exportVisual().catch(err => { console.error('Failed:', err.message); process.exit(1); });
