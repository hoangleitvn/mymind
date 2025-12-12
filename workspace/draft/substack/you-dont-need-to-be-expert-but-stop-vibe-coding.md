---
title: "You Don't Need to Be an Expert. But Stop Vibe Coding."
type: substack-article
status: draft
created: 2025-12-12
publication: builds-that-last
topic: builder-mindset-and-learning
theme: engineering-leadership
persona: tech-leader
audiences: [junior-developers, engineers-becoming-leaders, founders]
key_message: "You don't need expertise to ship. But you need fundamentals to use AI well."
hook_type: contrarian
target_length: 1800
word_count: 1850
---

# You Don't Need to Be an Expert. But Stop Vibe Coding.

*What 15 years of shipping taught me about the difference between building and prompting.*

---

## I'm Not an Expert at Anything

I'm going to tell you something that might sound like false modesty. It's not.

I'm not a good architect. But I've built many systems.

I'm not a good cloud engineer. But most systems I built run on AWS and Azure.

I'm not good at React. Or Angular. Or Node.js. Or backend. Or DevOps. Or SecOps. Or GitOps.

I can't pass a LeetCode interview. I use AI to solve those problems now.

After 15 years and 50+ projects shipped, here's what I've learned: the industry celebrates experts, but generalists ship products.

Deep expertise gets you hired. Broad competence gets products to users.

The difference? Experts know everything about one thing. Shippers know enough about many things.

Enough to design systems.
Enough to lead teams.
Enough to debug at 2am.
Enough to ask AI the right questions.

You don't need to be the best architect. You need to ship architecture that works.

That's the builder mindset. And it's more relevant now than ever.

---

## The Vibe Coding Problem

But here's where it gets complicated.

Everyone's vibe coding now. One prompt. Ship it. Call yourself an AI Engineer.

I see it everywhere. Juniors prompting Claude or GPT, copying the output, deploying to production. One weekend project and they update their LinkedIn: "Builder. AI Engineer. Shipping daily."

The code works. Sometimes. Until it doesn't.

And when it breaks? They can't debug it. Because they never understood it in the first place.

This is vibe coding: prompting AI without understanding what it generates.

The problem isn't using AI. I use AI constantly. The problem is using AI as a replacement for understanding instead of a tool for building.

Here's the uncomfortable truth:

**AI amplifies what you already know. If you know nothing, AI amplifies nothing.**

This is why I can ship systems without being an expert in any single technology. I know enough fundamentals to:

- Know what to ask AI
- Validate what AI generates
- Debug when things break
- Design systems that hold together

Vibe coders don't have this. They have prompts and hope.

---

## The Fundamentals That Actually Matter

So what should juniors actually learn? Not another framework. Not another course. Not more tutorials.

Here's what matters:

### 1. Read the Docs

Not tutorials about the docs. The actual documentation.

When you're learning React, read the React docs. When you're using Supabase, read the Supabase docs. When you're working with any library or framework, go to the source.

Tutorials give you someone else's interpretation. Docs give you the source of truth.

This sounds basic. Most developers skip it. They Google the error, copy the Stack Overflow answer, move on. They never build mental models of how things actually work.

Reading docs is slow. That's the point. You're building understanding, not just getting code to run.

### 2. Learn Clean Code Principles

Not as rules to follow blindly. As principles to understand.

Why do we name variables clearly? Because code is read more than it's written.

Why do we keep functions small? Because smaller units are easier to test, debug, and change.

Why do we avoid deep nesting? Because our brains can only hold so much context.

Clean code isn't about following a style guide. It's about writing code that humans (including future you) can understand.

When you understand the "why" behind clean code, you can evaluate AI-generated code. You can look at what Claude produces and say: "This works, but it's not maintainable. Let me restructure it."

Without this foundation, all AI output looks the same to you.

### 3. Understand Architecture (Start Simple)

You don't need microservices. A monolith is fine. A modular monolith is even better.

What you need is to understand:

- How data flows through a system
- Where business logic lives
- How components talk to each other
- What happens when something fails

Most junior developers jump straight to code. They open the editor and start typing. Or prompting.

Better approach: sketch the system first. Even on paper. What are the pieces? How do they connect? Where does data come from? Where does it go?

This is architecture thinking. It doesn't require years of experience. It requires the habit of designing before coding.

