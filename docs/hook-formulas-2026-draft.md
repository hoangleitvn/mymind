---
title: Hook Formulas 2026 (Draft Update)
type: reference
status: draft
created: 2026-01-05
purpose: Updated hook formulas based on 2026 LinkedIn algorithm and performance data
---

# Hook Formulas 2026

Updated hook library based on 2026 LinkedIn algorithm changes and performance analysis.

## Critical 2026 Rules

### The 2-Line Rule

LinkedIn displays approximately **210 characters** (~2 lines) before "see more".

| Line | Max Characters | Purpose |
|------|----------------|---------|
| Line 1 | 62 chars | Bold statement, tension, or action |
| Line 2 | 50 chars | Outcome, metric, or promise |
| Line 3 | Leave blank | Whitespace = readability |

**Total hook: ~110 characters max**

### Character Counting

```
✅ Good:
Line 1: "Serverless is expensive at scale" is dead.  (43 chars)
Line 2: AWS just killed that argument.               (31 chars)

❌ Bad:
Line 1: Closing my AWS re:Invent 2025 deep dive series. Here are the  (62 chars - wraps unpredictably)
Line 2: updates that change how you manage RDS and database costs     (58 chars - continues wrapping)
```

**Rule: Write 2 separate statements, not 1 sentence that wraps.**


## Core Hook Formulas (2026)

### Formula 1: Curiosity Gap

**Pattern:** [Action] + [Unexpected Outcome] + [Timeframe]

**Structure:**
```
Line 1: I [did X] for [timeframe].
Line 2: [Unexpected result]. Here's what happened.
```

**Examples:**
```
I stopped posting on LinkedIn for 30 days.
My leads actually doubled.
```
→ Line 1: 43 chars, Line 2: 26 chars ✓

```
I deleted 80% of our microservices.
Deployments went from 3 hours to 15 minutes.
```
→ Line 1: 36 chars, Line 2: 45 chars ✓

**When to use:**
- Personal experiments or case studies
- Counter-intuitive results
- Before/after transformations


### Formula 2: Tension + Specificity

**Pattern:** [Bold Statement] + [Specific Metric] = Curiosity

**Structure:**
```
Line 1: [Bold claim about common practice].
Line 2: Here's the $X / X% framework I use instead.
```

**Examples:**
```
Most LinkedIn content is a waste of time.
Here's the $4,800 framework I use instead.
```
→ Line 1: 42 chars, Line 2: 42 chars ✓

```
"Serverless is expensive at scale" is dead.
AWS just killed that argument. Here's the new rule.
```
→ Line 1: 43 chars, Line 2: 51 chars ✓

**When to use:**
- Challenging conventional wisdom
- Sharing frameworks or systems
- B2B and technical audiences


### Formula 3: Contrarian Hook

**Pattern:** [Popular Belief] is [Negative Trait]. Here's why.

**Structure:**
```
Line 1: [Common advice/belief] is [wrong/dead/broken].
Line 2: [Alternative take]. Here's why.
```

**Examples:**
```
Consistency is killing your brand.
You don't need more posts. You need better ones.
```
→ Line 1: 35 chars, Line 2: 48 chars ✓

```
Code reviews are broken.
Most teams do them backwards. Here's the fix.
```
→ Line 1: 24 chars, Line 2: 45 chars ✓

**When to use:**
- Thought leadership positioning
- Sparking debate
- Differentiating your POV


### Formula 4: The Punchy Contrast

**Pattern:** [X is Y]. [Z is W]. [Stakes].

**Structure:**
```
Line 1: [Thing 1] is [description]. [Thing 2] is [contrast].
Line 2: [Consequence or stakes].
```

**Examples (from top performers):**
```
Coding is typing. Engineering is thinking.
One of them AI can do for you. The other, it can't.
```
→ 12,619 impressions
→ Line 1: 40 chars, Line 2: 51 chars

```
AI writes code. Engineers write the rules AI follows.
One skill is free now. The other just got more valuable.
```
→ Line 1: 54 chars, Line 2: 56 chars (slightly over but proven)

**When to use:**
- Comparing concepts (old vs new, X vs Y)
- Technical audiences
- When you have a sharp distinction to make

**Why it works:**
This is your highest-performing pattern. The contrast creates cognitive tension that demands resolution.


### Formula 5: Story + Question

**Pattern:** [Context] + [Tension] + [Question]

**Structure:**
```
Line 1: [We/I did X]. [New development].
Line 2: But should we [action]?
```

**Examples:**
```
We've been doing GitOps with ArgoCD for years. AWS just announced they'll manage it.
But should we switch?
```
→ 9,523 impressions
→ Line 1: 84 chars (long but worked), Line 2: 21 chars

**Optimized version:**
```
We've run ArgoCD on EKS for years.
AWS just announced they'll manage it. Should we switch?
```
→ Line 1: 35 chars, Line 2: 52 chars ✓

**When to use:**
- Analyzing new announcements
- Decision-making content
- When you have genuine uncertainty to explore


### Formula 6: Emotional Trigger

**Pattern:** Emotional Trigger + Clear Promise

**Structure:**
```
Line 1: I almost [dramatic action] yesterday.
Line 2: This one [realization/change] changed everything.
```

**Examples:**
```
I almost quit my business yesterday.
This one realization changed everything.
```
→ Line 1: 37 chars, Line 2: 40 chars ✓

```
I promoted my best engineer to lead.
6 months later, I lost him and 3 teammates.
```
→ Line 1: 37 chars, Line 2: 43 chars ✓

**When to use:**
- Personal stories with lessons
- Failure/recovery narratives
- Building emotional connection


## Formatting Rules

### Numbers and Metrics

Use **specific, non-round numbers** for authority:

```
❌ "Many teams fail"
✅ "87% of teams fail"

❌ "Save money on AWS"
✅ "72% cheaper on AWS"

❌ "Several tips"
✅ "7 repurposing tactics"
```

### Structure: Hook-Point-Action

1. **Hook** (2 lines): Grab attention
2. **Point** (body): Deliver one sharp takeaway
3. **Action** (CTA): End with clear next step

### What to Avoid

- ❌ Questions in quotes as openers ("Should we use X?")
- ❌ Filler phrases ("I've been asked this dozens of times")
- ❌ Long sentences that wrap unpredictably
- ❌ Weak transitions ("Now it's more nuanced")
- ❌ More than 2 lines before the fold


## Performance Data (Your Posts)

### Top Performers

| Post | Hook Pattern | Impressions |
|------|--------------|-------------|
| 9 Signs Engineer Not Coder | Punchy Contrast | 12,619 |
| EKS Capabilities | Story + Question | 9,523 |
| 10 Signs Architect Mindset | Punchy Contrast | 2,000+ |

### Common Thread

Your best hooks have:
1. **Under 100 chars total**
2. **Contrast or tension** (X vs Y)
3. **Stakes** (why it matters now)
4. **No filler words**


## Quick Reference

### Before Publishing Checklist

- [ ] Line 1 ≤ 62 characters?
- [ ] Line 2 ≤ 50 characters?
- [ ] Total ≤ 110 characters?
- [ ] 2 separate statements (not 1 wrapping sentence)?
- [ ] Contains contrast or tension?
- [ ] No filler phrases?
- [ ] Specific numbers if applicable?


## Version History

| Date | Change |
|------|--------|
| 2026-01-05 | Draft based on 2026 research + performance analysis |
