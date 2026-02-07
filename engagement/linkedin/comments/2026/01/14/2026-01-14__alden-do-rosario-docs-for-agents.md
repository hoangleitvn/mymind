---
type: linkedin-engagement
created: '2026-01-14T09:00:00Z'
last_updated: '2026-01-14T09:00:00Z'

author:
  name: "Alden Do Rosario"
  linkedin_url: "https://www.linkedin.com/in/aldendorosario"
  profile: "people/alden-do-rosario.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/aldendorosario_your-docs-arent-for-humans-anymore-yeah-activity-7416957369055686656-kGQz"
  activity_id: "7416957369055686656"
  date: '2026-01-14'
  reactions: 11
  comments_count: 0
  reposts: 0
  theme: "Documentation evolution for AI coding agents"
  angle: "Docs as instructions for autonomous agents, not just human reference"
  key_points:
    - "2026: Real customer for docs is coding agents like Claude or Codex"
    - "Test docs by having AI read and execute tasks autonomously"
    - "Agent-readable and executable docs is where the money is"
    - "MCP server approach for documentation"
    - "Evolution: 2015 (experts) → 2020 (any dev) → 2026 (agents)"
  hashtags: []

thread_topic: "Agent-readable documentation"
topic_tags: [documentation, ai-agents, claude-code, coding-agents, developer-experience]

engagement_status: "posted"
response_received: false
follow_up_needed: true
follow_up_date: '2026-01-17'
---

## Original Post

Your docs aren't for humans anymore. Yeah, humans will still read them .. but in 2026, the real customer is the coding agent like `claude` or `codex` Here is how documentation expectations have changed: Year 2015 : Can documentation be understood by the old "software engineering" geek with long white hair. Year 2020 : Can documents be understood by any reasonable software dev (irrespective of technical ability) Year 2026 : Can documentation be understood by coding agents (to let them operate autonomously without a human baby-sitter) That last one is where the money is. Agent-readable and executable docs. Next time you are writing documentation, here is how you have to test them with an example like this: CustomGPT.ai just launched "Document Analyst" (aka: analyzing document against an Enterprise RAG). Now let's see if agents can actually understand the docs they're reading. Here's the exact test I ran: "Hey claude - CustomGPT.ai just released their document analyst feature. Here is the announcement link: please create a cookbook stress testing and benchmarking this feature." In this case, if `claude` can read the launch announcement and documentation and then drive towards the goal autonomously, the documentation is good. If not, your docs are already outdated. Ninja move: Give `claude` an MCP server with your documentation (PS: This can be done with 1-click in CustomGPT.ai with no code required) Who else is rewriting docs for agents + humans?

## Notable Comments

```yaml
- id: 1736848800000
  author: "Duncan McClure"
  profile: null
  sentiment: "question"
  content: |
To make an AI agent ingest the document and not mess up the task, I wonder which % of this is due to formatting vs which % is related to the actual content or phrasing used.
  reactions: 1
  insight: "Good question about formatting vs content"
  replies: []

- id: 1736848900000
  author: "Alpri Else"
  profile: null
  sentiment: "positive"
  content: |
Alongside curating documentation with Coding Agents in mind, there's also this push for building frameworks that have less hidden magic for the same reason. One example of this is the "Model-first development" principle for developing Remix 3. The goal here with that principle is building a framework such that the documentation, source code, framework abstractions, and tooling all are thoughtfully designed for working with Coding Agents like Claude Code
  reactions: 1
  insight: "Connects to framework design - less hidden magic for AI"
  replies: []
```

## Our Engagement

```yaml
- id: 1736849400000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Still writing for both. Each needs different context. For agents: rules, constraints, guardrails, context trees, mental models. For humans: how to run AI efficiently, mindset, architecture, spec/plan. Agents execute. Humans decide what's worth executing. Can't drop either. Balance.
  strategy: "Add Context - share dual-audience documentation approach"
  grounded_in:
    - content/linkedin/2026/01/assets/claude-md-anti-hallucination-template.md
    - CLAUDE.md
  replies: []
```

## Notes

- Alden is founder of CustomGPT.ai - 6.9K followers
- Post directly relevant to our CLAUDE.md and anti-hallucination work
- Good opportunity to share our approach
- Comments show engaged technical audience
- Alpri's comment about "less hidden magic" for AI is interesting angle
