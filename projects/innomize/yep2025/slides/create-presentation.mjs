import pptxgen from 'pptxgenjs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import html2pptx from the skill directory
const html2pptxPath = '/Users/hoangle/Documents/mymind/.claude/skills/pptx/scripts/html2pptx.js';
const { default: html2pptx } = await import(html2pptxPath);

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'INNOMIZE';
  pptx.title = 'Year-End Review 2025 & Vision for 2026';
  pptx.subject = 'Builder Mindset - OWN BUILD LEAD';
  pptx.company = 'INNOMIZE';

  const slides = [
    'slide01-title.html',
    'slide02-thankyou.html',
    'slide03-aishift.html',
    'slide04-aidev.html',
    'slide05-mistakes.html',
    'slide06-mindsetgap.html',
    'slide07-section1.html',
    'slide08-honest.html',
    'slide09-own.html',
    'slide10-build.html',
    'slide11-dailyactions.html',
    'slide12-section2.html',
    'slide13-lead.html',
    'slide14-fourshifts.html',
    'slide14-evolution.html',
    'slide15-whatscoming.html',
    'slide16-challenge.html',
    'slide17-closing.html'
  ];

  for (const slideFile of slides) {
    const htmlPath = join(__dirname, slideFile);
    console.log(`Processing: ${slideFile}`);
    await html2pptx(htmlPath, pptx);
  }

  const outputPath = join(__dirname, '..', 'yep2025-presentation.pptx');
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nPresentation created: ${outputPath}`);
}

createPresentation().catch(console.error);
