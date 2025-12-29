---
id: 20251212-134500
type: idea
status: raw
themes: [mizemind, product-development, content-strategy]
tags: [scheduling, planning, skill-idea, content-calendar, dogfooding]
captured: 2025-12-12T13:45:00+07:00
---

# Mizemind Needs a Post Scheduler Skill

## Raw Capture

I'm also stuck with planning posts. Don't know what to post today. I have 7 drafts ready but no schedule. I face the same planning problem I coach my team about.

We need a post scheduler skill for Mizemind.

## The Problem (Dogfooding)

- Created 7 posts in 1 hour
- Don't know which one to post first
- No content calendar
- No posting strategy
- Same "no planning" problem I identified in my team

**Irony:** Built a content capture system but missing the scheduling system.

## Skill Idea: Post Scheduler / Content Calendar

### What It Would Do

1. **Review drafts** - Scan `workspace/draft/linkedin/` for ready posts
2. **Suggest schedule** - Based on:
   - Day of week (Friday = reflection, Tuesday = tactical)
   - Topic variety (don't post 3 similar topics in a row)
   - Hook type rotation (story, contrarian, question)
   - Audience fatigue (space out heavy topics)
3. **Create calendar** - Weekly/monthly view of planned posts
4. **Track posting** - Mark as posted, move to archive
5. **Remind** - "Today's scheduled post: [title]"

### Workflow

```
User: "What should I post today?"
Skill: Checks drafts, checks calendar, checks day of week
Returns: "Today is Friday. Recommended: [reflection post]. Here's why..."

User: "Schedule my posts for next week"
Skill: Reviews all drafts, creates optimal schedule
Returns: Calendar with posts assigned to days

User: "I posted today's post"
Skill: Marks as posted, updates calendar, moves to archive
```

What is the best workflow, maybe plan for a week or month in advance then schedule the posts (manually is fine, copy/paste is fine. This isn't the top priority we need to solve for Mizemind). What we need is to define a working workflow that help me and users use the system better. Build the system than optimizing the tools.

Here is am thinking
1. Of of week - review weekly stat -> analyze performance
2. Then plan for the next weeks posts -> writing -> refining -> scheduling
During the week: start engaging, connect, comment with folks/pears and our posts.

### Data Model

```yaml
# workspace/calendar/content-calendar.md
---
week: 2025-W50
platform: linkedin
---

| Day | Date | Post | Status |
|-----|------|------|--------|
| Mon | 12/09 | - | - |
| Tue | 12/10 | - | - |
| Wed | 12/11 | - | - |
| Thu | 12/12 | Not Bad Wrong Approach | scheduled |
| Fri | 12/13 | Planning Test | scheduled |
```

### Scheduling Rules (Default)

| Day | Best For | Why |
|-----|----------|-----|
| Monday | Skip or light | People catching up |
| Tuesday | Tactical, how-to | Peak engagement |
| Wednesday | Story, experience | Mid-week attention |
| Thursday | Contrarian, bold | Build to weekend |
| Friday | Reflection, personal | Lighter mood |
| Weekend | Skip or personal | Lower reach |

## Why This Matters

1. **Completes the workflow** - Capture → Develop → Schedule → Post
2. **Solves my own problem** - Dogfooding shows the gap
3. **Adds unique value** - Most tools stop at creation
4. **Reduces friction** - No more "what do I post today?"

## Implementation Notes

- Could be simple: just a markdown calendar file
- Or interactive: skill that manages the calendar
- Integration: could connect to LinkedIn API eventually (future)
- Start simple: manual calendar + skill that suggests

## Follow-up

- [ ] Design skill spec
- [ ] Create simple calendar template
- [ ] Build scheduling logic
- [ ] Test with this week's posts
