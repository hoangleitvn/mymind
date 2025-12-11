---
description: Stage, commit, and optionally push changes using git-manager agent
---

# Commit Changes

Use the `git-manager` agent to analyze changes, stage files, and create a conventional commit following best practices.

## IMPORTANT: When to Use This Command

**Only invoke this command when the user explicitly requests a commit.**

Explicit commit requests include:
- "commit" or "commit this"
- "commit the changes"
- "/commit"
- "create a commit"
- "stage and commit"

**Do NOT invoke this command for:**
- General confirmations like "yes", "ok", "looks good"
- Approvals of plans or reviews
- Any ambiguous response

When in doubt, ask: "Would you like me to commit these changes?"

## What the Agent Does

- Scans for sensitive files (blocks commit if found)
- Analyzes changes to determine commit type and scope
- Stages relevant files intelligently
- Creates conventional commit with concise message
- **Only pushes to remote when explicitly asked** ("push", "commit and push")

## Commit Style

- Subject line only for most commits
- Optional 1-3 sentence body when needed
- No elaborate narratives
