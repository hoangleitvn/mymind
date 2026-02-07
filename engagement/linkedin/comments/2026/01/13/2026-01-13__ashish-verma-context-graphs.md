---
type: linkedin-engagement
created: '2026-01-13T07:57:00Z'
last_updated: '2026-01-13T07:57:00Z'

author:
  name: "Ashish Verma"
  linkedin_url: "https://sg.linkedin.com/in/ashish-verma296"
  profile: "people/ashish-verma.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/ashish-verma296_contextgraphs-knowledgegraphs-enterpriseai-activity-7416502167122968577-2AKz"
  activity_id: "7416502167122968577"
  date: '2026-01-13'
  reactions: 93
  comments_count: 0
  reposts: 0
  theme: "Context graphs vs Knowledge graphs for AI agents"
  angle: "Decision context preservation for enterprise AI safety"
  key_points:
    - Knowledge graphs model truth, context graphs model judgment
    - Enterprises lack durable decision traces, not data
    - Decision context includes authority, temporal validity, constraints
    - Context graphs make institutional judgment executable
  hashtags: ["ContextGraphs", "KnowledgeGraphs", "EnterpriseAI", "AIArchitecture", "AgentGovernance"]

thread_topic: "Context graphs for agentic AI systems"
topic_tags: [knowledge-graphs, context-graphs, enterprise-ai, ai-architecture, decision-systems]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Context graphs are increasingly discussed as a foundational layer for agentic systems—framed by Jaya Gupta and Ashu Garg as a "trillion-dollar opportunity"—but their real value lies in preserving decision context. As Arvind Jain and Dharmesh Shah also note, enterprises don't lack data; they lack durable decision traces across systems, which is exactly what agents need to operate safely.

The breakthrough isn't better graphs—it's decision-time context. Treating context graphs as "KGs with metadata" creates systems that look right but fail at decision time.

Let's be precise:
- Knowledge Graphs model truth
- Context Graphs model judgment under constraints

A Real Enterprise Example - Vendor risk decision:
- Vendor Atlas Systems missed its SLA twice
- A third miss occurred during a region-wide cloud outage
- Finance waived penalties only for that window
- Approved by a Regional Finance Director, not globally

What a Knowledge Graph captures:
Atlas Systems → has_contract → SLA-992 → violation → Incident-3
This is true — but incomplete.

A KG cannot answer:
- Was the violation valid?
- Was it waived?
- Under what conditions?
- By whose authority?
- Would the same exception apply again?

A KG records what happened, not why it was allowed.

What a Context Graph Captures - The decision itself becomes a first-class object:
- Operational Context (Regional Cloud Outage)
- Policy Context (SLA v3.2, Penalty Rule Active)
- Conflict Detected (Breach vs Force Majeure)
- Judgment (Exception Granted, Scoped)
- Authority (Regional Finance Director)
- Temporal Validity (Mar 12–14)

This is not metadata. It's institutional judgment made executable.

## Notable Comments

```yaml
- id: 1736751000000
  author: "Dextra Labs"
  profile: null
  sentiment: "positive"
  content: |
This is a sharp distinction. Enterprises do not fail because facts are missing, they fail because judgment is not preserved. Treating decisions, authority and time as first class objects is what finally makes agents safe to trust, not richer schemas or more triples.
  reactions: 1
  insight: "Strong validation of core thesis"
  replies: []

- id: 1736751100000
  author: "Marc-Henri HURT"
  profile: null
  sentiment: "question"
  content: |
It's strange we rarely see the word "rules" associated with "context graphs"
  reactions: 1
  insight: "Interesting observation about rules vs context framing"
  replies: []
```

## Our Engagement

```yaml
- id: 1736754992000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Thank you for the explanation.

Knowledge graphs capture domain expertise across the enterprise. Context graphs add what agents need for coordination - avoiding conflicts across different agents and systems.

This also explains why context graphs reduce hallucinations better than plain RAG. It's not just loading relevant facts. It's loading the constraints and authority that shaped them. Agents need decision traces, not just data.
  strategy: "Add Context - validate with experience + connect to hallucination reduction angle"
  replies: []
```

## Notes

- Technical post with clear enterprise AI angle
- Aligns with system architecture themes
- Good example of explaining complex concepts with concrete scenarios
- Singapore-based, enterprise AI focus
