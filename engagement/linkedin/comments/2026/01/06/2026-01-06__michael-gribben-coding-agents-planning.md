---
type: linkedin-engagement
created: '2026-01-06'
last_updated: '2026-01-09'

author:
  name: "Michael Gribben"
  profile: "people/michael-gribben.md"
  linkedin_url: "https://www.linkedin.com/in/michael-gribben/"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/michael-gribben_i-think-people-are-getting-overwhelmed-by-activity-7414048067781464065-0OGK"
  date: '2026-01-06'
  theme: "ai-coding-agents"
  key_points:
    - Retry coding agents with fresh perspective
    - Use latest models with thinking enabled
    - Plan before coding for better agent output
    - Enable automated verification (Playwright, API tests)
    - Provide context on standards via AGENTS.md, Claude skills, MCP servers

thread_topic: "Practical recommendations for coding agent adoption"
topic_tags: [ai-coding, coding-agents, claude, ai-workflow, planning]
engagement_status: "conversation"
response_received: true
follow_up_needed: false
---

## Original Post

I think people are getting overwhelmed by coding agent hype.

Michael argues that rapid LLM advancement makes complex setups obsolete quickly. He shares 5 practical recommendations:

1. **Retry coding agents** - "your priors are likely out-of-date and deserve a refresh"

2. **Use latest models with thinking enabled** - Opus 4.5, GPT-5.2 Codex, and Gemini 3 Flash offer substantial improvements over older versions

3. **Plan before coding** - Agents work better when instructed to document task understanding first, forcing clarification questions

4. **Enable automated verification** - Use tools like Playwright for UI testing and automated API validation rather than manual testing

5. **Provide context on standards** - Share organizational best practices, architectural patterns, and playbooks through AGENTS.md files, Claude skills, or MCP servers

## Notable Comments

```yaml
- id: 1736150400000
  author: "Jamie Hall"
  sentiment: "thoughtful"
  content: |
    Noted the tension between dismissing constant predictions about software engineering's future while still recognizing genuine underlying changes.
  reactions: 0
```

## Our Engagement

```yaml
- id: 1736150400001
  type: "comment"
  status: "posted"
  strategy: "add-question"
  content: |
    The "plan before coding" point (rec #3) resonates. Been experimenting with this myself.

    Curious about your actual workflow here: Are you using Claude's built-in plan mode, asking the agent to write a spec first, or something else entirely?

    I've found that how you structure the planning step changes everything about agent output quality.
  replies:
    - id: 1736416800000
      author: "Unknown"
      sentiment: "positive"
      content: |
        As my first boss used to say, a program is only 10% of a product
      reactions: 0
    - id: 1736416800001
      type: "our_reply"
      status: "posted"
      content: |
        Wise boss. That 90% is where most teams get stuck. The code works. Everything around it breaks.
    - id: 1736416800002
      author: "Vatche"
      sentiment: "positive"
      content: |
        That is how I was working as well. An md file for things like: generating user stories, tasks from that, implementation plan from those, testing plans, and then a linear progression to a PR. But Boris's approach is a whole new level.

        So the dual-file architecture is exactly what you said. The MD is for Claude Code to understand what the slash command does and the shell script is for logic. You can have a particular slash command be purely an MD with no associated script. For example if you wanted to always produce a summary for jira you could write a prompt in the MD file and run it at the end of a session and update jira with that summary. "Here is what was done in this commit", no shell script required.

        I just added scripts so people could test it out and do their own thing with it. Have you tried it out? It's pretty cool when you have a bunch of tasks running in their own feature branches via agents. But get ready for the "you have reached your usage limit until 2am" message
      reactions: 0
    - id: 1736416800003
      type: "our_reply"
      status: "posted"
      content: |
        Same here. Plugin-based architecture, skills, commands, scripts. Some agents, not too much MCP.

        MD for instruction, workflow - executed by agents.
        Script for execution logic - executed by both agents and human.

        I also embed execution logic in scripts so I can run them when I hit the limit. Learned this the hard way - fix 20% of what the agent outputs instead of regenerating the whole thing. Cheaper and faster.
```

## Notes

- First engagement with Michael Gribben
- His post aligns with practical-engineering theme
- Recommendation #3 connects to our foundation-first approach
- Got reply agreeing with "program is 10% of product" wisdom
- Vatche shared detailed workflow: MD files for user stories → tasks → implementation → testing → PR
- Discussed dual-file architecture, parallel agents, usage limits
- Shared our "fix 20% instead of regenerate" pattern - potential content seed
