# Animation Patterns

CSS animation techniques for single-div illustrations.

## Keyframe Basics

```css
/* Define animation */
@keyframes animationName {
  0% {
    /* start state */
  }
  50% {
    /* middle state */
  }
  100% {
    /* end state */
  }
}

/* Apply animation */
.element {
  animation: animationName 2s ease-in-out infinite;
}

/* Full syntax */
animation:
  name           /* @keyframes name */
  duration       /* 2s, 500ms */
  timing         /* ease, linear, ease-in-out, cubic-bezier() */
  delay          /* 0s, 1s */
  iteration      /* 1, 3, infinite */
  direction      /* normal, reverse, alternate, alternate-reverse */
  fill-mode      /* none, forwards, backwards, both */
  play-state;    /* running, paused */
```

## Common Animation Patterns

### Pulse/Breathe

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.breathing {
  animation: pulse 2s ease-in-out infinite;
}
```

### Rotate

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinning {
  animation: spin 3s linear infinite;
}
```

### Float/Hover

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.floating {
  animation: float 3s ease-in-out infinite;
}
```

### Fade In/Out

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
```

### Bounce

```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translateY(-30px);
    animation-timing-function: ease-in;
  }
}

.bouncing {
  animation: bounce 1s infinite;
}
```

### Shake

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.shaking {
  animation: shake 0.5s ease-in-out;
}
```

### Color Shift

```css
@keyframes colorShift {
  0% { background-color: #00a86b; }
  33% { background-color: #1f2937; }
  66% { background-color: #3b82f6; }
  100% { background-color: #00a86b; }
}

.color-shifting {
  animation: colorShift 6s linear infinite;
}
```

### Gradient Animation

Animate background-position on oversized gradient:

```css
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-gradient {
  background: linear-gradient(270deg, #00a86b, #1f2937, #3b82f6);
  background-size: 600% 600%;
  animation: gradientMove 8s ease infinite;
}
```

### Progress Fill

```css
@keyframes fillProgress {
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
}

.progress-bar {
  background: linear-gradient(to right, #00a86b, #00a86b) no-repeat;
  background-size: 0% 100%;
  animation: fillProgress 2s ease-out forwards;
}
```

### Typewriter Effect (via width)

```css
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 2s steps(20) forwards;
}
```

## Pseudo-Element Animations

Animate ::before and ::after independently:

```css
.element {
  position: relative;
}

.element::before {
  content: '';
  position: absolute;
  animation: beforeAnim 2s infinite;
}

.element::after {
  content: '';
  position: absolute;
  animation: afterAnim 2s infinite 0.5s; /* 0.5s delay */
}
```

## Staggered Animations

Using animation-delay for sequence:

```css
/* On pseudo-elements */
.element {
  animation: mainAnim 1s ease;
}

.element::before {
  animation: beforeAnim 1s ease 0.2s both;
}

.element::after {
  animation: afterAnim 1s ease 0.4s both;
}
```

## Timing Functions

```css
/* Built-in */
animation-timing-function: linear;
animation-timing-function: ease;        /* default */
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;

/* Custom cubic-bezier */
animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* bounce */
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* back */

/* Steps (for frame-by-frame) */
animation-timing-function: steps(10);
animation-timing-function: steps(5, end);
```

## Transitions (Hover Effects)

```css
.element {
  transition: all 0.3s ease;
}

.element:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Specific properties */
.element {
  transition:
    transform 0.3s ease,
    background-color 0.5s ease,
    box-shadow 0.3s ease;
}
```

## Animation Performance Tips

### Use Transform and Opacity

These properties are GPU-accelerated:

```css
/* GOOD - GPU accelerated */
transform: translateX(100px);
opacity: 0.5;

/* AVOID - causes repaints */
left: 100px;
width: 200px;
background-color: red;
```

### will-change Hint

```css
.animated {
  will-change: transform, opacity;
}
```

### Reduce Motion Preference

```css
@media (prefers-reduced-motion: reduce) {
  .animated {
    animation: none;
    transition: none;
  }
}
```

## Complex Animation Example

Animated loading spinner:

```css
@keyframes spinnerRotate {
  to { transform: rotate(360deg); }
}

@keyframes spinnerPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent, #00a86b);
  animation: spinnerRotate 1s linear infinite;
}

.spinner::before {
  content: '';
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background: white;
}

.spinner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: #00a86b;
  animation: spinnerPulse 1s ease-in-out infinite;
}
```
