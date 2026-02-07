---
title: BTL Design Guidelines
type: architecture
status: active
created: 2026-01-13
updated: 2026-01-15
version: 1.2
---

# Design Guidelines

How principles apply across different contexts.

## By Content Type

### Articles & Long-Form

| Principle | Application |
|-----------|-------------|
| Depth Over Surface | Layer information: headline → summary → detail |
| Clarity Over Cleverness | One idea per section, clear headers |
| Restraint Over Abundance | Generous margins, minimal inline styling |
| Grounded Over Floating | Strong typographic hierarchy, anchored headers |
| Timeless Over Trendy | Classic editorial layout, no gimmicks |

### Blog Detail Pages

| Element | Guideline | Rationale |
|---------|-----------|-----------|
| **Layout** | Unified Flow (single background, no dark header breaks) | Grounded Over Floating: continuous reading experience, no visual interruptions |
| **Reading Width** | 75ch using relative units | Clarity Over Cleverness: scales with font size, adapts to user preferences |
| **Table of Contents** | Yes (sticky sidebar on desktop) | Depth Over Surface: reveals article structure, implies substance beneath |
| **Progress Bar** | No | Timeless Over Trendy: decorative, no functional value, will date quickly |

**Layout Philosophy:**
- Single light background throughout (no dark hero sections on content pages)
- Header flows seamlessly into content
- Two-column grid on desktop: content (75ch) + sidebar TOC (220px)
- Mobile: single column, TOC hidden

**Why Unified Flow:**
- Eliminates visual "break" between header and content
- Keeps reader grounded in continuous reading mode
- Aligns with Restraint Over Abundance (fewer visual layers)
- Passes Blueprint Test (editorial document, not marketing page)

### Social Graphics (LinkedIn, Cards)

| Principle | Application |
|-----------|-------------|
| **Center-Weighted Asymmetry** | Use a 1:1 "Safe Zone" in the center of 16:9 frames. Text is left-aligned *inside* this zone to prevent mobile cropping. |
| **Depth Over Surface** | Use the Waterline (dashed line) to separate the headline from technical metadata. |
| **Grounded Over Floating** | Content should be bottom-weighted within the safe zone. |

**Margin Specifications:**

| Dimension | Margin | Token | Content Width |
|-----------|--------|-------|---------------|
| 1080px wide | 64px | space-8 | 952px |
| 1200px wide | 64px | space-8 | 1072px |
| 1584px wide (banner) | 96px | space-12 | 1392px |

### Infographics & Data

| Principle | Application |
|-----------|-------------|
| Depth Over Surface | Show context, not just numbers |
| Clarity Over Cleverness | Label everything, no legends requiring lookup |
| Restraint Over Abundance | One chart type per section |
| Grounded Over Floating | Baseline-aligned elements, clear grid |
| Timeless Over Trendy | Simple chart types (bar, line), no 3D effects |

**Layout Specifications:**

| Property | Value | Token |
|----------|-------|-------|
| **Margins (left/right)** | 64px | space-8 |
| **Column gap** | 40px | space-5 |
| **Section padding** | 48px | space-6 |
| **Item spacing** | 24px | space-4 |
| **Footer border-top spacing** | 32px | space-5 |

### Email Headers & Banners

| Principle | Application |
|-----------|-------------|
| Depth Over Surface | Imply article depth through visual layering |
| Clarity Over Cleverness | Readable at small sizes, clear hierarchy |
| Restraint Over Abundance | Image + text only, no complex compositions |
| Grounded Over Floating | Consistent placement, accent bar signature |
| Timeless Over Trendy | Same style across all emails |

### Presentations

| Principle | Application |
|-----------|-------------|
| Depth Over Surface | Progressive disclosure, build complexity |
| Clarity Over Cleverness | One concept per slide, full-sentence titles |
| Restraint Over Abundance | Maximum 3 bullets, generous whitespace |
| Grounded Over Floating | Dark theme default, bottom third for content |
| Timeless Over Trendy | No animations except fade, no transitions |

