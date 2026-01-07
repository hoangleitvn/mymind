const puppeteer = require('puppeteer');
const GIFEncoder = require('gifencoder');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function createAnimatedGif() {
  const svgPath = path.join(__dirname, 'ai-writing-info-v4-howto-animated.svg');
  const outputPath = path.join(__dirname, 'ai-writing-info-v4-howto-animated.gif');

  // Animation settings
  const width = 1080;
  const height = 1080;
  const fps = 20;
  const duration = 5; // 5 seconds for full loop (LCM of 1s, 1.5s, 2.2s, 2.5s)
  const totalFrames = fps * duration; // 100 frames
  const frameDelay = 1000 / fps; // 50ms per frame

  console.log(`Creating GIF: ${totalFrames} frames at ${fps} FPS (${duration}s loop)`);

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width, height });

  // Load SVG as HTML page
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; }
        svg { display: block; }
      </style>
    </head>
    <body>
      ${svgContent}
    </body>
    </html>
  `;

  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  // Setup GIF encoder
  const encoder = new GIFEncoder(width, height);
  const outputStream = fs.createWriteStream(outputPath);

  encoder.createReadStream().pipe(outputStream);
  encoder.start();
  encoder.setRepeat(0); // 0 = loop forever
  encoder.setDelay(frameDelay);
  encoder.setQuality(10); // 1-20, lower is better quality

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Capture frames
  console.log('Capturing frames...');
  for (let i = 0; i < totalFrames; i++) {
    // Take screenshot
    const screenshot = await page.screenshot({ type: 'png' });
    const img = await loadImage(screenshot);

    ctx.drawImage(img, 0, 0);
    encoder.addFrame(ctx);

    // Wait for next frame
    await page.evaluate((delay) => {
      return new Promise(resolve => setTimeout(resolve, delay));
    }, frameDelay);

    if ((i + 1) % 10 === 0) {
      console.log(`  Frame ${i + 1}/${totalFrames}`);
    }
  }

  encoder.finish();
  await browser.close();

  console.log(`\nGIF created: ${outputPath}`);
  console.log(`File size: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB`);
}

createAnimatedGif().catch(console.error);
