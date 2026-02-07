---
title: "Why We Left Serverless Framework After Years of Use"
type: linkedin-post
status: published
created: 2026-01-20
published_date: "2026-01-26T09:41:14.977Z"
post_url: "https://www.linkedin.com/feed/update/urn:li:activity:7421487375878443008/"
theme: technical-architecture
persona: tech-leader
audiences: [engineers, architects, CTOs, DevOps]
key_message: "CDK lets us standardize IaC across platform and application layers"
hook_type: personal-experience
target_hashtags: [AWS, CDK, Serverless, IaC, CloudEngineering]
optimal_post_time: Tuesday-Wednesday, 8-10am
word_count: ~330
references:
  - https://www.serverless.com/blog/serverless-framework-v4-a-new-model
  - https://www.serverless.com/pricing
  - https://dev.to/aws-heroes/whats-next-with-the-serverless-framework-in-2025-121d
---

We used Serverless Framework for years. It worked.

Then we switched to CDK. Here's why.

WHAT SERVERLESS FRAMEWORK DID WELL

→ Fast Lambda deployments
→ Great local dev experience
→ Simple serverless.yml for basic APIs

For small projects, it was perfect.

THE PROBLEMS WE HIT

1/ The v4 pricing model

Serverless Framework v4 requires paid credits for organizations over $2M annual revenue. $3.5 per reserved credit, $4 per overage credit, per deployed service instance.

CDK is open source. No revenue thresholds. No per-deployment costs.

2/ Two IaC systems for one project

Serverless Framework handles Lambda well. But VPCs, RDS, Cognito, IAM policies? We wrote raw CloudFormation or use Terraform anyway.

Platform infrastructure in YAML or TS files. Application code in Serverless Framework. Two systems. Two mental models. Double the maintenance.

3/ v3 is sunsetting

Node.js 20 support ends April 2026. The community forked v3 to "oss-serverless" but we'd rather invest in a tool with long-term AWS backing.

WHY CDK WORKS BETTER FOR US

1/ One tool for everything

Platform IaC (VPC, RDS, networking) and application IaC (Lambda, API Gateway, DynamoDB) in the same codebase. Same language. Same patterns.

2/ Real programming

TypeScript instead of YAML. Type checking. IDE autocomplete. Loops and conditionals without template hacks.

3/ Testable and reusable

Jest tests for infrastructure. Constructs we built once deploy multi-tenant patterns to new clients in minutes.

THE TRADEOFF

CDK has a steeper learning curve. And it's AWS-only—if you need true multi-cloud from one codebase, look at Terraform or Pulumi.

But for teams shipping AWS infrastructure across multiple projects? One unified, free IaC system wins.

What's your IaC setup? Still on Serverless Framework or moved on?

#AWS #CDK #Serverless #IaC #CloudEngineering
