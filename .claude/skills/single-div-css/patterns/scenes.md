# Scene Patterns

Landscapes, environments, and complex backgrounds.

## Nature Scenes

### Simple Landscape

```css
.landscape {
  width: 300px;
  height: 200px;
  background:
    /* Sun */
    radial-gradient(circle at 80% 20%, #fcd34d 8%, transparent 8%),
    /* Clouds */
    radial-gradient(ellipse 15% 8% at 20% 15%, white 100%, transparent 100%),
    radial-gradient(ellipse 12% 6% at 25% 18%, white 100%, transparent 100%),
    radial-gradient(ellipse 10% 5% at 60% 12%, white 100%, transparent 100%),
    /* Mountains */
    linear-gradient(150deg, transparent 55%, #6b7280 55%, #6b7280 58%, transparent 58%),
    linear-gradient(165deg, transparent 50%, #4b5563 50%, #4b5563 55%, transparent 55%),
    linear-gradient(155deg, transparent 60%, #374151 60%, #374151 65%, transparent 65%),
    /* Hills/grass */
    radial-gradient(ellipse 80% 30% at 50% 100%, #00a86b 100%, transparent 100%),
    /* Sky */
    linear-gradient(to bottom, #87ceeb, #b0e0e6);
  border-radius: 8px;
}
```

### Sunset

```css
.sunset {
  width: 300px;
  height: 200px;
  background:
    /* Sun (setting) */
    radial-gradient(circle at 50% 70%, #ff6b35 15%, #ff8c42 20%, transparent 30%),
    /* Gradient sky */
    linear-gradient(to bottom,
      #1a1a2e 0%,
      #16213e 20%,
      #e94560 50%,
      #ff6b35 70%,
      #ff8c42 85%,
      #ffd93d 100%
    );
  border-radius: 8px;
}

/* With silhouette */
.sunset-silhouette {
  width: 300px;
  height: 200px;
  background:
    /* Tree silhouette */
    radial-gradient(ellipse 15% 25% at 20% 75%, #1a1a2e 100%, transparent 100%),
    linear-gradient(to bottom, transparent 75%, #1a1a2e 75%) 15% 0 / 5% 100% no-repeat,
    /* Sun */
    radial-gradient(circle at 70% 65%, #ff6b35 12%, transparent 20%),
    /* Sky gradient */
    linear-gradient(to bottom, #1a1a2e, #e94560 50%, #ffd93d);
  border-radius: 8px;
}
```

### Ocean/Water

```css
.ocean {
  width: 300px;
  height: 200px;
  background:
    /* Waves (stylized) */
    radial-gradient(ellipse 25% 8% at 20% 60%, #0ea5e9 100%, transparent 100%),
    radial-gradient(ellipse 25% 8% at 50% 65%, #0284c7 100%, transparent 100%),
    radial-gradient(ellipse 25% 8% at 80% 60%, #0ea5e9 100%, transparent 100%),
    radial-gradient(ellipse 30% 10% at 35% 75%, #0284c7 100%, transparent 100%),
    radial-gradient(ellipse 30% 10% at 65% 80%, #0ea5e9 100%, transparent 100%),
    /* Water gradient */
    linear-gradient(to bottom, #0ea5e9, #0369a1 50%, #1e3a5f);
  border-radius: 8px;
}
```

### Night Sky

```css
.night-sky {
  width: 300px;
  height: 200px;
  background:
    /* Moon */
    radial-gradient(circle at 75% 25%, #f5f5f5 8%, transparent 8%),
    /* Stars (dots) */
    radial-gradient(circle at 10% 20%, white 1px, transparent 1px),
    radial-gradient(circle at 25% 35%, white 1px, transparent 1px),
    radial-gradient(circle at 40% 15%, white 1.5px, transparent 1.5px),
    radial-gradient(circle at 55% 45%, white 1px, transparent 1px),
    radial-gradient(circle at 85% 55%, white 1px, transparent 1px),
    radial-gradient(circle at 15% 70%, white 1px, transparent 1px),
    radial-gradient(circle at 60% 25%, white 1.5px, transparent 1.5px),
    radial-gradient(circle at 90% 15%, white 1px, transparent 1px),
    /* Sky gradient */
    linear-gradient(to bottom, #0f0f23, #1a1a3e, #0f0f23);
  border-radius: 8px;
}
```

