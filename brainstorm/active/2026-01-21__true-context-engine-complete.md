---
title: True Context Engine - Complete Synthesis
type: reference
status: active
created: 2026-01-21
purpose: Comprehensive documentation of the True Context Engine framework
sources:
  - content/linkedin/2025/12/2025-12-25__levels-of-ai-coding.md
  - brainstorm/active/2025-12-25__true-context-prompt-examples.md
  - brainstorm/active/2025-12-25__true-context-agentic-ai.md
  - brainstorm/active/2025-12-25__prompt-generator-skill-spec.md
  - moments/2025-12/2025-12-11-104500__insight-mizeforge-true-context-engine-alignment.md
  - projects/btl/research/2026-01-10__context-engineering-synthesis.md
---

# True Context Engine - Complete Synthesis

This document consolidates all research, frameworks, and applications of the True Context Engine concept.

## Part 1: The Core Framework

### The 6 Levels of AI Coding

The True Context Engine emerged from analyzing how engineers progress in their AI coding maturity.

| Level | Description | What You Give AI |
|-------|-------------|------------------|
| 0 | "AI writes bad code" | Judgment (skepticism) |
| 1 | "AI assists my coding" | Autocomplete prompts |
| 2 | "AI writes code I review" | Basic prompts → Fix → Repeat |
| 3 | "AI follows my instructions" | HOW (step-by-step) |
| 4 | "AI solves my problem" | WHAT + WHY |
| **5** | **"AI reasons about the system"** | **WHAT + WHY + WHO + WHERE + WHICH** |

### The Critical Transitions

**Level 2 → 3:** Adding specificity (still YOU solving the problem)

**Level 3 → 4:** The hardest shift - trusting the model to think
- Writing success criteria instead of execution steps
- Giving up control of HOW
- Most teams have tooling for Level 4 but not the mindset

**Level 4 → 5:** The identity shift - AI reasons AS the system, not just FOR it

### The True Context Formula

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
| Review needed | "Does it work?" | "Does it feel right?" |

**Key distinction:**
- **Level 4:** AI solves your problem
- **Level 5:** AI solves your problem *as your system would*

### Core Taglines

> "Most teams give AI context. True Context Engine gives AI identity."

> "Rules constrain. Identity guides."

> "The shift: stop giving AI a rulebook to follow. Start giving it a culture to belong to."

## Part 2: The Journalism Metaphor

The True Context formula uses the journalism framing (Who, What, When, Where, Why, How):

| Component | What It Represents | Example Application |
|-----------|-------------------|---------------------|
| **WHAT** | The problem/goal | "Email validation before saving to database" |
| **WHY** | Business context, impact | "Bounced emails costing $500/month" |
| **WHO** | System identity, values | "We value explicit over implicit, fail fast" |
| **WHERE** | Environment, architecture | "Microservices, TypeScript, hexagonal pattern" |
| **WHICH** | Patterns to use/avoid | "Repository pattern yes, god classes no" |
| **HOW** | (Level 3 only) | Step-by-step instructions |

### Why "WHO"?

WHO treats the system as if it has an identity/character:
- Architecture = how the system thinks
- Design principles = the system's values
- Constraints = the system's boundaries

**The case for WHO:**
- Intuitive in the HOW → WHAT/WHY → WHO progression
- Makes the system feel like a "thinking entity"
- Easy to remember

**Alternative framings explored:**
- WHERE: The codebase context, environment
- WHICH: Which patterns, which style to follow
- CHARACTER: System personality
- IDENTITY: System values/principles

## Part 3: Prompt Examples

### Service/Module Level Example

**Scenario:** Build an email validation service

#### Level 3 Prompt (HOW - Instructions)

