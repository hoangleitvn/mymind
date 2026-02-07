---
type: linkedin-engagement
created: '2026-01-21T03:15:00Z'
last_updated: '2026-01-21T03:15:00Z'

author:
  name: "Chris Bridges"
  linkedin_url: "https://uk.linkedin.com/in/chris-bridges-56677145"
  profile: "people/chris-bridges.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/chris-bridges-56677145_can-vibecoding-produce-production-grade-applications-activity-7418929507044065280-JjS-"
  activity_id: "7418929507044065280"
  date: '2026-01-20'
  reactions: 27
  comments_count: 7
  reposts: 0
  theme: "Vibe coding producing production-grade applications"
  angle: "Data-driven assessment with specific numbers on what AI-generated code requires"
  key_points:
    - "First time building idea to production with vibe coding"
    - "Specific numbers: 4 security issues, 7 quality issues, 53 refactors, 100s CI catches"
    - "10 hours vs 1 week+ (significant speedup)"
    - "Wouldn't ship straight to production or want to fix a few-shotted app"
  hashtags: []

thread_topic: "Vibe coding production readiness assessment"
topic_tags: [vibe-coding, ai-coding, code-quality, production-readiness, verification-debt]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Can vibecoding produce production-grade applications? This weekend was the first time I've had a chance to vibecode something from idea through to production-ready – a side project with Matt Pollins (watch this space!). My overall impression was definitely "wow". However, I wouldn't be "shipping straight to production" anytime soon:

- Security issues spotted and fixed by me: 4
- Poor code quality that went beyond stylistic (e.g. would break at scale): 7
- Things I either refactored or got Claude to refactor with more specific guidance (e.g. brittle implementations I knew from experience would cause issues down the line): 53
- Issues caught by CI tools (automated linting, static analysis, feature tests): 100s (I stopped counting pretty early!).
- Stupid one-line bugs Claude couldn't fix, that I still had to spend hours fixing (if you know, you know): 1

This was me being relatively careful building out a big test suite as I went, and prompting and QAing feature by feature. My results likely would have been much worse if I'd try to "few shot it".

Overall, I think that is pretty good… I produced something that would have taken a week plus in <10 hours. But… I wouldn't want to push straight to production, and I definitely wouldn't want to be an engineer tasked with the last mile on a "few shotted" app. It would have taken more time than re-building it the above way from scratch.

I'll be making the source code available over the next few weeks, once I've been back over it with some polish.

(Footnote: I've been using Claude Code since early 2025, but predominantly on large existing code bases, working on trivial jobs on discrete parts – essentially using it as a junior developer. So I've got pretty handy with it!).

## Notable Comments

```yaml
- id: 1737429003000
  author: "Christian Brown"
  profile: null
  sentiment: "positive"
  content: |
Very similar experience, but I do think people are not giving enough weight to your statement - this is significant. No you cannot go straight to production in one-shot (does anyone really want this?) but yes you can do in hours what took days or more before and get to production-grade. This was not remotely possible before.
  reactions: 5
  insight: "Strong endorsement of the significance - the speedup is real even with caveats"
  replies: []

- id: 1737429003001
  author: "Pedro Henrique"
  profile: null
  sentiment: "positive"
  content: |
Spot on. AI is a great junior dev, but it still lacks the architectural discipline needed for scale. Refactoring those 53 points now is a lot cheaper than fixing a production crash later!
  reactions: 1
  insight: "Junior dev framing aligns with our thinking"
  replies: []

- id: 1737429003002
  author: "David Mouat Thomson"
  profile: null
  sentiment: "positive"
  content: |
Similar experience - agree with the footnote, the more direction and explicitness you can squeeze into the context the better the results with the caveat of keeping the context small enough to allow for implementation.
  reactions: 1
  insight: "Context management insight - direction + explicitness + manageable scope"
  replies: []
```

## Our Engagement

```yaml
- id: 1737429300000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Your breakdown is verification debt in action. 4 security issues you caught manually. 53 refactors from experience. 100s from CI. Each layer caught what the previous couldn't. Most "built in a weekend" posts skip this reality. The speedup is real. So is the verification tax.
  strategy: "Amplify - signal boost his data-driven transparency while connecting to verification debt framework"
  replies: []
```

## Notes

- Strong alignment with our vibe coding and verification debt content
- His specific numbers (4/7/53/100s) perfectly illustrate the verification pyramid
- Connects to our 2026-01-20 verification debt post
- UK-based engineer, 2.6K followers, using Claude Code since early 2025
- Potential target for follow-up engagement when he releases the source code