### 4. Know How Databases Work

You don't need to be a DBA. But you should understand:

- Tables, relationships, and queries
- When to use SQL vs. NoSQL
- What an index does and why it matters
- How to model data for your use case

Most performance problems are database problems. Most scaling problems are database problems. Most bugs that are hard to track down involve data in unexpected states.

AI can write queries for you. AI can't tell you if your data model makes sense for your use case.

---

## The Framework: Building with AI (Not Vibe Coding)

Here's the approach I recommend. It uses AI extensively. But it builds understanding, not dependency.

### Step 1: Define What You're Building

Before any code, write a simple BRD (Business Requirements Document). This doesn't need to be formal. Just answer:

- What problem does this solve?
- Who is it for?
- What are the core features?
- What's out of scope?

You can ask AI to help you structure this. That's fine. But you need to understand what you're building.

### Step 2: Design Before You Code

Ask AI to help you design the architecture. But give it constraints:

"I'm building a task management app. I'm using TypeScript, Next.js, and Supabase. Help me design the architecture."

Constraints are important. Architecture without constraints is abstract. Architecture with constraints is practical.

Here's a prompt template that works:

> As a Solution Architect, help me design a system. I'm a developer learning to build real applications. I understand the basics of [list what you know].
>
> I'm building [describe your app]. It doesn't need to be perfect or large-scale. It needs to work and teach me.
>
> Here are my constraints: [list your tech stack].
>
> Help me think through the architecture. Ask me clarifying questions. Then guide me through designing the system step by step.

Let AI ask you questions. Think through your answers. This is where learning happens.

### Step 3: Plan the Work

Take your BRD and architecture and create a build plan:

- What are the tasks?
- What order do they need to happen?
- What are the dependencies?

If you have limited time (say, 2 hours per day), build a realistic timeline. AI can help you break this down.

### Step 4: Build with Understanding

Now you code. With AI assistance. But with a critical difference:

When AI generates code, don't just copy it. Ask:

- "Why this approach?"
- "What are the tradeoffs?"
- "What would break if I changed X?"

Debug yourself first. When something doesn't work, try to understand why before asking AI to fix it. This is frustrating. This is also how you learn.

The goal isn't to build faster. The goal is to build while learning.

---

## The Difference

Let me be concrete about the difference this makes.

**Vibe coder:** Prompts AI for authentication code. Copies it. It works. Moves on. Later, there's a security vulnerability. They have no idea how to fix it because they never understood how authentication worked.

**Builder:** Prompts AI for authentication code. Reads through it. Asks AI to explain the session handling. Modifies part of it to fit their data model. Understands what each piece does. Later, when there's an issue, they know where to look.

Both used AI. One learned. One didn't.

**Vibe coder:** After 6 months, has shipped 10 projects. Can't explain how any of them work.

**Builder:** After 6 months, has shipped 3 projects. Can extend, debug, and improve all of them.

Which one would you hire?

---

## You Don't Need to Be an Expert

I want to be clear: I'm not saying you need to master everything before you can build. That's the opposite of my message.

I'm not an expert. I never will be. Technology moves too fast, and I'm interested in too many things.

But I know enough. Enough fundamentals to use AI effectively. Enough architecture thinking to design systems. Enough debugging skills to fix things when they break.

This isn't about becoming an expert. It's about building a foundation strong enough to support everything else.

AI is the most powerful learning and building tool we've ever had. But it's not a replacement for understanding. It's an amplifier.

What are you amplifying?

---

## Start Here

If you're a junior developer reading this, here's your action plan:

1. **Pick one project.** Something simple. A task manager, a habit tracker, a personal dashboard.

2. **Write the BRD first.** Before any code. What are you building and why?

3. **Design the architecture.** Use AI to help. Sketch it out. Understand the pieces.

4. **Learn as you build.** When you don't understand something, stop. Learn it. Then continue.

5. **Ask AI "why" more than "how."** "Why this approach?" teaches you more than "How do I do X?"

Stop vibe coding. Start building with understanding.

The builders who thrive in the AI era won't be the ones who prompt the fastest. They'll be the ones who understand what they're building.

That's what lasts.

---

*What fundamentals would you add to this list? Reply and let me know what you wish you'd learned earlier.*
