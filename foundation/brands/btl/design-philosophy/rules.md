---
title: BTL Design Rules
type: architecture
status: active
created: 2026-01-13
updated: 2026-01-13
version: 1.0
---

# Design Rules

Specific, testable requirements. These are hard limits, not suggestions.

## Spacing Rules

### Base Unit

All spacing uses an **8px base unit**.

| Token | Value | Use |
|-------|-------|-----|
| `space-1` | 4px | Minimal gaps, icon padding |
| `space-2` | 8px | Related element gaps |
| `space-3` | 16px | Section padding, card padding |
| `space-4` | 24px | Between sections |
| `space-5` | 32px | Major section breaks |
| `space-6` | 48px | Page sections |
| `space-8` | 64px | Hero margins |
| `space-12` | 96px | Page padding |

### Whitespace Requirements

| Context | Minimum Whitespace |
|---------|-------------------|
| Social graphics | 40% of composition |
| Infographics | 30% of composition |
| Articles | 50% of viewport width as margins |
| Presentations | 50% of slide area |

## Typography Rules

### Font Constraints

| Rule | Specification |
|------|---------------|
| **Font limit** | 2 families maximum + 1 monospace |
| **Weight limit** | 2 weights per component |
| **No decorative fonts** | IBM Plex Sans, Public Sans, JetBrains Mono only |

### Size Requirements (WCAG Compliant)

| Rule | Specification |
|------|---------------|
| **Body minimum** | 16px (AA), 18px preferred (AAA) |
| **Line length** | 45-75 characters (`max-width: 75ch`) |
| **Line height (body)** | 1.5× minimum (WCAG SC 1.4.12) |
| **Line height (headings)** | 1.1-1.3× |
| **Paragraph spacing** | 2× font size minimum |
| **Letter spacing** | Not less than 0.12× font size |
| **Word spacing** | Not less than 0.16× font size |
| **200% zoom** | Text must remain functional |

### Context-Specific Sizes

| Context | Headline | Body | Caption/Label |
|---------|----------|------|---------------|
| Social graphics | 48-64px | 25px | 18px |
| Article covers | 40-48px | 20px | 18px |
| LinkedIn posts | 32-40px | 20px | 18px |
| Email headers | 32px | 18-20px | 16px (AA) |
| Presentations | 48-64px | 25-32px | 18-20px |

## Color Rules

### Brand Color Discipline

| Rule | Specification |
|------|---------------|
| **Brand palette** | Jade Green (#00a86b) + Charcoal (#1f2937) only |
| **Accent usage** | Green is accent, not dominant |
| **Text on white** | Use #007a4c (jade-700), never #00a86b |
| **Forbidden in brand** | Purple, pink, blue, cyan in marketing/identity |

### Contrast Requirements

| Context | Minimum | Target |
|---------|---------|--------|
| Body text | 4.5:1 (AA) | 7:1 (AAA) |
| Large text (≥18px) | 3:1 (AA) | 4.5:1 (AAA) |
| UI components | 3:1 (AA) | — |

### Large Text Definition

| Weight | Threshold |
|--------|-----------|
| Regular (400-600) | ≥18pt (24px) |
| Bold (700) | ≥14pt (18.66px) |

**BTL Policy:** Target AAA where possible. All text ≥18px ensures large text classification.

## Component Rules

| Component | Rule |
|-----------|------|
| **Accent bar** | 4-5px height, #00a86b, top edge |
| **Border radius** | 4px (small), 8px (medium), 16px (large) |
| **Shadows** | Subtle only: `0 4px 12px rgba(0,0,0,0.06)` |
| **Icon style** | Geometric, line or filled, not detailed |
| **Pill shapes** | Forbidden (lack engineering precision) |

### Waterline Specification

The waterline is a structural divider between "Surface" (tip) and "Foundation" (body).

**Primary Line:**

| Property | Value |
|----------|-------|
| Stroke width | 2px |
| Dash pattern | `4 3` (4px dash, 3px gap) |
| Color (light bg) | `#1f2937` (Charcoal) |
| Color (dark bg) | `#f9fafb` (White) |

**Glow Line (accent below primary):**

| Property | Value |
|----------|-------|
| Stroke width | 1px (solid, no dash) |
| Position | 1px below primary line |
| Color (light bg) | `#00a86b` at 30% opacity |
| Color (dark bg) | `#10b981` at 40% opacity |

**Usage Rules:**
- Must stretch the full width of the mark/text container
- Separates tip from body in the logo mark
- Scales proportionally with mark size
- Omit glow line below 24px for simplicity

## Logo Rules

| Rule | Specification |
|------|---------------|
| **Minimum size (mark)** | 16px |
| **Minimum size (lockup)** | 120px width |
| **Clear space** | 16.5% of mark width per side (~8px at 48px base) |
| **Small size variant** | Use simplified mark (no waterline) below 24px |
| **Never** | Rotate, stretch, add effects, change colors |

**Clear space rationale:** Matches internal icon padding (16.5% H-padding per submark spec). Industry standard is 10-20% (Material Design: 21%, Apple HIG: 20%).

## Hierarchy Rules

| Rule | Specification |
|------|---------------|
| **Size contrast** | 2:1 minimum between levels |
| **Focal points** | One per composition |
| **Entry point** | Always clearly defined |
| **Squint test** | Must pass (hierarchy visible when blurred) |

## Accessibility Rules

| Rule | Specification |
|------|---------------|
| **Text contrast** | 4.5:1 minimum (body), 3:1 (large text) |
| **Color alone** | Never rely on color alone to convey meaning |
| **Alt text** | Required for all images |
| **Link text** | Descriptive, not "click here" |

## Asset Checklist

Before exporting, every asset must pass:

1. **The Crop Test**: Is all text within the center 1:1 safe zone?
2. **The Ratio Test**: Is the Headline exactly 2x the size of the sub-headline?
3. **The Blueprint Test**: Does it look like an engineering document or a marketing flyer?

## WCAG Conformance Targets

| Level | Standard | BTL Target |
|-------|----------|------------|
| **A** | Minimum accessibility | Must meet |
| **AA** | Industry standard | Must meet |
| **AAA** | Highest accessibility | Target where possible |
