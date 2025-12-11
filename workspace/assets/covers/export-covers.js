const puppeteer = require('puppeteer');
const path = require('path');

const covers = [
  { file: 'substack-cover-v1-dark.html', output: 'substack-cover-v1-dark-3x.png' },
  { file: 'substack-cover-v2-light.html', output: 'substack-cover-v2-light-3x.png' },
  { file: 'substack-cover-v3-minimal.html', output: 'substack-cover-v3-minimal-3x.png' }
];

const WIDTH = 1456;
const HEIGHT = 816;
const SCALE = 3;

async function exportCovers() {
  const browser = await puppeteer.launch({ headless: 'new' });

  for (const cover of covers) {
    console.log(`Exporting ${cover.file}...`);

    const page = await browser.newPage();

    // Set viewport to match cover size
    await page.setViewport({
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: SCALE
    });

    // Load the HTML file
    const filePath = path.join(__dirname, cover.file);
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');

    // Find the cover container and screenshot just that element
    const coverElement = await page.$('.cover-container');

    if (coverElement) {
      await coverElement.screenshot({
        path: path.join(__dirname, cover.output),
        type: 'png'
      });
      console.log(`  ✓ Saved ${cover.output} (${WIDTH * SCALE}x${HEIGHT * SCALE}px)`);
    } else {
      console.log(`  ✗ Could not find .cover-container in ${cover.file}`);
    }

    await page.close();
  }

  await browser.close();
  console.log('\nDone! All covers exported.');
}

exportCovers().catch(console.error);
