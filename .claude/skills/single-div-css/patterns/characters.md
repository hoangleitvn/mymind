# Character Patterns

Stylized human figures, animals, and avatars.

## Human Figures

### Minimalist Person (Stick Figure Style)

```css
.person-minimal {
  width: 60px;
  height: 120px;
  position: relative;
}

/* Head */
.person-minimal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: #1f2937;
  border-radius: 50%;
}

/* Body, arms, legs */
.person-minimal::after {
  content: '';
  position: absolute;
  top: 35px;
  left: 0;
  width: 60px;
  height: 85px;
  background:
    /* Torso */
    linear-gradient(to right, transparent 45%, #1f2937 45%, #1f2937 55%, transparent 55%),
    /* Arms */
    linear-gradient(to bottom, transparent 10%, #1f2937 10%, #1f2937 15%, transparent 15%),
    /* Legs */
    linear-gradient(to right,
      transparent 30%, #1f2937 30%, #1f2937 35%, transparent 35%,
      transparent 65%, #1f2937 65%, #1f2937 70%, transparent 70%
    );
  background-size: 100% 60%, 100% 100%, 100% 40%;
  background-position: 0 0, 0 0, 0 100%;
  background-repeat: no-repeat;
}
```

### Business Person (Silhouette)

```css
.person-business {
  width: 80px;
  height: 150px;
  background:
    /* Head */
    radial-gradient(circle at 50% 12%, #1f2937 12%, transparent 12%),
    /* Shoulders & torso */
    radial-gradient(ellipse 60% 30% at 50% 35%, #1f2937 100%, transparent 100%),
    /* Body/suit */
    linear-gradient(to bottom,
      transparent 30%,
      #1f2937 30%, #1f2937 70%,
      transparent 70%
    ),
    /* Legs */
    linear-gradient(to right,
      transparent 30%, #1f2937 30%, #1f2937 45%, transparent 45%,
      transparent 55%, #1f2937 55%, #1f2937 70%, transparent 70%
    );
  background-size: 100% 100%, 100% 100%, 50% 100%, 100% 30%;
  background-position: 0 0, 0 0, 25% 0, 0 100%;
  background-repeat: no-repeat;
}
```

### Group of People

```css
.people-group {
  width: 150px;
  height: 100px;
  background:
    /* Person 1 (front, center) */
    radial-gradient(circle at 50% 25%, #00a86b 15%, transparent 15%),
    radial-gradient(ellipse 25% 35% at 50% 65%, #00a86b 100%, transparent 100%),
    /* Person 2 (back left) */
    radial-gradient(circle at 25% 20%, #3b82f6 12%, transparent 12%),
    radial-gradient(ellipse 20% 30% at 25% 55%, #3b82f6 100%, transparent 100%),
    /* Person 3 (back right) */
    radial-gradient(circle at 75% 20%, #f59e0b 12%, transparent 12%),
    radial-gradient(ellipse 20% 30% at 75% 55%, #f59e0b 100%, transparent 100%);
}
```

## Avatars

### Circle Avatar Placeholder

```css
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background:
    /* Head */
    radial-gradient(circle at 50% 35%, #6b7280 25%, transparent 25%),
    /* Shoulders */
    radial-gradient(ellipse 50% 40% at 50% 85%, #6b7280 100%, transparent 100%),
    /* Background */
    #e5e7eb;
}

/* With status indicator */
.avatar-status {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background:
    /* Status dot */
    radial-gradient(circle at 85% 85%, #00a86b 8px, transparent 8px),
    /* Head */
    radial-gradient(circle at 50% 35%, #6b7280 25%, transparent 25%),
    /* Shoulders */
    radial-gradient(ellipse 50% 40% at 50% 85%, #6b7280 100%, transparent 100%),
    /* Background */
    #e5e7eb;
}
```

### Initial Avatar

```css
.avatar-initial {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00a86b, #34d399);
  /* Letter would be added via HTML/content */
}
```

## Hand Gestures

### Pointing Hand

```css
.hand-point {
  width: 80px;
  height: 60px;
  background:
    /* Pointing finger */
    linear-gradient(to right,
      transparent 20%, #fcd5b5 20%, #fcd5b5 100%
    ),
    /* Palm */
    radial-gradient(ellipse 40% 60% at 20% 50%, #fcd5b5 100%, transparent 100%);
  background-size: 80% 20%, 100% 100%;
  background-position: 20% 20%, 0 0;
  background-repeat: no-repeat;
  border-radius: 0 10px 10px 0;
}
```

### Thumbs Up

```css
.thumbs-up {
  width: 50px;
  height: 70px;
  position: relative;
}

.thumbs-up::before {
  /* Thumb */
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 40px;
  background: #fcd5b5;
  border-radius: 10px 10px 5px 5px;
}

.thumbs-up::after {
  /* Fist */
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 30px;
  background: #fcd5b5;
  border-radius: 8px;
}
```

## Animals

### Simple Bird

