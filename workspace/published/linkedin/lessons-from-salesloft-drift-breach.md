---
title: 'Lessons from the Salesloft-Drift Breach: Chain of Oversights'
type: incident-analysis
status: published
topic: security
audiences:
- DevSecOps teams, engineering leaders, security professionals
key_message: One weak link can open everything - GitHub keys → AWS → OAuth → Salesforce → 700 orgs breached
target_hashtags:
- DevSecOps
- SaaSSecurity
- OAuth
- GitHub
- AWS
word_count: 285
published_date: '2025-09-29T02:56:42Z'
post_url: https://www.linkedin.com/feed/update/activity:7378261415775838208/
performance_metrics:
  impressions: 207
  reactions: 7
  comments: 0
  saves: 0
---

Over 700 organizations had data exposed in the Salesloft–Drift breach.

Customer records, case notes, and even secrets hidden in Salesforce objects were pulled through stolen OAuth tokens.

How it started: an attacker finds AWS keys in a GitHub repo. From there, they pivot into cloud accounts, grab OAuth tokens, and query Salesforce directly. What looks like a small mistake turns into a chain reaction across GitHub, AWS, Salesforce, and Google Workspace.

This wasn’t a zero-day. It was a chain of oversights. Secrets in code. Weak IAM. Over-permissive integrations.

What does this breach tell us?
It’s not just products that are targets. Repos, pipelines, and SaaS apps are equally valuable to attackers. One weak link can open them all.

Best practices for engineering and DevSecOps teams:
- Stop hardcoding secrets → use vaults or parameter stores; add pre-commit hooks to block API keys in GitHub.
- Audit CI/CD and cloud configs → rotate keys, enforce least privilege, MFA on IAM.
- Lock down OAuth scopes → grant only what’s needed; monitor issuance and refresh events.
- Detect data abuse, not just logins → bulk exports and odd queries should trigger alerts.
- Scrub sensitive data from business apps → no API keys in tickets or CRM fields.
- Practice the drill → run exercises like “GitHub repo leaked” or “OAuth app compromised.”

#DevSecOps means securing the whole chain end-to-end, not just shipping secure code.

#DevSecOps #SaaSSecurity #OAuth #GitHub #AWS