---
type: linkedin-engagement
created: '2026-01-07T01:40:00Z'
last_updated: '2026-01-07T01:40:00Z'

author:
  name: "Tamás Sallai"
  profile: "people/tamas-sallai.md"
  linkedin_url: "https://hu.linkedin.com/in/sallait"

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

engagement_status: "conversation"
response_received: true
follow_up_needed: false
follow_up_date: null
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
  replies:
    - author: "Tamás Sallai"
      date: "2026-01-08"
      content: |
        For me it's mostly complexity. A serverless architecture is hard to develop: things are asynchronous, it's near-impossible to test locally (Lambda runs on my laptop, but most of the things it calls won't), pairs best with DynamoDB that has no schema, has eventually consistent secondary indices (though with the managed instances it might be changing as that could potentially handle a long-running connection to a database), just to name a few things.

        Then I compare it with a local development that starts in seconds, everything is in-process, the full request runs in a transaction, and I generally don't have to worry about how much data I request.

        That's my reasoning so far.

- id: 1736323200000
  type: "reply"
  status: "posted"
  sentiment: "positive"
  content: |
    Valid points. The dev and testing friction applies to any cloud architecture though, not just serverless. You're validating cloud services, not just business logic.

    It depends on what you're building. A monolith or modular app can run on a single Lambda. With managed instances, cold starts aren't the issue anymore.

    Serverless is a compute model: offload infrastructure management, focus on app code. For most apps, CDN + API Gateway + Lambda + DynamoDB/RDS + S3 is enough.

    When you add async (SQS, event-driven patterns), complexity grows. At that point, K8s might fit better since you're effectively building microservices anyway.

    Simple first. Always.
  strategy: "Add Context - acknowledge his points, share nuanced perspective on when serverless fits"
  replies: []
```

## Notes

- Tamás is reconsidering serverless - timing aligns with my article
- His post has low engagement (11 reactions, 0 comments) - good opportunity to start conversation
- He wrote an article explaining his doubts - worth reading for deeper engagement
- Could be valuable connection in AWS/serverless space
