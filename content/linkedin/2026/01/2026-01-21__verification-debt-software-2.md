---
title: "Verification Debt in Software 2.0"
type: linkedin-post
status: published
author: hoangle
created: 2026-01-20
updated: 2026-01-20
published_date: "2026-01-21T03:15:10.932Z"
post_url: "https://www.linkedin.com/feed/update/urn:li:activity:7419578279503925248/"

platform: linkedin
persona: tech-leader
theme: "Verification debt compounds in AI-assisted development"
hook_type: observation
word_count: 280

topic_tags: [ai-coding, verification, testing, software-2.0, spec-driven]
hashtags: [aicoding, softwaredevelopment, testing]

inspiration:
  source: "Paolo Perrone post on Karpathy's verifiability framework"
  url: "https://www.linkedin.com/posts/paoloperrone_karpathy-just-shared-the-best-framework-for-activity-7419399439041175553-xg_U"
  insight: "Conversation about verifiability layers and spec-driven development"
---

## Post (Version A - Tech Leader)

The teams skipping tests in Software 1.0?

They're now bottlenecked in Software 2.0.

Karpathy's insight: If you can verify the output, AI can practice it. Code is verifiable, so AI is progressing fast.

But most teams have been underinvesting in verification for years.

Software 1.0 reality:
→ "Working software over comprehensive documentation"
→ Unit tests optional for most startups and SMEs
→ Integration tests? Maybe. E2E? Rare.
→ Verification = does it work?

This was fine when humans wrote all the code. You could debug your own logic.

Software 2.0 changes the game:
→ AI generates code faster than you can review it
→ Without tests, you can't tell if AI output is correct
→ Without specs, AI can't verify its own reasoning

Every missing test is a layer where AI can't self-correct. It's Verification Debt. It compounds faster than Technical Debt.

The verification pyramid:

Syntax + Code Quality → Linters, formatters, static analysis → 100% verifiable
Functionality → Unit tests → Verifiable (if tests exist)
Software Quality → Integration / E2E tests → Partially (coverage dependent)
Architecture → Specs + constraints → Hard to score
Business value → Human judgment → Very hard

What I'm doing now:

→ Spec-driven first. Writing forces clarity. You find edge cases, blindspots, and define context before AI touches code.
→ Review specs. Ask as different roles. Engineer, end user. Ask tons of questions. Correct and simplify.
→ Plan. Break specs into smaller tasks. Each task has specific requirements and clear definition of done.
→ One task at a time. Verify all outputs. Zero-trust is key. Small enough to verify everything. Finish tests, write handoff, move to next.

AI handles the typing. Thinking and judgment is still on you. Be human.

What's your verification coverage like? Where are the gaps?

---

Enjoy this? ♻️ Repost it to your network and follow me for more.

Want to build software that lasts?

Join Builds That Last on Substack for practical insights on foundation-first engineering.

## Notes

- Builds on Paolo Perrone conversation about Karpathy's verifiability framework
- Introduces "Verification Debt" as new concept
- Verification pyramid is original framework
- Connects Agile's testing gaps to AI's inability to self-correct
- Added practical workflow: spec-driven → review → plan → one task at a time
- Hook revised to observation style ("The teams skipping tests...")
- Closing: "AI handles typing. Thinking and judgment is still on you. Be human."
- Could pair with infographic of verification pyramid
