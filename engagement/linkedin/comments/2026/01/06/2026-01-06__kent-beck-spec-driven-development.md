---
type: linkedin-engagement
created: '2026-01-06T09:56:00+07:00'
last_updated: '2026-01-06T10:15:00+07:00'

author:
  name: "Kent Beck"
  profile: "people/kent-beck.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/kentbeck_the-descriptions-of-spec-driven-development-activity-7413956151144542208-EGMz"
  activity_id: "7413956151144542208"
  date: '2026-01-06'
  reactions: 882
  comments_count: 10
  reposts: 0
  theme: "Spec-driven development critique"
  angle: "Writing whole spec before implementation encodes flawed assumption about learning"
  key_points:
    - Spec-driven assumes you won't learn during implementation
    - This assumption is "bizarre" to Kent Beck
    - The "get spec right first" fallacy keeps repeating
  hashtags: []

thread_topic: "Spec-driven development and learning during implementation"
topic_tags: [spec-driven, ai-coding, adaptive-spec, reasoning-models]

engagement_status: "drafted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

The descriptions of Spec-Driven development that I have seen emphasize writing the whole specification before implementation. This encodes the (to me bizarre) assumption that you aren't going to learn anything during implementation that would change the specification. I've heard this story so many times told so many ways by well-meaning folks--if only we could get the specification "right", the rest of this would be easy.

## Notable Comments

```yaml
- id: 1736135800000
  author: "Per-Erik Bergman"
  profile: null
  sentiment: "neutral"
  content: |
    I see a middle ground here, Kent. In an AI-augmented workflow, the 'Spec' isn't a static document, it's the refined intent the Agent needs to start the TDD loop effectively. For me, Spec-Driven isn't about separating design from coding; it's about front-loading the 'What' so that the 'How' (via TDD) stays on track.
  reactions: 1
  insight: "Middle ground view - spec as refined intent for AI/TDD, not static document"
  replies: []

- id: 1736135900000
  author: "Steve Freeman"
  profile: null
  sentiment: "positive"
  content: |
    Well, it is technically correct that if one could write the spec up front then the rest is easy. A big "if". In my entire career, I've only met a couple of people who could think hard for 3 months and then type it in, and that was for deeply technical code like a constraint system.
  reactions: 5
  insight: "Validates Kent's point - upfront spec is rare skill, only works for deeply technical code"
  replies: []

- id: 1736136000000
  author: "Michael Dausmann"
  profile: null
  sentiment: "positive"
  content: |
    AI Code tools revolutionise the coding part of the process but they don't fundamentally change whatever macro process worked before. If you needed a dedicated test team before, you probably still need them.
  reactions: 1
  insight: "AI changes coding, not macro process - roles remain"
  replies: []

- id: 1736136100000
  author: "Ken Pugh"
  profile: null
  sentiment: "neutral"
  content: |
    When you learn something, you just change the spec/test and ask AI to re-code it. A bit more effort on AI's part, but it doesn't mind all that work. My viewpoint is that the tests are the specification.
  reactions: 2
  insight: "Tests as specification - iterative spec change with AI"
  replies: []
```

## Our Engagement

```yaml
- id: 1736136900000
  type: "comment"
  status: "drafted"
  sentiment: "positive"
  content: |
This hits on something I've been navigating with AI-assisted development.

HOW specs still make sense when exact steps matter. Financial procedures, compliance workflows, regulatory requirements. You need the prescription.

For everything else, reasoning models changed the game. We spec WHAT and WHY. Let the model figure out HOW. That's where it brings value.

The shift isn't spec vs no spec. It's knowing which level to spec for which context.
  strategy: "Add experience - share adaptive spec insight from AI coding levels framework, connects to reasoning models handling HOW"
  replies: []
```

## Notes

- Kent Beck (75K followers) - legendary figure, creator of TDD and XP
- Post aligns with our Levels of AI Coding framework (Level 3 HOW vs Level 4 WHAT+WHY)
- Connects to our "specification hell to vibe coding" post and 47-page doc story
- Key insight: HOW specs valid for regulated contexts, WHAT+WHY specs for everything else with reasoning models
- High engagement post (882 reactions in 12h) - good visibility opportunity