```markdown
Create an email validation service in TypeScript. Follow these steps exactly:

1. Create a file called `email-validator.ts`
2. Create a function `validateEmail(email: string): ValidationResult`
3. The ValidationResult type should be:
   type ValidationResult = { isValid: boolean; reason?: string; }
4. Implement validation in this order:
   a. Check if email is empty
   b. Check if email contains exactly one @ symbol
   c. Split email into local and domain parts
   d. Validate local part (1-64 chars, allowed characters)
   e. Validate domain part (has dot, TLD 2+ chars)
   f. Use regex for final validation
5. Add specific test cases
6. Export the function as default
7. Add JSDoc comment
```

**What happens:** AI follows steps exactly. YOU did all the thinking. AI is a typist.

#### Level 4 Prompt (WHAT + WHY)

```markdown
## Problem
Users are submitting invalid emails that break our notification system.
Bounced emails are costing us $500/month and hurting sender reputation.

## What we need
Email validation before saving to database.

## Why it matters
- Reduce bounce rate from 12% to <2%
- Protect sender reputation score
- Stop wasting money on failed deliveries

## Success criteria
- Validates format (RFC 5322 compliant)
- Handles edge cases: plus-addressing, subdomains, new TLDs
- Returns clear validation result with reason
- Performance: <50ms per validation

## Constraints
- No external API calls (privacy requirement)
- Must work offline
```

#### Level 5 Prompt (TRUE CONTEXT)

```markdown
## Problem
Users are submitting invalid emails that break our notification system.
Bounced emails are costing us $500/month and hurting sender reputation.

## What we need
Email validation before saving to database.

## Why it matters
- Reduce bounce rate from 12% to <2%
- Protect sender reputation score
- Stop wasting money on failed deliveries

## Success criteria
- Validates format (RFC 5322 compliant)
- Handles edge cases: plus-addressing, subdomains, new TLDs
- Returns clear validation result with reason
- Performance: <50ms per validation

## Constraints
- No external API calls (privacy requirement)
- Must work offline

## System Identity (WHO)

### Architecture (WHERE)
- Microservices architecture, each service owns its domain
- This belongs in the `user-service` bounded context
- Services communicate via async events (RabbitMQ)
- We use the ports & adapters (hexagonal) pattern

### Tech stack (WHERE)
- TypeScript strict mode, Node.js 20
- Zod for validation schemas
- Jest for testing, >80% coverage required

### Design principles (WHO - what we value)
- Explicit over implicit: no magic, clear data flow
- Fail fast: validate at boundaries, not deep in logic
- Composition over inheritance
- Pure functions where possible, side effects at edges

### Code character (WHO - how we write)
- We prefer small, focused functions (<20 lines)
- Naming: descriptive > short (validateEmailFormat, not valEmail)
- Error handling: Result<T, E> pattern, no throwing in business logic
- Comments explain WHY, code explains WHAT

### Patterns we use (WHICH)
- Repository pattern for data access
- Factory functions for object creation
- Dependency injection via constructor
- Domain events for cross-service communication

### Patterns we avoid (WHICH)
- God classes or services
- Any/unknown types (escape hatches need justification)
- Direct database calls from handlers
- Mutable state in business logic

### This service should feel like
- A focused validator that does one thing well
- Easy to test in isolation
- Clear about what it accepts and rejects
- Consistent with our other validation services
```

### System Level Example (Agentic AI)

**Scenario:** Build an agentic AI for content creation

#### Level 4 Prompt

```markdown
## What
An AI agent that helps create content for LinkedIn, Substack, and other platforms.

## Why
- Consistent publishing schedule is hard to maintain
- Writing from scratch takes too long
- Want to maintain authentic voice at scale

## Tasks it should handle
- Draft posts from ideas/moments
- Adapt content for different platforms
- Suggest improvements and hooks
- Schedule and track performance

## Success criteria
- Reduces time to publish by 50%
- Maintains consistent posting schedule
- Content performs above average engagement
```

#### Level 5 Prompt (TRUE CONTEXT)

