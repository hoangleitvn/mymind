---
id: 20251211-103000
type: idea
status: raw
themes: [product-development, mizemind]
tags: [feature-request, workspace-structure, project-management, information-architecture]
captured: 2025-12-11T10:30:00+07:00
---

# Mizemind Project-Based Structure

## Raw Capture

Thinking about Mizemind supporting projects instead of flat structure. Example: "Builds That Last" is a project containing articles, visual assets, Substack setup, LinkedIn promotion - but currently:
1. No project plan exists
2. Flat structure mixes with other work (LinkedIn posts on various themes/angles)
3. Overlap between project-specific content and general content library

## Context

- Currently working on "Builds That Last" Substack publication launch
- Multiple deliverables: manifesto article, 6 infographic styles, cover images, logos, LinkedIn promo
- Parallel work happening: daily LinkedIn engagement, other content themes
- Hard to see project boundaries vs ongoing content work

## The Problem

**Flat structure issues:**
- Project deliverables scattered across workspace folders
- No single view of project status/progress
- Content created for project vs general library unclear
- Theme/angle overlap (e.g., "engineering leadership" is both a project theme AND a general content angle)

**Missing project concept:**
- No project plan/brief document
- No project-level progress tracking
- No project timeline or milestones
- No separation of "project work" vs "evergreen content work"

## Potential Solutions

### Option 1: Project Folders
```
workspace/
├── projects/
│   └── builds-that-last/
│       ├── PROJECT.md (brief, goals, timeline)
│       ├── articles/
│       ├── assets/
│       ├── promotion/
│       └── notes/
├── content/  (evergreen, reusable)
│   ├── linkedin/
│   ├── substack/
│   └── assets/
└── moments/
```

### Option 2: Project Tags + Views
Keep flat structure but add project tagging:
- All content has optional `project:` frontmatter
- Create project views that filter by tag
- PROJECT.md files define project scope

### Option 3: Hybrid - Project Workspaces
```
workspace/
├── active-projects/
│   └── builds-that-last/  (self-contained)
├── library/  (reusable content, templates)
├── engagement/  (daily LinkedIn, comments)
└── moments/
```

## Key Questions

1. Should project content live separately or be tagged within existing structure?
2. How to handle content that's both project-specific AND reusable?
3. Should Mizemind have a "project mode" that scopes context?
4. How do projects relate to the identity-kit themes?

## Content Potential

- Platform: Internal product thinking / Mizemind roadmap
- Format: Feature spec, product decision
- Angle: Real user pain point from dogfooding
- Related: Current session working on Builds That Last

## Follow-up

- [ ] Review current workspace structure pain points
- [ ] Define what a "project" means in content creation context
- [ ] Consider how Claude Code sessions could be project-scoped
- [ ] Think about project templates (launch project, content series, etc.)
