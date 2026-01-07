---
type: substack-article
status: published
created: '2025-12-15'
theme: modern-engineering
angle: cloud-architecture
platform: substack

title: "AWS Database Cost Optimization: What Changed at re:Invent 2025"
subtitle: "Two announcements that could cut your RDS bill by 35-55%. Here's what we learned and how we're applying it."
cover_image: "2025-12-15__rds-cost-optimization-cover-dark-3x.png"

research_sources:
  - https://aws.amazon.com/blogs/aws/introducing-database-savings-plans-for-aws-databases/
  - https://aws.amazon.com/savingsplans/database-pricing/
  - https://aws.amazon.com/blogs/aws/amazon-rds-for-oracle-and-rds-for-sql-server-add-new-capabilities-to-enhance-performance-and-optimize-costs/
  - https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-rds-sql-server-supports-developer-edition/
  - https://aws.amazon.com/about-aws/whats-new/2025/12/rds-oracle-sql-server-256-tib-storage-support/
  - https://aws.amazon.com/rds/instance-types/
---

# AWS Database Cost Optimization: What Changed at re:Invent 2025

*Two announcements that could cut your RDS bill by 35-55%. Here's what we learned and how we're applying it.*

At INNOMIZE, we manage database workloads across multiple client projects. The stack is diverse: MySQL and PostgreSQL on RDS, DynamoDB for serverless applications, ElastiCache for caching layers. Instance types range from t3 and t4g for dev environments to larger instances for production.

We just finished auditing one project and found 12 RDS instances still running on db.t3, an instance family released in 2018. Not ancient, but not optimal either.

This audit came at the right time. At re:Invent 2025, AWS announced several database cost optimization features that change how we think about instance selection and commitment strategies. For us, this isn't just about cost savings. It's also about performance optimization: should we upgrade from t3 to t4g for better Graviton performance, or jump to r7g/r8g for more memory headroom?

This article covers the two biggest announcements: Database Savings Plans and new RDS for SQL Server/Oracle capabilities. We'll share our analysis and the migration path we're planning.

## Part 1: Database Savings Plans

