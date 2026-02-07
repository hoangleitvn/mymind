---
title: BTL Symbols Reference
type: reference
status: active
created: 2026-01-14
---

# BTL Symbols

Reusable brand symbols for consistent visual identity across all assets.

**Validated against:** `logo.md`, `design-system.md`, `design-philosophy/principles.md`
**Full usage guidelines:** `../../symbol-usage.md`

## Available Symbols

| File | Size | Use Case |
|------|------|----------|
| `btl-symbol-compact.svg` | 64×64 | Footer, icons, favicon |
| `btl-symbol-pattern.svg` | 260×400 | Covers, infographics (with 20/80 labels) |
| `btl-symbol-pattern-clean.svg` | 200×400 | Covers, infographics (no labels) |
| `btl-symbol-schematic.svg` | 200×200 | Background decoration (10-20% opacity) |

---

## 1. Compact (`btl-symbol-compact.svg`)

**Proportions:** Matched exactly to `btl-submark-standard.svg` (scaled from 48px to 64px)

**Best for:** Footer signature, small icons, favicon

**Colors (Dark BG):**
- Tip: `#10b981` (brand-400)
- Body: `#00a86b` (brand-500)

```html
<!-- Inline usage -->
<svg viewBox="0 0 64 64" fill="none">
  <g transform="translate(0, -1.33)">
    <path d="M32 8 L42.67 18.67 H21.33 Z" fill="#10b981"/>
    <path d="M10.67 24 L32 58.67 L53.33 24 Z" fill="#00a86b"/>
  </g>
</svg>
```

---

## 2. Pattern (`btl-symbol-pattern.svg`)

**With 20/80 dimension lines and labels** - moved further right for better spacing

**Best for:** Cover images, infographics where labels add context

**Elements:**
- Tip with stroke
- Waterline (white dashed + jade glow)
- Body with internal structure lines
- Dimension lines (right side, offset from shape)
- 20% / 80% labels

---

## 3. Pattern Clean (`btl-symbol-pattern-clean.svg`)

**Same as pattern but without dimension lines or labels**

**Best for:** Covers where labels aren't needed, cleaner aesthetic

---

## 4. Schematic (`btl-symbol-schematic.svg`)

**Blueprint/technical drawing style** - stroke only, no fills

**Best for:** Faded backgrounds (10-20% opacity), hero sections

**Color:** White (`#f9fafb`) strokes for dark backgrounds

```css
.schematic-bg {
  position: absolute;
  opacity: 0.15;
  transform: rotate(-15deg);
}
```

---

## Color Reference (per logo.md)

### Dark Background

| Element | Color | Token |
|---------|-------|-------|
| Tip | `#10b981` | brand-400 |
| Body | `#00a86b` | brand-500 |
| Waterline | `#f9fafb` | base-50 (white) |
| Glow line | `#10b981` @ 40% | brand-400 |

---

## File Locations

```
symbols/
├── btl-symbol-compact.svg        # 64×64, solid, matched to submark
├── btl-symbol-pattern.svg        # 260×400, with labels (20px padding)
├── btl-symbol-pattern-clean.svg  # 200×400, no labels
├── btl-symbol-schematic.svg      # 200×200, stroke-only
└── README.md
```
