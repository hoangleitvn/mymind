---
type: linkedin-engagement
created: '2026-01-09T09:05:00Z'
last_updated: '2026-01-09T09:05:00Z'

author:
  name: "Lodovico Benvenuti"
  profile: "people/lodovico-benvenuti.md"
  linkedin_url: "https://fr.linkedin.com/in/lodovico-benvenuti-11678224a"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/lodovico-benvenuti-11678224a_instant-churn-if-your-app-does-not-have-activity-7415010928192122880-GKvd"
  activity_id: "7415010928192122880"
  date: '2026-01-09'
  reactions: 73
  comments_count: 10
  reposts: 0
  theme: "API-first SaaS for AI agents"
  angle: "Build for agents, not humans; UI is dying"
  key_points:
    - SaaS without clean APIs will be bypassed
    - UI is becoming a commodity
    - Stop building docs for humans, expose MCP instead
    - Software that can't be operated programmatically will die
  hashtags: []

thread_topic: "API-first development for AI age"
topic_tags: [saas, api-design, ai-agents, product-development, mcp]

engagement_status: "replied"
response_received: true
follow_up_needed: true
follow_up_date: '2026-01-10'
---

## Original Post

Instant churn. If your app does not have a clean, accessible API, you are my enemy. If your app forces me to point, click, drag to get real work done, you are my enemy. To all SaaS builders out there: Your industry is dying. Software is becoming a commodity. UI is already a commodity. Most companies I talk to today are running vibe coded internal apps in production. I rebuilt Workforce as an internal tool for my company in a day. I rebuilt Breezeway in a week. I would have happily integrated both, but their APIs suck. The only way you stay relevant, aside from straight up gatekeeping data, is if my agents can use you. And ideally not through browser automation. STOP BUILDING FOR HUMANS. STOP BUILDING UI FIRST.

Some basic rules:
- Your app is your OpenAPI spec. Anything I can do in your UI, my agent should be able to do via API. Do not make me reverse engineer your network calls.
- STOP writing docs for humans. STOP recording videos, courses, tutorials. It's cute if you think anyone still consumes that. Expose an MCP with the actual operational context of your business instead.
- If you really need UI, fine. Make it adaptive by default. Make it fully keyboard and voice navigable. Optimize it for supervision, not execution.

If your software cannot be operated programmatically, it will be bypassed.

## Notable Comments

```yaml
- id: 1736416800000
  author: "Matt Pieper"
  profile: null
  sentiment: "neutral"
  content: |
Tell me more about how SaaS is dying as you type a post on SaaS. Yup, it's just software on someone else's computer. ChatGPT = SaaS. Entire Gmail Suite = SaaS. Entire Microsoft O365/Copilot Suite = SaaS
  reactions: 4
  insight: "Valid pushback - SaaS isn't dying, the access pattern is changing"
  replies: []

- id: 1736416900000
  author: "Jean-christophe HONDE"
  profile: null
  sentiment: "neutral"
  content: |
I think you may have miswritten your post. It should be "build your SaaS for agents". UIs that are not designed for agents are especially hard to automate, aren't they?
  reactions: 2
  insight: "Reframe from anti-UI to agent-first design"
  replies: []

- id: 1736417000000
  author: "Joe Rhew"
  profile: null
  sentiment: "positive"
  content: |
This x 1000. Even doing browser automation is too much; I'd just rather not use your software unless you've done such an awesome job of gatekeeping data that I am forced to. Apps should delegate most work via API to LLMs and reserve UI for human oversight only where needed.
  reactions: 1
  insight: "Strong agreement on API-first, UI for oversight only"
  replies: []
```

## Our Engagement

```yaml
- id: 1736417500000
  type: "comment"
  status: "posted"
  sentiment: "neutral"
  content: |
    API-first is the right principle. But "stop building UI" misses the point.

    The UI isn't dead. Its job changed. Execution moves to agents. UI becomes the supervision layer.

    Best pattern I've seen: API handles all operations, UI shows what agents are doing, humans approve or correct.

    That's not UI-first or API-first. It's "agents do, humans review."
  strategy: "Push Back - agree with core principle, add nuance about UI role evolution"
  replies:
    - author: "Lodovico Benvenuti"
      content: |
        I was referring to all those tools that are more action based rather than visualization based. UI is great for data visualization, terrible for intent specification.
      sentiment: "clarifying"
      shared_link: "https://innomizetech.com/blog/serverless-vs-containers-2025-aws-lambda-managed-instances-decision-guide"

- id: 1736420000000
  type: "reply"
  status: "posted"
  sentiment: "supportive"
  content: |
That maps to a progression I've been exploring:

2025: Design FOR users → click to specify intent
2030: Design WITH users → speak/gesture to specify intent
2050: Design AS users → think/feel to specify intent

Each step reduces friction between intention and action. UI was always a translation layer. Agents remove that layer entirely for intent specification.

What remains: visualization, supervision, approval. The "seeing" part, not the "doing" part.

Does that match what you're thinking?
  strategy: "Connect to existing design evolution research, invite deeper dialogue"
  replies:
    - author: "Lodovico Benvenuti"
      content: |
        Yes precisely. That's why I say that UI should be adaptive in the sense that it should be the AI deciding what to show people. The direction we are going towards is how Iron Man interacts with Jarvis.
      sentiment: "positive"

- id: 1736429000000
  type: "reply"
  status: "posted"
  sentiment: "supportive"
  content: |
    The Jarvis model. AI handles attention allocation, humans handle judgment.

    "Don't make them think" extends to: don't make them decide what to look at either. Surface what matters, let them confirm or redirect.
  strategy: "Align on Jarvis vision, connect to Don't Make Me Think principle"
```

## Notes

- Provocative post with strong opinions
- Good engagement (73 reactions, 10 comments)
- Matt Pieper's pushback is valid - SaaS model isn't dying, access pattern is
- Jean-christophe's reframe is better: "build for agents" not "stop building UI"
- Lodovico's clarification: "visualization vs intent specification" - cleaner framing
- Connected to my design evolution research (2025-12-17 post): FOR → WITH → AS users
- He shared my serverless article - reading my content, good signal
- Jarvis model alignment - AI handles attention, humans handle judgment
- Strong thread with 3 exchanges - connection request candidate
- Content potential: "Design with users, don't make them think" + Jarvis model
