# Basic Shapes

Fundamental geometric shapes as building blocks.

## Circle

```css
.circle {
  width: 100px;
  height: 100px;
  background: #00a86b;
  border-radius: 50%;
}

/* Outlined circle */
.circle-outline {
  width: 100px;
  height: 100px;
  background: transparent;
  border: 3px solid #00a86b;
  border-radius: 50%;
}

/* Gradient circle */
.circle-gradient {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #00a86b 0%, #064e3b 100%);
  border-radius: 50%;
}
```

## Square & Rectangle

```css
.square {
  width: 100px;
  height: 100px;
  background: #00a86b;
}

.rectangle {
  width: 150px;
  height: 80px;
  background: #00a86b;
}

/* Rounded */
.rounded-square {
  width: 100px;
  height: 100px;
  background: #00a86b;
  border-radius: 12px;
}
```

## Triangle

```css
/* Using clip-path */
.triangle-up {
  width: 100px;
  height: 100px;
  background: #00a86b;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.triangle-down {
  width: 100px;
  height: 100px;
  background: #00a86b;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
}

.triangle-right {
  width: 100px;
  height: 100px;
  background: #00a86b;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
}

/* Using borders (classic technique) */
.triangle-border {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 86px solid #00a86b;
}
```

## Pentagon & Hexagon

```css
.pentagon {
  width: 100px;
  height: 100px;
  background: #00a86b;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

.hexagon {
  width: 100px;
  height: 100px;
  background: #00a86b;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
```

## Star

```css
.star-5 {
  width: 100px;
  height: 100px;
  background: #00a86b;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.star-4 {
  width: 100px;
  height: 100px;
  background: #00a86b;
  clip-path: polygon(
    50% 0%,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0% 50%,
    40% 40%
  );
}
```

## Heart

```css
.heart {
  width: 100px;
  height: 90px;
  background: #e74c3c;
  position: relative;
  transform: rotate(-45deg);
  border-radius: 0 0 0 10px;
}

.heart::before,
.heart::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 90px;
  background: #e74c3c;
  border-radius: 50%;
}

.heart::before {
  top: -45px;
  left: 0;
}

.heart::after {
  left: 45px;
  top: 0;
}
```

## Pill/Capsule

```css
.pill {
  width: 150px;
  height: 50px;
  background: #00a86b;
  border-radius: 25px;
}

.pill-vertical {
  width: 50px;
  height: 150px;
  background: #00a86b;
  border-radius: 25px;
}
```

## Ring/Donut

```css
.ring {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle,
    transparent 40%,
    #00a86b 40%,
    #00a86b 50%,
    transparent 50%
  );
}

/* Using border */
.ring-border {
  width: 80px;
  height: 80px;
  border: 10px solid #00a86b;
  border-radius: 50%;
  background: transparent;
}
```

## Half Circle

```css
.half-circle-top {
  width: 100px;
  height: 50px;
  background: #00a86b;
  border-radius: 100px 100px 0 0;
}

.half-circle-bottom {
  width: 100px;
  height: 50px;
  background: #00a86b;
  border-radius: 0 0 100px 100px;
}

.half-circle-left {
  width: 50px;
  height: 100px;
  background: #00a86b;
  border-radius: 100px 0 0 100px;
}
```

## Oval/Ellipse

```css
.oval {
  width: 150px;
  height: 80px;
  background: #00a86b;
  border-radius: 50%;
}

/* Egg shape */
.egg {
  width: 80px;
  height: 110px;
  background: #00a86b;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
```

## Diamond

```css
.diamond {
  width: 100px;
  height: 100px;
  background: #00a86b;
  transform: rotate(45deg);
}

/* Using clip-path */
.diamond-clip {
  width: 100px;
  height: 100px;
  background: #00a86b;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```

## Cross/Plus

```css
.cross {
  width: 100px;
  height: 100px;
  background:
    linear-gradient(to right, transparent 40%, #00a86b 40%, #00a86b 60%, transparent 60%),
    linear-gradient(to bottom, transparent 40%, #00a86b 40%, #00a86b 60%, transparent 60%);
}

/* Using pseudo-elements */
.plus {
  width: 20px;
  height: 60px;
  background: #00a86b;
  position: relative;
}

.plus::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 20px;
  background: #00a86b;
  top: 20px;
  left: -20px;
}
```

## Arrow

```css
.arrow-right {
  width: 100px;
  height: 60px;
  background: #00a86b;
  clip-path: polygon(0% 20%, 70% 20%, 70% 0%, 100% 50%, 70% 100%, 70% 80%, 0% 80%);
}

.arrow-up {
  width: 60px;
  height: 100px;
  background: #00a86b;
  clip-path: polygon(50% 0%, 100% 30%, 80% 30%, 80% 100%, 20% 100%, 20% 30%, 0% 30%);
}
```

## Crescent Moon

```css
.crescent {
  width: 100px;
  height: 100px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 25px 10px 0 0 #f0d78c;
}
```

## Blob (Organic)

```css
.blob {
  width: 150px;
  height: 150px;
  background: #00a86b;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

.blob-2 {
  width: 150px;
  height: 150px;
  background: #00a86b;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
```
