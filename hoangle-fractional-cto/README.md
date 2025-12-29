# Hoang Le - Fractional CTO Website

A modern, conversion-optimized personal website for Hoang Le as a Fractional CTO for Founders.

## Quick Start

Open `index.html` in a browser to preview locally.

## Deployment to Vercel/Netlify

### Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. No build settings needed (static HTML)
4. Deploy

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) and import the repository
3. Build command: leave empty
4. Publish directory: `/` or `.`
5. Deploy

## Configuration

### Calendly Integration

1. Get your Calendly embed URL
2. In `index.html`, find the commented Calendly section near the end
3. Uncomment and replace `your-link` with your actual Calendly URL:

```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/YOUR-LINK?hide_gdpr_banner=1&background_color=111827&text_color=f9fafb&primary_color=00a86b">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### Custom Domain

After deploying to Vercel/Netlify:
1. Go to project settings
2. Add your custom domain
3. Follow DNS configuration steps

### Analytics

Add Plausible or Fathom analytics by inserting script before `</head>`:

```html
<!-- Plausible -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## Images

Replace placeholder images:
- `assets/images/hoang-le-photo.jpg` - Professional headshot (400x400 minimum)
- `assets/images/og-image.png` - Open Graph image (1200x630 recommended)

## File Structure

```
hoangle-fractional-cto/
├── index.html           # Main page
├── css/
│   ├── variables.css    # Design tokens
│   └── styles.css       # All styles
├── assets/
│   ├── images/          # Photos and graphics
│   └── favicon/         # Favicon files
├── js/
│   └── main.js          # Mobile nav, smooth scroll
└── README.md
```

## Tech Stack

- Pure HTML/CSS (no build tools)
- Inter + Poppins fonts (Google Fonts)
- Mobile-first responsive design
- Dark mode theme

## Performance

- No JavaScript frameworks
- Optimized CSS (single file)
- System font fallbacks
- Target: 90+ Lighthouse score
