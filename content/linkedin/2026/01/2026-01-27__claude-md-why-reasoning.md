---
title: "Add WHY to your AI instruction files"
type: linkedin-post
status: published
author: hoangle
created: 2026-01-20
updated: 2026-01-27
published_date: "2026-01-27T09:00:14.655Z"
post_url: "https://www.linkedin.com/feed/update/urn:li:share:7421839444405788673"

platform: linkedin
persona: tech-leader
theme: "Rules without reasoning create inconsistent AI judgment"
hook_type: observation
word_count: 180

topic_tags: [ai-coding, claude-code, ai-engineering, prompt-design]
hashtags: [aicoding, claudecode, aiengineering]

inspiration:
  source: "Umar Lateef post on Claude Code practices"
  url: "https://www.linkedin.com/posts/ulateef_a-claude-code-tutorial-just-hit-48m-views-activity-7417202957651259392-hc8s"
  insight: "CLAUDE.md files that list rules without reasoning create inconsistent judgment on edge cases"
---

## Post

Most people write AI rules as WHAT. They fail on edge cases.

Do this instead: Add WHY.

My team asked: "How do we download Confluence to local?" No WHY. Just HOW. Once locked into "download," they couldn't see other paths. Version control? Git-based docs? Never considered.

Same trap with AI instructions. Rules without reasoning become literal commands. The AI follows the letter, not the intent.

Here's one rule from my workspace:

→ Bad: "Ask for clarification when requests are unclear"
→ Good: "Ask, don't assume. When requests are unclear, ask for clarification. Never fill gaps with previous context, because assumptions create solutions to the wrong problems."

Same rule. Different reasoning. Different judgment.

The pattern: **What to do**, because **why it matters**.

Without the WHY, a rule is just text. With the WHY, AI understands the goal behind the constraint. It can make judgment calls you'd actually agree with.

This applies beyond CLAUDE.md. System prompts. Agent instructions. Any place you give AI constraints.

What's in your AI instruction files?

#aicoding #claudecode #aiengineering

## Notes

- Confluence story from real team interaction
- Example from actual CLAUDE.md rule (Ask, don't assume)
- Connects human thinking pattern to AI instruction design
- Could pair with before/after screenshot of CLAUDE.md rules
