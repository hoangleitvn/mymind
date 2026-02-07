---
title: "Clarity Before Code"
subtitle: "Most building failures don't start with bad code. They start with skipped questions."
type: substack-article
status: draft
created: 2026-02-07
publication: Builds That Last
section: building
issue: 5
phase: equip
topic: pre-build-clarity-framework
persona: founder
audiences: [engineers, tech-leads, founders, engineers-becoming-leaders]
key_message: "The teams that build to last don't start with better tools. They start with better questions."
word_count: 2100
tone: conversational-experience
tags: [clarity, foundation, building, questions, builds-that-last]
---

# Clarity Before Code

Every team I've worked with in 15 years has made the same mistake at least once.

They started building before they understood what they were building.

The code worked. The architecture was reasonable. The team was capable. But somewhere between the idea and the implementation, clarity got lost. Requirements were assumed, not confirmed. Scope expanded because nobody defined the boundary. Maintenance fell to someone who had no context on why anything was built the way it was.

The building wasn't the problem. The thinking before building was.

## The questions I keep coming back to

Over the years, I've developed a habit. Before I start building anything, before my team starts building anything, I ask a set of questions. Not because someone told me to. Because I've been burned enough times to know what happens when I skip them.

They're not complicated. Most of them sound obvious. But obvious questions are the ones that get skipped most often, because everyone assumes someone else already answered them.

Here's what I ask.

## Should I build this at all?

The first question is always the same. **What problem am I solving?**

It sounds basic. But I've watched teams spend weeks building features that started as "wouldn't it be cool if..." rather than "users are struggling with..." These are different starting points that lead to very different outcomes. One is a solution looking for a problem. The other is a problem looking for a solution.

When I can't state the problem in one sentence, I know I don't understand it yet. That's my signal to stop and think before I start building.

The second question follows naturally. **Who is this for?**

"Everyone" is never the answer. A user guide for new engineers is different from one for customers. A dashboard for executives shows different data than one for operators. I've seen teams build something generic because they never asked this question, then wonder why nobody found it useful.

And then the question that takes courage to ask honestly. **What happens if I don't build this?**

Most teams never ask this one. But sometimes the answer is: nothing bad. The current process works. The manual workaround takes two minutes. The existing tool covers 90% of what's needed.

I've learned to see this as judgment, not failure. The best builders I know say no more often than they say yes. Killing a project that would have wasted weeks is a win, even if it doesn't feel like one.

## Before building from scratch

Even when the problem is real and the audience is clear, I've learned to pause before writing code.

**What already exists that could work?** The best code is code you don't write. Internal tools, open source, third-party services. Most problems have existing solutions that get you 80% of the way there. I'd rather build the remaining 20% than reinvent everything from zero.

And this is one I feel strongly about. **Why did the reference choose this approach?**

This pattern shows up constantly. A team sees how a competitor built something and copies it. A stakeholder shares a reference and says "do something like this". An engineer finds a code pattern and replicates it.

Nobody asks why the original was built that way. The reference might have made that choice for reasons that don't apply to you. Different constraints. Different users. Different scale.

Copying outputs without understanding inputs is how teams end up with solutions that look right but don't fit. I always try to ask: why did they do it this way? Do those reasons apply here?

## Getting the scope right

Here's where I see the most wasted effort.

**What's the simplest version that solves the problem?**

Not every feature needs to ship in v1. I keep reminding my team and myself: the question isn't what could we build. It's what must we build to solve the core problem. Everything else can wait until users prove it's needed.

This is hard because building more feels productive. Especially now, when AI makes it easy to generate features quickly. But more features means more maintenance, more complexity, more surface area for things to break. Simplicity takes discipline.

## Knowing when it works and when it breaks

Two questions I always pair together.

**How will I know it works?** If there's no success criteria, there's no way to measure and no way to improve. I try to define what "done" looks like before I start. Not features completed. What outcome proves this was worth building?

**What can break?** I've learned to think about failure before it finds me. What happens when inputs are unexpected? When the service is down? When ten times more users show up than planned? Five minutes thinking about failure modes upfront has saved me days of debugging in production more times than I can count.

## The questions nobody asks until it's too late

These last two are the ones I care about most. They're also the ones most teams skip entirely.

**Who will maintain this after I'm done?**

Every system outlives the team that built it. I've spent years of my career maintaining systems where the original team left and took all the context with them. No documentation. No decision traces. No runbooks. Just code that works until it doesn't, and then nobody knows why.

I've written before about foundation debt. This is where it starts. Not in the architecture. Not in the code quality. In the moment someone builds something and doesn't think about who comes next.

If I'm building something and can't answer who maintains this when I move on, I know I'm creating a problem for someone who can't defend themselves yet.

**How will someone else understand this without me?**

This is the companion question. You won't be here forever. I won't be here forever. The question is what you leave behind.

Clear naming. A README that explains the why, not just the what. Commit messages that capture decisions, not just changes. Architecture notes that explain trade-offs, not just choices.

I've been on both sides of this. I've inherited systems with zero context and spent weeks just understanding what they do. And I've built things without leaving breadcrumbs, then watched someone else struggle with what I created. The second experience is what made me start asking this question every time.

## What I actually do with these

I don't run through all 10 questions for every task. That would be overkill.

For small things, bug fixes, minor features, I ask three. What problem am I solving? What's the simplest version? How will I know it works? That takes five minutes and catches the most common mistake: building without knowing why or when to stop.

For new projects, architecture decisions, anything that will take more than a week, I go through all ten. I block 30 minutes. I write the answers down. I share them with the team before anyone writes code.

Sometimes I can't answer a question. That used to frustrate me. Now I see it as the most valuable outcome. A question I can't answer means there's a gap in my understanding. Better to find that gap in 30 minutes than discover it three weeks into building the wrong thing.

## Why I keep sharing these

The first five questions decide if you should build at all. The last five decide if what you build will last.

Most teams I work with skip straight to **how.** They're smart, capable people who could build anything. But they start building before they have clarity on what or why.

I did the same thing for years. I still catch myself doing it. The difference now is that I've seen enough projects stall from unclear beginnings that these questions have become automatic. They're not a framework I follow. They're habits I've built from getting it wrong.

Clarity isn't extra work before the real work starts. For me, it is the real work. Every lasting system I've seen started with someone who asked the right questions before writing the first line of code.

> Foundation starts before the first line of code.

Next week: **Your Team Doesn't Need Faster Coding.** More tools won't fix a team that can't see what's actually slowing them down. The real blockers are rarely where you expect.

*What questions does your team ask before starting a new project? What do they skip? I'd love to hear what your pre-build process looks like.*
