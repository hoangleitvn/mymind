---
type: issue
created: '2025-12-30T10:00:00+07:00'
category: mizemind-product
tags: [writing-quality, content-creation, user-feedback]
priority: medium
status: identified
---

# Issue: Mizemind Produces Compressed Writing Tone for Articles

## Problem

When generating long-form content (blog articles, guides), Mizemind defaults to a compressed, punchy writing style more suited for LinkedIn posts:
- Short, staccato sentences
- Minimal connective tissue between ideas
- List-heavy structure
- Lacks narrative flow and explanation

## Example

Original compressed output:
```
Teams celebrate velocity. Tasks completed. Time saved. Output volume.

These metrics are incomplete. They measure quantity, not quality.

Track what matters: error rate after AI introduction, rework frequency, time between delivery and first complaint.

Faster output means nothing if you're fixing mistakes two weeks later.
```

Expanded narrative version:
```
When AI adoption begins, teams naturally celebrate velocity. Tasks completed faster. Hours saved per week. Output volume increased. These are the metrics that get reported to leadership. These are the numbers that justify the investment.

But these metrics tell an incomplete story. They measure quantity, not quality. They capture production without capturing consequences.

What actually matters is what happens after the output ships. Track error rate after AI introduction. Track rework frequency. Track time between delivery and first complaint. Track whether problems are caught internally or externally.

These metrics reveal whether AI is actually helping or just creating problems faster. Faster output means nothing if you're fixing mistakes two weeks later. Speed without quality is just accelerated failure.
```

## Root Cause Hypothesis

1. **Training bias**: AI models are exposed to more short-form content (tweets, LinkedIn posts) than long-form articles
2. **Efficiency instinct**: Models optimize for conveying information concisely
3. **Missing context signal**: Content-creator skill doesn't distinguish article vs post tone requirements strongly enough

## Potential Solutions

1. **Explicit format instruction**: Add format-specific guidelines to content-creator skill (article vs post vs thread)
2. **Word count guidance**: Specify target word counts for sections to encourage expansion
3. **Tone examples**: Include before/after examples showing compressed vs narrative style
4. **Review prompt**: Add self-review step asking "Does this read like an article or a LinkedIn post?"

## Impact

- Articles feel rushed and surface-level
- Reader experience suffers (less satisfying to read)
- Professional credibility affected (articles should demonstrate depth)
- Manual expansion required, defeating productivity gains

## Related

- content-creator skill implementation
- identity-kit voice definitions
- format-specific templates