## Workspace/Office

### Desk Scene

```css
.desk {
  width: 300px;
  height: 200px;
  background:
    /* Monitor */
    linear-gradient(to bottom,
      transparent 10%, #1f2937 10%, #1f2937 12%,
      #3b82f6 12%, #3b82f6 45%,
      #1f2937 45%, #1f2937 50%,
      transparent 50%
    ),
    /* Monitor stand */
    linear-gradient(to right, transparent 45%, #6b7280 45%, #6b7280 55%, transparent 55%),
    /* Keyboard */
    linear-gradient(to bottom, transparent 70%, #374151 70%, #374151 78%, transparent 78%),
    /* Desk surface */
    linear-gradient(to bottom, transparent 80%, #92400e 80%),
    /* Wall */
    #f5f5f4;
  background-size: 40% 100%, 10% 20%, 50% 100%, 100% 100%, 100% 100%;
  background-position: 30% 0, 47% 50%, 25% 0, 0 0, 0 0;
  background-repeat: no-repeat;
  border-radius: 8px;
}
```

### Window View

```css
.window {
  width: 200px;
  height: 250px;
  background:
    /* Window frame */
    linear-gradient(to right, #8b7355 0%, #8b7355 8%, transparent 8%, transparent 92%, #8b7355 92%),
    linear-gradient(to bottom, #8b7355 0%, #8b7355 6%, transparent 6%, transparent 94%, #8b7355 94%),
    /* Center divider */
    linear-gradient(to right, transparent 48%, #8b7355 48%, #8b7355 52%, transparent 52%),
    linear-gradient(to bottom, transparent 48%, #8b7355 48%, #8b7355 52%, transparent 52%),
    /* Sky through window */
    linear-gradient(to bottom, #87ceeb 0%, #87ceeb 60%, #00a86b 60%);
  border-radius: 4px;
}
```

## Abstract Backgrounds

### Gradient Mesh

```css
.gradient-mesh {
  width: 300px;
  height: 200px;
  background:
    radial-gradient(circle at 20% 30%, rgba(0,168,107,0.8) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(59,130,246,0.8) 0%, transparent 50%),
    radial-gradient(circle at 60% 80%, rgba(245,158,11,0.6) 0%, transparent 50%),
    radial-gradient(circle at 10% 80%, rgba(139,92,246,0.6) 0%, transparent 50%),
    #f5f5f5;
  border-radius: 8px;
}
```

### Geometric Pattern

```css
.geometric {
  width: 300px;
  height: 200px;
  background:
    /* Triangles */
    linear-gradient(135deg, #00a86b 25%, transparent 25%),
    linear-gradient(225deg, #3b82f6 25%, transparent 25%),
    linear-gradient(45deg, #f59e0b 25%, transparent 25%),
    linear-gradient(315deg, #e74c3c 25%, transparent 25%),
    #1f2937;
  background-size: 50px 50px;
  border-radius: 8px;
}
```

### Waves Pattern

```css
.waves {
  width: 300px;
  height: 200px;
  background:
    radial-gradient(ellipse 100% 20% at 50% 0%, #00a86b 100%, transparent 100%),
    radial-gradient(ellipse 100% 20% at 50% 25%, #34d399 100%, transparent 100%),
    radial-gradient(ellipse 100% 20% at 50% 50%, #6ee7b7 100%, transparent 100%),
    radial-gradient(ellipse 100% 20% at 50% 75%, #a7f3d0 100%, transparent 100%),
    #f0fdf4;
  border-radius: 8px;
}
```

## Weather Elements

### Clouds