[Database Savings Plans](https://aws.amazon.com/blogs/aws/introducing-database-savings-plans-for-aws-databases/) is a new flexible pricing model where you commit to a consistent $/hour usage over a 1-year term. No upfront payment required.

### The Discounts

- **Serverless** (Aurora, DocumentDB, Neptune, ElastiCache): Up to 35% off
- **Provisioned instances**: Up to 20% off

Notice the gap. Serverless gets 35%, provisioned gets 20%.

As we mentioned in our previous article about EKS Capabilities, AWS continues pushing teams toward managed and serverless offerings. The pricing tells the story: if you adopt Aurora Serverless v2, ElastiCache Serverless, or DocumentDB Serverless, you get nearly double the discount. AWS wants you on serverless. They're making it financially compelling.

### Covered Services

Database Savings Plans apply to:
- Amazon Aurora
- Amazon RDS (all engines)
- Amazon DynamoDB
- Amazon ElastiCache
- Amazon DocumentDB
- Amazon Neptune
- Amazon Keyspaces
- Amazon Timestream
- AWS DMS

### The Flexibility That Matters

Unlike Reserved Instances, Database Savings Plans automatically apply regardless of:

- **Engine**: Switch from RDS Oracle to Aurora PostgreSQL
- **Instance family/size**: Move from db.r7g to db.r8g
- **Region**: Migrate from EU Ireland to US Ohio
- **Deployment type**: Change between Single-AZ and Multi-AZ

This flexibility is significant. With Reserved Instances, you're locked to specific instance types. With Savings Plans, you commit to spend, not configuration.

### Critical Limitations

**Instance type restrictions:**

Only latest-generation instances qualify for Database Savings Plans:
- r7g, r8g (memory optimized)
- m7g, m8g (general purpose)
- m7i, r7i (Intel-based)

Older generations like t3, t4g, r6g, m6g are **not eligible**.

**The t4g problem:**

- **db.t3**: Reserved Instance ✓, DB Savings Plan ✗
- **db.t4g**: Reserved Instance ✗, DB Savings Plan ✗ (no discount options at all)
- **db.r7g**: Reserved Instance ✓, DB Savings Plan ✓
- **db.m7g**: Reserved Instance ✓, DB Savings Plan ✓

Here's an interesting situation. The db.t4g family, released in 2021 with Graviton2 processors, has no discount options at all. AWS promised Reserved Instance support back in 2021. Four years later, it's still "in works."

This creates a strange decision matrix:
- **t4g**: Newer, 10% cheaper on-demand than t3, better performance. But zero discount options.
- **t3**: Older, but supports Reserved Instance (up to 37% off).

For 24/7 dev environments, t3 with Reserved Instance can actually be cheaper than t4g on-demand. For variable workloads that spin up and down, t4g wins on hourly rate.

This is the exact situation we found in our audit.

**Cannot stack discounts on the same workload:**

From the [AWS Database Savings Plan pricing page](https://aws.amazon.com/savingsplans/database-pricing/):

> "For the same workload, you cannot combine Database Savings Plans with Amazon RDS Reserved Instances or Amazon DynamoDB reserved capacity discounts. However, you can buy a Reserved Instance or DynamoDB reserved capacity discount to apply to one workload and a Database Savings Plan to address another."

**How it works in practice:**

Reserved Instances take priority. If you have both RI and Savings Plan, AWS applies RI first, then Savings Plan covers remaining eligible usage:

Example: 3 db.r7g.large instances + 1 Reserved Instance + $50/hr Savings Plan commitment
- Instance 1: Reserved Instance covers it (45% off) ← RI applies first
- Instance 2: Savings Plan covers it (20% off)
- Instance 3: Savings Plan covers it (20% off)
- Any usage beyond your Savings Plan commitment: On-demand rates

You don't get 45% + 20% = 65% off on a single instance. Each discount applies to separate usage.

**Strategic use:** RI for predictable workloads on specific instance types, Savings Plan for flexible workloads where you might change engines, regions, or instance sizes.

### Pricing Comparison

For a [db.r7g.large instance](https://aws.amazon.com/rds/instance-types/) (us-east-1):

- **On-Demand**: $174/month (baseline)
- **DB Savings Plan**: ~$140/month (20% off)
- **1yr RI (No Upfront)**: ~$110/month (37% off)
- **1yr RI (All Upfront)**: ~$95/month (45% off)

**The tradeoff:** Savings Plans offer less discount but more flexibility. Reserved Instances offer deeper discounts but lock you to specific configurations.

## Part 2: RDS for SQL Server and Oracle New Capabilities

AWS also announced [new capabilities for RDS SQL Server and Oracle](https://aws.amazon.com/blogs/aws/amazon-rds-for-oracle-and-rds-for-sql-server-add-new-capabilities-to-enhance-performance-and-optimize-costs/) that address cost optimization.

### 1. SQL Server Developer Edition Support

[Amazon RDS for SQL Server now supports SQL Server 2022 Developer Edition](https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-rds-sql-server-supports-developer-edition/).

**Why this matters:**

Previously, dev/test environments required Standard or Enterprise Edition licenses. Now you can use Developer Edition, which includes all Enterprise features with no licensing costs.

**The savings:**

- **Dev/test**: Was Standard/Enterprise license → Now Developer Edition (free)
- **Staging**: Was Enterprise license → Now Developer Edition (free)
- **Production**: Enterprise license (unchanged)

For projects running multiple non-production SQL Server instances, this eliminates a significant cost.

**Restrictions:**

- Development and testing only
- Cannot serve production workloads
- Cannot be used for commercial purposes directly serving end-users

**How to set up:**

1. Upload SQL Server binary files to S3
2. Create Developer Edition instance using those binaries
3. Migrate data from existing instances using SQL Server backup/restore

### 2. M7i/R7i Instances with Optimize CPU

**What changed:**

New Intel-based M7i and R7i instances with a CPU optimization feature that can reduce costs by up to 55%.

**How Optimize CPU works:**

SQL Server licensing is per-vCPU. The Optimize CPU feature disables SMT (Simultaneous Multi-Threading), reducing vCPU count by 50% while maintaining the same physical cores.

- **Standard config**: 16 vCPUs, 8 physical cores → pay for 16 vCPU license
- **Optimize CPU enabled**: 8 vCPUs, 8 physical cores → pay for 8 vCPU license (50% less)

Performance remains near-equivalent because you keep the same physical cores.

**Instance improvements (M7i/R7i compared to M6i/R6i):**

- **Max size**: 48xlarge (up from 32xlarge)
- **vCPUs**: Up to 192 (50% more than 128)
- **Memory**: Up to 1536 GiB (50% more than 1024 GiB)
- **Processor**: 4th Gen Intel Xeon (upgraded from 3rd Gen)

**Reserved Instance support:**

M7i and R7i instances support Reserved Instances with up to 46% savings compared to On-Demand.

### 3. Expanded Storage: 256 TiB

[RDS for Oracle and SQL Server now support up to 256 TiB storage](https://aws.amazon.com/about-aws/whats-new/2025/12/rds-oracle-sql-server-256-tib-storage-support/) per instance. Previously limited to 64 TiB.

**How it works:**

You can attach up to three additional storage volumes. This also provides 4x improvement in IOPS and I/O bandwidth.

**Storage strategy:**

- **io2 (Provisioned IOPS)**: Higher cost, use for frequently accessed data
- **gp3 (General Purpose)**: Lower cost, use for historical/archival data

You can mix io2 and gp3 volumes to optimize price-performance.

## How We're Applying This: The t3 Migration Decision

Back to our audit. We found 12 db.t3 instances across one client project: a mix of MySQL and PostgreSQL databases serving dev, staging, and production environments.

The t3 family served us well, but it's time to move. The question: migrate to t4g or jump to r7g/r8g?

### Our Analysis

**Option A: t3 → t4g**
- 10% cheaper on-demand
- Better performance (Graviton2)
- No discount options available
- Good for: variable workloads, dev environments that don't run 24/7

**Option B: t3 → r7g/r8g**
- Memory-optimized (16GB vs 8GB for similar vCPU)
- Database Savings Plan eligible (20% off)
- Reserved Instance eligible (up to 45% off)
- Good for: production workloads, 24/7 environments, databases that need more memory headroom

**The decision framework we're using:**

- **Dev (runs 8 hrs/day)** → db.t4g: Lowest hourly cost, no commitment needed
- **Dev (runs 24/7)** → db.t3 with RI: RI discount beats t4g on-demand
- **Staging** → db.t4g: Variable usage, cost efficiency
- **Production** → db.r7g: DB Savings Plan eligible, better performance

The counterintuitive finding: for always-on dev environments, staying on t3 with Reserved Instance is cheaper than upgrading to t4g. The 37% RI discount on t3 beats the 10% on-demand savings of t4g.

For production, we're moving to r7g. The memory increase alone justifies it, and qualifying for Database Savings Plans or Reserved Instances makes it financially sound.

### For SQL Server Projects

The SQL Server Developer Edition announcement changes our approach for .NET projects:

**Before:**
- Dev/test: SQL Server Standard Edition (licensing cost)
- Staging: SQL Server Standard Edition (licensing cost)
- Production: SQL Server Enterprise Edition

**After:**
- Dev/test: SQL Server Developer Edition (free)
- Staging: SQL Server Developer Edition (free)
- Production: SQL Server Enterprise Edition on M7i/R7i with Optimize CPU

**Expected savings:**

- **Developer Edition for non-prod**: 100% license cost eliminated
- **M7i/R7i with Optimize CPU**: Up to 55% savings
- **Reserved Instance on M7i/R7i**: Additional 46% savings

**Example calculation:**

One project runs 3 non-production SQL Server instances on db.r5.large (2 vCPU, 16 GB):

- **Before** (SQL Server Standard, License Included): ~$0.58/hour per instance
- **After** (Developer Edition, BYOM): ~$0.25/hour per instance (compute only, no license cost)
- **Savings per instance**: ~$0.33/hour = ~$240/month
- **Total savings (3 instances)**: ~$720/month

For larger instances like db.r5.xlarge or db.r5.2xlarge commonly used in staging environments, the license portion is even higher. Across multiple non-production environments, Developer Edition can easily save $1,500-2,500/month depending on instance sizes.

### For Oracle Projects

**Actions:**

1. **Evaluate M7i/R7i upgrade**: 50% more capacity at better price-performance
2. **Review storage needs**: If approaching 64 TiB, plan for multi-volume architecture
3. **Consider Reserved Instances**: Up to 46% savings on M7i/R7i

## Summary

These re:Invent announcements aren't just press releases. They're pricing signals.

AWS is telling us: move to serverless (35% discount), use latest-gen instances (Savings Plan eligible), and stop paying for SQL Server licenses in dev environments (Developer Edition).

For our t3 fleet, the path is clear:
- Production instances move to r7g for Savings Plan eligibility
- Variable dev environments move to t4g for lower hourly cost
- 24/7 dev environments stay on t3 with Reserved Instance (until AWS finally releases t4g RI support)

## What's Next: Builds that Last

That t3 audit we mentioned? We're executing the migration over the next few weeks. We'll share the results: actual cost changes, performance differences, and any gotchas we hit along the way.

In our **Builds that Last** publication, we'll continue covering:

- **RDS deep dives**: Instance selection, Reserved Instance strategies, multi-region patterns
- **Cost optimization**: FinOps practices, right-sizing, commitment management
- **Database modernization**: Migration patterns, engine selection, managed vs self-hosted

If you're running AWS databases at scale, this is where we share what we learn from real client projects.

*Running a similar t3 fleet? Planning a SQL Server Developer Edition migration? Share your experience in the comments.*

**Poll: Which announcement impacts you most?**
- Database Savings Plans
- SQL Server Developer Edition
- M7i/R7i with Optimize CPU
- 256 TiB storage expansion
- Not using RDS
