---
type: linkedin-engagement
created: '2026-01-09T09:50:00Z'
last_updated: '2026-01-09T09:50:00Z'

author:
  name: "Bryan Mishkin"
  profile: "people/bryan-mishkin.md"
  linkedin_url: "https://www.linkedin.com/in/bryanmishkin"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/bryanmishkin_aiinsoftwareengineering-refactoring-cleancode-activity-7415112326678433792-YyfD"
  activity_id: "7415112326678433792"
  date: '2026-01-09'
  reactions: 11
  comments_count: 24
  reposts: 2
  theme: "AI-powered code refactoring at scale"
  angle: "AI can refactor faster than humans, never going back"
  key_points:
    - AI refactored 17,000-line routes.ts file in 30 minutes
    - Manus AI analyzed, Replit executed the refactoring
    - Human developer would take 1-2 weeks
    - Shift from reactive firefighting to proactive architecture
  hashtags: ["AIinSoftwareEngineering", "Refactoring", "CleanCode", "DeveloperProductivity", "NodeJS", "Express", "TechDebt", "ProactiveDevelopment", "SoftwareArchitecture", "AIforDevelopers"]

thread_topic: "AI refactoring capabilities vs traditional development"
topic_tags: [ai-coding, refactoring, technical-debt, architecture, vibe-coding]

engagement_status: "active"
response_received: true
follow_up_needed: true
follow_up_date: '2026-01-10'
---

## Original Post

AI Refactored and tested 17,000 Lines in 30 Minutes. We're Never Going Back.

Our product team built a prototype with zero tech help. It worked great but Technology discovered some technical debt under the hood. Now we're building a second prototype. Same stack, same patterns... and heading toward the same problems.

But this time, we got ahead of it. We ran an AI-powered code analysis with Manus AI on the new prototype before productionalization even started. Manus AI uncovered a 17,000-line routes.ts file with 79 endpoints, 2,000+ console.log statements, and zero tests—the exact issues that plagued our first prototype.

Manus AI gave us detailed prompts for Replit and then we let Replit refactor the code. In 30 minutes, AI:
✅ Analyzed 328,000 lines of code and produced prompts to refactor (Manus AI)
✅ Refactored the monolith into 12 domain-driven modules (Replit)
✅ Extracted authentication middleware (Replit)
✅ Applied clean architecture principles (Replit)
✅ Delivered refactored code with zero functionality changes (Replit)

A human developer? 1-2 weeks minimum, and who knows what quality.

This is the shift: from reactive firefighting to proactive architecture. Learn once, automate the fix, never make the same mistake twice.

The future isn't AI vs. developers. It's developers who learn fast + AI that executes faster = systems that scale from day one.

## Notable Comments

```yaml
- id: 1736405400000
  author: "Zlatko Derkoski"
  profile: null
  sentiment: "negative"
  content: |
How you refactor 17.000 lines of code, how you know it success, how you tested the edge cases, what the hell you ai hypes talk about, 17.000 lines of codes like they are potatoes 🥔 🤣
  reactions: 2
  insight: "Skeptical about verification and testing of AI refactoring"
  replies:
    - author: "Bryan Mishkin"
      sentiment: "neutral"
      content: "I respect craftsmanship. I also respect deadlines and budgets. The AI didn't replace craft—it accelerated the tedious part (reorganizing 17,000 lines into modules). The human craft was..."

- id: 1736408400000
  author: "Adam Cragg"
  profile: null
  sentiment: "negative"
  content: |
Any "real" CTO, not one simply in name, will know this is literally the exact opposite approach of how you refactor. Did you forget to add a satire tag or are you just that insane?
  reactions: 3
  insight: "Strong pushback from Senior Software Engineer, questions legitimacy"
  replies: []

- id: 1736412000000
  author: "Harshal Naidu"
  profile: null
  sentiment: "question"
  content: |
Very interesting. How do you measure a risk of such refactoring? If I were to sign off on something like this I'd want my a$$ covered.
  reactions: 1
  insight: "Risk management perspective, valid enterprise concern"
  replies:
    - author: "Bryan Mishkin"
      sentiment: "neutral"
      content: "Use the Github Connector so it's reviewing the actual codebase you want."

- id: 1736415600000
  author: "Chris Northfield"
  profile: null
  sentiment: "neutral"
  content: |
The real win would be not needing the refactor at all. A bit of structure upfront is always cheaper than cleanup. AI-powered or otherwise.
  reactions: 1
  insight: "Foundation-first perspective, aligns with my themes"
  replies:
    - author: "Andy S."
      sentiment: "neutral"
      content: "but this isn't how software evolves over many years of life. Your well intentioned upfront architecture soon disappears when customers want new features and evolving technology framev..."

- id: 1736419200000
  author: "Shakil M. A."
  profile: null
  sentiment: "positive"
  content: |
Anyone using Claude/Cursor knows this is accurate. I now a days trust ai generated code than human. AI doesnt make mistakes, its user who was not able to communicate their needs to ai very well hence the mistakes
  reactions: 1
  insight: "Uncritical AI enthusiasm, claims AI doesn't make mistakes"
  replies: []

- id: 1736422800000
  author: "Andy S."
  profile: null
  sentiment: "positive"
  content: |
I've been working on a strangler fig pattern prompt framework with TDD for large refactors with very promising results.
  reactions: 1
  insight: "Practical approach, mentions TDD validation"
  replies:
    - author: "Bryan Mishkin"
      sentiment: "positive"
      content: "I would love to learn more about this! It sounds exciting and promising for deeper refactoring needs."
```

