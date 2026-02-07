---
type: linkedin-post
status: draft
created: 2026-02-03
title: "How We Actually Manage Technical Debt"
persona: tech-leader
audiences: [engineering-managers, CTOs, tech-leads, founders]
angle: End-to-end debt management process - team ownership focus
hook_type: client-step-by-step
themes: [foundation-first, leadership, practices]
publish_on: Personal account
---

We'll clean it up later.

Later never comes. Debt piles up. Velocity drops.

Here's the end-to-end process we use to manage technical debt:

𝟭. 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝘆 𝗰𝗼𝗻𝘁𝗶𝗻𝘂𝗼𝘂𝘀𝗹𝘆

Don't wait for audits. Flag debt as it happens:

→ Code reviews catch shortcuts
→ Static analysis runs every build
→ Dependency scans run daily
→ Retros surface friction points
→ Incidents reveal hidden weaknesses

If a bug traces back to poor code quality, that's a debt item.
If a feature takes longer because of existing code, that's a debt item.

𝟮. 𝗧𝗿𝗮𝗰𝗸 𝗹𝗶𝗸𝗲 𝘆𝗼𝘂 𝘁𝗿𝗮𝗰𝗸 𝗯𝘂𝗴𝘀

Debt without a ticket is debt that never gets paid.

We use a docs/debt/ folder with:
→ Severity (critical / high / medium / low)
→ Category (code / architecture / dependency / test / docs / infra)
→ Owner and target date

Six categories. Different owners. Different timelines.

𝟯. 𝗣𝗿𝗶𝗼𝗿𝗶𝘁𝗶𝘇𝗲 𝗯𝘆 𝗺𝗮𝘁𝗵, 𝗻𝗼𝘁 𝗴𝘂𝘁

Score = (Impact × Urgency) / Effort

→ Impact = productivity + reliability + security (each 1-5)
→ Urgency = getting worse (2x) / stable (1.5x) / low (1x)
→ Effort = S(1) / M(2) / L(4) / XL(8)

Score > 8? Address immediately.
Score < 3? Address opportunistically.

𝟰. 𝗕𝘂𝗱𝗴𝗲𝘁 𝗳𝗼𝗿 𝗶𝘁

15-20% of every sprint. Scheduled. Protected.

Not "when we have time."

When critical items = 0 and high items < 5, we drop to 10%.
When velocity declines 2 sprints in a row, we run a full debt sprint.

𝟱. 𝗣𝗮𝘆 𝗱𝗼𝘄𝗻 𝘀𝘁𝗿𝗮𝘁𝗲𝗴𝗶𝗰𝗮𝗹𝗹𝘆

→ Boy scout rule: small fixes during feature work
→ Dedicated sprints: when debt accumulates
→ Strangler pattern: build new alongside old
→ Feature-driven: fix debt that blocks the feature

Small fixes in feature PRs. Big refactors get their own PR. Never mix.

𝟲. 𝗣𝗿𝗲𝘃𝗲𝗻𝘁 𝗻𝗲𝘄 𝗱𝗲𝗯𝘁

When deadlines force shortcuts:

Acknowledge → Document → Scope → Plan → Communicate

Every shortcut gets a ticket before the PR merges.

Definition of done includes:
→ No new high-complexity code
→ Test coverage maintained
→ If debt introduced, debt item created

This only works when the whole team owns it.

One person can't track everyone's shortcuts.
One person can't prioritize what they don't see.
One person can't pay down debt they didn't create.

Debt management isn't a role. It's a culture.

Which step is your team missing?

#EngineeringLeadership #TechnicalDebt #BuildsThatLast

——

Enjoy this? ♻️ Repost it to your network and follow me for more.

Join Builds That Last on Substack for practical insights on foundation-first engineering.
