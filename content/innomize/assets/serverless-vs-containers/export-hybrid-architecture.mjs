import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function exportHybridArchitecture() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 3 });

  const htmlPath = join(__dirname, 'hybrid-architecture-diagram.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const container = await page.$('.container');
  await container.screenshot({
    path: join(__dirname, 'hybrid-architecture-diagram.png'),
    type: 'png'
  });

  console.log('Exported: hybrid-architecture-diagram.png (1200x675 @3x)');

  await browser.close();
}

exportHybridArchitecture().catch(console.error);
