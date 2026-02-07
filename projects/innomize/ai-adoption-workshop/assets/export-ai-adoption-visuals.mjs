/**
 * Export AI Adoption article visuals to PNG at 3x quality
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const visuals = [
  {
    input: 'visual-ai-adoption-framework-flow.html',
    output: 'ai-adoption-visual-1-framework-flow.webp',
    width: 1200,
    height: 675
  },
  {
    input: 'visual-ai-adoption-5-skills.html',
    output: 'ai-adoption-visual-2-five-skills.webp',
    width: 1080,
    height: 1080
  },
  {
    input: 'visual-ai-adoption-4-week-timeline.html',
    output: 'ai-adoption-visual-3-four-week-timeline.webp',
    width: 1200,
    height: 675
  },
  {
    input: 'visual-ai-adoption-warning-signs.html',
    output: 'ai-adoption-visual-4-warning-signs.webp',
    width: 1200,
    height: 675
  },
  {
    input: 'visual-ai-adoption-comparison.html',
    output: 'ai-adoption-visual-5-comparison.webp',
    width: 1200,
    height: 675
  }
];

async function exportVisuals() {
  const scale = 3; // 3x quality

  console.log('Exporting AI Adoption visuals at 3x quality...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    for (const visual of visuals) {
      const inputPath = path.resolve(__dirname, visual.input);
      const outputPath = path.resolve(__dirname, visual.output);

      await page.setViewport({
        width: visual.width,
        height: visual.height,
        deviceScaleFactor: scale
      });

      await page.goto(`file://${inputPath}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      await page.evaluateHandle('document.fonts.ready');
      await new Promise(resolve => setTimeout(resolve, 500));

      const element = await page.$('#visual');

      if (element) {
        await element.screenshot({
          path: outputPath,
          type: 'webp',
          quality: 92,
          omitBackground: false
        });
        console.log(`✓ ${visual.output}`);
        console.log(`  Resolution: ${visual.width * scale}x${visual.height * scale}px\n`);
      } else {
        console.log(`✗ Could not find element #visual in ${visual.input}`);
      }
    }

    console.log('Export complete!');

  } finally {
    await browser.close();
  }
}

exportVisuals().catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
