---
type: linkedin-engagement
created: '2025-12-09T10:00:00Z'
last_updated: '2025-12-09T10:00:00Z'

author:
  name: "Paolo Perrone"
  profile: "people/paolo-perrone.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/paoloperrone_afshine-amidi-just-sent-me-something-if-activity-7403615052546711552-IXYw"
  date: '2025-12-08'
  reactions: 0
  comments_count: 67
  reposts: 0
  theme: "Free Stanford-level AI education"
  angle: "Democratizing premium technical knowledge"
  key_points:
    - "Afshine Amidi completed Stanford Transformers & LLMs course"
    - "9 free YouTube lectures covering $60K/year material"
    - "Covers: Transformer architecture, LLM training, tuning, reasoning, agentic LLMs, evaluation"
  hashtags: []

thread_topic: "Stanford LLM course and RAG production challenges"
topic_tags: [ai-education, llm, transformers, rag, production-systems]

engagement_status: "conversation"
response_received: true
follow_up_needed: true
follow_up_date: '2025-12-09'
---

## Original Post

Afshine Amidi just sent me something. If you want to learn like Stanford students (tuition: $60K/year), without paying $60K... Here's what he just finished:

Complete Transformers & LLMs Stanford course - 9 free YouTube lectures

Syllabus:
1. Transformer Architecture
2. Transformer Tricks
3. Large Language Models
4. LLM Training
5. LLM Tuning
6. LLM Reasoning
7. Agentic LLMs
8. LLM Evaluation
9. Current Trends

## Notable Comments

```yaml
- id: 1733745600000
  author: "Awais Naeem"
  profile: null
  sentiment: "positive"
  content: |
    Companies deploying AI agents or RAG systems need engineers who understand LoRA, reward modeling and context length trade-offs, not just APIs.
  reactions: 0
  insight: "Validates production knowledge gap"
  replies: []

- id: 1733746200000
  author: "Mohammad Syed"
  profile: null
  sentiment: "positive"
  content: |
    Foundation knowledge beats keeping up with the latest model hype every single time.
  reactions: 0
  insight: "Aligns with foundation-first philosophy"
  replies: []
```

## Our Engagement

```yaml
- id: 1733747000000
  type: "comment"
  reply_to: null
  status: "posted"
  timestamp: '2025-12-09T10:00:00Z'
  content: |
    Saw this yesterday. Already saved. The lecture on agentic LLMs and RAG is the one I'm starting with.
  strategy: "Quick value signal - shows action taken, specific interest area"

- id: 1733749000000
  type: "reply"
  reply_to: 1733747000000
  status: "posted"
  timestamp: '2025-12-09T10:30:00Z'
  content: |
    Chunking that splits context across boundaries. The answer exists in the docs, but the retrieval pulls half of it from one chunk and misses the other half entirely.

    Smaller chunks improve precision but lose context. Larger chunks retrieve more noise. Finding the right balance is more trial and error than science.
  strategy: "Expert Insight - Direct answer with real production experience"

- id: 1733751000000
  type: "reply"
  reply_to: 1733749000000
  status: "draft"
  timestamp: '2025-12-09T11:00:00Z'
  content: |
    Mostly per-project. We've done a few with RAG, some with prompting only.

    Recent example: research paper ingestion. Engineer started with fixed chunk sizes. Results were poor. We switched to section headers, markdown output instead of raw text. For math formulas and tables, different strategy entirely.

    Still building, still experimenting, still measuring. No silver bullet yet.

    One thing I'm exploring: CAG (Cache-Augmented Generation) as alternative to chunking altogether. Have you worked with it?
  strategy: "Expert Insight - Real project example showing iteration. Flips conversation with CAG question to continue dialogue."
```

## Notes

- Paolo is high-value connection (110K followers, technical content creator)
- Conversation shifted from course to RAG production challenges
- Good opportunity to demonstrate real production expertise
- His questions show genuine interest, not just engagement farming
- Consider connection request after this exchange completes
