---
title: "AWS EKS Capabilities: Should You Switch from Self-Managed ArgoCD?"
type: linkedin-post
status: published
created: 2025-12-13
topic: aws-eks-capabilities
theme: modern-engineering
persona: tech-leader
audiences: [CTOs, Engineering Managers, Platform Engineers]
key_message: "EKS Capabilities reduces operational burden but trades flexibility. Evaluate your customization needs before switching."
hook_type: story
target_hashtags: [AWS, Kubernetes, GitOps, ArgoCD, PlatformEngineering]
optimal_post_time: Tuesday-Thursday, 8-10am
word_count: 280
published_date: '2025-12-13T09:25:40Z'
post_url: https://www.linkedin.com/analytics/post-summary/urn:li:activity:7405538388805816320
performance_metrics:
  impressions: 9523
  member_reached: 5766
  profile_views: 21
  followers: 34
  reactions: 67
  comments: 1
  reposts: 4
  saves: 32
  sends: 3
  
substack_url: https://innomize.substack.com/p/aws-eks-capabilities-what-we-learned
---

We've been doing GitOps with ArgoCD on EKS for years. AWS just announced they'll manage it for us.

But should we switch?

At re:Invent 2025, AWS announced EKS Capabilities. Managed ArgoCD, ACK, and KRO running in AWS infrastructure, not on your worker nodes.

We analyzed the tradeoffs for our setup at INNOMIZE:

What you gain:
→ Zero compute overhead (controllers run off-cluster)
→ Automatic security patching
→ Private cluster access without VPC peering
→ AWS-backed SLA

What you give up:
→ Multi-namespace deployments
→ Non-EKS cluster targets
→ Notifications Controller, Image Updater
→ Custom SSO providers
→ Config Management Plugins

The tradeoff is clear: less operational burden in exchange for less flexibility.

Our stance: Monitor and prepare.

We're experimenting with ACK for non-critical resources. For multi-tenant ArgoCD workflows, we're waiting for feature parity.

Who should consider switching now:
→ Greenfield deployments
→ Teams without heavy ArgoCD customization
→ AWS-only environments
→ Organizations prioritizing reduced ops overhead

For mature setups with custom configurations, evaluate carefully.

Full analysis with pricing breakdown, feature comparison tables, and migration guidance in the article below.

What's your plan? Adopting now, waiting for features, or staying self-managed?

→ Link in comments

#AWS #Kubernetes #GitOps #ArgoCD #PlatformEngineering
