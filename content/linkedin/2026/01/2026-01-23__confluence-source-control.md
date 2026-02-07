---
title: "Built a CLI Tool to Manage Confluence Like Code"
type: linkedin-post
status: published
created: 2026-01-23
published_date: "2026-01-23T07:30:37.232Z"
post_url: "https://www.linkedin.com/feed/update/urn:li:activity:7420367338396573696/"
theme: practical-engineering
persona: founder
audiences: [technical-founders, engineering-managers, tech-leads]
key_message: "Treating documentation infrastructure like code unlocks AI assistance and version control benefits"
hook_type: curiosity-gap
target_hashtags: [EngineeringLeadership, DeveloperProductivity, Confluence, Automation]
optimal_post_time: Tuesday, 9am
word_count: 480
---

I moved Confluence to source control.
Now Claude writes my documentation.

We run multiple projects at INNOMIZE. Each one needs a Confluence space. Same structure: Product docs, Project info, Team onboarding, Meetings, Operations, Quality, Releases.

50+ pages. Same structure. Every project. Manual setup each time.

Here's the thing about Confluence: it has AI features now. But they feel disconnected from how I actually work. I'm in my code editor with Claude Code as my pair programmer. Switching to Confluence's web UI breaks the flow.

So I asked: What if Confluence pages lived in source control?

The results:

→ 2 hours to build the CLI tool
→ 2 hours to create 30 template pages (with Claude's help)
→ 3 hours to generate 20+ project pages from existing docs, designs, and source code

One command now creates or syncs an entire space:

confluence create --name "Project Name" --key "PROJ"

When templates are code, Claude can help build them. "Add a customer segment template." Done. "Update navigation to use dynamic macros." Done.

The AI assistance I wanted from Confluence, I got by treating docs as code.

But here's the part that matters most: clear guidelines on what goes where.

In Codebase (version controlled, lives with code):
→ Technical architecture docs
→ API documentation
→ ADRs (Architecture Decision Records)
→ README and setup guides
→ Code comments and inline docs

In Confluence (collaborative, business-facing):
→ Product overview and roadmaps
→ Project charter and stakeholders
→ Team onboarding and access guides
→ Meeting notes and decisions
→ Operations runbooks
→ Release notes

The rule: If it changes with the code, keep it with the code. If it's for humans to collaborate on, put it in Confluence.

Templates in source control. Content guidelines in Confluence. AI assistance everywhere.

Three insights from building this:

First, documentation infrastructure is still infrastructure. It deserves the same treatment as your CI/CD pipeline.

Second, AI tools work better when your content is in formats they can access. Web UIs are islands. Source control is a bridge.

Third, clarity on "what goes where" matters more than the tool itself. Without guidelines, docs scatter everywhere.

What's your approach to managing docs across code and Confluence?

---

Enjoy this? ♻️ Repost it to your network and follow me for more.

Want to build software that lasts?

Join Builds That Last on Substack for practical insights on foundation-first engineering.

