---
type: linkedin-engagement
created: '2026-01-20'
last_updated: '2026-01-20'

author:
  name: "Robert Roskam"
  linkedin_url: "https://www.linkedin.com/in/robertroskam"
  profile: "people/robert-roskam.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/robertroskam_over-the-weekend-claude-code-repeatedly-activity-7419140383407931392-XCJy"
  activity_id: "7419140383407931392"
  date: '2026-01-20'
  reactions: 15
  comments_count: 0
  reposts: 0
  theme: "LLM limitations and AI tool behavior"
  angle: "LLMs can't remember/think/learn - they simulate these, humans still needed"
  key_points:
    - Claude Code repeatedly drifted back to creating multiple .env files despite ADRs, plans, beads
    - Used claude-mem, beads, skills for alignment - didn't prevent drift
    - Eventually had to use simple workaround (copy file from root)
    - LLMs are probabilistic tools that need human wielding
  hashtags: []

thread_topic: "LLM memory limitations and context drift"
topic_tags: [ai-development, llm-limitations, claude-code, context-drift]

engagement_status: "posted"
response_received: false
follow_up_needed: true
follow_up_date: '2026-01-23'
---

## Original Post

Over the weekend, Claude Code repeatedly choked on me. How it choked is the interesting part. I have a little side project I'm working on, and it's in a monorepo. I wanted to be able to put a .env file at root and then have each service reference it. Claude Code repeatedly choked on this constraint. Claude kept trying to make multiple env files for each service. No matter what I did. I'm using claude-mem, beads, and several other skills to attempt to improve alignment and long-term memory. I had it make a plan. I had it store that plan. I had it make tasks in beads about that plan. I even eventually started ADRs to describe the decisions I made. Didn't matter what I did. It kept trying to make an .env file for each service. Finally, I had to reach down and just tell it: copy the file from root to each service. Is it elegant? No. Did it stop the errors from creeping in from having the other random things it tried? Yes. It had proposed to me all other kinds of solutions: lazy loading, multiple .env file references, etc. I accepted them and then eventually it would drift back to multiple .env files. My solution worked. To be clear, I didn't spend 48 hours in a row trying to fix this, nor even 1 hour. It's something that kept coming up in its behavior that it would drift to as a default over time. It viscerally highlighted things I already knew: 1. LLMs really can't remember 2. LLMs do not "think" 3. LLMs do not "know" 4. LLMs cannot learn because of 2 & 3 LLMs at best simulate the appearance of these. So these tasks still remain on you. In the moment, I found this annoying. LLMs are just probabilistic machines, tools. And tools must be wielded by someone. So that means... We still have jobs, yo!

## Notable Comments

```yaml
# No comments at time of extraction
```

## Our Engagement

```yaml
- id: 1737361200000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Same pattern here. Few weeks ago, I fixed a gray textbox styling with a prompt. Two sections later, gray textbox again.

I thought adding constraints upfront with proper context and design would fix it. Still see Claude ignore instructions and repeat the same mistake.

Training data wins over your constraint every time.
  strategy: "Add Context - Connect to our published 'Context Window Blindness' pattern (#9 in hallucinations post), validate his experience with specific reasoning"
  replies: []
```

## Notes

- Third engagement with Robert Roskam
- Post aligns strongly with our AI hallucination patterns content
- His experience validates Pattern #9 (Context Window Blindness) from our post
- Good opportunity to reference our content indirectly without being promotional
- Technical creator, infrastructure focus - builds credibility
