const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function createAnimatedGif() {
  const svgPath = path.join(__dirname, 'ai-writing-info-v4-howto-animated.svg');
  const framesDir = path.join(__dirname, 'frames');
  const outputPath = path.join(__dirname, 'ai-writing-info-v4-howto-animated.gif');

  // Animation settings
  const width = 1080;
  const height = 1080;
  const fps = 10; // Lower frame rate
  const duration = 10; // 10 seconds for full loop (LCM of animation durations: 2s, 2.5s, 3s, 3.5s, 4.5s, 5s)
  const totalFrames = fps * duration; // 100 frames
  const frameDelay = 1000 / fps; // 100ms per frame

  console.log(`Creating GIF: ${totalFrames} frames at ${fps} FPS (${duration}s loop)`);

  // Create frames directory
  if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir, { recursive: true });
  }

  // Clean old frames
  const oldFrames = fs.readdirSync(framesDir).filter(f => f.endsWith('.png'));
  oldFrames.forEach(f => fs.unlinkSync(path.join(framesDir, f)));

  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width, height });

  // Load SVG as HTML page
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; background: #f9fafb; }
        svg { display: block; }
      </style>
    </head>
    <body>
      ${svgContent}
    </body>
    </html>
  `;

  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  // Capture frames
  console.log('Capturing frames...');
  for (let i = 0; i < totalFrames; i++) {
    const framePath = path.join(framesDir, `frame-${String(i).padStart(4, '0')}.png`);
    await page.screenshot({ path: framePath, type: 'png' });

    // Wait for next frame
    await page.waitForTimeout(frameDelay);

    if ((i + 1) % 10 === 0) {
      console.log(`  Frame ${i + 1}/${totalFrames}`);
    }
  }

  await browser.close();
  console.log('Frames captured. Creating GIF with ffmpeg...');

  // Use ffmpeg to create GIF - keep same fps as captured
  const ffmpegCmd = `ffmpeg -y -framerate ${fps} -i "${framesDir}/frame-%04d.png" -vf "fps=${fps},scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=5" "${outputPath}"`;

  try {
    execSync(ffmpegCmd, { stdio: 'inherit' });
    console.log(`\nGIF created: ${outputPath}`);
    console.log(`File size: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB`);
  } catch (err) {
    console.error('ffmpeg error:', err.message);
  }
}

createAnimatedGif().catch(console.error);
