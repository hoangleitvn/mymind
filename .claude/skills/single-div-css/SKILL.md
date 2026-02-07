# Single Div CSS Art Skill

Create complex illustrations using only one HTML `<div>` element and pure CSS. Based on Lynn Fisher's "A Single Div" technique.

## When to Use This Skill

Activate when user requests:
- "create single div art"
- "CSS illustration"
- "single div infographic"
- "CSS-only visual"
- "pure CSS drawing"
- Any visual that should be code-based (not image files)

## The Single Div Technique

**Core Concept**: One `<div>` gives you 3 visual layers:
1. The `div` itself (main element)
2. `::before` pseudo-element
3. `::after` pseudo-element

**Building Blocks**:
- **Gradients** (linear, radial, conic) - the primary "paint"
- **Box-shadow** - duplicate shapes, create outlines, add depth
- **Border-radius** - organic shapes, circles, pills
- **Background layering** - stack 15-50+ gradients for complexity
- **Transforms** - rotate, scale, position elements
- **Animations** - keyframes for motion, transitions for hover

## Workflow

### Phase 1: Analyze

Understand what visual is needed:
- What is being illustrated? (object, concept, data, scene)
- What style? (minimal, detailed, realistic, abstract)
- What mood/tone? (professional, playful, serious)
- Animated or static?
- Brand colors needed?

### Phase 2: Decompose

Break the visual into 3 layers:

```
┌─────────────────────────────┐
│  ::after (top layer)        │  ← Details, accents, overlays
├─────────────────────────────┤
│  ::before (middle layer)    │  ← Secondary shapes, backgrounds
├─────────────────────────────┤
│  div (base layer)           │  ← Primary shape, main structure
└─────────────────────────────┘
```

Plan which elements go on which layer. Consider:
- Z-order (what's in front/behind)
- Complexity distribution
- Animation requirements

### Phase 3: Build

Layer gradients strategically:

```css
.illustration {
  /* Base shape */
  width: 200px;
  height: 200px;
  background:
    /* Layer 1: foreground details */
    radial-gradient(...),
    /* Layer 2: middle elements */
    linear-gradient(...),
    /* Layer 3: background */
    linear-gradient(...);
  background-size: ..., ..., ...;
  background-position: ..., ..., ...;
}
```

Use box-shadow for copies:
```css
box-shadow:
  20px 20px 0 #color,    /* Copy at offset */
  -20px 20px 0 #color,   /* Another copy */
  inset 0 0 10px #shadow; /* Inner shadow */
```

### Phase 4: Brand (Optional)

Apply BTL design tokens if branding needed:

```css
:root {
  --btl-jade: #00a86b;
  --btl-charcoal: #1f2937;
  /* See brand-integration.md for full tokens */
}
```

### Phase 5: Output

Generate complete HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Illustration Name]</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f5f5f5;
    }

    .illustration {
      position: relative;
      /* dimensions */
      /* background layers */
      /* border-radius */
      /* box-shadow */
    }

    .illustration::before,
    .illustration::after {
      content: '';
      position: absolute;
    }

    .illustration::before {
      /* pseudo-element styles */
    }

    .illustration::after {
      /* pseudo-element styles */
    }

    /* Animations if needed */
    @keyframes animationName {
      0% { /* start state */ }
      100% { /* end state */ }
    }
  </style>
</head>
<body>
  <div class="illustration"></div>
</body>
</html>
```

## Reference Files

- **techniques.md** - Core CSS patterns and syntax
- **animation.md** - Keyframe and transition patterns
- **brand-integration.md** - BTL design tokens
- **patterns/** - Ready-to-use code snippets by category:
  - `shapes.md` - Basic geometric shapes
  - `icons.md` - Common icons and symbols
  - `data-viz.md` - Charts, graphs, indicators
  - `metaphors.md` - Iceberg, pyramid, layers
  - `characters.md` - Humans, animals, figures
  - `scenes.md` - Landscapes, environments

## Guidelines

### Do
- Start simple, add complexity incrementally
- Use CSS variables for repeated colors
- Test in browser frequently
- Comment complex gradient stacks
- Use `background-size` and `background-position` for precise control

### Don't
- Don't use more than one div (that's the constraint!)
- Don't forget `content: ''` on pseudo-elements
- Don't forget `position: absolute` on pseudo-elements
- Don't overcomplicate - sometimes simple is better

### Complexity Levels

| Level | Gradients | Use For |
|-------|-----------|---------|
| Simple | 1-5 | Icons, basic shapes |
| Medium | 5-15 | Infographic elements, simple scenes |
| Complex | 15-30 | Detailed illustrations, characters |
| Expert | 30-50+ | Photorealistic scenes, complex art |

## Example: Simple Circle

```css
.circle {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #00a86b 70%, transparent 70%);
}
```

## Example: Iceberg (BTL Brand)

```css
.iceberg {
  width: 200px;
  height: 300px;
  background:
    /* Sky */
    linear-gradient(to bottom, #87ceeb 0%, #87ceeb 33%, transparent 33%),
    /* Water surface */
    linear-gradient(to bottom, transparent 33%, #1e90ff 33%, #1e90ff 35%, transparent 35%),
    /* Above water (20%) */
    linear-gradient(to bottom, transparent 20%, white 20%, white 33%, transparent 33%),
    /* Below water (80%) */
    linear-gradient(to bottom, transparent 35%, rgba(255,255,255,0.6) 35%, rgba(255,255,255,0.6) 95%, transparent 95%),
    /* Deep water */
    linear-gradient(to bottom, transparent 33%, #0066aa 33%);
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Pseudo-element not showing | Add `content: ''` and `position: absolute` |
| Gradient not visible | Check `background-size` isn't 0 |
| Shapes misaligned | Use `background-position` for precise placement |
| Animation choppy | Use `transform` instead of position properties |
| Colors bleeding | Add `transparent` stops between colors |
