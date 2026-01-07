---
type: moment
moment_type: idea
created: '2025-12-15'
status: captured

themes:
  - cloud-architecture
  - modern-engineering
  - system-design

tags:
  - architecture
  - first-principles
  - design-process

content_potential: high
platform_fit: [linkedin]
---

# First Question Before Designing Architecture

## Raw Capture

Question for architects:

**What is the first question you ask before designing a system/architecture?**

## My Answer

From my experience, the first questions I ask:

1. **What problem are we actually solving?**
   - Not what the client asked for, but what they actually need
   - The stated requirement vs the real problem

2. **What are the constraints?**
   - Budget (cloud costs, team costs)
   - Timeline (MVP vs long-term)
   - Team capability (can they maintain it?)
   - Scale expectations (10 users vs 10M users)

3. **What does "good enough" look like?**
   - Perfection is the enemy of shipping
   - What's the minimum that solves the problem?

4. **What's the cost of being wrong?**
   - Can we iterate? Or is this a one-way door?
   - Technical debt vs speed tradeoff

## Claude's Answer

If I were an architect, my first question would be:

**"What does success look like, and how will we know we achieved it?"**

This forces clarity on:
- The actual goal (not just features)
- Measurable outcomes
- Who defines success (user? business? engineering?)
- Timeframe for evaluation

Without this, you're optimizing for the wrong thing.

## Content Angle

**LinkedIn Post Format:**
- Ask the question
- Share 2-3 of my first questions
- Invite architects to share theirs
- High engagement potential (question + opinion + invitation)

## Added Nuance: Stage Sets the Bar

**Prerequisite question: "Where are we / which stage?"**

This sets the bar for what "success" means:

| Stage | Success Looks Like |
|-------|-------------------|
| Learning | Understanding how it works |
| Prototyping | Validation of concept |
| MVP | Users can use it |
| Scale | Performance, cost, reliability |

**Example:** If a team is learning microservices, success = they understand how and can build one. Not overthinking. Not production-grade scrutiny.

**The trap:** Applying production-level scrutiny to learning projects, or learning-level scrutiny to production.

**Both questions work together:**
1. Where are we? (context)
2. What does success look like here? (measurement)

## Connection to Previous Moment

Links to "Cloud Cost Awareness" moment - cost should be one of the first questions, but most engineers skip it. But the stage matters: learning project vs production project changes the cost conversation.
