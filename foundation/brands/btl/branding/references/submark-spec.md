---
title: BTL Submark Specification
type: reference
status: active
author: hoangle
created: 2026-01-13
updated: 2026-01-13
---

# BTL Submark Specification

Defines the sizing, padding, and ratio specifications for the BTL submark icon.

## Research Basis

Derived from industry best practices:

| Source | Specification | Value |
|--------|---------------|-------|
| [Material Design](https://m1.material.io/style/icons.html) | Square keyline | 79% of grid |
| [Material Design](https://m1.material.io/style/icons.html) | Vertical rectangle | 92%h × 67%w |
| [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/app-icons) | Safe zone | ~66-80% |
| [Google Play](https://theapplaunchpad.com/blog/google-app-icon-guidelines) | Corner radius | 20% |
| Industry standard | Frame padding | None (full bleed) |

## Base Icon Geometry

From branding guidelines (`btl-branding-guidelines.svg`):

```
Canvas:        48×48px viewBox
Icon bounds:   32×38px (x:8-40, y:6-44)
Aspect ratio:  1:1.19 (width:height)
```

## Submark Spec

**Core ratios (relative to square container):**

| Property | Value | Calculation |
|----------|-------|-------------|
| Icon Width | 67% | 32/48 |
| Icon Height | 80% | 38/48 (with -1px centering) |
| H-Padding | 16.5% | (48-32)/2/48 |
| V-Padding | 10% | (48-38)/2/48 |
| Border Radius | 17% | 8/48 |

**Key decisions:**
- **No padding around frame** - full bleed (industry standard)
- **No stroke on frame** - clean, modern look
- **Icon centered** - shift y by -1px to visually center

## Container Structure

```
┌─────────────────────────────┐
│    Container (transparent)   │
│  ┌───────────────────────┐  │
│  │   Frame (with fill)    │  │ ← Full bleed, no gap
│  │  ┌─────────────────┐  │  │
│  │  │      Icon       │  │  │ ← 67%w × 80%h, centered
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘

Container = Frame = 48×48 (no padding between)
```

## Size Reference Table

| Container | Scale | Icon Size | Border Radius |
|-----------|-------|-----------|---------------|
| 1024×1024 | 21.3x | 682×809 | 174px |
| 512×512 | 10.7x | 341×405 | 87px |
| 192×192 | 4.0x | 128×152 | 33px |
| 180×180 | 3.75x | 120×143 | 31px |
| 152×152 | 3.17x | 101×120 | 26px |
| 120×120 | 2.5x | 80×95 | 20px |
| 72×72 | 1.5x | 48×57 | 12px |
| 48×48 | 1.0x | 32×38 | 8px |
| 32×32 | 0.67x | 21×25 | 5px |

## Variants

### By Frame Shape

| Variant | Frame | Use Case |
|---------|-------|----------|
| `standard` | None (transparent) | Flexible placement |
| `rounded` | Rounded rect (rx=17%) | App icons, avatars |
| `circle` | Circle | Profile pictures |

### By Color

| Variant | Frame Fill | Icon Style | Use Case |
|---------|------------|------------|----------|
| `color` | Per frame variant | Gradients | Primary use |
| `black` | Per frame variant | Solid #000000 | Light backgrounds, print |
| `white` | Per frame variant | Solid #ffffff | Dark backgrounds |
| `outline` | None | Stroke only | Minimal, watermarks |

## File Matrix

```
submark/
  btl-submark-standard.svg      # No frame, color icon
  btl-submark-black.svg         # No frame, black icon
  btl-submark-white.svg         # No frame, white icon
  btl-submark-outline.svg       # No frame, outline icon
  btl-submark-rounded.svg       # Rounded frame (dark), color icon
  btl-submark-rounded-light.svg # Rounded frame (white), color icon
  btl-submark-circle.svg        # Circle frame (dark), color icon
```

## SVG Template

**48×48 Base (standard - no frame):**
```svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, -1)">
    <!-- Icon paths -->
  </g>
</svg>
```

**48×48 Rounded (with frame):**
```svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="8" fill="#1f2937"/>
  <g transform="translate(0, -1)">
    <!-- Icon paths -->
  </g>
</svg>
```

## Icon Paths

**Color (with gradients):**
```svg
<defs>
  <linearGradient id="tip" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#10b981"/>
    <stop offset="100%" stop-color="#00a86b"/>
  </linearGradient>
  <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#00a86b"/>
    <stop offset="40%" stop-color="#065f46"/>
    <stop offset="100%" stop-color="#022c22"/>
  </linearGradient>
</defs>
<path d="M24 6L32 14H16L24 6Z" fill="url(#tip)"/>
<line x1="8" y1="16" x2="40" y2="16" stroke="#1f2937" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="8" y1="17" x2="40" y2="17" stroke="#00a86b" stroke-width="1" stroke-opacity="0.3"/>
<path d="M8 18L24 44L40 18H8Z" fill="url(#body)"/>
```

**Mono (flat):**
```svg
<path d="M24 6L32 14H16L24 6Z" fill="currentColor"/>
<line x1="8" y1="16" x2="40" y2="16" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="8" y1="17" x2="40" y2="17" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/>
<path d="M8 18L24 44L40 18H8Z" fill="currentColor"/>
```

## History

| Date | Change |
|------|--------|
| 2026-01-13 | Initial spec based on Material Design & Apple HIG research |
| 2026-01-13 | Removed frame padding (full bleed per industry standard) |
| 2026-01-13 | Removed frame stroke (cleaner look) |
