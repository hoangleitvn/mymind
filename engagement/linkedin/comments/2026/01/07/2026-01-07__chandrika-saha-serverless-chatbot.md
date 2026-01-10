---
type: linkedin-engagement
created: '2026-01-07T03:20:00Z'
last_updated: '2026-01-07T04:45:00Z'

author:
  name: "Chandrika S."
  profile: "people/chandrika-saha.md"
  linkedin_url: "https://ca.linkedin.com/in/chandrika-saha-cse"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/chandrika-saha-cse_aws-serverless-machinelearning-activity-7413041041114619904-vDgX"
  activity_id: "7413041041114619904"
  date: '2026-01-03'
  reactions: 9
  comments_count: 4
  reposts: 0
  theme: "Serverless AI architecture cost optimization"
  angle: "Real cost breakdown of serverless AI chatbot on AWS"
  key_points:
    - Serverless AI chatbot for ~$0.40/month
    - HTTP API over REST API (70% cost reduction)
    - Nova Micro for cost-efficient LLM inference
    - Full cost breakdown with real numbers
  hashtags: ["AWS", "Serverless", "MachineLearning", "CloudArchitecture"]

thread_topic: "Serverless AI chatbot cost optimization"
topic_tags: [serverless, aws, bedrock, lambda, cost-optimization, ai-chatbot]

engagement_status: "replied"
response_received: true
follow_up_needed: false
follow_up_date: null
---

## Original Post

Built a serverless AI chatbot on AWS for ~$0.40/month. Architecture: API Gateway (HTTP) → Lambda → Amazon Bedrock (Nova Micro) Key design decisions: • HTTP API over REST API (70% cost reduction) • Nova Micro for cost-efficient LLM inference on short prompts • Fully serverless → no idle infrastructure Cost breakdown: Lambda $0.20 | API Gateway $0.10 | Bedrock $0.06 | S3 $0.04 The demo video shows real-time interaction with the deployed system. A public live demo and a full technical write-up are linked in the comments. #AWS #Serverless #MachineLearning #CloudArchitecture

## Notable Comments

```yaml
- id: 1736150400000
  author: "Chandrika S."
  profile: "people/chandrika-saha.md"
  sentiment: "neutral"
  content: |
Live public site: https://serverless-llm-chatbot-with-api-lamda.s3.us-east-2.amazonaws.com/index.html Technical write-up (architecture + cost analysis): https://medium.com/@chandrika.cse1.bu/building-a-0-40-month-ai-chatbot-using-aws-serverless-architecture-291cfa268b9e Source code: https://github.com/Chandrika-Saha/serverless-llm-chatbot
  reactions: 1
  insight: "Links to demo, Medium article, and GitHub repo"
  replies: []
```

## Our Engagement

```yaml
- id: 1736230800000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
This is the serverless sweet spot. Low/variable traffic, pay-per-invocation, zero idle cost.

The HTTP API choice is smart. Most teams default to REST API without checking if they actually need the extra features.

Have you explored multi-step agent workflows on Lambda? Curious how you'd handle state management and orchestration when conversations need more than a single LLM call. Step Functions, or something else?
  strategy: "Add Context + Ask - validate her design and ask about agent/workflow patterns on Lambda"
  replies:
    - id: 1736231000000
      author: "Chandrika S."
      content: |
Thanks! Exactly! For multi-step agents, I would go with DynamoDB for state + Lambda for execution, probably most cost-effective. Step Functions would work for complex orchestration, but add to costs. What's your go-to pattern for stateful workflows?
      our_reply:
        status: "posted"
        content: |
Agreed, DynamoDB is great for state. Many tools like Terraform built with it too.

For Step Functions, since Durable Functions style is now supported in Lambda, I'd use it for AWS service orchestration (like running an ECS task), then default all business workflow logic inside Lambda. Easy to implement, no need for a solid Saga pattern since try/catch wins.

I wrote the full analysis after AWS re:Invent 2025 here: https://innomizetech.com/blog/aws-lambda-s-biggest-update-in-years-what-it-means-for-your-architecture
```

## Notes

- Perfect example of serverless for the right workload
- Aligns with my serverless vs containers content
- Real cost breakdown adds credibility
- She has technical write-up on Medium worth reading
- Good conversation started. She asked back about my stateful workflow patterns.
- Shared pattern: Step Functions for AWS service orchestration, Lambda for business workflow logic
- Mentioned Durable Functions style now supported in Lambda, try/catch over Saga pattern
