---
title: "The Builds That Last Manifesto"
published: false
description: "Everyone ships fast. Few build to last. A manifesto for engineering in the AI era."
tags: programming, career, productivity, architecture
cover_image:
canonical_url: https://buildsthatlast.substack.com/p/why-foundation-comes-before-speed
---

*Originally published on [Builds That Last](https://buildsthatlast.substack.com).*

I've been building and leading engineering teams for 15 years. Over 50 projects. Startups, enterprises, legacy systems, greenfield builds.

Same pattern every time.

Teams ship fast. Then they slow down. Not because engineers got lazy. Because the foundation was never there.

At my company, we maintain systems 20+ years old. No documentation. No standards. When we ask stakeholders about business logic, they say "read the code".

My teams sometimes decompile binary files just to understand what's inside. Debug at runtime because that's the only way to see how things work. Previous teams deployed code to AWS without committing to source control. Gone.

This is what engineering looks like for most of us. Not the AI demos. Not the apps shipped in a weekend.

## The gap between posts and reality

You'll see posts about vibe coding, AI-augmented development, shipping apps in hours.

I'm not saying AI isn't real. I use these tools every day. The productivity gains are real.

But there's a gap between what people post and what I see in actual projects.

The posts show demos that work. Reality is production systems that break.

The posts celebrate shipping fast. Reality is teams spending months paying back technical debt.

> The demo works. The demo always works. It's what comes after that separates software that lasts from software that collapses.

## The iceberg problem

What you see is 20% above water. The shiny demos. The fast shipping. Vibe coding, agentic AI, apps built in hours.

What you don't see is the 80% below:

→ Maintenance
→ Technical debt
→ Engineers connecting systems never meant to work together
→ Data inconsistencies accumulated over years
→ Teams spending days understanding what the previous developer was thinking

That 80% is where my teams spend most of our time. And it's where the real lessons are.

## The speed trap

I see this pattern repeat.

A team starts fast. AI tools, modern stack, motivated engineers. First version ships in weeks. Everyone celebrates.

Then users show up. Edge cases appear. The payment flow breaks. Data sync fails silently. Features that worked in demo crash under real load.

Suddenly the team that was "moving fast" spends months fixing things. Not building new features. Just paying back debt from shipping without foundation.

Leadership gets frustrated. "Why is the team slow now?"

The team isn't slow. They're doing work that should have been done upfront.

> Speed without foundation creates the illusion of progress. Then reality catches up.

## Maintenance costs more than building

Here's something most people don't think about until it's too late.

Maintaining software costs more than building it from scratch.

Think about repairing a house. You don't just fix the broken part. You investigate the structure. Remove old materials. Work around things that can't be changed. Then build the new thing.

Software is the same.

When you inherit a system without documentation, without standards, every change becomes an archaeology project. You spend more time understanding than building.

> The time you "save" by skipping foundation gets paid back with interest during maintenance.

## The AI paradox

AI makes code generation 10x faster. That's real.

AI also increases cognitive load by 30-40%.

When AI generates code, someone still needs to verify it's secure. Check for edge cases. Understand the logic before shipping. Maintain it when something breaks.

AI doesn't eliminate this work. It changes who's responsible for catching problems.

Anthropic's CEO said 90% of their internal code is now AI-generated. The follow-up: "We're not replacing engineers".

The 10% humans handle? That's the leverage zone. Architecture decisions. Debugging complex problems. Understanding *why* something should work, not just *what* it should do.

> AI is a turbo, not a robot.

Good foundation? AI makes you faster at building good software.

Bad foundation? AI makes you faster at building bad software.

## What this means for engineers

**The fundamentals matter more than ever.**

Everyone has access to AI now. The differentiator isn't who prompts better. It's who understands what they're building deeply enough to know when AI helps and when it hurts.

**Own your code.**

"The AI wrote it" isn't an excuse when something breaks at 2am. You shipped it. You're responsible. Read the code. Understand the logic. Ship with confidence.

**The 80% below water is where you build real skills.**

Legacy systems, maintenance, debugging. Not glamorous. But it's where you learn how software actually behaves. Don't avoid it. Embrace it.

## What this means for leaders

**You're only seeing 20% of what your team deals with.**

The demos work. Sprint reports look fine. But your team might be drowning in the 80% you don't see. The legacy code. Missing documentation. Tribal knowledge that walks out when someone leaves.

**Buying tools is easy. Training is hard.**

Teams that succeed with AI invested in foundation first. Standards, process, documentation. Then added AI.

Teams that struggle added tools to existing chaos. Now they have faster chaos.

**Remove friction before adding speed.**

When you want to go faster, the instinct is to add more. More tools, more people, more pressure.

Usually, the answer is to remove things. Remove blockers. Remove unnecessary process. Remove friction slowing your team down.

## The bottom line

> Real speed comes from clarity, not from typing faster.

In the AI era, shipping is easy. Building to last is what matters.

Those legacy systems with no documentation? They taught me more than any greenfield project. Not because they were well-built. Because they showed what happens when foundation is missing.

Every time I build something new, I think about the engineer maintaining it in 10 years. Will they understand our decisions? Can they change things confidently? Or will they be stuck doing archaeology?

That's what foundation means. Building for the people who come after.

---

*What's your experience with the 80% below water?*

*I write about foundation-first engineering at [Builds That Last](https://buildsthatlast.substack.com).*
