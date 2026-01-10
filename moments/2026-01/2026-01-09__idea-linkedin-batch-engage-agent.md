---
type: moment
category: idea
status: captured
created: 2026-01-09
tags: [linkedin, automation, engagement, agent]
---

# LinkedIn Batch Engage Agent

## Problem

Manual LinkedIn feed scrolling is inefficient for finding relevant posts. Need 20-30 posts/day, ideally recent (4h-1day).

## Proposed Solution

### Step 1: Manual Search (user)

Use Google search with operators:

```
site:linkedin.com/posts "vibe coding" after:2026-01-08
site:linkedin.com/posts "AI coding" after:2026-01-08
site:linkedin.com/posts "Claude Code" after:2026-01-08
site:linkedin.com/posts "engineering leadership" AI after:2026-01-08
site:linkedin.com/posts "spec-first" OR "agentic" after:2026-01-08
site:linkedin.com/posts "documentation" AI after:2026-01-08
site:linkedin.com/posts "serverless" AWS after:2026-01-08
```

Exclusions for noise:
```
-hiring -job -recruiter
```

### Step 2: Batch Processing (agent)

Create `/linkedin:batch-engage` skill:

**Input:**
```
/linkedin:batch-engage
<paste 20-30 URLs>
```

**Agent Actions:**
1. Fetch each post content via WebFetch
2. Analyze relevance to user's themes (vibe coding, AI coding, engineering leadership, AWS/serverless)
3. Create engagement tracking files for all
4. Draft comments for high-relevance posts (top 5-10)
5. Output summary with prioritization

**Output:**
- Engagement files created in `engagement/linkedin/comments/YYYY/MM/DD/`
- People files created if new authors
- Summary: "5 high-relevance, 10 medium, 5 low"
- Draft comments ready for review

## Limitations

- Google indexes LinkedIn 1-7 days delayed (not hours)
- Cannot filter by engagement metrics (reactions/comments)
- Automated Google fetches blocked - manual search required

## Next Steps

1. Build `/linkedin:batch-engage` skill
2. Test with 10 URLs first
3. Refine relevance scoring based on themes
