# Data Visualization Patterns

Charts, graphs, and indicators using single div technique.

## Pie Charts

### Basic Pie Chart

```css
/* Two segments: 70% jade, 30% charcoal */
.pie-chart {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    #00a86b 0deg 252deg,      /* 70% = 252deg */
    #1f2937 252deg 360deg     /* 30% = 108deg */
  );
}

/* Three segments */
.pie-chart-3 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    #00a86b 0deg 144deg,      /* 40% */
    #3b82f6 144deg 252deg,    /* 30% */
    #1f2937 252deg 360deg     /* 30% */
  );
}

/* Four segments */
.pie-chart-4 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    #00a86b 0deg 90deg,       /* 25% */
    #3b82f6 90deg 180deg,     /* 25% */
    #f59e0b 180deg 270deg,    /* 25% */
    #1f2937 270deg 360deg     /* 25% */
  );
}
```

### Donut Chart

```css
.donut-chart {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    #00a86b 0deg 252deg,
    #e5e7eb 252deg 360deg
  );
  position: relative;
}

.donut-chart::before {
  content: '';
  position: absolute;
  inset: 30px;              /* Controls donut thickness */
  background: white;
  border-radius: 50%;
}

/* With center text area */
.donut-chart::after {
  content: '';
  position: absolute;
  inset: 35px;
  background: #f9fafb;
  border-radius: 50%;
}
```

### Semi-Circle Gauge

```css
.gauge {
  width: 200px;
  height: 100px;
  border-radius: 200px 200px 0 0;
  background: conic-gradient(
    from 180deg,
    #00a86b 0deg 126deg,     /* 70% of 180deg */
    #e5e7eb 126deg 180deg
  );
  position: relative;
}

.gauge::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 70px;
  background: white;
  border-radius: 140px 140px 0 0;
}
```

## Bar Charts

### Horizontal Bars

```css
.bar-chart-h {
  width: 200px;
  height: 120px;
  background:
    /* Bar 1: 80% */
    linear-gradient(to right, #00a86b 80%, #e5e7eb 80%),
    /* Bar 2: 60% */
    linear-gradient(to right, #3b82f6 60%, #e5e7eb 60%),
    /* Bar 3: 45% */
    linear-gradient(to right, #f59e0b 45%, #e5e7eb 45%);
  background-size: 100% 30px;
  background-position: 0 0, 0 45px, 0 90px;
  background-repeat: no-repeat;
}
```

### Vertical Bars

```css
.bar-chart-v {
  width: 180px;
  height: 150px;
  background:
    /* Bar 1: 80% */
    linear-gradient(to top, #00a86b 80%, transparent 80%),
    /* Bar 2: 60% */
    linear-gradient(to top, #3b82f6 60%, transparent 60%),
    /* Bar 3: 45% */
    linear-gradient(to top, #f59e0b 45%, transparent 45%),
    /* Baseline */
    linear-gradient(to top, #e5e7eb 2px, transparent 2px);
  background-size: 40px 100%, 40px 100%, 40px 100%, 100% 100%;
  background-position: 10px 0, 70px 0, 130px 0, 0 bottom;
  background-repeat: no-repeat;
}
```

### Stacked Bar

```css
.stacked-bar {
  width: 200px;
  height: 40px;
  border-radius: 4px;
  background: linear-gradient(to right,
    #00a86b 0%, #00a86b 40%,
    #3b82f6 40%, #3b82f6 70%,
    #f59e0b 70%, #f59e0b 100%
  );
}
```

## Progress Indicators

### Linear Progress Bar

```css
.progress-bar {
  width: 200px;
  height: 12px;
  background: #e5e7eb;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}

.progress-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 75%;              /* Progress percentage */
  background: linear-gradient(90deg, #00a86b, #34d399);
  border-radius: 6px;
}

/* Animated progress */
@keyframes progressFill {
  from { width: 0; }
  to { width: 75%; }
}

.progress-animated::before {
  animation: progressFill 1.5s ease-out forwards;
}
```

### Circular Progress

```css
.circular-progress {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(
    #00a86b 0deg 270deg,    /* 75% progress */
    #e5e7eb 270deg 360deg
  );
  position: relative;
}

.circular-progress::before {
  content: '';
  position: absolute;
  inset: 10px;
  background: white;
  border-radius: 50%;
}

/* Animated */
@keyframes circularFill {
  from {
    background: conic-gradient(#00a86b 0deg, #e5e7eb 0deg);
  }
  to {
    background: conic-gradient(#00a86b 270deg, #e5e7eb 270deg);
  }
}
```

### Step Indicator

