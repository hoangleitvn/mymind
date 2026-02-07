# Logo Design Blueprint

This document defines how logo assets and design specifications are structured, named, and maintained.

The objective is clarity, consistency, and long-term maintainability across design, engineering, marketing, and external vendors.

---

## 1. Folder Structure

The structure separates **assets**, **rules**, and **decisions**.

```text
/brand
  /logo
    /svg
      /color
        logo-horizontal.svg
        logo-stacked.svg
        logo-icon.svg
        logo-lettermark.svg

      /mono
        logo-horizontal.svg
        logo-stacked.svg
        logo-icon.svg
        logo-lettermark.svg

      /inverse
        logo-horizontal.svg
        logo-icon.svg

    /png
      /1x
        logo-horizontal.png
        logo-stacked.png
        logo-icon.png
        logo-lettermark.png
      /2x
        logo-horizontal.png
        logo-stacked.png
        logo-icon.png
        logo-lettermark.png
      /3x
        logo-horizontal.png
        logo-stacked.png
        logo-icon.png
        logo-lettermark.png

    /pdf
      logo-print.pdf

    /eps
      logo-print.eps

  /spec
    01-overview.md
    02-logo-lockups.md
    03-clear-space.svg
    04-minimum-size.svg
    05-color.md
    06-typography.md
    07-background-usage.svg
    08-monochrome.svg
    09-do-dont.svg
    10-favicon-app-icon.svg
    11-alignment-placement.md
    12-file-formats.md

  /tokens
    color.json
    typography.json
    spacing.json
    logo.json

  /examples
    website-header.png
    business-card.png
    slide-cover.png

  README.md
```

---

## 2. Structure Principles

- **Variant by folder, not filename**  
  Color state is defined by directory: `color`, `mono`, `inverse`.

- **Lockup by filename**  
  Filenames describe the structural form of the logo.

- **Flat SVG only**  
  Logos must render identically across all environments.

- **Specs define rules**  
  The `/spec` folder explains how logos may be used.

- **Tokens define decisions**  
  The `/tokens` folder contains machine-readable brand constraints.

---

## 3. Logo Asset Folders

### `/logo/svg`
Primary source of truth. All SVGs must be flat and production-ready.

- `color`  
  Full-color logos for light backgrounds.

- `mono`  
  Single-color logos for restricted printing, embossing, and accessibility.

- `inverse`  
  Logos designed for dark or brand-colored backgrounds.

### `/logo/png`
Raster exports for legacy tools, presentations, and social platforms.

- `1x`, `2x`, `3x` indicate pixel density.
- PNGs are derived assets. SVG remains the master.

### `/logo/pdf` and `/logo/eps`
Print-ready formats for professional vendors and offset printing.

---

## 4. Specification Folder (`/spec`)

Specifications describe **rules**, not assets.

Each file has a single responsibility:

1. **Overview**  
   Brand intent and logo system summary.

2. **Logo lockups**  
   Approved logo configurations and usage context.

3. **Clear space**  
   Minimum exclusion zone around the logo.

4. **Minimum size**  
   Smallest allowed size for digital and print use.

5. **Color**  
   Approved colors and usage constraints.

6. **Typography**  
   Fonts associated with the logo and brand.

7. **Background usage**  
   Which logo variant to use on which background.

8. **Monochrome**  
   Rules for single-color usage.

9. **Do / Don’t**  
   Common misuse examples.

10. **Favicon & app icon**  
    Simplified logo rules for small sizes.

11. **Alignment & placement**  
    Logo positioning rules in layouts.

12. **File formats**  
    Guidance on which file to use per scenario.

Visual rules are SVG. Explanations are Markdown.

---

## 5. Tokens (`/tokens`)

Tokens make brand decisions explicit and reusable.

- `color.json`  
  Brand colors and semantic meanings.

- `typography.json`  
  Font families, weights, and scales.

- `spacing.json`  
  Spacing system used for clear space and layout.

- `logo.json`  
  Logo-specific constraints such as minimum size and clear-space ratios.

Tokens are used by design systems, CSS variables, documentation, and automation.

---

## 6. Examples (`/examples`)

Illustrative usage only.

Examples show the logo in context but do not define rules.  
All authoritative rules live in `/spec`.

---

## 7. File Naming Convention

**Canonical rule**

```text
logo-{lockup}.svg
```

- `lockup`: `horizontal | stacked | icon | lettermark | wordmark`

Color or variant must never appear in the filename.

Correct:

```text
/svg/color/logo-horizontal.svg
/svg/mono/logo-horizontal.svg
/svg/inverse/logo-horizontal.svg
```

Incorrect:

```text
logo-horizontal-color.svg
```

---

## 8. SVG Template (Flat Only)

```xml
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 W H"
     role="img"
     aria-label="Brand name logo"
     shape-rendering="geometricPrecision">
  <title>Brand name</title>
  <desc>Lockup: horizontal. Variant: color.</desc>

  <g id="logo">
    <g id="mark">
      <!-- icon paths -->
    </g>

    <g id="wordmark">
      <!-- wordmark paths -->
    </g>
  </g>
</svg>
```

---

## 9. SVG Rules (Flat Enforcement)

- Always define `viewBox`.
- Do not hardcode width or height unless required.
- Convert all text to outlines.
- Maintain layer hierarchy:

```text
logo → mark → wordmark
```

- Avoid transforms where possible. Prefer baked coordinates.
- Minimize points and merge paths when safe.
- Use round numbers for coordinates and viewBox.

Forbidden:
- Gradients
- Filters
- Masks
- Opacity below 1
- Shadows or effects
- Embedded raster images

---

## 10. Design Specification Checklist

Every logo release must include these specifications:

1. Color  
2. Typography  
3. Clear space  
4. Minimum size  
5. Lockups  
6. Background usage  
7. Monochrome  
8. Do / Don’t  
9. Favicon and app icon  
10. File formats  

When all are present, the logo is a system, not just a visual asset.
