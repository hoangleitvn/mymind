---
type: linkedin-engagement
created: '2025-12-08T00:00:00Z'
last_updated: '2025-12-08T00:00:00Z'

author:
  name: "Jan van Musscher"
  profile: "people/jan-van-musscher.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/jan-van-musscher_context-engineering-for-ai-agents-ugcPost-7403387920721678336-ghDe"
  date: '2025-12-08'
  reactions: 7
  comments_count: 0
  reposts: 0
  theme: "AI engineering and context management"
  angle: "Google's approach to context management for production agents"
  key_points:
    - Context overload is key problem as AI agents run longer
    - Most teams dump everything into one giant prompt (breaks at scale)
    - Google's solution: treat context like compiled system, not string buffer
    - Separate storage (full history) from working context (what AI needs now)
    - Three layers: Session, Memory, Artifacts
    - Sub-agents get scoped context, not full history
    - Context engineering is the new bottleneck for AI agents
  hashtags: []

thread_topic: "Context engineering for AI agents"
topic_tags: [ai-engineering, context-management, production-agents, ai-development]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Jan van Musscher sharing Google's approach to context engineering for production AI agents. Key insight: treat context like a compiled system (storage vs working context separation) rather than dumping everything into one prompt. Three layers: Session, Memory, Artifacts. Post written for "non-tech builders" to understand context management.

## Notable Comments

```yaml
- id: 1733616000000
  author: "Paolo Perrone"
  profile: null
  sentiment: "positive"
  content: |
    Love the compiled system analogy. What's your take on the biggest implementation challenge - deciding what goes in Working Context vs Storage?
  reactions: 1
  insight: "Good question about the hardest part: relevance decisions"
  replies: []
```

## Our Engagement

```yaml
- id: 1733616000000
  type: "comment"
  reply_to: null
  status: "posted"
  timestamp: '2025-12-08T00:00:00Z'
  content: |
    This mirrors what we're building, though still early. Using markdown-based context management before adding external layers.

    Curious about your experience: what's been the hardest part when implementing this in practice? The architecture makes sense on paper, but the "what goes where" decisions seem like where it gets messy.
  strategy: "Thoughtful Question - Shows we're actively working on same problem (early stage). Opens dialogue by asking about real challenges. Builds connection through shared experience."
```

## Notes

- Technical AI topic in my expertise area
- Opportunity to add depth to a high-level summary
- Growing AI engineering conversation on LinkedIn
- Smaller account (18K) but relevant topic
