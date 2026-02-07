# Brand Integration - BTL Design System

CSS variables and patterns for BTL-branded single-div illustrations.

## CSS Variables

Copy this block at the start of any BTL-branded illustration:

```css
:root {
  /* Brand Colors (Green) */
  --btl-brand: #00a86b;
  --btl-brand-50: #ecfdf5;
  --btl-brand-100: #d1fae5;
  --btl-brand-400: #10b981;
  --btl-brand-500: #00a86b;
  --btl-brand-600: #008553;
  --btl-brand-700: #007a4c;
  --btl-brand-800: #065f46;

  /* Base Colors (Gray/Charcoal) */
  --btl-charcoal: #1f2937;
  --btl-base-50: #f9fafb;
  --btl-base-100: #f1f5f9;
  --btl-base-200: #e5e7eb;
  --btl-base-300: #d1d5db;
  --btl-base-400: #9ca3af;
  --btl-base-500: #6b7280;
  --btl-base-600: #4b5563;
  --btl-base-700: #374151;
  --btl-base-800: #1f2937;
  --btl-base-900: #111827;

  /* Semantic */
  --btl-text-primary: #1f2937;
  --btl-text-secondary: #6b7280;
  --btl-background: #ffffff;
  --btl-surface: #f9fafb;
  --btl-border: #d1d5db;
  --btl-accent: #00a86b;

  /* Typography */
  --btl-font-heading: "IBM Plex Sans", system-ui, sans-serif;
  --btl-font-body: "Public Sans", system-ui, sans-serif;
  --btl-font-mono: "JetBrains Mono", monospace;

  /* Spacing (8px grid) */
  --btl-space-1: 4px;
  --btl-space-2: 8px;
  --btl-space-3: 16px;
  --btl-space-4: 24px;
  --btl-space-5: 32px;
  --btl-space-6: 48px;
  --btl-space-8: 64px;
  --btl-space-12: 96px;

  /* Radius */
  --btl-radius: 8px;
}
```

## Color Usage Rules

### Do Use

| Element | Color | Why |
|---------|-------|-----|
| Primary accent | `--btl-brand` (#00a86b) | Brand identity |
| Text on white | `--btl-charcoal` (#1f2937) | High contrast |
| Links | `--btl-brand-700` (#007a4c) | WCAG compliant |
| Buttons | `--btl-brand-600` (#008553) | Accessible |
| Subtle backgrounds | `--btl-base-50` (#f9fafb) | Clean surfaces |
| Borders | `--btl-base-300` (#d1d5db) | Defined structure |

### Don't Use

| Avoid | Why |
|-------|-----|
| Purple (#6366f1) | Off-brand |
| Blue (#3b82f6) | Generic tech |
| Pink (#ec4899) | Too playful |
| Amber/Orange | Not in brand palette |

**Exception:** Data visualization may use varied colors when showing multiple data series. Use muted tones.

## BTL Signature Elements

### Accent Bar

The signature BTL element - a thin green bar at the top of cards:

```css
.card {
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--btl-brand);
}
```

### The Waterline

Dashed line divider (core BTL visual element):

```css
.waterline {
  width: 100%;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    var(--btl-charcoal) 0px,
    var(--btl-charcoal) 4px,
    transparent 4px,
    transparent 7px
  );
}

/* With glow accent */
.waterline-glow {
  width: 100%;
  height: 3px;
  background:
    repeating-linear-gradient(
      to right,
      var(--btl-charcoal) 0px,
      var(--btl-charcoal) 4px,
      transparent 4px,
      transparent 7px
    ),
    linear-gradient(to right, rgba(0,168,107,0.3), rgba(0,168,107,0.3));
  background-size: 100% 2px, 100% 1px;
  background-position: 0 0, 0 2px;
  background-repeat: repeat-x;
}
```

### Gradients (Allowed)

```css
/* Standard jade gradient */
background: linear-gradient(135deg, #00a86b 0%, #065f46 100%);

/* Light jade gradient */
background: linear-gradient(135deg, #10b981 0%, #00a86b 100%);

/* Jade to charcoal */
background: linear-gradient(135deg, #065f46 0%, #1f2937 100%);

/* Charcoal gradient */
background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
```

## BTL Iceberg Mark

The iceberg is the BTL signature visual metaphor (20% visible, 80% foundation).

### Simplified Single-Div Iceberg

```css
.btl-iceberg {
  width: 200px;
  height: 300px;
  position: relative;
  background:
    /* Sky (light) */
    linear-gradient(to bottom,
      var(--btl-base-50) 0%,
      var(--btl-base-100) 30%,
      transparent 30%
    ),
    /* Waterline */
    linear-gradient(to bottom,
      transparent 29%,
      var(--btl-brand) 29%,
      var(--btl-brand) 31%,
      transparent 31%
    ),
    /* Deep (dark) */
    linear-gradient(to bottom,
      transparent 30%,
      var(--btl-charcoal) 30%,
      var(--btl-base-900) 100%
    );
  border-radius: 8px;
  overflow: hidden;
}

/* Ice shape */
.btl-iceberg::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  width: 60%;
  height: 80%;
  background:
    linear-gradient(to bottom,
      white 0%,
      white 25%,
      rgba(209,250,229,0.9) 25%,
      rgba(209,250,229,0.6) 100%
    );
  clip-path: polygon(
    35% 0%, 65% 0%,
    75% 25%,
    85% 50%, 80% 75%, 70% 100%,
    30% 100%, 20% 75%, 15% 50%,
    25% 25%
  );
}

/* Labels */
.btl-iceberg::after {
  content: '';
  position: absolute;
  right: 10%;
  width: 30px;
  height: 100%;
  background:
    /* 20% label position */
    radial-gradient(circle at 50% 15%, var(--btl-base-500) 3px, transparent 3px),
    /* 80% label position */
    radial-gradient(circle at 50% 65%, var(--btl-base-100) 3px, transparent 3px);
}
```

## Template: Branded Illustration

Complete template for BTL-branded single-div art:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BTL Illustration</title>
  <style>
    :root {
      --btl-brand: #00a86b;
      --btl-brand-600: #008553;
      --btl-charcoal: #1f2937;
      --btl-base-50: #f9fafb;
      --btl-base-100: #f1f5f9;
      --btl-base-200: #e5e7eb;
      --btl-base-500: #6b7280;
      --btl-base-900: #111827;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--btl-base-50);
      font-family: "Public Sans", system-ui, sans-serif;
    }

    .illustration {
      position: relative;
      /* Add dimensions and styles here */
    }

    .illustration::before,
    .illustration::after {
      content: '';
      position: absolute;
    }

    .illustration::before {
      /* Pseudo-element 1 */
    }

    .illustration::after {
      /* Pseudo-element 2 */
    }
  </style>
</head>
<body>
  <div class="illustration"></div>
</body>
</html>
```

## Dark Theme Variables

For dark theme illustrations:

```css
:root {
  --btl-text-primary: #f9fafb;
  --btl-text-secondary: #9ca3af;
  --btl-background: #1f2937;
  --btl-surface: #111827;
  --btl-border: #4b5563;
  --btl-accent: #10b981;  /* Brighter for dark bg */
}
```

## Checklist

Before finalizing any BTL-branded illustration:

- [ ] Uses only jade green and charcoal as primary colors
- [ ] No purple, blue, pink, or amber (except data viz)
- [ ] Text on jade backgrounds is white
- [ ] Links use #007a4c (not #00a86b) for accessibility
- [ ] Accent bar is 4-5px jade at top of cards
- [ ] Corners are 8px (no pills)
- [ ] Looks like engineering documentation, not marketing flyer
