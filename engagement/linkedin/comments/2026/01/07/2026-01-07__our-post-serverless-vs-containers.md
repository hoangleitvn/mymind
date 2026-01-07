---
type: linkedin-engagement
created: '2026-01-07T02:00:00Z'
last_updated: '2026-01-07T03:00:00Z'

post:
  source: "internal"
  source_file: "content/linkedin/2026/01/2026-01-07__serverless-vs-containers-decision.md"
  url: "https://www.linkedin.com/feed/update/urn:li:activity:7414469467486736385/"
  activity_id: "7414469467486736385"
  date: '2026-01-06'
  reactions: null
  comments_count: null
  reposts: null

thread_topic: "Serverless vs Containers decision framework"
topic_tags: [serverless, containers, aws, lambda, architecture]

engagement_status: "conversation"
response_received: true
follow_up_needed: true
follow_up_date: '2026-01-10'
---

## Original Post

See source_file for full content.

## Notable Comments

```yaml
- id: 1736220000000
  author: "Matt Reinsch"
  profile: "people/matt-reinsch.md"
  sentiment: "positive"
  content: |
This is a good reframing. The cost argument was always a proxy for poor workload fit. What Managed Instances really change is removing cold starts from the decision, not eliminating the need to reason about state, concurrency, and failure domains.

Teams still win by being explicit about which workloads are event-driven vs long-running vs stateful.
  reactions: null
  insight: "Strong technical insight - frames cold starts as forcing function, not the real issue"
  replies: []
```

## Our Engagement

```yaml
- id: 1736221200000
  type: "reply"
  status: "posted"
  sentiment: "positive"
  content: |
That's the key distinction. Cold starts were a forcing function for the serverless vs containers debate. With that removed, teams can focus on the actual architecture questions.

We've been categorizing workloads the same way: event-driven, long-running, stateful. The hybrid setups usually outperform going all-in on either model.

What patterns are you seeing teams get wrong most often? For us it's treating everything as event-driven when some workloads clearly need persistent connections.
  strategy: "Add Context + Ask - reinforce his insight and ask about his experience"
  replies:
    - id: 1736224800000
      author: "Matt Reinsch"
      sentiment: "positive"
      content: |
Hoang Le That distinction helped it click for me.

A pattern I keep seeing is teams equating "triggered by an event" with "event-driven as an architecture," then forcing long-lived or stateful work into serverless and rebuilding persistence, retries, and coordination outside the function.

Hybrid setups seem to work better in practice. Event-driven at the edges, persistent services where continuity actually matters.

Curious where you see this most often. Agent loops, streaming APIs, or something else?
      reactions: null
    - id: 1736228400000
      type: "our_reply"
      status: "posted"
      sentiment: "positive"
      content: |
Agent loops is something I'm exploring too. Teams building AI workflows hit the 15-minute limit or burn through memory managing conversation state in Lambda.

For workflow/state machine patterns, I've been looking at Durable Functions as an alternative to Step Functions. The programming model feels more natural for long-running orchestration.

Streaming APIs as well. Websockets and SSE need persistent connections. Seen teams build elaborate workarounds when a simple ECS service would've been cleaner.

Your "event-driven at the edges, persistent where continuity matters" framing nails it.
```

## Notes

- Matt's comment adds depth to the post thesis
- His framing of "cold starts as forcing function" is quotable
- Good conversation developing - he shared specific anti-patterns
- His "event-driven at edges, persistent where continuity matters" is a great mental model
- Answered his question about agent loops and streaming APIs
