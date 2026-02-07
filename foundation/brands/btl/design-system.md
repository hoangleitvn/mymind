---
brand: Builds That Last
created: 2025-12-26
updated: 2026-01-14
status: active
version: 2.2
---

# Builds That Last - Design System

A focused two-color design system for the BTL publication.

## Brand Philosophy

**Tagline:** Everyone ships fast. Few build to last.

The design should feel:
- **Grounded** - not trendy, not flashy
- **Professional** - engineering credibility
- **Clear** - readable, accessible, no decoration for decoration's sake

## Color Palette

### Two-Color System

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Brand** | Jade Green | `#00a86b` | Identity, accents, highlights |
| **Base** | Charcoal | `#1f2937` | Text, structure, grounding |

### Brand Color Scale (Green)

| Token | Hex | Contrast | Usage |
|-------|-----|----------|-------|
| `brand-50` | `#ecfdf5` | - | Light backgrounds, ghost button fills |
| `brand-100` | `#d1fae5` | - | Subtle highlights, tag backgrounds |
| `brand-400` | `#10b981` | - | Dark theme text accents |
| `brand-500` | `#00a86b` | 3.08:1 | Brand identity, accent bars, focus rings |
| `brand-600` | `#008553` | 4.69:1 | Button fills (white text) |
| `brand-700` | `#007a4c` | 5.14:1 | Links, text on light backgrounds |
| `brand-800` | `#065f46` | - | Dark theme ghost button backgrounds |

### Base Color Scale (Gray)

| Token | Hex | Usage |
|-------|-----|-------|
| `base-50` | `#f9fafb` | Page background (light), primary text (dark) |
| `base-100` | `#f1f5f9` | Card backgrounds, subtle surfaces |
| `base-200` | `#e5e7eb` | Borders (light theme), secondary text (dark) |
| `base-300` | `#d1d5db` | Stronger borders, dividers |
| `base-400` | `#9ca3af` | Disabled states, muted text (dark theme) |
| `base-500` | `#6b7280` | Secondary text (light theme) |
| `base-600` | `#4b5563` | Borders (dark theme) |
| `base-700` | `#374151` | Body text, surfaces (dark theme) |
| `base-800` | `#1f2937` | Headlines, primary text (light theme) |
| `base-900` | `#111827` | Deep background (dark theme) |

## Typography

### Font Stack

| Role | Family | Weights | Fallback |
|------|--------|---------|----------|
| **Heading** | IBM Plex Sans | 500, 600, 700 | system-ui, sans-serif |
| **Body** | Public Sans | 400, 500, 600 | system-ui, sans-serif |
| **Code** | JetBrains Mono | 400, 500 | monospace |

**Rule:** Headings use IBM Plex Sans. Body uses Public Sans. Code uses JetBrains Mono. Never mix.

### CSS Variables

```css
:root {
  --font-brand: "IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", Arial, sans-serif;

  --font-body: "Public Sans", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", Arial, sans-serif;

  --font-code: "JetBrains Mono", ui-monospace, Menlo, Monaco, "Cascadia Mono",
    "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace",
    "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
}
```

### Mental Model

| Font | Character | Purpose |
|------|-----------|---------|
| IBM Plex Sans | Authority | Structure and hierarchy |
| Public Sans | Endurance | Clarity and readability |
| JetBrains Mono | Precision | Technical truth |

*Typography is infrastructure. If it becomes noticeable, the system has failed.*

**Why these fonts:**
- **IBM Plex Sans**: Blueprint/documentation aesthetic, engineering credibility
- **Public Sans**: Government-grade clarity (USWDS origin), neutral and invisible
- **JetBrains Mono**: Developer-native, industry standard

**Selection criteria:**
- Not AI-common (avoids Inter, Poppins, Open Sans, Geist)
- Communicates: Engineering credibility, Operational maturity, Long-term thinking
- Typography disappears into clarity while signaling intent

### Web Scale (Desktop ≥1024px)

| Token | Size | Line Height | Font | Weight |
|-------|------|-------------|------|--------|
| display | 48px | 56px (1.17) | IBM Plex Sans | 700 |
| h1 | 40px | 48px (1.20) | IBM Plex Sans | 700 |
| h2 | 32px | 40px (1.25) | IBM Plex Sans | 600 |
| h3 | 24px | 32px (1.33) | IBM Plex Sans | 600 |
| h4 | 20px | 28px (1.40) | IBM Plex Sans | 500 |
| body | 16px | 26px (1.63) | Public Sans | 400 |
| body-sm | 14px | 22px (1.57) | Public Sans | 400 |
| caption | 12px | 18px (1.50) | Public Sans | 500 |
| label | 14px | 20px (1.43) | Public Sans | 500 |
| button | 14px | 20px (1.43) | Public Sans | 600 |

### Tablet Scale (768–1023px)

| Token | Size | Line Height |
|-------|------|-------------|
| display | 40px | 48px |
| h1 | 34px | 42px |
| h2 | 28px | 36px |
| h3 | 22px | 30px |
| h4 | 18px | 26px |
| body | 16px | 26px |

