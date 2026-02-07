# Builds That Last - Website

Static HTML/CSS brand website for BTL publication. No build step required.

## Quick Start

Open `index.html` in your browser:

```bash
open index.html
```

Or serve locally:

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## File Structure

```
website/
├── index.html          # Main landing page
├── blogs.html          # Blog listing page
├── blog/               # Individual blog posts
│   ├── why-foundation-comes-before-speed.html
│   └── the-speed-trap.html
├── css/
│   ├── variables.css   # Design tokens (colors, typography, spacing)
│   ├── base.css        # Reset, typography, base styles
│   ├── components.css  # Buttons, cards, accent bar, waterline
│   └── sections.css    # Section-specific layouts
├── js/
│   └── theme.js        # Dark/light theme toggle
├── assets/
│   └── logos/          # SVG logo files (if needed)
└── README.md           # This file
```

## Features

- **Responsive**: Desktop (1024px+), Tablet (768-1023px), Mobile (<768px)
- **Dark/Light Theme**: Toggle with button or press `t` key
- **Accessible**: Semantic HTML, focus states, skip links, WCAG compliant
- **No Dependencies**: Pure HTML/CSS/JS, no build tools required

## Pages

### Home (index.html)
1. **Hero**: Brand tagline with iceberg mark
2. **About**: Mission and background
3. **Philosophy**: Five core principles
4. **Manifesto**: Featured article card
5. **Subscribe**: Newsletter CTA
6. **Footer**: Navigation and social links

### Blog (blogs.html)
- Blog listing with card grid
- Tag-based categorization
- Subscribe CTA

### Blog Posts (blog/*.html)
- Full article layout with breadcrumb
- Author box
- Previous/Next navigation
- Related articles

## Deployment

### GitHub Pages

1. Push this folder to a GitHub repository
2. Go to Settings > Pages
3. Set source to main branch
4. Site will be live at `https://username.github.io/repo-name`

### Vercel/Netlify

1. Connect your repository
2. Set root directory to `foundation/brands/btl/website`
3. No build command needed
4. Deploy

### Custom Server

Copy all files to your web server's public directory.

## Design System

This website implements the BTL design system:

- **Colors**: Jade Green (#00a86b) + Charcoal (#1f2937)
- **Typography**: IBM Plex Sans (headings), Public Sans (body), JetBrains Mono (code)
- **Spacing**: 8px grid system
- **Signature Elements**: Accent bar (4px jade), waterline divider (dashed 4-3 pattern)
- **Reading Width**: 75ch for body text

See `../../design-system.md` for full specifications.
See `../../design-philosophy/` for principles, guidelines, and rules.

## Customization

### Colors

Edit `css/variables.css` to change brand colors:

```css
:root {
  --btl-jade: #00a86b;
  --btl-charcoal: #1f2937;
}
```

### Content

Edit `index.html` directly to update:
- Hero tagline and subtitle
- About section text
- Philosophy principles
- Manifesto excerpt and quote
- Footer links

### Adding New Blog Posts

1. Copy an existing post from `blog/` as a template
2. Update the content, title, date, and meta tags
3. Add a card to `blogs.html` linking to the new post
4. Update previous/next navigation in adjacent posts

### Theme Persistence

Theme preference is saved to `localStorage` as `btl-theme`.
