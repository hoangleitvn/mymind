---
type: linkedin-engagement
created: '2026-01-20'
last_updated: '2026-01-20'

author:
  name: "John Crickett"
  linkedin_url: "https://uk.linkedin.com/in/johncrickett"
  profile: "people/john-crickett.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/johncrickett_quick-question-for-anyone-using-ai-coding-activity-7419053548493139968-6QiX"
  activity_id: "7419053548493139968"
  date: '2026-01-20'
  reactions: 44
  comments_count: 10
  reposts: 0
  theme: "AI coding tools and spec-driven development"
  angle: "Seeking real-world feedback on Kiro and spec-driven approach"
  key_points:
    - Amazon launched Kiro with spec-driven development approach
    - Asking if anyone actually does spec-driven development vs prompting
    - Wondering if structure helps or adds overhead
    - Wants real experience, not marketing claims
  hashtags: []

thread_topic: "Spec-driven AI development adoption"
topic_tags: [ai-development, spec-driven-development, kiro, ai-coding-tools]

engagement_status: "posted"
response_received: false
follow_up_needed: true
follow_up_date: '2026-01-23'
---

## Original Post

Quick question for anyone using AI coding tools. Amazon recently launched Kiro, which is all about spec-driven development. Write your specs, let AI agents handle the implementation. Sounds great in theory. But I'm curious: * Is anyone actually doing spec-driven development with AI, or are we all still winging it with prompts? * Does adding structure help, or does it just feel like extra overhead? * For those who've tried Kiro: what's your real experience been? * If you haven't tried it: what's holding you back, or what would get you interested? I'm going to be experimenting with new tools soon and want to hear what's actually working for people, not just what the marketing says.

## Notable Comments

```yaml
- id: 1737357600000
  author: "Denson Smith"
  profile: null
  sentiment: "negative"
  content: |
There is no strong public evidence that process-level effects from SDD exceed what a disciplined human + good prompts can already achieve. It is trivial to do experiments where we compare methods. If it really worked I'd expect Amazon to have already done the studies and publish the results. I suspect what happened instead they did the study and did not like the marketing result so did not publish the study just the product.
  reactions: 2
  insight: "Skeptical take on SDD benefits - wants evidence"
  replies: []

- id: 1737357700000
  author: "Navnit Shukla"
  profile: null
  sentiment: "positive"
  content: |
It has both Vibe and Spec modes, and you can choose the mode based on your needs. I found Spec mode is fairly helpful when I am working on a very long project that requires planning, and also when I am looking to document and remember what is already done. I use Vibe when I need to build a quick POC or code to test something out. I have been using it since it was in private beta, and I really like it.
  reactions: 2
  insight: "Actual Kiro user with nuanced view - uses both modes situationally"
  replies: []

- id: 1737357800000
  author: "Jason Sosa, PhD"
  profile: null
  sentiment: "positive"
  content: |
I've been doing spec-driven development for some time. I think it is potentially one of the best ways to get reliable results out of LLM development, specially for complex tasks, like end to end app development. But as someone else wrote here it feels like we get to do the boring stuff, like documentation and the LLM gets to have all the fun writing code.
  reactions: 1
  insight: "Spec-driven advocate but shares common frustration about boring vs fun work"
  replies: []
```

## Our Engagement

```yaml
- id: 1737360000000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Haven't tried Kiro, but experimented with SpecKit and OpenSpec. Ran into the same friction: specs too verbose for AI context windows, developers skip writing them, or they rabbit-hole into unnecessary detail.

Ended up building my own lightweight spec workflow. Works well for greenfield.

The bigger issue I'm seeing: projects built with AI now have code but zero documentation. No specs, no design docs. That's going to hurt when they need to maintain or extend it.
  strategy: "Add Context - Share real experience with spec-driven tools (SpecKit, OpenSpec), specific challenges found, built own solution, and observation about AI-built projects lacking documentation"
  replies: []
```

## Notes

- John is gathering real feedback for future content/experimentation
- High visibility opportunity (200K+ followers)
- My response aligns with captured moments about Kiro/spec-driven development
- Follow up in 2-3 days to see if conversation develops
