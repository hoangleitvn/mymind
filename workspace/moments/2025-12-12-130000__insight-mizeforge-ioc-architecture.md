---
id: 20251212-130000
type: insight
status: raw
themes: [product-development, mizeforge, architecture]
tags: [ioc, framework-design, customization, user-ownership, templates]
captured: 2025-12-12T13:00:00+07:00
---

# MizeForge Should Use IoC Pattern for User Customization

## Raw Capture

I am building a framework or system. I cannot let others just follow my templates, my ideas, etc. Then the MizeForge architecture should allow users to define their own identity, branding, template systems. We could have defaults but they can override. In software this is IoC (Inversion of Control). Is that right?

## The Insight

MizeForge shouldn't impose the creator's (Hoang's) way of doing things. It should provide:
- **Defaults** that work out of the box
- **Override capability** for users to customize everything
- **User-owned configuration** for identity, branding, templates

This is the Inversion of Control (IoC) pattern applied to content tooling.

## IoC Analogy Analysis

Yes, this maps to IoC. Here's how:

### Traditional (Without IoC)
```
Framework controls everything:
- Framework defines templates
- Framework defines voice
- Framework defines structure
- User consumes what framework provides
```

### With IoC
```
Framework provides defaults, user controls specifics:
- Framework provides template INTERFACE
- User provides template IMPLEMENTATION
- Framework calls user's implementation
- User owns the content/voice/structure
```

### MizeForge IoC Model

| Component | Default (Framework) | Override (User) |
|-----------|---------------------|-----------------|
| Identity | None (must create) | `workspace/identity/whoami.md` |
| Voice | Generic professional | `workspace/identity/voice.md` |
| Themes | None | `workspace/identity/themes/*.md` |
| Personas | None | `workspace/identity/personas/*.md` |
| Branding | None | `workspace/brands/*/design-system.md` |
| Templates | Plugin templates | User templates in workspace |
| Writing Rules | Plugin defaults | `workspace/identity/writing-rules.md` |

## Why This Matters

1. **User Ownership**: Users own their content system, not just use someone else's
2. **Authenticity**: Content stays authentic to user's voice, not framework creator's
3. **Scalability**: Framework scales to any use case without modification
4. **Maintainability**: Updates to framework don't break user customizations
5. **Builds That Last**: The tool itself embodies the philosophy

## Architectural Principles

### 1. Convention over Configuration (with escape hatches)
- Sensible defaults for quick start
- Everything overridable for power users

### 2. User Space vs Framework Space
```
Framework Space (plugins/):
├── Default templates
├── Skill definitions
├── Reference docs
└── Setup wizards

User Space (workspace/):
├── Identity (user-defined)
├── Brands (user-defined)
├── Templates (user overrides)
├── Content (user-created)
└── Moments (user-captured)
```

### 3. Loading Priority
```
1. Check user workspace first
2. Fall back to framework defaults
3. User always wins
```

### 4. No Lock-in
- User data is plain markdown
- No proprietary formats
- Portable and version-controllable

## Implementation Notes

Current MizeForge already does this partially:
- `identity-kit` loads from user's `workspace/identity/`
- `brand-kit` loads from user's `workspace/brands/`
- Templates are in plugins but could be overridable

Could improve:
- [ ] Allow user-defined templates in workspace
- [ ] Template override discovery (check workspace first)
- [ ] Document the override pattern clearly
- [ ] Make "escape hatches" more visible

## Related Patterns

- **Dependency Injection**: Framework injects user's implementations
- **Strategy Pattern**: User provides their own strategy (voice, templates)
- **Template Method**: Framework defines skeleton, user fills in specifics
- **Plugin Architecture**: User extends without modifying core

## Content Potential

This could be a post about:
- "Building frameworks that don't impose your way of thinking"
- "IoC for content tools: why your framework should serve users, not control them"
- "The architecture of authentic content systems"

## Follow-up

- [ ] Review current MizeForge architecture against IoC principles
- [ ] Document override capabilities clearly
- [ ] Add user template override feature
- [ ] Consider writing about this approach
