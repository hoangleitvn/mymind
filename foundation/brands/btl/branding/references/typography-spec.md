---
title: Typography Specification
type: reference
status: active
created: 2026-01-13
updated: 2026-01-13
note: Detailed CSS implementation reference. Main typography tokens are in design-system.md.
---

# Typography Specification

This document provides detailed CSS implementation for the BTL typography system.

**Primary source:** `../design-system.md` (tokens and scales)
**This document:** CSS examples and implementation details

The objective is clarity, hierarchy, accessibility, and long-term consistency.

## Font Roles (single responsibility)

| Role | Font | Purpose |
|-----|------|---------|
| Logo | IBM Plex Sans | Brand authority and identity |
| Headings | IBM Plex Sans | Structure, hierarchy, emphasis |
| Body | Public Sans | Long-form readability and UI text |
| Code | JetBrains Mono | Precision, technical content |

No font is reused outside its role.

## CSS Font Variables (canonical)

```css
:root {
  --font-brand: "IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", Arial, sans-serif;

  --font-body: "Public Sans", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", Arial, sans-serif;

  --font-code: "JetBrains Mono", ui-monospace, Menlo, Monaco, "Cascadia Mono",
    "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace",
    "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
}
```

## 1. Logo Typography

**Font:** IBM Plex Sans  
**Weight:** 700  
**Usage:** Logo only

```css
.logo {
  font-family: var(--font-brand);
  font-weight: 700;
  letter-spacing: 0.02em;
}
```

Rules:
- Logo text never appears inline with headings or body text
- Logo may use custom tracking
- Logo does not inherit global typography rules

## 2. Heading Typography

**Font:** IBM Plex Sans  
**Weights:** 600, 700  
**Usage:** H1–H4 only

```css
h1 {
  font-family: var(--font-brand);
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h2 {
  font-family: var(--font-brand);
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

h3 {
  font-family: var(--font-brand);
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.3;
}

h4 {
  font-family: var(--font-brand);
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.35;
}
```

Rules:
- No heading uses weight below 600
- No heading uses the body font
- Headings beyond H4 should inherit body font with emphasis, not IBM Plex Sans

## 3. Body Typography

**Font:** Public Sans  
**Weights:** 400, 500  
**Usage:** Paragraphs, UI text, labels, descriptions

```css
body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
}
```

### Emphasis and UI labels

```css
strong,
.label,
.ui-emphasis {
  font-family: var(--font-body);
  font-weight: 500;
}
```

Rules:
- Body text never uses IBM Plex Sans
- Avoid weights 600+ for paragraphs
- Public Sans is the default reading font

## 4. Code Typography

**Font:** JetBrains Mono  
**Weight:** 500  
**Usage:** Inline code, code blocks, logs, technical data

```css
code,
pre,
kbd,
samp {
  font-family: var(--font-code);
  font-weight: 500;
  font-size: 0.9em;
  line-height: 1.6;
}
```

Rules:
- Code never inherits body or heading fonts
- Code weight is fixed at 500
- Inline code should be slightly smaller than body text

## 5. Accessibility and i18n

- Minimum body size: 15–16px
- Minimum paragraph line-height: 1.6
- All fonts support Vietnamese and extended Latin
- Color contrast must meet WCAG AA or higher

## 6. Explicit Non-Goals

- No decorative fonts
- No dynamic font switching
- No additional weights “just in case”
- No ad-hoc font overrides in components

## Mental Model

- IBM Plex Sans. Authority and structure  
- Public Sans. Endurance and clarity  
- JetBrains Mono. Precision and truth  

Typography here is infrastructure.
If it becomes noticeable, the system has failed.
