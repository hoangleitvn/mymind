---
title: "Substack Notes Archive"
type: notes-archive
platform: substack
profile: "@hoangleitvn"
extracted: 2025-12-19
note_count: 21
---

# Substack Notes Archive

Extracted from https://substack.com/@hoangleitvn on 2025-12-19

---

## Note 1 | 1m ago (Dec 19, 2025)
**Claude can now control Chrome. This is what I've been waiting for.**

I've been building workflows with Claude Code for content writing, engineering, designing. But browser interaction was always the gap.

Now? That gap is gone.

This morning I had Claude fetch performance metrics for all my LinkedIn posts this week. It navigated to each analytics page, grabbed the stats, and saved them to my workspace.

Previously I would have needed to build a custom integration or do it manually.

What this unlocks:
• Schedule posts directly—no custom MCP server needed
• Fetch analytics automatically
• Send Claude to ChatGPT/Gemini for specific tasks, return with results
• Capture web content into your workspace

How it works: Claude Code connects to a Chrome extension via MCP that exposes browser actions as tools.

Caveats: Still in beta. Keep interactions slow (human-like pace). Adds ~14k tokens to context.

To try it: Run `claude --chrome`

What browser workflow would you automate first?

*[Includes image: Claude works in your browser]*

---

## Note 2 | 1h ago (Dec 19, 2025)
**Never trust AI outputs blindly.**

I use AI tools daily. They speed up research, drafts, and code generation. But every output needs review.

Here's my rule: **Ask AI to explain its reasoning.**

When AI gives you an answer, follow up with "Why?" or "Walk me through your logic." Two things happen:
[See more]

*[Includes image: Never Trust AI Blindly - terminal screenshot]*

---

## Note 3 | 2d ago (Dec 17, 2025)
**Software architecture isn't a job title. It's a mindset.**

You make architecture decisions every day:
🧩 Module boundaries
🧠 Where logic lives
[See more]

*[Includes image: Software Architecturally - Not Thinking vs Thinking Architecturally comparison]*

---

## Note 4 | 2d ago (Dec 17, 2025)
**Design Philosophy Evolution: 2025 → 2030 → 2050:**

2025: We design FOR users (human-centered)
2030: We design WITH users (AI-collaborative)
2050: We design AS users (neural-integrated)
[See more]

*[Includes image: What Does a Music App Look Like in 2050?]*

---

## Note 5 | 2d ago (Dec 17, 2025)
**Never chase the tool. Tools change faster than you can learn them.**

Build your workflow. Build your system. Then tools don't matter.

---

## Note 6 | 3d ago (Dec 16, 2025)
**Applied AWS re:Invent learnings to a client audit. Results:**

Immediate action (~$200/mo saved):
- db.t3 → db.t4g (Graviton wins on price-performance)
- MySQL 5.7 → 8.0 (5.7 deprecated = $172/mo extended support)
[See more]

*[Includes image: AWS Database Cost Optimization article preview]*

---

## Note 7 | 4d ago (Dec 15, 2025)
**Just wrapped my AWS re:Invent 2025 deep dive series.**

Three articles. Three decisions that'll affect your 2026 architecture:
→ Lambda: Durable Functions vs Step Functions (innomize.substack.com/p/...)
→ EKS: Managed ArgoCD vs self-hosted (innomize.substack.com/p/...)
→ RDS: Database Savings Plans and the t4g discount gap (innomize.substack.com/p/...)

The short version: AWS is making "managed" cheaper and serverless more compelling. The catch: not everything qualifies.

Now, focusing on Builds that Last. Subscribe for early access to what's next.

---

## Note 8 | 5d ago (Dec 14, 2025)
**What's the one thing you see in real life that instantly tells you a team has great teamwork?**

---

## Note 9 | 5d ago (Dec 14, 2025)
**The worst part of publishing isn't writing.**

It's the 30 minutes after.

Refreshing. Checking. Waiting for validation.

How do you break the loop?

---

## Note 10 | 5d ago (Dec 14, 2025)
**Another reason I'm on Substack now. I'd been writing on Medium for a while, but Medium seems to be blocked in Vietnam.**

