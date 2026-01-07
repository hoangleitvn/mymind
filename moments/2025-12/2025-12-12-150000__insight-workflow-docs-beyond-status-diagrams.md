---
id: 20251212-150000
type: insight
status: raw
themes: [engineering-leadership, practical-engineering, product-development]
tags: [documentation, workflow, diagrams, mermaid, ai-tools, team-coaching]
captured: 2025-12-12T15:00:00+07:00
content_ready: true
---

# Workflow Documentation Beyond Status Diagrams - The Missing Context

## Raw Capture

Talked with another engineer: they built a new module with a team of 8 people. Before that, two people used AI coding assistants. They went live, then got requests to build more features.

Now they need to write workflow documentation (not design docs). He started by designing a status change diagram (basically a mindmap showing status change flows). But what he's not thinking beyond this: we need a full visual workflow that shows not just "from status A can move to which statuses." We need to know more. Who is involved: his team, clients, and users.

Asked him about Mermaid for diagram-as-code. His biggest pain point: layout. Changing the layout to fit what's needed. That's true, and another challenge is brand identity in diagrams, especially when creating diagrams for externals like user guideline documents.

## The Gap I Noticed

Status change diagrams show: A → B → C

What's missing:
1. **Triggers**: What causes the transition from A to B?
2. **Inputs**: What data/information is required?
3. **Conditions**: What must be true for the transition to happen?
4. **Activities**: What happens during the transition?
5. **Outputs**: What results from the transition?
6. **Actors**: Who performs or is affected by this transition?

A simple status diagram becomes insufficient. You need flowcharts, swimlane diagrams, or more complex visualizations.

## Tools Observation

**Mermaid limitations:**
- Layout control is frustrating
- Brand identity/styling is hard
- Complex workflows become messy

**Alternatives to consider:**
- PlantUML (more control, uglier syntax)
- draw.io/diagrams.net (visual, but not code-based)
- Excalidraw (sketchy, informal)
- Lucidchart (professional, paid)

## The Bigger Insight: Doc-First, Visuals-Second

If you start by writing down the full workflow documentation first (text), then you can ask AI to:

1. **Create visuals**: Many types, from general to detailed
2. **Turn it into design document**: For internal engineering team
3. **Turn it into user guidelines**: For external users
4. **Generate API documentation**: If relevant
5. **Create training materials**: Onboarding content
6. **Build test scenarios**: Based on workflow paths

The written doc becomes the "source of truth" that feeds everything else.

This connects to "write a simple doc before coding" - the doc isn't just for alignment, it's the master context that enables AI to help with everything downstream.

## Content Potential

**Post ideas:**

1. "Your status diagram is missing 5 things. Here's what else to document."
2. "Mermaid is great until you need brand identity in your diagrams."
3. "Write the workflow doc first. Let AI create the visuals."
4. "The documentation that feeds everything: user guides, design docs, test cases."

**Could include:**
- Before/after: simple status diagram vs. complete workflow doc
- The 5 questions every workflow transition should answer
- How AI can transform one doc into many outputs

## Related Moments

- `20251212-140000` - Simple doc before coding (same theme: doc-first approach)
- `20251212-123500` - Stop vibe coding (AI needs context to help properly)
- `20251212-131500` - Team planning/premature optimization (same conversation pattern)

## Follow-up

- [ ] Create workflow documentation template (what to capture per transition)
- [ ] Test AI transformation: workflow doc → multiple outputs
- [ ] Evaluate diagram tools for brand identity support
- [ ] Develop into LinkedIn post
