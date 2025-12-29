const pptxgen = require('pptxgenjs');
const html2pptx = require('./html2pptx.js');
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'INNOMIZE';
    pptx.title = 'AI Adoption Workshop Series';
    pptx.company = 'INNOMIZE';

    const htmlDir = '/Users/hoangle/Documents/MizeStudio/products/mizemind/development/mizemind-hl/workspace/draft/innomize/slides/html';
    const outputPath = '/Users/hoangle/Documents/MizeStudio/products/mizemind/development/mizemind-hl/workspace/draft/innomize/slides/ai-adoption-workshop.pptx';

    console.log('Creating AI Adoption Workshop presentation (7 slides)...');

    // Slide 1: Title
    console.log('Processing slide 1: Title...');
    await html2pptx(path.join(htmlDir, 'slide-01-title.html'), pptx);

    // Slide 2: Statement
    console.log('Processing slide 2: Core Quote...');
    await html2pptx(path.join(htmlDir, 'slide-02-statement.html'), pptx);

    // Slide 3: Adoption Gap
    console.log('Processing slide 3: Adoption Gap...');
    await html2pptx(path.join(htmlDir, 'slide-03-adoption-gap.html'), pptx);

    // Slide 4: Risks
    console.log('Processing slide 4: Risks Without Discipline...');
    await html2pptx(path.join(htmlDir, 'slide-04-risks.html'), pptx);

    // Slide 5: Productivity Reality
    console.log('Processing slide 5: Productivity Reality...');
    await html2pptx(path.join(htmlDir, 'slide-05-productivity.html'), pptx);

    // Slide 6: What Actually Happens
    console.log('Processing slide 6: What Actually Happens...');
    await html2pptx(path.join(htmlDir, 'slide-06-what-happens.html'), pptx);

    // Slide 7: Skills That Rise
    console.log('Processing slide 7: Skills That Rise in Value...');
    await html2pptx(path.join(htmlDir, 'slide-07-skills.html'), pptx);

    // Save the presentation
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Presentation saved to: ${outputPath}`);
}

createPresentation().catch(err => {
    console.error('Error creating presentation:', err);
    process.exit(1);
});
