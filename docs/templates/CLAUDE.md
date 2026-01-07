# CLAUDE.md

## Purpose
Ensure all AI-generated internal documents are short, structured, and useful.
Documents stored here support thinking, planning, and clarity.
They are not for publication. No filler or narrative.

## Core Rules
- Produce only sections defined by the selected template
- Keep total length minimal (prioritize clarity and actionability)
- No introductions, background stories, or explanations outside template
- Use plain language (avoid abstractions, metaphors, inspirational lines)
- Use lists and tables where possible (avoid long paragraphs)
- Mark unknowns or assumptions as placeholders

## Templates
Available templates are stored in @/docs/templates.
Each document must reference a template by name.

## Invocation Example
"Create a <type> titled <title>. Use template <type>."

## Revision Rules
- Modify only requested sections (leave others untouched)
- Do not rewrite entire document unless explicitly requested
- Track version in filename or header when archiving

## When Writing
- Optimize for skim-reading (grasp in one minute)
- Highlight only what is needed to act, decide, or understand
- Prefer specificity over completeness (only include what matters)

Do Not
- Add explanation of reasoning process
- Restate instructions, prompt context, or template rules
- Add greetings, closings, or commentary

Output Format
- Markdown only
- Must include required front-matter at the top of file