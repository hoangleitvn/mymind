---
id: 20251212-140000
type: experience
status: raw
themes: [engineering-leadership, product-development, practical-engineering]
tags: [documentation, design-doc, planning, team-coaching, architecture]
captured: 2025-12-12T14:00:00+07:00
content_ready: true
---

# Write a Simple Doc Before Coding - A Repeating Lesson

## Raw Capture

I've been asking team to write documents, design docs before coding for years. I always ask them: write a simple doc first, keep it general, then drill down when needed.

Today's conversation with Duc (DevOps Engineer):

**Daily report:**
> What did you do yesterday?
> - Research which alert rules, alerting methods and alerting system are suitable for the error tracking plugin.
>
> Plan for today?
> - Define alert rules and configure notification for email, Slack contact points in the Grafana Helm chart.

**My response:**
> What is the design for alert system then @Duc Nguyen?
> Show me the design, workflow, etc.
> Don't start coding without architecture and design. This is the key to make sure we are on the same page and avoid rework.

**Duc:**
> Yes anh, I will write a simple doc first to describe the design of the alert system.

**My follow-up:**
> Ok but I need you to use AI to write doc better. When I say simple doc, it must be simple but clear enough to understand, clear enough to see your design, decision, etc.

## The Pattern

This is the same conversation I've had for years:

1. Engineer researches something
2. Engineer plans to start implementing
3. I ask: "Where's the design?"
4. Engineer: "I'll write a doc"
5. I clarify: "Simple but clear. Use AI to help."

## What Is "Simple Doc"?

The doc I'm asking for isn't formal. It's:

**Simple:**
- 1-2 pages max
- No fancy formatting needed
- Can be markdown, Notion, even a well-structured Slack message

**But Clear:**
- What problem are you solving?
- What's the approach/design?
- What decisions did you make and why?
- What's the workflow/flow?
- What are the key components?

**Not:**
- Academic documentation
- Perfect prose
- Comprehensive spec
- Final architecture doc

## The "Simple Doc" Template

```markdown
# [Feature/System Name] Design

## Problem
What are we solving? Why does this matter?

## Approach
How are we solving it? High-level design.

## Key Decisions
- Decision 1: [Choice] because [reason]
- Decision 2: [Choice] because [reason]

## Workflow / Flow
1. Step 1
2. Step 2
3. Step 3

## Components
- Component A: does X
- Component B: does Y

## Open Questions (if any)
- Question 1?
- Question 2?
```

## Why This Matters

### Without doc:
- I don't know what they're building
- They might not know either
- We discover misalignment after code is written
- Rework happens

### With simple doc:
- Alignment before coding
- Forces clarity of thought
- Catches design issues early
- Creates shared understanding
- Can review async

## The AI Angle

My follow-up to Duc: "Use AI to write doc better."

AI can help:
- Structure the doc clearly
- Ask clarifying questions about the design
- Identify gaps in thinking
- Polish the writing

But the engineer must:
- Know what they're designing
- Make the decisions
- Validate AI output

This connects to "Stop Vibe Coding" - AI helps with docs too, but you need to understand what you're documenting.

## Why I Repeat This for Years

Engineers want to code. Writing feels like overhead.

But:
- 30 min writing doc saves hours of rework
- Doc forces you to think before you build
- Doc enables async review and feedback
- Doc becomes reference for future

**The resistance:** "I know what I'm building, I don't need to write it down."

**The reality:** If you can't write it down simply, you don't know it clearly.

## Content Potential

**Post ideas:**

1. "Write a simple doc before coding. I've said this for 10 years."
2. "If you can't write it down simply, you don't know it clearly."
3. "The 5-minute doc that saves 5 hours of rework."
4. "Use AI to write docs, not to skip thinking."

**Could include:**
- The simple doc template
- Real conversation example
- Why engineers resist this
- How AI changes doc writing (but not the need for it)

## Related Moments

- `20251212-131500` - Team planning/premature optimization (same conversation)
- `20251212-123500` - Stop vibe coding (AI doesn't replace understanding)
- `20251212-132500` - Not bad, wrong approach (this IS the right approach)

## Follow-up

- [ ] Create simple doc template for team
- [ ] Develop into LinkedIn post
- [ ] Consider as part of "team coaching insights" series
- [ ] Add to engineering practices documentation
