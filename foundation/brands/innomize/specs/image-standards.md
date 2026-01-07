# INNOMIZE Image Standards

Standard specifications for all visual assets across INNOMIZE content.

## Blog Article Images

### In-Article Visuals

| Property | Value |
|----------|-------|
| **Dimensions** | 1200 x 675 px |
| **Aspect Ratio** | 16:9 |
| **Export Quality** | 3x (3600 x 2025 px) |
| **Format** | PNG |
| **Max File Size** | 200KB |

**Why 1200 x 675:**
- 1200px width meets Google's minimum for featured images
- 16:9 ratio is universally compatible (YouTube, presentations, social)
- Consistent sizing creates professional, cohesive article layout
- At 3x export, supports retina/high-density displays

### Cover Images (Blog/Article)

| Property | Value |
|----------|-------|
| **Dimensions** | 1920 x 1080 px |
| **Aspect Ratio** | 16:9 |
| **Export Quality** | 3x (5760 x 3240 px) |
| **Format** | PNG |

### Social Sharing (Open Graph)

| Property | Value |
|----------|-------|
| **Dimensions** | 1200 x 630 px |
| **Aspect Ratio** | 1.91:1 |
| **Export Quality** | 2x (2400 x 1260 px) |
| **Format** | PNG or JPG |

**Why 1200 x 630:**
- Universal format for Facebook, LinkedIn, Twitter/X
- Meets all platform requirements without cropping

## Technical Guidelines

### File Naming
- Use descriptive, kebab-case names
- Include topic keywords
- Example: `ai-adoption-visual-1-framework-flow.png`

### Optimization
- Compress PNG files using tools like TinyPNG
- Target under 200KB for in-article images
- Use WebP format where supported for smaller file sizes

### Export Workflow
1. Create HTML template following brand standards
2. Use Puppeteer with `deviceScaleFactor: 3` for 3x quality
3. Screenshot the `#visual` or `#cover` element
4. Compress final PNG if over 200KB

## Brand Elements

### Colors
- **Primary Red:** #EA322A
- **Light Red Backgrounds:** #FFE8E8, #FFD6D6, #FFF0F0
- **Text Dark:** #1A1A1A
- **Text Gray:** #666666
- **Border Light:** #F0F0F0, #F5F5F5

### Typography

**Font Families:**
- **Headlines:** Bai Jamjuree (700 weight)
- **Body:** Manrope (400, 500, 600, 700 weights)

**Type Scale for Infographics (Perfect Fourth - 1.33 ratio):**

Optimized for standalone graphics viewed on screens. Larger than web typography for visual impact and readability at various sizes.

| Level | Size | Use Case | Font |
|-------|------|----------|------|
| **xs** | 14px | Captions, labels, examples | Manrope 500 |
| **sm** | 16px | Descriptions, secondary text | Manrope 400 |
| **base** | 18px | Body text, card content | Manrope 400/500 |
| **lg** | 24px | Card titles, subheadings | Manrope 600/700 |
| **xl** | 32px | Section headings | Bai Jamjuree 700 |
| **2xl** | 42px | Major headings | Bai Jamjuree 700 |
| **3xl** | 56px | Hero titles | Bai Jamjuree 700 |

**Why Perfect Fourth (1.33) for Infographics:**
- Larger base size (18px vs 16px) for standalone graphics
- More dramatic contrast creates visual hierarchy at a glance
- Optimized for quick scanning, not long-form reading
- Minimum 14px ensures readability on mobile devices

**Reference:** Infographic best practices recommend 18-24pt for headings, 14-18pt for subheadings, 10-14pt for body text.

**CSS Variables:**
```css
--font-xs: 14px;
--font-sm: 16px;
--font-base: 18px;
--font-lg: 24px;
--font-xl: 32px;
--font-2xl: 42px;
--font-3xl: 56px;
```

### Visual Style
- White background (#FFFFFF)
- Soft decorative blobs with gradient fills
- Rounded corners (12-20px radius)
- Subtle shadows (rgba(0,0,0,0.06-0.08))
- Red accent on first/primary element

## References

- [Google Images Best Practices](https://developers.google.com/search/docs/appearance/google-images)
- [Website Image Size Guide 2025](https://tiny-img.com/blog/best-image-size-for-website/)
- [ShortPixel Best Image Size](https://shortpixel.com/blog/best-image-size/)
