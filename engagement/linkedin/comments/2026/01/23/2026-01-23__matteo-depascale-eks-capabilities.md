---
type: linkedin-engagement
created: '2026-01-23T07:10:00Z'
last_updated: '2026-01-23T07:10:00Z'

author:
  name: "Matteo Depascale"
  linkedin_url: "https://it.linkedin.com/in/matteo-depascale"
  profile: "people/matteo-depascale.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/matteo-depascale_aws-kubernetes-cloud-activity-7420088338679844865-XqPX"
  activity_id: "7420088338679844865"
  date: '2026-01-22'
  reactions: 102
  comments_count: 8
  reposts: 0
  theme: "AWS EKS Capabilities - managed Kubernetes operations"
  angle: "80% operational overhead reduction through off-cluster management"
  key_points:
    - "EKS Capabilities runs ArgoCD, ACK, KRO in AWS infrastructure, not your clusters"
    - "Zero cluster resource overhead for GitOps tooling"
    - "Native IAM Identity Center integration"
    - "Real world use case: Git push → ArgoCD → ACK provisions RDS/S3"
  hashtags: ["aws", "kubernetes", "cloud", "cloudcomputing", "softwareengineering"]

thread_topic: "AWS EKS Capabilities announcement and evaluation"
topic_tags: [aws, eks, kubernetes, argocd, gitops, managed-services]

engagement_status: "posted"
response_received: false
follow_up_needed: true
follow_up_date: '2026-01-25'
---

## Original Post

What if I told you AWS just eliminated 80% of your K8s operational overhead? AWS just launched EKS Capabilities → fully managed Kubernetes-native features that run in AWS infrastructure, not your clusters Here's what you get out of the box: 🔹 Argo CD • GitOps continuous deployment • Multi-cluster management from single instance • Native IAM Identity Center integration • No VPC peering needed for cross-account deployments 🔹 AWS Controllers for Kubernetes (ACK) • Manage AWS resources via kubectl • 50+ AWS services supported • Resource adoption for Terraform/CloudFormation migrations • Cross-account and cross-region support 🔹 Kube Resource Orchestrator (KRO) • Create custom Kubernetes APIs • Bundle resources into reusable abstractions • Platform teams define patterns, devs consume simple APIs The key difference: ❌ Traditional approach: → Install controllers on worker nodes → You handle scaling, patching, upgrades → Consume cluster resources ✅ EKS Capabilities: → Runs in EKS service accounts (off your nodes) → AWS handles all operations → Zero cluster resource overhead Real world use case: Dev pushes to Git → Argo CD deploys app → ACK provisions RDS + S3 → All declarative, all auditable, all managed 🤔 What do you think?

## Notable Comments

```yaml
- id: 1737615600000
  author: "Kurt P."
  profile: null
  sentiment: "question"
  content: |
And how much more does it cost compared to just managing these functions myself?
  reactions: 3
  insight: "Valid cost concern - pay-per-resource vs fixed compute costs"
  replies: []

- id: 1737615700000
  author: "Itamar C."
  profile: null
  sentiment: "neutral"
  content: |
Argo CD on EKS works really well if you are tightly coupled to the AWS ecosystem. However in an enterprise environment with diverse needs, there are clear gaps - limited control over SSO integration, restricted flexibility in the notification controller, less freedom to customize plugins. These limitations can be challenging when you need deeper control and integration beyond AWS-native tools
  reactions: 1
  insight: "Enterprise perspective - customization limitations are real concern"
  replies: []

- id: 1737615800000
  author: "Christian Bolz"
  profile: null
  sentiment: "negative"
  content: |
Just another intent to get locked into an overpriced US cloud provider….
  reactions: 1
  insight: "Vendor lock-in concern"
  replies: []
```

## Our Engagement

```yaml
- id: 1737616200000
  type: "comment"
  status: "posted"
  sentiment: "neutral"
  content: |
We tested this at INNOMIZE after re:Invent. The trade-off we found: zero cluster overhead sounds great until you need notifications controller or multi-namespace deployments. Neither supported yet. Our stance: monitor and prepare, migrate when feature parity improves.
  strategy: "Add Context - share real testing experience with specific feature gaps found"
  replies: []
```

## Notes

- Matteo posts regularly about AWS/cloud topics (733 posts, 7.5K followers)
- Our INNOMIZE blog has detailed EKS Capabilities analysis we can reference if conversation continues
- Itamar's comment aligns with our findings - enterprise customization gaps
- Good opportunity to establish credibility on AWS/K8s topics
