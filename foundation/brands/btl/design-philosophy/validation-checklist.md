---
title: BTL Design Validation Checklist
type: reference
status: active
created: 2026-01-15
version: 1.0
---

# Design Validation Checklist

Every visual asset must pass these checks before completion.

## Quick Reference

| Check | Minimum | Target |
|-------|---------|--------|
| Text contrast | 4.5:1 (AA) | 7:1 (AAA) |
| Large text contrast | 3:1 (AA) | 4.5:1 (AAA) |
| Minimum font size | 16px web, 18px graphics | - |
| Margins (1200px canvas) | 64px | 64-80px |
| Grid alignment | 8px | 8px |

## 1. Design System Compliance

### Typography

- [ ] **Fonts correct**: IBM Plex Sans (headings), Public Sans (body), JetBrains Mono (code/data)
- [ ] **No forbidden fonts**: Poppins, Inter, Open Sans, Geist
- [ ] **Heading hierarchy**: Only IBM Plex Sans for h1-h4
- [ ] **Weight limit**: Max 2 weights per component
- [ ] **Minimum size**: 18px for social graphics, 16px for web

### Colors

- [ ] **Brand colors only**: Jade scale (#00a86b family) + Base scale (#1f2937 family)
- [ ] **No forbidden colors**: No purple, pink, blue, cyan, amber, red
- [ ] **Green as accent**: Charcoal dominates, jade accents
- [ ] **Text on jade**: Always white (#ffffff)
- [ ] **Links on light bg**: Use #007a4c (not #00a86b)

### Spacing

- [ ] **8px grid**: All spacing divisible by 8
- [ ] **Margins**: 64px for 1200px canvas (5.3%)
- [ ] **Consistent gaps**: Same spacing for same relationships

### Components

- [ ] **Accent bar present**: 4-6px jade bar at top
- [ ] **Corner radius**: 4-8px (never pill/fully rounded)
- [ ] **Waterline if applicable**: Dashed line separator

## 2. WCAG Accessibility

### Contrast Ratios

| Text Type | Size | AA Minimum | AAA Target |
|-----------|------|------------|------------|
| Body text | <24px | 4.5:1 | 7:1 |
| Large text | ≥24px or 19px bold | 3:1 | 4.5:1 |
| UI components | - | 3:1 | - |

**BTL Color Contrast Reference:**

| Foreground | Background | Ratio | Pass |
|------------|------------|-------|------|
| #f9fafb (base-50) | #1f2937 (base-800) | 11.7:1 | AAA |
| #f9fafb (base-50) | #111827 (base-900) | 15.1:1 | AAA |
| #d1d5db (base-300) | #1f2937 (base-800) | 7.5:1 | AAA |
| #9ca3af (base-400) | #1f2937 (base-800) | 4.9:1 | AA |
| #6b7280 (base-500) | #1f2937 (base-800) | 3.1:1 | Large only |
| #10b981 (brand-400) | #1f2937 (base-800) | 5.4:1 | AA |
| #10b981 (brand-400) | #111827 (base-900) | 6.9:1 | AA |
| #00a86b (brand-500) | #1f2937 (base-800) | 4.2:1 | Large only |
| #ffffff | #00a86b (brand-500) | 3.1:1 | Large only |
| #ffffff | #008553 (brand-600) | 4.7:1 | AA |

**Rules:**
- [ ] Body text: Use base-50 (#f9fafb) or base-300 (#d1d5db) on dark backgrounds
- [ ] Secondary text: Use base-400 (#9ca3af) minimum (4.9:1 on base-800)
- [ ] Muted text: Use base-500 (#6b7280) only for large text (≥24px)
- [ ] Jade text: Use brand-400 (#10b981) not brand-500 for better contrast
- [ ] Text on jade: Always white, prefer brand-600 background for AA compliance

### Readability

- [ ] **Line length**: 45-75 characters for body text
- [ ] **Line height**: 1.4-1.6 for body, 1.1-1.25 for headlines
- [ ] **Letter spacing**: Looser for ALL CAPS (+0.05em), tighter for display (-0.02em)

## 3. Layout Quality

### Safe Zones

For 1200x1200 canvas:
```
┌──────────────────────────────────┐
│ 64px margin all sides            │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  │   Content area: 1072x1072  │  │
│  │                            │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

- [ ] **No content in margins**: All text/graphics within safe zone
- [ ] **No overflow**: Text fits within containers
- [ ] **Bottom padding**: Extra space at bottom (P4: grounded)

### Alignment

- [ ] **Consistent left edge**: All left-aligned elements share x position
- [ ] **Vertical rhythm**: Elements align to 8px grid vertically
- [ ] **Center alignment**: If centered, truly centered (x=600 for 1200px)
- [ ] **Text anchor**: Correct text-anchor attribute for alignment

### Common Mistakes to Check

| Mistake | How to Verify |
|---------|---------------|
| Text overflow | Check longest text fits in container width |
| Misaligned columns | Verify x positions are consistent |
| Uneven spacing | Measure gaps between elements |
| Wrong text-anchor | left=start, center=middle, right=end |
| Font not loading | Verify Google Fonts link correct |
| Color not from palette | Check all fill/stroke values |

## 4. Pre-Export Checklist

Before marking complete:

1. [ ] **Squint test**: Does hierarchy work at 50% zoom?
2. [ ] **Contrast check**: Run values through contrast checker
3. [ ] **Grid overlay**: Do elements align to 8px grid?
4. [ ] **Crop test**: Is all content in safe zone?
5. [ ] **Blueprint test**: Does it look engineered, not decorative?

## Validation Command

When validating a design, check in this order:

```
1. TYPOGRAPHY
   → Correct fonts?
   → Minimum sizes?
   → Weight limits?

2. COLORS
   → Brand palette only?
   → Contrast ratios pass?
   → Jade as accent?

3. SPACING
   → 8px grid?
   → 64px margins?
   → Consistent gaps?

4. LAYOUT
   → Safe zones respected?
   → No overflow?
   → Proper alignment?

5. COMPONENTS
   → Accent bar?
   → Correct radius?
   → Waterline if needed?
```

## Related Documents

- `../design-system.md` - Token definitions
- `principles.md` - Design principles (P1-P5)
- `guidelines.md` - Context-specific guidelines
- `rules.md` - Hard limits
