---
type: substack-article
status: published
created: '2025-12-07'
theme: modern-engineering
angle: cloud-architecture
platform: substack

title: "AWS Lambda's Biggest Update in Years: What It Means for Your Architecture"
subtitle: "Durable Functions vs Step Functions, Managed Instances vs Standard Lambda: pricing and trade-offs"
cover_image: "aws-lambda-reinvent-2025-cover.png"

research_sources:
  - https://aws.amazon.com/blogs/aws/top-announcements-of-aws-reinvent-2025/
  - https://aws.amazon.com/blogs/aws/build-multi-step-applications-and-ai-workflows-with-aws-lambda-durable-functions/
  - https://www.infoq.com/news/2025/12/aws-lambda-durable-functions/
  - https://www.infoq.com/news/2025/12/aws-lambda-managed-instances/
  - https://dev.to/kazuya_dev/aws-reinvent-2025-new-launch-deep-dive-on-aws-lambda-durable-functions-cns380-3edi
  - https://aws.amazon.com/step-functions/pricing/
  - https://aws.amazon.com/lambda/pricing/
  - https://hyperframeresearch.com/2025/12/02/lambda-managed-instances-is-serverless-now-just-managed-ec2/
---

# AWS Lambda's Biggest Update in Years: What It Means for Your Architecture

*Durable Functions vs Step Functions, Managed Instances vs Standard Lambda: pricing and trade-offs*


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
- Express Workflows fit (high volume, <5 min execution)

### Trade-offs

| Factor | Durable Functions | Step Functions |
|--------|-------------------|----------------|
| **Learning curve** | Lower (just code) | Higher (ASL + console) |
| **Debugging** | Code-level debugging | Visual execution history |
| **AWS service integration** | Call services in code | Native integrations |
| **Portability** | More portable (code-based) | AWS-locked (ASL) |
| **Maturity** | New (Dec 2025) | Battle-tested |
| **Runtime support** | Node.js 22/24, Python 3.13/3.14 | All Lambda runtimes |
| **Determinism requirement** | Strict (replay must be identical) | Managed by service |

**The determinism requirement is important.** Your code must produce the same results on replay. Random values, current timestamps, and external API calls must be wrapped in steps. This isn't hard, but it's a mental model shift.


## 2. Lambda Managed Instances: When Lambda Gets Too Expensive

### The Problem

Lambda's pay-per-invocation model is great for sporadic workloads. But for steady-state traffic, it gets expensive.

Running a Lambda function 24/7 costs roughly **2.3x more** than equivalent EC2 compute. For high-volume APIs or background processing, that adds up fast.

But managing EC2 means losing Lambda's simplicity: no servers to patch, no scaling to configure, no load balancers to manage.

### The Solution

Lambda Managed Instances: Lambda's developer experience on EC2's pricing model.

You specify an EC2 instance type. AWS handles:
- Instance provisioning and lifecycle
- OS patching and updates
- Load balancing across instances
- Auto-scaling based on demand

You get:
- Full EC2 instance type selection (including GPU instances)
- No cold starts (pre-provisioned execution environments)
- Multi-concurrency (up to 64 concurrent executions per vCPU)
- Access to Savings Plans and Reserved Instances (up to 72% discount)

### Pricing Breakdown

**Three components:**
1. **Lambda request charges**: $0.20 per million invocations
2. **EC2 instance charges**: Standard EC2 pricing for your instance type
3. **Management fee**: 15% on top of EC2 on-demand price (covers patching, scaling, load balancing, instance lifecycle). Note: If you already have a team managing EC2/ECS, you're already paying for this through your team costs.

