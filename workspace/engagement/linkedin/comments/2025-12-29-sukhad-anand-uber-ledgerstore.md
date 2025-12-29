---
type: linkedin-engagement
created: '2025-12-29T00:00:00+07:00'
last_updated: '2025-12-29T00:00:00+07:00'

author:
  name: "Sukhad Anand"
  profile: "people/sukhad-anand.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/sukhad007_systemdesign-uber-database-activity-7411148850909855744-kR41"
  date: '2025-12-29'
  reactions: 128
  comments_count: 6
  reposts: 0
  theme: "Uber LedgerStore - tiered storage for cost optimization"
  angle: "99% of queries touch recent data - design for actual usage patterns"
  key_points:
    - 99% of queries only touch data from last few weeks
    - Old data in expensive DynamoDB is waste
    - Solution - Hot tier (DynamoDB) + Cold tier (S3/Blob)
    - Control plane routes queries by data recency
    - Cost becomes first-class architectural constraint at scale
  hashtags: [SystemDesign, Uber, Database]

thread_topic: "Cost as first-class architectural constraint - senior engineer shift"
topic_tags: [system-design, cost-optimization, architecture, tiered-storage]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Sukhad Anand (101K followers): How Uber reduced infrastructure costs through architectural innovation in handling payment history data.

"99% of queries only touch data from the last few weeks" yet older records remained in expensive DynamoDB.

Solution - LedgerStore with tiered storage:
- Hot tier: DynamoDB handles recent transactions (fast, expensive)
- Cold tier: S3/Blob storage for aged data (slow, economical)
- Control plane routes queries intelligently based on data recency

Developers experience no change while CFO sees significant cost reduction.

## Notable Comments

```yaml
- id: 1735430400000
  author: "Hemanth Aragonda"
  profile: null
  sentiment: "positive"
  content: |
    "Cost becomes a first class architectural constraint rather than an afterthought" at scale.
  reactions: 0
  insight: "Validates cost-as-constraint framing"
  replies: []

- id: 1735430400001
  author: "Tej Stead"
  profile: null
  sentiment: "skeptical"
  content: |
    Questioned whether this is novel - archiving patterns are common practice.
  reactions: 0
  insight: "Valid point - the insight is in execution not novelty"
  replies: []
```

## Our Engagement

```yaml
- id: 1735430400002
  type: "comment"
  reply_to: null
  status: "posted"
  timestamp: '2025-12-29T00:00:00+07:00'
  content: |
    Simple pattern. Massive impact.

    The best architecture decisions aren't clever. They're obvious once you look at the data.

    Cost as a first-class constraint - that's the senior engineer shift. Not "how do we make it work" but "how do we make it work sustainably at scale."
  strategy: "Combine simplicity insight with senior engineer maturity framing - aligns with practical engineering theme"
```

## Notes

- Sukhad Anand (101K followers) - major system design creator
- Post about real Uber architecture - high credibility content
- Our angle: simplicity over cleverness + senior engineer maturity shift
- Connects to architect mindset, practical engineering themes
- Content seed: "Obvious once you look at the data" as hook
