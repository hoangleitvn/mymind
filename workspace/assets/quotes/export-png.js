const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport with 3x device scale factor
  await page.setViewport({
    width: 600,
    height: 700,
    deviceScaleFactor: 3
  });

  // Load the HTML file
  const htmlPath = path.join(__dirname, 'quote-card-sketch-vs-blueprint.html');
  await page.goto(`file://${htmlPath}`);

  // Wait for fonts to load
  await page.waitForFunction(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 500));

  // Find the quote card element and screenshot it
  const element = await page.$('.quote-card');
  if (element) {
    await element.screenshot({
      path: path.join(__dirname, 'quote-card-sketch-vs-blueprint.png'),
      type: 'png'
    });
    console.log('Exported: quote-card-sketch-vs-blueprint.png (3x resolution: 1800x2100px)');
  } else {
    // Fallback to full page
    await page.screenshot({
      path: path.join(__dirname, 'quote-card-sketch-vs-blueprint.png'),
      type: 'png'
    });
    console.log('Exported full page: quote-card-sketch-vs-blueprint.png');
  }

  await browser.close();
})();
