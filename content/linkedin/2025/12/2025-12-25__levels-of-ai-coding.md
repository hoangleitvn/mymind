---
title: "6 levels of AI coding and why most engineers are stuck at level 2"
type: linkedin-post
status: published
created: 2025-12-24
topic: ai-coding-levels
theme: practical-engineering
persona: tech-leader
audiences: [engineering-managers, senior-engineers, tech-leads]
key_message: "The hardest shift in AI coding is trusting the model to think. Give it WHAT and WHY, let it figure out HOW."
hook_type: framework
format: listicle
target_hashtags: [AICoding, SoftwareEngineering, EngineeringLeadership]
optimal_post_time: Tuesday, 9am
word_count: 235
published_date: '2025-12-25T02:22:42Z'
post_url: https://www.linkedin.com/feed/update/urn:li:activity:7409780431983816704/
performance_metrics:
  impressions: 593
  member_reached: 214
  profile_views: 1
  followers: 0
  reactions: 9
  comments: 11
  reposts: 3
  saves: 4
  sends_on_linkedin: 0
---

Generative AI needs HOW.
Reasoning AI needs WHAT and WHY.
Most engineers are still writing HOW. That's backwards.

The real progression is mental, not technical. It's about how you think.

Vercel deleted 80% of their agent code by making this shift. Success rate went from 80% to 100%. Speed: 3.5x faster.

Here are the 6 levels of AI coding:

0/ "AI writes bad code"
↳ You judge AI by whether it writes code YOU would write.

1/ "AI assists my coding"
↳ You write. AI autocompletes. You're still the brain.

2/ "AI writes code I review"
↳ Prompt. Generate. Fix. Repeat. Most teams live here.

3/ "AI follows my instructions"
↳ You specify HOW. Step-by-step scaffolding. Guardrails everywhere.

4/ "AI solves my problem"
↳ You specify WHAT and WHY. AI figures out HOW.

5/ "AI reasons about the system"
↳ You give context and constraints. AI makes decisions. You validate outcomes.

Level 3 to 4 is the hardest jump.

It means trusting the model to think. Writing success criteria instead of execution steps. Giving up control of HOW.

Most teams have the tooling for Level 4. They don't have the mindset.

If you're stuck at Level 3, switch from instructions to context. Give WHAT and WHY. Let the model handle HOW.

What level are you at? Drop a number below.

#AICoding #SoftwareEngineering #EngineeringLeadership

## First Comment (post immediately after publishing)

**The Vercel case study that inspired this post:**

Their text-to-SQL agent had 15+ specialized tools - schema lookups, query validators, error handlers. Heavy guardrails everywhere.

They stripped it down to ONE tool: bash.

Results:
• Success rate: 80% → 100%
• Speed: 3.5x faster
• Tokens: 37% fewer

The key insight: "We were constraining reasoning because we didn't trust the model to reason. With Claude Opus, that constraint became a liability."

Instead of filtered summaries (HOW), they gave direct file system access (WHAT + WHY). Let the model explore.

I'm working on this shift myself. The hardest part is trusting the model with architectural decisions. Prompting is the easy part.

Full post: https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools

## Second Comment (Instructions vs Context)

What's the actual difference between Level 3 and Level 4?

**Instructions (HOW):**
- Step-by-step commands telling AI exactly what to do
- Procedural, prescriptive
- Example: "Create a function called validateEmail. Use regex pattern X. Return true if valid, false otherwise. Add try-catch for errors."

**Context (WHAT + WHY):**
- Goals, constraints, success criteria, background
- Declarative, outcome-focused
- Example: "Users are submitting invalid emails that break our notification system. We need email validation before saving to database. Must handle edge cases like plus-addressing."

The difference:
→ Instructions = You've already solved the problem, AI just types it
→ Context = You describe the problem, AI solves it

The reasoning model can explore solutions, consider tradeoffs, and often find better approaches than your prescriptive steps would allow.

You validate the outcome, not the path.

## Third Comment (The WHO insight - personal take)

Something I've noticed moving from Level 3 to 4:

When you add architecture and design principles as context, you're not just adding WHAT and WHY.

You're adding WHO.

- Architecture = how the system thinks
- Design principles = the system's values
- Constraints = the system's boundaries

The progression becomes:
→ Level 3: HOW (prescriptive steps)
→ Level 4: WHAT + WHY (problem + context)
→ Level 5: WHAT + WHY + WHO (system identity)

When you give AI the WHO, it stops generating code FOR the system.

It starts reasoning AS the system.

That's the real Level 5 shift - the model becomes a thinking partner, not a code generator.

I'm still navigating this shift. The trust part is harder than the prompting part. Will share my findings and thoughts in upcoming articles.

