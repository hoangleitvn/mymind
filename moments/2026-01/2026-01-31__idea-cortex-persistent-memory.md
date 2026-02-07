---
title: "Cortex - Persistent local memory for Claude Code"
type: idea
status: captured
created: 2026-01-31
source: github
source_url: "https://github.com/hjertefolger/cortex"
project: mizemind
tags: [mizemind, memory, persistence, context-engine, sqlite, embeddings]
---

## The Idea

Cortex is a Claude Code plugin that solves context persistence across sessions:
- Session limits mid-task → Auto-save at 5% context increments
- `/clear` wipes everything → SQLite persistence survives clears
- Re-explaining context repeatedly → Hybrid search recalls relevant memories
- Privacy concerns → 100% local storage

## Technical Architecture

| Component | Purpose |
|-----------|---------|
| SQLite + FTS5 | Persistent storage with full-text search |
| Nomic Embed v1.5 | 768-dimensional embeddings |
| Hybrid search | Vector similarity (60%) + keyword BM25 (40%) |
| RRF fusion | Reciprocal Rank Fusion for combining results |

## Key Features

- Auto-save at context thresholds (default 5%)
- Archive before `/clear` (PreCompact hook)
- SHA256 deduplication prevents duplicate memories
- 7-day recency decay weights recent memories higher
- Restoration with token budget (default 2000 tokens)

## Mizemind Application

Similar to what we're building:
- Context that persists across sessions
- Local-first, no cloud dependency
- Searchable history with semantic understanding

Differences to consider:
- Cortex uses embeddings + vector search
- Mizemind uses markdown files + git
- Could hybrid approach work? Embeddings index over markdown files?

## Performance Reference

| Operation | Latency |
|-----------|---------|
| Embedding generation | ~100ms |
| Vector search (1000 memories) | ~50ms |
| Hybrid search | ~100ms |

Memory: ~50MB base (includes embedding model)

## Questions for Mizemind

1. Do we need embeddings, or is grep + file structure enough?
2. Auto-save triggers: context percentage vs explicit capture?
3. How to handle restoration context budget?
4. Deduplication strategy for captured moments?
