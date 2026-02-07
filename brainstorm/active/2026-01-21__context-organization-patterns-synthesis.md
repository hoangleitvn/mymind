---
title: Context Organization Patterns Synthesis
type: notes
status: active
created: 2026-01-21
purpose: Consolidated research on how people organize context for AI tools
sources:
  - engagement/linkedin/comments
  - moments/2026-01
  - projects/btl/research
---

# Context Organization Patterns Synthesis

How others organize context for AI tools - patterns from engagement tracking, research, and community discussions.

## Executive Summary

| Pattern | Author | Core Idea |
|---------|--------|-----------|
| Context Graphs | Dharmesh Shah, Ashish Verma | Capture WHY decisions were made as first-class objects |
| Hierarchical Rules | Shubham Saboo | Constitution > Workspace > Workflows pyramid |
| Dynamic Injection | Chris Kahler (CARL) | Keyword-based routing, 50-80% token reduction |
| Directory Sharding | Jocelyn Elden | AGENTS.md per folder for scoped context |
| Layered Storage | Jan van Musscher (Google) | Session / Memory / Artifacts separation |
| Sub-agent Isolation | Artur Bartkevic | Fork work to fresh contexts at 40% usage |
| WHY-based Rules | Umar Lateef | Explain reasoning, not just instructions |
| True Context | BTL Framework | WHAT + WHY + WHO + WHERE + WHICH |

## Pattern 1: Context Graphs vs Knowledge Graphs

