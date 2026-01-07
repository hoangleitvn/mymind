I've been using Anthropic's Claude Code daily for months. The uncomfortable truth: most people (including me) are using it wrong.

Not because they're bad at it. Because they're missing the point entirely.

Every guide says the same thing. Add subagents. Configure skills. Install MCP servers. What they don't tell you is that adding more stuff often makes things worse.

Here's what took me way too long to figure out: every feature in Claude Code is a context management strategy. That's it.

The 200K token context window sounds massive until you actually use it. It fills up fast. When it fills, quality tanks. Claude forgets things. Ignores instructions. Makes weird decisions.

Reddit is full of complaints about Claude "forgetting what it was doing two steps ago." Most of this isn't Claude being stupid. It's context pollution.

Once I understood that, everything clicked.

- Subagents? Isolated context windows
- Skills? Pre-packaged context that loads on demand
- Slash commands? Templated context injection
- MCP servers? External context sources and tools

The biggest unlock for me was a research subagent. It does all the lookups - docs, examples, web searches - in its own context. Then it hands back a summary. The main conversation stays clean. Answer comes back. Noise doesn't.

But here's what nobody talks about: the routing system only works if your descriptions are good. Write "Reviews code" and Claude will never use your carefully crafted agent. Write "Invoke when reviewing for security vulnerabilities after feature implementation" and suddenly it works.

This is an art more than a science. Enough detail to guide the agent. Not so much that you waste context.

The other tension that doesn't go away: automation versus oversight. Some people run full YOLO mode. I don't go that far. I treat Claude like a fast junior dev with great memory but questionable judgment. It does a lot. I'm still responsible for what ships.

Wrote up my full setup - the specific commands, agents, and patterns that actually work for me. Link in comments.