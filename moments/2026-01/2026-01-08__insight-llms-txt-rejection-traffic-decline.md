---
id: 20260108-093000
type: insight
status: raw
created: 2026-01-08
themes: [ai-development, documentation, developer-tools, ai-impact]
project: null
captured_from: null
sources:
  - url: https://github.com/tailwindlabs/tailwindcss.com/pull/2388
    type: github-pr
    description: Adam Wathan rejects llms.txt PR
  - url: https://devclass.com/2026/01/05/dramatic-drop-in-stack-overflow-questions-as-devs-look-elsewhere-for-help/
    type: article
    description: DevClass article on StackOverflow decline
  - url: https://data.stackexchange.com/stackoverflow/query/edit/1928515#graph
    type: data
    description: StackOverflow questions over time graph
---

## Raw Capture

Adam Wathan rejected a PR to add llms.txt file that many platforms adopted for LLM/AI for AI-assisted development. Their traffic to check their docs down 40% from 2023. It is the same as Stackoverflow - the number of questions lower than 10 years above since 2014.

## Data Points

### Tailwind CSS
- Adam Wathan rejected PR to add llms.txt to tailwindcss.com
- Revenue down close to 80%
- 75% of engineers laid off

### StackOverflow Collapse
- **Dec 2025:** 3,862 questions posted (78% drop from previous year)
- **Peak (2014):** ~200,000 questions/month
- **Trend:** From 200k/month to under 4k in a decade
- Graph shows steep cliff starting 2022 (ChatGPT launch), accelerating through 2024-2025

### Two Causes (per DevClass)
1. **AI displacement:** Developers use AI assistants in IDEs instead of posting
2. **Hostile moderation:** "AI certainly accelerated the decline, but this is the result of consistently punishing users for trying to participate"

### Prosus Acquisition Disaster
- Prosus bought StackOverflow for **$1.8 billion** in June 2021
- ChatGPT launched 17 months later (November 2022)
- **28% layoffs** in October 2023
- Revenue "grew" 12% ($95M) but from Teams/Enterprise, not core Q&A
- The $1.8B asset is now approaching zero

### Industry Impact
- Redmonk analyst: StackOverflow data now "increasingly stale and of questionable value" for programming language rankings
- Platform profits from AI Assist while banning AI-generated answers

## Why This Matters

- Documentation sites becoming training data, not destinations
- Developers get answers from AI that was trained on these sources
- Traffic decline is permanent structural shift, not temporary dip
- Resistance to llms.txt doesn't reverse the change AI already caused
- Question: What will future AI models train on if these sources dry up?

## Content Angles

- **Contrarian take:** "Your docs traffic is down because AI reads them for users. Rejecting llms.txt doesn't reverse that."
- **Data story:** StackOverflow went from 200k questions/month to 4k. The developer knowledge graph is collapsing.
- **Acquisition disaster:** Prosus bought SO for $1.8B, 17 months before ChatGPT. The asset is now approaching zero.
- **Irony angle:** Prosus profits from AI Assist while SO bans AI answers. The platform feeds the machine that's killing it.
- **Build vs Buy:** You can buy AI tools. You can't buy understanding. When knowledge sources dry up, only devs who built their own matter.
- **Question:** If AI training sources dry up, what trains the next generation of models?
- **Prediction:** Documentation-as-destination is dead. Documentation-as-training-data is the future.