### Mobile Scale (≤767px)

| Token | Size | Line Height |
|-------|------|-------------|
| display | 34px | 42px |
| h1 | 30px | 38px |
| h2 | 24px | 32px |
| h3 | 20px | 28px |
| h4 | 18px | 26px |
| body | 16px | 26px |

**Rule:** Body text stays 16px minimum on mobile.

### Presentations Scale

| Token | Size | Line Height | Font | Weight |
|-------|------|-------------|------|--------|
| title | 54px | 1.15 | IBM Plex Sans | 700 |
| section | 40px | 1.20 | IBM Plex Sans | 700 |
| subsection | 30px | 1.25 | IBM Plex Sans | 600 |
| body | 24px | 1.35 | Public Sans | 400 |
| caption | 18px | 1.40 | Public Sans | 500 |

### Social Graphics Scale (1080×1080)

| Token | Size | Line Height | Font | Weight |
|-------|------|-------------|------|--------|
| title | 72px | 1.10 | IBM Plex Sans | 700 |
| subtitle | 36px | 1.25 | Public Sans | 500 |
| body | 26px | 1.35 | Public Sans | 400 |
| caption | 18px | 1.40 | Public Sans | 500 |

### Letter Spacing

| Context | Tracking | Reasoning |
|---------|----------|-----------|
| Display (48px+) | -0.02em | Tighter for impact |
| H1-H2 (32-40px) | -0.01em | Standard headline tightening |
| H3-H4 (20-24px) | 0 | Default |
| Body text | 0 | Default for readability |
| ALL CAPS | +0.05em | Required for legibility |
| Monospace/metadata | +0.10em | Technical spec feel |
| Small text (<14px) | +0.01em | Slightly wider for readability |

### Typography Rules

1. **Max 2 weights per component.** Don't mix 400, 500, 600, 700 in one card.
2. **Line length 45-75 characters.** Use `max-width: 75ch` for body text.
3. **Headlines tight, body loose.** Headlines: 1.1-1.25 line height. Body: 1.5-1.6.
4. **No decorative fonts.** IBM Plex Sans, Public Sans, and JetBrains Mono only.

### The "f(x)" Asset Scale (Graphical Assets)
For social covers and banners, font sizes are derived from the canvas height (**H**) to maintain mathematical rhythm.

| Token | Size Formula | Example (1080p) | Font | Weight |
|-------|--------------|-----------------|------|--------|
| **Headline** | H / 9 | 120px | IBM Plex Sans | 700 |
| **Sub-headline** | H / 18 | 60px | Public Sans | 400 |
| **Metadata/Label** | H / 36 | 30px | JetBrains Mono | 500 |

## Spacing

### 8px Grid System

All spacing uses an 8px base unit for consistent rhythm and alignment.

| Token | Value | Use Case |
|-------|-------|----------|
| `space-1` | 4px | Tight inline spacing, icon gaps |
| `space-2` | 8px | Related element spacing, small gaps |
| `space-3` | 16px | Component internal padding |
| `space-4` | 24px | Section spacing, card padding |
| `space-5` | 32px | Section dividers, major gaps |
| `space-6` | 48px | Component internal padding (large) |
| `space-8` | 64px | **Hero/infographic margins** |
| `space-12` | 96px | Page-level padding |

### Margin Guidelines by Context

| Context | Margin Token | Pixels | Rationale |
|---------|--------------|--------|-----------|
| **Social graphics (1080px)** | space-8 | 64px | 5.9% of width, industry standard |
| **Infographics (portrait)** | space-8 | 64px | Maximizes content area |
| **Web page sections** | space-12 | 96px | Generous desktop breathing room |
| **Card internal padding** | space-6 | 48px | Balanced content density |
| **Mobile margins** | space-4 | 24px | Touch-friendly, compact |

**Rule:** Social graphics and infographics use `space-8` (64px) margins. This is within the 5-10% industry standard range and maximizes usable content area.

## Components

### The Waterline (Functional Divider)
The dashed line is a structural boundary between "Surface" and "Foundation".

**Primary Line:**
- Stroke width: 2px
- Dash pattern: `4 3` (4px dash, 3px gap, scales proportionally)
- Color (light): `#1f2937` (Charcoal)
- Color (dark): `#f9fafb` (White)

**Glow Line (optional accent):**
- Stroke width: 1px, solid (no dash)
- Position: 1px below primary line
- Color (light): `#00a86b` at 30% opacity
- Color (dark): `#10b981` at 40% opacity

**Usage:**
- Must stretch the full width of the text container
- Always separates the Headline from the Sub-headline or Metadata

### Buttons & Shapes
- **Corner Radius**: Strictly 8px for standard buttons.
- **Forbidden**: Never use "Pill" (fully rounded) shapes; they lack engineering precision.
- **Depth**: Use hard shadows only (4px offset, 0 blur) to maintain clarity.

### Accent Bar

The signature BTL element. A thin green bar at the top of cards/sections.

