---
type: linkedin-engagement
created: '2026-01-06T10:30:00Z'
last_updated: '2026-01-06T11:00:00Z'

author:
  name: "Hoang Le"
  profile: "self"

post:
  source: "own_post"
  url: "https://www.linkedin.com/posts/hoangleitvn_engineering-techleadership-softwaredevelopment-activity-7414108472507564033-iMp6"
  date: '2026-01-06'
  reactions: null
  comments_count: 4
  reposts: null
  theme: "Documentation and sustainable engineering practices"
  angle: "Best engineers leave breadcrumbs, not just ship fast"
  key_points:
    - "Best engineers aren't fastest coders - they leave breadcrumbs"
    - "10 practices: READMEs before code, descriptive commits, decision rationale"
    - "Document the 'why' behind code, not just the 'what'"
    - "Treat documentation as feature requirement"
    - "Skipping documentation creates future debt"
  hashtags: [engineering, techleadership, softwaredevelopment]

thread_topic: "Sustainable engineering through documentation"
topic_tags: [documentation, engineering-practices, code-quality, team-scaling]

engagement_status: "posted"
response_received: true
follow_up_needed: false
follow_up_date: null
---

## Original Post

"The best engineers I know aren't the fastest coders. They're the ones who leave breadcrumbs."

10 practices for building sustainable code:
1. Writing READMEs before code
2. Crafting descriptive commit messages
3. Documenting decision rationale
4. Explaining the "why" behind code
5. Considering future maintainers
6. Treating documentation as feature requirement
7. Using clear naming conventions
8. Writing tests that demonstrate intent
9. Adding contextual TODO comments
10. Recognizing that skipping documentation creates future debt

Key message: "Ship fast. But leave breadcrumbs."

## Notable Comments

```yaml
- author: "Vinh Duong"
  summary: "Documentation is 'infrastructure for growth' - enables faster onboarding, prevents knowledge silos that cause teams to plateau"
  sentiment: "supportive"

- author: "Trieu Bui"
  summary: "Comprehensive test cases can serve as documentation without separate documents"
  sentiment: "counterpoint"
  thread:
    - type: "our_reply"
      summary: "Tests as docs works with intent; gap is tests don't capture why this approach over alternatives"
    - type: "their_reply"
      summary: "Different tools for different purposes - TDD/BDD capture design decisions, not just verification. Don't mix all together."

- author: "Rae-An Andres"
  summary: "'You are not guilty from git blame' - good documentation eliminates blame scenarios"
  sentiment: "supportive"

- author: "Marcel Stredak"
  summary: "Questions why 'ship fast' is the trend when breadcrumbs matter more - advocates 'build to last, not once'"
  sentiment: "supportive"
```

## Our Engagement

```yaml
- id: 1
  type: "reply"
  to: "Vinh Duong"
  status: "draft"
  content: |
Spot on.

Teams plateau when every question requires finding "the person who knows." Documentation converts tribal knowledge into searchable knowledge. The ROI shows up in onboarding time and reduced interruption overhead.
  strategy: "Amplify his point + add concrete outcome (onboarding time, interruptions)"

- id: 2
  type: "reply"
  to: "Trieu Bui"
  status: "posted"
  content: |
Tests as documentation works when they're written with that intent. The test name becomes the spec, the setup shows context, the assertion documents expected behavior.

The gap: tests don't capture *why* you chose this approach over alternatives. A test proves "this works." A decision doc explains "why this, not that."

Both have a place. Neither replaces the other.
  strategy: "Acknowledge validity + add nuance about what tests don't capture"

- id: 5
  type: "reply"
  to: "Trieu Bui"
  status: "draft"
  content: |
Fair point. Right tool for right purpose. Architecture diagrams, specs, BDD, ADRs - each captures different context. The trap is assuming one tool covers everything.
  strategy: "Concise agreement, no argument"

- id: 3
  type: "reply"
  to: "Rae-An Andres"
  status: "draft"
  content: |
Cannot remember how many times I asked: WHY THEY USE THIS | WHY THEY CODED LIKE THIS, etc.

The best outcome of good commit messages: git blame becomes git *context* instead of git *shame*.

When the message explains the why, the conversation shifts from "who broke this?" to "what were we optimizing for back then?"
  strategy: "Match lighthearted tone + reframe git blame as git context"

- id: 4
  type: "reply"
  to: "Marcel Stredak"
  status: "draft"
  content: |
Thanks Marcel!

"Ship fast" gets misunderstood. The original intent: avoid premature optimization, get to validation before overcommitting. That's valid.

But building is easy now. The harder problem flipped. I often push founders to ship sooner, not later.

The real issue: shipping without clarity. Speed without discipline is one failure. Speed without understanding why you failed is two failures.

Breadcrumbs aren't about slowing down. They're about learning faster from what you ship.

Build to last, not once. Exactly.
  strategy: "Reframe 'ship fast' as valid concept, share real experience (pushing founders to ship), introduce 'two failures' concept, connect breadcrumbs to learning velocity"
```

## Notes

- Good engagement on documentation theme
- Trieu's counterpoint about tests is valid - worth exploring in future content
- "Infrastructure for growth" framing from Vinh is quotable
