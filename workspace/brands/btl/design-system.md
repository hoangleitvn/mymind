---
brand: Builds That Last
created: 2025-12-26
status: active
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
| **Heading** | Poppins | 600, 700, 800 | Inter, system-ui, sans-serif |
| **Body** | Inter | 400, 500, 600 | system-ui, sans-serif |
| **Code** | JetBrains Mono | 400, 500 | monospace |

**Rule:** Headings use Poppins. Everything else uses Inter. Never mix.

### Web Scale (Desktop ≥1024px)

| Token | Size | Line Height | Font | Weight |
|-------|------|-------------|------|--------|
| display | 48px | 56px (1.17) | Poppins | 800 |
| h1 | 40px | 48px (1.20) | Poppins | 700 |
| h2 | 32px | 40px (1.25) | Poppins | 700 |
| h3 | 24px | 32px (1.33) | Poppins | 600 |
| h4 | 20px | 28px (1.40) | Poppins | 600 |
| body | 16px | 26px (1.63) | Inter | 400 |
| body-sm | 14px | 22px (1.57) | Inter | 400 |
| caption | 12px | 18px (1.50) | Inter | 500 |
| label | 14px | 20px (1.43) | Inter | 500 |
| button | 14px | 20px (1.43) | Inter | 600 |

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
| title | 54px | 1.15 | Poppins | 800 |
| section | 40px | 1.20 | Poppins | 700 |
| subsection | 30px | 1.25 | Poppins | 600 |
| body | 24px | 1.35 | Inter | 400 |
| caption | 18px | 1.40 | Inter | 500 |

### Social Graphics Scale (1080×1080)

| Token | Size | Line Height | Font | Weight |
|-------|------|-------------|------|--------|
| title | 72px | 1.10 | Poppins | 800 |
| subtitle | 36px | 1.25 | Inter | 500 |
| body | 26px | 1.35 | Inter | 400 |
| caption | 18px | 1.40 | Inter | 500 |

### Letter Spacing

| Context | Tracking |
|---------|----------|
| Display/H1 | -0.01em (tighter) |
| H2–H4 | 0 (default) |
| Body text | 0 (default) |
| ALL CAPS | +0.05em (wider) |
| Small text (<14px) | +0.01em (slightly wider) |

### Typography Rules

1. **Max 2 weights per component.** Don't mix 400, 500, 600, 700 in one card.
2. **Line length 45-75 characters.** Use `max-width: 65ch` for body text.
3. **Headlines tight, body loose.** Headlines: 1.1-1.25 line height. Body: 1.5-1.6.
4. **No decorative fonts.** Poppins and Inter only.

## Components

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
