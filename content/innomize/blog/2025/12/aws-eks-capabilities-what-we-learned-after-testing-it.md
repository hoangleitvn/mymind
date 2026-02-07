---
title: "AWS EKS Capabilities: What We Learned After Testing It"
type: article
status: imported
author: INNOMIZE
source: innomize-cms
source_id: 121
slug: aws-eks-capabilities-what-we-learned-after-testing-it
url: "https://innomizetech.com/blog/aws-eks-capabilities-what-we-learned-after-testing-it"
created: 2025-12-24
published: 2025-12-13
locale: en
excerpt: Should you switch from self-managed ArgoCD to AWS's new managed offering? We analyzed the trade-offs so you don't have to.
---

# AWS EKS Capabilities: What We Learned After Testing It

*Should you switch from self-managed ArgoCD to AWS's new managed offering? We analyzed the trade-offs so you don't have to.*

At re:Invent 2025, AWS announced EKS Capabilities, a managed layer for ArgoCD, ACK, and KRO. Since we run EKS with self-managed ArgoCD at INNOMIZE for client workloads, we spent time evaluating whether this changes anything for our setup.

This article covers what we learned: how it works, what the benefits are, what trade-offs exist, and how we're thinking about adoption.

## Background: Our Current EKS Setup

Before diving into EKS Capabilities, some context on what we're running at INNOMIZE:

**Infrastructure:**
- Terraform for EKS cluster provisioning
- Terraform installs and configures ArgoCD

**GitOps Structure:**

We split GitOps into two categories:

*GitOps Bootstrap (Platform team managed):*
- Karpenter configuration
- Monitoring and observability stack
- Infrastructure components (Dapr)
- Non-production databases (in-cluster)

*GitOps App:*
- Per-service repos or monorepo approach
- Helm Charts + ChartMuseum
- GitHub Actions runners on cluster

This is a common pattern across the industry. Many teams run similar setups.

## What EKS Capabilities Actually Is

EKS Capabilities is a managed layer for three Kubernetes-native tools. The key architectural difference: these tools run in AWS-owned infrastructure, not on your worker nodes.

With traditional ArgoCD, you deploy pods to your cluster. They consume CPU, memory, and you're responsible for upgrades and patches. With EKS Capabilities, AWS handles all of that infrastructure.

### The Three Capabilities

**1. Managed Argo CD**

According to the 2024 CNCF Survey, 45% of Kubernetes users run ArgoCD in production. With EKS Capabilities, AWS takes over installation, scaling, patching, and high availability. SSO integrates with IAM Identity Center.

**2. AWS Controllers for Kubernetes (ACK)**

ACK lets you manage AWS resources using Kubernetes CRDs. You can create S3 buckets, RDS databases, IAM roles directly from kubectl. It provides 200+ CRDs for 50+ AWS services.

What caught our attention: ACK supports resource adoption. You can migrate existing Terraform or CloudFormation resources without recreating them. This makes gradual migration possible.

**3. Kube Resource Orchestrator (KRO)**

KRO is a Kubernetes-native approach to creating reusable resource bundles. What's interesting about KRO is its backing.

From the official Google Cloud announcement:

> "We are thrilled to announce the collaboration between Google Cloud, AWS, and Azure on Kube Resource Orchestrator, or kro."