## By Design Domain

### Visual Hierarchy

- **Primary**: Headlines, key metrics, CTAs (largest, highest contrast)
- **Secondary**: Subheads, supporting data, navigation (medium size, medium contrast)
- **Tertiary**: Captions, metadata, fine print (smallest, lowest contrast)
- **Ratio**: 2:1 minimum between hierarchy levels

### Composition

- **Layout**: Asymmetrical preferred (dynamic, modern)
- **Balance**: Bottom-weighted (grounded, stable)
- **Whitespace**: 40-60% of composition
- **Focal point**: One per composition, clear entry point

### Space and Form

- **Forms**: Geometric, sharp corners (precision, engineering)
- **Shapes**: Rectangles and triangles (structure, direction)
- **Space**: Generous, intentional (premium, confidence)
- **Edges**: Clean, not blurred (clarity)

## Logo Usage by Context

### General Principles

1. **Non-intrusive placement** - Logo should not compete with primary content
2. **Grounded, not floating** - Position near edges, anchored to a corner
3. **Consistent placement** - Use same position across a content series

### Recommended Positions by Format

| Format | Recommended Position | Size | Notes |
|--------|---------------------|------|-------|
| **LinkedIn Article Cover (16:9)** | Bottom-right | 64-80px | Clear of text safe zone |
| **LinkedIn Post Image (1:1)** | Bottom-right | 48-64px | Below main content |
| **Substack Header (1200×600)** | Bottom-right or Top-left with lockup | 48-64px | Match publication style |
| **Email Banner** | Top-left with lockup | 32-48px | Header position |
| **Presentation Slides** | Bottom-right or Bottom-left | 32-48px | Consistent across deck |

### Position Specifications

**Bottom-right (default for covers):**
```css
position: absolute;
bottom: 5-6% of height;  /* ~60px on 1080p */
right: 4-5% of width;    /* ~80px on 1920w */
```

**Top-left (with lockup for headers):**
```css
position: absolute;
top: 6-8% of height;
left: 4-5% of width;
```

### Background Usage Matrix

Select the correct logo file based on your background to ensure maximum visibility and WCAG compliance.

| Background Type | Recommended Logo File | Why? |
|-----------------|----------------------|------|
| **Dark Charcoal** (`#1f2937`) | `exports/btl-lockup-dark.svg` | AAA compliant text pops against dark |
| **Light / White** (`#ffffff`) | `exports/btl-lockup-light.svg` | Standard usage, high contrast |
| **Jade Gradient** | `exports/btl-frame-rounded-light.svg` | Framed to prevent color clashing |
| **Photo / Complex** | `exports/btl-frame-rounded-dark.svg` | White container ensures legibility |
| **Social Avatar** | `exports/btl-frame-jade-fill.svg` | High visibility at small sizes |

### Framed vs. Unframed

- **Unframed (Lockups/Marks):** Use when you control the background color and can guarantee contrast
- **Framed:** Use when the background is variable, complex (photos), or low contrast (gradients)

## Symbol Usage in Visuals

For infographics and social graphics, use the BTL iceberg symbols to reinforce brand identity.

**Symbol variants:**
- **Compact** (64×64) - Footer attribution, section dividers
- **Pattern** (260×400) - Hero visuals with 20/80 labels
- **Pattern Clean** (200×400) - Hero visuals without labels
- **Schematic** (200×200) - Background watermarks at 8-15% opacity

**Six usage approaches:**
1. Footer attribution (compact, 32-48px)
2. Hero visual element (pattern, primary visual)
3. Background watermark (schematic, 8-15% opacity)
4. Section divider (compact, 20-28px with dashed lines)
5. Card corner accent (pattern-clean, 10-20% opacity)
6. Labeled diagram (pattern-clean with custom labels)

