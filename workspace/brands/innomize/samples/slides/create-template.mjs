import pptxgen from 'pptxgenjs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get html2pptx from skills directory
const html2pptx = require('/Users/hoangle/Documents/MizeStudio/products/mizemind/development/mizemind-hl/.claude/skills/pptx/scripts/html2pptx.js');

async function createInnomizeTemplate() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'INNOMIZE';
    pptx.title = 'INNOMIZE Presentation Template';
    pptx.company = 'INNOMIZE';
    pptx.subject = 'Brand Template';

    const slidesDir = __dirname;
    const slides = [
        'slide1-title.html',
        'slide2-section.html',
        'slide3-content.html',
        'slide4-two-column.html',
        'slide5-image-text.html',
        'slide6-bullets.html',
        'slide7-closing.html'
    ];

    console.log('Creating INNOMIZE presentation template...');

    for (const slideFile of slides) {
        const htmlPath = path.join(slidesDir, slideFile);
        console.log(`Processing: ${slideFile}`);
        await html2pptx(htmlPath, pptx);
    }

    const outputPath = path.join(slidesDir, '..', 'innomize-slide-template.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Template saved to: ${outputPath}`);
}

createInnomizeTemplate().catch(console.error);
