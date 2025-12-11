# Design System

## Brand Info

**Brand Name:** personal
**Brand Type:** Personal
**Display Name:** Hoang Le
**Username:** @hoangleitvn

## Colors

### Primary Palette

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| **Primary** | Jade Green | `#00a86b` | `rgb(0, 168, 107)` | Main brand color, CTAs, key highlights |
| **Secondary** | Charcoal | `#374151` | `rgb(55, 65, 81)` | Supporting elements, headers, text emphasis |
| **Accent** | Gold/Amber | `#f59e0b` | `rgb(245, 158, 11)` | Highlights, callouts, energy points (use sparingly) |

### Neutrals

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| **Dark** | Warm Black | `#1f2937` | `rgb(31, 41, 55)` | Primary text, dark backgrounds |
| **Light** | Warm White | `#f9fafb` | `rgb(249, 250, 251)` | Backgrounds, light surfaces |
| **Gray** | Warm Gray | `#6b7280` | `rgb(107, 114, 128)` | Secondary text, borders, muted elements |
| **Gray Light** | Light Gray | `#e5e7eb` | `rgb(229, 231, 235)` | Dividers, subtle borders |

### Extended Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary Light** | Mint | `#d1fae5` | Light backgrounds, tags, subtle highlights |
| **Primary Dark** | Forest | `#065f46` | Dark mode primary, hover states |
| **Accent Light** | Cream | `#fef3c7` | Warning backgrounds, warm highlights |
| **Secondary Light** | Slate | `#f1f5f9` | Card backgrounds, secondary surfaces |

### Color Usage Rules

- **Primary green**: Headers, buttons, links, key highlights
- **Charcoal**: Body text emphasis, secondary headers, professional elements
- **Amber accent**: Use sparingly (max 10% of visual space), for energy and attention
- **Neutrals**: Most of the visual space, let colors pop against neutral backgrounds

## Typography

### Font Stack

| Role | Primary Font | Fallback | Weight | Usage |
|------|--------------|----------|--------|-------|
| **Headings** | Inter | system-ui, sans-serif | 600-700 (SemiBold-Bold) | Titles, headers, emphasis |
| **Body** | Inter | system-ui, sans-serif | 400-500 (Regular-Medium) | Paragraphs, descriptions |
| **Display** | Poppins | Inter, sans-serif | 700 (Bold) | Hero text, large statements |
| **Mono** | JetBrains Mono | monospace | 400 | Code, technical content |

### Type Scale

| Level | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| **Display** | 48px | 56px | 700 | Hero headlines, cover images |
| **H1** | 36px | 44px | 700 | Page titles |
| **H2** | 28px | 36px | 600 | Section headers |
| **H3** | 22px | 30px | 600 | Subsection headers |
| **H4** | 18px | 26px | 600 | Card titles, labels |
| **Body Large** | 18px | 28px | 400 | Lead paragraphs |
| **Body** | 16px | 24px | 400 | Default text |
| **Body Small** | 14px | 20px | 400 | Captions, metadata |
| **Caption** | 12px | 16px | 500 | Labels, timestamps |

### Typography Rules

- Headings: Inter SemiBold/Bold for clean, modern feel
- Display text: Poppins Bold for impact and confidence
- Body: Inter Regular for readability
- Line height: 1.5x for body, 1.2x for headings
- Letter spacing: Normal for body, slightly tighter (-0.01em) for large headings

## Spacing

### Spacing Scale (Normal Density)

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight gaps, inline spacing |
| `sm` | 8px | Small gaps, icon margins |
| `md` | 16px | Default spacing, card padding |
| `lg` | 24px | Section gaps, generous padding |
| `xl` | 32px | Large section spacing |
| `2xl` | 48px | Major section breaks |
| `3xl` | 64px | Page-level spacing |

### Layout

| Property | Value | Notes |
|----------|-------|-------|
| **Max Content Width** | 800px | Optimal reading width |
| **Grid Columns** | 12 | Standard grid system |
| **Gutter** | 16px | Space between columns |
| **Container Padding** | 24px | Mobile: 16px |
| **Alignment** | Left | Left-aligned text default |

## Borders

### Border Radius (Subtle Style)

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 4px | Buttons, inputs, small elements |
| `md` | 8px | Cards, containers |
| `lg` | 12px | Modals, large cards |
| `xl` | 16px | Feature sections |
| `full` | 9999px | Pills, avatars, tags |

### Border Styles

| Type | Value | Usage |
|------|-------|-------|
| **Default** | 1px solid #e5e7eb | Subtle dividers |
| **Emphasis** | 2px solid #00a86b | Active states, highlights |
| **Muted** | 1px solid #f1f5f9 | Very subtle separation |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 0 1px 2px rgba(0,0,0,0.05) | Subtle lift, buttons |
| `md` | 0 4px 6px rgba(0,0,0,0.07) | Cards, dropdowns |
| `lg` | 0 10px 15px rgba(0,0,0,0.1) | Modals, popovers |
| `xl` | 0 20px 25px rgba(0,0,0,0.1) | Large overlays |

## Component Tokens

### Buttons

| Variant | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| **Primary** | #00a86b | white | none | #059669 |
| **Secondary** | transparent | #374151 | 2px #374151 | #f1f5f9 bg |
| **Ghost** | transparent | #00a86b | none | #d1fae5 bg |

### Cards

| Property | Value |
|----------|-------|
| Background | #ffffff |
| Border | 1px solid #e5e7eb |
| Border Radius | 12px |
| Padding | 24px |
| Shadow | `md` (0 4px 6px rgba(0,0,0,0.07)) |

### Tags/Badges

| Variant | Background | Text |
|---------|------------|------|
| **Primary** | #d1fae5 | #065f46 |
| **Secondary** | #f1f5f9 | #374151 |
| **Accent** | #fef3c7 | #92400e |

---

## Usage Notes

This file defines design tokens for visual assets and UI components.

**Update frequency:** Rarely (rebrand or refresh only)

**Used by:**
- Cover image creation
- Carousel design
- Infographics
- Any visual asset requiring brand consistency

**Tips:**
- Primary green is your signature color
- Use amber sparingly for energy and highlights
- Charcoal grounds the design and adds professionalism
- When in doubt, use more neutral space
