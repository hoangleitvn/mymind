---
type: linkedin-engagement
created: '2026-01-08T10:30:00Z'
last_updated: '2026-01-08T10:30:00Z'

author:
  name: "Yan Cui"
  profile: "people/yan-cui.md"
  linkedin_url: "https://nl.linkedin.com/in/theburningmonk"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/theburningmonk_..."
  activity_id: ""
  date: '2025-12-18'
  reactions: 120
  comments_count: 6
  reposts: 10
  theme: "Disposable vs Durable Code"
  angle: "Framework for thinking about AI-generated code"
  key_points:
    - AI can ship 10x more code before your first coffee
    - Disposable code optimizes for speed
    - Durable code optimizes for correctness, change safety, long-term operability
    - Know the difference, use both
  hashtags: []

thread_topic: "Code lifespan and AI development"
topic_tags: [ai-coding, code-quality, disposable-code, durable-code, software-architecture]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

We all dread supporting someone else's code in production.
Now imagine that "someone else" is an AI and can ship 10x more code before your first coffee.

**Disposable Code**
Code that can be thrown away / rewritten.
Scripts, glue code, POCs, etc.
Optimise for:
- speed

**Durable Code**
Code that needs to be maintained and run in production for years.
Optimise for:
- correctness
- change safety
- long-term operability

One tells you *when* to publish.
The other tells you *why*, *what*, and *how*.

Know the difference. Use both.

## Notable Comments

```yaml
[]
```

## Our Engagement

```yaml
- id: 1736332800000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Love the frame between durable code vs disposable code. AI writes more but it also remove more code than human. Claude Code recently added 40k but it also removed 38k.
  strategy: "Add data - share concrete numbers to illustrate the point"
  replies: []
```

## Notes

- Second engagement with Yan Cui (first was Lambda Managed Instances)
- Good frame that aligns with AI coding discussions
- Shared concrete Claude Code metrics to add substance
