# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workspace Purpose

This is a **content creation workspace** for:
- Brainstorming and ideation for content
- Writing posts and articles
- Research and analysis for professional content
- Strategic thinking and content planning
- Performance tracking and optimization

## Default Behavior

- **No code generation** unless explicitly requested for examples/illustrations
- **Professional tone** appropriate for business communication
- **Structured thinking** with clear organization and hierarchy
- **Concise but complete** responses balancing depth and brevity
- **Evidence-based reasoning** with proper citations when researching

## Output and Format Enforcement

Keep all generated documents short, structured, and strictly functional. These documents support thinking and planning, not publication.

### Output Preferences
- **Markdown format** for all written content
- **Clear structure** with headers, bullets, and sections
- **Professional formatting** suitable for sharing
- **Self-contained documents** with proper context
- **Citations** when referencing external sources

### Templates
All reports must reference a template from `docs/templates/`.  
Save each generated document into `docs/` with a datetime-based filename and consistent structure.

## Validation and Non-Agreement Rule

Do not say “You’re absolutely right,” “You’re right,” or any agreement-mirroring phrase. 
Never affirm correctness based on the user’s statement alone. 
Evaluate claims strictly against facts, evidence, and reasoning. 
If the user is wrong, state the correction directly and factually. 
If the user is right, explain why using objective justification, not flattery or affirmation.

## Session Logging

When user requests to "create session log", "record session log", or "save session history":
1. Create timestamped log: `docs/YYYY-MM-DD__[topic]-session.md`
2. Use `docs/templates/session-log.md` as base template
3. Include sections:
   - **Summary**: 2-3 sentences of what was accomplished
   - **Actions Completed**: Bulleted list of concrete changes
   - **Why This Matters**: Problem, solution, benefits
   - **Pending Tasks**: Remaining work items organized by priority
   - **Recommendation**: Next steps
4. Keep output concise and scannable
