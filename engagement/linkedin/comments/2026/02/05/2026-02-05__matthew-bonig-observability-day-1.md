---
type: linkedin-engagement
created: '2026-02-05T14:30:00Z'
last_updated: '2026-02-05T14:30:00Z'

author:
  name: "Matthew Bonig"
  linkedin_url: "https://www.linkedin.com/in/matthewbonig"
  profile: "people/matthew-bonig.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/matthewbonig_ive-said-it-over-and-over-with-clients-activity-7424852314483691520-mqTn"
  activity_id: "7424852314483691520"
  date: '2026-02-04'
  reactions: 25
  comments_count: 0
  reposts: 0
  theme: "Observability as essential modern infrastructure"
  angle: "Build tracing and logging from day 1 - even more important in AI era"
  key_points:
    - Good observability more important when system knowledge doesn't reside in developers' heads
    - Distributed tracing found issues in minutes that logs couldn't reveal
    - Don't release anything without tracing and logging
  hashtags: []

thread_topic: "Observability from day 1"
topic_tags: [observability, tracing, logging, serverless, foundations, lambda, rust]

engagement_status: "posted"
response_received: false
follow_up_needed: true
follow_up_date: 2026-02-07
---

## Original Post

I've said it over and over with clients, and I've said it in blog posts:

🛠️ Good observability is even more important in this modern era of application development where system interaction no longer reside in the heads of the developers.

🎶 It took a while, but I got my Flutter app, API (Lambda+Rust) and bus consumers (Lambda+Rust) all working with distributed tracing+logs and it's amazing. Within minutes I was able to find issues I couldn't find by looking at logs and introduce significant performance improvements in just minutes.

Builds tracing and logging in from day 1. Don't release anything without it. You'll thank me later.

## Notable Comments

```yaml
- id: 1738764400000
  author: "Johannes Koch"
  profile: null
  sentiment: "question"
  content: |
How are you tracing the Flutter app, Matt?
  reactions: 1
  insight: "Asking for implementation details - technical audience"
  replies: []

- id: 1738764500000
  author: "Luciano Mammino"
  profile: null
  sentiment: "positive"
  content: |
100% agreed! PS: How are you finding writing Lambda functions in Rust? ... asking for a friend 🤗
  reactions: 1
  insight: "Agreement + Rust curiosity - Lambda/Rust practitioner audience"
  replies: []
```

## Our Engagement

```yaml
- id: 1738764600000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
This is one of those foundations that pays back immediately. Most teams skip observability to "move fast" then spend days debugging what would take minutes with proper tracing.

The modern era argument is spot on. When AI generates code, the mental model gap is even bigger. You need the system to tell you what's happening.
  strategy: "Add Context - Reinforce day 1 advice with foundation-first perspective, extend AI angle"
  replies: []
```

## Notes

- First engagement with Matthew Bonig
- AWS/CDK expert with serverless focus
- Theme overlap: foundations, serverless, modern engineering
- Technical audience (Lambda, Rust, Flutter stack)
- Good fit for ongoing engagement on infrastructure topics