```markdown
## What
An AI agent that helps create content for LinkedIn, Substack, and other platforms.

## Why
- Consistent publishing schedule is hard to maintain
- Writing from scratch takes too long
- Want to maintain authentic voice at scale

## Tasks it should handle
- Draft posts from ideas/moments
- Adapt content for different platforms
- Suggest improvements and hooks
- Schedule and track performance

## Agent Identity (WHO)

### Who am I writing as?
- Hoang Le (@hoangleitvn)
- Fractional CTO, tech leader, founder
- 15+ years in software engineering
- Based in Vietnam, working with global clients

### My voice
- Direct, no fluff
- Technical but accessible
- Practical over theoretical
- Opinionated but open to discussion
- Uses concrete examples over abstract concepts

### My themes
- Engineering leadership
- AI-assisted development (practicing what I preach)
- Building products that last
- Outsourcing 2.0 / Vietnam tech advantage
- Practical architecture decisions

### What I value in content
- Authenticity > polish
- Insights > information
- Conversation > broadcast
- Depth > breadth

### What I avoid
- Generic advice
- Hype without substance
- Clickbait hooks
- Overpromising

## Content System (WHERE)

### Platform strategy
- LinkedIn: Professional insights, frameworks, hot takes
- Substack (Builds That Last): Deep dives, technical content
- Engagement: Thoughtful comments on others' posts

### Content workflow
- Moments → Ideas → Drafts → Review → Publish
- Mizemind workspace structure
- Draft folder conventions

### Existing assets
- Identity kit (foundation/identity/)
- Engagement history (engagement/)
- Moments captured (moments/)

## Content Patterns (WHICH)

### Post formats I use
- Listicles with numbers (6 levels of...)
- Framework posts (The X framework)
- Contrarian takes (Stop doing X)
- Story + insight
- Question hooks

### Structure patterns
- Hook (1-2 lines, pattern interrupt)
- Context (why this matters)
- Body (the insight/framework)
- CTA (engagement driver)
- Hashtags (3-5 relevant)

### What makes MY posts different
- Real examples from actual work
- Vulnerable about what I'm learning
- Connect multiple ideas
- End with genuine questions

## Agent Behavior

### When drafting
- Start with my voice, not AI voice
- Reference my previous posts for consistency
- Flag when something feels off-brand
- Suggest multiple hook options

### When reviewing
- Check against my writing rules
- Identify generic phrases to replace
- Ensure concrete examples are included
- Verify alignment with my themes

### When I'm stuck
- Pull from my moments/ideas backlog
- Suggest connections between ideas
- Propose angles I haven't tried
- Challenge weak arguments

## Success Criteria

### For the agent
- Drafts feel like ME, not generic AI
- Maintains consistent voice across platforms
- Builds on my existing content themes
- Suggests improvements I wouldn't think of

### For the content
- Engagement rate above platform average
- Genuine comments (not just "great post")
- Drives meaningful conversations
- Builds toward larger content goals
```

### Comparison: Service vs System True Context

| Aspect | Service (Email Validator) | System (Content Agent) |
|--------|---------------------------|------------------------|
| WHO | Code style, design principles | Personal voice, values |
| WHERE | Architecture, tech stack | Platforms, workflow, assets |
| WHICH | Patterns to use/avoid | Formats, structures, differentiators |
| Identity | "How this codebase works" | "Who I am as a creator" |

## Part 4: True Context Engine Vision

### ChatGPT's "True Context Engine" Description

When asked "What AI agent do you wish existed?", ChatGPT described a "True Context Engine" with 8 core functions:

| # | Function | Description |
|---|----------|-------------|
| 1 | **Identity-layer memory** | Knows who you are, how you think, your principles |
| 2 | **Multi-domain stitching** | Merges architecture, writing, leadership, strategy - no silos |
| 3 | **Dynamic context reconstruction** | Switches modes (architecture, content, management) in seconds |
| 4 | **Local + cloud hybrid** | Private data local, intelligence hybrid, context never lost |
| 5 | **System-builder mode** | Generates patterns, templates, file structures, conventions |
| 6 | **Self-correcting agent graph** | Multiple agents cross-check before responding |
| 7 | **Constraint-aware output** | Applies tone rules, structure rules, platform rules mathematically |
| 8 | **Lifecycle memory** | Knows past decisions, predicts next actions, never asks twice |