**Full documentation:** `../symbol-usage.md`

**Demo file:** `../branding/logos/01_Vector_Master/symbols/symbol-usage-demo.html`

## Photography & Illustrations (Blueprint Mode)

To maintain engineering credibility, all non-vector assets must follow these rules:

1. **Desaturate**: All photos must be Grayscale
2. **Tinting**: Apply a Charcoal (`#1f2937`) overlay at 80-90% opacity
3. **Accent**: Use Jade Green (`#00a86b`) only for artificial overlays (lines, UI elements, or duotone effects)
4. **Style**: Illustrations must look like patent filings or technical schematics—no "bubbly" tech art

### Exception: Author Profile Pictures

Author/attribution photos are exempt from Blueprint Mode to maintain human recognition and personal connection.

**Profile Picture Spec:**

| Property | Value | Rationale |
|----------|-------|-----------|
| **Color** | Natural (full color) | Human recognition |
| **Shape** | Circle | Platform convention |
| **Border** | 2px gradient (jade-to-charcoal) | Brand accent per design-system.md |
| **Size** | 48-64px | Readable but not dominant |

**CSS Pattern:**
```css
/* Uses "Jade to charcoal (for avatars)" gradient from design-system.md */
.profile-photo-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(135deg, #065f46 0%, #1f2937 100%);
}

.profile-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
```

**Usage:**
- Footer attribution in infographics
- Author bylines in articles
- Speaker cards in presentations

## Pragmatic Principles

Real-world constraints will challenge ideal design. When technical issues arise, the goal is to find solutions that **support** principles, not violate them.

### The Approach

```
Problem arises
    ↓
Evaluate against Principles
    ↓
Find solution that ALIGNS with principles
    ↓
Document reasoning
```

**Do:**
- ✓ Acknowledge the problem
- ✓ Find solutions that support (not violate) principles
- ✓ Document the reasoning for future reference

**Don't:**
- ✗ Ignore the problem
- ✗ Fix by violating principles
- ✗ Change principles to fit the solution

### Example: Gradient Banding → Noise Texture

**Problem:** Dark gradient backgrounds create visible banding artifacts when exported to PNG.

**Naive solutions (rejected):**
- Ignore it (poor quality)
- Use solid color only (loses depth)
- Add heavy noise (becomes decoration)

**Pragmatic solution:** Subtle noise texture (< 10% opacity)

**Why it aligns with principles:**

| Principle | How Noise Supports It |
|-----------|----------------------|
| **P1. Depth Over Surface** | Texture suggests materiality, physical depth |
| **P4. Grounded Over Floating** | Grain adds weight, like concrete or paper |
| **P3. Restraint Over Abundance** | Functional (solves banding), not decorative |

**Real-world references:**
- Film grain in photography adds warmth and humanity
- Premium brands (Apple, Stripe, Linear) use subtle grain
- Architectural materials (concrete, paper) have natural texture
- BTL inspiration: "Engineering documentation, architectural blueprints" - these have texture

### Texture as Material

Subtle noise/grain is acceptable when it:

1. **Solves a technical problem** (gradient banding, color compression)
2. **Adds material quality** (paper, concrete, analog aesthetic)
3. **Supports P1 (Depth) and P4 (Grounded)**
4. **Remains subtle** (< 10% opacity, not visually dominant)

### Specification

```css
/* SVG noise filter for gradient backgrounds */
<filter id="noise">
  <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3"/>
  <feColorMatrix type="saturate" values="0"/>
  <feComponentTransfer>
    <feFuncA type="linear" slope="0.06"/> /* 6% opacity */
  </feComponentTransfer>
  <feBlend in="SourceGraphic" mode="overlay"/>
</filter>
```

**Parameters:**
- `baseFrequency`: 0.6-0.8 (grain size)
- `slope`: 0.04-0.08 (opacity, must be < 0.10)
- `mode`: overlay (blends naturally with gradient)
