---
type: linkedin-engagement
created: '2025-12-31'
last_updated: '2025-12-31'

author:
  name: "Lee Robinson"
  profile: "people/lee-robinson.md"
  followers: 20611

post:
  source: "external"
  url: "https://www.linkedin.com/posts/leeerob_building-low-level-software-with-only-coding-activity-7411780812624289792-Cmfo"
  date: '2025-12-31'
  reactions: 191
  comments_count: 7

  thesis: "AI can write complex low-level software, contrary to intuition"
  insight: "Built 40k lines of Rust image compression library with ~1000 tests using Cursor. Zero dependencies. $200/mo plan."
  their_angle: "Challenging 'AI can't do complex low-level work' assumption with concrete evidence"
  our_opening: "WHY this worked - architect mindset, task decomposition, knowing what good looks like"

  theme: "ai-coding"
  key_points:
    - "40k lines of Rust code with ~1000 tests"
    - "Zero dependencies, no slop"
    - "Agents did scoped tasks: benchmarks, WASM optimization, coverage, test writing, RFC research, CI"
    - "All within $200/mo Cursor plan"

thread_topic: "AI for complex low-level software development"
topic_tags: [ai-coding, rust, architect-mindset, task-decomposition, practical-engineering]

engagement_status: "posted"
response_received: false
follow_up_needed: false
follow_up_date: null
---

## Original Post

Can AI be used to write code for complex low-level software? My intuition has been "no" so I tried an experiment. With the latest models + Cursor, I was able to build something truly ambitious. A project built with Rust (which is much lower-level than something like JavaScript) to do image compression. Many of the algorithms and tricks used to compress images have been improved over decades! I thought surely the models would struggle at this. Yet, surprisingly, they did a very good job. In fact, I was able to build this entire project from scratch with zero dependencies. There's almost 40,000 lines of code, with half being almost 1000 tests! No slop or vibes here. Here's a few interesting things coding agents did for me: 1. Created benchmarks against similar tools, found performance gaps, and then fixed them 2. Optimized the WASM binary, looking up the right config/flags to use, shrinking the size 3. Measured code coverage, found gaps, and then wrote tests based on the missing coverage 4. Found public domain images to scaffold a comprehensive test suite 5. Researched compression specs and RFCs to validate correctness of all tests 6. Added CI for linting, testing, and generating WASM binaries All of this was within the $200/mo Cursor plan. What a time to be alive. I wrote up a very detailed post about how I built the library and how I'm thinking about the future of software. https://leerob.com/pixo

## Notable Comments

```yaml
- id: 1735631700000
  author: "Tyler Hansen"
  sentiment: "positive"
  content: |
    Great article. Seems like a CS foundation can be handy to know what to ask for.
  reactions: 2
  insight: "Close to our angle but understates it - it's architect thinking, not just CS knowledge"

- id: 1735631701000
  author: "Karan Gupta"
  sentiment: "question"
  content: |
    Thanks for sharing Lee Robinson Quick question - I see You spent ~$2.8k in tokens to build something that would normally take weeks or months. How should teams think about the pricing here—what kinds of projects justify this level of agent usage?
  reactions: 1
  insight: "Cost-benefit question - $2.8k vs weeks/months of dev time"

- id: 1735631702000
  author: "Daniel Florez Jaramillo"
  sentiment: "question"
  content: |
    Thanks for Sharing Lee Robinson, how did you know the plans you created were solid? Can you share your insights on creating effective plans?
  reactions: 1
  insight: "Asking about planning process - key to success"
```

## Our Engagement

```yaml
- id: 1735631725000
  type: "comment"
  status: "posted"
  timestamp: '2025-12-31'
  strategy: "Add depth - WHY this worked (architect mindset, not just tool capability)"
  identity_applied:
    tone: "direct, practical"
    theme_overlap: "ai-coding, architect-mindset"
  content: |
    The list of what the agents did is the real insight here.

    Each task is well-scoped: benchmark → find gaps → fix. Measure coverage → find gaps → write tests. Research specs → validate correctness.

    That's not "vibe coding." That's an architect giving clear, decomposed instructions with defined outcomes.

    The tool executed. The human designed what "done" looks like for each step.

    This is why the same $200/mo plan produces 40k lines of solid code for some and unmaintainable slop for others. The difference isn't the model. It's whether you can break down the work and know what good looks like.
```

## Notes

- Lee Robinson: VP of Product at Vercel, 20.6k followers
- High-visibility post (191 reactions in 13h)
- Strong alignment with our "architect mindset" and "workflow first" themes
- Tyler Hansen's comment opens door but understates the insight
- Opportunity to reinforce "9 Signs" post themes (design before prompt, know what done looks like)
