---
type: linkedin-engagement
created: '2026-01-17T10:15:00Z'
last_updated: '2026-01-17T10:15:00Z'

author:
  name: "Adam Brakhane"
  linkedin_url: "https://www.linkedin.com/in/adam-brakhane"
  profile: "people/adam-brakhane.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/adam-brakhane_ralph-loops-are-just-a-while-loop-and-theyre-activity-7417998008404897792-mbW5"
  activity_id: "7417998008404897792"
  date: '2026-01-16'
  reactions: 16
  comments_count: 6
  reposts: 0
  theme: "Ralph loops and context management for AI agents"
  angle: "Progress shifting from better models to better orchestration"
  key_points:
    - "Ralph loops = while loop that kills agent, restarts clean, tracks externally"
    - "AI agents get worse the longer they run (context pollution)"
    - "First-principles thinking about LLM usage > better training"
    - "2026 may be last year we interact with raw LLM"
    - "Prediction: 2+ Cursor-scale harness unicorns in non-coding verticals by 2027"
  hashtags: []

thread_topic: "Ralph loops and AI agent context management"
topic_tags: [ai-agents, context-management, ralph-loops, claude-code, orchestration]

engagement_status: "draft"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Ralph loops are just a while loop. And they're cutting edge. The contradiction shows a shift: New progress is more about HOW we use LLMs than the LLM internally improving.

This morning I listened to Theo Browne (CEO @ T3 Chat) break down Ralph loops. Engineers running AI agents in a bash loop to keep context fresh. Embarrassingly simple, yet incredibly powerful. I paused the video and thought, "Why doesn't ClaudeCode just do this for me?"

But also, why are they even necessary? AI agents get worse the longer they run. The fuller your context window, the crappier the results. And at some point, you're going to fill the whole thing. Compaction helps, but it's clumsy. Details like, "Always load this file first" are likely to be dropped.

Ralph loops kill the agent, restart clean, and track progress externally. A human works slow and tends to keep windows open too long. Ralph loops aggressively reset back to zero.

A shift is starting. The biggest gains are now coming from first-principles thinking about how to apply LLMs instead of the LLMs "simply" being trained better.

Since 2020, we have experienced AI using familiar methods and decades-old experience. We're finally trying some stuff from scratch. Things that seem weird, silly, or impossible. What was the 2018 equivalent of a Ralph Loop? I really can't think of one. Can you?

You've got to try the weird stuff now. It won't last! 2026 may be the last year we feel like we're interacting with the raw LLM. Soon, harnesses will be part of every stack.

My bet: 2+ Cursor-scale harness unicorns in non-coding verticals by 2027.

## Notable Comments

```yaml
- id: 1737112000000
  author: "Ilja Weber"
  profile: null
  sentiment: "positive"
  content: |
I did implement a cli tool that does ralph loop and orchestrates claude code. Now adding random agent choice per rotation to use codex too. It's definitely powerful and yeah, context pollution is a thing... But the real issue underneath is how we manage the context.
  reactions: 1
  insight: "Technical depth - built his own implementation, sees context management as the core issue"
  replies: []

- id: 1737112100000
  author: "Luis P."
  profile: null
  sentiment: "positive"
  content: |
This feels like the shift from model progress to system design. Ralph loops aren't the breakthrough themselves; they're a workaround for unmanaged context. It's very reminiscent of early infra days: cron + bash before controllers, scripts before real CI/CD. Ugly, external control loops that made unreliable systems usable.
  reactions: 1
  insight: "Great framing - cron + bash before controllers analogy"
  replies: []

- id: 1737112200000
  author: "Adriane Schwager"
  profile: null
  sentiment: "positive"
  content: |
It feels like we're finally leaving the "bigger model fixes everything" phase and entering the "better orchestration wins" phase. The idea that reset beats accumulation is oddly human too.
  reactions: 1
  insight: "Clean summary - better orchestration wins phase"
  replies: []
```

## Our Engagement

```yaml
- id: 1737112500000
  type: "comment"
  status: "draft"
  sentiment: "positive"
  content: |
Been running Claude Code daily. Context pollution is real. I've started treating agent sessions like disposable containers: spin up, get the task done, kill.

Fresh context beats accumulated context every time. The teams figuring this out now are building real leverage.
  strategy: "Add Context - Share specific experience with context management that reinforces his point"
  replies: []
```

## Notes

- Smaller creator (1,226 followers) but quality technical content
- Quality comments from others (Ilja, Luis P., Adriane)
- Connects to my CLI vs IDE agents draft post
- Could reference Theo Browne's video for deeper context
- Post aligns with "better orchestration > bigger models" thesis