```css
.step-indicator {
  width: 200px;
  height: 30px;
  background:
    /* Completed dots */
    radial-gradient(circle, #00a86b 8px, transparent 8px),
    radial-gradient(circle, #00a86b 8px, transparent 8px),
    /* Current dot */
    radial-gradient(circle, #00a86b 10px, transparent 10px),
    /* Future dots */
    radial-gradient(circle, #e5e7eb 8px, transparent 8px),
    /* Connecting line */
    linear-gradient(to right, #00a86b 60%, #e5e7eb 60%);
  background-size:
    20px 20px, 20px 20px, 24px 24px, 20px 20px,
    100% 4px;
  background-position:
    0 5px, 50px 5px, 98px 3px, 150px 5px,
    0 13px;
  background-repeat: no-repeat;
}
```

## Comparison & Rating

### Star Rating

```css
.star-rating {
  width: 150px;
  height: 30px;
  background:
    /* 4 filled stars */
    conic-gradient(from -36deg at 15px 15px, #f59e0b 72deg, transparent 72deg),
    conic-gradient(from -36deg at 45px 15px, #f59e0b 72deg, transparent 72deg),
    conic-gradient(from -36deg at 75px 15px, #f59e0b 72deg, transparent 72deg),
    conic-gradient(from -36deg at 105px 15px, #f59e0b 72deg, transparent 72deg),
    /* 1 empty star */
    conic-gradient(from -36deg at 135px 15px, #e5e7eb 72deg, transparent 72deg);
}

/* Simpler using clip-path stars */
.stars {
  width: 150px;
  height: 28px;
  background: linear-gradient(to right, #f59e0b 80%, #e5e7eb 80%);
  clip-path: polygon(
    /* Star 1 */ 10% 38%, 0 38%, 8% 58%, 5% 78%, 15% 65%, 25% 78%, 22% 58%, 30% 38%, 20% 38%, 15% 20%,
    /* Star 2 */ 40% 38%, 30% 38%, 38% 58%, 35% 78%, 45% 65%, 55% 78%, 52% 58%, 60% 38%, 50% 38%, 45% 20%,
    /* Continue for more stars... */
  );
}
```

### Comparison Bars

```css
.comparison {
  width: 200px;
  height: 80px;
  background:
    /* Item A: 80% */
    linear-gradient(to right, #00a86b 80%, #e5e7eb 80%),
    /* Divider */
    linear-gradient(to bottom, transparent 48%, #1f2937 48%, #1f2937 52%, transparent 52%),
    /* Item B: 60% */
    linear-gradient(to right, #3b82f6 60%, #e5e7eb 60%);
  background-size: 100% 35px, 100% 100%, 100% 35px;
  background-position: 0 0, 0 0, 0 45px;
  background-repeat: no-repeat;
}
```

## Sparklines & Mini Charts

### Mini Line Trend

```css
.sparkline {
  width: 100px;
  height: 30px;
  background:
    /* Trend line approximation using gradients */
    linear-gradient(170deg, transparent 35%, #00a86b 35%, #00a86b 37%, transparent 37%),
    linear-gradient(150deg, transparent 45%, #00a86b 45%, #00a86b 47%, transparent 47%),
    linear-gradient(120deg, transparent 55%, #00a86b 55%, #00a86b 57%, transparent 57%),
    linear-gradient(160deg, transparent 30%, #00a86b 30%, #00a86b 32%, transparent 32%);
}
```

### Mini Bar Trend

```css
.mini-bars {
  width: 80px;
  height: 30px;
  background:
    linear-gradient(to top, #00a86b 60%, transparent 60%),
    linear-gradient(to top, #00a86b 80%, transparent 80%),
    linear-gradient(to top, #00a86b 40%, transparent 40%),
    linear-gradient(to top, #00a86b 70%, transparent 70%),
    linear-gradient(to top, #00a86b 90%, transparent 90%);
  background-size: 12px 100%;
  background-position: 0 0, 17px 0, 34px 0, 51px 0, 68px 0;
  background-repeat: no-repeat;
}
```

## Data Badges

### Percentage Badge

```css
.percentage-badge {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background:
    /* Ring showing percentage */
    conic-gradient(#00a86b 0deg 270deg, #e5e7eb 270deg),
    /* Center circle */
    radial-gradient(circle, white 70%, transparent 70%);
}
```

### Count Badge

```css
.count-badge {
  width: 24px;
  height: 24px;
  background: #e74c3c;
  border-radius: 50%;
  /* Number would be added via content or HTML */
}

/* Pill-shaped for larger numbers */
.count-pill {
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: #e74c3c;
  border-radius: 12px;
}
```
