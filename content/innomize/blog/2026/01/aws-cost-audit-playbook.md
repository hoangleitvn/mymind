---
title: "The AWS Cost Audit Playbook: A Step-by-Step Guide"
type: article
status: published
author: INNOMIZE
created: 2026-01-13
series: aws-cost-optimization
series_part: 3
slug: the-aws-cost-audit-playbook-a-step-by-step-guide
url: "https://innomizetech.com/blog/the-aws-cost-audit-playbook-a-step-by-step-guide"
locale: en
excerpt: "The step-by-step AWS cost audit playbook we use with clients. Five phases from preparation to monitoring. Includes time estimates by account size, compliance checklists, and rollback guidance."
reading_time: 15 min
---

# The AWS Cost Audit Playbook

**TL;DR:** Five phases. (1) Preparation: baseline your spend, enable Compute Optimizer. (2) Discovery: check compute, storage, database, network. (3) Analysis: sort by effort and impact. (4) Implementation: quick wins first, then right-sizing, then architecture. (5) Monitoring: AWS Budgets, Cost Anomaly Detection, monthly reviews. Total time: 4-8 hours for a small-to-medium account. Run it quarterly.

---

This is Part 3 of our AWS Cost Optimization series. If you haven't read the earlier parts, start there:
- [Part 1: 12 Hidden AWS Costs](https://innomizetech.com/blog/12-hidden-aws-costs-what-most-teams-miss-on-their-aws-bill). Where the money leaks.
- [Part 2: 6 Proven Strategies](https://innomizetech.com/blog/aws-cost-optimization-6-proven-strategies-for-2026). How to stop the leaks.

You know where hidden costs hide. You know the strategies. Now you need a process.

### Who this playbook is for

This playbook is for **DevOps engineers, platform teams, and engineering managers** who can access AWS Cost Explorer and have permission to review (not necessarily change) infrastructure. You should be comfortable navigating the AWS console and understand basic concepts like EC2 instances, RDS, S3, and VPCs.

If you're a finance or operations lead without AWS access, partner with your engineering team to run this together.

### Time estimates

| Account Size | Resources | Estimated Time |
|--------------|-----------|----------------|
| Small | <50 resources | 4-6 hours |
| Medium | 50-200 resources | 6-10 hours |
| Large | 200+ resources, multi-account | 2-3 days |

For **multi-account setups** (AWS Organizations), run the audit per account or use consolidated billing views. Aggregate findings in a shared spreadsheet. Prioritize accounts by spend. Audit the top 3 accounts by cost first.

This is the playbook we run with clients. Systematic. Repeatable. Actionable.

Run it once, find the obvious waste. Run it quarterly, cost optimization becomes routine.

## Phase 1: Preparation

30 minutes of setup saves hours later.

### Access requirements

At minimum, you need read access to:
- [Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/)
- CloudWatch
- Describe permissions for EC2, RDS, S3

If you have Business or Enterprise support, get access to [AWS Trusted Advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/) too.

Enable [AWS Compute Optimizer](https://aws.amazon.com/compute-optimizer/). It's free. It generates right-sizing recommendations automatically.

The `ViewOnlyAccess` managed policy covers most of what you need. For multi-account setups, configure cross-account access or use AWS Organizations.

### Know your compliance requirements

Before deleting anything, check with your team:

- **Data retention policies.** Legal or regulatory requirements for how long data must be kept. Healthcare (HIPAA), finance (SOX, PCI-DSS), and government contracts often mandate specific retention periods.
- **Disaster recovery requirements.** RPO (Recovery Point Objective) and RTO (Recovery Time Objective) commitments. These affect backup frequency and retention.
- **Audit trail requirements.** Some industries require logs and snapshots to be preserved for compliance audits.

Document these requirements before the audit. Every "delete this" recommendation in this playbook should be filtered through your compliance constraints first.

> When in doubt, ask. Deleting data that compliance requires is worse than paying for storage you don't need.

### Baseline your current spend

Before optimizing, know where you stand:

**Total monthly spend.** Average the last 3 months. Write this number down.

**Spend by service.** Top 10 services by cost. Most accounts follow Pareto: a few services drive most spend.

**Spend trend.** Month-over-month change. Growing spend isn't bad if you know why.

**Production vs non-production.** If you tag by environment, pull this breakdown. Non-prod wastes more because nobody reviews it.

**Tagging health check.** If tagging is inconsistent or missing, note this as a finding. You can't optimize what you can't categorize. Consider prioritizing a tagging cleanup before or alongside this audit. At minimum, tag resources by: `Environment` (prod/staging/dev), `Project` or `Application`, and `Owner` (team or person).

> Document these baselines before changing anything. You can't measure improvement without knowing your starting point.

## Phase 2: Discovery

2-3 hours for a thorough review.

### Compute

Start with EC2. Usually the biggest cost driver. Usually the easiest to fix.

Open [Compute Optimizer](https://console.aws.amazon.com/compute-optimizer/) and review recommendations. It analyzes CloudWatch metrics and suggests right-sizing. Don't accept blindly. Treat each recommendation as a question worth investigating.

Look for:
- Instances running below 20% average CPU (CloudWatch - EC2 - Per-Instance Metrics - CPUUtilization)
- Instances where max CPU never exceeds 40% over two weeks
- Stopped instances sitting idle for over a week
- Old-generation types (m4, c4, r4, m5, c5). Current generations (m6i, m7i, c6i, c7i) offer better price-performance
- x86 instances that could run on Graviton (m7g, c7g). Graviton typically costs 20% less with equal or better performance

For Lambda:
- Memory allocation vs actual usage. Functions with 1GB allocated but using 128MB waste money.
- Execution times averaging over 10 seconds. Worth investigating.

### Storage

Storage costs accumulate quietly.

**EBS volumes:**
- Unattached volumes (status: available). You're paying for storage nobody uses.
- gp2 volumes. Migrate to gp3. Same price, better performance. Free optimization.
- Provisioned IOPS (io1, io2) with low actual usage. Expensive if unused.

**EBS snapshots:**
- Snapshots older than 90 days. Candidates for deletion unless compliance requires longer retention. (90 days is a common default. Adjust based on your retention policy from Phase 1.)
- Snapshots from deleted volumes. They don't clean up automatically. Find them: `aws ec2 describe-snapshots --owner-ids self --query 'Snapshots[?!VolumeId]'`
- Duplicate snapshots from overlapping backup tools (AWS Backup + third-party tools often create redundant snapshots).

**S3 buckets:**
- Buckets over 1TB without lifecycle policies. Data sits in Standard forever.
- Buckets with no access in 90 days. Use [S3 Storage Lens](https://aws.amazon.com/s3/storage-lens/) or check S3 access logs. Archive or delete (check retention policies first).
- Versioning without lifecycle rules. Can result in 10x your actual data.

*Tip: Enable S3 Storage Lens (free tier available) to see access patterns across all buckets.*

### Database

Often the second-largest cost after compute.

**RDS:**
- Instances below 20% average CPU (CloudWatch - RDS - CPUUtilization). Downsize candidates.
- Instances with zero connections for a week (DatabaseConnections metric). Orphaned.
- Multi-AZ on dev/test environments. Doubles cost for no benefit.
- Provisioned IOPS not being used. Switch to gp3.
- Old-generation classes (db.m4, db.r4, db.m5, db.r5). Consider db.m6g/r6g (Graviton) or db.m7g/r7g for 20%+ savings.

**DynamoDB:**
- Provisioned capacity utilization below 20%. Switch to on-demand.
- Unused Global Secondary Indexes. They cost money whether you query them or not.

### Network

Easy to overlook. Often significant.

**Data transfer:**
- Filter Cost Explorer by "Data Transfer"
- Inter-region transfer over $100/month. Can the architecture be simplified?
- Cross-AZ transfer in high-traffic apps. Often unnecessary.

**NAT Gateways:**
- $32/month each before data flows
- Do you need one in every AZ?
- Can [VPC endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html) replace NAT traffic for AWS service calls?

**Elastic IPs:**
- Unassociated IPs cost $3.60/month each
- Not much individually. Signals poor resource hygiene.

**Load balancers:**
- Zero requests in the past week
- No registered targets
- Classic Load Balancers still running. Migrate to ALB or NLB.

### Commitments

**Reserved Instances:**
- Utilization below 80% means wasted commitment
- Instance type mismatches (regional vs zonal, size, family)

**Savings Plans:**
- Same principle: low utilization means wasted money

**Coverage gaps:**
- What's running on-demand that could be covered?
- What should get new commitments?

## Phase 3: Analysis

1-2 hours to organize findings.

### Categorize by effort

**Quick wins** (under 1 hour, minimal risk):
- Delete unattached volumes
- Remove old snapshots
- Release unused Elastic IPs
- Enable S3 lifecycle policies

*Note: "Quick wins" still require compliance review. Fast to execute doesn't mean skip due diligence.*

**Low effort** (1-4 hours, low risk):
- Right-size instances per Compute Optimizer
- Migrate gp2 to gp3
- Configure CloudWatch log retention

**Medium effort** (1-2 days, coordination needed):
- Implement auto-scaling
- Migrate to Spot instances
- Restructure unused Reserved Instances

**High effort** (1+ weeks, planning required):
- Architecture changes for data transfer
- Serverless migration
- Major infrastructure reorganization

### Calculate impact

For each finding:

**Monthly savings.** Be specific. "Right-size web-server-1 from m5.xlarge to m5.large: $70/month."

**Implementation effort.** Hours. People involved. Change windows.

**Risk level.** What could go wrong? How reversible?

### Prioritize

High impact, low effort = do first.
High impact, high effort = plan next.
Low impact, low effort = maybe.
Low impact, high effort = skip.

> Focus on high-impact, low-effort first. Don't let perfect block good.

### Document findings

For each item:
- **What:** "Three m5.xlarge instances running at 15% average CPU."
- **Impact:** "$210/month potential savings."
- **Action:** "Downsize to m5.large after testing in staging."
- **Risk:** "Low. Instance sizing is reversible."

## Phase 4: Implementation

Convert findings into a timeline.

### Before making changes

**Estimate savings first.** Use [AWS Pricing Calculator](https://calculator.aws/) or Cost Explorer's forecast to quantify expected savings before implementing. This helps prioritize and builds confidence.

**Know your rollback path.** Most changes are reversible, but know how:
- Instance right-sizing: Resize back up (minutes, no data loss)
- Multi-AZ removal: Re-enable takes 10-30 minutes, causes brief failover
- Snapshot deletion: **Irreversible.** Verify compliance before deleting.
- Savings Plans: **Irreversible commitment.** Start conservative.

### Week 1: Quick wins

Under an hour each. Minimal risk.

- Delete unattached EBS volumes (verify no data retention requirements)
- Remove snapshots older than 90 days (verify compliance first)
- Release unassociated Elastic IPs
- Enable S3 lifecycle policies on large buckets (align with retention requirements)
- Migrate gp2 volumes to gp3

These changes often save hundreds per month.

### Weeks 2-3: Low-effort changes

Some planning required. Not major projects.

- Right-size EC2 instances per Compute Optimizer
- Configure CloudWatch log retention (align with audit trail requirements)
- Remove Multi-AZ from non-production RDS
- Migrate to Graviton instances where compatible (test in staging first)

### Week 4+: Strategic changes

Larger optimizations. Coordination required.

- Implement auto-scaling for variable workloads
- Migrate appropriate workloads to Spot
- Evaluate serverless for suitable candidates
- Address architectural inefficiencies in data transfer

### After 30+ days: Commitment purchases

Only purchase Savings Plans or Reserved Instances after you have:
- At least 30 days of stable baseline data post-optimization
- Right-sized instances (don't commit to oversized resources)
- Confirmed workload patterns are predictable

Start with 1-year Compute Savings Plans covering 50-60% of your baseline. You can always add more. You can't undo a commitment.

## Phase 5: Monitoring

One-time audits don't last. Build cost awareness into operations.

### Set up alerts

**[AWS Budgets](https://aws.amazon.com/aws-cost-management/aws-budgets/):**
- Monthly budget thresholds
- Alerts at 80% and 100%
- Per-service budgets for top 5 cost drivers

**[Cost Anomaly Detection](https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/):**
- Free
- Catches unexpected charges automatically
- Review anomalies weekly

### Monthly review

30 minutes monthly:

- **Cost trend.** Up, down, flat? Compare to baseline.
- **Top services.** Any unexpected growth?
- **Commitment utilization.** Are RIs and Savings Plans being used?
- **New resources.** Anything created that shouldn't exist?
- **Optimization candidates.** New right-sizing or termination opportunities?

### Quarterly deep dive

Every quarter, run a lighter version of Phase 2 (1-2 hours instead of 2-3):

- Review workloads added since last audit (new resources are where waste accumulates)
- Check for changed usage patterns (growth or decline)
- Evaluate new AWS pricing options (re:Invent announcements, new instance types)
- Reassess commitment utilization and coverage gaps
- Re-run Compute Optimizer recommendations

The quarterly review focuses on *changes* since the last audit, not a full re-examination of everything. Your monitoring alerts should catch major issues between reviews.

## Final thoughts

Cost optimization is a practice, not a project.

The biggest savings come from building cost awareness into daily operations. Every infrastructure decision is a cost decision. When teams think about cost as they build, waste doesn't accumulate.

Start with quick wins. Build monitoring. Schedule reviews. Consistent attention beats any one-time cleanup.

> The best cost optimization is prevention. Build cost awareness into your culture, not your quarterly fire drills.

---

## Related reading

- [AWS Database Cost Optimization: What Changed at re:Invent 2025](https://innomizetech.com/blog/aws-database-cost-optimization-what-changed-at-re-invent-2025). RDS, Aurora, and DynamoDB pricing updates that affect your database costs.
- [Serverless vs Containers in 2025: The Decision Framework Just Changed](https://innomizetech.com/blog/serverless-vs-containers-2025-aws-lambda-managed-instances-decision-guide). When Lambda vs containers makes sense after AWS re:Invent 2025.
- [AWS Lambda's Biggest Update in Years](https://innomizetech.com/blog/aws-lambda-s-biggest-update-in-years-what-it-means-for-your-architecture). Lambda Managed Instances and Durable Functions explained.

This article is Part 3 of our [AWS Cost Optimization series](https://innomizetech.com/blog/12-hidden-aws-costs-what-most-teams-miss-on-their-aws-bill). Need help with your AWS cost audit? [Contact us](https://innomizetech.com/contact-us) for a free initial assessment.
