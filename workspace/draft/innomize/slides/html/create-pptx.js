const pptxgen = require('pptxgenjs');
const html2pptx = require('/Users/hoangle/Documents/MizeStudio/products/mizemind/development/mizemind-hl/.claude/skills/pptx/scripts/html2pptx.js');
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'INNOMIZE';
    pptx.title = 'AI Adoption Workshop Series';
    pptx.company = 'INNOMIZE';

    const htmlDir = __dirname;
    const outputPath = path.join(__dirname, '..', 'ai-adoption-workshop-preview.pptx');

    console.log('Creating AI Adoption Workshop presentation...');

    // Slide 1: Title
    console.log('Processing slide 1: Title...');
    await html2pptx(path.join(htmlDir, 'slide-01-title.html'), pptx);

    // Slide 2: Statement
    console.log('Processing slide 2: Statement...');
    await html2pptx(path.join(htmlDir, 'slide-02-statement.html'), pptx);

    // Slide 3: Adoption Gap
    console.log('Processing slide 3: Adoption Gap...');
    await html2pptx(path.join(htmlDir, 'slide-03-adoption-gap.html'), pptx);

    // Save the presentation
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Presentation saved to: ${outputPath}`);
}

createPresentation().catch(err => {
    console.error('Error creating presentation:', err);
    process.exit(1);
});
