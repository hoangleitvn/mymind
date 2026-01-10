---
type: linkedin-engagement
created: '2026-01-06T15:37:00Z'
last_updated: '2026-01-06T15:37:00Z'

author:
  name: "Kristina Chodorow"
  profile: "people/kristina-chodorow.md"
  linkedin_url: "https://www.linkedin.com/in/kchodorow"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/kchodorow_one-thing-ive-heard-a-lot-in-junior-dev-activity-7414323618559721473-mCAU"
  activity_id: "7414323618559721473"
  date: '2026-01-06'
  reactions: 0
  comments_count: 0
  reposts: 0
  theme: "System design mentorship and tradeoffs"
  angle: "No right way - teach questions not answers"
  key_points:
    - Junior devs want mentors to show the right way
    - There is no right way - every system is unique
    - System design is about navigating tradeoffs
    - Teach them to ask why, not memorize answers
  hashtags: []

thread_topic: "System design mentorship - questions over answers"
topic_tags: [system-design, mentorship, engineering-leadership, tradeoffs, junior-devs]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

One thing I've heard a lot in junior dev interviews a lot lately: "I just want a mentor to show me how to design a system the right way." Unfortunately, there is no "right way." Much like intelligence, it's not about knowing the answer. It's about understanding why that's the answer. Teaching someone that a certain system design is "correct" is actually a disservice. Why? Because every system is a unique snowflake of requirements and constraints. A "perfect" architecture for a high-frequency trading platform is a disastrous architecture for a mobile video chat which would be different than an enterprise SaaS app which in turn... System design isn't about following a manual; it's about asking questions and navigating tradeoffs: * Latency vs. Throughput: Do you need it fast or do you need a lot of it? * Consistency vs. Availability: Can the data be slightly old, or must it be 100% accurate 100% of the time? * Cost vs. Performance: Do you have a blank check for AWS, or are we running this on a shoestring budget? * Build vs. Buy: Is this core to our business, or should we just pay for a SaaS? Stop giving them the answers and start telling them about the disasters (best way to learn is falling on your face, but you can prevent some of that). Start asking them the "Why." Instead of saying "Use microservices," ask them: "What happens if the network fails here?" The goal shouldn't be to teach them how to build this system perfectly. It's to teach them how to ask the right questions, avoid the common pitfalls, and build every system better than the last.

## Notable Comments

```yaml
[]
```

## Our Engagement

```yaml
- id: 1736177820000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
The "right way" question reveals a mental model problem. They think design is like math: one correct answer. The shift happens when they realize it's chess. Every move has tradeoffs.

What works: pair them on real decisions. Then ask "what would you change if latency mattered 10x more?" Builds tradeoff muscle faster than tutorials.
  strategy: "amplify + add-experience - reinforce thesis with chess analogy and practical technique"
  replies: []
```

## Notes

- Strong alignment with "think in principles, not playbooks"
- Second engagement with Kristina (first was clean code post 2025-12-09)
- Good potential connection - similar views on architecture and mentorship
