---
type: linkedin-engagement
created: '2026-01-07T03:41:00Z'
last_updated: '2026-01-07T03:41:00Z'

author:
  name: "Peter F."
  profile: "people/peter-fraedrich.md"
  linkedin_url: "https://www.linkedin.com/in/peterfraedrich"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/peterfraedrich_newyear2026-prediction-tech-activity-7412241498173509633-6Is4"
  activity_id: "7412241498173509633"
  date: '2026-01-01'
  reactions: 11
  comments_count: 2
  reposts: 0
  theme: "2026 tech industry predictions"
  angle: "Kubernetes alternatives, AI decline, VMware competitors, open CI standards"
  key_points:
    - Companies looking at Kubernetes alternatives (Docker Swarm comeback)
    - AI adoption decline as hype wears off
    - VMware competitor emerging due to Broadcom issues
    - Open CI standards become major talking point
  hashtags: ["newyear2026", "prediction", "tech"]

thread_topic: "2026 tech predictions"
topic_tags: [kubernetes, ai-adoption, vmware, ci-cd, predictions]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

As 2025 comes to a close and we move into 2026 there's a few tech industry trends that I foresee happening in the coming year:
- Companies start seriously looking at Kubernetes alternative — bloated YAML configs, obtusely complex interconnected systems, and high baseline overhead all combine to push tech leaders towards alternate solutions. Bonus prediction: Docker Swarm makes a comeback.
- We see the decline of AI adoption — I'm already starting to see companies divesting of their growing AI expense as the hype wears off. This will continue into 2026. Bonus prediction: OpenAI raises their prices by 50%+.
- A serious competitor to VMWare emerges — Broadcom continues to shoot themselves in the foot and alienate customers, and someone will step into the gap. Bonus prediction: data centers move toward containers on bare metal instead of virtualization.
- Open CI standards become a huge talking point — GitHub's recent pricing changes (and walking back thereof) push the industry to explore open standards for CI runners, with a foundation like CNCF or LF leading the way. Bonus prediction: the standard open source CI runner will be written in Go.

## Notable Comments

```yaml
[]
```

## Our Engagement

```yaml
- id: 1736232600000
  type: "comment"
  status: "posted"
  sentiment: "balanced"
  content: |
The Kubernetes fatigue is real. Seen teams spend more time on cluster management than building features.

Plenty of alternatives beyond Docker Swarm though. Simple docker-compose on a single EC2 works for many workloads. Nomad, Dokploy, or PaaS options like Azure Container Apps, AWS App Runner, Lightsail. We run a whole platform with docker-compose on Azure Container Apps - 10 services with Dapr. No K8s overhead.

On AI adoption - I'd frame it as a shift, not decline. "AI for everything" hype cools, but targeted adoption grows. Teams that found where AI actually helps will double down.
  strategy: "Add Experience - share real alternatives to K8s with specific example, reframe AI prediction"
  replies: []
```

## Notes

- Second engagement with Peter F. today (first was LLM trust post)
- His predictions align with some contrarian views I hold
- K8s fatigue point connects to my serverless vs containers content
- AI decline prediction is too broad - nuanced take is adoption shifts, not declines
