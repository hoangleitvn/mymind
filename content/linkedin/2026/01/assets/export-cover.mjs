import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function exportCover() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });

  const htmlPath = join(__dirname, 'serverless-vs-containers-cover.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const container = await page.$('.container');
  await container.screenshot({
    path: join(__dirname, 'serverless-vs-containers-cover.png'),
    type: 'png'
  });

  console.log('Exported: serverless-vs-containers-cover.png (1080x1080 @2x)');

  await browser.close();
}

exportCover().catch(console.error);
