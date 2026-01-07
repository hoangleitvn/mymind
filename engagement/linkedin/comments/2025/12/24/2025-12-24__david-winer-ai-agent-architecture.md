---
type: linkedin-engagement
created: '2025-12-24T02:04:00Z'
last_updated: '2025-12-24T02:04:00Z'

author:
  name: "David Winer"
  profile: "people/david-winer.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/david-winer_its-a-brutal-time-to-be-an-ai-engineer-activity-7409318930831491072-5AtT"
  date: '2025-12-24'
  reactions: 33
  comments_count: 9
  reposts: 0
  theme: "AI agent architecture evolution"
  angle: "Less architecture, more model trust"
  key_points:
    - "Vercel deleted 80% of their agent code, got better results"
    - "Complex scaffolding from a year ago is now technical debt"
    - "Best agent architecture might be almost no architecture"
    - "Companies stuck on legacy infra designed for last-gen models"
  hashtags: []

thread_topic: "AI agent architecture simplification"
topic_tags: [ai-agents, architecture, technical-debt, reasoning-models]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

It's a brutal time to be an AI engineer. You can spend months building a sophisticated agent using the best engineering practices. You meticulously design guardrails, build specialized tools, and test your retrieval logic. Then you discover that all of that work is irrelevant. Vercel just published a retrospective on their internal text-to-SQL agent. They realized they were solving problems the model could handle on its own. So they deleted 80% of the code. They stripped the agent down from a complex suite of tools to a single capability. They gave it a file system with basic Unix commands like grep and ls and stopped trying to think for the model. The results were immediate: Success rate on evals went from 80% to 100%, It became 3.5x faster, It used 37% fewer tokens. There's a dangerous trap in the industry right now. There are a lot of AI companies whose capabilities are effectively six months behind. They are stuck there because their agents are built on legacy infra designed to prop up the last generation of models. They are maintaining complex scaffolding that was necessary a year ago but is now just technical debt. While they struggle to maintain these rigid architectures, competitors are getting better results by simply getting out of the model's way. The best agent architecture today might be almost no architecture at all.

## Notable Comments

```yaml
- id: 1735005866000
  author: "Avi Mualem"
  profile: null
  sentiment: "neutral"
  content: |
    well i think you need to read between the lines... the fact it worked out so good is heavily due to the fact that things were esentially modeled (not aotomaticaly i assumed) "This works because the semantic layer is already great documentation. The files contain dimension definitions, measure calculations, and join relationships. We were building tools to summarize what was already legible." so basically high quality context was available to the LLM, hence good results.. good mapping and context along with grep can indeed do wonders. tons of cases still needs to build tools / context / etc to get high quality results from agents.
  reactions: 2
  insight: "Important nuance - success depended on pre-existing high-quality semantic layer"
  replies: []

- id: 1735005867000
  author: "Richard Lee"
  profile: null
  sentiment: "positive"
  content: |
    Does Vercel have a text-to-CTO offering? Asking for a friend
  reactions: 4
  insight: "Humorous engagement, high reactions"
  replies: []

- id: 1735005868000
  author: "Chandan Lodha"
  profile: null
  sentiment: "positive"
  content: |
    Just updated my resume. I am no longer an "AI Architect Building Sophisticated Agentic Workflows." I am now a "bash script historian"
  reactions: 1
  insight: "Self-deprecating humor about the paradigm shift"
  replies: []
```

## Our Engagement

```yaml
- id: 1735005900000
  type: "comment"
  reply_to: null
  status: "posted"
  timestamp: '2025-12-24T02:04:00Z'
  content: |
    The deeper pattern: we're still treating reasoning models like generative ones.

    Generative AI needed explicit HOW. Step-by-step instructions, guardrails at every turn. Reasoning models work differently. Give them WHAT you want, WHY it matters, and rules for validation. Let them figure out HOW.

    Vercel's win wasn't deleting tools. It was shifting from procedural scaffolding to declarative context. "Here's the file system, here's grep, here's what success looks like."

    The teams stuck in legacy architectures aren't just over-engineered. They're solving the wrong problem. Still writing HOW when the model only needs WHAT and WHY.
  strategy: "Add Depth - frame paradigm shift from generative to reasoning models, HOW vs WHAT/WHY"
```

## Notes

- Post aligns with our Technical Architecture and Foundations theme
- Key insight: generative vs reasoning model paradigm shift
- Avi's comment provides important nuance about semantic layer quality
- David has 6.4k followers, 154 posts - active thought leader in AI engineering space
- Vercel blog post linked in comments for reference
