---
type: linkedin-engagement
created: '2025-12-15T10:00:00Z'
last_updated: '2025-12-15T10:00:00Z'

post:
  source: "internal"
  source_file: "../../published/linkedin/aws-rds-cost-optimization-substack-share.md"
  url: "https://www.linkedin.com/posts/hoangleitvn_aws-rds-cloudcost-activity-7406177859314159618-3ZxK"
  date: '2025-12-15'
  reactions: null
  comments_count: null
  reposts: null

thread_topic: "AWS RDS cost optimization - Database Savings Plans and SQL Server Developer Edition"
topic_tags: [aws, rds, cloud-cost, finops, database-engineering]

engagement_status: "active"
response_received: true
follow_up_needed: false
follow_up_date: null
---

## Original Post

See source_file for full content. AWS re:Invent deep dive on Database Savings Plans and SQL Server Developer Edition for RDS cost optimization.

## Notable Comments

```yaml
- id: 1734260400000
  author: "Jordan Dea-Mattson"
  profile: "people/jordan-dea-mattson.md"
  sentiment: "positive"
  content: |
Thanks for all of these summaries and reports! Really helpful for keeping abreast of things.
  reactions: null
  insight: "Appreciation for re:Invent content series. Shows value of consistent technical content."
  replies: []
```

## Our Engagement

```yaml
- id: 1734260700000
  type: "reply"
  status: "posted"
  sentiment: "positive"
  content: |
Thank Jordan Dea-Mattson! Writing these helps me learn re:Invent too. Any specific AWS areas you'd want me to dig into next or if you have any insights that you are going to share about this, I would love to read.
  strategy: "Appreciative + invite content ideas + offer to read his content. Builds relationship by showing genuine interest in his perspective."
  replies: []
```

## Our Follow-up Comment

```yaml
- id: 1734350400000
  type: "thread_addition"
  status: "draft"
  sentiment: "informative"
  content: |
Update: Applied these learnings to our own AWS audit. Here's what we found:

Quick wins (~$200/mo savings for a client project):
→ Upgrade db.t3 to db.t4g (Graviton = better price-performance)
→ Migrate MySQL 5.7.44 to v8 (5.7 is deprecated, we're paying $172/mo extended support fee)

Additional opportunities identified:
→ EC2 Reserved Instances: ~$145/mo savings
→ EC2 Savings Plan: ~$142/mo savings
→ RDS RI (if staying on db.t3): ~$67/mo

Our approach: t4g upgrade first (immediate win, no commitment), then evaluate RI/Savings Plans based on usage patterns.

The real lesson? Audit regularly. Deprecated versions and instance type gaps add up quietly.
  strategy: "Share real application of re:Invent learnings. Adds credibility through specifics. Invites others to share their findings."
  replies: []
```

## Notes

- Jordan commented on AWS re:Invent series finale
- Good opportunity to get content ideas from audience
- Opened door for him to share his own insights
- Follow-up comment adds real-world validation to the post content
