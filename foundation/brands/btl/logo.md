---
title: BTL Logo & Brand Mark
type: reference
status: active
created: 2025-12-26
updated: 2026-01-13
version: 1.2
---

# BTL Logo & Brand Mark

This document defines the Builds That Last logo system and usage guidelines.

## Brand Mark: The Iceberg

The BTL logo is **The Iceberg Mark** - a geometric representation of the core BTL philosophy: 20% visible, 80% foundation.

### Why This Mark

| Element | Meaning |
|---------|---------|
| **Upper triangle (20%)** | What's visible - demos, shipping, speed |
| **Waterline (dashed)** | The boundary between surface and depth |
| **Lower triangle (80%)** | The foundation - maintenance, clarity, what lasts |

The mark directly communicates BTL's core message: *there's more beneath the surface*.

### Mark Proportions

The iceberg proportions reflect the 20/80 philosophy:

| Element | Height Ratio | Visual Weight |
|---------|--------------|---------------|
| **Top triangle** | 20% | Small, visible tip |
| **Bottom triangle** | 80% | Large, substantial foundation |

```
        /\        ← 20% (8 units)
       /  \
      /____\
- - - - - - - -   ← Waterline
     /      \
    /        \    ← 80% (28 units)
   /          \
  /____________\
```

### Waterline Specification

**Primary Line:**

| Property | Value |
|----------|-------|
| **Style** | Dashed line |
| **Dash pattern** | `4 3` (scales with logo) |
| **Stroke width** | 2px at 48px size |
| **Width** | Matches bottom triangle width (same x-coordinates) |
| **Color (light bg)** | Charcoal (#1f2937) |
| **Color (dark bg)** | White (#f9fafb) |

**Glow Line (optional accent):**

| Property | Value |
|----------|-------|
| **Style** | Solid (no dash) |
| **Stroke width** | 1px |
| **Position** | 1px below primary line |
| **Color (light bg)** | Jade (#00a86b) at 30% opacity |
| **Color (dark bg)** | Light Jade (#10b981) at 40% opacity |

## Logo Variants

### Primary Marks

| File | Use Case | Background |
|------|----------|------------|
| `btl-iceberg-mark.svg` | Primary mark | Light backgrounds |
| `btl-iceberg-mark-dark.svg` | Dark variant | Dark backgrounds |
| `btl-iceberg-mark-simple.svg` | Simplified (no waterline) | Small sizes (16-24px) |

### Monochrome Variants

| File | Use Case |
|------|----------|
| `btl-iceberg-mark-mono-charcoal.svg` | Single-color on light |
| `btl-iceberg-mark-mono-white.svg` | Single-color on dark |

### Full Lockups

| File | Content | Use Case |
|------|---------|----------|
| `btl-logo-lockup.svg` | Mark + "Builds That Last" | Headers, full branding |
| `btl-logo-lockup-dark.svg` | Dark variant | Dark UI, email headers |

## Color Usage

### Primary (Light Background)

```
Upper triangle: #00a86b (Jade Green / brand-500)
Waterline:      #1f2937 (Charcoal / base-800)
Lower triangle: #065f46 (Deep Jade / brand-800)
```

### Dark Background

```
Upper triangle: #10b981 (Light Jade / brand-400)
Waterline:      #f9fafb (White / base-50)
Lower triangle: #00a86b (Jade Green / brand-500)
```

### Monochrome

Use when color printing is not available or for watermarks:
- Full opacity for upper triangle
- 60% opacity for lower triangle
- Full opacity for waterline

## Wordmark Typography

The "Builds That Last" wordmark uses specific typography when paired with the mark.

| Property | Value |
|----------|-------|
| **Font** | IBM Plex Sans |
| **Weight** | 700 (Bold) |
| **Letter spacing** | +0.02em |
| **Color scheme** | "Builds" in Jade (#00a86b), "That Last" in Charcoal (#1f2937) |
| **Dark variant** | "Builds" in Light Jade (#34d399), "That Last" in White (#f9fafb) |

**Sizing relative to mark:**

| Lockup Type | Text Size | Ratio to Mark Height |
|-------------|-----------|---------------------|
| Horizontal | 36px (at 48px mark) | 0.75× |
| Stacked | 28px (at 48px mark) | 0.58× |
| Minimum | 14px | - |

## Size Guidelines

| Size | Variant | Notes |
|------|---------|-------|
| 16-24px | Simple (no waterline) | Favicon, small UI icons |
| 32-48px | Full mark | Profile pictures, small displays |
| 64px+ | Full mark | Headers, banners, print |

### Minimum Sizes

- **Mark only:** 16px minimum
- **Full lockup:** 120px width minimum

## Clear Space

Maintain clear space around the mark of **16.5% of mark width per side** (~8px at 48px base).

**Rationale:** Matches internal icon H-padding per [submark spec](references/submark-spec.md). Industry standard: 10-20% (Material Design: 21%, Apple HIG: 20%).

```
+------------------+
|                  |
|   [clearspace]   |
|   +----------+   |
|   |   mark   |   |
|   +----------+   |
|   [clearspace]   |
|                  |
+------------------+
```

## Usage Rules

### Do

- Use approved color variants only
- Maintain clear space
- Scale proportionally
- Use simplified version at small sizes
- Pair with "Builds That Last" wordmark when space allows
- **Always use existing logo files** from `assets/logos/` - never recreate inline

### Don't

- Stretch or distort the mark
- Change colors outside approved palette
- Add effects (shadows, gradients, outlines)
- Place on busy or low-contrast backgrounds
- Rotate the mark
- Remove the waterline at large sizes
- Recreate the logo with inline SVG or CSS - use the source files

## File Locations

All production-ready assets are located in: `foundation/brands/btl/assets/logos/exports/`

| File | Type | Use Case |
|------|------|----------|
| `btl-lockup-light.svg` | Full Lockup | Light backgrounds, Documents |
| `btl-lockup-dark.svg` | Full Lockup | **Dark backgrounds**, Presentations |
| `btl-mark-light.svg` | Mark Only | Light backgrounds |
| `btl-mark-dark.svg` | Mark Only | Dark backgrounds |
| `btl-frame-rounded-light.svg` | Framed Icon | Social profiles, App icons (Dark on Light) |
| `btl-frame-rounded-dark.svg` | Framed Icon | **Overlays**, Photos (Light on Dark) |
| `btl-frame-jade-fill.svg` | Framed Icon | Brand moments, Favicons |

## Related Documents

- `design-system.md` - Full BTL design system (tokens)
- `design-philosophy/principles.md` - Core design principles
- `design-philosophy/guidelines.md` - Context-specific guidelines (includes logo positioning)
- `design-philosophy/rules.md` - Hard limits and requirements

## History

| Date | Change |
|------|--------|
| 2026-01-13 | v1.2 - Added wordmark typography (IBM Plex Sans 700, +0.02em); added waterline glow line spec; moved logo positioning to design-philosophy/guidelines.md |
| 2025-12-26 | Initial logo concepts created |
| 2026-01-10 | Redesigned with Iceberg Mark based on design philosophy audit |
| 2026-01-10 | Corrected proportions to true 20/80 ratio; added font specs |
| 2026-01-10 | Created comprehensive brand guidelines SVG with safe zones and variant specs |
| 2026-01-11 | Added logo positioning guidelines for social graphics; added rule to use existing logo files |
