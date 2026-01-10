---
type: linkedin-engagement
created: '2026-01-09T08:25:00Z'
last_updated: '2026-01-09T08:25:00Z'

author:
  name: "Yan Cui"
  profile: "people/yan-cui.md"
  linkedin_url: "https://nl.linkedin.com/in/theburningmonk"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/theburningmonk_local-dev-with-serverless-activity-7415301569031962624-Cq8T"
  activity_id: "7415301569031962624"
  date: '2026-01-09'
  reactions: 11
  comments_count: 1
  reposts: 0
  theme: "Local development with serverless"
  angle: "Multiple approaches exist, align workflow to architecture"
  key_points:
    - You can do local dev with serverless, five ways to do it
    - Approach depends on architecture (direct integrations, IaC choice, ephemeral envs)
    - Mechanical sympathy - understand tools to align workflow with their strengths
  hashtags: []

thread_topic: "Serverless local development strategies"
topic_tags: [serverless, aws, local-development, developer-experience, mechanical-sympathy]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

People say you can't do local dev with serverless. You can, and here are five ways to do it. The mistake is trying to force one local workflow onto every architecture. Your approach changes if you're using direct integrations, if your IaC is CDK vs Terraform, and whether you can spin up ephemeral environments on demand. A bit of mechanical sympathy* goes a long way. Stop fighting your tools, understand them and align your workflow to maximise their strengths. * AWS Well-Architected Framework defines "mechanical sympathy" as: Mechanical sympathy is when you use a tool or system with an understanding of how it operates best. When you understand how a system is designed to be used, you can align with the design to gain optimal performance.

## Notable Comments

```yaml
- id: 1736414000000
  author: "Anton Martyniuk"
  profile: null
  sentiment: "positive"
  content: |
LocalStack for AWS is such a time and money saver during development. Oh, I see that AWS also has a Well-Architected framework, just like the Azure does (Microsoft docs)
  reactions: 1
  insight: "LocalStack mention - one of the common approaches"
  replies: []
```

## Our Engagement

```yaml
- id: 1736414500000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Thanks for bringing the term "mechanical sympathy" here. We use some of the approaches you mentioned, but remocal is new to me. Will check it out with our team.
  strategy: "Amplify - appreciate the framing, show genuine interest in learning"
  replies: []
```

## Notes

- Third engagement with Yan Cui
- Early post (20 min old), good timing for visibility
- "Mechanical sympathy" is a great framing for tool-workflow alignment
- Remocal mentioned in the linked article - worth exploring
