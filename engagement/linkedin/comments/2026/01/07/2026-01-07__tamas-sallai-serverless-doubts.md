---
type: linkedin-engagement
created: '2026-01-07T01:40:00Z'
last_updated: '2026-01-07T01:40:00Z'

author:
  name: "Tamás Sallai"
  profile: "people/tamas-sallai.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/sallait_im-changing-my-mind-about-serverless-i-activity-7413693917641986048-8gUg"
  activity_id: "7413693917641986048"
  date: '2026-01-05'
  reactions: 11
  comments_count: 0
  reposts: 0
  theme: "Serverless architecture reconsidered"
  angle: "Questioning the 'ideal architecture' after years of serverless advocacy"
  key_points:
    - Kept serverless as 'ideal architecture' for years
    - AWS serverless worked the same for small and large
    - The terraform apply + auto-scaling feeling was magical
    - Now reconsidering - wrote an article explaining why
  hashtags: []

thread_topic: "Serverless architecture doubts"
topic_tags: [serverless, aws, architecture, cloud]

engagement_status: "posted"
response_received: false
follow_up_needed: true
follow_up_date: '2026-01-10'
---

## Original Post

I'm changing my mind about serverless I keep track of an "ideal architecture", one that I would use if tasked to design a new system from scratch. For several years now this was AWS serverless. The AWS part is personal: this is the stack I'm most familiar with. And serverless because it works the same for small and for large. It is a magical feeling to do a terraform apply and see that all the different parts are coming live, ready to serve whatever load coming its way. A well-designed serverless application combines the best of all worlds: the cost scales with traffic and there is no upper ceiling. Now? I'm not sure anymore. (I got a bit carried away and it does not fit in a post. So I published an article instead)

## Notable Comments

```yaml
[]
```

## Our Engagement

```yaml
- id: 1736217600000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Same journey here. Serverless was my default for years. Still is for many workloads.

What changed my thinking: the "Lambda is expensive at scale" argument got weaker. Lambda Managed Instances now has Savings Plans and no cold starts. The economics shifted.

Curious what drove your reconsideration. Cost? Complexity? Something else?
  strategy: "Add Context - share parallel experience while genuinely asking what changed for him"
  replies: []
```

## Notes

- Tamás is reconsidering serverless - timing aligns with my article
- His post has low engagement (11 reactions, 0 comments) - good opportunity to start conversation
- He wrote an article explaining his doubts - worth reading for deeper engagement
- Could be valuable connection in AWS/serverless space
