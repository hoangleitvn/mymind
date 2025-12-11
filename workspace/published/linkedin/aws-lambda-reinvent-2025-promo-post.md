---
title: "AWS Lambda re:Invent 2025: Durable Functions & Managed Instances"
type: linkedin-post
status: published
created: 2025-12-07
topic: cloud-architecture
theme: Modern Engineering
persona: founder
audiences: [developers, tech-leaders, cloud-architects]
key_message: AWS Lambda gets major updates - Durable Functions for workflows, Managed Instances for cost savings
hook_type: problem-solution
target_hashtags: [AWS, Lambda, Serverless, CloudArchitecture, reInvent2025]
word_count: 150
published_date: '2025-12-07T07:43:01Z'
post_url: https://www.linkedin.com/feed/update/urn:li:activity:7403338350969229313/
article_link: https://hoangleitvn.substack.com/p/aws-lambdas-biggest-update-in-years
visual: assets/covers/aws-lambda-reinvent-2025-cover.png
---

Lambda is too expensive at scale, can't handle complex workflows, has cold start issues. These were valid complaints. Until this week.

AWS re:Invent 2025 addressed all three:

1. Managed Instances: EC2 pricing with Lambda simplicity
2. Durable Functions: Multi-step workflows without Step Functions
3. Predictive pre-warming: Cold starts eliminated (they claim)

I dug into the pricing and trade-offs so you don't have to.

The short version:
- Durable Functions: 68% cheaper than Step Functions for same operations
- Managed Instances: 14%+ savings at high volume, up to 72% with commitments
- But there are catches (thread safety, determinism requirements)

Full breakdown with real cost scenarios in the article.

Link in comments.
