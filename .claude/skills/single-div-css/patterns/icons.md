# Icon Patterns

Common icons and symbols using single div technique.

## Document/File Icons

### Basic Document

```css
.document {
  width: 60px;
  height: 80px;
  background: #f5f5f5;
  border-radius: 2px 8px 2px 2px;
  box-shadow: inset 0 0 0 2px #ddd;
  position: relative;
}

.document::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  background:
    linear-gradient(135deg, #ddd 50%, #f5f5f5 50%);
}

.document::after {
  content: '';
  position: absolute;
  top: 25px;
  left: 10px;
  right: 10px;
  height: 40px;
  background:
    repeating-linear-gradient(
      to bottom,
      #ccc 0px, #ccc 2px,
      transparent 2px, transparent 8px
    );
}
```

### Folder

```css
.folder {
  width: 80px;
  height: 60px;
  background: #f0c14b;
  border-radius: 0 5px 5px 5px;
  position: relative;
}

.folder::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  width: 30px;
  height: 10px;
  background: #f0c14b;
  border-radius: 5px 5px 0 0;
}
```

## Checkmark & X

### Checkmark

```css
.checkmark {
  width: 50px;
  height: 50px;
  position: relative;
}

.checkmark::before {
  content: '';
  position: absolute;
  width: 15px;
  height: 30px;
  border-right: 4px solid #00a86b;
  border-bottom: 4px solid #00a86b;
  transform: rotate(45deg);
  top: 5px;
  left: 15px;
}

/* Circled checkmark */
.checkmark-circle {
  width: 50px;
  height: 50px;
  background: #00a86b;
  border-radius: 50%;
  position: relative;
}

.checkmark-circle::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 22px;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(45deg);
  top: 10px;
  left: 18px;
}
```

### X Mark

```css
.x-mark {
  width: 50px;
  height: 50px;
  position: relative;
}

.x-mark::before,
.x-mark::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 40px;
  background: #e74c3c;
  top: 5px;
  left: 23px;
}

.x-mark::before {
  transform: rotate(45deg);
}

.x-mark::after {
  transform: rotate(-45deg);
}
```

## Arrows & Chevrons

### Arrow Icons

```css
.arrow-icon-right {
  width: 40px;
  height: 40px;
  background:
    linear-gradient(45deg, transparent 65%, #1f2937 65%),
    linear-gradient(-45deg, transparent 65%, #1f2937 65%);
  background-size: 50% 50%;
  background-position: right center;
  background-repeat: no-repeat;
}

/* Circular arrow */
.arrow-circle {
  width: 50px;
  height: 50px;
  background: #00a86b;
  border-radius: 50%;
  position: relative;
}

.arrow-circle::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid white;
  top: 15px;
  left: 20px;
}
```

### Chevrons

```css
.chevron-right {
  width: 30px;
  height: 30px;
  border-right: 4px solid #1f2937;
  border-bottom: 4px solid #1f2937;
  transform: rotate(-45deg);
}

.chevron-down {
  width: 30px;
  height: 30px;
  border-right: 4px solid #1f2937;
  border-bottom: 4px solid #1f2937;
  transform: rotate(45deg);
}
```

## Menu & UI Icons

### Hamburger Menu

```css
.hamburger {
  width: 40px;
  height: 30px;
  background:
    linear-gradient(to bottom,
      #1f2937 0%, #1f2937 15%,
      transparent 15%, transparent 42%,
      #1f2937 42%, #1f2937 58%,
      transparent 58%, transparent 85%,
      #1f2937 85%, #1f2937 100%
    );
}
```

### Close (X) Button

```css
.close-btn {
  width: 40px;
  height: 40px;
  background:
    linear-gradient(45deg, transparent 45%, #1f2937 45%, #1f2937 55%, transparent 55%),
    linear-gradient(-45deg, transparent 45%, #1f2937 45%, #1f2937 55%, transparent 55%);
}
```

### Settings Gear

```css
.gear {
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, #1f2937 30%, transparent 30%);
  border-radius: 50%;
  position: relative;
}

.gear::before {
  content: '';
  position: absolute;
  inset: 5px;
  background:
    conic-gradient(
      from 0deg,
      #1f2937 0deg 30deg,
      transparent 30deg 60deg,
      #1f2937 60deg 90deg,
      transparent 90deg 120deg,
      #1f2937 120deg 150deg,
      transparent 150deg 180deg,
      #1f2937 180deg 210deg,
      transparent 210deg 240deg,
      #1f2937 240deg 270deg,
      transparent 270deg 300deg,
      #1f2937 300deg 330deg,
      transparent 330deg 360deg
    );
  border-radius: 50%;
}

.gear::after {
  content: '';
  position: absolute;
  inset: 20px;
  background: white;
  border-radius: 50%;
}
```

## Social Icons

### Speech Bubble

```css
.speech-bubble {
  width: 80px;
  height: 60px;
  background: #00a86b;
  border-radius: 20px;
  position: relative;
}

.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 20px solid #00a86b;
}
```

### Heart

```css
.heart-icon {
  width: 60px;
  height: 55px;
  background:
    radial-gradient(circle at 30% 35%, #e74c3c 30%, transparent 30%),
    radial-gradient(circle at 70% 35%, #e74c3c 30%, transparent 30%),
    linear-gradient(to bottom right, transparent 45%, #e74c3c 45%),
    linear-gradient(to bottom left, transparent 45%, #e74c3c 45%);
  background-size: 100% 50%, 100% 50%, 50% 50%, 50% 50%;
  background-position: 0 0, 0 0, 0 50%, 50% 50%;
  background-repeat: no-repeat;
}
```

### Bell (Notification)

```css
.bell {
  width: 50px;
  height: 60px;
  background:
    radial-gradient(circle at 50% 95%, #f0c14b 15%, transparent 15%),
    radial-gradient(ellipse 100% 120% at 50% 0%, #f0c14b 60%, transparent 60%);
  position: relative;
}

.bell::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: #f0c14b;
  border-radius: 50%;
}
```

## Status Indicators

### Loading Spinner

```css
.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent, #00a86b);
  animation: spin 1s linear infinite;
  position: relative;
}

.spinner::before {
  content: '';
  position: absolute;
  inset: 5px;
  background: white;
  border-radius: 50%;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Info/Warning/Error Badges

```css
/* Info */
.badge-info {
  width: 24px;
  height: 24px;
  background: #3b82f6;
  border-radius: 50%;
  position: relative;
}

.badge-info::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
}

.badge-info::after {
  content: '';
  position: absolute;
  top: 11px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 8px;
  background: white;
  border-radius: 1px;
}

/* Warning */
.badge-warning {
  width: 26px;
  height: 24px;
  background: #f59e0b;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  position: relative;
}

/* Error */
.badge-error {
  width: 24px;
  height: 24px;
  background: #e74c3c;
  border-radius: 50%;
}
```

## Media Controls

### Play Button

```css
.play {
  width: 60px;
  height: 60px;
  background: #00a86b;
  border-radius: 50%;
  position: relative;
}

.play::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 20px solid white;
}
```

### Pause Button

```css
.pause {
  width: 60px;
  height: 60px;
  background: #00a86b;
  border-radius: 50%;
  position: relative;
}

.pause::before,
.pause::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 24px;
  background: white;
  border-radius: 2px;
}

.pause::before { left: 20px; }
.pause::after { right: 20px; }
```
