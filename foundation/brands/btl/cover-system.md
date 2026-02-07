---
title: BTL Canonical Cover System
type: spec
status: active
created: 2026-01-17
updated: 2026-01-17
version: 1.0
---

# BTL Canonical Cover System

A single, reusable cover system for Builds That Last.
Designed for Substack covers and social media previews.
Optimized for longevity, clarity, and brand coherence.

## 1. Purpose

The canonical cover system exists to:

- Establish immediate brand recognition
- Signal depth and seriousness before reading
- Scale across years without visual fatigue
- Reduce per-article design decisions

The cover is infrastructure, not illustration.

## 2. Supported Formats

| Context | Size | Ratio |
|---------|------|-------|
| Substack cover | 1200 × 630 | 1.91:1 |
| Social preview | 1200 × 630 | 1.91:1 |
| LinkedIn crop-safe | Center 1:1 | — |

## 3. Fixed Elements (Never Change)

### Canvas

- Size: 1200 × 630
- Background: Charcoal (#111827 or #1f2937)
- Dark-first design

### Typography

- Headline: IBM Plex Sans, 700
- Sub-headline (optional): Public Sans, 400
- Metadata (optional): JetBrains Mono, 500

### Layout Behavior

- Bottom-weighted composition
- Left-aligned text inside center safe zone
- One focal point only

### Brand Anchor

- Iceberg mark or compact lockup
- Fixed position (bottom-right recommended)
- Size: 48–64px

## 4. Variable Elements (Per Article)

### Headline Text

- Maximum two lines
- Maximum width ~720px
- Must remain legible at thumbnail size

### Concept Visual Layer

Choose one:

- Schematic iceberg watermark
- Pattern-clean iceberg (cropped)
- Discovery visual (grid, scan, signal, map)
- Pure typography

### Waterline Divider (Optional)

- Dashed line separating headline and sub-headline

## 5. Iceberg Usage

Use iceberg prominently for:

- Foundations
- Speed vs velocity
- Technical debt
- Long-term systems

Use iceberg minimally for:

- Discovery
- Exploration
- Feedback
- Search

## 6. Discovery Visual Language

Approved metaphors:

- Grid with highlighted intersection
- Scan line
- Partial blueprint
- Signal from noise
- Direction vectors

Constraints:

- Two-color palette only
- Geometric forms
- Low visual noise

## 7. Safe Zone

- 64px margin on all sides
- All text must stay inside
- Logo must not compete with text

## 8. Export Rules

- Format: PNG
- Size: 1200 × 630
- Filename: `btl-cover--article-slug.png`

## 9. Validation Checklist

- [ ] Headline readable at small size
- [ ] One focal point only
- [ ] 40–60% whitespace
- [ ] No forbidden colors
- [ ] Timeless appearance

## 10. Core Principle

The cover does not explain the article.
It signals that the article is worth reading.
