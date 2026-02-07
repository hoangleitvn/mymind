# BTL Logo Refresh & Implementation Plan

This plan outlines the steps to finalize the Builds That Last (BTL) brand identity, generate all required assets, and document usage guidelines.

## Phase 0: Typography Evaluation
**Goal:** Evaluate typography options to avoid AI-common fonts and match BTL's engineering aesthetic.
**Status:** Completed (2026-01-12)

### Previous System (AI-Common - Deprecated)
| Role | Font | Issue |
|------|------|-------|
| Logo/Headings | Poppins | AI-common, overused in templates |
| Body | Inter | AI-common #1, signals no design decision |
| Code | JetBrains Mono | Keep (distinctive, technical) |

### Final Decision
| Role | Font | Weights | Rationale |
|------|------|---------|-----------|
| **Headings** | IBM Plex Sans | 400, 500, 600, 700 | Documentation aesthetic, "blueprint" feel |
| **Body** | Public Sans | 400, 500, 600, 700 | Government-grade clarity, USWDS origin |
| **Code** | JetBrains Mono | 400, 500 | Keep - distinctive, technical |

### Why This Combination (Score: 46/50)
- **IBM Plex Sans**: Perfect engineering/documentation aesthetic, designed by IBM for technical content
- **Public Sans**: Clean, readable, created by USWDS - signals intentional design choice
- **Differentiation**: Neither font appears in common AI/Tailwind/Next.js templates

### Evaluation Criteria (All Passed)
- [x] Matches BTL philosophy (engineering, grounded, timeless)
- [x] Works at all sizes (16px to display)
- [x] Available on Google Fonts (free, web-friendly)
- [x] Has sufficient weight options
- [x] Avoids AI-common fonts (Inter, Poppins, Open Sans, Geist)

### Artifacts
- [x] Visual comparison: `btl-logo-font-comparison.html` (created 2026-01-12)
- [x] Final decision documented here
- [x] Website updated: `website/` uses new font stack

## Phase 1: Master Design Finalization
**Goal:** Establish the definitive source of truth for the logo design.
- [x] **Review & Update Master File:** Audit `@foundation/brands/btl/branding/btl-branding-guidelines.svg` (v1.1).
    - [x] Ensure color contrast meets WCAG AAA standards (specifically for dark mode).
    - [x] Verify "Layered Depth" gradient specifications.
    - [x] Confirm geometry and proportions (20/80 rule).
    - [x] Ensure all core components (Icon, Wordmark, Lockup) are represented correctly.
    - [x] Fixed waterline gap ratio (0.125x), icon-to-text gap (0.33x), dark mode gradients.

## Phase 2: Asset Generation (The "Factory")
**Goal:** Create every file variant listed in `@foundation/brands/btl/branding/btl-logo-variants-and-colorways.md`.
- [ ] **Setup Directory Structure:** Create the folder tree (`01_Vector_Master`, `02_Web_Transparent`, etc.).
- [ ] **Generate Primary Logos:**
    - `btl-primary-horizontal` (Light/Dark/Black/White)
    - `btl-primary-stacked` (Light/Dark/Black/White)
- [ ] **Generate Wordmarks:**
    - `btl-wordmark-standard`
    - `btl-wordmark-white`
    - `btl-wordmark-black`
- [ ] **Generate Submarks (Icons):**
    - `btl-submark-standard` (Light/Dark)
    - `btl-submark-circle` (for Avatars)
    - `btl-submark-rounded` (for App Icons)
    - `btl-submark-white/black` (Silhouettes)
    - `btl-submark-outline` (Special use)
- [ ] **Generate Favicon:** `btl-ui-favicon`.

## Phase 3: Documentation & Guidelines
**Goal:** Create a user-friendly guide for the team.
- [ ] **Update HTML Guidelines:** Refactor `@foundation/brands/btl/branding/btl-brand-guidelines.html` to include:
    - The new "Background Usage Matrix".
    - Visual examples of all new variants.
    - Clear "Do's and Don'ts".
    - Code snippets for developers.
- [ ] **Finalize Markdown Guide:** Ensure `@foundation/brands/btl/branding/btl-logo-variants-and-colorways.md` is accurate with final file paths.

---

**Next Step:** Execute Phase 1 by updating the master design SVG.
