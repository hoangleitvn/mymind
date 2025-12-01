---
status: published
created: 2025-11-01
topic: AI development
audiences:
- technical founders, CTOs, solo developers, engineering managers
key_message: Context engineering is replacing requirements engineering in modern AI-assisted development
hook_type: contrarian
word_count: 420
published_date: '2025-10-31T03:44:07Z'
post_url: https://www.linkedin.com/feed/update/activity:7389869759707877377/
performance_metrics:
  impressions: 279
  reactions: 5
  comments: 2
  saves: 0
---

I just killed a 47-page requirements document.

Didn't read it. Didn't need it.

Built the feature in 3 hours by having a conversation with Claude Code instead.

Here's what changed:

Traditional approach:
→ Write specs (2 weeks)
→ Review specs (1 week)
→ Debate edge cases (3 days)
→ Update specs (2 days)
→ Start coding (finally)
→ Realize specs are wrong (immediately)

Modern approach:
→ Load entire codebase into 200K context window
→ "Here's what users need..."
→ AI understands patterns, suggests implementation
→ Iterate in conversation, not documents
→ Ship, learn, adapt

This is "vibe coding" - conversational development with AI that gets your context.

BUT SPECS AREN'T DEAD. Here's when you need each:

Use traditional specs when:
✅ Regulatory compliance required (healthcare, finance, legal)
✅ Multiple vendors need contract clarity
✅ Distributed teams across timezones need async alignment
✅ System integration with external parties
✅ Building safety-critical systems (aerospace, medical devices)

Use conversational/vibe coding when:
🚀 Internal MVP or feature development
🚀 Fast iteration is the priority
🚀 Team has shared context and codebase access
🚀 Requirements will evolve through user feedback
🚀 Exploring problem space, not documenting known solutions

The hybrid sweet spot:
→ High-level spec: What problem, why now, success metrics
→ Conversational implementation: How to build, technical decisions
→ Documented outcomes: What shipped, key decisions made

THE REAL SHIFT ISN'T "SPECS VS NO SPECS"

It's context engineering replacing requirements engineering.

Instead of translating requirements into documents, we're building shared context:
• AI knows the entire codebase
• Developers explain intent conversationally
• Implementation emerges from dialogue
• Documentation captures decisions, not predictions

The 47-page spec I killed?

Replaced with:
→ 3-paragraph problem statement
→ 45-minute conversation with AI
→ Working code with inline decisions documented
→ User feedback guiding next iteration

Results:
Spec writing time: 3 weeks → 20 minutes
Time to working software: 6 weeks → 3 hours
Accuracy to actual user needs: 60% → 95% (after iteration)

---

Question for you: Are you still writing specs that become obsolete before coding starts? Or have you found a better way?

Drop your experience in comments - I'm curious what hybrid approaches are working for different team sizes and contexts.

---

#SoftwareDevelopment #AI #EngineeringLeadership #ProductDevelopment #TechLeadership