```css
.clouds {
  width: 200px;
  height: 100px;
  background:
    /* Cloud 1 */
    radial-gradient(circle at 30% 60%, white 25%, transparent 25%),
    radial-gradient(circle at 50% 50%, white 30%, transparent 30%),
    radial-gradient(circle at 70% 60%, white 25%, transparent 25%),
    radial-gradient(ellipse 60% 25% at 50% 75%, white 100%, transparent 100%),
    /* Sky */
    #87ceeb;
}
```

### Rain

```css
.rain {
  width: 200px;
  height: 150px;
  background:
    /* Rain drops */
    repeating-linear-gradient(
      180deg,
      transparent 0px, transparent 10px,
      rgba(100,150,200,0.5) 10px, rgba(100,150,200,0.5) 15px,
      transparent 15px, transparent 30px
    ),
    /* Cloud */
    radial-gradient(ellipse 80% 30% at 50% 15%, #9ca3af 100%, transparent 100%),
    /* Dark sky */
    linear-gradient(to bottom, #4b5563, #6b7280);
  border-radius: 8px;
}
```

### Snow

```css
.snow {
  width: 200px;
  height: 150px;
  background:
    /* Snowflakes (dots) */
    radial-gradient(circle at 20% 30%, white 3px, transparent 3px),
    radial-gradient(circle at 50% 20%, white 2px, transparent 2px),
    radial-gradient(circle at 80% 40%, white 3px, transparent 3px),
    radial-gradient(circle at 30% 60%, white 2px, transparent 2px),
    radial-gradient(circle at 60% 70%, white 3px, transparent 3px),
    radial-gradient(circle at 90% 80%, white 2px, transparent 2px),
    radial-gradient(circle at 10% 85%, white 3px, transparent 3px),
    radial-gradient(circle at 45% 90%, white 2px, transparent 2px),
    /* Ground */
    linear-gradient(to bottom, transparent 85%, white 85%),
    /* Sky */
    linear-gradient(to bottom, #4a5568, #718096);
  border-radius: 8px;
}
```

## Simple Objects

### Coffee Cup

```css
.coffee-cup {
  width: 60px;
  height: 70px;
  background:
    /* Steam */
    radial-gradient(ellipse 30% 15% at 50% 5%, rgba(150,150,150,0.3) 100%, transparent 100%),
    /* Cup body */
    linear-gradient(to bottom,
      transparent 15%,
      white 15%, white 90%,
      transparent 90%
    ),
    /* Coffee */
    linear-gradient(to bottom,
      transparent 25%,
      #6f4e37 25%, #6f4e37 85%,
      transparent 85%
    );
  border-radius: 0 0 10px 10px;
  position: relative;
}

/* Handle using pseudo-element */
.coffee-cup::after {
  content: '';
  position: absolute;
  right: -15px;
  top: 25px;
  width: 15px;
  height: 25px;
  border: 4px solid white;
  border-left: none;
  border-radius: 0 10px 10px 0;
}
```

### Book

```css
.book {
  width: 80px;
  height: 100px;
  background:
    /* Pages (side) */
    linear-gradient(to right, #f5f5f0 90%, transparent 90%),
    /* Cover */
    #00a86b;
  border-radius: 0 5px 5px 0;
  box-shadow:
    -3px 0 0 #f5f5f0,
    -4px 0 0 #e5e5e0,
    -5px 0 0 #d5d5d0;
}
```

### Light Bulb

```css
.lightbulb {
  width: 50px;
  height: 70px;
  background:
    /* Glass bulb */
    radial-gradient(ellipse 100% 70% at 50% 30%, #fef3c7 90%, transparent 90%),
    /* Filament glow */
    radial-gradient(circle at 50% 35%, #fcd34d 10%, transparent 25%),
    /* Base */
    linear-gradient(to bottom,
      transparent 60%,
      #6b7280 60%, #6b7280 70%,
      #4b5563 70%, #4b5563 75%,
      #6b7280 75%, #6b7280 85%,
      #4b5563 85%, #4b5563 90%,
      #374151 90%
    );
  border-radius: 50% 50% 20% 20%;
}
```
