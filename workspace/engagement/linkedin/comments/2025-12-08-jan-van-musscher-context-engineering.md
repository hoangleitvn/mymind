---
type: linkedin-engagement
created: '2025-12-08'
last_updated: '2025-12-08'

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
  theme: "ai-engineering"
  angle: "context-management-for-production-agents"
  key_points:
    - Context overload is key problem as AI agents run longer
    - Most teams dump everything into one giant prompt (breaks at scale)
    - Google's solution: treat context like compiled system, not string buffer
    - Separate storage (full history) from working context (what AI needs now)
    - Three layers: Session, Memory, Artifacts
    - Sub-agents get scoped context, not full history
    - Context engineering is the new bottleneck for AI agents
  hashtags: []

notable_comments:
  - author: "Paolo Perrone"
    content: "Love the compiled system analogy. What's your take on the biggest implementation challenge - deciding what goes in Working Context vs Storage?"
    reactions: 1
    insight: "Good question about the hardest part: relevance decisions"

our_engagement:
  - id: 1
    type: "comment"
    reply_to: null
    status: "draft"
    timestamp: '2025-12-08'
    content: |
This mirrors what we're building, though still early. Using markdown-based context management before adding external layers.

Curious about your experience: what's been the hardest part when implementing this in practice? The architecture makes sense on paper, but the "what goes where" decisions seem like where it gets messy.
    strategy: "Thoughtful Question - Shows we're actively working on same problem (early stage). Opens dialogue by asking about real challenges. Builds connection through shared experience."

engagement_status: "draft"
---

## Post Summary

Jan van Musscher sharing Google's approach to context engineering for production AI agents. Key insight: treat context like a compiled system (storage vs working context separation) rather than dumping everything into one prompt. Three layers: Session, Memory, Artifacts. Post written for "non-tech builders" to understand context management.

## Why Engage

- Technical AI topic in my expertise area
- Opportunity to add depth to a high-level summary
- Growing AI engineering conversation on LinkedIn
- Smaller account (18K) but relevant topic

## Comment Strategy

Thoughtful Question approach - show we're working on the same problem (markdown-based, no external MCP yet) and ask about his real experience. Opens dialogue rather than positioning as expert. Builds connection through shared challenges.
