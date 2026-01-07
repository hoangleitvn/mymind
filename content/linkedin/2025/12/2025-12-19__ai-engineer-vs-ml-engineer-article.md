---
title: "We Had All the ML Talent, Both AI Projects Still Failed"
type: linkedin-article
status: published
created: 2025-12-19
series: "Builds that Last"
topic: ai-hiring
theme: engineering-leadership
persona: founder-tech-leader
audiences: [ctos, engineering-managers, technical-founders, vps-engineering]
key_message: "AI projects fail because of systems and product problems, not missing ML skills. Algorithm-first thinking is backwards—product-centric development changes everything."
hook_type: storytelling
target_length: 1800
style: narrative-long
header_image: "../visuals/2025-12-19__ai-hiring-article-cover.svg"
inspired_by: "https://www.linkedin.com/posts/sahil-sheikh-ds_dont-hire-an-ai-engineer-if-heshe-doesn-activity-7406204177305153536-4XEc"
article_url: https://www.linkedin.com/pulse/we-had-all-ml-talent-both-ai-projects-still-failed-hoang-le-xmvsc
---

# We Had All the ML Talent, Both AI Projects Still Failed

There's a debate happening right now in AI hiring. People are arguing that 90% of AI projects fail because companies hire "AI Engineers" who can't train models. The solution, they say, is to hire people with deeper ML fundamentals.

I've been on both sides of this. I've worked on projects with strong ML talent. I've seen teams with impressive credentials. I've also watched those teams fail to ship anything that mattered.

Let me tell you about two projects that changed how I think about AI hiring.

## The Federated Learning Project

This was a client project. Ambitious scope. Real ML engineering.

The team was 10 people. Three ML engineers and data scientists with strong academic backgrounds. The credentials were there. The expertise was there. Everything the conventional wisdom says you need.

We were building a federated learning system. Custom algorithms. A full training pipeline. APIs to serve the models. This wasn't a wrapper around an LLM. This was the real thing: designing models, building training infrastructure, creating the serving layer.

We spent months on it. We did everything by the book.

And we shipped the MVP.

It worked. The model performed well. The system was production-ready.

Then we went to market.

No customers.

Nobody wanted it. We had built a technically impressive system for a problem that didn't have enough paying customers to justify the investment. The project died quietly. All that ML talent, all those credentials, all that careful engineering. None of it mattered because we never validated the product.

## The GenAI Project

Different client. Different year. This time we went leaner.

Team of 6. One engineer with practical experience in LLMs and GenAI. The rest were software engineers. No PhDs. No published papers. Just people who knew how to build and ship.

We built. We moved fast. We shipped.

And it still never reached end users. The client's priorities shifted. Internal politics killed the rollout. The product was ready, but the organization wasn't.

Same outcome. Different team composition. Different reason. Same lesson: the tech wasn't the problem.

## What I Learned from Both Failures

Here's what I realized after watching both projects fail: the ML credentials had nothing to do with it.

Both teams had the technical skills to build what they set out to build. The federated learning team built a sophisticated ML system. The GenAI team built a functional application. Neither failed because the model wasn't good enough or because the team lacked ML knowledge.

They failed upstream.

Product vision was unclear. There was no validated customer need. No clear path to market. We built technically sound systems for problems nobody was paying to solve.

> "The PhD didn't save us. The custom algorithms didn't matter. The fancy architecture was irrelevant."

What mattered was that we skipped the product question. We went straight to building without asking whether anyone wanted what we were building.

## The Way We Were Taught vs. The Way That Works

Think about how ML is taught in universities and bootcamps.

You start with data. You build a model. You optimize it. You maybe deploy it somewhere. The product comes last, if it comes at all. Most ML courses end at the Jupyter notebook stage.

This is **algorithm-first thinking**. Start with data, build a model, hope someone wants it.

It's how research works. It's how papers are written. It's how most data scientists are trained to think.

And it's backwards for building products.

What I've learned from years of shipping software, and now AI products, is that the sequence should be reversed.

**Product-centric development**. Flip the sequence. Start with the product question. What problem are we solving? Who has this problem? Will they pay for a solution? How will we know if our solution is working?

Then build the system. The data pipelines. The evaluation framework. The monitoring. The infrastructure that lets you measure whether you're solving the problem.

Then, and only then, plug in the model.

When you do it this way, the model becomes a component. A replaceable part. You can swap it out. You can test different models. You can upgrade when better options become available. Because you have a system that measures outcomes, you can actually tell whether GPT 5.2 or Opus 4.5 or Gemini 3 works best for your specific use case.

## Why Evaluation and Validation Change Everything

Here's something that took me too long to understand.

Without an evaluation system, you can't determine which model is better. And without validation skills, you can't trust what any model produces.

These are two different problems. Both are missing from how we train AI engineers.

**Evaluation** is about measuring. Is GPT 5.2 better than Opus 4.5 for your use case? What about Gemini 3 or Grok 4.1? Better at what? Faster? More accurate? More cost-effective? Better at handling the edge cases your users actually encounter?

You can't answer these questions with benchmark scores. You need to measure real outcomes in your actual system with your actual users.

I see the same pattern with developer tools. Engineers tell me "Cursor is better than VSCode." I ask them: what's your acceptance rate for code suggestions in each? How many suggestions do you accept vs reject? They have no idea. They have an opinion but no metrics.

That's the evaluation gap. You're making decisions based on feeling, not data.

**Validation** is different. It's about verifying that AI output is actually correct before you use it. The model generated code. Does it work? Does it have bugs? Does it handle edge cases? Does it introduce security vulnerabilities?