```
Height: 4-5px
Color: #00a86b (brand-500)
Position: Top edge of container
```

### Buttons

| Type | Background | Text | Border |
|------|------------|------|--------|
| Primary | `#008553` | white | none |
| Secondary | transparent | `#374151` | 2px `#374151` |
| Ghost | `#ecfdf5` | `#007a4c` | none |

### Tags/Badges

| Type | Background | Text |
|------|------------|------|
| Primary | `#d1fae5` | `#065f46` |
| Neutral | `#f1f5f9` | `#374151` |

## Quick Reference

### Light Theme

| Element | Value |
|---------|-------|
| Background | `#ffffff` or `#f9fafb` |
| Text primary | `#1f2937` |
| Text secondary | `#6b7280` |
| Links | `#007a4c` |
| Buttons | `#008553` + white |
| Borders | `#d1d5db` |
| Accent | `#00a86b` |

### Dark Theme

| Element | Value |
|---------|-------|
| Background | `#1f2937` or `#111827` |
| Text primary | `#f9fafb` |
| Text secondary | `#9ca3af` |
| Links | `#10b981` |
| Buttons | `#008553` + white |
| Borders | `#4b5563` |
| Accent | `#00a86b` |

## Usage Rules

1. **Green is the accent, not the dominant color.** Charcoal does the heavy lifting.
2. **Never use `#00a86b` as text on white.** Use `#007a4c` for WCAG compliance.
3. **The accent bar is the signature.** Use it consistently on cards and headers.
4. **Less is more.** Two colors, clean typography, generous whitespace.

## Asset "Code Review" Checklist
Before exporting, every asset must pass:
1. **The Crop Test**: Is all text within the center 1:1 safe zone?
2. **The Ratio Test**: Is the Headline exactly 2x the size of the sub-headline?
3. **The Blueprint Test**: Does it look like an engineering document or a marketing flyer?

## Text on Brand Backgrounds

When placing text on jade/green backgrounds, always use white text:

| Background | Text Color | Example |
|------------|------------|---------|
| `#00a86b` (brand-500) | `#ffffff` | Primary buttons, featured cards |
| `#008553` (brand-600) | `#ffffff` | Button fills, CTAs |
| `#065f46` (brand-800) | `#ffffff` | Dark jade surfaces |
| Jade gradients | `#ffffff` | Hero sections, featured elements |

**CSS Pattern:**
```css
.featured-card {
    background: linear-gradient(135deg, #00a86b 0%, #065f46 100%);
    color: white;  /* Always set explicitly */
}

.featured-card h3,
.featured-card .price {
    color: white;  /* Override inherited colors */
}

.featured-card .subdued-text {
    color: rgba(255, 255, 255, 0.7);  /* Semi-transparent white */
}
```

## Forbidden Colors

These colors are **NOT** part of the BTL brand. Do not use:

| Color | Hex | Why Forbidden |
|-------|-----|---------------|
| Purple | `#6366f1`, `#8b5cf6`, `#818cf8` | Off-brand, too tech-startup |
| Pink | `#ec4899` | Off-brand, too playful |
| Blue | `#3b82f6`, `#60a5fa` | Off-brand, generic tech |
| Cyan | `#06b6d4` | Off-brand |
| Amber | `#f59e0b` | Use gray for warnings instead |
| Red | `#ef4444` | Use muted charcoal for errors |

**Exception:** Code syntax highlighting may use varied colors for readability.

### Gradients

Allowed gradients (jade family only):
```css
/* Standard jade gradient */
background: linear-gradient(135deg, #00a86b 0%, #065f46 100%);

/* Light jade gradient */
background: linear-gradient(135deg, #10b981 0%, #00a86b 100%);

/* Jade to charcoal (for avatars) */
background: linear-gradient(135deg, #065f46 0%, #1f2937 100%);

/* Charcoal gradient (for variety) */
background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
```

Forbidden gradients:
```css
/* NO purple mixing */
background: linear-gradient(135deg, #00a86b 0%, #6366f1 100%); /* ❌ */

/* NO rainbow/multi-color */
background: linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%); /* ❌ */
```

## Assets

| File | Purpose |
|------|---------|
| `visual-sketch.html` | Full design system preview (light/dark) |
| `design-system-viewer.html` | Mobile-first interactive viewer |
| `foundation-scorecard.html` | Interactive tool demo |
| `infographic-iceberg.svg` | 20%/80% visual |
| `infographic-foundation.svg` | Stacked blocks visual |
| `logo-text.svg` | Text logo (light bg) |
| `logo-text-dark.svg` | Text logo (dark bg) |
| `color-system-v2.svg` | Color system diagram |

## Related Documents

| Document | Purpose |
|----------|---------|
| `logo.md` | Logo specifications, usage rules |
| `design-philosophy/principles.md` | Core design principles (P1-P5) |
| `design-philosophy/guidelines.md` | Context-specific guidelines |
| `design-philosophy/rules.md` | Hard limits and requirements |
| `branding/typography-spec.md` | Typography reference (detailed CSS) |
