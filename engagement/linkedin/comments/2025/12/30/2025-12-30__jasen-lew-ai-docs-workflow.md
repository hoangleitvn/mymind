---
type: linkedin-engagement
created: '2025-12-30T08:05:00Z'
last_updated: '2025-12-31'

author:
  name: "Jasen Lew"
  profile: "people/jasen-lew.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/jasenlew_i-told-my-engineers-to-stop-writing-docs-activity-7411411933918298113-NuL2"
  date: '2025-12-30'
  reactions: 24
  comments_count: 6
  reposts: 0
  theme: "AI-automated documentation workflow"
  angle: "Eliminate manual docs by triggering AI on PR merge"
  key_points:
    - "Three failure modes of manual docs: incomplete, outdated, never done"
    - "All scenarios tax engineers with non-building work"
    - "PR merge triggers AI to generate human-readable + technical docs"
    - "AI-generated docs are better than manual, always current"
  hashtags: []

thread_topic: "AI documentation automation"
topic_tags: [ai-workflow, documentation, developer-experience, practical-engineering]

engagement_status: "posted"
response_received: true
follow_up_needed: false
follow_up_date: null
---

## Original Post

I told my engineers to stop writing docs. Complete silence. Some confused grins. "But... how will we know what changed?" With manual docs, we always ended up in one of three scenarios: Scenario 1: Engineers write them. They're incomplete. Hard to follow. Missing the context non-technical teams actually need. Scenario 2: Docs are complete. But they break flow. Get outdated within weeks. Create false confidence that everything's documented when it's not. Scenario 3: Docs just don't get done. (This was us, most of the time.) In any scenario, we're taxing our engineers with work that pulled them away from building. We changed, with AI. Every approved and merged pull request now triggers an AI documentation workflow. It generates two types of docs automatically: 1. Human-readable updates for product, sales, and support teams 2. Technical summaries for engineers who need implementation details No manual work, no context switching, and docs stay current without anyone thinking about it. Documentation is always current. Non-technical teams understand changes. Engineers ship faster. The AI-generated docs are better than what we were writing manually... pretty much always. What's your team's documentation workflow?

## Notable Comments

```yaml
- id: 1735545922000
  author: "Eugene Brodsky"
  profile: null
  sentiment: "question"
  content: |
Who verifies the correctness of the generated docs? 90% correct is still better than woefully outdated, but this error compounds. Do you have a separate documentation loop that reconciles the entire docubase with the current state of the codebase? If you don't, that's a major pitfall that will result in subtle erosion of correctness in both the documentation and the code that results from reliance on it.
  reactions: 4
  insight: "Valid concern about accuracy drift - worth addressing in comment"
  replies: []

- id: 1735545923000
  author: "David Krasovskij"
  profile: null
  sentiment: "positive"
  content: |
good setup. Question stays "who reads it", when you can run an agent real time with prompt "explain me this flow" - the outcome is the atleast the same. i would argue that better because it includes the flow fully and includes pieces that were implemented before. To make it really cool would be to add a business reasoning and decision making that leads to the change - thats gold. Hard to do imho but worth a try :)
  reactions: 1
  insight: "Real-time agent vs static docs - interesting alternative approach"
  replies: []

- id: 1735545924000
  author: "Aleksander Allen"
  profile: null
  sentiment: "positive"
  content: |
You did not have me in the first half, not going to lie. I 100% agree with your approach, and believe a ever-changing 'natural language twin' wiki for any codebase is simple and reliable to generate with today's LLMs. Will it be 100% accurate? Of course not - what natural language definition is? All we can do is work really hard to add extra 9's to the 99.9% reliability/accuracy
  reactions: 1
  insight: "Natural language twin framing - good mental model"
  replies: []
```

## Our Engagement

```yaml
- id: 1735545930000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
    PR-triggered docs solve the downstream problem. But the bigger leverage is upstream.

    If you write good specs before building, two things happen:
    1. AI has better context during development (less inference guessing)
    2. The code itself becomes clearer because intent was documented first

    When the spec is solid, auto-generated docs from PRs become nice-to-have. The spec already explains the "why." The code shows the "how." The PR doc is just changelog.

    The real shift isn't "stop writing docs." It's "write docs before code, not after."

    What does your spec process look like before engineers start building?
  strategy: "Contrarian reframe - upstream specs matter more than downstream PR docs. Context engineering angle."

- id: 1735545931000
  type: "author-reply"
  from: "Jasen Lew"
  timestamp: '2025-12-31'
  content: |
    Great reframe. You're right that upstream spec quality is higher leverage than downstream doc automation.

    We're still trying different approaches with our spec approach - trying different levels of rigor for different types of work and seeing what sticks.

    What we're solving for is the gap that exists either way, i.e. when engineers ship something, nobody outside engineering knows what changed or why it matters to them.

    Your point about richer upstream context making downstream docs better is well-taken. The two reinforce each other.

    What's your typical spec-to-code workflow?

- id: 1735545932000
  type: "reply"
  reply_to: "Jasen Lew"
  status: "posted"
  timestamp: '2025-12-31'
  strategy: "Genuine answer + shared journey"
  content: |
    We keep it light and context-aware.

    For well-scoped work (clear acceptance criteria, understood domain): minimal spec. Just enough to give AI context during development.

    For ambiguous work (new domain, unclear requirements): more upfront writing. Not formal PRDs, but enough to surface questions early.

    The trigger: "Can I describe what 'done' looks like before I start?" If yes, light spec. If no, write until I can.

    The goal isn't documentation for its own sake. It's reducing the "what were we trying to do again?" moments mid-build.

    I'm also building a spec-driven workflow internally - adaptive specs upfront, then document generation post-development. Similar direction, but focused on technical docs first before expanding to non-technical teams.
```

## Notes

- Jasen Lew: 6.5k followers, posts about engineering workflows
- Strong alignment with "eliminate work about work" principle
- Eugene's verification concern is the main discussion thread
- David's point about real-time agents vs static docs is interesting alternative
- Good opportunity to connect workflow thinking

## Thread Summary

**Our comment:** Upstream specs are higher leverage than downstream PR docs. Write docs before code, not after.

**His reply:** Agreed. They're experimenting with different rigor levels. Core problem: non-engineers don't know what changed. Asked about our spec-to-code workflow.

**Our reply:** Context-aware approach. Light specs for well-scoped work, more upfront writing for ambiguous work. Shared we're building similar workflow internally.
