---
type: linkedin-engagement
created: '2026-01-12T09:05:00Z'
last_updated: '2026-02-03T10:00:00Z'

post:
  source: "internal"
  source_file: "../../content/linkedin/2026/01/2026-01-12__ai-hallucination-patterns.md"
  url: "https://www.linkedin.com/feed/update/urn:li:activity:7416396599720947712/"
  activity_id: "7416396599720947712"
  date: '2026-01-12'
  reactions: null
  comments_count: null
  reposts: null

thread_topic: "12 AI Hallucination Patterns"
topic_tags: [ai-hallucination, ai-development, claude-code, engineering-skills]

engagement_status: "active"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

See source_file for full content.

## Notable Comments

```yaml
- id: 1736686800000
  author: "Adrian Moss"
  headline: null
  comment: |
    Claude

    and behaviour patterns, rather than code poor practice, I see self satisfaction / congratulatory consistently, laziness and dismissing a comprehensive execution with incorrect rationale that it isn't important etc and failure to follow Claude.md and other protocols unless reminded at key times in session
  priority: "high-value"
  type: "insight + template-request"
  our_response:
    comment:
      status: "draft"
      content: |
        Behavior patterns over code patterns. That's a useful framing. The "dismissing tasks" one is real. I've seen it rationalize skipping steps with confident reasoning that sounds plausible but is wrong.

        Sending the template now. Let me know if you spot more patterns worth adding.
    dm:
      status: "sent"
      content: |
        Hey Adrian, thanks for commenting on the hallucination patterns post. Here is the Claude project that I just pushed to GitHub: https://github.com/hoangleitvn/claude-starter

        I prefer simple rule-based, and I have nested Claude.md files for other instructions.

        And yeah, we always need to keep in mind that verify output is a critical step to avoid mistakes. No rules can save us if we skip ignoring validation.

        Thank for the connection and looking forward to hearing more from your experiences.

- id: 1738573200000
  author: "Tyson Miller"
  profile: "people/tyson-miller.md"
  headline: null
  comment: |
    Strong list. One pattern I'd add sits below hallucinations: authority drift.

    Over time, systems stop distinguishing between explicit authorization and absence of constraint. Execution proceeds not because something was approved, but because nothing blocked it.

    That's when humans become the reconciliation layer—manual overrides, judgment calls, cleanup after the fact.

    Drift detection at the substrate level (who is allowed to let this proceed right now, and can that authority be revoked) feels like the missing primitive as autonomy increases.

    Curious if you've seen this show up before failures surface as "hallucinations."
  priority: "insightful"
  type: "insight + question"
  our_response:
    status: "draft"
    content: |
      Yes. It usually shows up as "why did it do that?" moments before the output is obviously wrong.

      The AI edits a file you didn't ask it to touch. Runs a command you didn't approve. Small overreaches that seem helpful until they're not.
```

## Our Engagement

```yaml
- id: 1736679000000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  author: "INNOMIZE"
  content: |
We've built these rules into how our team works with AI tools.

Pattern #11 (Sycophancy Bias) catches us the most. The fix: treat AI output like a junior developer's PR. Review it, don't just merge it.

The engineers who spot hallucinations fastest? They've debugged those problems manually before.
  strategy: "Company support - reinforce founder's content, add team perspective"
  replies: []
```

## INNOMIZE Repost

```yaml
- id: 1736679100000
  type: "repost"
  status: "draft"
  author: "INNOMIZE"
  content: |
AI tools are powerful. They're also confidently wrong.

Our founder Hoang Le documented 12 hallucination patterns we've seen across 50+ projects. If your team uses AI coding tools, bookmark this.

The rule we live by: verify, don't trust.
  strategy: "Amplify reach - company repost with endorsement"
```

## Notes

- INNOMIZE comment and repost on founder's AI hallucination post
- Reinforces "junior dev PR" framing used in other engagements today
- Connects company practice to founder's thought leadership
