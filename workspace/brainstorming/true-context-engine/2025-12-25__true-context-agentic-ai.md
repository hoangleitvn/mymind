---
title: "True Context for Agentic AI Systems"
created: 2025-12-25
status: brainstorming
topic: true-context-engine
related: [levels-of-ai-coding, mizemind]
---

# True Context for Agentic AI Systems

## Origin

This discussion emerged from the "6 Levels of AI Coding" LinkedIn post, exploring how to move from Level 4 (WHAT + WHY) to Level 5 (True Context).

## The Core Insight

**True Context = WHAT + WHY + WHO + WHERE + WHICH**

- WHAT: The problem/goal
- WHY: The reason/business context
- WHO: System identity
- WHERE: Environment/codebase
- WHICH: Patterns/style/choices

## From Service to System

The email validation example shows True Context for a single service/module. But the bigger question:

**How do you apply True Context to an entire agentic AI system?**

## Example: Content Creator Agent

**Goal:** Build an agentic AI for writing/content creation

### Level 4 Approach (WHAT + WHY)

```
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
```

### Level 5 Approach (TRUE CONTEXT)

```
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

---

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

---

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
- Identity kit (workspace/identity/)
- Published posts (workspace/published/)
- Engagement history (workspace/engagement/)
- Moments captured (workspace/moments/)

---

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

---

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

---

## How the agent should behave

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
```

## The Difference

| Aspect | Level 4 Agent | Level 5 Agent |
|--------|---------------|---------------|
| Knows | What tasks to do | Who it's helping and why |
| Outputs | Generic content in my topic | Content that sounds like ME |
| Decisions | Based on best practices | Based on MY practices |
| Growth | Needs constant correction | Learns my patterns |

## Key Questions to Explore

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
   - In Mizemind workspace?

4. **How do you validate True Context?**
   - Does output feel authentic?
   - Would I have written this?
   - Does it match my patterns?

## Connection to Mizemind

This is exactly what True Context Engine should enable:
- Store and manage identity context
- Apply it consistently across sessions
- Evolve it based on feedback
- Make Level 5 the default, not the exception

## Next Steps

- [ ] Define True Context schema for content agents
- [ ] Build content creator agent with True Context
- [ ] Document the before/after difference
- [ ] Create template for others to use
