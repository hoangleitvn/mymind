---
type: linkedin-engagement
created: '2026-01-07T04:05:00Z'
last_updated: '2026-01-07T04:30:00Z'

author:
  name: "Shubham Saboo"
  profile: "people/shubham-saboo.md"
  linkedin_url: "https://www.linkedin.com/in/shubhamsaboo"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/shubhamsaboo_new-research-what-if-your-llm-could-call-activity-7414507836841553920-GNaX"
  activity_id: "7414507836841553920"
  date: '2026-01-07'
  reactions: 41
  comments_count: 9
  reposts: 0
  theme: "Recursive Language Models (RLMs) for infinite context"
  angle: "LLMs calling themselves recursively to handle context rot"
  key_points:
    - MIT research on Recursive Language Models
    - GPT-5-mini with RLMs outperforms GPT-5 on long-context by 114%
    - Model recursively calls itself over chunks instead of massive context window
    - Zero degradation even with 10M+ tokens
    - Model decides how to decompose problems, not humans
  hashtags: []

thread_topic: "Recursive Language Models and context management"
topic_tags: [llm, context-management, recursive-reasoning, ai-research, agents]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

NEW RESEARCH: What if your LLM could call itself recursively to handle infinite context

Researchers from MIT just dropped Recursive Language Models (RLMs). And the results are wild. GPT-5-mini with RLMs outperforms GPT-5 on long-context benchmarks. By more than double. At lower cost.

Here's why this matters: 2025 gave us plenty of evidence that "context rot" is real. Long-running Claude Code sessions get dumber. ChatGPT forgets instructions after 50 messages. Your agent loses its personality halfway through a workflow. Critical instructions disappear into the noise.

Here's how RLMs work:
- The model recursively calls itself (or other LLMs) over chunks of context
- It operates in a Python REPL environment with your context as a variable
- It can peek, grep, partition, and summarize before answering
- The root LLM never sees the full context, so it never rots

The results:
- RLM(GPT-5-mini) beats GPT-5 by 114% on long-context benchmarks
- 49% better performance at lower cost per query
- Zero degradation even with 10M+ tokens

The era of "just make the context window bigger" is ending. The era of recursive reasoning is beginning.

## Notable Comments

```yaml
- id: 1736234000000
  author: "Josiah Okesola (Jayjay)"
  profile: null
  sentiment: "positive"
  content: |
We've all felt context rot in real workflows, even if we didn't have language or benchmarks for it yet. Letting the model decide how to revisit, chunk, and reason instead of forcing everything into a single window makes a lot of sense.
  reactions: 1
  insight: "Validates the context rot experience everyone has felt"
  replies: []

- id: 1736234100000
  author: "Shivam Bharadwaj"
  profile: null
  sentiment: "positive"
  content: |
This feels like "context management" becoming a first-class capability, not just bigger windows. Also loved the idea that the model can choose how to chunk/inspect/summarize before answering.
  reactions: 1
  insight: "Context management as first-class capability - good framing"
  replies: []
```

## Our Engagement

```yaml
- id: 1736234400000
  type: "comment"
  status: "revised"
  sentiment: "positive"
  content: |
The shift from "bigger context windows" to "smarter context management" feels like the right direction.

Interesting parallel with Claude Code's ralph-wiggum plugin - both are external orchestration patterns. RLM uses a Python REPL where the model writes code to navigate context. Ralph-wiggum uses iteration loops to keep working until completion.

Different mechanics, similar concept. Both offload context management to infrastructure outside the model itself.
  strategy: "Observe - compare RLM vs ralph-wiggum as external orchestration patterns"
  replies: []
```

## Notes

- Second engagement with Shubham (first was context engineering post)
- RLMs paper worth reading: https://arxiv.org/pdf/2512.24601v1
- Connects to my agent workflow exploration
- "Context management as first-class capability" is a good framing from comments
- High-follower account (~75k) with good engagement
- **Revised**: Original comment incorrectly framed RLM as "internal" model logic. Both RLM and ralph-wiggum are external orchestration patterns - RLM uses Python REPL wrapper, ralph-wiggum uses iteration loops. Key insight: neither is the model "internally" managing context.