## Our Engagement

```yaml
- id: 1736423700000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
    We're in a similar spot, building second prototypes after learning from the first.

    The part that caught my attention: "same stack, same patterns, heading toward same problems." That's the real challenge. The refactoring is fast, but how do you capture the architectural decisions so prototype 3 doesn't repeat prototype 2?

    Haven't tried Manus yet. With Claude Code we use subagents for similar jobs, analysis in one pass, refactoring in another. Have you tried that approach?
  strategy: "Peer-to-peer connection. Share similar situation, ask about knowledge capture between iterations, mention Claude Code subagents as alternative approach. Opens tool comparison dialogue."
  replies:
    - author: "Bryan Mishkin"
      date: '2026-01-09'
      sentiment: "positive"
      content: |
        I haven't but I will give it a shot. I like the separation of systems and get some interesting outcomes from independent AI reviews. Manus is best in class for a lot of different agentic tasks. It wrote a mobile app (deployable to Google play) in 4 hours.

        The trick right now to keeping bad practices from happening again is documentation. After a feature or change I ask the agent to document the pattern in notion or confluence via connector. I make sure it knows the audience is a coding agent on future projects so it's optimized for AI. We can then have other projects read the architecture patterns we want to use and start with that the subsequent times to get better outcomes.

        Documentation - the thing engineers hate the most - can be generated quickly and accurately as long as you do it in a timely manner with the agent.
      insight: "Uses documentation-for-AI-audience pattern. Stores in Notion/Confluence via connector. Other projects read patterns for better starting points."

- id: 1736424600000
  type: "reply"
  status: "draft"
  sentiment: "positive"
  content: |
    Documentation for AI audience. We're doing something similar with context files that Claude Code reads on startup and handoffs on each task. Curious: what are values you are seeing when storing docs on Confluence or Notion instead of local and in source control?
  strategy: "Continue dialogue. Acknowledge insight, share parallel approach, ask specific question about Confluence/Notion vs Git trade-offs."
  replies:
    - author: "Jack Teitel"
      content: |
        Another approach, specifically designed around Claude Code, is to create a skill that will trigger when a bad pattern is detected or attempts to write and it will correct it.
      sentiment: "helpful"

- id: 1736427000000
  type: "reply"
  status: "posted"
  sentiment: "curious"
  content: |
    Interesting pattern - reactive guardrails via skills. Are you using hooks for this, or something else? Curious how you detect the bad pattern before the write happens.
  strategy: "Ask clarifying question about implementation"
  replies:
    - author: "Jack Teitel"
      content: |
        Claude Code skills - automatically loads the skill description into context every time, when it triggers (based on description) it loads in the full skill context/instructions.
      sentiment: "helpful"

- id: 1736428000000
  type: "reply"
  status: "posted"
  sentiment: "supportive"
  content: |
    Makes sense. Description as trigger, full context on match. Minimal overhead until needed.

    But with the AI-assisted workflow now - subagents, skills, commands - skills alone aren't enough. This is where hooks bring value. Wrapping around sessions and tool calls, not just pattern triggers.

    I'm building something similar. Will share when it's ready.
  strategy: "Acknowledge, add nuance about hooks vs skills, tease upcoming work"
```

## Notes

- Hot debate with 24+ comments, polarized between AI skeptics and enthusiasts
- Bryan is AI-First Strategist, has skin in the game with AI consulting
- Several experienced engineers pushing back hard (Adam Cragg, Zlatko)
- Chris Northfield's foundation-first angle aligns with my themes
- Andy S. mentions strangler fig pattern with TDD - worth following
- Shakil's "AI doesn't make mistakes" is dangerous oversimplification
- Good opportunity to position as pragmatic middle ground with real experience
- Jack Teitel side thread: skills vs hooks for pattern detection
- Teased hooks work - wrapping sessions and tool calls
- Connects to ACE paper (arxiv:2510.04618) - evolving context
