---
type: linkedin-engagement
created: '2026-02-05T14:55:00Z'
last_updated: '2026-02-05T14:55:00Z'

author:
  name: "Jasen Lew"
  linkedin_url: "https://www.linkedin.com/in/jasenlew"
  profile: "people/jasen-lew.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/jasenlew_i-burned-through-my-teams-entire-monthly-activity-7425184643244781568-rosr"
  activity_id: "7425184643244781568"
  date: '2026-02-05'
  reactions: 0
  comments_count: 0
  reposts: 0
  theme: "AI tool layer tax - hidden costs of intermediary tools"
  angle: "Same model, wildly different consumption - remove the inefficiency layer"
  key_points:
    - Burned through Cursor monthly credits in 3 hours using Opus 4.5
    - Cursor adds system prompts, compressed context windows, more round trips
    - AI tool layer tax - intermediary tools silently multiply token usage
    - Solution - gave team Claude Code directly, Cursor optional with caps
    - No approval workflows for upgrades - if blocked, surface it
  hashtags: []

thread_topic: "AI tool cost optimization - remove the layer tax"
topic_tags: [ai-tools, cursor, claude-code, token-costs, engineering-management]

engagement_status: "posted"
response_received: false
follow_up_needed: true
follow_up_date: 2026-02-07
---

## Original Post

I burned through my team's entire monthly Cursor credits in 3 hours. On a Sunday.

On Monday, I posted about $600+ in Cursor overages in under two weeks, primarily from one engineer. 58 comments. Some said cap the spending. Some said switch the tool. Some said the metric was wrong.

The most useful comments revolved around the same concept: stop looking at cost. Look at what's spending it.

So I tested it myself. I joined our Cursor team plan. Used the same model (Opus 4.5) I'd been using all week in Claude Code. By 3pm, I used the entire month's allotment.

Me. Same model. Wildly different consumption.

That told me what I needed to know.

Cursor layers its own prompting on top of whatever model you select. Larger system prompts, compressed context windows, more round trips. Its default context caps well below what Claude Code uses directly for the same model, and even higher tiers doesn't reliably close the gap.

Every extra round trip burns tokens. Every truncated context forces a re-explanation.

Seems like an "AI tool layer tax", i.e. the hidden cost of using AI through intermediary tools that silently multiply your token usage without improving your output.

So instead of capping spending, we removed the inefficiency. We created a Claude Team plan for our engineering team. Every engineer now gets Claude Code access. Cursor stays available as an optional IDE for engineers who still want it, but we're setting hard caps on overages within Cursor.

If someone hits Claude's throttle limits repeatedly on the the tier their on (twice a day, couple days in any given week), we upgrade them for the next couple of sprints. No approval workflows. Just one rule: if you're getting blocked, surface it.

Engineers should be building. Building smartly with the right tools.

The fix for overspending on AI tools wasn't spending less. It was removing the layer that was spending for us.

How is your team deciding which AI tools to pay for directly vs. through an intermediary?

## Notable Comments

```yaml
- id: 1738767000000
  author: "Jasen Lew"
  profile: "people/jasen-lew.md"
  sentiment: "neutral"
  content: |
📌 Original post I referenced: https://www.linkedin.com/posts/jasenlew_your-engineering-team-has-no-idea-what-theyre-activity-7424089531068383233-8eu4
  reactions: 1
  insight: "Self-comment linking to prior post for context"
  replies: []
```

## Our Engagement

```yaml
- id: 1738767100000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
We went through the same journey. Started with Cursor, hit the same challenges, now the whole team is on Claude Team directly. Currently rebuilding a project that was vibe-coded, so token limits hit daily. Still manageable.

Curious about your workflow - any custom context engineering setup with Claude Code, or individual prompts per task?
  strategy: "Add Context - Share parallel journey, end with genuine question about context engineering workflows"
  replies: []
```

## Notes

- First engagement with Jasen Lew
- Fresh post (18 minutes old when extracted) - early engagement opportunity
- Strong alignment with my Claude Code content and tool philosophy
- His "layer tax" concept aligns with my "system first, model second" principle
- Practical engineering leadership perspective
- Could be good ongoing connection for AI tooling discussions
