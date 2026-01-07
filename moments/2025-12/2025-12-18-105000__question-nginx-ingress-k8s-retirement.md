---
id: 20251218-150000
type: question
status: raw
themes: [infrastructure, kubernetes, cloud-native]
tags: [nginx, ingress, kubernetes, migration, devops]
captured: 2025-12-18
---

# NGINX Ingress Controller Retirement - Finding Alternatives

## Raw Capture

NGINX Ingress for K8s will be retired. Need to find an alternative. Have approximately 3 months to evaluate and migrate.

## Context

- Kubernetes SIG Network announced retirement of Ingress NGINX
- Best-effort maintenance continues until March 2026
- After that: no releases, no bugfixes, no security patches
- Reason: insufficient maintainership + technical debt + security concerns (snippets annotations)

## Key Alternatives to Evaluate

1. **Gateway API** - Modern replacement for Ingress spec, role-based design
2. **F5 NGINX Ingress Controller** - Open source, Apache 2.0, dedicated team, smooth transition
3. **Traefik** - Has nginx-style annotations compatibility
4. **HAProxy Kubernetes Ingress Controller** - Direct replacement, production-ready
5. **Service Mesh ingress** - Istio, Cilium (if already using mesh)
6. **NGINX Gateway Fabric** - Successor to OSS NGINX Ingress, path to Gateway API
7. **Envoy Gateway** - Lightweight, vendor-neutral, first-class Gateway API support

## Migration Notes

- Don't rush to migrate to Gateway API AND change ingress controller at same time
- Solve immediate ingress problem first, then consider Gateway API later
- Check current usage: `kubectl get pods --all-namespaces --selector app.kubernetes.io/name=ingress-nginx`

## Content Potential

- Platform: LinkedIn
- Format: Post or short article
- Angle: Practical migration guide for engineering teams
- Related: infrastructure decisions, cloud-native architecture

## Follow-up

- Evaluate which alternative fits current stack
- Test migration path in staging
- Document migration steps for team
- Consider writing about the migration experience

## Sources

- [Kubernetes Official Blog](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/)
- [NGINX Community Blog](https://blog.nginx.org/blog/the-ingress-nginx-alternative-open-source-nginx-ingress-controller-for-the-long-term)
- [Traefik Migration Guide](https://traefik.io/blog/migrate-from-ingress-nginx-to-traefik-now)
- [HAProxy Alternative](https://www.haproxy.com/blog/ingress-nginx-is-retiring)
