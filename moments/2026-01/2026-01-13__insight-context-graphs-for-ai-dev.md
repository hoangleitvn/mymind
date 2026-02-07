---
type: moment
category: insight
status: captured
created: 2026-01-13
tags: [ai, context-graphs, knowledge-graphs, ai-assisted-development, decision-traces, adr]
content_potential: high
platform_fit: [linkedin, substack]
related_threads:
  - engagement/linkedin/comments/2026/01/13/2026-01-13__ashish-verma-context-graphs.md
---

# Context Graphs for AI-Assisted Development

## Raw Capture

Sparked by Ashish Verma's post on context graphs vs knowledge graphs:
- Knowledge graphs model truth (what is)
- Context graphs model judgment under constraints (what was allowed, why)

Applied to AI-assisted development:

| Layer | Enterprise Use | AI-Assisted Dev Use |
|-------|----------------|---------------------|
| Knowledge Graph | Domain data, relationships | Architecture, standards, best practices, API docs |
| Context Graph | Decision traces, authority, constraints | Why we chose X over Y, trade-offs, constraints at the time |

## The Insight

AI coding assistants today have access to knowledge (codebase, docs, rules). They don't have access to decision history.

When you ask "why did we use X instead of Y?", the answer is usually lost. The AI can see the current state but not the reasoning that shaped it.

**Existing patterns that ARE decision traces:**
- ADRs (Architecture Decision Records)
- CLAUDE.md / cursor rules (partial - more knowledge than context)
- Commit messages with "why"
- PR descriptions with trade-offs

**The gap:** Most teams have the knowledge layer. Few have durable decision traces that accumulate over time.

## The Application

Build a context graph for your codebase over time:
1. Capture architectural decisions as they happen (ADRs)
2. Log trade-offs considered for significant choices
3. Record constraints that existed at decision time
4. Link decisions to outcomes (did it work? what did we learn?)

This gives AI assistants the ability to:
- Learn from past decisions, not just current state
- Avoid repeating mistakes already made
- Understand WHY the codebase looks the way it does
- Apply precedent when similar situations arise

## Content Angles

### Angle 1: Your Codebase Has Amnesia

AI assistants can read your code. They can't read your mind.

Every architectural decision has context that gets lost:
- Why did we choose Postgres over Mongo?
- What constraints existed when we built this?
- What alternatives did we reject?

Your codebase remembers WHAT. It forgets WHY.

### Angle 2: ADRs Are Context Graphs

Architecture Decision Records are decision traces. Most teams don't use them.

Knowledge: "We use event sourcing"
Context: "We chose event sourcing because audit requirements demanded full history, we evaluated CQRS-only but compliance rejected it, approved by CTO with 6-month review clause"

The second version lets AI assistants understand trade-offs, not just patterns.

### Angle 3: Building Decision Memory for AI Assistants

Right now: AI sees your codebase as static facts
Future: AI sees your codebase as accumulated decisions

The difference:
- Static: "The auth system uses JWT"
- Decision-aware: "JWT was chosen over sessions because of microservices architecture, with known trade-off of token revocation complexity"

## Why This Matters

- Connects emerging concept (context graphs) to practical application (AI dev)
- Actionable: start capturing decision traces now
- Builds on existing patterns (ADRs) rather than inventing new ones
- Ties to foundation-first theme: decisions are part of the foundation

## Open Questions

- How to structure decision traces for AI consumption?
- What's the minimum viable decision log?
- How to retrofit existing codebases with decision context?
- Product opportunity here?

## Potential Formats

- LinkedIn post: "Your Codebase Has Amnesia" - short, punchy
- Substack article: Deeper exploration of context graphs for AI dev
- Series: Could connect to documentation collapse / context squeeze themes
