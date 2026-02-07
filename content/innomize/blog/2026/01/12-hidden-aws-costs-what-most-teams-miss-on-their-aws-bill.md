---
title: "12 Hidden AWS Costs: What Most Teams Miss on Their AWS Bill"
type: article
status: published
author: INNOMIZE
source: innomize-cms
source_id: 128
series: aws-cost-optimization
series_part: 1
slug: 12-hidden-aws-costs-what-most-teams-miss-on-their-aws-bill
url: "https://innomizetech.com/blog/12-hidden-aws-costs-what-most-teams-miss-on-their-aws-bill"
created: 2026-01-13
published: 2026-01-13
locale: en
excerpt: Discover the 12 AWS costs that silently drain your budget. From snapshot accumulation to NAT Gateway charges, learn what to check and how to fix it.
---

# 12 Hidden AWS Costs: What Most Teams Miss on Their AWS Bill

**TL;DR:** Most AWS waste comes from costs nobody thinks to check: snapshot accumulation ($2,500/month for 50TB), dormant resources ($100-500/month each), NAT Gateways ($100+/month), CloudWatch logs with infinite retention, and unattached Elastic IPs. The pattern is "set and forget." Quick win: delete snapshots older than 90 days. Enable [Cost Anomaly Detection](https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/) (free). Read on for all 12 costs and two real case studies.

---

> Your AWS bill tells you what you spent. It doesn't tell you what you wasted.

If you've ever looked at your monthly invoice and thought "why is this so high?", you're not alone. We've audited dozens of AWS accounts over the years, and we keep finding the same pattern: teams optimize the obvious costs (EC2 instances, RDS databases) while overlooking charges that accumulate quietly in the background.

The problem isn't that these costs are hidden in the console. They're right there in [Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/). The problem is that nobody thinks to look.

