---
type: linkedin-engagement
created: '2025-12-23T15:50:00Z'
last_updated: '2025-12-23T15:50:00Z'

author:
  name: "Oshri Cohen"
  profile: "people/oshri-cohen.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/oshricohen_given-that-we-are-all-using-agentic-development-activity-7407744174642548736-51G5"
  date: '2025-12-19'
  reactions: 15
  comments_count: 6
  reposts: 0
  theme: "Agentic development changing PR workflows"
  angle: "How to handle AI generating cross-service changes"
  key_points:
    - "AI generates changes across multiple services ignoring PR sanity"
    - "Traditional approach: smaller PRs for db, then api, then frontend"
    - "AI approach: all at once"
    - "Looking for workflow solutions"
  hashtags: []

thread_topic: "Agentic development PR workflow"
topic_tags: [ai-development, agentic-coding, pr-workflow, developer-experience]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Given that we are all using agentic development, I have a few thoughts on how it changes the development process, mainly around PRs. Agentic Development can and will generate code changes across multiple services, with no regard for PR reviewer sanity. Example: makes changes to a database model and also the API and the front-end all at once, instead of a human developer who would make a PR for the database migration and then the API/front-end to simplify PR reviews. You know... Smaller PRs and all. How would you approach this problem? I was thinking of allowing multiple PRs per work branch, but I am not entirely sure about this yet. Looking for a constructive conversation about this.

## Notable Comments

```yaml
- id: 1734703800000
  author: "James Sperring"
  profile: null
  sentiment: "neutral"
  content: |
    Guide the agent to work step by step, come up with a plan first and only tackle one point at a time. Step 1: create backwards compatible schema changes with up/down scripts. Step 2: update api endpoints to support new schema. Step 3: update ui. Of course, most agents will eventually veer completely off track and tackle all 3 steps at once no matter how strongly you tell them not to.
  reactions: 1
  insight: "Step-by-step agent guidance - acknowledges agents often ignore instructions"
  replies: []

- id: 1734703801000
  author: "Sam Lombardo"
  profile: null
  sentiment: "positive"
  content: |
    Break the project into bite-sized human-verifiable tasks, locked behind feature flags. Each Jira task was something that from beginning to end could be verified by QA and Product owners alike.
  reactions: 1
  insight: "Feature flag approach with granular tasks - detailed methodology"
  replies: []

- id: 1734703802000
  author: "Ankeeth Suvarna"
  profile: null
  sentiment: "question"
  content: |
    Stacked PRs?
  reactions: 1
  insight: "Simple suggestion - stacked PR pattern"
  replies: []

- id: 1734703803000
  author: "Mark Shust"
  profile: null
  sentiment: "neutral"
  content: |
    I've always created feature branches, and have PRs linked to them. So, merges are always complete features. That's said, AI is changing things and I've had good success with one-shotting huge features, so I'm not too pedantic about minimalistic commits and the such anymore.
  reactions: 1
  insight: "Feature branches + acceptance of larger AI-generated changes"
  replies: []

- id: 1734703804000
  author: "Michael Rispoli"
  profile: null
  sentiment: "neutral"
  content: |
    I actually like to work in more of a vertical slice so I like to see the feature working font to back to database. I find I really need to be able to test the full function as well as the code to know if I want that code in there.
  reactions: 1
  insight: "Vertical slice preference - full stack visibility for testing"
  replies: []
```

## Our Engagement

```yaml
- id: 1734965400000
  type: "comment"
  reply_to: null
  status: "posted"
  timestamp: '2025-12-23T15:50:00Z'
  content: |
    It depends on context. Batch changes work better for reviewing and testing as a unit. Large or multiple repos: individual PRs make sense.

    AI speeds things up, but changing the workflow itself requires experimentation. The real work isn't picking which AI or how fast. It's refining the process around it.

    What's working for you so far?
  strategy: "Expert Insight - Context-dependent answer plus process-over-tool perspective. Ends with question to invite response."
```

## Notes

- Second engagement with Oshri (first was Claude Code vs Cursor post)
- Good discussion happening in comments - multiple approaches
- Aligns with your "workflow refinement over AI speed" angle
- Opportunity to reinforce relationship with thoughtful contribution
