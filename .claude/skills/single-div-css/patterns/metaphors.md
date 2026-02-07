# Metaphor Patterns

Conceptual visuals for illustrating ideas and frameworks.

## Iceberg (BTL Signature)

The 20/80 principle - visible tip vs hidden foundation.

### Basic Iceberg

```css
.iceberg {
  width: 200px;
  height: 300px;
  position: relative;
  background:
    /* Sky */
    linear-gradient(to bottom, #87ceeb 0%, #b0e0e6 33%, transparent 33%),
    /* Water surface line */
    linear-gradient(to bottom, transparent 32%, #1e90ff 32%, #1e90ff 34%, transparent 34%),
    /* Above water ice (20%) - bright */
    linear-gradient(to bottom, transparent 15%, white 15%, #f0f8ff 33%, transparent 33%),
    /* Below water ice (80%) - translucent */
    linear-gradient(to bottom, transparent 34%, rgba(200,220,255,0.7) 34%, rgba(180,200,240,0.5) 90%, transparent 90%),
    /* Deep water */
    linear-gradient(to bottom, transparent 33%, #0066aa 33%, #003366 100%);
}

.iceberg::before {
  content: '';
  position: absolute;
  /* Iceberg shape using clip-path */
  top: 15%;
  left: 25%;
  width: 50%;
  height: 75%;
  background: linear-gradient(to bottom,
    white 0%, white 24%,
    rgba(200,230,255,0.8) 24%, rgba(180,210,240,0.6) 100%
  );
  clip-path: polygon(
    30% 0%, 70% 0%,          /* Top */
    85% 24%,                  /* Waterline right */
    95% 60%, 80% 100%,       /* Bottom right */
    20% 100%, 5% 60%,        /* Bottom left */
    15% 24%                   /* Waterline left */
  );
}
```

### Iceberg with Labels (Conceptual)

```css
.iceberg-labeled {
  width: 300px;
  height: 400px;
  background:
    /* "20% Visible" zone - lighter */
    linear-gradient(to bottom,
      #f0f9ff 0%, #f0f9ff 30%,
      transparent 30%
    ),
    /* Waterline */
    linear-gradient(to bottom,
      transparent 29%,
      #0ea5e9 29%, #0ea5e9 31%,
      transparent 31%
    ),
    /* "80% Hidden" zone - darker */
    linear-gradient(to bottom,
      transparent 30%,
      #0c4a6e 30%, #082f49 100%
    );
  border-radius: 8px;
  position: relative;
}

/* Ice shape */
.iceberg-labeled::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  width: 60%;
  height: 80%;
  background:
    linear-gradient(to bottom,
      white 0%, white 25%,
      rgba(186,230,253,0.8) 25%
    );
  clip-path: polygon(
    35% 0%, 65% 0%,
    80% 25%, 90% 50%, 85% 80%, 70% 100%,
    30% 100%, 15% 80%, 10% 50%, 20% 25%
  );
}
```

## Pyramid / Hierarchy

### Basic Pyramid

