---
title: Unified Flow
type: style
status: active
created: 2026-01-13
updated: 2026-01-13
context: Blog detail pages, long-form content
---

# Unified Flow Style

A reading-focused layout that eliminates visual interruptions between header and content.

## When to Use

- Blog detail pages
- Long-form articles
- Documentation pages
- Any content where continuous reading is the goal

## Core Concept

Single background throughout. No dark hero sections breaking the reading experience.

```
┌─────────────────────────────────────┐
│  Header (light bg)                  │
├─────────────────────────────────────┤
│  Title + Meta (same light bg)       │
│                                     │
│  Content flows seamlessly...        │
│                                     │
│  [TOC sidebar]                      │
│                                     │
└─────────────────────────────────────┘
```

## Specifications

### Layout

| Element | Value |
|---------|-------|
| Background | Single light (`#f9fafb` or `#ffffff`) |
| Content width | 75ch |
| Sidebar TOC width | 220px |
| Grid gap | 32px (`--space-5`) |
| Breakpoint | 900px (sidebar hides below) |

### Two-Column Grid (Desktop)

```css
.blog-article .container {
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: var(--space-8);
  align-items: start;
}
```

### Mobile (Single Column)

```css
@media (max-width: 900px) {
  .blog-article .container {
    display: block;
    max-width: 75ch;
  }
  .blog-toc {
    display: none;
  }
}
```

## Table of Contents

Sticky sidebar that highlights current section.

| Property | Value |
|----------|-------|
| Position | Sticky |
| Top offset | `calc(var(--nav-height) + var(--space-6))` |
| Border | 2px left, `var(--border-color)` |
| Active link | Jade color, weight 500 |

### Scroll Tracking

Headings need scroll margin to account for fixed nav:

```css
.blog-article-content h2 {
  scroll-margin-top: calc(var(--nav-height) + var(--space-6));
}
```

## Principle Alignment

| Principle | How This Style Applies |
|-----------|----------------------|
| **Depth Over Surface** | TOC reveals article structure, implies substance |
| **Clarity Over Cleverness** | Simple layout, focus on content |
| **Restraint Over Abundance** | Single background, no decorative breaks |
| **Grounded Over Floating** | Continuous flow, anchored reading |
| **Timeless Over Trendy** | Classic editorial layout, no gimmicks |

## What This Style Rejects

- Dark hero sections on content pages
- Reading progress bars (decorative, trendy)
- Floating share buttons
- Parallax effects
- Animated scroll indicators

## Example Usage

```html
<article class="blog-article">
  <div class="container">
    <div class="blog-article-main">
      <header class="blog-article-hero">
        <!-- Title, meta, breadcrumb -->
      </header>
      <div class="blog-article-content">
        <!-- Article content with h2 sections -->
      </div>
    </div>
    <nav class="blog-toc">
      <!-- Sticky sidebar TOC -->
    </nav>
  </div>
</article>
```

## Files That Implement This Style

- `website/css/sections.css` - Layout styles
- `website/js/theme.js` - TOC scroll tracking
- `website/blog/*.html` - Blog post templates
