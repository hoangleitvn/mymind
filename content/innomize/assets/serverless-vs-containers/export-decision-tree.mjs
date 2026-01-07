import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function exportDecisionTree() {
  const scale = 3;

  console.log('Exporting decision tree at 3x quality...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: scale });

    const htmlPath = join(__dirname, 'serverless-decision-tree.html');
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = await page.$('#visual');

    if (element) {
      await element.screenshot({
        path: join(__dirname, 'serverless-decision-tree.webp'),
        type: 'webp',
        quality: 92,
        omitBackground: false
      });
      console.log('✓ serverless-decision-tree.webp');
      console.log('  Resolution: 3x quality\n');
    } else {
      console.log('✗ Could not find element #visual');
    }

    console.log('Export complete!');

  } finally {
    await browser.close();
  }
}

exportDecisionTree().catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