*[Includes image: Medium error signing in screenshot]*

---

## Note 11 | 5d ago (Dec 14, 2025)
**EKS updates worth noting. EKS Capabilities (managed Argo CD, ACK, KRO), newer Auto Mode improvements, and clearer Kubernetes lifecycle rules.**

*[Includes image: AWS EKS Capabilities article preview]*

---

## Note 12 | 6d ago (Dec 13, 2025)
**Most engineering advice sounds good in theory.**

It falls apart when you're under pressure to deliver.

What's one piece of advice that actually held up when things went wrong?

---

## Note 13 | 6d ago (Dec 13, 2025)
**What are you going to do this weekend?**

I'm going to clean my Mac.

I used to use a UI app, but it doesn't work now.

I read on Reddit and found this:
[See more]

*[Includes images: Terminal commands for Mac cleanup]*

---

## Note 14 | 6d ago (Dec 13, 2025)
**Who are you writing for?**

I tried writing a long answer. Then cut it to 3 words:

**Builders who ship.**

What's yours in 5 words or less?

---

## Note 15 | 6d ago (Dec 13, 2025)
**We can stay calm. We'll still be able to use AI at a low cost, just don't FOMO and throw money at whatever they're selling.**

Spend a small amount to explore, experiment, learn, and accelerate where it truly helps. But don't hand yourself over to AI so completely that when the game changes, you're left with no money and no capability.

Everything will come in time.

---

## Note 16 | 7d ago (Dec 12, 2025)
**Good design avoids ambiguity.**

Clear interfaces beat clever workarounds.

When the API is clear, the code stays simple.

*[Includes image: Code on monitor]*

---

## Note 17 | 7d ago (Dec 12, 2025)
**Why Do I Write Now?**

**Sharpening thinking.**

I don't know if my thinking is right until I say it out loud.

Ideas in my head feel clear. Then I try to write them down and realize: gaps, contradictions, things I assumed but never tested.

Writing forces clarity. Sharing invites challenge.

Everyone has the same loop:
[See more]

---

## Note 18 | 7d ago (Dec 12, 2025)
**I've been separating my AI sessions into two modes:**

**Architecture Mode** - Design decisions, system structure, trade-offs
**Coding Mode** - Implementation, code quality, tests

Different focus, different context, different outputs.

| Aspect | Architecture Mode | Coding Mode |
|--------|------------------|-------------|
| Focus | Design decisions, system structure | Implementation, code quality |
| Input | Requirements, constraints | Architecture docs, specs |
| Output | Design docs, ADRs, diagrams | Code, tests, PRs |
| Context | Patterns, principles, trade-offs | Standards, best practices, rules |
| Dependency | Can stand alone | Often needs architecture input |

---

## Note 19 | Dec 10, 2025
**Saw on Reddit that Claude deleted someone's entire home directory.**

So I checked my own setup and... yep, I never configured any safety guardrails. I've been running YOLO mode and have deleted my `~/.claude` folder a few times, so my settings kept resetting.

Turns out you can block dangerous commands in Claude Code by updating your `~/.claude/...`
[See more]

*[Includes image: Terminal showing dangerous commands to block]*

---

## Note 20 | Dec 8, 2025
**The Renaissance wasn't about new tools. It was about a new kind of person.**

Werner Vogels just gave developers the same challenge.

At his *final AWS re:Invent keynote*, he introduced **The Renaissance Developer**: six qualities for thriving in the AI age.

1. Stay Curious
[See more]

*[Includes image: Werner Vogels presenting "The Renaissance Developer" at AWS re:Invent]*

---

## Note 21 | Dec 7, 2025
*[Shared article from INNOMIZE]*

**AWS Lambda's Biggest Update in Years: What It Means for Your Architecture**

*[Includes image: AWS Lambda's Biggest Update - Durable Functions vs Managed Instances comparison]*

---

## Older Note | Jun 19, 2024
*[AWS architecture diagram - Time Tracking App architecture]*
