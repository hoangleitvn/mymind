# Brand Identity Asset List: Builds That Last (BTL)

This document serves as the master checklist for all **btl** branding files. All assets follow the `btl-type-variant` naming convention for easy sorting and searchability.

Check color-system.svg and visual-sketch.html as the original data for tokens.

Then we will need to review and redesign or update the btl-branding-design.svg to make sure we address all our token. And our design system and design philosophy at

design-system.md
design-philosophy.md

## 1. File Naming List

### Primary Logo (Icon + Text)
* `btl-primary-horizontal` – Standard light mode version (Green Icon + Dark Text).
* `btl-primary-dark` – **Dark mode optimized** (Green Icon + White/Green Text, AAA Contrast).
* `btl-primary-stacked` – Icon centered above text; used for vertical spaces.
* `btl-primary-white` – Monochrome white; used for overlays on photos or brand gradients.
* `btl-primary-black` – Monochrome black; used for high-contrast B&W printing.

### Wordmark (Text Only)
* `btl-wordmark-standard` – Brand name "Builds That Last" in brand colors.
* `btl-wordmark-white` – Brand name only in white.
* `btl-wordmark-black` – Brand name only in black.

### Submark (Icon Only)
* `btl-submark-standard` – The raw triangle icon with no background.
* `btl-submark-circle` – The icon inside a circular frame (Social Avatars).
* `btl-submark-rounded` – The icon inside a rounded square (App Icons).
* `btl-submark-white` – Solid white icon silhouette.
* `btl-submark-black` – Solid black icon silhouette.
* `btl-submark-outline` – Transparent icon with a border only.

### UI & Specialized
* `btl-ui-favicon` – 16px optimized mark for browser tabs.

## 2. File Organization Structure (Tree View)

```text
foundation/brands/btl/branding/logos/
├── 01_Vector_Master (Source SVGs)
│   ├── primary/
│   │   ├── btl-primary-horizontal.svg
│   │   ├── btl-primary-dark.svg
│   │   ├── btl-primary-stacked.svg
│   │   ├── btl-primary-white.svg
│   │   └── btl-primary-black.svg
│   ├── wordmark/
│   │   ├── btl-wordmark-standard.svg
│   │   ├── btl-wordmark-white.svg
│   │   └── btl-wordmark-black.svg
│   ├── submark/
│   │   ├── btl-submark-standard.svg
│   │   ├── btl-submark-circle.svg
│   │   ├── btl-submark-rounded.svg
│   │   ├── btl-submark-white.svg
│   │   ├── btl-submark-black.svg
│   │   └── btl-submark-outline.svg
│   └── btl-ui-favicon.svg
│
├── 02_Web_Transparent (PNG Exports - Pending)
│
└── 03_Social_Media_UI (Avatars - Pending)
```

## Logo Usage Guide

This guide provides simple "Do’s and Don’ts" to ensure the **btl** (Builds That Last) brand remains consistent, professional, and recognizable across all platforms.

---

### 1. The "Do" List

* **Use the Right File for the Job:** Use `.SVG` for printing and `.PNG` for digital/web use.
* **Maintain the "Safe Zone":** Always leave a clear space around the logo (roughly the height of the letter "B" in btl) so it doesn't feel crowded by other elements.
* **Choose High Contrast:** Use `btl-primary-white` on dark backgrounds and the standard version on light backgrounds to ensure readability.
* **Use the Circle Submark for Avatars:** Platforms like LinkedIn and Instagram crop profile pictures into circles; using `btl-submark-circle` prevents your logo from being cut off.

---

### 2. The "Don't" List

* **Don't Stretch or Squeeze:** Never change the proportions of the logo. Always scale it by holding 'Shift' to keep it perfectly balanced.
* **Don't Change Colors:** Only use the provided color variants (Standard, White, Black). Do not apply random gradients or unapproved colors to the icon.
* **Don't Overcrowd:** Avoid placing the logo too close to the edge of a page or directly against other text/images.
* **Don't Use Low Resolution:** Avoid using a small `.JPG` for large prints. If the logo looks "blurry" or "pixelated," switch to the `.SVG` file.

---

### 3. Approved Brand Colors

Keep these codes handy for website development and document design:

* **Primary Green (Triangle):** [Insert HEX Code, e.g., #6BBF94]
* **Secondary Slate (Dark Backgrounds):** [Insert HEX Code, e.g., #1E2530]
* **Pure White:** #FFFFFF
* **Solid Black:** #000000

---

### 4. Which Variant Should I Use?

| Scenario | Recommended File |
| :--- | :--- |
| **Website Navigation Bar** | `btl-primary-horizontal` |
| **Email Signature** | `btl-wordmark-standard` |
| **Social Media Profile Pic** | `btl-submark-circle` |
| **Company T-Shirt (Chest)** | `btl-primary-stacked` |
| **App Icon / Favicon** | `btl-submark-rounded` |
| **Watermark on Photos** | `btl-submark-standard` (at 50% opacity) |

More update or details will be on `btl-brand-guidelines.html`