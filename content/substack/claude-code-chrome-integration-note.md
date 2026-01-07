---
title: "Claude Code + Chrome = Browser Automation"
type: substack-note
status: draft
created: 2025-12-19
source: content/linkedin/2025/12/2025-12-19__claude-code-chrome-integration.md
---

Claude can now control Chrome. This is what I've been waiting for.

I've been building workflows with Claude Code for content writing, engineering, designing. But browser interaction was always the gap.

Now? That gap is gone.

This morning I had Claude fetch performance metrics for all my LinkedIn posts this week. It navigated to each analytics page, grabbed the stats, and saved them to my workspace.

Previously I would have needed to build a custom integration or do it manually.

What this unlocks:
• Schedule posts directly—no custom MCP server needed
• Fetch analytics automatically
• Send Claude to ChatGPT/Gemini for specific tasks, return with results
• Capture web content into your workspace

How it works: Claude Code connects to a Chrome extension via MCP that exposes browser actions as tools.

Caveats: Still in beta. Keep interactions slow (human-like pace). Adds ~14k tokens to context.

To try it: Run `claude --chrome`

What browser workflow would you automate first?
