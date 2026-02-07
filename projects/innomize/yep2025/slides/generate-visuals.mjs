import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = join(__dirname, 'assets');
mkdirSync(assetsDir, { recursive: true });

// INNOMIZE Brand Colors
const colors = {
  primary: '#EA322A',
  secondary: '#4E6E81',
  dark: '#2E3840',
  muted: '#7B8187',
  light: '#F8F8F8',
  cream: '#FFF3E2',
  white: '#FFFFFF'
};

// 1. Building/Construction Icon for Title
const buildingIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <!-- Foundation -->
  <rect x="30" y="160" width="140" height="20" rx="4" fill="${colors.secondary}"/>

  <!-- Building blocks -->
  <rect x="40" y="120" width="50" height="35" rx="3" fill="${colors.primary}"/>
  <rect x="100" y="120" width="50" height="35" rx="3" fill="${colors.primary}"/>
  <rect x="70" y="80" width="50" height="35" rx="3" fill="${colors.primary}"/>

  <!-- Crane -->
  <rect x="155" y="40" width="8" height="120" fill="${colors.secondary}"/>
  <rect x="100" y="40" width="70" height="8" fill="${colors.secondary}"/>
  <line x1="110" y1="48" x2="110" y2="80" stroke="${colors.muted}" stroke-width="3"/>

  <!-- Block being lifted -->
  <rect x="95" y="80" width="30" height="20" rx="2" fill="${colors.primary}" opacity="0.7"/>
</svg>
`;

// 2. OWN Icon - Hand/Ownership
const ownIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <circle cx="40" cy="40" r="35" fill="${colors.cream}"/>
  <path d="M40 20 L40 35 M32 27 L40 20 L48 27" stroke="${colors.primary}" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="40" cy="50" r="12" fill="none" stroke="${colors.primary}" stroke-width="4"/>
  <circle cx="40" cy="50" r="5" fill="${colors.primary}"/>
</svg>
`;

// 3. BUILD Icon - Blocks/Bricks
const buildIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <circle cx="40" cy="40" r="35" fill="${colors.cream}"/>
  <rect x="20" y="45" width="18" height="12" rx="2" fill="${colors.primary}"/>
  <rect x="42" y="45" width="18" height="12" rx="2" fill="${colors.primary}"/>
  <rect x="31" y="30" width="18" height="12" rx="2" fill="${colors.primary}"/>
</svg>
`;

// 4. LEAD Icon - Flag/Direction
const leadIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <circle cx="40" cy="40" r="35" fill="${colors.cream}"/>
  <rect x="30" y="22" width="4" height="38" fill="${colors.secondary}"/>
  <path d="M34 22 L55 32 L34 42 Z" fill="${colors.primary}"/>
</svg>
`;

// 5. Staircase/Progression for 4 Mental Shifts
const staircaseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="120" viewBox="0 0 400 120">
  <!-- Steps -->
  <rect x="10" y="90" width="80" height="20" rx="3" fill="${colors.muted}" opacity="0.5"/>
  <rect x="100" y="70" width="80" height="40" rx="3" fill="${colors.secondary}" opacity="0.7"/>
  <rect x="190" y="50" width="80" height="60" rx="3" fill="${colors.primary}" opacity="0.8"/>
  <rect x="280" y="30" width="80" height="80" rx="3" fill="${colors.primary}"/>

  <!-- Arrow showing progression -->
  <path d="M370 60 L390 60 M382 52 L390 60 L382 68" stroke="${colors.primary}" stroke-width="4" fill="none" stroke-linecap="round"/>

  <!-- Person on top -->
  <circle cx="320" cy="15" r="8" fill="${colors.dark}"/>
  <line x1="320" y1="23" x2="320" y2="28" stroke="${colors.dark}" stroke-width="3"/>
</svg>
`;

// 6. Evolution Characters - Spotter, Solver, Builder
const evolutionSpotter = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="30" r="15" fill="${colors.muted}"/>
  <ellipse cx="50" cy="70" rx="20" ry="25" fill="${colors.muted}"/>
  <!-- Eyes looking/spotting -->
  <circle cx="45" cy="28" r="3" fill="${colors.white}"/>
  <circle cx="55" cy="28" r="3" fill="${colors.white}"/>
  <circle cx="46" cy="28" r="1.5" fill="${colors.dark}"/>
  <circle cx="56" cy="28" r="1.5" fill="${colors.dark}"/>
  <!-- Pointing hand -->
  <path d="M70 55 L85 45" stroke="${colors.muted}" stroke-width="6" stroke-linecap="round"/>
</svg>
`;

