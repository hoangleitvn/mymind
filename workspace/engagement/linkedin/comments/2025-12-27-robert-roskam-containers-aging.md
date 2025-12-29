---
type: linkedin-engagement
created: '2025-12-27T00:00:00Z'
last_updated: '2025-12-27T00:00:00Z'

author:
  name: "Robert Roskam"
  profile: "people/robert-roskam.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/robertroskam_containers-are-showing-their-age-i-wonder-activity-7410681127020949504-YP1S"
  date: '2025-12-27'
  reactions: 0
  comments_count: 0
  reposts: 0
  theme: "Containers showing their age, wondering what comes next"
  angle: "Technical evolution trajectory - VMs -> Containers -> ?"
  key_points:
    - Containers solved isolation, build replication, standardized artifact
    - Docker dominated through popularity, not elegance
    - WASM is a candidate but lacks standards
    - What comes next?
  hashtags: []

thread_topic: "What comes after containers?"
topic_tags: [technical-architecture, infrastructure, containers, wasm]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Containers are showing their age. I wonder what comes next. Don't get me wrong. Containers were a good step forward. Better than JARs or binaries and much better than shipping around entire VMs like we did with Vagrant. Containers helped with three problems (1) isolation on shared resources, (2) build replication, and (3) a single, standardized, and configurable artifact. I say that containers "helped". Mostly what happened is that Docker took off in popularity and brute forced a reference implementation over time. One that's demonstrating that there's more work to be done in this space. So like I was saying, I wonder what comes next. I think it might be WASM and shipping something for that, but so far I haven't seen any standards in the space.

## Notable Comments

```yaml
- id: 1735257600030
  author: "Unknown"
  profile: null
  sentiment: "neutral"
  content: |
    No notable comments captured yet.
  reactions: 0
  insight: "Placeholder"
  replies: []
```

## Our Engagement

```yaml
- id: 1735257600031
  type: "comment"
  reply_to: null
  status: "posted"
  timestamp: '2025-12-27T00:00:00Z'
  content: |
    Or maybe the next step isn't a better container. It's no container at all.

    We're already seeing AI agents that spin up compute, run tasks, tear down. The "artifact" becomes a prompt and a set of constraints. The runtime is... whatever the AI decides to use.

    Sounds crazy. But a year ago so did "AI writes most of my code."

    I genuinely don't know what's next. WASM is a safe bet. But the wild bet? We stop shipping code entirely. We ship intent.
  strategy: "Add angle - speculative take on AI-driven compute, no-container future"
```

## Notes

- Different topic from AI adoption thread - technical infrastructure discussion
- Robert has 13K followers - engaged technical audience
- Our angle: maybe the future is no containers, just intent
- Connects AI agent capabilities to infrastructure evolution
