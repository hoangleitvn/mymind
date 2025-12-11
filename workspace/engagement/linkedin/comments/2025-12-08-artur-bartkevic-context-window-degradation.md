---
type: linkedin-engagement
created: '2025-12-08T12:00:00Z'
last_updated: '2025-12-08T12:00:00Z'

author:
  name: "Artur Bartkevic"
  profile: "people/artur-bartkevic.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/arturas-bartkevic_ai-codingwithai-claudeai-activity-7403705042840633344-uLtj"
  date: '2025-12-08'
  reactions: 0
  comments_count: 0
  reposts: 0
  theme: "LLM context window management and AI coding productivity"
  angle: "Technical insight - performance degrades after 40% context, solution is sub-agents"
  key_points:
    - "You're absolutely right loop signals context degradation"
    - "LLM performance degrades after ~40% context window usage"
    - "Fork context-heavy work to sub-agents"
    - "Uses claude-code-project-index for research in separate context"
    - "Fresh context = better tokens in, better tokens out"
  hashtags: ["AI", "CodingWithAI", "ClaudeAI", "DeveloperTools"]

notable_comments: []

our_engagement:
  - id: 1
    type: "comment"
    reply_to: null
    status: "draft"
    timestamp: '2025-12-08T12:00:00Z'
    content: |
Felt this. The late-night "just one more prompt" spiral rarely ends well.

Fresh sessions help, but the real fix is treating context like a limited resource from the start. Front-load the important stuff, don't let noise accumulate.

Curious: do you add instructions to stop Claude from saying "You're absolutely right"? I've seen people add that to system prompts to catch the sycophancy early.
    strategy: "Personal Experience + Question - Relatable opening, practical insight, ends with specific question about system prompts to spark conversation"

thread_topic: "LLM context window management"
topic_tags: [ai-development, claude-code, context-management, developer-tools, productivity]
engagement_status: "draft"
response_received: false
follow_up_needed: true
follow_up_date: '2025-12-09'
---

## Original Post

11pm. Tired. Just want to finish this one thing. AI responds: "You're absolutely right." And the loop begins. Prompt again. Worse output. Prompt again. "You're absolutely right." Nothing fixed. Research confirms what many of us have felt: LLM performance degrades after ~40% context window usage. All those error messages, file searches, failed attempts? "The worst thing is incorrect information, then missing information, then just too much noise." 168,000 tokens available. Past 40%, you're in the dumb zone. The fix: fork context-heavy work to sub-agents. Let them do the searching and reading, return only what matters. We use claude-code-project-index for this. Maintains an index, does research in a separate context, keeps the main session clean. Fresh context. Better tokens in, better tokens out.

## Notes

- Very fresh post (9 min old, 0 engagement when we commented)
- First comment opportunity
- Technical content about Claude Code - directly relevant to my workflow
- Asked question about system prompts to spark dialogue
- Follow up to see if he responds about sycophancy instructions