This is part 1 of our AWS Cost Optimization series. We'll walk through 12 costs that most teams miss, explain why they're easy to overlook, and show you what to check. In [Part 2](https://innomizetech.com/blog/aws-cost-optimization-6-proven-strategies-for-2026), we cover the optimization strategies that actually move the needle. In Part 3, we give you a step-by-step audit playbook.

If you're looking for a quick overview of cost optimization best practices, we also published a [comprehensive guide to AWS cost optimization](https://innomizetech.com/blog/mastering-aws-cost-optimization-with-best-practices-and-hidden-costs) that covers the fundamentals.

## Data transfer: the invisible cost

Data transfer is one of the most commonly overlooked AWS charges. Most teams focus on compute and storage costs, assuming network charges are negligible. Then the bill arrives.

AWS charges **$0.02 - $0.09 per GB** ([see Pricing](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)) for inter-region transfers and internet egress. That doesn't sound like much until you do the math. A service sending 1TB of data between regions costs roughly **$20/month**. Multiply that by multiple services across regions, and you're looking at hundreds of dollars.

We've seen this catch teams off guard, especially in microservices architectures. Each service calls other services. Those calls cross availability zones. Sometimes they cross regions. The data transfer charges compound.

> Data transfer costs are invisible until the bill arrives. Budget for them explicitly.

**What to check:** Look at cross-region API calls between microservices. Check backups replicated to other regions. Review large data exports to external systems. CDN origin fetches from S3 can add up too.

## Snapshot accumulation: the backup nobody deletes

EBS snapshots cost **$0.05 per GB-month** ([see Pricing](https://aws.amazon.com/ebs/pricing/)). That's the straightforward part. The problem is how they accumulate.

Automated backup policies create snapshots on schedule. Daily backups. Weekly backups. Sometimes multiple backup tools running on the same volumes. The snapshots pile up. Nobody deletes them.

We've seen accounts with **50+ TB of snapshots**. That's **$2,500/month** for data nobody will ever restore. When we ask teams about their retention policies, the answer is usually "we don't have one."

**The fix is simple:** set retention policies. Delete snapshots older than 90 days unless compliance requires otherwise. Review snapshots from deleted volumes, they don't get cleaned up automatically. Check for duplicate snapshots created by overlapping backup tools.

## Dormant resources: the zombies in your account

Every AWS account has zombies. Load balancers with no targets. RDS instances nobody connects to. ElastiCache clusters for applications that were rewritten years ago. EC2 instances running at 5% CPU because nobody remembers what they do.

These resources get created for testing, demos, or projects that ended. Nobody tracks them after the project ends. The charges continue.

The cost varies widely, often **$100-500/month per forgotten resource**, but the pattern is consistent. We've never audited an account that didn't have at least a few.

**What to check:** EC2 instances with sustained low CPU utilization. Load balancers with zero healthy targets. RDS instances with zero connections over the past week. Elastic IPs not attached to running instances.

## Case study: when "copy-paste infrastructure" costs $8,000/month extra

This one still stands out as one of our most challenging and rewarding optimization projects.

A client came to us managing multiple products across their organization. Their DevOps engineer had a straightforward approach: replicate the exact same environment setup for every project. Each product got its own EKS cluster (5 nodes), VPC, EC2 instances, bastion hosts, and VPN server.

The problem? Different projects had vastly different needs.

Some products didn't need Kubernetes at all. Others only required a single EC2 instance. A few genuinely needed the full EKS setup, but most didn't.

**The result:** roughly **$10,000/month** in AWS costs when it should have been **$1,000-2,000/month**. That's **$8,000/month in waste**, nearly **$100,000/year**, because of a "one-size-fits-all" infrastructure approach.

**How we fixed it:**

1. Audited each project's actual resource usage
2. Removed unused resources (idle EKS clusters, unnecessary bastion hosts)
3. Redefined their Infrastructure as Code to match real requirements
4. Created a clear playbook for how DevOps should provision and manage resources going forward

The fix wasn't just a one-time cleanup. We built a system that prevents the same pattern from recurring.

> Standardization is good. Blind replication is expensive. Every environment should be right-sized to its actual workload, not copy-pasted from a template.

## Case study: when instance sprawl blocks your Savings Plans

Another pattern we see repeatedly: teams that want to use Reserved Instances or Savings Plans but can't get meaningful coverage because their instance types are all over the place.

One client had a mix of RDS instances across their environments. Some were db.t3.medium, others db.r5.large, a few db.m5.xlarge. Different teams had provisioned different instance types based on whatever seemed right at the time. No standardization. No governance.

The problem? Reserved Instances are specific to instance type and size. Savings Plans are more flexible, but you still need predictable usage patterns to commit confidently. When every database is a different instance type, you can't commit to anything without risking underutilization.

**The solution:** We helped them standardize on a smaller set of instance types. Not everything needs to be identical, but having three standard sizes instead of twelve makes capacity planning possible. Once they consolidated, they could purchase Savings Plans covering **70% of their baseline**, saving roughly **30% on RDS costs**.

**The broader lesson:** instance sprawl isn't just an operational problem. It's a cost optimization blocker. You can't benefit from commitment discounts if you don't know what you're committing to.

We cover the Savings Plans vs Reserved Instances decision in detail in Part 2 of this series, including how to decide what commitment level makes sense for your organization.

## NAT Gateway charges: the set-and-forget tax

[NAT Gateways](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) are essential infrastructure for private subnets that need outbound internet access. They're also expensive infrastructure that teams deploy without calculating the cost.

**The pricing:** **$0.045/hour plus $0.045/GB processed** ([see Pricing](https://aws.amazon.com/vpc/pricing/)). The hourly charge alone is **$32/month per gateway**. Teams often deploy NAT Gateways in every availability zone "for redundancy" without asking whether they need that redundancy. Three NAT Gateways means roughly **$100/month** before any data flows through them.

We're not saying don't use NAT Gateways. We're saying understand what you're paying for. Review the number of gateways versus actual HA requirements. Check the data volume flowing through each gateway. Consider whether [VPC endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html) could replace NAT traffic for AWS service calls. They're often cheaper.

## CloudWatch logs: infinite retention, infinite costs

Logs are essential. Teams enable them everywhere. Nobody sets [retention policies](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#SettingLogRetention).

**CloudWatch pricing:** **$0.03/GB for ingestion** plus **$0.03/GB-month for storage** ([see Pricing](https://aws.amazon.com/cloudwatch/pricing/)). An application logging at 10GB/day costs **$9/day** for ingestion alone. After a year, you're storing **3.6TB** at **$108/month**, for logs nobody queries.

The default retention for CloudWatch log groups is **infinite**. Every log you ever wrote stays there forever, charging storage fees, unless you explicitly set a retention period.

### The EKS Control Plane logging trap

This catches many teams running Kubernetes on AWS. When you enable [EKS Control Plane logging](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html), including API server logs, audit logs, authenticator logs, controller manager logs, and scheduler logs, the volume can be massive.

A busy EKS cluster can generate **gigabytes of control plane logs per day**. Enable all five log types across multiple clusters, and you're looking at significant CloudWatch costs before you've logged a single application event.

**The question to ask:** do you actually need these logs in CloudWatch? For troubleshooting Kubernetes issues, maybe. For compliance, possibly. But many teams enable everything "just in case" without calculating the cost.

### Consider self-hosted observability

Teams running EKS often find that self-hosted monitoring and observability stacks are more cost-effective than CloudWatch at scale. The **Prometheus/Grafana** ecosystem is mature, well-documented, and runs efficiently on Kubernetes.

The tradeoff is operational overhead. You're managing another system. But if you're already running Kubernetes, you have the infrastructure expertise. And the cost savings at scale can be substantial, especially when you factor in log aggregation with tools like **Loki** or the **ELK stack**.

> Before enabling every log type in CloudWatch, calculate the cost. Self-hosted observability often makes more sense for EKS-heavy organizations.

**What to check:** Log groups with no retention policy. Log groups storing more than 100GB. Debug-level logging enabled in production (it probably shouldn't be). Duplicate logs, such as application logs, container logs, and infrastructure logs capturing the same events.

## The small charges that add up

Some costs are individually small but signal poor hygiene. They matter because they indicate systemic issues with how resources are managed.

**Unattached Elastic IPs** cost **$0.005/hour** ([see Pricing](https://aws.amazon.com/ec2/pricing/on-demand/#Elastic_IP_Addresses)), about **$3.60/month per IP**. Not catastrophic. But teams accumulate them during infrastructure changes. Twenty unused IPs means **$72/month**. More importantly, it means nobody is cleaning up after themselves.

**Idle load balancers** cost at least **$16/month each** ([see ALB Pricing](https://aws.amazon.com/elasticloadbalancing/pricing/)) for the base charge. Dev and staging environments often sit idle. Five idle ALBs across dev, staging, and QA environments means **$80/month** for infrastructure serving no traffic.

**Classic Load Balancers** are often forgotten entirely. If you're still running them, you should probably migrate to ALB or NLB. The pricing is similar, but the features and performance are better.

## Cross-region replication: enabled once, runs forever

Replication features are powerful for disaster recovery. They're also easy to forget about once enabled.

S3 cross-region replication for a 5TB bucket costs roughly **$100/month** in data transfer plus **$115/month** in destination storage. That's **$215/month for one bucket**. Is your DR strategy worth that? Maybe. But you should be making that decision consciously, not discovering it on your bill.

The same applies to RDS read replicas in other regions. DynamoDB global tables. Any replication that crosses regions incurs ongoing data transfer and storage charges.

**Action:** Review what you have enabled. Ask whether you still need it. If you do need it, budget for it explicitly.

## Third-party marketplace licensing: the hidden multiplier

Marketplace charges are genuinely hidden in a way other costs aren't. They appear as "EC2-Other" in Cost Explorer. Teams see high EC2 costs without realizing it's software licensing, not compute.

A marketplace AMI for a database or security tool can add **$500-2000/month** on top of instance costs. We've seen teams pay **2-3x** what they thought they were paying for compute because of marketplace licensing they didn't know they were using.

**What to check:** EC2 instances launched from Marketplace AMIs. "EC2-Other" line items in Cost Explorer. Whether the software could be replaced with open-source or AWS-native alternatives.

## Request-based pricing at scale

Some AWS services charge per request. The per-request cost looks negligible until you scale.

[API Gateway](https://aws.amazon.com/api-gateway/pricing/) charges **$1.00-3.50 per million requests** depending on region and tier. At 100 million requests per month, that's **$100-350**. Many teams don't realize API Gateway has its own charges separate from Lambda.

S3 request pricing is similar. Everyone focuses on storage. Requests are an afterthought. But an application making 1 billion GET requests per month pays **$400 in request charges** ([see S3 Pricing](https://aws.amazon.com/s3/pricing/)), potentially more than storage. LIST operations are **10x more expensive** than GET.

**What to check:** Request volumes. Whether caching could reduce origin requests. For high-volume APIs, evaluate whether [ALB plus Lambda](https://aws.amazon.com/blogs/compute/using-aws-lambda-with-an-application-load-balancer/) would be cheaper than API Gateway.

## Reserved capacity underutilization: paying for commitments you don't use

[Reserved Instances](https://aws.amazon.com/ec2/pricing/reserved-instances/) and [Savings Plans](https://aws.amazon.com/savingsplans/) are purchased centrally. Usage is decentralized. This creates a disconnect.

We've seen accounts paying for Reserved Instances in us-east-1 while running workloads in eu-west-1. The reservation goes unused. The workload pays on-demand rates. Everyone loses.

**What to check:** Reserved Instance utilization reports. Savings Plans utilization. Instance types that don't match your reservations. If you reserved m5.large but you're running m5.xlarge, the reservation doesn't apply.

## The pattern behind hidden costs

These 12 costs share common characteristics:

**Set and forget.** They're enabled once and never revisited. Backup policies. Replication rules. NAT Gateways. Log groups. Once configured, they run indefinitely.

**Small individually.** Each charge is easy to dismiss. $3.60/month for an Elastic IP? Not worth thinking about. But $50/month here and $100/month there adds up to "why is our bill so high?"

**Compound over time.** Snapshots accumulate. Logs grow. Zombie resources multiply. The costs grow even when nothing changes.

> The fix isn't a one-time cleanup. It's building cost visibility into your operational routine.

## What to do next

Three steps to take this week:

**Quick win.** Check your EBS snapshots. Delete anything older than 90 days that isn't required for compliance. This is often the single highest-impact change you can make in 30 minutes.

**Enable monitoring.** Turn on [AWS Cost Anomaly Detection](https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/). It's free and catches unexpected charges before they accumulate.

**Plan the audit.** In Part 3 of this series, we provide a complete audit playbook. Schedule time to run through it.

In Part 2, we cover the six optimization strategies that actually move the needle: right-sizing, Savings Plans, auto-scaling, Spot instances, storage tiering, and serverless economics. Read that next if you want to understand how to systematically reduce costs, not just eliminate waste.

## Related reading

If you're also evaluating your compute architecture, these articles might help:

- [AWS Database Cost Optimization: What Changed at re:Invent 2025](https://innomizetech.com/blog/aws-database-cost-optimization-what-changed-at-re-invent-2025) - RDS, Aurora, and DynamoDB pricing updates that affect your database costs.
- [Serverless vs Containers in 2025: The Decision Framework Just Changed](https://innomizetech.com/blog/serverless-vs-containers-2025-aws-lambda-managed-instances-decision-guide) - AWS re:Invent 2025 changed the cost equation between Lambda and containers. We break down when each option makes sense.
- [AWS Lambda's Biggest Update in Years](https://innomizetech.com/blog/aws-lambda-s-biggest-update-in-years-what-it-means-for-your-architecture) - Lambda Managed Instances and Durable Functions explained, with architectural implications.

This article is part of our AWS Cost Optimization series. Need help auditing your AWS costs? [Contact us](https://innomizetech.com/contact-us) for a free initial assessment.