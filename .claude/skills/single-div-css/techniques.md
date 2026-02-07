# CSS Techniques Reference

Core CSS patterns for single-div illustrations.

## Gradients

### Linear Gradient

Creates straight color bands.

```css
/* Basic: top to bottom */
background: linear-gradient(to bottom, #red 0%, #blue 100%);

/* Angled */
background: linear-gradient(45deg, #red 0%, #blue 100%);

/* Hard stops (no blur) */
background: linear-gradient(to right,
  #red 0%, #red 50%,      /* solid red */
  #blue 50%, #blue 100%   /* solid blue */
);

/* Multiple bands */
background: linear-gradient(to bottom,
  #sky 0%, #sky 30%,
  #grass 30%, #grass 60%,
  #dirt 60%, #dirt 100%
);
```

### Radial Gradient

Creates circular/elliptical color bands.

```css
/* Circle from center */
background: radial-gradient(circle, #inner 0%, #outer 100%);

/* Circle at specific position */
background: radial-gradient(circle at 30% 20%, #color 0%, transparent 50%);

/* Ellipse */
background: radial-gradient(ellipse 100px 50px, #color 0%, transparent 100%);

/* Hard-edge circle */
background: radial-gradient(circle,
  #red 50%, transparent 50%  /* crisp edge */
);

/* Ring/donut */
background: radial-gradient(circle,
  transparent 40%,
  #ring 40%, #ring 50%,
  transparent 50%
);
```

### Conic Gradient

Creates pie-chart style gradients.

```css
/* Basic conic */
background: conic-gradient(#red, #yellow, #green, #blue, #red);

/* Pie chart segments */
background: conic-gradient(
  #red 0deg 90deg,
  #blue 90deg 180deg,
  #green 180deg 270deg,
  #yellow 270deg 360deg
);

/* From specific angle */
background: conic-gradient(from 45deg, #start, #end);

/* At specific position */
background: conic-gradient(at 30% 70%, #colors...);
```

### Repeating Gradients

```css
/* Stripes */
background: repeating-linear-gradient(
  45deg,
  #stripe1 0px, #stripe1 10px,
  #stripe2 10px, #stripe2 20px
);

/* Concentric circles */
background: repeating-radial-gradient(
  circle,
  #ring1 0px, #ring1 10px,
  #ring2 10px, #ring2 20px
);
```

## Background Layering

Stack multiple gradients (first = top, last = bottom).

```css
background:
  /* Top layer: small detail */
  radial-gradient(circle at 20% 30%, #eye 5%, transparent 5%),
  /* Middle layer: shape */
  linear-gradient(to bottom, #top 50%, #bottom 50%),
  /* Bottom layer: background */
  #base-color;

/* Each layer needs size and position */
background-size:
  10px 10px,    /* layer 1 */
  100% 100%,    /* layer 2 */
  100% 100%;    /* layer 3 */

background-position:
  20% 30%,      /* layer 1 */
  0 0,          /* layer 2 */
  0 0;          /* layer 3 */

background-repeat: no-repeat;
```

## Box Shadow

### Basic Shadows

```css
/* Drop shadow */
box-shadow: 5px 5px 10px rgba(0,0,0,0.3);

/* Inner shadow */
box-shadow: inset 0 0 10px rgba(0,0,0,0.5);

/* No blur (hard edge) */
box-shadow: 10px 10px 0 #color;
```

### Shape Duplication

Create copies of the element at different positions.

```css
/* Multiple copies */
box-shadow:
  50px 0 0 #color,      /* right copy */
  -50px 0 0 #color,     /* left copy */
  0 50px 0 #color,      /* bottom copy */
  0 -50px 0 #color;     /* top copy */

/* Different sizes (use spread) */
box-shadow:
  0 0 0 10px #color,    /* 10px larger */
  0 0 0 -5px #color;    /* 5px smaller (inset effect) */

/* Grid of dots */
box-shadow:
  20px 0 0 #dot,
  40px 0 0 #dot,
  0 20px 0 #dot,
  20px 20px 0 #dot,
  40px 20px 0 #dot;
```

### Layered Effects

```css
/* Depth effect */
box-shadow:
  inset 5px 5px 10px rgba(255,255,255,0.3),  /* highlight */
  inset -5px -5px 10px rgba(0,0,0,0.3),      /* shadow */
  0 10px 20px rgba(0,0,0,0.2);               /* drop shadow */
```

## Border Radius

### Basic Shapes

```css
/* Circle */
border-radius: 50%;

/* Pill/capsule */
border-radius: 9999px;

/* Rounded rectangle */
border-radius: 10px;

/* Individual corners */
border-radius: 10px 20px 30px 40px; /* TL TR BR BL */
```

### Organic Shapes

```css
/* Egg/oval */
border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

/* Blob */
border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

/* Leaf */
border-radius: 0 50% 50% 50%;

/* Drop */
border-radius: 50% 50% 50% 50% / 70% 70% 30% 30%;
```

## Transforms

```css
/* Rotation */
transform: rotate(45deg);

/* Scale */
transform: scale(1.5);       /* uniform */
transform: scale(1.5, 0.5);  /* x, y */

/* Translation */
transform: translate(10px, 20px);

/* Skew */
transform: skew(10deg, 5deg);

/* Combined */
transform: rotate(45deg) scale(1.2) translate(10px, 0);

/* Transform origin */
transform-origin: center center;  /* default */
transform-origin: top left;
transform-origin: 50% 100%;
```

## Clip Path

Create complex shapes by clipping.

```css
/* Triangle */
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

/* Pentagon */
clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);

/* Star */
clip-path: polygon(
  50% 0%, 61% 35%, 98% 35%, 68% 57%,
  79% 91%, 50% 70%, 21% 91%, 32% 57%,
  2% 35%, 39% 35%
);

/* Circle */
clip-path: circle(50% at center);

/* Ellipse */
clip-path: ellipse(50% 30% at center);

/* Custom path */
clip-path: path('M0,0 L100,0 L100,100 Z');
```

## Pseudo-Element Setup

Always required for ::before and ::after:

```css
.element::before,
.element::after {
  content: '';           /* REQUIRED - element won't show without this */
  position: absolute;    /* REQUIRED - for positioning */
  /* Then add your styles */
}

/* Positioning relative to parent */
.element {
  position: relative;    /* Creates positioning context */
}

.element::before {
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
}
```

## Color Techniques

### Transparency

```css
/* RGBA */
background: rgba(0, 168, 107, 0.5);  /* 50% transparent jade */

/* HSLA */
background: hsla(152, 100%, 33%, 0.5);

/* Hex with alpha */
background: #00a86b80;  /* 50% transparent */

/* Transparent keyword */
background: linear-gradient(#color 50%, transparent 50%);
```

### Color Functions

```css
/* Darken/lighten with filter */
filter: brightness(0.8);  /* darken */
filter: brightness(1.2);  /* lighten */

/* Desaturate */
filter: grayscale(50%);

/* Color overlay */
background-blend-mode: multiply;
background-blend-mode: overlay;
```

## Size & Position Patterns

### Centered Element

```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Full Coverage

```css
.fullcover::before {
  content: '';
  position: absolute;
  inset: 0;  /* same as top:0; right:0; bottom:0; left:0; */
}
```

### Aspect Ratio

```css
.square {
  width: 100px;
  aspect-ratio: 1;  /* 1:1 */
}

.widescreen {
  width: 160px;
  aspect-ratio: 16/9;
}
```