**Sources:**
- Ashish Verma: [LinkedIn Post](https://www.linkedin.com/posts/ashish-verma296_contextgraphs-knowledgegraphs-enterpriseai-activity-7416502167122968577-2AKz)
- Dharmesh Shah: [Context Graphs Article](https://www.linkedin.com/pulse/context-graphs-capturing-why-age-ai-dharmesh-shah-oyyze/)

### The Distinction

| Type | Models | Example |
|------|--------|---------|
| Knowledge Graph | Truth (what is) | Atlas Systems → has_contract → SLA-992 |
| Context Graph | Judgment under constraints | Decision: waived penalty, scoped to March 12-14, approved by Regional Finance Director |

### What Context Graphs Capture

- **Decision traces** - Reasoning sequence behind choices
- **Policy evaluations** - How rules were applied or exceptions granted
- **Authority** - Who approved what and why
- **Temporal validity** - When decisions applied
- **Constraints** - What factors shaped the decision

### Key Quote (Ashish Verma)

> "A KG records what happened, not why it was allowed. The decision itself becomes a first-class object."

### Application to AI Development

Existing patterns that ARE decision traces:
- ADRs (Architecture Decision Records)
- CLAUDE.md / cursor rules (partial - more knowledge than context)
- Commit messages with "why"
- PR descriptions with trade-offs

**The gap:** Most teams have the knowledge layer. Few have durable decision traces that accumulate over time.

## Pattern 2: Hierarchical Rules Architecture

**Source:** Shubham Saboo - [LinkedIn Post](https://www.linkedin.com/posts/shubhamsaboo_context-engineering-trap-that-every-ai-agent-activity-7414145451647725569-X-8i)

### The Problem

- Too few rules → Agent hallucinates libraries, ignores structure
- Too many rules → Agent asks for clarification on everything, refuses creative solutions

### The Solution: Three Layers

```
┌─────────────────────────────────────────┐
│  1. CONSTITUTION (3-5 rules max)        │
│     Non-negotiables                     │
│     "Never log secrets"                 │
│     Type-checking requirements          │
├─────────────────────────────────────────┤
│  2. WORKSPACE RULES                     │
│     Repository-specific guidelines      │
│     Project conventions                 │
├─────────────────────────────────────────┤
│  3. WORKFLOWS (On-Demand)               │
│     Callable actions, not standing rules│
│     Loaded when needed                  │
└─────────────────────────────────────────┘
```

### Priority Framework

```
User request > Workspace rules > Global rules
```

### Outcome

Claims this approach "doubled velocity" with fewer conflicts and better judgment.

## Pattern 3: Dynamic Context Injection (CARL)

**Source:** Chris Kahler - [LinkedIn Post](https://www.linkedin.com/posts/chris-kahler_i-spent-six-months-fighting-the-same-problem-activity-7419034672661286912-yfI3)

### The Problem

> "You have 50+ rules you want Claude to follow. So you dump everything into CLAUDE.md and hope for the best. Except now every single message burns tokens on rules that aren't relevant. Asking Claude to fix a typo? It still gets injected with your entire MCP server development guide."

### The Solution: CARL

**C**ontext **A**ugmentation **R**einforcement **L**ayer

- Keyword-based dynamic rule injection
- File-based, Git-friendly architecture
- **50-80% token reduction** vs monolithic CLAUDE.md
- Rules injected based on what you're actually doing

### Alternative: Directory Sharding (Jocelyn Elden)

> "Individual sharded AGENTS.md in each folder has the same effect, so all relevant context for the section of your codebase that is being worked on gets pulled in automatically."

### Open Question

Dani Kalmár raised: "Language is ambiguous. If you say 'fix this bug' you get coding rules. But what if you say 'this is broken'? Does the system still trigger the correct domain?"

## Pattern 4: Google's Layered Context Architecture

**Source:** Jan van Musscher - [LinkedIn Post](https://www.linkedin.com/posts/jan-van-musscher_context-engineering-for-ai-agents-ugcPost-7403387920721678336-ghDe)

### The Problem

Most teams dump everything into one giant prompt. This breaks at scale.

### The Solution: Three Layers

```
┌─────────────────────────────────────────┐
│  SESSION                                │
│  Current conversation state             │
├─────────────────────────────────────────┤
│  MEMORY                                 │
│  Persistent knowledge across sessions   │
├─────────────────────────────────────────┤
│  ARTIFACTS                              │
│  Generated outputs, files, results      │
└─────────────────────────────────────────┘
```

### Key Principles

- Treat context like a **compiled system**, not a string buffer
- Separate **storage** (full history) from **working context** (what AI needs now)
- Sub-agents get **scoped context**, not full history

### Key Quote

> "Context engineering is the new bottleneck for AI agents."

## Pattern 5: Context Degradation & Sub-agent Isolation

**Source:** Artur Bartkevic - [LinkedIn Post](https://www.linkedin.com/posts/arturas-bartkevic_ai-codingwithai-claudeai-activity-7403705042840633344-uLtj)

### The Problem

- LLM performance degrades after ~40% context window usage
- "You're absolutely right" loop signals context degradation
- 168K tokens available, but past 40% you're in "the dumb zone"

### The Solution

Fork context-heavy work to sub-agents:
1. Sub-agents do searching and reading in separate context
2. Return only what matters
3. Main session stays clean

### Key Quote

> "Fresh context. Better tokens in, better tokens out."

## Pattern 6: MCP Token Overhead

**Source:** Johann Beukes - [LinkedIn Post](https://www.linkedin.com/posts/beukes_i-hear-from-a-lot-of-great-developers-that-activity-7404344947597922304-JB1B)

### The Problem

In a clean Claude Code session:
- **59% of tokens consumed by context/MCPs before starting work**
- MCPs are useful but expensive

### The Solution

1. **Tool search** - Let agent find tools when needed instead of loading upfront
2. **On-demand MCP activation** - Only enable specific servers for the task at hand
3. **Per-session MCP selection** - Don't run all MCPs globally

## Pattern 7: CLAUDE.md Discipline

**Source:** Umar Lateef - [LinkedIn Post](https://www.linkedin.com/posts/ulateef_a-claude-code-tutorial-just-hit-48m-views-activity-7417202957651259392-hc8s) (curating Eyad Khrais's insights)

### The Constraint

- Claude can follow ~150 instructions max
- System prompts use ~50
- Every new line competes for attention

### The Principle: WHY > WHAT

| Approach | Example |
|----------|---------|
| Bad | "Use TypeScript strict mode" |
| Good | "Use strict mode because we have bugs from implicit any types" |

### Key Quote

> "Context enables better judgment calls."

### The Flywheel

```
Claude makes mistake → Review logs → Update CLAUDE.md → Claude improves
```

## Pattern 8: Documentation for Agents

**Source:** Alden Do Rosario - [LinkedIn Post](https://www.linkedin.com/posts/aldendorosario_your-docs-arent-for-humans-anymore-yeah-activity-7416957369055686656-kGQz)

### The Evolution

| Year | Documentation Audience |
|------|------------------------|
| 2015 | Expert engineers |
| 2020 | Any reasonable software dev |
| 2026 | Coding agents (autonomous execution) |

### The Test

> "If Claude can read your launch announcement and documentation and then drive towards the goal autonomously, the documentation is good. If not, your docs are already outdated."

### Related Insight (Alpri Else)

> "There's this push for building frameworks that have less hidden magic for the same reason. The goal is building a framework such that the documentation, source code, framework abstractions, and tooling all are thoughtfully designed for working with Coding Agents."

## Pattern 9: True Context Framework (BTL)

**Source:** Internal research synthesis

### The Problem

Most teams are stuck at Level 2-3:
- Prompt → Generate → Fix → Repeat
- AI is a typist, not a thinker
- Engineers specify HOW, not WHAT

### The 6 Levels

| Level | Description | What You Give AI |
|-------|-------------|------------------|
| 0 | "AI writes bad code" | Judgment |
| 1 | "AI assists my coding" | Autocomplete |
| 2 | "AI writes code I review" | Prompt → Fix → Repeat |
| 3 | "AI follows my instructions" | HOW (steps) |
| 4 | "AI solves my problem" | WHAT + WHY |
| **5** | "AI reasons about the system" | **WHAT + WHY + WHO + WHERE + WHICH** |

### True Context Formula

```
True Context = WHAT + WHY + WHO + WHERE + WHICH

- WHAT: The problem/goal
- WHY: The reason/business context
- WHO: System identity (values, principles, character)
- WHERE: Environment (architecture, platform, assets)
- WHICH: Patterns (to use, to avoid, differentiators)
```

### The Insight

> "Rules constrain. Identity guides."

> "Most teams give AI context. True Context Engine gives AI identity."

## Pattern 10: Features as Context Strategies

**Source:** Internal notes (inbox/how-i-use-cc.md)

### The Reframe

> "Every feature in Claude Code is a context management strategy."

| Feature | Context Function |
|---------|------------------|
| Subagents | Isolated context windows |
| Skills | Pre-packaged context loaded on demand |
| Slash commands | Templated context injection |
| MCP servers | External context sources and tools |

### The Hidden Art

> "The routing system only works if your descriptions are good. Write 'Reviews code' and Claude will never use your agent. Write 'Invoke when reviewing for security vulnerabilities after feature implementation' and suddenly it works."

## Synthesis: The Complete Context Stack

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

### Full Context Formula

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

## Common Themes

1. **Context is the constraint** - Not model capability
2. **WHY matters** - Decision reasoning, not just rules
3. **Dynamic > Static** - Load what's needed, not everything
4. **Fresh > Full** - Sub-agents prevent degradation
5. **Identity > Instructions** - Give AI culture, not just rules
6. **Token efficiency is UX** - Overhead directly impacts quality

## Actionable Takeaways

| Approach | Practical Implementation |
|----------|--------------------------|
| Context Graphs | Capture decisions in ADRs with reasoning and constraints |
| Hierarchical Rules | 3-5 constitutional rules + workspace rules + on-demand workflows |
| Dynamic Injection | Keyword routing or directory-based AGENTS.md sharding |
| Layered Storage | Separate session/memory/artifacts; scope sub-agent context |
| Sub-agent Isolation | Fork research and heavy work to fresh contexts |
| CLAUDE.md Discipline | Explain WHY; keep under 150 effective instructions |
| True Context | Add WHO (identity) and WHICH (patterns) beyond WHAT/WHY |

## Source Files

### Engagement Records
- `engagement/linkedin/comments/2026/01/13/2026-01-13__ashish-verma-context-graphs.md`
- `engagement/linkedin/comments/2026/01/06/2026-01-06__shubham-saboo-context-engineering.md`
- `engagement/linkedin/comments/2026/01/20/2026-01-20__chris-kahler-carl-context-management.md`
- `engagement/linkedin/comments/2025/12/08/2025-12-08__jan-van-musscher-context-engineering.md`
- `engagement/linkedin/comments/2025/12/08/2025-12-08__artur-bartkevic-context-window-degradation.md`
- `engagement/linkedin/comments/2026/01/15/2026-01-15__umar-lateef-claude-code-practices.md`
- `engagement/linkedin/comments/2026/01/14/2026-01-14__alden-do-rosario-docs-for-agents.md`
- `engagement/linkedin/comments/2025/12/10/2025-12-10__johann-beukes-context-window-mcp.md`

### Internal Research
- `moments/2026-01/2026-01-13__insight-context-graphs-for-ai-dev.md`
- `projects/btl/research/2026-01-10__context-engineering-synthesis.md`
- `inbox/how-i-use-cc.md`

### External References
- Dharmesh Shah: https://www.linkedin.com/pulse/context-graphs-capturing-why-age-ai-dharmesh-shah-oyyze/
- Vercel case study: https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools
