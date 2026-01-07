---
title: Document Management Standards
type: reference
status: active
created: 2025-12-15
updated: 2025-12-15
---

# Document Management

Standards for document generation, formatting, and maintenance.

## Frontmatter Standards

All documentation files MUST have YAML frontmatter.

### Common Structure

```yaml
---
title: Document Title
type: <type>
status: <status>
author: Name or handle
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

### Document Types

| Type | Use For |
|------|---------|
| `architecture` | System design, patterns, how things work |
| `guide` | How-to instructions, tutorials |
| `reference` | Lookup material, catalogs, lists |
| `spec` | Requirements, feature specifications |
| `adr` | Architecture Decision Record |
| `plan` | Roadmaps, implementation plans |
| `notes` | Working notes, explorations, ideas |
| `readme` | Overview, introduction docs |
| `changelog` | Version history |

### Status Values

| Status | Meaning | Use For |
|--------|---------|---------|
| `active` | Maintained, authoritative | Living docs (architecture, guides) |
| `draft` | Work in progress | Incomplete docs |
| `completed` | Finished, final record | Session logs, project docs |
| `superseded` | Replaced by another doc | Old versions |
| `archived` | Historical reference, no longer relevant | Old specs, past decisions |

### Optional Fields

Add as needed:
- `purpose:` - One-line description
- `phase:` - For specs (1.0, 1.1, etc.)
- `related:` - Links to related docs

## Markdown Format Rules

- Use Markdown only unless user explicitly requests different format
- Every file MUST begin with YAML frontmatter
- Reserve `---` for frontmatter only (top of file)
- Do NOT use `---` as section separators or visual dividers
- Separate sections with headings and blank lines
- Avoid embedded HTML unless required

## Writing Guidelines

### Optimize for Skim-Reading
- Highlight only what is needed to act, decide, or understand
- Prefer specificity over completeness
- Keep sections concise and scannable

### Technical Writing Rules

1. **Specific over vague** - Use exact terms, not "various", "several", "some"
2. **Active voice** - "Claude loads context" not "Context is loaded"
3. **Consistent terminology** - Pick one term, use it throughout (don't cycle synonyms)
4. **No editorializing** - State facts directly, skip "it's important to note"
5. **Sentence case headings** - Capitalize first word only

### Do Not Include
- Explanation of reasoning process
- Restated instructions or prompt context
- Greetings, closings, or commentary
- Narrative explanations (use direct language)

## Revision Rules

- Modify only requested sections (leave others untouched)
- Do not rewrite entire document unless explicitly requested
- Track version in frontmatter `updated` field

## Document History Tracking

### When to Track

Track changes for:
- Authoritative references (architecture, specs)
- Multi-contributor documents
- Documents with significant revisions over time

Skip for:
- Working notes and explorations
- Drafts still in flux
- Session logs (inherently timestamped)

### How to Track

1. **Frontmatter** - Update `updated:` field on any change
2. **History section** - Add at end of document for significant docs

### History Section Format

```markdown
## History

| Date | Author | Change |
|------|--------|--------|
| 2025-12-15 | @hoangle | Initial document |
```

### What to Record

- Structural changes (sections added/removed/reorganized)
- Significant content updates (new patterns, revised guidelines)
- Breaking changes (renamed concepts, deprecated approaches)

Do NOT record:
- Typo fixes
- Minor wording improvements
- Formatting changes

## Document Locations

| Type | Location | Naming |
|------|----------|--------|
| Architecture | `docs/architecture/` | `NN-topic.md` |
| Design decisions | `docs/` | `YYYY-MM-DD__topic.md` |
| Session logs | `docs/sessions/` | `YYYY-MM-DD__topic-session.md` |

## Document Indexing

Use numeric prefixes for ordered reading within a folder.

### Format

```
NN-topic.md
```

- `NN` — Two-digit index (01, 02, ... 99)
- `-` — Single hyphen separator
- `topic` — Descriptive kebab-case name

## Session Logging

When user requests to "create session log", "record session log", or "save session history":
1. Create timestamped log: `docs/YYYY-MM-DD__[topic]-session.md`
2. Use `@docs/templates/session-log.md` as base template
3. Include sections:
   - **Summary**: 2-3 sentences of what was accomplished
   - **Actions Completed**: Bulleted list of concrete changes
   - **Why This Matters**: Problem, solution, benefits
   - **Pending Tasks**: Remaining work items organized by priority
   - **Recommendation**: Next steps
4. Keep output concise and scannable

### Guidelines

- Group changes by type (Added, Changed, Fixed, etc.)
- Write entries for humans, not machines
- Use present tense: "Add feature" not "Added feature"
- Include context: what changed and why it matters
- Link to issues/PRs when relevant: `(#123)`
- Keep unreleased changes under `## [Unreleased]` section
