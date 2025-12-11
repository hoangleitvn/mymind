---
type: linkedin-engagement
created: '2025-12-09T02:14:00Z'
last_updated: '2025-12-09T02:14:00Z'

author:
  name: "Kristina Chodorow"
  profile: "people/kristina-chodorow.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/kchodorow_most-engineers-have-never-worked-on-a-clean-activity-7403833008790708224-OEXZ"
  date: '2025-12-09'
  reactions: 10
  comments_count: 0
  reposts: 0
  theme: "Clean code practices at scale"
  angle: "Defining concrete standards for what clean code actually means"
  key_points:
    - "Design docs for net-new code"
    - "Style guides with readability checks before unsupervised commits"
    - "TODOs must be assigned with due dates or linked bugs"
    - "Near 100% test coverage with proper mocks/fakes"
    - "Minimum visibility scoping and build system enforcement"
    - "Strict type checking in non-strictly-typed languages"
    - "Explicitness over implicit (qualified names, no star imports)"
    - "Scale context: millions of lines, tens of thousands of engineers"
  hashtags: []

thread_topic: "Clean code definition and practices"
topic_tags: [clean-code, code-quality, engineering-practices, testing, scale]

engagement_status: "draft"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Most engineers have never worked on a clean code base. Here's what clean code actually is: * Net-new code goes through a design doc process. * Everything follows a style guide, no unsupervised commits until you pass readability in the language. * All todos are assigned to someone and have a due date or a linked bug. * You use an ifttt linter for logically linked code. * Coverage: as close to 100% code coverage as possible. this requires mocks/fakes of DB libraries and RPCs, and visual tests for frontend changes. * All functions are scoped to the minimum visibility. * You have a build system that forces visibility restrictions beyond those supported by the language. E.g., does it protect "public" functions needed only for testing from being used anywhere else. * Type checking: for non-strictly-typed languages, you use as strictly typed options as possible (e.g., strict type annotations in Python, TypeScript with no casting to any). * Explicitness: is everything explicit and scoped? e.g., SQL uses fully qualify field names, you never import *, etc. This is a *start* to clean code. if you think "I don't need to do x or y" you probably don't! But if you have a codebase that's millions of lines long and needs to be edited by tens of thousands of people every day, you do. The goal is that everything is maintainable by anyone at any time. that means everything is readable, modular, well-named, and well-tested. But perhaps the true test of clean code is: would Linus comment 'LGTM' with no notes?

## Notable Comments

```yaml
- id: 1733710453000
  author: "Daniel Terhorst-North"
  profile: null
  sentiment: "negative"
  content: |
I was with you until: > Coverage: as close to 100% code coverage as possible. this requires mocks/fakes of DB libraries and RPCs, and visual tests for frontend changes. This leads to performative and meaningless double-entry bookkeeping code, which wastes development time and effort and makes things much harder to change down the line. 'Don't mock what you don't own', _especially_ a database! Also, lean into the idioms of the language. If you don't like dynamic typing (which it appears you don't) then choose statically typed languages. Don't try to impose your type system proclivities onto languages that have other ways to do things. Nor Linus's. He didn't write your internal billing system and he doesn't know your house coding style, and I suspect he doesn't do much Java or C# in any case. My preferences are here: https://cupid.dev. YMMV of course.
  reactions: 4
  insight: "Creator of CUPID principles pushes back on 100% coverage and mocking. Links to his alternative framework."
  replies: []

- id: 1733710454000
  author: "Alexandru Bucur"
  profile: null
  sentiment: "neutral"
  content: |
> Everything follows a style guide, no unsupervised commits until you pass readability in the language. I assume that is enforced automatically in commit hooks / ci-cd not people bike shedding on PR's > Coverage: as close to 100% code coverage as possible. this requires mocks/fakes of DB libraries and RPCs, and visual tests for frontend changes. This unfortunately doesn't say much. Definitely have tests but bugs are exactly the non happy paths :) Otherwise I agree, codebases become legacy codebases because people don't care and/or do not have some decent practices in place. Starting a new greenfield project so there is no legacy code isn't going to solve existing process issues.
  reactions: 1
  insight: "Questions automation vs manual enforcement. Notes that coverage alone doesn't catch edge case bugs."
  replies: []

- id: 1733710455000
  author: "Tyler Jensen"
  profile: null
  sentiment: "positive"
  content: |
This may be the only clean code you'll ever see. 🙂
  reactions: 2
  insight: "Light humor about rarity of clean codebases"
  replies: []

- id: 1733710456000
  author: "Paul Hammond"
  profile: null
  sentiment: "negative"
  content: |
I agree with some of this, but this: > * Net-new code goes through a design doc process. yuck... no need for this at all.
  reactions: 1
  insight: "Strong pushback on design doc requirement"
  replies: []

- id: 1733710457000
  author: "Richard Seeds"
  profile: null
  sentiment: "positive"
  content: |
Love to see a Style Guide with compliance checks called out. Bravo!
  reactions: 1
  insight: "Appreciates the style guide emphasis"
  replies: []
```

## Our Engagement

```yaml
- id: 1733710453992
  type: "comment"
  status: "draft"
  sentiment: "positive"
  content: |
This list is real. And most engineers push back on it because they've never operated at scale.

The nuance: which practices you adopt depends on team size and codebase lifetime. A startup shipping MVP doesn't need design docs for every feature. A 50-person team maintaining code for 5+ years probably does.

What worked for us: start with enforced style guides and code review standards. Those alone eliminated 80% of "what is this code doing" questions during incident response.

The test coverage debate is interesting. 100% coverage with bad mocks is worse than 70% coverage with real integration tests. The goal is confidence to change code, not a coverage number.
  strategy: "Insightful Addition - Adds practical nuance about when to apply these standards based on team scale. Engages with the coverage debate constructively."
  replies:
    - id: 1733800500000
      author: "Kristina Chodorow"
      sentiment: "positive"
      content: |
100%, good nuance to add! Fwiw this is a response to my previous post (https://www.linkedin.com/posts/kchodorow_as-a-cto-i-dont-care-if-your-code-looks-activity-7397716977202434048-zWg_) where 200 people ragged on me for not having clean code. Because our 4-person startup definitely doesn't do a lot of this stuff, but I'm still enforcing the standards that make sense for our size/scale!
      reactions: 0
    - id: 1733800600000
      type: "our_reply"
      status: "draft"
      sentiment: "positive"
      content: |
Just read that thread. The reactions are fascinating. People hear "messy code is fine" and miss the real point: context matters.

A 4-person startup optimizing for speed to market is playing a different game than a 10,000-engineer org maintaining code for decades. Both can be "right" for their situation.

Even at INNOMIZE with small 2-3 person projects, we still enforce naming conventions and formatting. Inconsistency creates noise, especially now that AI writes code 10x faster than before. Without standards, AI-generated code becomes a mess quickly.

The skill is knowing which standards fit your context. Not zero standards, not Google-scale standards. The right ones for your team size and codebase lifetime.
```

## Notes

- Kristina appears to have Google background (design docs, readability, visibility restrictions are very Google)
- Daniel Terhorst-North's pushback on mocking is notable. He created CUPID principles as alternative to SOLID
- Good opportunity to position on the "pragmatic scale" angle
- Post aligns with engineering excellence theme
- Consider following Kristina for future engagement
