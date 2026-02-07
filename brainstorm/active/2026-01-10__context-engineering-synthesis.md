---
title: Context Engineering Synthesis Report
type: notes
status: active
created: 2026-01-10
purpose: Compare Dharmesh Shah's Context Graphs with BTL's True Context Engineering
related:
  - projects/btl/research/2026-01-10__ai-paradox-article-research.md
  - moments/2025-12/2025-12-11-104500__insight-mizeforge-true-context-engine-alignment.md
  - brainstorm/active/2025-12-25__true-context-agentic-ai.md
---

# Context Engineering Synthesis Report

## Executive Summary

Two frameworks addressing the same fundamental problem: **AI systems lack the context they need to make good decisions.**

| Framework | Author | Focus | Solution |
|-----------|--------|-------|----------|
| **Context Graphs** | Dharmesh Shah (HubSpot CTO) | Organizational decisions | Capture WHY decisions were made |
| **True Context Engine** | Hoang Le (BTL) | AI-assisted development | Give AI system identity (WHO) |

**Key insight:** These frameworks are complementary, not competing. Context Graphs capture organizational memory. True Context gives AI the identity to use that memory well.

## Part 1: Dharmesh Shah's Context Graphs

### Source
https://www.linkedin.com/pulse/context-graphs-capturing-why-age-ai-dharmesh-shah-oyyze/

### The Problem: The "Why Gap"

Current systems capture **what happened** but not **why**.

> "Scattered knowledge from Slack, work calls, and inside people's heads."

As AI agents handle real workflows, they lack:
- Decision traces and reasoning sequences
- Policy evaluations and exceptions granted
- Who approved what and why
- Historical precedents

### The Solution: Context Graph

A "system of record for decisions" that captures:

| Element | Description |
|---------|-------------|
| Decision traces | The reasoning sequence behind choices |
| Policy evaluations | How rules were applied or exceptions granted |
| Approvals | Who approved what and why |
| Precedents | Historical decisions that guide future ones |

**Purpose:** Transform scattered knowledge into queryable organizational memory.

### The Skepticism

Dharmesh's key caveat (brilliant pragmatism):

> "Asking companies to deploy context graphs while they're still stitching together basic what resembles installing a three-car garage before owning any cars."

**Reality check:**
- Most companies lack foundational infrastructure
- Still struggling with basic data unification
- Early in agent deployment

### Context Graphs Summary

