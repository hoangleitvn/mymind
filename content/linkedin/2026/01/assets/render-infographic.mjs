import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFile = process.argv[2] || '2026-01-08__documentation-collapse-well.html';
const outputFile = process.argv[3] || inputFile.replace('.html', '.png');
const scale = parseInt(process.argv[4]) || 1;

const htmlPath = join(__dirname, inputFile);
const outputPath = join(__dirname, outputFile);

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();

await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: scale });
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
await page.screenshot({ path: outputPath, type: 'png' });

await browser.close();

console.log(`Infographic saved to: ${outputPath}`);
