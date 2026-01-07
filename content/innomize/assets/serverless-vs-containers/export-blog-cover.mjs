import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function exportBlogCover() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 3 });

  const htmlPath = join(__dirname, 'serverless-vs-containers-blog-cover.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const cover = await page.$('.cover');
  await cover.screenshot({
    path: join(__dirname, 'serverless-vs-containers-blog-cover.png'),
    type: 'png'
  });

  console.log('Exported: serverless-vs-containers-blog-cover.png (1920x1080 @2x)');

  await browser.close();
}

exportBlogCover().catch(console.error);
