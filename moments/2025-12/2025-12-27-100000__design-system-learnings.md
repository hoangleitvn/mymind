---
type: insight
created: 2025-12-27
context: BTL brand asset development session
status: active
---

# Design System Learnings

Findings and improvements needed for brand-kit and design-philosophy skills based on BTL presentation and email template work.

## What We Built

- 5 presentation templates (company-overview, client-pitch, workshop-deck, team-internal, keynote)
- Marketing materials with pricing cards
- HTML email template
- Design system documentation updates

## Issues Found

### 1. Color enforcement gaps

**Problem:** Non-brand colors appeared throughout assets despite having a defined two-color system.

**What we found:**
- Purple (`#6366f1`, `#8b5cf6`) in progress bars, avatars, section labels
- Blue (`#3b82f6`) in title slides
- Amber (`#f59e0b`) for "at-risk" status indicators
- Red (`#ef4444`) for "problem" indicators

**Root cause:** Design system documented what TO use but not what NOT to use. No explicit forbidden colors list.

**Fix applied:** Added "Forbidden Colors" section to design-system.md with explicit hex codes and reasons.

### 2. Text on colored backgrounds

**Problem:** Dark text appeared on jade green backgrounds (e.g., pricing card text), causing poor contrast.

**What we found:**
- Featured pricing cards had jade background but inherited dark text color
- No explicit rule about white text on brand backgrounds

**Root cause:** Design system assumed developers would know to use white text on colored backgrounds.

**Fix applied:** Added "Text on Brand Backgrounds" section with explicit color pairings and CSS patterns.

### 3. Layout patterns missing

**Problem:** No guidance on slide/component layout structures.

**What we found:**
- Initial slides had content fully centered (header + body together)
- User wanted two-part layout: header at top, body vertically centered in remaining space
- Needed both left-aligned and center-aligned variants

**Root cause:** Design system covered colors and typography but not spatial/layout patterns.

**Fix applied:** Created CSS patterns for:
- `.slide-content-layout` (base two-part structure)
- `.align-left` modifier for content-heavy slides
- Clear guidance on when to use each alignment

### 4. Component-specific rules missing

**Problem:** Design system was too abstract. Lacked concrete component examples.

**What we found:**
- How should a pricing card look?
- How should an email template be structured?
- What's the signature visual element? (accent bar)

**Root cause:** Design system focused on tokens, not assembled components.

**Fix applied:** Added accent bar documentation, button styles, tag styles. Created email template as reference implementation.

## Skill Improvement Recommendations

### For `foundation:brand-kit`

**Current gaps:**
1. Only provides color tokens, not usage rules
2. No forbidden/avoid list
3. No contrast pairing guidance
4. Missing component library

**Improvements needed:**

```markdown
## Add to brand-kit skill

### Color enforcement rules
- Explicit forbidden colors with hex codes
- Text/background pairing requirements
- Contrast ratio minimums per context

### Component patterns
- Card structures (with/without accent bar)
- Button hierarchy (primary, secondary, ghost)
- List styles (arrow bullets as signature)
- Status indicators (on-brand alternatives to red/amber/green)

### Layout primitives
- Two-part layouts (header top, body centered)
- Alignment variants (left vs center)
- Spacing scales for different contexts (web, presentation, social)

### Template library
- Reference implementations for common assets
- Email templates
- Presentation slide patterns
- Social graphics
```

### For `foundation:design-philosophy`

**Current gaps:**
1. Principles are abstract ("grounded, professional, clear")
2. No decision framework for common choices
3. Missing anti-patterns

**Improvements needed:**

```markdown
## Add to design-philosophy skill

### Decision framework
When to use left alignment:
- Content-heavy slides (grids, lists, timelines)
- Text blocks, code examples
- Forms and inputs

When to use center alignment:
- Quotes and testimonials
- Stats and big numbers
- Hero sections and CTAs
- Diagrams

### Anti-patterns to avoid
- Mixing brand colors with off-brand colors "for variety"
- Using red/amber/green for status (use gray tones instead)
- Decorative elements without purpose
- Multiple font weights in single component

### Signature elements
- Accent bar: When and where to use
- Arrow bullets (→): Signature list marker
- Jade as accent, charcoal as workhorse

### Context-specific guidance
- Presentations: Larger type, more spacing, centered titles
- Emails: Table layouts, inline styles, mobile considerations
- Social: Square format, high contrast, minimal text
```

## Patterns That Worked

### Two-part slide layout

```css
.slide-content-layout .slide-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.slide-content-layout .slide-header {
    flex-shrink: 0;  /* Header stays at top */
}

.slide-content-layout .slide-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;  /* Body vertically centered */
}
```

### Alignment modifier

```css
.slide-content-layout.align-left .slide-header {
    text-align: left;
}

.slide-content-layout.align-left .slide-body {
    align-items: flex-start;
}
```

### Feature box in emails

```html
<table style="background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #00a86b;">
    <tr>
        <td style="padding: 20px 24px;">
            <!-- Content -->
        </td>
    </tr>
</table>
```

## Questions for Future Work

1. Should each brand have its own forbidden colors list, or derive from allowed colors?
2. How do we handle status indicators without traffic light colors?
3. Should layout patterns be part of brand-kit or design-philosophy?
4. How do we version design system changes across existing assets?

## Action Items

- [ ] Update brand-kit skill with color enforcement rules
- [ ] Update design-philosophy skill with decision framework
- [ ] Add component library to brand-kit
- [ ] Create anti-patterns documentation
- [ ] Add context-specific guidance (presentation, email, social)