The GitHub organization is jointly owned by all three cloud providers. ([Source: Google Cloud Blog](https://cloud.google.com/blog/products/containers-kubernetes/introducing-kube-resource-orchestrator))

KRO is early-stage and not production-ready yet. But unified backing from the three major clouds signals where resource orchestration is heading.

## Broader Context: re:Invent 2025 EKS Announcements

EKS Capabilities wasn't the only EKS announcement. Understanding the broader context helps:

| Feature | What It Does |
|---------|--------------|
| **100K Node Support** | Scale to 100,000 worker nodes per cluster. Enables 1.6M Trainium accelerators or 800K GPUs |
| **Provisioned Control Plane** | Pre-allocate capacity: XL, 2XL, 4XL tiers for predictable performance |
| **EKS Auto Mode GA** | Now available in all regions including GovCloud with FIPS compliance |
| **Native AWS Backup** | Backup Kubernetes objects without third-party tools |
| **EKS MCP Server (Preview)** | Manage clusters through natural language |

AWS is clearly investing in making EKS more managed across the entire stack. EKS Capabilities is part of this strategic direction.

## What We Found: The Benefits

After going through the documentation and testing, here are the benefits we see:

| Benefit | What It Means |
|---------|---------------|
| **Zero cluster overhead** | Controllers run off-cluster. No compute cost for ArgoCD/ACK/KRO pods |
| **Automatic updates** | AWS analyzes for breaking changes before patching |
| **Private cluster access** | Automatic connectivity without VPC peering |
| **Simplified multi-cluster** | EKS Access Entries eliminate IRSA complexity |
| **Native AWS integration** | Direct CodeCommit, ECR, CodeConnections support |
| **Resource adoption** | Migrate existing Terraform/CloudFormation resources to ACK |
| **Enterprise reliability** | AWS-backed SLA without self-management burden |

Industry analysts estimate this could reduce platform team overhead by 70-80%. That aligns with our experience of how much time goes into maintaining GitOps infrastructure.

## AWS Guidance: When to Use Each Approach

From the AWS documentation, here's their guidance:

**Use EKS Capabilities when:**
- Reducing operational overhead is a priority
- You need automatic security patching and lifecycle management
- You want to free cluster node resources for applications
- AWS support coverage is required
- Starting with greenfield deployments

**Continue self-managing when:**
- Specific Kubernetes resource API versions are required
- Custom controller builds are needed
- Existing automation around self-managed deployments
- Deep customization of controller runtime configurations

One thing we appreciated: EKS Capabilities can coexist with self-managed solutions. Step-wise migration is possible, which reduces risk.

## Understanding the Difference: EKS Capabilities vs EKS Auto Mode

We initially found these two features confusing. They solve different problems:

| Aspect | EKS Capabilities | EKS Auto Mode |
|--------|-----------------|---------------|
| **Focus** | GitOps, AWS resource management | Compute, storage, networking automation |
| **What's Managed** | ArgoCD, ACK, KRO | Node provisioning, scaling, add-ons |
| **Worker Nodes** | You manage (unless using Auto Mode) | Fully automated |
| **Pricing** | Per-resource hourly | 12% premium on EC2 costs |

You can combine both: Auto Mode for infrastructure automation, Capabilities for GitOps and resource management.

## Feature Comparison: EKS Managed vs Self-Managed ArgoCD

This table helped us understand the trade-offs:

| Feature | EKS Managed | Self-Managed |
|---------|-------------|--------------|
| Multi-namespace deployments | No | Yes |
| Non-EKS cluster targets | No | Yes |
| Notifications Controller | No | Yes |
| Image Updater | No | Yes |
| Config Management Plugins | No | Yes |
| Custom Lua health checks | No | Yes |
| Custom SSO providers | No | Yes |
| Direct admin/ConfigMap access | No | Yes |
| Compute cost for controllers | No | Yes |
| Maintenance responsibility | AWS | Your team |

The trade-off is clear: less operational burden in exchange for less flexibility.

## Pricing: What We Learned

**Base EKS costs:**
- Standard cluster: $0.10/hour ($72/month)
- Extended support clusters: $0.60/hour

**EKS Capabilities:**
- Per ArgoCD Application managed (hourly)
- Per ACK resource managed (hourly)
- Per KRO RGD instance managed (hourly)
- No upfront commitments or minimum fees

**The trade-off:**

With self-hosting, you pay for compute but costs are predictable. With managed capabilities, no compute cost but pay-per-resource scales with usage.

For our setup, we need to calculate current hosting costs versus projected capability costs based on application count before making a decision.

## How We're Thinking About This

**Current stance: Monitor and prepare.**

We're tracking the feature evolution and experimenting with ACK for non-critical resources. For our multi-tenant workflows, we'll wait for additional ArgoCD features before migrating.

What we found encouraging: the announcement validates that the tools we're using are industry standard. AWS building managed versions of ArgoCD, ACK, and KRO confirms these are the right foundational choices.

## Who This Works Best For

Based on what we learned, EKS Capabilities fits best for:

- Greenfield deployments starting fresh
- Teams without heavy ArgoCD customization
- AWS-only environments
- Organizations prioritizing reduced operational burden

For teams with mature setups and custom configurations, the trade-offs require more evaluation.

### References

- [AWS Blog: EKS Capabilities Announcement](https://aws.amazon.com/blogs/aws/announcing-amazon-eks-capabilities-for-workload-orchestration-and-cloud-resource-management/)
- [AWS Docs: EKS Capabilities](https://docs.aws.amazon.com/eks/latest/userguide/capabilities.html)
- [AWS Docs: EKS Capabilities Considerations](https://docs.aws.amazon.com/eks/latest/userguide/capabilities-considerations.html)
- [Google Cloud Blog: Introducing KRO](https://cloud.google.com/blog/products/containers-kubernetes/introducing-kube-resource-orchestrator)
- [DEV Community: Hands-On with EKS Capabilities](https://dev.to/aws-builders/i-created-s3-buckets-using-argocd-ack-with-eks-capabilities-no-controllers-installed-cm0)
- [SiliconANGLE: EKS Capabilities Analysis](https://siliconangle.com/2025/12/01/aws-unveils-eks-capabilities-reinvent-kubernetes-operations-ai-workloads-surge/)
- [Amazon EKS Pricing](https://aws.amazon.com/eks/pricing/)