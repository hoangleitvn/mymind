---
type: linkedin-engagement
created: '2026-01-06T10:30:00Z'
last_updated: '2026-01-06T10:30:00Z'

author:
  name: "Yasser Bashir"
  profile: "people/yasser-bashir.md"
  linkedin_url: "https://www.linkedin.com/in/yasserbashir/"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/yasserbashir_over-the-lastweekend-i-decided-to-build-activity-7413278290888572928-MTJz"
  date: '2026-01-06'
  reactions: null
  comments_count: null
  reposts: null
  theme: "AI-assisted development with human oversight"
  angle: "Wrote no code but reviewed every line AI produced"
  key_points:
    - "Built production workflow app in 2 days using AI as coding agent"
    - "Tech stack: FastAPI, React, PostgreSQL, GCP CloudRun"
    - "Set up auth, observability, CI/CD before involving AI"
    - "Wrote almost no code but reviewed almost every line AI produced"
    - "Actively guided AI through bug fixes, managed context window"
    - "Concern about newer devs skipping production-readiness fundamentals"
  hashtags: []

thread_topic: "AI code generation with human review process"
topic_tags: [ai-development, code-review, ai-coding, production-readiness]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Over the last weekend, Yasser Bashir decided to build an internal-facing workflow application. Using AI as a coding agent, he completed a production-ready workflow app in 2 days and deployed to GCP by day 3, with real user testing by day 4.

**Tech Stack:**
- Backend: FastAPI (Python 3.14)
- Frontend: React
- Database: PostgreSQL (CloudSQL)
- Infrastructure: GCP CloudRun, load balancing
- Testing: Cypress (end-to-end)
- CI/CD: GitHub Actions

**Key Implementation Details:**
Made deliberate architectural decisions before involving AI, including setting up authentication via Google IDP, implementing observability, configuring separate staging/production environments, and establishing automated deployment pipelines.

**Review Process:**
Emphasized that while he "wrote almost no lines of code," he "reviewed *almost* every line of code AI produced." Actively guided the AI through bug fixes and maintained careful attention to context window management throughout development.

**Critical Caveat:**
Acknowledged concerns about newer developers skipping essential production-readiness steps, questioning whether future engineers will understand system design fundamentals developed through hands-on debugging experience.

## Notable Comments

```yaml
[]
```

## Our Engagement

```yaml
- id: 1736159400000
  type: "comment"
  status: "draft"
  sentiment: "question"
  content: |
The "reviewed almost every line" part is where I want to dig deeper.

When reviewing AI-generated code, what were your decision triggers for accepting vs pushing back? Did you find patterns where the AI consistently needed correction (security, edge cases, naming)?

Curious because "code review" in this context feels fundamentally different from reviewing human PRs.
  strategy: "Add Question - Explore the review process that made this work, benefits all readers working with AI-generated code"
  replies: []
```

## Notes

- Strong example of AI-assisted development with proper human oversight
- His approach aligns with "foundation first" principle: set up architecture before AI work
- The review process insight is valuable - most AI coding content skips this
- Could be good connection for AI development discussions
