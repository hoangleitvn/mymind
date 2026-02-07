---
title: "10 Cloud Cost Mistakes (And a 30-Minute Fix)"
type: linkedin-post
status: published
created: 2026-01-19
published_date: "2026-01-19T07:45:02.215Z"
post_url: "https://www.linkedin.com/feed/update/urn:li:activity:7418921414935777280/"
theme: cloud-cost-optimization
persona: tech-leader
audiences: [engineers, devops, CTOs, platform-engineers]
hook_type: problem-solution
target_hashtags: [AWS, CloudCost, DevOps, CloudEngineering]
series: aws-cost-optimization
series_part: 2
asset: assets/aws-cost-bill-mistakes-resolutions.png
---

10 mistakes. 30 minutes to find.

$500-2,000/month recovered your AWS bill.

💸 "I thought it was free"
→ Free tier expired. Nobody checked.
💸 No billing alerts
→ Runaway script. Bill arrives Monday.
💸 NAT Gateway by default
→ $32/month + data. Often unnecessary.
💸 Same config everywhere
→ Prod-sized instances in dev. 24/7.
💸 Data transfer blind spot
→ Cross-region costs. "Internal is free, right?"
💸 Dev/test never stops
→ Friday spin-up. Monday still running.
💸 Overprovisioned "to be safe"
→ m5.2xlarge at 15% CPU. Forever.
💸 100% on-demand
→ 60% is predictable. Paying 30% extra.
💸 S3 request charges
→ Millions of small files. API costs explode.
💸 No cost visibility
→ Engineers build. Finance panics. Nobody connects.

Here's how to find them in 30 minutes:

STEP 1: EC2 RIGHT-SIZING (5 min)
→ Cost Explorer → Right Sizing Recommendations
→ Look for instances below 40% average CPU

STEP 2: ZOMBIE RESOURCES (10 min)
→ Unattached EBS volumes (filter: "available")
→ Unused Elastic IPs ($3.60/month each)
→ Snapshots older than 90 days

STEP 3: DATA TRANSFER (5 min)
→ Cost Explorer → filter "Data Transfer"
→ Cross-region and NAT Gateway charges

STEP 4: SAVINGS PLANS (5 min)
→ Cost Explorer → Savings Plans → Recommendations
→ Start with 50% of baseline. 20-30% savings.

STEP 5: STORAGE LIFECYCLE (5 min)
→ S3 buckets without lifecycle policies
→ Move cold data to S3-IA or Glacier

Run this monthly. Set a calendar reminder.

Which of these 10 hit home for your team?

---

Enjoy this? ♻️ Repost it to your network and follow Hoang Le for more.

Want to build software that lasts?

Join Builds That Last on Substack for practical insights on foundation-first engineering.
