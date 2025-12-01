---
title: "Three Questions Before Optimizing Anything"
type: linkedin-post
status: draft
created: 2025-11-20
topic: premature-optimization
theme: engineering-leadership
persona: cto
audiences: [CTOs, VPs Engineering, technical leaders]
key_message: Optimize after validation to avoid expensive rework debt
hook_type: story
target_hashtags: [EngineeringLeadership, TechStrategy, SoftwareEngineering]
optimal_post_time: Tuesday-Thursday, 8-10am
word_count: 312
---

Last week: 3 hours optimizing 25 documentation files.
Yesterday: Restructured file system.
Result: Redid all optimization work.

Optimization without validation = expensive busywork.

Three questions before optimizing anything:

1. Is this solving a user problem?

❌ "See Also sections might use too many tokens"
✅ "Users confused about file paths"

Token savings: theoretical.
Path confusion: real.

2. Have we validated the current design?

Still discovering:
• Implementation mismatches
• Hardcoded examples
• Architecture gaps

Optimizing unvalidated design = optimizing wrong thing.

3. What breaks if we optimize now?

Restructuring workspace paths
100 files touched
Optimization created maintenance debt.

Pattern repeats across contexts:

• Founders optimize pricing before product-market fit
• Teams build scalability before workflow validation
• Engineers micro-optimize code before rewrite

Cost: wasted time + rework debt.

What Works

Build → Use → Optimize

1. Build: Get it working
2. Use: Find real problems (not theoretical ones)
3. Optimize: Fix what actually hurts

Optimization costs twice:
• Once when premature
• Again when undoing after restructure

Ask three questions first.
Avoid rework.

What are you optimizing that might be premature?

#EngineeringLeadership #TechStrategy #SoftwareEngineering