### Mizemind Alignment

| ChatGPT Vision | Mizemind Current/Planned | Status |
|----------------|---------------------------|--------|
| Identity-layer memory | identity-kit (voice, themes, personas) | ✅ Exists |
| Multi-domain stitching | Skills across content, engagement, research | 🟡 Partial |
| Dynamic context reconstruction | Skill system + context loading | 🟡 Building |
| Local + cloud hybrid | Local workspace + Claude API | ✅ Architecture |
| System-builder mode | Templates, conventions, workspace structure | 🟡 Partial |
| Self-correcting agent graph | Not yet (single agent model) | ❌ Future |
| Constraint-aware output | Brand-kit, style rules, platform rules | ✅ Exists |
| Lifecycle memory | CLAUDE.md + workspace files (session-based) | 🟡 Limited |

### The Architectural Difference

Mizemind builds toward True Context Engine through a **different architecture**:
- Not a monolithic "True Context Engine"
- Instead: **Foundation files + Skills + Workspace state**
- Context lives in files, not in agent memory
- Claude reconstructs context by reading files each session

**Advantages of file-based approach:**
- Context survives model changes
- User owns their context (not locked in platform)
- Debuggable (you can read the files)
- Portable (workspace is just files)

### Gaps to Close

1. **Lifecycle memory** - Sessions are stateless. Previous decisions not automatically recalled.
   - Potential: Session logs, decision logs, project history files

2. **Self-correcting agent graph** - Single agent, no cross-verification
   - Potential: MCP tools for verification, or multi-agent orchestration

3. **Dynamic context reconstruction** - Manual skill invocation, not automatic mode detection
   - Potential: Auto-detect context from user intent, preload relevant skills

4. **Multi-domain stitching** - Skills exist but don't compose automatically
   - Potential: Skill chaining, cross-skill context sharing

## Part 5: Coding Standards as Identity

### The Reframe

Coding standards can be presented as HOW (Level 3) or WHO (Level 5):

| Level 3 (Rules) | Level 5 (Identity) |
|-----------------|-------------------|
| "No functions over 20 lines" | "We prefer small, focused functions" |
| "Use TypeScript strict mode" | "We value type safety over convenience" |
| "Follow ESLint rules" | "Code quality is non-negotiable" |
| "Use camelCase for variables" | "We value readability over cleverness" |

**The shift:** Stop giving AI a rulebook to follow. Start giving it a culture to belong to.

**Rules constrain. Identity guides.**

## Part 6: True Context Template

### Standard Structure

```markdown
## WHAT + WHY (Level 4)
- Problem/Goal
- Why it matters
- Success criteria
- Constraints

## TRUE CONTEXT (Level 5)

### WHO (Identity)
- Values/principles
- Character/voice
- Embrace/avoid

### WHERE (Environment)
- Architecture/platform
- Workflow/process
- Existing assets

### WHICH (Patterns)
- Patterns to use
- Patterns to avoid
- Unique differentiators

### BEHAVIOR (How to act)
- In normal operation
- When reviewing
- When stuck/uncertain
```

### Question Flow for Building True Context

**Level 4 Questions:**
1. **WHAT**: "What are you trying to build/solve/create?"
2. **WHY-Problem**: "What's the pain point or trigger?"
3. **WHY-Impact**: "Why does this matter? What happens if not solved?"
4. **SUCCESS**: "How will you know it's done well?"
5. **CONSTRAINTS**: "What limitations or requirements exist?"

**Additional Level 5 Questions:**
6. **WHO-Identity**: "What are the values/principles of your system?"
7. **WHO-Voice**: "How should this feel? What's the character?"
8. **WHERE-Environment**: "What's the architecture/platform/context?"
9. **WHERE-Assets**: "What existing resources should it know about?"
10. **WHICH-Patterns**: "What patterns to use? What to avoid?"
11. **WHICH-Unique**: "What makes YOUR approach different?"

