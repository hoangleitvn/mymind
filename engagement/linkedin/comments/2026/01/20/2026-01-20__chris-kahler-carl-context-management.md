---
type: linkedin-engagement
created: '2026-01-20'
last_updated: '2026-01-20'

author:
  name: "Chris Kahler"
  linkedin_url: "https://www.linkedin.com/in/chris-kahler"
  profile: "people/chris-kahler.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/chris-kahler_i-spent-six-months-fighting-the-same-problem-activity-7419034672661286912-yfI3"
  activity_id: "7419034672661286912"
  date: '2026-01-20'
  reactions: 82
  comments_count: 10
  reposts: 0
  theme: "Claude Code context management"
  angle: "Dynamic rule injection to reduce token overhead"
  key_points:
    - Context bloat from dumping everything in CLAUDE.md
    - Built CARL - keyword-based dynamic rule injection
    - 50-80% token reduction
    - File-based, Git-friendly architecture
  hashtags: []

thread_topic: "Claude Code context management solutions"
topic_tags: [claude-code, context-management, ai-development, tools]

engagement_status: "posted"
response_received: false
follow_up_needed: true
follow_up_date: '2026-01-23'
---

## Original Post

I spent six months fighting the same problem every Claude Code session. Context bloat. You know the pattern. You have 50+ rules you want Claude to follow. System prompts, coding standards, project conventions, workflow patterns. So you dump everything into CLAUDE.md and hope for the best. Except now every single message burns tokens on rules that aren't relevant. Asking Claude to fix a typo? It still gets injected with your entire MCP server development guide. I built something to fix this. Let me introduce you to CARL, (the Context Augmentation Reinforcement Layer), designed to dynamically inject rules based on what you're actually doing...

## Notable Comments

```yaml
- id: 1737385000000
  author: "Dani Kalmár"
  profile: null
  sentiment: "question"
  content: |
Language is ambiguous, and the same task can be described in multiple ways. If you say fix this bug, you get coding rules. But what if you say this is broken or something is not working right? Does the system still trigger the correct domain? What about edge cases where a single prompt spans multiple domains?
  reactions: 1
  insight: "Valid concern about keyword matching limitations"
  replies: []

- id: 1737385100000
  author: "Jocelyn Elden"
  profile: null
  sentiment: "positive"
  content: |
Personally I have found individual sharded AGENTS.md in each folder has the same effect, so all relevant context for the section of your codebase that is being worked on gets pulled in automatically.
  reactions: 1
  insight: "Alternative approach - directory-based sharding"
  replies: []
```

## Our Engagement

```yaml
- id: 1737390000000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Been building something similar—file-based context that adapts to what you're doing. Custom hooks handle context retrieval, no MCP needed. Same philosophy: Git-friendly, plain text, user owns everything.

Think of it as prompt enrichment—the context layer acts like a junior coach asking clarifying questions before the AI even sees the request. Vague prompts get structured automatically.

Curious about the MCP dependency—have you hit cases where the keyword routing felt limiting?
  strategy: "Add Context + Ask - Share similar approach (mizemind), highlight architectural difference (hooks vs MCP), genuine question about keyword limitations"
  replies: []
```

## Notes

- First engagement with Chris Kahler
- Strong theme alignment - both building context management solutions
- His approach: keyword matching + MCP
- Our approach: hooks + prompt enrichment
- Good potential for ongoing technical discussion
- Question invites response about keyword routing limitations
