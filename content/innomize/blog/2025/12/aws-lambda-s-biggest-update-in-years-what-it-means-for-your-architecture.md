---
title: "AWS Lambda's Biggest Update in Years: What It Means for Your Architecture"
type: article
status: imported
author: INNOMIZE
source: innomize-cms
source_id: 122
slug: aws-lambda-s-biggest-update-in-years-what-it-means-for-your-architecture
url: "https://innomizetech.com/blog/aws-lambda-s-biggest-update-in-years-what-it-means-for-your-architecture"
created: 2025-12-24
published: 2025-12-07
locale: en
excerpt: "Durable Functions vs Step Functions, Managed Instances vs Standard Lambda: pricing and trade-offs."
---

# AWS Lambda's Biggest Update in Years: What It Means for Your Architecture

Earlier this week at re:Invent, the AWS Lambda team released several major features. I spent the past few days digging through the announcements, documentation, and session recordings.

Two features stand out: **Durable Functions** and **Managed Instances**. Both address long-standing complaints about Lambda's limitations. But whether they're right for your team depends on your workload patterns and cost structure.

Here's my breakdown: what they are, when to use them, and what they'll actually cost.

## 1. Durable Functions: A Simpler Alternative to Step Functions?

### What It Is

Durable Functions let you write multi-step workflows directly in your Lambda code. No separate state machine. No learning ASL (Amazon States Language). Just code.

The key primitives:
- **Steps**: Checkpoint your progress. If Lambda crashes, it resumes from the last checkpoint.
- **Waits**: Suspend execution (up to 1 year) without paying for idle compute.
- **Callbacks**: Wait for external events like human approval or webhook responses.

```typescript
exports.handler = withDurableExecution(async (event, context) => {
  // Step 1: Process payment (auto-checkpointed, auto-retry on failure)
  const payment = await context.step('process_payment', async () => {
    return await paymentService.charge(event.amount);
  });

  // Wait for human approval (no compute charges during wait)
  await context.waitForCallback('manager_approval', {
    timeout: 86400000  // 24 hours
  });

  // Step 2: Complete order (resumes after approval)
  await context.step('complete_order', async () => {
    return await orderService.complete(payment.id);
  });
});
```

### Pricing: Durable Functions vs Step Functions

**Durable Functions pricing (US East):**
- **$8 per million operations** (checkpoints, steps, waits)
- **Storage charges** for checkpoint data (volume + retention)
- **Standard Lambda compute** still applies when code runs
- **No charges** during wait/suspend periods

**Step Functions Standard pricing (US East):**
- **$25 per million state transitions**
- 4,000 free state transitions per month
- Each retry counts as additional transition

**Step Functions Express pricing:**
- **$1 per million requests** + duration-based charges
- Max 5-minute execution (vs 1 year for Durable Functions)

### Cost Comparison: Real Scenarios

**Scenario 1: Order Processing Workflow**
100,000 orders/month, 5 steps each, 10% retry rate

| Approach | Calculation | Monthly Cost |
|----------|-------------|--------------|
| Step Functions Standard | 550K transitions × $0.000025 | ~$13.75 |
| Durable Functions | 550K operations × $0.000008 | ~$4.40 |

**Scenario 2: Human-in-the-Loop Approval**
10,000 requests/month, average 4-hour wait for approval

| Approach | Cost During Wait | Compute Cost |
|----------|------------------|--------------|
| Step Functions Standard | $0 (no transition) | N/A |
| Durable Functions | $0 (suspended) | N/A |
| Lambda with polling | 4 hrs × 720 polls × $cost | Expensive |

For workflows with long waits, both Step Functions and Durable Functions are efficient. The difference is developer experience.

**Scenario 3: High-Volume Event Processing**
1 million events/month, 3 steps each

| Approach | Cost |
|----------|------|
| Step Functions Standard | 3M transitions × $25/M = $75 |
| Step Functions Express | $1 + duration (~$5-15 depending on duration) |
| Durable Functions | 3M ops × $8/M = $24 |

### When to Use Each

**Choose Durable Functions when:**
- You want workflow logic in application code (not separate state machines)
- Building human-in-the-loop workflows with long waits
- Teams uncomfortable with ASL syntax
- You need saga pattern rollbacks (just try/catch)
- AI agent workflows with unpredictable steps

**Choose Step Functions when:**
- Orchestrating multiple AWS services (S3, DynamoDB, SQS in one workflow)
- You need visual workflow representation for stakeholders
- Complex conditional branching that benefits from visual debugging
- Your team already knows Step Functions well
- Express Workflows fit (high volume, $500/month on standard Lambda. Run the numbers with your actual traffic patterns.

## Summary: Quick Reference

| Feature | Best For | Avoid If | Pricing |
|---------|----------|----------|---------|
| **Durable Functions** | App workflows, human-in-loop, long waits | AWS service orchestration, complex branching | $8/M operations + storage |
| **Step Functions Standard** | AWS orchestration, visual workflows | High volume (>1M/month), cost-sensitive | $25/M transitions |
| **Step Functions Express** | High volume, short workflows (<5 min) | Long-running processes | $1/M + duration |
| **Lambda Standard** | Sporadic traffic, unpredictable load | Steady-state, high volume 24/7 | $0.20/M + duration |
| **Lambda Managed Instances** | Steady-state, high volume, predictable | Sporadic, low utilization | EC2 + 15% + $0.20/M |

What's your experience with Lambda at scale? Still reaching for ECS/EKS, or has Lambda worked for your high-volume workloads? Reply to this email or leave a comment below.

## Sources

- [AWS re:Invent 2025 Top Announcements](https://aws.amazon.com/blogs/aws/top-announcements-of-aws-reinvent-2025/)
- [AWS Lambda Durable Functions Announcement](https://aws.amazon.com/blogs/aws/build-multi-step-applications-and-ai-workflows-with-aws-lambda-durable-functions/)
- [InfoQ: AWS Lambda Durable Functions](https://www.infoq.com/news/2025/12/aws-lambda-durable-functions/)
- [InfoQ: AWS Lambda Managed Instances](https://www.infoq.com/news/2025/12/aws-lambda-managed-instances/)
- [Deep Dive: Lambda Durable Functions (re:Invent Session)](https://dev.to/kazuya_dev/aws-reinvent-2025-new-launch-deep-dive-on-aws-lambda-durable-functions-cns380-3edi)
- [AWS Step Functions Pricing](https://aws.amazon.com/step-functions/pricing/)
- [HyperFRAME: Lambda Managed Instances Analysis](https://hyperframeresearch.com/2025/12/02/lambda-managed-instances-is-serverless-now-just-managed-ec2/)