| Strength | Limitation |
|----------|------------|
| Captures organizational WHY | Assumes infrastructure readiness |
| Enables AI to understand precedent | Forward-looking (doesn't exist yet) |
| Queryable decision history | Requires organizational adoption |

## Part 2: BTL's True Context Engineering

### Sources
- `content/linkedin/2025/12/2025-12-25__levels-of-ai-coding.md`
- `brainstorm/active/2025-12-25__true-context-agentic-ai.md`
- `brainstorm/active/2025-12-25__true-context-prompt-examples.md`
- `moments/2025-12/2025-12-11-104500__insight-mizeforge-true-context-engine-alignment.md`

### The Problem: AI as Code Generator vs Thinking Partner

Most teams are stuck at Level 2-3:
- Prompt → Generate → Fix → Repeat
- AI is a typist, not a thinker
- Engineers specify HOW, not WHAT

The Vercel case study: Removed 80% of agent tools, success rate 80% → 100%, speed 3.5x faster.

### The Framework: 6 Levels of AI Coding

| Level | Description | What You Give AI |
|-------|-------------|------------------|
| 0 | "AI writes bad code" | Judgment |
| 1 | "AI assists my coding" | Autocomplete |
| 2 | "AI writes code I review" | Prompt → Fix → Repeat |
| 3 | "AI follows my instructions" | HOW (steps) |
| 4 | "AI solves my problem" | WHAT + WHY |
| **5** | "AI reasons about the system" | **WHAT + WHY + WHO + WHERE + WHICH** |

**Level 3 → 4 is the hardest shift:** Trusting the model to think.

**Level 4 → 5 is the identity shift:** AI reasons AS the system, not just FOR it.

### True Context Formula

```
True Context = WHAT + WHY + WHO + WHERE + WHICH

- WHAT: The problem/goal
- WHY: The reason/business context
- WHO: System identity (values, principles, character)
- WHERE: Environment (architecture, platform, assets)
- WHICH: Patterns (to use, to avoid, differentiators)
```

### True Context vs Regular Context

| Aspect | Level 4 (Context) | Level 5 (True Context) |
|--------|-------------------|------------------------|
| AI knows | The problem to solve | The problem + who this system IS |
| AI decides | Implementation details | Implementation that FITS the system |
| Output | Working code | Code that belongs here |
| Review | "Does it work?" | "Does it feel right?" |

### ChatGPT's "True Context Engine" Vision

When asked "What AI agent should exist?", ChatGPT described 8 functions:

| # | Function | Mizemind Status |
|---|----------|-----------------|
| 1 | Identity-layer memory | ✅ identity-kit exists |
| 2 | Multi-domain stitching | 🟡 Partial (skills) |
| 3 | Dynamic context reconstruction | 🟡 Building |
| 4 | Local + cloud hybrid | ✅ Architecture |
| 5 | System-builder mode | 🟡 Partial |
| 6 | Self-correcting agent graph | ❌ Future |
| 7 | Constraint-aware output | ✅ Exists |
| 8 | Lifecycle memory | 🟡 Limited |

**Key insight:** Mizemind is building toward this through a different architecture - **context lives in files, not agent memory.**

Advantages:
- Context survives model changes
- User owns their context (not locked in)
- Debuggable (you can read the files)
- Portable (workspace is just files)

## Part 3: Synthesis - How They Connect

### The Shared Problem

Both frameworks address: **AI lacks the context to make decisions like a knowledgeable human would.**

```
Dharmesh: AI doesn't know WHY decisions were made
Hoang:    AI doesn't know WHO it's supposed to be
```

### Complementary Layers

```
┌─────────────────────────────────────────────────────┐
│           ORGANIZATIONAL LAYER (Dharmesh)           │
│  Context Graphs: Decision history, precedents, WHY  │
├─────────────────────────────────────────────────────┤
│             IDENTITY LAYER (BTL)                    │
│  True Context: WHO, WHERE, WHICH patterns           │
├─────────────────────────────────────────────────────┤
│            PROBLEM LAYER (Both)                     │
│  WHAT + WHY: Goal, constraints, success criteria    │
└─────────────────────────────────────────────────────┘
```

### Where They Differ

| Dimension | Context Graphs | True Context |
|-----------|----------------|--------------|
| **Scope** | Organization-wide | System/agent-specific |
| **Memory** | Persistent across decisions | Session-based (files) |
| **Focus** | Historical decisions | Current identity |
| **Implementation** | New infrastructure needed | File-based, today |
| **Readiness** | Future state | Practical now |

### Where They Align

| Concept | Context Graphs | True Context |
|---------|----------------|--------------|
| Capturing WHY | ✅ Decision reasoning | ✅ Business context |
| System identity | 🟡 Implied | ✅ Explicit (WHO) |
| Patterns/precedents | ✅ Historical decisions | ✅ WHICH patterns |
| Environment awareness | 🟡 Implicit | ✅ WHERE layer |

### The Integration Opportunity

**Context Graphs + True Context = Complete AI Context**

```
FULL CONTEXT =
  WHAT (problem)
  + WHY (business context)
  + WHO (system identity)           ← True Context
  + WHERE (environment)             ← True Context
  + WHICH (patterns)                ← True Context
  + WHEN (historical decisions)     ← Context Graphs
  + HOW-BEFORE (precedents)         ← Context Graphs
```

## Part 4: Implications for BTL Content

### Content Angles

**Angle 1: The Complete Context Stack**
- Most teams have Level 4 context (WHAT + WHY)
- Few have Level 5 (True Context with identity)
- Almost none have Context Graphs (organizational memory)
- This is a stack, not a choice

**Angle 2: Start with Identity, Build to Graphs**
- Dharmesh admits companies aren't ready for Context Graphs
- True Context is practical NOW (file-based)
- Build identity layer first, add organizational memory later
- "Install the car before the 3-car garage"

**Angle 3: The Knowing-Applying Gap in Context**
- Everyone talks about context engineering
- Few actually implement beyond WHAT + WHY
- The gap: Level 4 → Level 5 requires trust shift
- The gap: True Context → Context Graphs requires infrastructure

**Angle 4: Files > Memory**
- Context Graphs assume AI memory/database
- True Context uses files (debuggable, portable, owned)
- Different architectural bet, similar goal
- Which is more practical for most teams?

### Connection to AI Paradox Article

Add to Issue #4 - THE RESPONSE section:

> **Build your own context.** The "Why Gap" isn't just organizational (Dharmesh Shah's Context Graphs). It's personal. Most engineers give AI WHAT and WHY. Few give it WHO - system identity, design principles, patterns. True Context means AI reasons AS your system, not just FOR it. And unlike Context Graphs, you can start today with files.

