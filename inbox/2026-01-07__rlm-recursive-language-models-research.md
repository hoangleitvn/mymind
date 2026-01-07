---
title: "Recursive Language Models (RLMs) - MIT Research Summary"
type: notes
status: active
created: 2026-01-07
source: https://arxiv.org/pdf/2512.24601v1
tags: [ai-research, context-management, llm, agents]
---

# Recursive Language Models (RLMs)

MIT research on handling infinite context by letting LLMs recursively call themselves.

## Core Idea

RLM inverts the paradigm: instead of "fit more context into the model", it asks "how can the model strategically access context stored externally?"

The full input is stored as a **variable in a Python REPL**, not in the model's context window. The model writes code to examine, filter, and chunk it.

## How It Works

```
1. Root LM receives summary + metadata (NOT raw content)
2. Model writes Python code to examine/chunk the context
3. Model calls llm_query(sub_prompt) to recursively invoke itself on chunks
4. Sub-LM results stored in variables
5. Model aggregates and outputs final answer
```

## The Three Layers

| Layer | Function |
|-------|----------|
| **Root LM** | Decides decomposition strategy (never sees full context) |
| **Python REPL** | Maintains state, executes code, stores variables |
| **Sub-LM Queries** | `llm_query()` function invokes sub-calls on chunks |

## Decomposition Strategies (Emergent)

1. **Filtering via code** - regex/search to find relevant sections
2. **Uniform chunking** - split by lines/characters, query each
3. **Smart partitioning** - analyze structure (headers, boundaries), chunk semantically

## Key Difference: Internal vs External Context Management

| Approach | Where Logic Lives |
|----------|-------------------|
| **RLM** | Inside the model - it decides how to decompose |
| **Ralph-wiggum / External loops** | Consumer-side orchestration |

RLM is **model-managed context** - the model writes the code to navigate its own context. External loops are **consumer-managed** - you design the iteration pattern.

## Results

- RLM(GPT-5-mini) beats GPT-5 by 114% on long-context benchmarks
- Zero degradation up to 10M+ tokens
- 3x cheaper than baseline approaches
- 49% better performance at lower cost per query

## Benchmarks

| Benchmark | Base GPT-5 | RLM(GPT-5) | Improvement |
|-----------|------------|------------|-------------|
| OOLONG (131K tokens) | 44.00% | 56.50% | +28.4% |
| OOLONG-Pairs (32K tokens) | 0.04% | 58.00% | Catastrophic vs success |
| CodeQA (900K tokens) | Context exceeded | 62.00% | Enables impossible |
| BrowseComp-Plus (6-11M tokens) | N/A | 91.33% | vs 70.47% summary agent |

## vs Other Approaches

| Approach | RLM Advantage |
|----------|---------------|
| **CoT / ReAct** | Still limited by context window - RLM offloads context |
| **Summary agents** | Lose detail - RLM preserves access to any part |
| **Bigger context windows** | Requires retraining - RLM is inference-time only |
| **CodeAct + BM25** | Doesn't offload prompt to code environment |

## Why This Matters

The fundamental distinction: Other approaches try to fit more into the context window or retrieve relevant parts. RLM treats the entire context as an external data structure that the model navigates programmatically.

This enables:
1. **Arbitrary input length** - limited only by storage, not attention
2. **Strategic access** - model decides what to examine
3. **Recursive decomposition** - complex problems broken into sub-problems
4. **Cost efficiency** - only tokens actually needed are processed

## Related Concepts

- **Agentic Context Engineering** - self-improving context handling
- **Claude Code ralph-wiggum plugin** - consumer-side iteration loops
- **Context rot** - degradation in long-running sessions

## Open Source

**Yes - official implementation available:**

### Official (MIT)
- **GitHub:** https://github.com/alexzhang13/rlm
- Maintained by paper authors from MIT OASYS lab
- Extensible inference engine for API-based and local LLMs

### Community Implementations
- https://github.com/ysz/recursive-llm - Process 100k+ tokens with any LLM
- https://github.com/fullstackwebdev/rlm_repl - Proof of concept implementation

### Related Resources
- Author blog: https://alexzhang13.github.io/blog/2025/rlm/
- Prime Intellect analysis: https://www.primeintellect.ai/blog/rlm

## Source

Paper: https://arxiv.org/pdf/2512.24601v1
