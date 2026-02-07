```md
## What “AI frontend overuse font-name pattern” usually means

Most AI-generated React or Next.js apps converge on the same starter stacks. That includes identical font choices and identical `font-family` patterns, because models copy what appears most often in popular templates.

Typography becomes one of the fastest signals that an app was AI-scaffolded.

---

## The 3 most common font patterns

### 1. Tailwind default sans stack
- Heavy use of `font-sans`
- Maps to Tailwind’s default `--font-sans`
- Typically resolves to a system-ui based stack

**Symptom:** Looks fine but indistinguishable from thousands of other apps.

---

### 2. “Inter everywhere”
- Copied from Tailwind UI, shadcn, and many SaaS starters
- Often loaded without a real type system
- Used as a drop-in replacement instead of a design decision

**Symptom:** Clean but generic. No brand signal.

---

### 3. Next.js + Vercel “Geist” everywhere (newer)
- Comes from official Next.js and Vercel templates
- Loaded via `next/font`
- Increasingly dominant in AI-generated Next apps

**Symptom:** Modern look, but strong “Vercel-template smell”.

---

## Common fonts you keep seeing in AI-generated apps

- Inter  
- Geist Sans / Geist Mono  
- system-ui / ui-sans-serif stacks  

These appear repeatedly because they dominate public examples and starter repos.

---

## Issues this creates in AI-generated apps

### 1. Brand sameness
Typography is a primary brand lever. When font choice and scale are copied from the same few starters, products converge visually.

Result: different products. same feel.

---

### 2. Broken fallback behavior
A common AI mistake:
- Overriding `--font-sans` with a single font name
- Accidentally removing the fallback chain

Result:
- Serif fallback flashes
- Inconsistent rendering across browsers
- Increased CLS

---

### 3. No real typography system
Many UI kits do not ship opinionated typography.
AI-generated apps often end up with:
- Random font sizes
- Weak hierarchy
- Inconsistent line-height
- No rhythm or scale

Result: UI feels noisy and unintentional.

---

### 4. Performance and privacy footguns
AI frequently:
- Loads fonts from Google Fonts or CDNs by default
- Skips self-hosting
- Ignores preload and font-display strategy

Result:
- Slower first paint
- Higher CLS
- Extra external requests

---

### 5. Weight and variable-font misuse
Common problems:
- Declaring weights that are not actually loaded
- Loading too many weights “just in case”
- Mixing static and variable font usage incorrectly

Result:
- Bloated payloads
- Inconsistent text rendering

---

### 6. Accessibility regressions
Typography-related accessibility issues:
- Low contrast text
- Small base font size
- Tight line-height
- Poor emphasis hierarchy

These issues reduce readability long before anyone notices “design”.

---

### 7. i18n and Unicode gaps
AI-generated stacks often forget:
- Robust fallback fonts
- Proper Unicode coverage

For Vietnamese and mixed-language UIs, this causes:
- Broken diacritics
- Inconsistent glyphs across OS and browsers

---

## What to do instead

### 1. Choose typography intentionally
- Pick a brand sans font
- Pick a mono font if needed
- Treat typography as a product decision

---

### 2. Preserve full fallback chains
Never replace a font stack with a single name.
Always keep:
- Primary font
- System fallback
- Platform-specific fallbacks

---

### 3. Self-host and optimize fonts
- Use framework-native font loaders
- Avoid third-party CDNs
- Reduce layout shift and external dependencies

---

### 4. Define a real type scale
Lock down:
- Font sizes
- Line heights
- Letter spacing
- Usage rules

Enforce via:
- Design tokens
- Utility conventions
- Component primitives

---

## Bottom line

AI does not create bad typography.

It **copies average typography at scale**.

Without intentional constraints, AI-generated frontends drift toward:
- The same fonts
- The same hierarchy
- The same look

Typography discipline is now a differentiation skill.
```
