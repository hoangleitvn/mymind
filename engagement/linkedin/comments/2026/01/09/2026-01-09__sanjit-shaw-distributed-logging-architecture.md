---
type: linkedin-engagement
created: '2026-01-09T12:00:00Z'
last_updated: '2026-01-09T12:00:00Z'

author:
  name: "Sanjit Shaw"
  profile: "people/sanjit-shaw.md"
  linkedin_url: "https://www.linkedin.com/in/sanjitshaw"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/sanjitshaw_distributedsystems-systemdesign-microservices-activity-7414963920513359872-Bpfb"
  activity_id: "7414963920513359872"
  date: '2026-01-09'
  theme: "Distributed logging system architecture"
  angle: "Comprehensive logging pipeline for microservices observability"
  key_points:
    - API Gateway generates correlation IDs for tracing
    - Fluent Bit agents for async log collection
    - Kafka as fault-tolerant ingestion backbone
    - Flink for real-time parsing, enrichment, filtering
    - Multi-storage - Elasticsearch, TimescaleDB, S3
    - Visualization - Kibana, Grafana, Athena
  hashtags: ["DistributedSystems", "SystemDesign", "Microservices"]

thread_topic: "Distributed logging architecture and operational tradeoffs"
topic_tags: [distributed-systems, logging, observability, kafka, microservices, architecture]

engagement_status: "replied"
response_received: true
follow_up_needed: true
follow_up_date: '2026-01-10'
---

## Original Post

Distributed Logging System Architecture for microservices environments.

Architecture flow:
1. API Gateway - Generates correlation IDs for end-to-end request tracing
2. Microservices Layer - Fluent Bit agents collect logs asynchronously
3. Apache Kafka - Fault-tolerant event backbone for log ingestion
4. Apache Flink - Real-time stream processing, parsing, enrichment, filtering
5. Storage Systems - Elasticsearch (search), TimescaleDB (metrics), S3 (archive)
6. Visualization - Kibana, Grafana, AWS Athena

Key point: "Clear separation of concerns across the pipeline" and "Kafka + Flink gives you real-time signal without coupling ingestion to storage."

## Our Engagement

```yaml
- id: 1736424000000
  type: "comment"
  status: "posted"
  sentiment: "questioning"
  content: |
    Clean separation. One question on the operational side: how do you handle the cost/complexity tradeoff between running Kafka + Flink vs managed alternatives?

    We built distributed logging for microservices using Grafana OSS stack + OpenTelemetry - traces, metrics, log aggregation in one pipeline. Didn't need Kafka or Flink for our scale.

    The architecture is solid, but curious at what volume/team size does the full Kafka + Flink setup justify the operational overhead?
  strategy: "Share practical experience, ask genuine question about scale/complexity tradeoff"
  replies:
    - author: "Sanjit Shaw"
      content: |
        Good question. We don't treat Kafka + Flink as a default. For small to mid-scale systems, OpenTelemetry with a Grafana OSS stack is usually the simplest and most cost-effective option. Kafka + Flink starts to justify itself when log/event volume is consistently high, multiple downstream consumers rely on the same streams, and capabilities like replay, back-pressure handling, or real-time enrichment are required. At that stage—especially with managed services—the added complexity delivers clear operational value, provided the team has platform ownership maturity.
      sentiment: "positive"

- id: 1736426000000
  type: "reply"
  status: "posted"
  sentiment: "supportive"
  content: |
    Thanks. Volume + multiple consumers + replay = Kafka + Flink. Below that threshold, OTel + Grafana does the job.

    The hard part is figuring out where that threshold is. My suggestion: start simple, scale when the pain is real.

    Curious: for non-distributed or lightweight systems, what's your o11y solution?
  strategy: "Summarize his framework, add practical advice, ask follow-up question"
```

## Notes

- Technical architecture post - good for visibility in systems design space
- Our experience: Grafana OSS + OpenTelemetry without Kafka/Flink
- Sanjit confirmed: Kafka + Flink = high volume + multiple consumers + replay needs
- Good framework: "start simple, scale when pain is real"
- Asked follow-up about lightweight o11y solutions
- Connects to practical engineering theme - right-sizing infrastructure
- Potential content: o11y decision framework by system scale
