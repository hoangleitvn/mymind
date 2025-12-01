---
title: "Rebuild or Refactor? Wrong Question."
type: linkedin-post
status: ready
created: 2024-11-24
updated: 2025-12-01
topic: technical-strategy
theme: founder-mindset-decision-making
persona: founder
audiences: [Technical Founders, CTOs, VPs Engineering, Technical Leaders]
key_message: "The rebuild vs refactor decision depends on stage, not code quality"
hook_type: reframe
target_hashtags: [Founders, ProductDevelopment, TechLeadership]
optimal_post_time: Tuesday-Thursday, 8-10am
scheduled_date: 2025-12-04
word_count: 220
---

"Should we rebuild or refactor?"

Wrong question.

Right question: "What stage are we at?"

Pre-product-market-fit: Ship for present.
Post-product-market-fit: Design for future.

I've seen both mistakes:

Mistake 1: Over-engineering before PMF
Team spent 3 months on scalable architecture. Product didn't solve the right problem. Architecture scaled to zero users.

Mistake 2: Under-engineering after PMF
Team found PMF, users grew 10x. Codebase couldn't handle it. Spent 6 months rebuilding while competitors caught up.

The framework I use:

Pre-PMF questions:
→ Does this help us validate faster?
→ Can we ship this week instead of next month?
→ Will users even want this?

Post-PMF questions:
→ Will this break at 10x current scale?
→ What's the cost of fixing this later vs now?
→ Is growth blocked by technical debt?

Foundation work that helps both stages:
✓ Clean API boundaries (easy to refactor)
✓ Reasonable test coverage on critical paths
✓ Simple data models (migrations are painful)

This isn't about rebuild vs refactor.

It's about timing.

Wrong timing on either choice costs 6+ months and momentum.

What's one "temporary fix" that's still running in your production?

#Founders #ProductDevelopment #TechLeadership