### Future BTL Content Ideas

| Title | Angle |
|-------|-------|
| "From Context to True Context" | The Level 4 → 5 shift explained |
| "Why Context Graphs Won't Save You (Yet)" | Pragmatic take on readiness |
| "The Context Stack" | Complete framework combining both |
| "Stop Giving AI Rules, Give It Identity" | WHO over HOW |
| "Files > Memory: A Different Bet on AI Context" | Architecture comparison |

## Part 5: Key Quotes to Use

### From Dharmesh Shah
> "Asking companies to deploy context graphs while they're still stitching together basic what resembles installing a three-car garage before owning any cars."

### From BTL/True Context Work
> "Level 4: AI solves your problem. Level 5: AI solves your problem *as your system would*."

> "The shift: stop giving AI a rulebook to follow. Start giving it a culture to belong to."

> "Rules constrain. Identity guides."

> "Most teams give AI context. True Context Engine gives AI identity."

## Part 6: References Index

### External
| Source | URL |
|--------|-----|
| Dharmesh Shah - Context Graphs | https://www.linkedin.com/pulse/context-graphs-capturing-why-age-ai-dharmesh-shah-oyyze/ |
| Vercel - 80% Tools Removed | https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools |
| Jan van Musscher - Google Context Engineering | https://www.linkedin.com/posts/jan-van-musscher_context-engineering-for-ai-agents-ugcPost-7403387920721678336-ghDe |
| Shubham Saboo - Hierarchical Context | https://www.linkedin.com/posts/shubhamsaboo_context-engineering-trap-that-every-ai-agent-activity-7414145451647725569-X-8i |

### Internal Files
| File | Content |
|------|---------|
| `content/linkedin/2025/12/2025-12-25__levels-of-ai-coding.md` | 6 Levels of AI Coding (published) |
| `brainstorm/active/2025-12-25__true-context-agentic-ai.md` | True Context for Agentic AI |
| `brainstorm/active/2025-12-25__true-context-prompt-examples.md` | Level 4 vs Level 5 examples |
| `moments/2025-12/2025-12-11-104500__insight-mizeforge-true-context-engine-alignment.md` | Mizemind alignment analysis |
| `engagement/linkedin/comments/2026/01/06/2026-01-06__shubham-saboo-context-engineering.md` | Engagement on hierarchical context |
| `engagement/linkedin/comments/2025/12/08/2025-12-08__jan-van-musscher-context-engineering.md` | Engagement on Google context approach |

## Conclusion

**Dharmesh Shah's Context Graphs** and **BTL's True Context Engineering** solve different parts of the same problem:

- **Context Graphs:** Organizational memory (decisions, precedents, WHY)
- **True Context:** System identity (WHO, WHERE, WHICH)

Together they form a complete context stack. But True Context is practical NOW - it's file-based, debuggable, and doesn't require organizational infrastructure.

**The opportunity for BTL:**
Position True Context as the "start here" layer while acknowledging Context Graphs as the future organizational layer. This is pragmatic, differentiated, and actionable.