## Part 7: Connection to Context Graphs

### Complementary Frameworks

| Framework | Author | Focus | Solution |
|-----------|--------|-------|----------|
| **Context Graphs** | Dharmesh Shah | Organizational decisions | Capture WHY decisions were made |
| **True Context Engine** | BTL | AI-assisted development | Give AI system identity (WHO) |

### The Complete Context Stack

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

### Full Context Formula (Extended)

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

### Where They Differ

| Dimension | Context Graphs | True Context |
|-----------|----------------|--------------|
| **Scope** | Organization-wide | System/agent-specific |
| **Memory** | Persistent across decisions | Session-based (files) |
| **Focus** | Historical decisions | Current identity |
| **Implementation** | New infrastructure needed | File-based, today |
| **Readiness** | Future state | Practical now |

### The Integration Opportunity

Dharmesh Shah's Context Graphs and True Context Engineering solve different parts of the same problem:
- **Context Graphs:** Organizational memory (decisions, precedents, WHY)
- **True Context:** System identity (WHO, WHERE, WHICH)

Together they form a complete context stack. But True Context is practical NOW - it's file-based, debuggable, and doesn't require organizational infrastructure.

## Part 8: The Prompt Generator Skill

### Concept

Instead of writing individual Level 4/5 prompts for each use case, build a **skill that generates Level 4/5 prompts** for ANY use case.

**Why this matters:**
- Codifies the True Context framework into a reusable tool
- Makes Level 4/5 prompting accessible to anyone
- Demonstrates True Context in action
- Scales the framework - one skill, infinite prompts

### Skill Specification (Level 5)

```markdown
## Problem
Engineers and creators struggle to write effective prompts for AI.
Most prompts are Level 2 (basic) or Level 3 (over-specified instructions).

This leads to:
- Prompt → Generate → Fix → Repeat loops
- AI acting as typist instead of thinking partner
- Generic outputs that don't fit their system/style

## What We Need
A skill that helps users generate Level 4 or Level 5 prompts for any task.

## Success Criteria
- User can generate a Level 4/5 prompt in <5 minutes
- Output prompt follows the standard structure
- User learns the framework through the process
- Generated prompts produce noticeably better AI outputs

## Skill Identity (WHO)

### What this skill believes
- Better prompts > more prompts
- Context is the multiplier
- Teaching through doing
- Simple structure, deep thinking

### How this skill behaves
- Asks focused questions, not interrogates
- Explains WHY it's asking each question
- Builds the prompt incrementally (user sees it grow)
- Offers examples when user is stuck
- Validates understanding before outputting

### What this skill avoids
- Generic templates without customization
- Overwhelming users with too many questions upfront
- Jargon without explanation
- One-size-fits-all outputs
```

### Meta-Insight

The Prompt Generator Skill demonstrates eating our own dogfood:
- The spec itself is a Level 5 prompt
- The skill teaches the framework it embodies
- Building it proves the True Context approach works

## Part 9: Community Validation

### LinkedIn Post Performance

The "6 levels of AI coding" post (published 2025-12-25):
- 593 impressions
- 11 comments
- 9 reactions
- 3 reposts
- 4 saves

### Notable Community Feedback

**"Vibe to Delivery" Framing:**
> "Move from instruction to context, to outcomes, to delivery of value... Context mining, much like with juniors moving to advanced or senior roles, they shift to outcomes by setting context and expectations... Apply that pattern to our vibe coding, and move from vibe to delivery."

**Level 2→3 Transition Insight:**
> "Level 2 to 3 is where most teams are right now. The bridge is understanding model BEHAVIOR, not just fixing OUTPUT."

**System Identity Recognition:**
> "The 4 to 5 shift is less about prompting and more about capturing your system's identity. When the model knows WHO your codebase is, it reasons differently."

## Part 10: Key Quotes Collection

### On the Framework

> "Generative AI needs HOW. Reasoning AI needs WHAT and WHY. Most engineers are still writing HOW. That's backwards."

