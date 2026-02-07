---
title: BTL Symbol Usage
type: reference
status: active
created: 2026-01-14
updated: 2026-01-14
version: 1.1
---

# Symbol Usage

How to use BTL iceberg symbols in infographics, covers, and visual content.

## Symbol Files

| File | Size | Purpose |
|------|------|---------|
| `btl-symbol-compact.svg` | 64×64 | Footer attribution, small icons |
| `btl-symbol-pattern.svg` | 260×400 | Covers with 20/80 dimension labels |
| `btl-symbol-pattern-clean.svg` | 200×400 | Covers without labels |
| `btl-symbol-schematic.svg` | 200×200 | Background watermarks (stroke-only) |

**Location:** `branding/logos/01_Vector_Master/symbols/`

**Note:** All symbols are optimized for **dark backgrounds**. For light backgrounds, use the primary logo files from `branding/logos/` with appropriate color variants per logo.md.

## Usage Approaches

### 1. Footer Attribution

**Symbol:** `btl-symbol-compact.svg` at 32-48px

**When:** Bottom of every infographic for consistent branding.

**Implementation:**
```html
<div class="footer-attribution">
  <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
    <g transform="translate(0, -1.33)">
      <path d="M32 8 L42.67 18.67 H21.33 Z" fill="#10b981"/>
      <path d="M10.67 24 L32 58.67 L53.33 24 Z" fill="#00a86b"/>
    </g>
  </svg>
  <span>@hoangleitvn · Builds That Last</span>
</div>
```

**Positioning:**
- Bottom-left or bottom-right
- 56-64px from edges (space-6 to space-8)
- Paired with handle and brand name

### 2. Hero Visual Element

**Symbol:** `btl-symbol-pattern-clean.svg` at 100-150px width

**When:** Primary visual alongside headline. Reinforces 20/80 foundation message.

**Implementation:**
```html
<div class="hero-layout">
  <svg class="hero-symbol" width="100" height="200" viewBox="0 0 200 400">
    <!-- btl-symbol-pattern-clean.svg content -->
  </svg>
  <div class="hero-content">
    <h1>Speed vs <span class="jade">Velocity</span></h1>
    <p>What they post vs. what compounds</p>
  </div>
</div>
```

**Best for:**
- Cover images where iceberg metaphor is central
- Educational content about foundation-first approach
- Comparison graphics (Speed vs Velocity, Hype vs Reality)

### 3. Background Watermark

**Symbol:** `btl-symbol-schematic.svg` at 8-15% opacity

**When:** Subtle texture behind quotes or content sections. Adds depth without competing.

**Implementation:**
```css
.watermark {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%) rotate(-12deg);
  opacity: 0.10;
}
```

**Guidelines:**
- Opacity: 8-15% (never higher)
- Position: off-center, partially cropped
- Rotation: -10° to -15° allowed for schematic only (decorative use)
- Note: Primary logo marks should never be rotated per logo.md
- Never compete with foreground content

### 4. Section Divider

**Symbol:** `btl-symbol-compact.svg` at 20-28px

**When:** Visual anchor between sections. Connects concepts with brand element.

**Implementation:**
```html
<div class="divider">
  <div class="divider-line"></div>
  <svg width="24" height="24" viewBox="0 0 64 64">
    <!-- compact symbol -->
  </svg>
  <div class="divider-line"></div>
</div>
```

**Divider line style:**
```css
.divider-line {
  width: 60px;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    #00a86b 0px, #00a86b 4px,
    transparent 4px, transparent 7px
  );
}
```

### 5. Card Corner Accent

**Symbol:** `btl-symbol-pattern-clean.svg` at 10-20% opacity

**When:** Decorative element in card corners. Subtle branding without distraction.

**Implementation:**
```css
.corner-symbol {
  position: absolute;
  top: -12px;
  right: -12px;
  opacity: 0.15;
  width: 80px;
  height: 160px;
}
```

**Guidelines:**
- Position: top-right or bottom-right corner
- Overflow: partially cropped by card bounds
- Opacity: 10-20%
- Never obscure card content

### 6. Labeled Diagram

**Symbol:** `btl-symbol-pattern-clean.svg` with custom external labels

**When:** Full educational diagram explaining the iceberg metaphor.

**Implementation:**
```html
<div class="diagram-layout">
  <div class="labels">
    <div class="label tip">
      <span class="percent">20%</span>
      <span class="desc">Visible results</span>
    </div>
    <div class="label body">
      <span class="percent">80%</span>
      <span class="desc">Foundation work</span>
    </div>
  </div>
  <svg class="iceberg">
    <!-- btl-symbol-pattern-clean.svg -->
  </svg>
</div>
```

**When to use built-in labels (pattern.svg):**
- Quick, standalone usage
- When custom styling isn't needed

**When to use clean + external labels:**
- Custom label styling needed
- Labels need different positioning
- Multi-language support

## Integration Method

**Always use inline SVG for infographics.**

The symbol files are the source of truth. When building visuals:

1. Open the symbol SVG file
2. Copy the SVG code
3. Paste into HTML
4. Adjust size via `width`/`height` attributes
5. Position with CSS

**Why inline:**
- Self-contained (no broken paths on export)
- Works with all screenshot/export tools
- Allows CSS styling of individual paths

## Color Reference

On dark backgrounds (`#111827`, `#1f2937`):

| Element | Color | Token |
|---------|-------|-------|
| Tip | `#10b981` | brand-400 |
| Body | `#00a86b` | brand-500 |
| Waterline | `#f9fafb` | base-50 (white) |
| Glow line | `#10b981` @ 40% | brand-400 |
| Schematic strokes | `#f9fafb` | base-50 (white) |

## Size Guidelines

| Context | Symbol | Size |
|---------|--------|------|
| Footer attribution | Compact | 32-48px |
| Section divider | Compact | 20-28px |
| Hero visual | Pattern/Clean | 100-150px width |
| Card accent | Pattern/Clean | 60-100px width |
| Background watermark | Schematic | 150-250px |

**Minimum sizes:**
- Compact: 16px (below this, details lost)
- Pattern: 60px width (below this, waterline unreadable)
- Schematic: 100px (below this, strokes merge)

## Demo File

Interactive preview of all approaches:
`branding/logos/01_Vector_Master/symbols/symbol-usage-demo.html`

## Design Rationale

**Why semi-transparent fills in pattern symbols?**

The pattern symbols use `rgba()` fills (e.g., `rgba(0, 168, 107, 0.06)`) rather than solid colors. This creates a "blueprint/schematic" aesthetic aligned with BTL's design philosophy:

- **P1. Depth Over Surface** — Transparency suggests layers beneath
- **Engineering documentation** feel — Like technical drawings with ghosted elements
- **Non-competing** — Allows symbols to integrate without dominating

The compact symbol uses solid fills since it's used at small sizes where transparency would reduce clarity.

**Dark background optimization:**

All symbols follow logo.md dark background spec:
- Tip: `#10b981` (brand-400)
- Body: `#00a86b` (brand-500)
- Waterline: `#f9fafb` (white)

This aligns with BTL's "dark mode native" principle from design-philosophy.

## Related Documents

- `logo.md` - Primary logo specifications
- `design-philosophy/guidelines.md` - Context-specific design guidelines
- `design-system.md` - Colors, typography, spacing tokens
