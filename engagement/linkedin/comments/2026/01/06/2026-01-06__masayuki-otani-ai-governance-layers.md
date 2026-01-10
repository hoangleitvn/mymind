---
type: linkedin-engagement
created: '2026-01-06T13:00:00Z'
last_updated: '2026-01-06T13:00:00Z'

author:
  name: "Dr. Masayuki Otani"
  profile: "people/masayuki-otani.md"
  linkedin_url: "https://linkedin.com/in/dr-masayuki-otani-52170a140"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/dr-masayuki-otani-52170a140_aigovernance-enterpriseai-systemarchitecture-activity-7413751689523957760-VCyI"
  activity_id: "7413751689523957760"
  date: '2026-01-06'
  reactions: null
  comments_count: null
  reposts: null
  theme: "AI governance - models don't learn from conversations"
  angle: "What looks like learning is architectural layers"
  key_points:
    - "Model weights are fixed at inference - conversations don't retrain"
    - "Three architectural mechanisms: system prompts, external memory, RAG/state"
    - "Govern authority, state management, memory persistence, escalation"
    - "Key question: could you point to exact layer where change was authorised?"
  hashtags: [aigovernance, enterpriseai, systemarchitecture]

thread_topic: "AI governance and architectural traceability"
topic_tags: [ai-governance, architecture, traceability, enterprise-ai]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Dr. Otani challenges the misconception that AI "learns" from conversations. Model weights are fixed at inference. What appears to be learning is actually:

1. **System prompts** - Static instructions defining behavior
2. **External memory** - Chat history, profiles, CRM data
3. **RAG/state layers** - Retrieval injection and session persistence

Key governance question: "If your AI system produced a materially different answer tomorrow, could you point to the exact layer where that change was authorised?"

## Notable Comments

```yaml
[]
```

## Our Engagement

```yaml
- id: 1736168400000
  type: "comment"
  status: "draft"
  sentiment: "positive"
  content: |
Completely agreed. I live with this daily.

Cannot count how many times I asked AI to explain why it behaved a certain way. Without understanding the root cause - which layer produced that answer - it's nearly impossible to predict behavior or provide correct instructions to prevent issues.

This is the real governance gap. Not "is AI safe?" but "can you trace why it did that?"

Crucial for any serious AI workflow.
  strategy: "add-experience - Personal experience with AI behavior tracing, reframes governance as traceability"
  replies: []
```

## Notes

- Personal experience angle resonates with practitioners
- "Can you trace why it did that?" reframes governance simply
- Aligns with our clarity/understanding philosophy
