---
type: linkedin-engagement
created: '2025-12-10T04:50:00Z'
last_updated: '2025-12-10T04:50:00Z'

author:
  name: "Johann Beukes"
  profile: "people/johann-beukes.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/beukes_i-hear-from-a-lot-of-great-developers-that-activity-7404344947597922304-JB1B"
  date: '2025-12-10'
  reactions: 10
  comments_count: 0
  reposts: 0
  theme: "Context window management in AI coding tools"
  angle: "MCP tools consume significant tokens before coding starts"
  key_points:
    - "Many developers hate AI tools because of poor context management"
    - "59% of tokens consumed by context/MCPs before starting work"
    - "MCPs are useful but expensive in token cost"
    - "Need to use them wisely"
  hashtags: []

thread_topic: "AI coding tools context window and MCP management"
topic_tags: [ai-coding-tools, claude-code, mcp, context-window, developer-experience]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

I hear from a lot of great developers that they absolutely hate working with AI tools. Then I ask them: "How do you manage your context window?" Very few say they do. (I got permission to post this from someone I spoke to about this today, but it's very common.) What you're looking at is a clean session in Claude Code, using Opus, the best and largest context model from Anthropic. So before you even start, you give up 59% of your tokens to provide context. Don't get me wrong, that's great, but notice that most of that context is taken up by MCPs. They're great, but also expensive. Use them wisely (I might post some guidelines about this in the near future)

## Notable Comments

```yaml
- id: 1733805600000
  author: "Paul Lundin"
  profile: null
  sentiment: "positive"
  content: |
Most of the AI tools and platforms make working with them frustrating, especially in enterprise where we deal with many different tools, access controls and this wild thing known as other humans. This is a big driver behind devgraph.ai; our goal is to help by providing the right context to both AI and people as well as alleviating various aspects of discovery and alignment of MCP servers to a given task or workflow.
  reactions: 1
  insight: "Enterprise context challenges, promoting devgraph.ai"
  replies: []

- id: 1733805600001
  author: "Erek J."
  profile: null
  sentiment: "constructive"
  content: |
I'm not sure which MCP tools you're using. To your point, if you're using the right ones for your current project or even your current session, then it might actually save you context in the long run or give you much better results which saves you time and friction.
  reactions: 1
  insight: "Right MCP for right task can save context"
  replies: []

- id: 1733805600002
  author: "Felipe Freitag Vargas"
  profile: null
  sentiment: "neutral"
  content: |
Managing context is a big part of the work (for now)
  reactions: 1
  insight: "Accepts context management as current reality"
  replies: []
```

## Our Engagement

```yaml
- id: 1
  type: "comment"
  reply_to: null
  status: "draft"
  timestamp: '2025-12-10T04:50:00Z'
  content: |
This is why I rarely use MCP tools, or if I have to, I turn them on per session only when needed.

Two things that helped reduce initial context:
1. Tool search. Let the agent find tools when needed instead of loading everything upfront.
2. On-demand MCP activation. Only enable specific servers for the task at hand.
  strategy: "Insightful Addition + Personal Experience - shares practical techniques, validates pain point"
```

## Notes

- Johann has 4K followers, posts frequently about AI dev tools
- Aligns with our AI-assisted development theme
- Good opportunity to share practical Claude Code workflow insights
- Could follow up when he posts the MCP guidelines he mentioned