```css
.bird {
  width: 60px;
  height: 40px;
  background:
    /* Body */
    radial-gradient(ellipse 70% 80% at 40% 50%, #1f2937 100%, transparent 100%),
    /* Head */
    radial-gradient(circle at 75% 40%, #1f2937 20%, transparent 20%),
    /* Beak */
    linear-gradient(135deg, transparent 45%, #f59e0b 45%, #f59e0b 55%, transparent 55%);
  background-size: 100% 100%, 100% 100%, 20% 20%;
  background-position: 0 0, 0 0, 90% 35%;
  background-repeat: no-repeat;
}
```

### Cat Face

```css
.cat {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background:
    /* Ears */
    linear-gradient(135deg, #f59e0b 15%, transparent 15%),
    linear-gradient(225deg, #f59e0b 15%, transparent 15%),
    /* Eyes */
    radial-gradient(circle at 35% 45%, #1f2937 8%, transparent 8%),
    radial-gradient(circle at 65% 45%, #1f2937 8%, transparent 8%),
    /* Nose */
    radial-gradient(circle at 50% 60%, #ff69b4 5%, transparent 5%),
    /* Face */
    radial-gradient(circle, #f59e0b 50%, transparent 50%);
}
```

### Dog Face

```css
.dog {
  width: 80px;
  height: 90px;
  background:
    /* Ears (floppy) */
    radial-gradient(ellipse 25% 40% at 15% 30%, #8b4513 100%, transparent 100%),
    radial-gradient(ellipse 25% 40% at 85% 30%, #8b4513 100%, transparent 100%),
    /* Face */
    radial-gradient(ellipse 45% 50% at 50% 50%, #d2691e 100%, transparent 100%),
    /* Eyes */
    radial-gradient(circle at 35% 40%, #1f2937 8%, transparent 8%),
    radial-gradient(circle at 65% 40%, #1f2937 8%, transparent 8%),
    /* Nose */
    radial-gradient(ellipse 12% 10% at 50% 55%, #1f2937 100%, transparent 100%),
    /* Snout */
    radial-gradient(ellipse 25% 20% at 50% 65%, #fcd5b5 100%, transparent 100%);
}
```

### Fish

```css
.fish {
  width: 80px;
  height: 40px;
  background:
    /* Body */
    radial-gradient(ellipse 60% 100% at 35% 50%, #3b82f6 100%, transparent 100%),
    /* Tail */
    linear-gradient(150deg, transparent 40%, #3b82f6 40%, #3b82f6 60%, transparent 60%),
    linear-gradient(210deg, transparent 40%, #3b82f6 40%, #3b82f6 60%, transparent 60%),
    /* Eye */
    radial-gradient(circle at 25% 45%, white 6%, transparent 6%),
    radial-gradient(circle at 25% 45%, #1f2937 3%, transparent 3%);
  background-size: 100% 100%, 30% 50%, 30% 50%, 100% 100%, 100% 100%;
  background-position: 0 0, 100% 0, 100% 50%, 0 0, 0 0;
  background-repeat: no-repeat;
}
```

## Emoji-Style Faces

### Happy Face

```css
.face-happy {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background:
    /* Eyes */
    radial-gradient(circle at 35% 40%, #1f2937 8%, transparent 8%),
    radial-gradient(circle at 65% 40%, #1f2937 8%, transparent 8%),
    /* Smile */
    radial-gradient(ellipse 30% 20% at 50% 65%, transparent 50%, #1f2937 50%, #1f2937 60%, transparent 60%),
    /* Face */
    #fcd34d;
}
```

### Thinking Face

```css
.face-thinking {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background:
    /* Raised eyebrow */
    radial-gradient(ellipse 15% 8% at 35% 35%, #1f2937 100%, transparent 100%),
    /* Eyes */
    radial-gradient(circle at 35% 42%, #1f2937 6%, transparent 6%),
    radial-gradient(circle at 65% 45%, #1f2937 6%, transparent 6%),
    /* Mouth (straight) */
    linear-gradient(to bottom, transparent 65%, #1f2937 65%, #1f2937 68%, transparent 68%),
    /* Hand on chin */
    radial-gradient(circle at 70% 75%, #fcd5b5 12%, transparent 12%),
    /* Face */
    #fcd34d;
  background-size: 100% 100%, 100% 100%, 100% 100%, 30% 100%, 100% 100%, 100% 100%;
  background-position: 0 0, 0 0, 0 0, 35% 0, 0 0, 0 0;
  background-repeat: no-repeat;
}
```

### Robot Face

```css
.face-robot {
  width: 70px;
  height: 80px;
  background:
    /* Antenna */
    radial-gradient(circle at 50% 5%, #6b7280 5%, transparent 5%),
    linear-gradient(to right, transparent 48%, #6b7280 48%, #6b7280 52%, transparent 52%),
    /* Eyes (LED style) */
    radial-gradient(circle at 30% 45%, #00ff00 12%, transparent 12%),
    radial-gradient(circle at 70% 45%, #00ff00 12%, transparent 12%),
    /* Mouth (grid) */
    repeating-linear-gradient(to right, #1f2937 0px, #1f2937 5px, #6b7280 5px, #6b7280 10px),
    /* Face */
    #9ca3af;
  background-size: 100% 100%, 100% 15%, 100% 100%, 100% 100%, 60% 15%, 100% 100%;
  background-position: 0 0, 0 0, 0 0, 0 0, 20% 70%, 0 0;
  background-repeat: no-repeat;
  border-radius: 10px;
}
```
