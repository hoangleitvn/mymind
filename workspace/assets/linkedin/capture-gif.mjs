import puppeteer from 'puppeteer';
import { execSync } from 'child_process';
import { mkdirSync, rmSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SVG_FILE = 'not-bad-wrong-approach-visual-v8-simple-1080.svg';
const OUTPUT_GIF = 'not-bad-wrong-approach.gif';
const FRAMES_DIR = join(__dirname, 'frames');
const SIZE = 1080;
const CAPTURE_DURATION_MS = 8000; // 8 seconds of animation to capture
const CAPTURE_FPS = 10; // frames to capture per second
const OUTPUT_FPS = 3; // playback speed (lower = slower GIF)
const FRAME_COUNT = Math.floor(CAPTURE_DURATION_MS / 1000 * CAPTURE_FPS);

async function captureFrames() {
  // Clean up and create frames directory
  if (existsSync(FRAMES_DIR)) {
    rmSync(FRAMES_DIR, { recursive: true });
  }
  mkdirSync(FRAMES_DIR);

  console.log(`Capturing ${FRAME_COUNT} frames at ${CAPTURE_FPS} FPS, output at ${OUTPUT_FPS} FPS...`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: SIZE, height: SIZE });

  // Load the SVG file
  const svgPath = join(__dirname, SVG_FILE);
  await page.goto(`file://${svgPath}`, { waitUntil: 'networkidle0' });

  // Helper function for delay
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Wait for animations to initialize
  await delay(500);

  // Capture frames
  const frameInterval = CAPTURE_DURATION_MS / FRAME_COUNT;

  for (let i = 0; i < FRAME_COUNT; i++) {
    const frameNum = String(i).padStart(4, '0');
    const framePath = join(FRAMES_DIR, `frame_${frameNum}.png`);

    await page.screenshot({
      path: framePath,
      type: 'png',
      clip: { x: 0, y: 0, width: SIZE, height: SIZE }
    });

    if (i < FRAME_COUNT - 1) {
      await delay(frameInterval);
    }

    process.stdout.write(`\rFrame ${i + 1}/${FRAME_COUNT}`);
  }

  console.log('\nFrames captured!');
  await browser.close();
}

function createGif() {
  console.log('Creating GIF with ffmpeg...');

  const inputPattern = join(FRAMES_DIR, 'frame_%04d.png');
  const palettePath = join(FRAMES_DIR, 'palette.png');
  const outputPath = join(__dirname, OUTPUT_GIF);

  // Generate palette for better quality
  execSync(
    `ffmpeg -y -framerate ${CAPTURE_FPS} -i "${inputPattern}" -vf "fps=${OUTPUT_FPS},scale=${SIZE}:-1:flags=lanczos,palettegen=max_colors=256:stats_mode=full" "${palettePath}"`,
    { stdio: 'inherit' }
  );

  // Create GIF using palette - output at slower FPS
  execSync(
    `ffmpeg -y -framerate ${CAPTURE_FPS} -i "${inputPattern}" -i "${palettePath}" -lavfi "fps=${OUTPUT_FPS},scale=${SIZE}:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=5" "${outputPath}"`,
    { stdio: 'inherit' }
  );

  console.log(`\nGIF created: ${outputPath}`);
}

function cleanup() {
  if (existsSync(FRAMES_DIR)) {
    rmSync(FRAMES_DIR, { recursive: true });
  }
  console.log('Cleaned up temporary frames.');
}

async function main() {
  try {
    await captureFrames();
    createGif();
    cleanup();
  } catch (error) {
    console.error('Error:', error.message);
    cleanup();
    process.exit(1);
  }
}

main();
