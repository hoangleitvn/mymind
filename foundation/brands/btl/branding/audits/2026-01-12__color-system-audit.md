---
title: BTL Color System Audit
type: reference
status: active
created: 2026-01-12
updated: 2026-01-12
---

# BTL Color System Audit

Audit of `color-system.svg` against `design-philosophy.md` and `branding-guidelines.svg`.

## Executive Summary

| Category | Issues Found |
|----------|--------------|
| Critical conflicts | 1 |
| Inconsistencies | 3 |
| Missing specs | 2 |
| Documentation gaps | 2 |

**Primary Issue**: color-system.svg includes an Amber accent scale, but design-philosophy.md explicitly lists amber as a forbidden color.

## Critical Conflict

### Amber Color Scale vs Two-Color Discipline

**design-philosophy.md (line 276):**
```markdown
| **Forbidden colors** | Purple, pink, blue, cyan, amber, red |
```

**design-philosophy.md (line 272):**
```markdown
| **Palette limit** | 2 colors (Jade Green + Charcoal) |
```

**color-system.svg (lines 81-101):**
```
Accent Scale (Amber)
- 50:  #fef3c7
- 300: #fcd34d
- 500: #f59e0b (Brand)
- 600: #d97706
- 800: #92400e
```

**Conflict**: Amber is explicitly forbidden, yet has a full scale defined as "Accent."

### Resolution Options

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| A: Remove Amber | Delete Amber scale entirely | Strict brand consistency | Loses semantic warning color |
| B: Rename to Semantic | Keep Amber but label as "Semantic/Warning only" | Functional UI needs met | Still contradicts "forbidden" rule |
| **C: Use Jade variations** | Replace Amber warnings with Jade-based alternatives | True two-color discipline | May reduce warning visibility |

**Recommendation**: Option B with documentation update.

**Reasoning**:
- Brand colors (marketing, identity) = strict two-color
- Semantic colors (UI feedback) = functional necessity
- Update design-philosophy.md to distinguish brand vs. semantic palettes

## Inconsistencies

### 1. Primary Green Values

| Role | color-system.svg | branding-guidelines.svg | Match? |
|------|-----------------|------------------------|--------|
| Brand (500) | #00a86b | #00a86b | ✓ |
| Tip gradient start | — | #10b981 | Gap |
| Tip gradient end | — | #00a86b | Gap |
| Body gradient | — | #00a86b → #065f46 → #022c22 | Gap |
| Button fill | #008553 | — | Gap |
| Text on light | #007a4c | — | Gap |

**Issue**: color-system.svg has more granular role-based colors not reflected in logo guidelines.

### 2. Dark Mode Gradient Colors

**branding-guidelines.svg dark mode (lines 527-530):**
```svg
<path fill="#34d399"/>  <!-- Tip: flat color -->
<path fill="#10b981" fill-opacity="0.8"/>  <!-- Body: flat with opacity -->
```

**color-system.svg dark mode link color:**
```
#10b981
```

**Issue**: Dark mode uses inconsistent approaches:
- Logo: Flat colors with opacity
- UI: Solid scale colors

**Recommendation**: Define dark mode gradients to match light mode structure.

### 3. Gray Scale Naming