Evaluation tells you which model to use. Validation tells you whether to trust what it produces.

Both require systems thinking. Both require infrastructure. Neither is taught in ML programs.

On our federated learning project, we actually got the technical part right. We built the system and workflow. The algorithm was just for testing and proof of concept. The vision was: build the infrastructure first, then create models based on customer needs and data.

Good thinking. Wrong order.

We built the evaluation infrastructure. We just never validated that customers existed before we built it. The project failed because of go-to-market and sales problems, not tech.

## The Gap Universities Don't Fill

I wrote about a similar pattern recently, in a completely different context.

We had a project with experienced developers. Everyone on the team "knew" best practices. GitFlow. Database migrations. Code review standards. Architecture principles. They had the knowledge.

Three weeks into the project, we had 10 different patterns for the same feature. Database migrations were breaking production. The git history looked like a crime scene.

The problem wasn't that they didn't know the right way to do things. They did. The problem was the gap between knowing and applying.

**Knowing ≠ Applying**

The same gap exists in AI, maybe even more so.

ML programs teach model architectures. Loss functions. Hyperparameter tuning. Optimization techniques. The curriculum is heavy on algorithms and math.

But they don't teach how to build evaluation systems that catch problems before users do. They don't teach how to design fallback behaviors when models fail, and they will fail. They don't teach how to manage inference costs at scale. They don't teach when NOT to use AI.

These aren't ML problems. They're systems problems. And systems thinking isn't on the curriculum.

Dr. Werner Vogels, CTO of Amazon, put it well: "Think in systems, not isolated parts."

The model is a part. The evaluation framework is a part. The monitoring is a part. The fallback behavior is a part. None of them work in isolation. You need engineers who can see how they connect.

You can have a PhD in machine learning and still not know how to build a production system that serves models reliably. Those are different skills. Both are valuable. But they're not the same thing.

## The Reality of AI Products Today

Here's something most people won't say out loud: the majority of AI products right now are wrappers around LLMs.

Think about it. How many companies are actually training custom models? How many are doing real ML research? Very few. Most are building applications on top of OpenAI, Anthropic, or open-source models. They're using APIs. They're building systems that call these models, process the responses, and deliver value to users.

This changes the hiring equation completely.

If you're building a wrapper around an LLM, you don't need someone who can train a transformer from scratch. You need someone who can build reliable systems. Someone who understands APIs, data pipelines, error handling, monitoring. Someone who can ship.

Most of our clients understand this. They don't ask us to find ML researchers. They encourage our engineers to learn AI fundamentals.

They say things like: "Your team can pick up LLM patterns, RAG, API integration, agentic frameworks. That's learnable in a few months."

And then they add: "But they already know how to build production systems. That's the hard part. That's what we're paying for."

Our engineers learn the AI parts. They learn prompt engineering. They learn RAG architectures. They figure out how to integrate with different model providers. This stuff is teachable.

What takes years to develop is the ability to build systems that run 24/7. To handle failures gracefully. To monitor production effectively. To ship iteratively. To measure what matters.

Clients tell us directly: "We don't need ML researchers. We need engineers who can ship AI products."

**Systems experience plus AI learning beats AI credentials plus no systems experience.**

Not always. There are exceptions. But for the majority of companies building AI-powered products today, this is the reality.

## Rethinking the "AI Engineer" Role

So when you're hiring an "AI Engineer," what should you actually look for?

It depends on what you're building. And most companies don't think carefully enough about this.

If you're training custom models, you need ML expertise. You need people who understand model architectures, can run experiments, and push the boundaries of what's possible. This is research work. Hire ML engineers or data scientists.

But here's the thing: most companies aren't doing that.

Most companies are building applications on top of existing models. They're calling APIs. They're building RAG systems. They're creating agentic workflows. They're integrating AI into existing products.

For this work, you don't need someone who can derive backpropagation from first principles. You need someone who can build reliable systems. Someone who understands how to handle API failures, manage costs, monitor quality, and ship iteratively.

The "AI Engineer" role, as most companies actually use it, is closer to a systems engineering role than a research role. The AI part is important, but it's learnable. The systems part is the foundation.

When you require ML expertise for a role that's really about building LLM wrappers, you're filtering out engineers who could do the job well. And you might end up with someone who knows transformers inside out but has never shipped a production system.

> "Most companies have a production bottleneck. They hire for a research bottleneck."

## The Real Lesson from Two Failed Projects

The 90% failure rate in AI projects is real. But the diagnosis is usually wrong.

These projects don't fail because of missing ML credentials. They fail because of missing product validation. Missing go-to-market strategy. Missing customer discovery. You can have the best infrastructure and the strongest team. Without customers, none of it matters.

We had all the ML talent on our federated learning project. We built both projects. Both failed.

Not because of models. Because we didn't validate the product first.

The engineers who successfully ship AI products have learned something that isn't taught in ML programs.

The model is a component. The system makes it valuable. The product makes it matter.

Get the product right first. Build the system that can evaluate and iterate. Then worry about optimizing the model.

That sequence, reversed from how most people approach it, is what separates AI projects that ship from AI projects that die in a demo.

## What's Actually Blocking Your AI Projects?

I'm genuinely curious what others are seeing.

Is your bottleneck model performance? Or is it everything around the model?

Are you struggling to find ML talent? Or are you struggling to ship despite having the talent?

The answers matter for how you hire, how you structure teams, and where you invest your time and resources.

What's your experience?

*Part of the **Builds that Last** series. Engineering principles for products that ship and teams that scale.*

#AIEngineering #EngineeringLeadership #BuildsThatLast #TechHiring #ProductDevelopment
