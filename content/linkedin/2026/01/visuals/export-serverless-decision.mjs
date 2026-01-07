import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function exportVisual() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport to 1080x1080 at 2x for high quality
  await page.setViewport({
    width: 1080,
    height: 1080,
    deviceScaleFactor: 2
  });

  // Load the HTML file (Innomize version)
  const htmlPath = path.join(__dirname, 'serverless-vs-containers-decision-innomize.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  await new Promise(resolve => setTimeout(resolve, 500));

  // Get the card element
  const card = await page.$('.card');

  if (card) {
    const outputPath = path.join(__dirname, 'serverless-vs-containers-decision-innomize-2x.png');
    await card.screenshot({
      path: outputPath,
      type: 'png'
    });
    console.log(`Exported: ${outputPath}`);
    console.log('Dimensions: 2160 x 2160 pixels (2x quality)');
  } else {
    console.error('Card element not found');
  }

  await browser.close();
}

exportVisual().catch(console.error);
