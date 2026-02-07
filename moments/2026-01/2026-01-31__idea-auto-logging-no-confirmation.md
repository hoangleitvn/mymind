---
title: "Auto-logging without confirmation prompts"
type: idea
status: captured
created: 2026-01-31
source: linkedin-engagement
source_person: jiquan-ngiam
source_url: "https://jngiam.bearblog.dev/the-instruction-that-turns-claude-into-a-self-improving-system/"
project: mizemind
tags: [mizemind, auto-logging, context-engine, ux]
---

## The Idea

"Do NOT ask before logging" instruction changes Claude's behavior from friction-heavy to seamless capture.

Most systems add confirmation prompts:
- "Should I save this?"
- "What priority?"
- "Which category?"

Jiquan's approach: just log everything automatically. Tasks, notes, people, context. No questions.

## Why This Matters

Friction kills capture. Every prompt is a decision. Decisions drain energy.

Auto-logging with routing rules means:
- Capture happens in the background
- Organization follows patterns, not manual input
- Context compounds without user effort

## Mizemind Application

Current Mizemind skills could adopt this pattern:
- Moment capture without asking "should I save this?"
- Auto-route to correct folder based on content type
- People mentioned → auto-create/update person file
- Tasks mentioned → auto-add to relevant project

The compounding effect: each session builds on the last without manual overhead.

## Implementation Notes

Key instruction pattern:
> "When user mentions X → automatically do Y. Do NOT ask first."

Routing rules need to be explicit upfront to avoid edge cases.

## Source

Jiquan Ngiam's Bear Blog post and LinkedIn discussion about personal intelligence systems with Claude Code.
