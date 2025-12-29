# INNOMIZE Slide Specification

## Canvas
- **Size:** 960pt × 540pt (16:9)
- **Inches:** 13.33" × 7.5"
- **Pixels:** 1920 × 1080px
- **Base font size:** 18px (1rem)
- **Zoom support:** Use rem units; scale via `--zoom` CSS variable

## Color Palette

### Brand Colors (Theme-Independent)
| Token | Value | Usage |
|-------|-------|-------|
| Primary | #EA322A | Accents, highlights, key numbers |
| Primary Dark | #D42A23 | Hover states |
| Primary Light | #F76D55 | Subtle accents |
| Secondary | #4E6E81 | Secondary numbers, contrast |

### Dark Theme (Default)
| Token | Value | Contrast | Usage |
|-------|-------|----------|-------|
| Background | #2E3840 | — | Slide background |
| Surface | #353f48 | — | Cards, elevated elements |
| Surface Alt | #3d4750 | — | Secondary surfaces |
| Border | #4a545d | 3.2:1 | Subtle borders |
| Text | #FFFFFF | 12.6:1 ✓ | Primary text |
| Text Subdued | #B8BCBF | 7.5:1 ✓ | Secondary text, labels |
| Text on Primary | #FFFFFF | 4.5:1 ✓ | Text on red background |

### Light Theme
| Token | Value | Contrast | Usage |
|-------|-------|----------|-------|
| Background | #F8F8F8 | — | Slide background |
| Surface | #FFFFFF | — | Cards, elevated elements |
| Surface Alt | #F1F3F5 | — | Secondary surfaces |
| Border | #D1D3D5 | 3.1:1 | Subtle borders |
| Text | #2E3840 | 10.8:1 ✓ | Primary text |
| Text Subdued | #5C6369 | 5.8:1 ✓ | Secondary text, labels |
| Text on Primary | #FFFFFF | 4.5:1 ✓ | Text on red background |

### Semantic Colors (WCAG Adjusted)
| Token | Dark Theme | Light Theme | Usage |
|-------|------------|-------------|-------|
| Success | #4ADE80 | #16A34A | Positive indicators |
| Success Text | #4ADE80 (4.8:1) | #15803D (4.6:1) | Text on dark/light bg |
| Warning | #FBBF24 | #D97706 | Caution indicators |
| Warning Text | #FBBF24 (5.2:1) | #B45309 (4.5:1) | Text on dark/light bg |

### WCAG Compliance
- **AA Standard (minimum):**
  - Normal text: 4.5:1 contrast ratio
  - Large text (18pt+ or 14pt bold): 3:1 contrast ratio
  - UI components: 3:1 contrast ratio
- All text colors marked ✓ meet AA standard against their respective backgrounds

## Typography

**Font Families:**
- Display/Headings: `Bai Jamjuree`
- Body: `Manrope`

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Slide title | Bai Jamjuree | 36pt | Bold (700) |
| Statement quote | Bai Jamjuree | 40pt | Bold (700) |
| Source line | Manrope | 14pt | Normal (400) |
| Body text | Manrope | 16-18pt | Normal (400) |
| Stat number | Bai Jamjuree | 48-72pt | Bold (700) |
| Stat label | Manrope | 16-18pt | Normal (400) |
| Quote block text | Manrope | 22pt | Normal (400), italic |
| Takeaway label | Bai Jamjuree | 12pt | SemiBold (600), uppercase |
| Takeaway text | Manrope | 18pt | Normal (400) |
| List item | Manrope | 18pt | Normal (400) |
| Column header | Bai Jamjuree | 20pt | SemiBold (600) |

## Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│ 40pt padding                                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │           HEADER ZONE (~90pt)                     │  │
│  │              ↕ middle-aligned ↕                   │  │
│  └───────────────────────────────────────────────────┘  │
│ 24pt gap                                                │
│  ┌───────────────────────────────────────────────────┐  │
│  │           CONTENT ZONE (remaining)                │  │
│  │              ↕ middle-aligned ↕                   │  │
│  └───────────────────────────────────────────────────┘  │
│ 40pt padding                                            │
└─────────────────────────────────────────────────────────┘
  56pt                                               56pt
