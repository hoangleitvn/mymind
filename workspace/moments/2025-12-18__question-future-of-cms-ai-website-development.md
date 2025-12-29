---
id: 20251218-110000
type: question
status: raw
themes: [web-development, ai-tools, architecture, mizestack]
tags: [cms, jamstack, headless-cms, cursor, nextjs, markdown, ai-agents]
captured: 2025-12-18T11:00:00+07:00
triggered_by: Lee Robinson's cursor.com migration thread
---

# Future of CMS: AI + Markdown vs. Traditional CMS

## Raw Capture

Lee Robinson (ex-Vercel, now Cursor) migrated cursor.com from CMS (Sanity) to raw Markdown + AI. Completed in 3 days with $260 in tokens instead of estimated weeks. This raises questions about the future of CMS in website development.

## Source

- [Lee Robinson's X thread](https://x.com/leerob/status/1999513884382597485)
- [Sanity's response](https://www.sanity.io/blog/you-should-never-build-a-cms)

## What Lee Robinson Did

**Before:** Next.js + Sanity CMS
**After:** Raw code + Markdown files + AI (Cursor agents)

**Migration stats:**
- Estimated time: A few weeks
- Actual time: 3 days
- Cost: $260 in AI tokens
- Method: Hundreds of agent runs

**Process:**
1. Created migration plan with Claude Opus 4.5
2. Scripts to export CMS content via API
3. Convert to markdown files in repo
4. Upload assets to object storage
5. 80% done in ~10 agent runs
6. Last 20% took most of the time (as usual in engineering)

## Why They Ditched the CMS

**The problem:**
- Beautiful new design, but harder to ship content
- CMS added abstraction layer between developer and code
- Couldn't just "@cursor modify this" — had to click through UI menus
- CDN costs: $56,848 since September launch (excessive for a website)

**Key insight from Lee:**
> "With AI and coding agents, the cost of an abstraction has never been higher."

## Questions This Raises

### 1. Is CMS Dead?
Not necessarily. The question is: **for whom?**

| Use Case | CMS Still Needed? |
|----------|-------------------|
| Solo developer / small team with AI tools | Maybe not |
| Non-technical content editors | Yes |
| Enterprise with access control, workflows | Yes |
| Marketing teams publishing daily | Depends |

### 2. What CMS Actually Provides

Beyond content editing, enterprise CMS handles:
- **Access control** — who can edit what
- **Workflows** — draft → review → publish
- **Audit trails** — who changed what, when
- **Scheduling** — publish at specific times
- **Localization** — multi-language management
- **Asset management** — images, videos, documents
- **Preview** — see changes before publish

**Question:** If we remove CMS, how do we handle these in a markdown/git workflow?

### 3. Git-Based CMS as Middle Ground?

Some tools bridge markdown + CMS features:
- **Netlify CMS / Decap CMS** — Git-backed, UI for editors
- **Forestry / Tina CMS** — Visual editing for static sites
- **Contentlayer** — Type-safe content from markdown

This keeps content in repo (AI can edit) while providing UI for non-devs.

## My Context

- Prefer JamStack (Headless CMS + Static Site Generator)
- Dislike traditional CMS (WordPress, Drupal)
- Already use markdown for content (Mizemind workspace)
- Building tools with AI assistance (Cursor, Claude Code)

## Implications for Mizestack / Future Work

**If building a marketing site or docs:**
- Consider markdown-first approach
- Use AI to manage content at code level
- Git provides versioning, PRs provide review workflow
- CI/CD provides preview deployments

**If building for clients with non-technical teams:**
- Headless CMS still valuable
- But maybe lighter options (Notion as CMS, Airtable, etc.)
- Or git-based CMS for best of both

**Content types that still need CMS:**
- User-generated content (comments, profiles)
- Dynamic content (e-commerce products, inventory)
- High-volume publishing (news sites)

## Potential Content Ideas

- "The Real Cost of CMS Abstraction in the AI Era"
- "When Markdown + Git Beats Your Headless CMS"
- "Enterprise Content Without Enterprise CMS"
- "JamStack in 2025: What Changed"

## Follow-up

- [ ] Review how cursor.com is structured now (GitHub repo if public)
- [ ] Research git-based CMS options (Tina, Decap, Contentlayer)
- [ ] Consider implications for client projects
- [ ] Write a post: practitioner perspective on CMS vs. markdown+AI

## Sources

- [Lee Robinson X Thread](https://x.com/leerob/status/1999513884382597485)
- [Sanity Blog Response](https://www.sanity.io/blog/you-should-never-build-a-cms)
- [Cosmic CMS Perspective](https://www.cosmicjs.com/blog/cms-debate-cosmic-ai-powered-development)
