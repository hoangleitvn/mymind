---
title: "Cloud Architecture Patterns"
theme: "technical-architecture-foundations"
status: "active"
persona: ["tech-leader"]
signature_line: "Choose patterns for today's scale, tomorrow's options"
tags: ["cloud", "aws", "azure", "serverless", "containers", "architecture"]
created: "2025-11-21"
updated: "2025-11-21"
---

# Angle: Cloud Architecture Patterns

**Theme:** Technical Architecture & Foundations

## Position

Cloud architecture choices multiply: serverless vs containers, managed vs self-hosted, monolith vs microservices. Right pattern depends on team skill, scale, and operational maturity. Start simple, add complexity only when scale or requirements demand it.

## Sharp Pillars

- Serverless wins for simple services, predictable costs at low scale
- Containers win for complex apps, control, multi-cloud portability
- Managed services reduce ops burden but increase vendor lock-in
- Pattern choice trades control for operational simplicity

## Signature Proof

Serverless Lambda costs $50/month at 10K requests, $5K/month at 10M requests. Container costs steady at $200/month regardless. Choose based on scale curve and team ops capacity, not hype.

## When To Use

- Initial cloud architecture decisions
- Serverless vs container evaluations
- AWS vs Azure vs GCP choices
- Managed services vs self-hosted
- Cost optimization at scale

## Tone

Technical. Data-driven. Trade-off focused.