const evolutionSolver = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="30" r="15" fill="${colors.secondary}"/>
  <ellipse cx="50" cy="70" rx="20" ry="25" fill="${colors.secondary}"/>
  <!-- Eyes focused -->
  <circle cx="45" cy="28" r="3" fill="${colors.white}"/>
  <circle cx="55" cy="28" r="3" fill="${colors.white}"/>
  <circle cx="45" cy="28" r="1.5" fill="${colors.dark}"/>
  <circle cx="55" cy="28" r="1.5" fill="${colors.dark}"/>
  <!-- Wrench/tool -->
  <rect x="70" y="50" width="20" height="6" rx="2" fill="${colors.secondary}"/>
  <circle cx="88" cy="53" r="8" fill="none" stroke="${colors.secondary}" stroke-width="4"/>
</svg>
`;

const evolutionBuilder = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="30" r="15" fill="${colors.primary}"/>
  <ellipse cx="50" cy="70" rx="20" ry="25" fill="${colors.primary}"/>
  <!-- Eyes confident -->
  <circle cx="45" cy="28" r="3" fill="${colors.white}"/>
  <circle cx="55" cy="28" r="3" fill="${colors.white}"/>
  <circle cx="45" cy="28" r="1.5" fill="${colors.dark}"/>
  <circle cx="55" cy="28" r="1.5" fill="${colors.dark}"/>
  <!-- Hard hat -->
  <ellipse cx="50" cy="18" rx="18" ry="8" fill="${colors.cream}"/>
  <rect x="32" y="16" width="36" height="6" fill="${colors.cream}"/>
  <!-- Blocks in hands -->
  <rect x="15" y="55" width="12" height="10" rx="2" fill="${colors.cream}"/>
  <rect x="73" y="55" width="12" height="10" rx="2" fill="${colors.cream}"/>
</svg>
`;

// 7. Human + AI Collaboration
const humanAiCollab = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 300 150">
  <!-- Human figure -->
  <circle cx="80" cy="40" r="20" fill="${colors.secondary}"/>
  <ellipse cx="80" cy="95" rx="25" ry="35" fill="${colors.secondary}"/>

  <!-- AI/Robot figure -->
  <rect x="180" y="20" width="40" height="40" rx="8" fill="${colors.primary}"/>
  <rect x="175" y="70" width="50" height="50" rx="5" fill="${colors.primary}"/>
  <!-- Robot eyes -->
  <circle cx="192" cy="35" r="5" fill="${colors.white}"/>
  <circle cx="208" cy="35" r="5" fill="${colors.white}"/>
  <circle cx="192" cy="35" r="2" fill="${colors.dark}"/>
  <circle cx="208" cy="35" r="2" fill="${colors.dark}"/>
  <!-- Antenna -->
  <line x1="200" y1="20" x2="200" y2="8" stroke="${colors.primary}" stroke-width="3"/>
  <circle cx="200" cy="5" r="4" fill="${colors.primary}"/>

  <!-- Connection/collaboration arrows -->
  <path d="M110 70 Q150 50 170 70" stroke="${colors.muted}" stroke-width="3" fill="none" stroke-dasharray="5,5"/>
  <path d="M170 90 Q150 110 110 90" stroke="${colors.muted}" stroke-width="3" fill="none" stroke-dasharray="5,5"/>

  <!-- Handshake/connection point -->
  <circle cx="140" cy="80" r="15" fill="${colors.cream}" stroke="${colors.primary}" stroke-width="2"/>
  <text x="140" y="85" text-anchor="middle" font-size="14" fill="${colors.primary}">+</text>
</svg>
`;

// 8. Warning icon for mistakes
const warningIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
  <path d="M15 3 L28 27 L2 27 Z" fill="${colors.primary}"/>
  <text x="15" y="23" text-anchor="middle" font-size="16" font-weight="bold" fill="${colors.white}">!</text>
</svg>
`;

// Generate all PNGs
async function generateVisuals() {
  const visuals = [
    { name: 'building-icon.png', svg: buildingIcon, width: 200, height: 200 },
    { name: 'own-icon.png', svg: ownIcon, width: 80, height: 80 },
    { name: 'build-icon.png', svg: buildIcon, width: 80, height: 80 },
    { name: 'lead-icon.png', svg: leadIcon, width: 80, height: 80 },
    { name: 'staircase.png', svg: staircaseIcon, width: 400, height: 120 },
    { name: 'evolution-spotter.png', svg: evolutionSpotter, width: 100, height: 100 },
    { name: 'evolution-solver.png', svg: evolutionSolver, width: 100, height: 100 },
    { name: 'evolution-builder.png', svg: evolutionBuilder, width: 100, height: 100 },
    { name: 'human-ai-collab.png', svg: humanAiCollab, width: 300, height: 150 },
    { name: 'warning-icon.png', svg: warningIcon, width: 30, height: 30 },
  ];

  for (const { name, svg, width, height } of visuals) {
    const outputPath = join(assetsDir, name);
    await sharp(Buffer.from(svg))
      .resize(width * 2, height * 2) // 2x for retina
      .png()
      .toFile(outputPath);
    console.log(`Created: ${name}`);
  }

  console.log('\nAll visuals generated in:', assetsDir);
}

generateVisuals().catch(console.error);