**color-system.svg**: Uses numeric scale (50, 200, 300, etc.) plus "Slate" (#f1f5f9)

**design-philosophy.md**: References "Charcoal" (#1f2937) as secondary color

**Issue**: "Slate" appears in color-system.svg but not in design-philosophy.md. Naming is inconsistent.

## Missing Specifications

### 1. Logo-Specific Colors Not in Color System

The branding-guidelines.svg uses colors not defined in color-system.svg:

| Color | Hex | Used For | In color-system.svg? |
|-------|-----|----------|---------------------|
| Tip gradient start | #10b981 | Logo tip top | ✓ (as 400) |
| Body gradient mid | #065f46 | Logo body middle | ✓ (as 800) |
| Body gradient end | #022c22 | Logo body bottom | ✗ Missing |
| Dark tip | #34d399 | Dark mode tip | ✗ Missing |
| Dark body | #10b981 @ 80% | Dark mode body | Partial |

### 2. Waterline Colors

**branding-guidelines.svg:**
```
Light mode waterline: #1f2937 (dashed) + #00a86b @ 30% (glow)
Dark mode waterline: #f9fafb (dashed) + #10b981 @ 40% (glow)
```

**color-system.svg**: No waterline color specifications.

## Documentation Gaps

### 1. Color Role Hierarchy

color-system.svg defines roles but doesn't establish hierarchy:

```
Current (flat list):
- Primary Button: #008553
- Links: #007a4c
- Focus Ring: #00a86b
- Ghost Button: #ecfdf5 + #007a4c

Missing (hierarchy):
- When to use 500 vs 600 vs 700?
- Which takes precedence in conflicts?
```

### 2. Gradient Specifications

color-system.svg shows flat swatches but logos use gradients. No gradient specs provided:

- Direction (vertical, horizontal, radial)
- Stop positions (0%, 40%, 100%)
- When to use gradient vs flat

## Contrast Audit

### Verified Correct (WCAG AA)

| Combination | Ratio | Target | Status |
|-------------|-------|--------|--------|
| #008553 button + white text | 4.69:1 | 4.5:1 | ✓ Pass |
| #007a4c link on white | 5.14:1 | 4.5:1 | ✓ Pass |
| #1f2937 text on #f59e0b | 8.19:1 | 4.5:1 | ✓ Pass |
| #92400e on white | 7.25:1 | 4.5:1 | ✓ Pass |
| #6b7280 on white | 4.83:1 | 4.5:1 | ✓ Pass |

### Fails or Warnings

| Combination | Ratio | Target | Status |
|-------------|-------|--------|--------|
| #f59e0b text on white | 2.15:1 | 4.5:1 | ✗ Fail |
| #9ca3af on white | 2.54:1 | 4.5:1 | ✗ Fail (noted as disabled-only) |
| #6b7280 on #1f2937 | 2.79:1 | 4.5:1 | ⚠ Below AA |

## Complete Semantic Color Palette (WCAG Compliant)

### WCAG Contrast Requirements

| Level | Normal Text (< 18px) | Large Text (≥ 18px or ≥ 14px bold) | UI Components |
|-------|---------------------|-----------------------------------|---------------|
| AA | 4.5:1 | 3:1 | 3:1 |
| AAA | 7:1 | 4.5:1 | — |

**BTL Target**: AAA where possible, AA minimum.

### Color System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    BTL COLOR SYSTEM                      │
├─────────────────────────────────────────────────────────┤
│  BRAND COLORS (Identity, Marketing, Logo)               │
│  ├── Jade Green (#00a86b) — Primary                     │
│  └── Charcoal (#1f2937) — Secondary                     │
├─────────────────────────────────────────────────────────┤
│  SEMANTIC COLORS (UI Feedback Only)                     │
│  ├── Success (Jade-derived)                             │
│  ├── Warning (Amber)                                    │
│  ├── Error (Red)                                        │
│  └── Info (Slate)                                       │
├─────────────────────────────────────────────────────────┤
│  NEUTRAL COLORS (Text, Backgrounds, Borders)            │
│  └── Gray Scale (50–900)                                │
└─────────────────────────────────────────────────────────┘
```

### Semantic Palette Specification

#### Success (Jade-Derived)

Reuses brand green for consistency. Success states reinforce brand association.

| Token | Hex | Contrast on White | Use |
|-------|-----|-------------------|-----|
| success-50 | #ecfdf5 | — | Alert background |
| success-100 | #d1fae5 | — | Light fill |
| success-500 | #10b981 | 2.52:1 | Icon, border (not text) |
| success-600 | #059669 | 3.41:1 | Large text, UI components |
| success-700 | #047857 | 4.63:1 ✓ | AA body text |
| success-800 | #065f46 | 6.59:1 ✓ | AAA body text |

**Text rules**:
- Body text on white: Use #047857 (AA) or #065f46 (AAA)
- Icon/border: Use #10b981 or #059669
- Never use #10b981 for text (fails contrast)

#### Warning (Amber)

High-visibility yellow-orange for caution states.

| Token | Hex | Contrast on White | Use |
|-------|-----|-------------------|-----|
| warning-50 | #fef3c7 | — | Alert background |
| warning-100 | #fde68a | — | Light fill |
| warning-500 | #f59e0b | 2.15:1 ✗ | Icon, border (NOT text) |
| warning-600 | #d97706 | 3.03:1 | Large text only |
| warning-700 | #b45309 | 4.52:1 ✓ | AA body text |
| warning-800 | #92400e | 7.25:1 ✓ | AAA body text |

**Text rules**:
- Body text on white: Use #92400e (AAA) or #b45309 (AA)
- Icon/border: Use #f59e0b (with dark text label)
- Dark text (#1f2937) on warning-500 bg: 8.19:1 ✓

#### Error (Red)

Universal danger/error signaling. Critical for form validation, destructive actions.

| Token | Hex | Contrast on White | Use |
|-------|-----|-------------------|-----|
| error-50 | #fef2f2 | — | Alert background |
| error-100 | #fee2e2 | — | Light fill |
| error-500 | #ef4444 | 3.93:1 | Icon, border, large text |
| error-600 | #dc2626 | 4.63:1 ✓ | AA body text |
| error-700 | #b91c1c | 6.05:1 ✓ | AA+ body text |
| error-800 | #991b1b | 7.79:1 ✓ | AAA body text |

**Text rules**:
- Body text on white: Use #b91c1c (AA+) or #991b1b (AAA)
- Icon/border: Use #ef4444 or #dc2626
- White text on error-600 bg: 4.63:1 ✓

#### Info (Slate)

Neutral informational state. Avoids "forbidden" blue while maintaining distinction.

| Token | Hex | Contrast on White | Use |
|-------|-----|-------------------|-----|
| info-50 | #f8fafc | — | Alert background |
| info-100 | #f1f5f9 | — | Light fill |
| info-500 | #64748b | 4.37:1 | Icon, border, large text |
| info-600 | #475569 | 6.08:1 ✓ | AA body text |
| info-700 | #334155 | 8.58:1 ✓ | AAA body text |
| info-800 | #1e293b | 12.53:1 ✓ | Maximum contrast |

**Text rules**:
- Body text on white: Use #334155 (AAA) or #475569 (AA)
- Icon/border: Use #64748b
- Visually distinct from success (green) and warning (amber)

### Dark Mode Semantic Colors

| State | Light Mode Text | Dark Mode Text | Dark Mode Background |
|-------|-----------------|----------------|---------------------|
| Success | #047857 | #34d399 | #065f46 @ 20% |
| Warning | #92400e | #fbbf24 | #92400e @ 20% |
| Error | #b91c1c | #f87171 | #991b1b @ 20% |
| Info | #334155 | #cbd5e1 | #334155 @ 20% |

### Logo-Specific Colors (Addition to Palette)

Colors used in logo that need documentation:

| Token | Hex | Use | Currently In |
|-------|-----|-----|--------------|
| jade-900 | #022c22 | Logo body gradient end | branding-guidelines.svg only |
| jade-300 | #34d399 | Dark mode logo tip | branding-guidelines.svg only |
| jade-400 | #10b981 | Logo tip gradient start | Both |

### Gradient Specifications

#### Logo Gradients (Light Mode)

```
Tip Gradient (vertical, top to bottom):
├── 0%:   #10b981 (jade-400)
└── 100%: #00a86b (jade-500)

Body Gradient (vertical, top to bottom):
├── 0%:   #00a86b (jade-500)
├── 40%:  #065f46 (jade-800)
└── 100%: #022c22 (jade-900)
```

#### Logo Gradients (Dark Mode)

```
Tip Gradient (vertical, top to bottom):
├── 0%:   #6ee7b7 (jade-300 light)
└── 100%: #34d399 (jade-300)

Body Gradient (vertical, top to bottom):
├── 0%:   #10b981 (jade-400)
├── 40%:  #059669 (jade-600)
└── 100%: #047857 (jade-700)
```

### Complete Color Token Reference

#### Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| brand-primary | #00a86b | Primary brand, accents |
| brand-secondary | #1f2937 | Text, backgrounds |

#### Primary Scale (Jade)

| Token | Hex | Light Theme Use | Dark Theme Use |
|-------|-----|-----------------|----------------|
| jade-50 | #ecfdf5 | Ghost button bg | — |
| jade-100 | #d1fae5 | Hover states | — |
| jade-300 | #34d399 | — | Links, accents |
| jade-400 | #10b981 | Hover accents | Text accents |
| jade-500 | #00a86b | Brand, focus rings | Focus rings |
| jade-600 | #008553 | Button fills | Button fills |
| jade-700 | #007a4c | Links, text | — |
| jade-800 | #065f46 | Dark accents | Ghost button bg |
| jade-900 | #022c22 | Logo gradient | — |

#### Gray Scale

| Token | Hex | Light Theme | Dark Theme |
|-------|-----|-------------|------------|
| gray-50 | #f9fafb | Page background | Primary text |
| gray-100 | #f1f5f9 | Card background | — |
| gray-200 | #e5e7eb | Borders | Body text |
| gray-300 | #d1d5db | Strong borders | — |
| gray-400 | #9ca3af | Disabled | Secondary text |
| gray-500 | #6b7280 | Secondary text | Muted text |
| gray-600 | #4b5563 | — | — |
| gray-700 | #374151 | Body text | — |
| gray-800 | #1f2937 | Headlines, Charcoal | Card background |
| gray-900 | #111827 | — | Page background |

## Recommendations Summary

### Immediate Fixes

1. **Add semantic colors**: Error and Info scales missing from color-system.svg

2. **Add missing brand colors**: #022c22 (jade-900), #34d399 (jade-300)

3. **Clarify color architecture**: Update design-philosophy.md to distinguish brand vs semantic

4. **Add gradient specs**: Document logo gradient stops and directions

5. **Rename Amber section**: "Accent Scale (Amber)" → "Semantic: Warning (Amber)"

### Documentation Updates

6. **Add waterline colors**: Include in color-system.svg

7. **Unify naming**: Use "Charcoal" for brand reference, "gray-800" for implementation

8. **Add dark mode semantic**: Complete dark mode color mappings

## Source of Truth Decision

| Specification | Authoritative Document |
|---------------|----------------------|
| Brand identity colors | design-philosophy.md |
| Logo-specific colors | branding-guidelines.svg |
| UI implementation colors | color-system.svg |
| Semantic colors | color-system.svg |
| Color roles & contrast | color-system.svg |

## Files to Update

1. [x] `audits/2026-01-12__color-system-audit.md` — This file (complete palette)
2. [x] `color-system.svg` — Added Error, Info scales, jade-300, jade-900
3. [x] `design-philosophy.md` — Clarified brand vs semantic color rules (v2.3)
4. [x] `branding-guidelines.svg` — Fixed waterline gap (0.125x), icon-to-text gap (0.33x), dark mode gradients (v1.1)

## References

- WCAG 2.1 Contrast Requirements: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- WCAG 2.1 Contrast (Enhanced) AAA: https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Tailwind CSS Color Palette: https://tailwindcss.com/docs/customizing-colors
- Inclusive Design Principles: https://inclusivedesignprinciples.org/