**No duration charges** (unlike standard Lambda's per-millisecond billing).

### Cost Comparison: Real Scenarios

**Scenario: High-Traffic API**
100 million requests/month, m7g.xlarge instance, 3-year Compute Savings Plan

| Component | Cost |
|-----------|------|
| Request charges | 100M × $0.20/M = $20 |
| EC2 (with Savings Plan) | ~$91.40 |
| Management fee (15%) | ~$48.96 |
| **Total** | **~$160/month** |

**Same workload on standard Lambda:**
Assuming 200ms average duration, 512MB memory:
- 100M requests × $0.0000002 = $20 (requests)
- 100M × 0.2s × 0.5GB × $0.0000166667 = ~$166 (compute)
- **Total: ~$186/month**

At this scale, Managed Instances save ~14%. With Reserved Instances (72% discount), savings grow significantly.

**Break-even analysis:**
- Below ~30% utilization: Standard Lambda wins
- Above ~50% utilization: Managed Instances likely win
- Steady-state 24/7: Managed Instances with commitments win big

### When to Use Each

**Choose Managed Instances when:**
- Steady-state, predictable traffic patterns
- High-volume APIs (millions of requests/month)
- You can commit to Savings Plans or Reserved Instances
- You need specific hardware (GPU, high-memory instances)
- Cold start elimination matters for your UX
- Your code is already thread-safe
- You need dedicated/isolated compute for security or compliance (runs on EC2 in your account, not shared Lambda infrastructure)

**Choose Standard Lambda when:**
- Sporadic, unpredictable traffic
- Development/staging environments
- Event-driven processing with idle periods
- You can't commit to long-term pricing plans
- Simplicity matters more than cost optimization

### Trade-offs

| Factor | Standard Lambda | Managed Instances |
|--------|-----------------|-------------------|
| **Cost at low volume** | Cheaper | More expensive (idle capacity) |
| **Cost at high volume** | Expensive | Cheaper with commitments |
| **Cold starts** | Yes (mitigated by SnapStart) | No (pre-provisioned) |
| **Scaling** | Automatic, unlimited | Automatic, instance-bound |
| **Hardware options** | Limited | Full EC2 catalog |
| **Concurrency model** | One request per instance | Multi-concurrent |
| **Thread safety** | Not required | Required |

**Thread safety is the migration blocker.** If your Lambda functions use global state or aren't designed for concurrent execution, you'll need to refactor before using Managed Instances.


## 3. Other Updates Worth Noting

**Cold Start Elimination**: Predictive AI pre-warms functions before you need them. No extra cost. Combined with SnapStart expanding to Python and .NET, cold starts are becoming less of an issue.

**New Runtimes Fast-Track**: Python 3.14, Node.js 24, Java 25 arrive within 90 days of community release. No more waiting months for new language features.

**Transform Custom**: AI-powered runtime upgrade tool. AWS claims 85% reduction in upgrade effort. Could help teams stuck on old runtimes.

**LocalStack Integration**: Official support for local testing. Better developer experience for teams already using LocalStack.


## My Take: What This Means for Architecture Decisions

### The Good

1. **Durable Functions simplifies the "do I need Step Functions?" decision.** For most application workflows, you can now stay in code. Reserve Step Functions for AWS service orchestration and complex visual workflows.

2. **Managed Instances fills the gap between Lambda and ECS.** If you've been running ECS just to escape Lambda pricing, this is worth evaluating.

3. **The Lambda tax on steady-state workloads is shrinking.** Between Managed Instances and improved cold starts, the "Lambda is expensive at scale" argument is getting weaker.

### The Concerns

1. **Durable Functions is new.** It launched this week. The SDK is limited to Node.js and Python. Production battle-testing will take months.

2. **Determinism requirements are strict.** Teams used to writing Lambda functions without thinking about replay semantics will need to adapt.

3. **Managed Instances requires thread-safe code.** This isn't a drop-in replacement. Migration requires code review and possibly refactoring.

4. **Pricing complexity is increasing.** Lambda used to be simple: requests + duration. Now you're choosing between three models with different trade-offs.

### Bottom Line

These updates make Lambda viable for more use cases. But they also make the decision tree more complex.

My recommendation:
- **Durable Functions**: Wait for a few months of production feedback. Start with non-critical workflows to learn the model.
- **Managed Instances**: Evaluate if you have steady-state workloads costing >$500/month on standard Lambda. Run the numbers with your actual traffic patterns.


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
