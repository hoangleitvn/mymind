---
type: linkedin-engagement
created: '2026-01-20T16:10:00Z'
last_updated: '2026-01-23T00:00:00Z'

author:
  name: "Paolo Perrone"
  linkedin_url: "https://www.linkedin.com/in/paoloperrone"
  profile: "people/paolo-perrone.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/paoloperrone_karpathy-just-shared-the-best-framework-for-activity-7419399439041175553-xg_U"
  activity_id: "7419399439041175553"
  date: '2026-01-20'
  reactions: 22
  comments_count: 0
  reposts: 0
  theme: "Karpathy's framework for predicting AI job displacement"
  angle: "Verifiability determines which jobs AI will take"
  key_points:
    - "Software 2.0: specify objectives, AI searches for programs via gradient descent"
    - "If you can verify the output, AI can practice it"
    - "3 conditions for verifiability: Resettable, Efficient, Rewardable"
    - "Code, math, games = verifiable = progressing fast"
    - "Creative, strategy, real-world context = not verifiable = lagging"
    - "Lagging isn't safe - just means no one figured out how to score it yet"
    - "Stop asking if safe. Start asking if verifiable."
  hashtags: []

thread_topic: "AI job displacement framework - verifiability as predictor"
topic_tags: [ai-jobs, verifiability, karpathy, ai-development, future-of-work]

engagement_status: "conversation"
response_received: true
follow_up_needed: true
follow_up_date: '2026-01-22'
---

## Original Post

Karpathy just shared the best framework for predicting which jobs AI will take.

The insight:

Software 1.0 (1980s):
→ We wrote programs by hand
→ If you could specify the rules, you could automate it
→ Typing, bookkeeping, human calculators — gone

Software 2.0 (now):
→ We specify objectives, not rules
→ AI searches for programs that work via gradient descent
→ If you can verify the output, AI can practice it

The 3 conditions for verifiability:
→ Resettable — can start new attempts
→ Efficient — can make many attempts quickly
→ Rewardable — can score attempts automatically

This explains everything:

Code? Verifiable. Progressing fast.
Math? Verifiable. Progressing fast.
Games, puzzles, anything with a right answer? Verifiable. Falling.

Creative work? Strategy? Real-world context? Not verifiable. Lagging.

But "lagging" isn't "safe." It just means no one's figured out how to score it yet.

Stop asking if your job is "safe."
Start asking if it's verifiable.

## Notable Comments

```yaml
- id: null
  author: "Michele Loi"
  profile: null
  sentiment: "thoughtful"
  content: |
    The framework is incomplete as guidance. For suppose that "verifiable work" contributes to productivity 100x compared to "non verifiable work". It's still possible that more jobs remain in the areas of "verifiable work" despite these jobs being in the era in which the greatest productivity gains can be produced by incorporating AI in workflows.
  reactions: 1
  insight: "Challenges framework completeness - productivity gains vs job displacement"
  replies: []
```

## Our Engagement

```yaml
- id: 1737389400000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
    Even within code, verifiability has layers.

    Syntax? 100% verifiable.
    Functionality? Tests handle it.
    Quality? Partially.
    Architecture decisions? Hard to score.
    Business value? Very hard.

    AI handles the easily-verifiable layers faster. Human value moves to the parts where verification is expensive or ambiguous.
  strategy: "Add Context - extend framework with practitioner nuance from AI coding experience"
  replies:
    - author: "Paolo Perrone"
      content: "Love this breakdown. Do you think we'll eventually find proxies to score those, or is that permanently human territory?"
      sentiment: "engaged"
    - author: "Hoang Le (our reply)"
      content: |
        yeah. I think we might have some proxies. In some cases like sandbox, we gave AI only business constraints, then AI will reasoning about the rest from architecture to execution and verification. I just have some experiments with spec-driven but still early.

        But if we can automate at least syntax and functionality that aligns with our architecture and business constraints, it is a big win.
      sentiment: "conversational"
    - author: "Paolo Perrone"
      content: "Spec-driven is the right direction. If AI can reason from business constraints down to execution, that's way more valuable than just code completion. How are you defining those constraints - natural language or something more structured?"
      sentiment: "curious"
    - author: "Hoang Le (our reply)"
      content: |
        Both, actually. Natural language for the WHY (business intent, constraints, what success looks like). More structured for boundaries (tech stack, patterns to follow, what NOT to do).

        Still experimenting with how much structure is enough. Too loose and AI wanders. Too rigid and you're back to writing code yourself.
      sentiment: "conversational"
    - author: "Unknown (needs identification)"
      content: |
        Hoang Le you are 100% correct and that stung a bit. I think you represented that perfectly. (I dig your binary style).
        Seems to me that a lot of this get solved just by the bio tool maintaining flow with the algorithm. Without getting too controversial, I think, each cognition has its own strengths and weaknesses, especially when we're talking about freaks and geeks.
        I say, partner up like a coworker and make rules as you would a meat sack. Cause what you set up top sounds to me like "Sky's the limit"
        ……but clearly there's a level of awareness that shooting past the cloud (haha) is attainable with what we have this moment….
        I am told that I am very early and that is why I am not able to participate. That's my fault, I'm a naïve loudmouth.
        I don't think it's ambiguous and it doesn't need to be expensive. Problem is that also means unpopular right now.
      sentiment: "supportive-philosophical"
    - author: "Hoang Le (our reply)"
      content: |
        Appreciate that. "Early" gets called "naïve" until it becomes obvious. The coworker model works because it sets boundaries. Rules for what to trust, what to verify, what to override. Clarity helps.
      sentiment: "conversational"
      status: "draft"
```

## Notes

- Paolo is a high-priority influencer (116K followers) I've engaged with before on RAG topics
- Framework aligns with my "workflow first" thinking - AI handles verifiable parts, humans handle judgment
- Connects to foundation-first philosophy: architecture and business value decisions remain human
- Paolo replied directly asking about proxies for scoring - shows genuine interest in the nuance
- Mentioned spec-driven experiments as early exploration of verifiability proxies
- Second reply from Paolo asking about constraint definition (natural language vs structured)
- Discussed hybrid approach: natural language for WHY, structured for boundaries
- 4-reply thread now - strong relationship building, genuine technical exchange
- Potential content angle: "Natural language WHY + structured boundaries" for spec-driven AI
- 2026-01-23: Another commenter (unknown name) replied appreciating the "binary style" breakdown
- They advocate "coworker" framing for AI, acknowledge being "early" in thinking
- Our reply validates the "early" perspective and reinforces boundaries/rules approach
- TODO: Identify commenter name for proper person file tracking
