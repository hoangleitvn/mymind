---
type: linkedin-engagement
created: '2026-01-13T13:52:00Z'
last_updated: '2026-01-14T08:45:00Z'

author:
  name: "Marc Aproskie"
  linkedin_url: "https://uk.linkedin.com/in/marc-aproskie-21ba242"
  profile: "people/marc-aproskie.md"

post:
  source: "external"
  url: "https://www.linkedin.com/posts/marc-aproskie-21ba242_the-microservices-misconception-ive-reviewed-activity-7415985632834904064-ZFva"
  activity_id: "7415985632834904064"
  date: '2026-01-11'
  reactions: 35
  comments_count: 5
  reposts: 0
  theme: "Microservices architecture misconceptions"
  angle: "Domain design before service boundaries"
  key_points:
    - Two disasters: distributed monolith (all deploy together) or FaaS chaos (thousands of functions)
    - Both cost 3x more than well-designed monolith with worse performance
    - Missing piece is domain design at business level upfront
    - Can't draw service boundaries in code without drawing them in business model first
    - Design services around bounded contexts with clear business domains
    - Most companies need clear boundaries and good domain design, not microservices
    - Architecture should emerge from business model
  hashtags: []

thread_topic: "Microservices vs domain design - architecture emerges from business model"
topic_tags: [microservices, architecture, domain-design, bounded-contexts, monolith]

engagement_status: "conversation"
response_received: true
follow_up_needed: true
follow_up_date: '2026-01-15'
---

## Original Post

The Microservices misconception! I've reviewed countless "microservices architectures" in my career. Often, they were something else... The problem: Most teams end up with one of two disasters: The Distributed Monolith: 15 services that all need to deploy together Change one thing, test everything All the complexity of microservices, none of the benefits Basically a monolith with network latency Or the other extreme - FaaS chaos: Thousands of tiny functions No clear ownership Debugging is archaeology "Which Lambda handles checkout again?" Both cost you 3x more than a well-designed monolith, with worse performance. The missing piece: Nobody does the boring work upfront: domain design at the business level. You can't draw service boundaries in code if you haven't drawn them in your business model first. Where does "checkout" end and "inventory" begin? Who owns "customer data" - sales, support, or billing? What happens when a payment fails but the order was sent to fulfillment? These aren't technical questions. They're business questions. But teams skip straight to "let's split up the monolith" without answering them. What actually works: Design services around bounded contexts - clear business domains with well-defined responsibilities. Each service should: Own its data completely Have a clear business purpose anyone can explain Be deployable independently Fail independently If you can't explain why a service exists without using the word "microservice", you've already lost. The real truth: Most companies don't need microservices. They need clear boundaries and good domain design. Sometimes that's a monolith with modules. Sometimes it's 5-6 well-designed services. Almost never is it 50 services or 5,000 functions. The architecture should emerge from the business model, not the other way around.

## Notable Comments

```yaml
- id: 1736778600000
  author: "Jonathan Roberts"
  profile: null
  sentiment: "positive"
  content: |
I also see this very often, I use the term NanoServices for the FaaS nightmare. People think things have to be broken down into their smallest unit rather than the bounded context and therefore create distributed NanoServices that talk remotely to each other to perform a single business operation. As soon as you add network partitions into a single operation you end up with chatty services that are less performant, less available and need complex orchestration and roll back processes.
  reactions: 1
  insight: "NanoServices term for FaaS chaos - network partitions create chatty services"
  replies: []

- id: 1736778700000
  author: "Sander Hoogendoorn"
  profile: null
  sentiment: "neutral"
  content: |
Bounded contexts are too big for microservices, they'll become microservices. In my experience, aggregates (as defined by Eric Evans in the blue book) are a better, more granular demarcation.
  reactions: 3
  insight: "Counter-point: aggregates better than bounded contexts for microservice boundaries"
  replies: []

- id: 1736778800000
  author: "Vijay Jayaram"
  profile: null
  sentiment: "question"
  content: |
Maybe the role of an architect was blurred?? with the trend of every senior role focusing on 'system design' as the first step on a white board? Maybe the architecture governance was missed and went unnoticed to create services with overlapping functionalities.
  reactions: 1
  insight: "Questions whether architect role was blurred - missed governance"
  replies: []
```

## Our Engagement

```yaml
- id: 1736778900000
  type: "comment"
  status: "posted"
  sentiment: "positive"
  content: |
Agreed. Architecture emerges from business model, not the other way around.

Start with modular monolith: clear boundaries, clean design, single deployment. Then evaluate based on reality.

Split only when you have evidence: independent scaling needs, separate teams who need autonomy, or 20+ engineers stepping on each other. Most SMEs never reach that point.
  strategy: "Add Context mode - validate thesis + share modular-first approach with specific split criteria"
  replies:
    - id: 1736865600000
      author: "Antonio"
      sentiment: "positive"
      content: |
Hoang Le 100% agree on "modular monolith first" + "split with evidence". Follow-up test: can each module evolve independently over time? If shipping one business capability keeps requiring synchronized changes, the "boundaries" are just coupling with nicer APIs.
      reactions: 0
    - id: 1736866200000
      type: "our_reply"
      status: "draft"
      sentiment: "positive"
      content: |
That's the test. Example: we had "Orders" and "Inventory" as separate modules. Every order feature required inventory changes. The boundary looked clean on the whiteboard but didn't match reality. Merged them into "Fulfillment." Deploys dropped from coordinated releases to independent ships. Synchronized changes aren't failure. They're feedback on where the real boundaries are.
```

## Notes

- Smaller account (656 followers) but solid technical content
- Post aligns with architecture-emerges-from-business philosophy
- Quality comments from experienced architects
- Good opportunity for peer engagement on architecture topics
- Sander Hoogendoorn's counter-point about aggregates vs bounded contexts is worth noting
