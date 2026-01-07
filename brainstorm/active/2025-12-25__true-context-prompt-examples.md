---
title: "True Context Prompt Examples"
created: 2025-12-25
status: reference
topic: true-context-engine
related: [levels-of-ai-coding, mizemind]
---

# True Context Prompt Examples

This document shows the difference between Level 4 (Context) and Level 5 (True Context) prompts at two scales:

1. **Service/Module level** - Email validation service
2. **System level** - Content creator agentic AI

## The Framework

| Level | What you give AI | Term |
|-------|------------------|------|
| Level 3 | HOW | Instructions |
| Level 4 | WHAT + WHY | Context |
| Level 5 | WHAT + WHY + WHO + WHERE + WHICH | **True Context** |

**True Context = Context + Identity**

## Example 1: Service/Module Level

**Scenario:** Build an email validation service

### Level 2 Prompt (BASIC)

```markdown
Write an email validation function in TypeScript.
```

**What happens:**
- AI generates something generic
- You review, find issues
- "Add regex for edge cases"
- Review again, still not right
- "Handle plus-addressing"
- Review, fix, repeat...

**The loop:** Prompt → Generate → Fix → Repeat

### Level 3 Prompt (HOW - Instructions)

```markdown
Create an email validation service in TypeScript. Follow these steps exactly:

1. Create a file called `email-validator.ts`

2. Create a function `validateEmail(email: string): ValidationResult`

3. The ValidationResult type should be:
   ```typescript
   type ValidationResult = {
     isValid: boolean;
     reason?: string;
   }
   ```

4. Implement validation in this order:
   a. Check if email is empty → return { isValid: false, reason: 'Email is required' }
   b. Check if email contains exactly one @ symbol
   c. Split email into local and domain parts
   d. Validate local part:
      - Must be 1-64 characters
      - Allowed: letters, numbers, dots, plus, hyphen, underscore
      - Cannot start or end with a dot
   e. Validate domain part:
      - Must have at least one dot
      - Each part must be 1-63 characters
      - TLD must be at least 2 characters
   f. Use this regex for final validation:
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

5. Add these specific test cases:
   - "test@example.com" → valid
   - "test+tag@example.com" → valid (plus-addressing)
   - "test@sub.example.com" → valid (subdomain)
   - "" → invalid (empty)
   - "test@" → invalid (no domain)
   - "@example.com" → invalid (no local)
   - "test@.com" → invalid (domain starts with dot)

6. Export the function as default

7. Add JSDoc comment explaining the function
```

**What happens:**
- AI follows your steps exactly
- Output matches your specification
- But YOU did all the thinking
- AI is just a typist

**The problem:** You're specifying HOW, not WHAT. If your steps are wrong, the code is wrong.

### Level 4 Prompt (WHAT + WHY)

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

### Level 5 Prompt (TRUE CONTEXT)

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

## System Identity (TRUE CONTEXT)

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
- Consistent with our other validation services (see: phone-validator, address-validator)
```

### Service-Level Comparison (All Levels)

| Level | Prompt Style | AI Role | You Do | Output Quality |
|-------|--------------|---------|--------|----------------|
| **2** | "Write X" | Generator | Review, fix, repeat | Generic, needs iteration |
| **3** | Step-by-step instructions | Typist | All the thinking | Matches YOUR solution |
| **4** | Problem + Why + Criteria | Problem solver | Define success | Working solution |
| **5** | Problem + Why + Identity | System member | Validate fit | Code that belongs |

### The Progression

```
Level 2: "Write an email validator"
         ↓ (add specificity)
Level 3: "Create validator following these 7 steps..."
         ↓ (shift from HOW to WHAT)
Level 4: "We have this problem, here's why it matters, here's success criteria"
         ↓ (add identity)
Level 5: "...and here's who our system is, how we build things, what we value"
```

### Key Insight

- **Level 2 → 3:** More detail, but still YOU solving the problem
- **Level 3 → 4:** AI starts solving, you define success (THE HARD SHIFT)
- **Level 4 → 5:** AI solves AS your system, not just FOR your system

## Example 2: System Level (Agentic AI)

**Scenario:** Build an agentic AI for content creation

### Level 4 Prompt (WHAT + WHY)

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

### Level 5 Prompt (TRUE CONTEXT)

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

### System-Level Difference

| Aspect | Level 4 Agent | Level 5 Agent |
|--------|---------------|---------------|
| Knows | What tasks to do | Who it's helping and why |
| Outputs | Generic content in my topic | Content that sounds like ME |
| Decisions | Based on best practices | Based on MY practices |
| Growth | Needs constant correction | Learns my patterns |

## Key Observations

### Service vs System True Context

| Aspect | Service (Email Validator) | System (Content Agent) |
|--------|---------------------------|------------------------|
| WHO | Code style, design principles | Personal voice, values |
| WHERE | Architecture, tech stack | Platforms, workflow, assets |
| WHICH | Patterns to use/avoid | Formats, structures, differentiators |
| Identity | "How this codebase works" | "Who I am as a creator" |

### The Common Pattern

Both examples follow the same structure:

1. **WHAT + WHY** (Level 4 baseline)
   - Problem statement
   - Why it matters
   - Success criteria
   - Constraints

2. **+ WHO** (Identity layer)
   - Values and principles
   - Character and voice
   - What to embrace/avoid

3. **+ WHERE** (Environment layer)
   - Architecture/platform
   - Workflow/process
   - Existing assets/context

4. **+ WHICH** (Pattern layer)
   - Patterns to use
   - Patterns to avoid
   - What makes this unique

## Template: True Context Structure

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

## Usage

Use this document as a reference when:
- Building new services with True Context
- Designing agentic AI systems
- Teaching others the Level 4 → Level 5 shift
- Creating True Context templates for specific domains
