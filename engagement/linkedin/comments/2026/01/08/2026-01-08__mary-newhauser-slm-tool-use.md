---
type: linkedin-engagement
created: '2026-01-08T07:46:00Z'
last_updated: '2026-01-08T07:46:00Z'

author:
  name: "Mary Newhauser"
  profile: "people/mary-newhauser.md"
  linkedin_url: "https://de.linkedin.com/in/mary-newhauser"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/mary-newhauser_the-paper-weve-been-waiting-for-is-finally-activity-7414682298765369344-2b74"
  activity_id: "7414682298765369344"
  date: '2026-01-07'
  reactions: 1686
  comments_count: 9
  reposts: 0
  theme: "SLM vs LLM for specialized tasks"
  angle: "Small fine-tuned models outperform large models on focused tool use"
  key_points:
    - 350M fine-tuned SLM outperformed ChatGPT and Claude on ToolBench
    - 350M is the sweet spot for SLM tool use
    - SLM learned to suppress irrelevant behaviors and focus on tool-use
    - Purpose-built beats general-purpose when scope is narrow
  hashtags: []

thread_topic: "SLM outperforming LLM on tool use tasks"
topic_tags: [ai-models, slm, llm, fine-tuning, tool-use, architecture]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

The paper we've been waiting for is finally here. Amazon Web Services (AWS) researchers just published a wild paper on arXiv, demonstrating that a 350M fine-tuned SLM outperformed several fine-tuned LLMs on tool use and agentic tasks. How did the experiment play out? First, they fine-tuned a SLM (facebook/opt-350m) on the ToolBench dataset for three specific tasks generally performed by LLMs: 1. Document summarization 2. Query answering 3. Structured data interpretation Then, they compared the performance of their fine-tuned SLM to proprietary CoT LLMs (ChatGPT, Claude) and open LLMs fine-tuned for tool use on the ToolBench dataset. The results were wild. The fine-tuned SLM outperformed ALL LLMs on all aspects of tool use on the ToolBench evaluation framework. They also report that: • 350M is the sweet spot for SLM size for tool use • The SLM learned to suppress irrelevant behaviors and focus better on tool-use only Why is this interesting? For a few reasons: • The SLM is very, very small — well under 1B parameters. The fact that it could outperform all LLMs in the experiment is very impressive. • The SLM is a decoder-only model that performs generative tasks. Many modern SLMs are fine-tuned to perform non-generative tasks like classification and NER. It's important to remember that a SLM like this isn't intended to replace LLMs across multiple applications and domains. A fine-tuned SLM can replace a LLM for a specific domain and application. But still, this is wild.

Paper: https://lnkd.in/gTqmzfTg
ToolBench Repo: https://lnkd.in/gCCfyNyp

## Notable Comments

```yaml
- id: 1736322000000
  author: "Carles Onielfa"
  profile: null
  sentiment: "question"
  content: |
I'm all for SLMs, but I'm digging into the baselines used here and finding some inconsistencies. The paper compares a fine-tuned OPT-350M against "ChatGPT-CoT (175B)" and "Claude-CoT (52B)" but doesn't specify the versions of the models used or any reference that might give any clues into what they are. The original ToolLLM paper evaluates a ChatGPT model and a Claude one, but the naming does not match at all, and those models in the original paper are ancient (Claude-2 and GPT-3.5-Turbo). Listing closed-source models with parameter counts is a massive red flag, even if they are estimates (which is not mentioned anywhere in the paper). Furthermore, the "Method" mentions running these proprietary models with controlled batch sizes, which isn't possible for closed APIs. They also say that "All models were evaluated under identical computational conditions to ensure fair comparison," which simply isn't possible when comparing cloud LLMs with local ones. This of course doesn't necessarily invalidate the results, but it certainly calls into question the rigor of this paper.
  reactions: 43
  insight: "Strong methodological critique - raises valid concerns about baselines and evaluation rigor"
  replies: []

- id: 1736322100000
  author: "Alberto Danese"
  profile: null
  sentiment: "question"
  content: |
Mary Newhauser wait: isn't this a perfect case of overfitting? A SLM fined tuned on the ToolBench dataset and then... evaluated on the same ToolBench dataset? Am I missing something?
  reactions: 1
  insight: "Valid overfitting concern - same dataset for training and eval"
  replies: []

- id: 1736322200000
  author: "Rey Hashempour"
  profile: null
  sentiment: "positive"
  content: |
The result is wild, but the lesson isn't: tool use is a low-entropy problem, and over-scaled models often over-behave. This feels less like a breakthrough and more like confirmation that capacity matching + focused supervision beats brute force scaling.
  reactions: 3
  insight: "Good reframe - capacity matching vs brute force scaling"
  replies: []

- id: 1736322300000
  author: "Reid Pinchback"
  profile: null
  sentiment: "positive"
  content: |
I suspect special-purpose SLMs will become much more the norm. LLMs can be like a swiss army knife wrapped in plastic encased in concrete. Somewhere deep inside you hope there is a useful tool, but often you have to work too hard to extract it.
  reactions: 3
  insight: "Good analogy about general vs specialized tools"
  replies: []
```

## Our Engagement

```yaml
- id: 1736322379000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
General-purpose models need instructions to narrow down to specific expertise. Fine-tuned small models skip that step entirely.

This points to where things are heading: micro-LLMs and offline models for defined tasks. The 350M result isn't surprising when you think about it that way. Focus beats flexibility when the scope is clear.
  strategy: "Add Context - reframe around instruction overhead and future direction of micro-LLMs"
  replies: []
```

## Notes

- Mary is AI/ML content creator with 25K+ followers
- Post has strong engagement (1.6K+ reactions)
- Comment thread has good methodological discussion (Carles' critique is worth noting)
- The overfitting concern from Alberto is valid and worth monitoring
- Post aligns with architecture/right-sizing themes in my content
