---
title: "12 AI Hallucination Patterns Every Engineer Should Know"
type: linkedin-post
status: published
created: 2026-01-08
published_date: "2026-01-12T08:32:19.359Z"
post_url: "https://www.linkedin.com/feed/update/urn:li:activity:7416396599720947712/"
theme: practical-engineering
persona: tech-leader
audiences: [engineering-managers, tech-leads, developers]
key_message: "AI hallucinations follow predictable patterns. Understanding them helps you work with AI more effectively."
hook_type: curiosity-gap
target_hashtags: [AIEngineering, SoftwareEngineering, TechLeadership]
optimal_post_time: Monday, 3-4pm Vietnam
word_count: 450
data_sources:
  tier: 2
  sources:
    - name: "OpenAI - Why Language Models Hallucinate"
      year: 2025
      url: "https://openai.com/index/why-language-models-hallucinate/"
    - name: "Lakera - LLM Hallucinations Guide"
      year: 2025
      url: "https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models"
performance_metrics:
  impressions: 547
  members_reached: 243
  profile_views: 4
  followers: 0
  reactions: 10
  comments: 6
  reposts: 2
  saves: 3
  sends_on_linkedin: 0
  collected_at: 2026-01-19
---

Here's how I fix AI hallucinations.

12 patterns. 10 rules. One cheat sheet.

𝗞𝗡𝗢𝗪𝗟𝗘𝗗𝗚𝗘 𝗚𝗔𝗣𝗦 (AI doesn't know)

1. Confident About Fake Things
AI suggests pandas.DataFrame.to_smartsheet(). Never existed.
→ Rule: "Never use unfamiliar methods without showing docs first."

2. Outdated Knowledge
AI recommends create-react-app. React deprecated it.
→ Rule: "Check official docs for any recommendation before applying."

3. Guessing Over Uncertainty
Ask about a niche library's internals. AI fabricates details.
→ Rule: "Say 'I'm not sure' when uncertain. Never guess."

4. Recognition Without Knowledge
Ask about "John Smith, API architect at TechCorp." AI invents a biography.
→ Rule: "Never fabricate details about people or companies."

5. Fabricated Sources
AI cites "Smith et al. (2023)" with a DOI. Paper doesn't exist.
→ Rule: "Only cite sources you can verify exist."

𝗖𝗢𝗡𝗧𝗘𝗫𝗧 𝗚𝗔𝗣𝗦 (AI doesn't see your setup)

6. Premature Assumptions
You're designing a dashboard. AI explains PNG export. You haven't picked the layout.
→ Rule: "Complete current step before moving to next."

7. Default Over Custom
AI uses git commit. Your team uses /commit with linting and tests.
→ Workspace: Document your custom tools in project instructions.

8. Single-Word Confusion
You say "clean up the code." AI refactors everything. You meant fix indentation.
→ Workspace: Define what "clean up" means in your context.

9. Context Window Blindness
You said "always use TypeScript" at the start. 50 messages later, plain JavaScript.
→ Workspace: Put constraints in project files, not just conversation.

𝗕𝗘𝗛𝗔𝗩𝗜𝗢𝗥 𝗤𝗨𝗜𝗥𝗞𝗦 (AI responds predictably wrong)

10. Pattern Matching Failure
AI knows len() perfectly. Ask about your internal utils.get_length() and it guesses.
→ Workspace: Document custom functions where AI can read them.

11. Sycophancy Bias
"We can ship this without tests, right?" AI agrees. You regret it Monday.
→ Rule: "Challenge incorrect assumptions. Never agree to be polite."

12. Same Tone, Any Certainty
AI says "function returns string" with the same confidence as "capital of France is Paris."
→ Rule: "Distinguish facts from inferences. Flag uncertainty."

I still fall for #11 weekly. "This looks right, doesn't it?" And AI just agrees.

If you make the same mistake twice, it's a decision. Turn it into a rule.

Bookmark this. You'll hit at least 3 this week.

I've codified these into 10 rules in my CLAUDE.md. Comment "CLAUDE" if you want it.

What patterns have you noticed? Drop yours below - I'll add the best ones to the list.

#AIEngineering #SoftwareEngineering #TechLeadership
