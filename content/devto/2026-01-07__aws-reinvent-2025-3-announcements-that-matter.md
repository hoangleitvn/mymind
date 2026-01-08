---
title: "AWS re:Invent 2025: 3 announcements that matter for your architecture"
published: true
published_url: https://dev.to/hoangleitvn/aws-reinvent-2025-3-announcements-that-matter-for-your-architecture-31m4
published_date: 2026-01-07
description: "Lambda Durable Functions, EKS Capabilities, Database Savings Plans. What changed and why it matters."
tags: aws, kubernetes, serverless, cloud
cover_image: assets/aws-reinvent-2025-cover.png
series:
---

AWS re:Invent 2025 dropped a lot of announcements. Most won't change how you build. Three will.

*Quick note: My last post here was November 2023. Life got busy. Running [INNOMIZE](https://innomizetech.com), shipping products, building teams. I'm back to writing in public. If you've been following along, thanks for sticking around.*

I spent December 2025 digging through the announcements that affect real architecture decisions. Not the flashy keynote demos. The ones that change cost models, operational overhead, and what's possible.

Here's the summary and where to go deeper.

## 1. Lambda gets Durable Functions and Managed Instances

Lambda now has two capabilities that fix its biggest limitations.

**Durable Functions** let you write multi-step workflows directly in Lambda code. No Step Functions. No ASL syntax. Just code with checkpoints that survive crashes. Can wait up to a year for external events.

```typescript
// Checkpoint, wait, resume
const payment = await context.step('process_payment', async () => {
  return await paymentService.charge(event.amount);
});

await context.waitForCallback('manager_approval', { timeout: 86400000 });

await context.step('complete_order', async () => {
  return await orderService.complete(payment.id);
});
```

**Managed Instances** keep Lambda warm. No cold starts. Works with Savings Plans (up to 72% off with 3-year commitment). Multiple concurrent requests per instance.

**Why this matters:**

The "Lambda is expensive at scale" argument got weaker. For steady-state workloads processing millions of requests, Lambda Managed Instances with Savings Plans now competes with container pricing.

The decision tree changed. The question is now "which compute model fits this workload?"

**Deep dive:** [AWS Lambda's Biggest Update in Years](https://innomizetech.com/blog/aws-lambda-s-biggest-update-in-years-what-it-means-for-your-architecture) covers pricing comparisons, Durable Functions vs Step Functions, and Managed Instances trade-offs.

**Bonus:** [Serverless vs Containers in 2025](https://innomizetech.com/blog/serverless-vs-containers-2025-the-decision-framework-just-changed) with updated decision tree.

---

## 2. EKS Capabilities: managed ArgoCD, ACK, and KRO

EKS Capabilities is a managed layer for three Kubernetes-native tools:

→ **Managed Argo CD**: AWS handles installation, scaling, patching, HA
→ **AWS Controllers for Kubernetes (ACK)**: Manage AWS resources via kubectl. S3, RDS, IAM through CRDs.
→ **Kube Resource Orchestrator (KRO)**: Reusable resource bundles. Backed by AWS, Google, and Azure jointly.

Key architectural difference: these run in AWS-owned infrastructure, not on your worker nodes. Zero cluster overhead.

**Why this matters:**

Running self-managed ArgoCD? You're spending engineer time on upgrades, patches, and HA configuration. AWS estimates 70-80% reduction in platform team overhead.

ACK's resource adoption feature is interesting. You can migrate existing Terraform/CloudFormation resources without recreating them. Gradual migration becomes possible.

**Trade-off:** Less flexibility. No multi-namespace deployments. No Image Updater. No custom SSO providers. If you need those, stay self-managed.

**Deep dive:** [AWS EKS Capabilities: What We Learned After Testing It](https://innomizetech.com/blog/aws-eks-capabilities-what-we-learned-after-testing-it) covers feature comparisons, pricing, and when to use managed vs self-managed.

---

## 3. Database Savings Plans and SQL Server Developer Edition

**Database Savings Plans**: Commit to $/hour usage over 1-year term. No upfront payment required.

| Type | Discount |
|------|----------|
| Serverless (Aurora, ElastiCache, etc.) | Up to 35% |
| Provisioned instances | Up to 20% |

The gap is intentional. AWS wants you on serverless.

**SQL Server Developer Edition**: Now available on RDS. All Enterprise features, no licensing costs. Dev/test environments got cheaper.

**M7i/R7i with Optimize CPU**: Disable SMT, reduce vCPU count by 50%, pay for half the SQL Server licenses. Same physical cores, near-equivalent performance.

**Why this matters:**

We audited one project. Found 12 RDS instances on db.t3 (2018 instance family). The migration decision isn't straightforward:

→ db.t4g: 10% cheaper on-demand, but no discount options at all
→ db.t3: Older, but Reserved Instance eligible (37% off)
→ db.r7g: Database Savings Plan eligible, better performance

For always-on dev environments, t3 with Reserved Instance can be cheaper than t4g on-demand. Counterintuitive but true.

For SQL Server projects, Developer Edition eliminates licensing costs for non-production. That's ~$240/month savings per db.r5.large instance.

**Deep dive:** [AWS Database Cost Optimization](https://innomizetech.com/blog/aws-database-cost-optimization-what-changed-at-reinvent-2025) covers the t3/t4g decision matrix, SQL Server migration path, and when Reserved Instances beat Savings Plans.

## The pattern across all three

AWS is sending clear pricing signals:

→ Serverless gets better discounts: 35% for serverless databases vs 20% for provisioned
→ Managed services reduce overhead: EKS Capabilities, Lambda Managed Instances
→ Latest-gen instances get the deals: r7g/r8g qualify for Savings Plans, t4g doesn't

The message: adopt managed services, use latest-gen infrastructure, commit to spend.

## What's next

At INNOMIZE, we're tracking these changes across client projects. The t3 → r7g migration is in progress. We're evaluating EKS Capabilities for new deployments. Lambda Managed Instances is on the roadmap for high-traffic APIs.

I'm launching a newsletter called **[Builds that Last](https://buildsthatlast.substack.com)**. Covering platform engineering, cloud architecture, and engineering leadership. [Subscribe here](https://buildsthatlast.substack.com) or [connect on LinkedIn](https://linkedin.com/in/hoangleitvn).

Which announcement impacts your architecture most?

*Hoang Le is the founder of [INNOMIZE](https://innomizetech.com), building cloud-native systems for startups and enterprises. Connect on [LinkedIn](https://linkedin.com/in/hoangleitvn) for more on engineering leadership and platform engineering.*