```css
.pyramid {
  width: 200px;
  height: 200px;
  background: #00a86b;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Layered pyramid (3 tiers) */
.pyramid-tiered {
  width: 200px;
  height: 200px;
  background:
    /* Top tier */
    linear-gradient(to bottom, #00a86b 0%, #00a86b 33%, transparent 33%),
    /* Middle tier */
    linear-gradient(to bottom, transparent 33%, #34d399 33%, #34d399 66%, transparent 66%),
    /* Base tier */
    linear-gradient(to bottom, transparent 66%, #6ee7b7 66%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

### Inverted Pyramid (Funnel)

```css
.funnel {
  width: 200px;
  height: 200px;
  background:
    linear-gradient(to bottom,
      #00a86b 0%, #00a86b 33%,
      #34d399 33%, #34d399 66%,
      #6ee7b7 66%, #6ee7b7 100%
    );
  clip-path: polygon(0% 0%, 100% 0%, 70% 100%, 30% 100%);
}
```

## Layers / Stack

### Stacked Cards

```css
.card-stack {
  width: 150px;
  height: 100px;
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow:
    /* Card 1 (front) */
    0 2px 10px rgba(0,0,0,0.1),
    /* Card 2 shadow */
    5px 5px 0 -1px #f3f4f6,
    5px 5px 0 0 #e5e7eb,
    /* Card 3 shadow */
    10px 10px 0 -1px #e5e7eb,
    10px 10px 0 0 #d1d5db;
}
```

### Tech Stack Layers

```css
.tech-stack {
  width: 200px;
  height: 150px;
  background:
    /* Layer 1: Frontend */
    linear-gradient(to bottom, #3b82f6 0%, #3b82f6 25%, transparent 25%),
    /* Layer 2: Backend */
    linear-gradient(to bottom, transparent 30%, #00a86b 30%, #00a86b 55%, transparent 55%),
    /* Layer 3: Database */
    linear-gradient(to bottom, transparent 60%, #f59e0b 60%, #f59e0b 85%, transparent 85%),
    /* Layer 4: Infrastructure */
    linear-gradient(to bottom, transparent 90%, #1f2937 90%);
  border-radius: 8px;
}
```

## Foundation / Building Blocks

### Foundation Pillars

```css
.foundation {
  width: 250px;
  height: 180px;
  background:
    /* Roof/top */
    linear-gradient(to bottom, #1f2937 0%, #1f2937 15%, transparent 15%),
    /* Pillars */
    linear-gradient(to right,
      transparent 10%, #00a86b 10%, #00a86b 25%, transparent 25%,
      transparent 40%, #00a86b 40%, #00a86b 55%, transparent 55%,
      transparent 70%, #00a86b 70%, #00a86b 85%, transparent 85%
    ),
    /* Base */
    linear-gradient(to bottom, transparent 85%, #1f2937 85%);
}
```

## Tree / Growth

### Simple Tree

```css
.tree {
  width: 100px;
  height: 150px;
  position: relative;
}

.tree::before {
  /* Trunk */
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 50px;
  background: #8b4513;
  border-radius: 0 0 5px 5px;
}

.tree::after {
  /* Foliage */
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 100px;
  background: #00a86b;
  border-radius: 50% 50% 45% 45%;
}
```

### Tree with Roots (Visible Foundation)

```css
.tree-roots {
  width: 120px;
  height: 200px;
  background:
    /* Canopy */
    radial-gradient(ellipse 80% 60% at 50% 25%, #00a86b 70%, transparent 70%),
    /* Trunk */
    linear-gradient(to right, transparent 45%, #8b4513 45%, #8b4513 55%, transparent 55%),
    /* Ground line */
    linear-gradient(to bottom, transparent 58%, #6b7280 58%, #6b7280 60%, transparent 60%),
    /* Roots */
    linear-gradient(160deg, transparent 60%, #654321 60%, #654321 62%, transparent 62%),
    linear-gradient(200deg, transparent 60%, #654321 60%, #654321 62%, transparent 62%),
    linear-gradient(180deg, transparent 60%, #654321 60%, #654321 62%, transparent 62%);
}
```

## Bridge / Connection

```css
.bridge {
  width: 200px;
  height: 100px;
  background:
    /* Bridge deck */
    linear-gradient(to bottom,
      transparent 40%,
      #1f2937 40%, #1f2937 50%,
      transparent 50%
    ),
    /* Left pillar */
    linear-gradient(to right,
      transparent 10%, #00a86b 10%, #00a86b 25%,
      transparent 25%
    ),
    /* Right pillar */
    linear-gradient(to right,
      transparent 75%, #00a86b 75%, #00a86b 90%,
      transparent 90%
    ),
    /* Arch */
    radial-gradient(ellipse 40% 30% at 50% 50%, transparent 80%, #1f2937 80%, #1f2937 90%, transparent 90%);
}
```

## Cycle / Loop

```css
.cycle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background:
    /* Arrows indicating rotation */
    conic-gradient(
      from 0deg,
      #00a86b 0deg 80deg,
      transparent 80deg 90deg,
      #3b82f6 90deg 170deg,
      transparent 170deg 180deg,
      #f59e0b 180deg 260deg,
      transparent 260deg 270deg,
      #e74c3c 270deg 350deg,
      transparent 350deg 360deg
    );
  position: relative;
}

.cycle::before {
  content: '';
  position: absolute;
  inset: 30px;
  background: white;
  border-radius: 50%;
}
```

## Scale / Balance

```css
.balance {
  width: 200px;
  height: 120px;
  background:
    /* Beam */
    linear-gradient(to bottom,
      transparent 30%,
      #1f2937 30%, #1f2937 35%,
      transparent 35%
    ),
    /* Center post */
    linear-gradient(to right,
      transparent 48%, #1f2937 48%, #1f2937 52%, transparent 52%
    ),
    /* Left pan */
    radial-gradient(ellipse 30% 15% at 20% 50%, #00a86b 90%, transparent 90%),
    /* Right pan */
    radial-gradient(ellipse 30% 15% at 80% 50%, #00a86b 90%, transparent 90%),
    /* Base */
    linear-gradient(to bottom, transparent 85%, #1f2937 85%);
}
```

## Compass / Direction

```css
.compass {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background:
    /* Outer ring */
    radial-gradient(circle, transparent 40%, #1f2937 40%, #1f2937 45%, white 45%, white 48%, #1f2937 48%, #1f2937 50%, transparent 50%),
    /* Cardinal directions using gradients */
    linear-gradient(to bottom, #e74c3c 0%, #e74c3c 20%, transparent 20%, transparent 80%, #1f2937 80%),
    linear-gradient(to right, #1f2937 0%, #1f2937 20%, transparent 20%, transparent 80%, #1f2937 80%);
  background-size: 100% 100%, 10% 100%, 100% 10%;
  background-position: center, center, center;
  background-repeat: no-repeat;
}
```