```

## Spacing
| Element | Value |
|---------|-------|
| Slide padding (horizontal) | 56pt |
| Slide padding (vertical) | 40pt |
| Header to content gap | 24pt |
| Content internal gap | 20pt |
| Card padding | 20-24pt |
| Card border-radius | 12pt |

## Alignment Rules

| Slide Type | Horizontal | Vertical (per zone) |
|------------|------------|---------------------|
| Title | Center | Middle |
| Statement/Quote | Center | Middle |
| Content | Left | Middle |

**Rule:** Header and content zones use the same horizontal alignment.

## Slide Types

### Title Slide
- Horizontal: Center
- Has 6pt red accent bar at top
- Content: Logo → Title → Subtitle → Meta

### Statement Slide
- Horizontal: Center
- Header zone: empty or minimal
- Content: Quote text (highlighted words in primary color) + optional source

### Content Slide
- Horizontal: Left
- Header zone: Title + optional source
- Content: Stats, columns, lists, quote blocks, takeaway boxes

## Components

### Quote Block
- Background: Surface color
- Left border: 4pt Primary color
- Border-radius: 0 10pt 10pt 0
- Padding: 16pt 20pt

### Takeaway Box
- Background: Surface color
- Border: 1pt Border color
- Border-radius: 10pt
- Padding: 12pt 16pt
- Label: Uppercase, Primary color

### Stat Card
- Background: Surface color
- Border: 1pt Border color
- Border-radius: 10pt
- Padding: 20pt

## Scaling / Zoom

### CSS Variables
```css
:root {
  --zoom: 1;           /* Scale factor: 0.5 to 2 */
  --base-font: 18px;   /* Base font size */
}

html {
  font-size: calc(var(--base-font) * var(--zoom));
}
```

### Zoom Levels
| Level | --zoom | Effective Base | Use Case |
|-------|--------|----------------|----------|
| 50% | 0.5 | 9px | Thumbnail preview |
| 75% | 0.75 | 13.5px | Compact view |
| 100% | 1.0 | 18px | Default |
| 125% | 1.25 | 22.5px | Large display |
| 150% | 1.5 | 27px | Presentation mode |
| 200% | 2.0 | 36px | Accessibility |

### Implementation Rules
1. **Use rem units** for all font sizes and spacing
2. **Convert pt to rem:** `1pt ≈ 0.0833rem` (at 18px base)
3. **Fixed elements** (canvas size, accent bars) use pt/px
4. **Scalable elements** (text, padding, gaps) use rem

### Size Conversion Table (at 1rem = 18px)
| pt | rem | Usage |
|----|-----|-------|
| 12pt | 0.67rem | Takeaway label |
| 14pt | 0.78rem | Source text |
| 16pt | 0.89rem | Body text (min) |
| 18pt | 1rem | Body text, list items |
| 20pt | 1.11rem | Column headers |
| 22pt | 1.22rem | Quote block |
| 36pt | 2rem | Slide title |
| 40pt | 2.22rem | Statement quote |
| 48pt | 2.67rem | Stat number (small) |
| 72pt | 4rem | Stat number (large) |

## Theme Switching

### CSS Implementation
```css
[data-theme="dark"] {
  --bg-base: #2E3840;
  --bg-surface: #353f48;
  --text-primary: #FFFFFF;
  --text-subdued: #B8BCBF;
  --border-color: #4a545d;
}

[data-theme="light"] {
  --bg-base: #F8F8F8;
  --bg-surface: #FFFFFF;
  --text-primary: #2E3840;
  --text-subdued: #5C6369;
  --border-color: #D1D3D5;
}
```

### PowerPoint Consideration
PowerPoint does not support dynamic theming. Generate separate files for each theme or use the dark theme as default.
