---
title: "Prompt Generator Skill - Level 5 Specification"
created: 2025-12-25
status: draft
topic: true-context-engine
type: skill-spec
---

# Prompt Generator Skill

## Level 5 Prompt to Build This Skill

```markdown
## Problem

Engineers and creators struggle to write effective prompts for AI.

Most prompts are Level 2 (basic) or Level 3 (over-specified instructions).
Few know how to write Level 4 (WHAT + WHY) or Level 5 (True Context) prompts.

This leads to:
- Prompt → Generate → Fix → Repeat loops
- AI acting as typist instead of thinking partner
- Generic outputs that don't fit their system/style
- Frustration and wasted time

## What We Need

A skill that helps users generate Level 4 or Level 5 prompts for any task.

The skill should:
- Ask the right questions to extract context
- Structure the output in the correct format
- Teach the framework through usage
- Work for any domain (code, content, design, etc.)

## Why It Matters

- Democratizes effective AI usage
- Codifies the True Context framework
- Reduces time from idea to quality output
- Enables Level 5 thinking by default

## Success Criteria

- User can generate a Level 4/5 prompt in <5 minutes
- Output prompt follows the standard structure
- User learns the framework through the process
- Generated prompts produce noticeably better AI outputs

## Constraints

- Must work within Mizemind skill system
- Should be conversational, not form-filling
- Must handle any domain, not just code

---

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

---

## Skill Environment (WHERE)

### Within Mizemind
- Lives as a skill in the plugin system
- Can access workspace context (identity, published content, patterns)
- Outputs to workspace/drafts or clipboard

### Integration points
- Can pull from identity-kit for WHO context
- Can reference existing prompts as examples
- Can suggest saving output as reusable template

### Workflow
1. User invokes skill: `/generate-prompt` or natural language
2. Skill asks: What level? What domain?
3. Skill conducts guided interview
4. Skill outputs formatted prompt
5. User can iterate or use directly

---

## Skill Patterns (WHICH)

### The Framework It Teaches

| Level | Components | When to Use |
|-------|------------|-------------|
| 3 | HOW (steps) | Simple, well-defined tasks |
| 4 | WHAT + WHY | Problem-solving, open-ended |
| 5 | WHAT + WHY + WHO/WHERE/WHICH | System work, identity-critical |

### Question Flow for Level 4

1. **WHAT**: "What are you trying to build/solve/create?"
2. **WHY-Problem**: "What's the pain point or trigger?"
3. **WHY-Impact**: "Why does this matter? What happens if not solved?"
4. **SUCCESS**: "How will you know it's done well?"
5. **CONSTRAINTS**: "What limitations or requirements exist?"

### Additional Questions for Level 5

6. **WHO-Identity**: "What are the values/principles of your system?"
7. **WHO-Voice**: "How should this feel? What's the character?"
8. **WHERE-Environment**: "What's the architecture/platform/context?"
9. **WHERE-Assets**: "What existing resources should it know about?"
10. **WHICH-Patterns**: "What patterns to use? What to avoid?"
11. **WHICH-Unique**: "What makes YOUR approach different?"

### Output Structure

```markdown
## Problem
[From WHAT + WHY-Problem]

## What We Need
[From WHAT]

## Why It Matters
[From WHY-Impact]

## Success Criteria
[From SUCCESS]

## Constraints
[From CONSTRAINTS]

---

## System Identity (WHO)
[From WHO questions - Level 5 only]

## Environment (WHERE)
[From WHERE questions - Level 5 only]

## Patterns (WHICH)
[From WHICH questions - Level 5 only]
```

---

## Skill Behavior

### When starting
- Greet briefly, explain what we're building
- Ask for target level (4 or 5) if not specified
- Ask for domain (code, content, design, other)

### When interviewing
- One question at a time
- Show how answer maps to prompt section
- Offer to skip if not relevant
- Provide examples for abstract questions

### When user is stuck
- Offer concrete examples from their domain
- Suggest common answers as starting points
- Allow "I don't know" and help discover

### When outputting
- Show the complete prompt
- Explain each section briefly
- Offer to refine any section
- Suggest saving as template if reusable

### Example interaction

```
User: /generate-prompt

Skill: I'll help you create a structured prompt.
       What level are you targeting?
       - Level 4: Problem + Context (good for most tasks)
       - Level 5: Problem + Context + Identity (for system-critical work)

User: Level 4

Skill: Got it. What domain is this for?
       - Code/Engineering
       - Content/Writing
       - Design
       - Other

User: Code

Skill: Perfect. Let's build your prompt.

       First, WHAT are you trying to build or solve?
       (Example: "An API endpoint for user authentication")

User: A caching layer for our API responses

Skill: Good. Now WHY is this needed? What's the pain point?
       (Example: "Response times are slow, database is overloaded")

User: Our API is slow, hitting the database on every request

Skill: What's the impact? Why does this matter to solve now?

User: Users are complaining, and we're paying too much for database

Skill: Clear motivation. How will you know it's done WELL?
       What are the success criteria?

User: Response time under 50ms, cache hit rate above 80%

Skill: Any constraints or requirements?

User: Must work with Redis, can't change the API interface

Skill: Here's your Level 4 prompt:

       ---
       ## Problem
       Our API is slow, hitting the database on every request.
       Users are complaining, and database costs are too high.

       ## What We Need
       A caching layer for API responses.

       ## Why It Matters
       - Improve user experience (response time)
       - Reduce database load and costs
       - Scale without infrastructure changes

       ## Success Criteria
       - Response time under 50ms
       - Cache hit rate above 80%
       - No changes to existing API interface

       ## Constraints
       - Must use Redis
       - Cannot modify API interface
       ---

       Want to upgrade to Level 5 by adding system identity?
       Or refine any section?
```

---

## Future Enhancements

- [ ] Auto-suggest level based on task complexity
- [ ] Pull WHO context from workspace identity-kit
- [ ] Save prompts as templates with tags
- [ ] Show before/after comparison of AI outputs
- [ ] Integration with other skills (use generated prompt directly)
```

## Implementation Notes

This skill demonstrates eating our own dogfood:
- The spec itself is a Level 5 prompt
- The skill teaches the framework it embodies
- Building it proves the True Context approach works

## Next Steps

1. Review and refine this spec
2. Build MVP of the skill
3. Test with diagram generation use case
4. Iterate based on usage