## Fourth Comment (Coding standards - rules vs identity)

Someone asked: "Where do coding standards fit?"

It depends on how you present them.

**As HOW (Level 3):**
"Use camelCase for variables. Max 80 chars per line. Add JSDoc for public functions."
→ Checklist. AI follows rules mechanically.

**As WHO (Level 5):**
"This codebase values readability over cleverness. We prefer small, focused functions. New code should feel like it belongs."
→ Identity. AI reasons about what fits.

Same information. Different framing.

| Level 3 | Level 5 |
|---------|---------|
| "No functions over 20 lines" | "We prefer small, focused functions" |
| "Use TypeScript strict mode" | "We value type safety over convenience" |
| "Follow ESLint rules" | "Code quality is non-negotiable" |

The shift: stop giving AI a rulebook to follow. Start giving it a culture to belong to.

Rules constrain. Identity guides.

## Notes: Why "WHO"? (for future article writing)

The journalism framing: Who, What, When, Where, Why, How

WHO is used as a metaphor - treating the system as if it has an identity/character.

**Alternative terms considered:**

| Term | What it represents |
|------|-------------------|
| WHO | System identity (metaphor - systems aren't people) |
| WHERE | The codebase context, environment |
| WHICH | Which patterns, which style to follow |
| CHARACTER | System personality |
| IDENTITY | System values/principles |

**The case for WHO:**
- Intuitive in the HOW → WHAT/WHY → WHO progression
- Makes the system feel like a "thinking entity"
- Easy to remember

**The case against WHO:**
- Systems aren't people
- Could be confusing
- Maybe too abstract

**Alternative framings to explore:**
- Level 3: HOW (steps)
- Level 4: WHAT + WHY (problem + context)
- Level 5: WHAT + WHY + WHERE (problem + context + codebase identity)

Or simply: CONTEXT at Level 4, IDENTITY at Level 5?

**Potential follow-up article angles:**
- "HOW → WHAT/WHY → WHO: The real AI coding progression"
- "Stop giving AI rules. Start giving it identity."
- "From code generator to thinking partner: The WHO shift"

## Notes: True Context Connection (Mizemind)

**The framing:**

| Level | What you give AI | Term |
|-------|------------------|------|
| Level 3 | HOW | Instructions |
| Level 4 | WHAT + WHY | Context |
| Level 5 | WHAT + WHY + WHO + WHERE + WHICH | **True Context** |

**True Context = Context + Identity**

- Regular context: "Here's the problem and why it matters"
- True Context: "Here's the problem, why it matters, who this system is, where it lives, which patterns it follows, and what it values"

**Mizemind positioning:**
- True Context Engine = the bridge from Level 4 to Level 5
- What enables AI to reason AS the system, not just FOR it
- The missing piece most teams don't have

**Tagline:** "Most teams give AI context. True Context Engine gives AI identity."

## Example: Level 4 vs Level 5 Prompts

**Scenario:** Build an email validation service

### Level 4 Prompt (WHAT + WHY)

```
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

### Level 5 Prompt (TRUE CONTEXT)

```
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

### Architecture
- Microservices architecture, each service owns its domain
- This belongs in the `user-service` bounded context
- Services communicate via async events (RabbitMQ)
- We use the ports & adapters (hexagonal) pattern

### Tech stack
- TypeScript strict mode, Node.js 20
- Zod for validation schemas
- Jest for testing, >80% coverage required

### Design principles (what we value)
- Explicit over implicit: no magic, clear data flow
- Fail fast: validate at boundaries, not deep in logic
- Composition over inheritance
- Pure functions where possible, side effects at edges

### Code character
- We prefer small, focused functions (<20 lines)
- Naming: descriptive > short (validateEmailFormat, not valEmail)
- Error handling: Result<T, E> pattern, no throwing in business logic
- Comments explain WHY, code explains WHAT

### Patterns we use
- Repository pattern for data access
- Factory functions for object creation
- Dependency injection via constructor
- Domain events for cross-service communication

### Patterns we avoid
- God classes or services
- Any/unknown types (escape hatches need justification)
- Direct database calls from handlers
- Mutable state in business logic

### This service should feel like
- A focused validator that does one thing well
- Easy to test in isolation
- Clear about what it accepts and rejects
- Consistent with our other validation services (see: phone-validator, address-validator)
```

### The Difference

| Aspect | Level 4 | Level 5 |
|--------|---------|---------|
| AI knows | The problem to solve | The problem + who this system IS |
| AI decides | Implementation details | Implementation that FITS the system |
| Output | Working code | Code that belongs here |
| Review needed | "Does it work?" | "Does it feel right?" |

**Level 4:** AI solves your problem
**Level 5:** AI solves your problem *as your system would*
