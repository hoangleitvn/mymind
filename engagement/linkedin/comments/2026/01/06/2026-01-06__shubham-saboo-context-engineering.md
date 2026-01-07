---
type: linkedin-engagement
created: '2026-01-06T10:30:00Z'
last_updated: '2026-01-06T10:30:00Z'

author:
  name: "Shubham Saboo"
  profile: "people/shubham-saboo.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/shubhamsaboo_context-engineering-trap-that-every-ai-agent-activity-7414145451647725569-X-8i"
  activity_id: "7414145451647725569"
  date: '2026-01-06'
  reactions: null
  comments_count: null
  reposts: null
  theme: "Context engineering for AI agents"
  angle: "Hierarchical rules architecture prevents agent paralysis and hallucination"
  key_points:
    - "Too few rules cause hallucinations; too many paralyze agents"
    - "Solution: Constitution (3-5 rules) > Workspace Rules > On-Demand Workflows"
    - "Priority framework: User request > Workspace rules > Global rules"
    - "Claims this approach doubled velocity"
  hashtags: []

thread_topic: "AI agent context engineering"
topic_tags: [ai-agents, context-engineering, agentic-ai, prompt-architecture]

engagement_status: "posted"
response_received: false
follow_up_needed: true
follow_up_date: '2026-01-08'
---

## Original Post

Context Engineering trap that every AI agent builder falls into

Too few rules → The agent hallucinates libraries, ignores your structure, writes code that won't compile

Too many rules → The agent asks for clarification on everything, refuses creative solutions, creates bureaucracy

The Solution - Hierarchical Architecture:

Instead of flat instruction lists, organize rules into three layers:

1. **Constitution (3-5 rules max)** - Non-negotiables like "Never log secrets" and type-checking requirements
2. **Workspace Rules** - Repository-specific guidelines
3. **Workflows (On-Demand)** - Callable actions rather than standing rules

Priority Framework: "User request > Workspace rules > Global rules"

The author reports that restructuring context this way "doubled velocity" with fewer conflicts and better judgment from agents.

## Notable Comments

```yaml
[]
```

## Our Engagement

```yaml
- id: 1736159400000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Still experimenting with this, but one shift that's helped: moving from "instructions" to "context."

Instead of telling the agent HOW to do things, we give it WHAT (goal), WHY (intent), constraints, and success criteria. Let the agent figure out the how.

Your Constitution layer maps well to constraints. But Workflows might work better as outcome specs than step-by-step procedures.

Early days, but the pattern feels right.
  strategy: "add-depth - Connects his hierarchy to adaptive spec approach (context over instructions)"
  replies: []
```

## Notes

- Strong framework post from AI agent builder
- Connected his hierarchy to our adaptive spec approach (context over instructions)
- Honest about still experimenting - builds authenticity
- Worth monitoring for response to build relationship