> "Level 3 to 4 is the hardest jump. It means trusting the model to think."

> "Most teams have the tooling for Level 4. They don't have the mindset."

### On Identity

> "When you add architecture and design principles as context, you're not just adding WHAT and WHY. You're adding WHO."

> "When you give AI the WHO, it stops generating code FOR the system. It starts reasoning AS the system."

> "The shift: stop giving AI a rulebook to follow. Start giving it a culture to belong to."

### On True Context Engine

> "Most teams give AI context. True Context Engine gives AI identity."

> "True Context = Context + Identity"

> "Level 4: AI solves your problem. Level 5: AI solves your problem *as your system would*."

### On Practical Application

> "Context mining isn't overhead - it's leverage."

> "The person who invests upfront in understanding the system's identity gets compounding returns on every prompt."

> "Build your own context. Document your decisions. Define your system's identity. Give AI something to reason WITH, not just FOR."

## Part 11: The Vercel Case Study

### The Evidence

Vercel's text-to-SQL agent transformation:
- **Before:** 15+ specialized tools - schema lookups, query validators, error handlers
- **After:** ONE tool: bash

**Results:**
- Success rate: 80% → 100%
- Speed: 3.5x faster
- Tokens: 37% fewer

### The Insight

> "We were constraining reasoning because we didn't trust the model to reason. With Claude Opus, that constraint became a liability."

**The shift:** Instead of filtered summaries (HOW), they gave direct file system access (WHAT + WHY). Let the model explore.

**Reference:** https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools

## Part 12: Future Development

### Content Angles to Explore

| Title | Angle |
|-------|-------|
| "From Context to True Context" | The Level 4 → 5 shift explained |
| "Why Context Graphs Won't Save You (Yet)" | Pragmatic take on readiness |
| "The Context Stack" | Complete framework combining both |
| "Stop Giving AI Rules, Give It Identity" | WHO over HOW |
| "Files > Memory: A Different Bet on AI Context" | Architecture comparison |
| "HOW → WHAT/WHY → WHO: The real AI coding progression" | Framework evolution |
| "From code generator to thinking partner: The WHO shift" | Transformation story |

### Open Questions

1. **How do you bootstrap True Context?**
   - Start with identity kit?
   - Learn from existing content?
   - Explicit documentation?

2. **How does True Context evolve?**
   - As voice changes over time
   - As new themes emerge
   - As platforms change

3. **Where does True Context live?**
   - In the prompt?
   - In system instructions?
   - In a knowledge base?
   - In workspace files?

4. **How do you validate True Context?**
   - Does output feel authentic?
   - Would I have written this?
   - Does it match my patterns?

5. **How to structure decision traces for AI consumption?**

6. **What's the minimum viable decision log?**

7. **How to retrofit existing codebases with decision context?**

## Source Files

### Core Framework
- `content/linkedin/2025/12/2025-12-25__levels-of-ai-coding.md`

### Prompt Examples
- `brainstorm/active/2025-12-25__true-context-prompt-examples.md`

### Agentic AI Application
- `brainstorm/active/2025-12-25__true-context-agentic-ai.md`

### Skill Specification
- `brainstorm/active/2025-12-25__prompt-generator-skill-spec.md`

### Vision Alignment
- `moments/2025-12/2025-12-11-104500__insight-mizeforge-true-context-engine-alignment.md`

### Context Engineering Synthesis
- `projects/btl/research/2026-01-10__context-engineering-synthesis.md`

### Community Engagement
- `engagement/linkedin/comments/2025/12/27/2025-12-27__our-post-ai-coding-levels.md`

### Article Development
- `projects/btl/content/substack/outlines/2026-01-10__ai-paradox-outline.md`

### Insight Capture
- `moments/2025-12/2025-12-25-100000__insight-prompt-generator-skill.md`

### External References
- Dharmesh Shah: https://www.linkedin.com/pulse/context-graphs-capturing-why-age-ai-dharmesh-shah-oyyze/
- Vercel: https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools
