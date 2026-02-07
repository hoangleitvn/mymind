# Plan: FinOps Playbook - AWS Cost Audit Tool

## Overview

Build an open-source AWS cost audit tool that automates the Innomize playbook methodology. Combines CLI scanning, rule engine, templates, and AI-assisted recommendations.

**Repository:** `finops-playbook`
**Tagline:** "The AWS cost audit methodology, automated."

## Goals

1. **Automate** existing playbook checks (no manual AWS CLI)
2. **Standardize** audit process across Innomize team
3. **Open source** to build community and credibility
4. **AI-assist** interpretation and prioritization

## Development Approach: Spec-Driven

Following mizemind methodology:
1. Write specs before code
2. Specs define requirements at multiple detail levels
3. Plans track implementation lifecycle
4. Session reports capture decisions

**Spec location:** `specs/finops-playbook/`

## Architecture (Aligned with mizemind-cli patterns)

```
finops-playbook/
├── README.md                    # Project overview, quick start
├── CLAUDE.md                    # AI development guidance
├── docs/
│   ├── playbook.md             # Full methodology (from blog)
│   ├── getting-started.md      # Installation, first audit
│   └── extending.md            # Adding custom rules
├── rules/
│   ├── compute.yaml            # EC2, Lambda, ECS checks
│   ├── storage.yaml            # EBS, S3, snapshots
│   ├── database.yaml           # RDS, DynamoDB
│   ├── network.yaml            # NAT, EIP, ALB, data transfer
│   └── commitments.yaml        # RIs, Savings Plans
├── templates/
│   ├── audit-checklist.md      # Interactive checklist
│   ├── findings-report.md      # Client handoff template
│   ├── executive-summary.md    # Leadership summary
│   └── monthly-review.md       # Ongoing tracking
├── finops_playbook/             # Package (underscore for Python)
│   ├── __init__.py
│   ├── cli.py                  # Click group entry point
│   ├── commands/               # Command handlers
│   │   ├── scan_cmd.py         # Scan AWS resources
│   │   ├── report_cmd.py       # Generate reports
│   │   ├── config_cmd.py       # Configuration management
│   │   └── ai_cmd.py           # AI-assisted features
│   ├── core/                   # Shared utilities
│   │   ├── result.py           # Result[T, E] type (from mizemind)
│   │   ├── ui.py               # Rich console output
│   │   ├── config.py           # Layered configuration
│   │   └── workspace.py        # Workspace detection
│   ├── scanner/                # AWS scanning logic
│   │   ├── aws_client.py       # boto3 wrapper
│   │   ├── compute.py          # EC2, Lambda scanners
│   │   ├── storage.py          # EBS, S3 scanners
│   │   ├── database.py         # RDS, DynamoDB scanners
│   │   └── network.py          # NAT, EIP, ALB scanners
│   ├── rules/                  # Rule engine
│   │   ├── models.py           # Rule dataclasses (frozen)
│   │   ├── parser.py           # YAML rule parser
│   │   ├── evaluator.py        # Rule evaluation
│   │   └── pricing.py          # Cost estimation
│   ├── reporter/               # Output generation
│   │   ├── json_reporter.py
│   │   ├── markdown_reporter.py
│   │   └── template_renderer.py
│   ├── ai/                     # AI integration
│   │   ├── interpreter.py      # Findings analysis
│   │   └── agent.py            # Agentic mode
│   └── resources/              # Embedded resources
│       └── templates/          # Report templates
├── tests/
├── pyproject.toml              # Hatchling build
└── Makefile
```

## Key Patterns from mizemind-cli

| Pattern | How We Use It |
|---------|---------------|
| **Result[T, E]** | All AWS calls return Result, no exceptions for expected failures |
| **Frozen dataclasses** | Rule, Finding, AuditResult are immutable |
| **Click + Rich** | CLI framework with styled output |
| **Layered config** | CLI → env → workspace → global → defaults |
| **Command modules** | Each command in `commands/name_cmd.py` |
| **Resource loading** | Templates via importlib.resources |
| **UI module** | Centralized print_success, print_error, print_table |
| **Workspace detection** | Find project root via marker files |

## Phased Delivery

### Phase 1: Foundation + MVP (Week 1-3)
- [ ] Repository setup (GitHub, MIT license)
- [ ] CLAUDE.md with development patterns
- [ ] Core patterns (Result type, UI module, config)
- [ ] Basic CLI skeleton (Click + Rich)
- [ ] Rule schema definition (YAML structure)
- [ ] AWS client wrapper with multi-account support
- [ ] 10 core checks ported from checklist
- [ ] Cost estimation per finding (AWS Pricing API)
- [ ] JSON + Markdown output
- [ ] Multi-region scanning
- [ ] README with installation

**MVP Checks (10 from playbook):**
1. EC2 low CPU (<20% avg)
2. EC2 old-gen instance types (m4, c4, r4)
3. Unattached EBS volumes
4. gp2 volumes (migrate to gp3)
5. Old snapshots (>90 days)
6. Unassociated Elastic IPs
7. RDS low CPU (<20% avg)
8. RDS Multi-AZ in non-prod
9. NAT Gateway count per VPC
10. Idle load balancers (0 requests)

**Multi-account approach:**
- Support AWS profiles and assume-role
- Aggregate findings across accounts
- Tag findings with account ID

### Phase 2: Full Scanner + Reports (Week 4-6)
- [ ] All playbook checks automated (~30 rules)
- [ ] CloudWatch metrics integration
- [ ] Cost Explorer data pull
- [ ] Configuration file support
- [ ] Report templates (executive summary, client handoff, monthly review)
- [ ] Findings prioritization logic (quick wins → strategic)
- [ ] CSV export for spreadsheets
- [ ] Compliance flags (skip rules for HIPAA, etc.)

### Phase 3: AI Layer (Week 7-9)
- [ ] OpenAI/Anthropic integration
- [ ] Findings interpreter (explain in business context)
- [ ] Priority recommendations with reasoning
- [ ] Natural language summary generation
- [ ] Chat mode for Q&A about findings
- [ ] Custom prompt templates

### Phase 4: Agentic Mode (Week 10+)
- [ ] AI can run scans autonomously
- [ ] Remediation suggestions with approval workflow
- [ ] "What-if" analysis for proposed changes
- [ ] Automated monthly review scheduling
- [ ] Slack/Teams notifications

## Data Models (Frozen Dataclasses)

```python
from dataclasses import dataclass
from enum import Enum
from typing import Optional
from decimal import Decimal

class Severity(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class Effort(Enum):
    QUICK_WIN = "quick_win"      # < 1 hour
    LOW = "low"                   # 1-4 hours
    MEDIUM = "medium"             # 1-2 days
    HIGH = "high"                 # 1+ weeks

@dataclass(frozen=True)
class Rule:
    """Immutable rule definition loaded from YAML."""
    id: str
    name: str
    description: str
    category: str
    severity: Severity
    effort: Effort
    risk: str
    service: str
    check_type: str              # "metric", "resource_state", "tag_check"
    condition: dict              # Parsed condition
    recommendation: str
    remediation_effort: str
    rollback: str
    docs_url: Optional[str]
    compliance_skip: list[str]   # ["hipaa", "pci"] - skip for these

@dataclass(frozen=True)
class Finding:
    """Immutable finding from a scan."""
    rule_id: str
    resource_id: str
    resource_type: str
    account_id: str
    region: str
    current_value: str           # "15% CPU avg"
    threshold: str               # "< 20%"
    estimated_monthly_savings: Decimal
    estimated_annual_savings: Decimal
    recommendation: str
    metadata: dict               # Additional context

@dataclass(frozen=True)
class AuditResult:
    """Complete audit result."""
    account_ids: list[str]
    regions: list[str]
    scan_timestamp: str
    findings: list[Finding]
    total_monthly_savings: Decimal
    total_annual_savings: Decimal
    findings_by_category: dict[str, list[Finding]]
    findings_by_effort: dict[str, list[Finding]]
```

## Rule Definition Schema

```yaml
# rules/compute.yaml
version: "1.0"
rules:
  - id: ec2-low-cpu
    name: "EC2 instances with low CPU utilization"
    description: "Instances averaging below threshold are overprovisioned"
    category: compute
    severity: medium
    effort: low
    risk: low

    # Skip for compliance
    compliance_skip: []          # Add "hipaa", "pci" to skip

    # Check definition
    service: ec2
    check_type: metric
    metric: CPUUtilization
    period_days: 14
    condition:
      operator: less_than
      value: 20
      unit: percent

    # Action guidance
    recommendation: "Right-size to smaller instance type"
    remediation_effort: "1-2 hours per instance"
    rollback: "Resize back up (minutes, no data loss)"

    # Links
    docs_url: "https://innomizetech.com/blog/aws-cost-optimization..."
    aws_doc: "https://docs.aws.amazon.com/..."

  - id: ec2-old-gen
    name: "EC2 old-generation instance types"
    description: "m4, c4, r4, m5, c5 should migrate to m6i, m7i, c6i, c7i"
    category: compute
    severity: low
    effort: low
    risk: low
    compliance_skip: []

    service: ec2
    check_type: resource_state
    condition:
      field: instance_type
      operator: matches_regex
      value: "^(m4|c4|r4|m5|c5)\\."

    recommendation: "Migrate to current-gen instances (m6i, m7i, c6i, c7i) or Graviton"
    remediation_effort: "Stop, change type, start (5-10 min downtime)"
    rollback: "Change type back (same process)"
    docs_url: "https://innomizetech.com/blog/aws-cost-optimization..."
```

## CLI Interface

```bash
# Basic scan
finops-playbook scan

# Scan specific categories
finops-playbook scan --category compute,storage

# Output formats
finops-playbook scan --output json
finops-playbook scan --output markdown --file report.md

# Generate reports
finops-playbook report --template executive-summary
finops-playbook report --template client-handoff

# AI-assisted mode
finops-playbook analyze              # Interpret findings
finops-playbook chat                 # Interactive Q&A

# Agentic mode (future)
finops-playbook agent --approve      # AI runs with approval prompts
```

## Differentiation vs Existing Tools

| Feature | finops-playbook | Cloud Custodian | Komiser | Infracost |
|---------|-----------------|-----------------|---------|-----------|
| Playbook methodology | ✓ | ✗ | ✗ | ✗ |
| Prioritization logic | ✓ | ✗ | ✗ | ✗ |
| AI interpretation | ✓ | ✗ | ✗ | ✗ |
| Report templates | ✓ | ✗ | Limited | ✗ |
| Pre-deploy checks | ✗ | ✓ | ✗ | ✓ |
| Policy enforcement | ✗ | ✓ | ✗ | ✗ |

**Positioning:** Complements existing tools. Use Infracost for pre-deploy, Cloud Custodian for enforcement, finops-playbook for audits.

## Content Synergy

- Each check links to blog posts explaining the "why"
- Findings can generate content ideas
- Community contributions improve both tool and content
- GitHub stars drive traffic to Innomize blog

## Specs to Write (Spec-Driven Development)

Before coding, write specs for each component. Store in `specs/finops-playbook/`.

### Required Specs

| Spec | Priority | Description |
|------|----------|-------------|
| `01-overview.md` | P0 | Project vision, goals, non-goals |
| `02-architecture.md` | P0 | System design, component interactions |
| `03-rule-schema.md` | P0 | YAML rule format, validation rules |
| `04-cli-interface.md` | P0 | Commands, flags, output formats |
| `05-aws-scanner.md` | P1 | boto3 patterns, multi-account, error handling |
| `06-cost-estimation.md` | P1 | Pricing API integration, calculation logic |
| `07-reporter.md` | P1 | Output formats, template system |
| `08-configuration.md` | P2 | Layered config, environment variables |
| `09-ai-integration.md` | P2 | LLM prompts, interpreter, agent mode |
| `10-testing.md` | P2 | Test strategy, mocking AWS |

### Spec Template

```markdown
---
title: Component Name
type: spec
status: draft
created: YYYY-MM-DD
---

# Component Name

## Purpose
What this component does and why it exists.

## Requirements
- Functional requirements (must have)
- Non-functional requirements (performance, security)

## Design
Architecture and key decisions.

## Interface
Public API, CLI commands, or configuration options.

## Dependencies
What this component needs from others.

## Testing
How to verify this component works correctly.
```

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Tech stack | Python + Click + Rich | AI integration, boto3 native, team familiarity |
| Multi-account | Phase 1 (MVP) | Most clients have multiple accounts |
| Cost estimation | Included | High value, differentiator |
| Project name | `finops-playbook` | Industry term, expandable beyond AWS |
| Architecture | Follow mizemind-cli patterns | Proven patterns, consistency |

## Open Questions (Resolved)

- ~~Compliance handling~~ → Yes, add compliance flags in Phase 2
- ~~Multi-account~~ → Yes, Phase 1 with profiles + assume-role
- ~~Cost calculation~~ → Yes, AWS Pricing API integration

## Operational Cost Requirements

**Requirement:** Users must understand the cost of running this tool before using it. Document clearly in README and `--dry-run` output.

### AWS API Costs

| API | Cost | When Used | Notes |
|-----|------|-----------|-------|
| **Cost Explorer** | $0.01 per request | Cost data, spend trends | Can add up with frequent scans |
| **CloudWatch GetMetricStatistics** | $0.01 per 1,000 requests | CPU, memory metrics | 14-day lookback = multiple requests per resource |
| **Describe APIs** (EC2, RDS, S3, etc.) | Free | Resource inventory | No cost, but rate limited |
| **Pricing API** | Free | Cost estimation | No cost |
| **Trusted Advisor** | Free (with Business/Enterprise Support) | Additional checks | Requires support plan |
| **Compute Optimizer** | Free | Right-sizing recommendations | No cost |

### Estimated Cost Per Scan

| Account Size | Resources | Est. API Calls | Est. Cost |
|--------------|-----------|----------------|-----------|
| Small | <50 | ~500 | $0.05-0.10 |
| Medium | 50-200 | ~2,000 | $0.20-0.50 |
| Large | 200-500 | ~5,000 | $0.50-1.00 |
| Enterprise | 500+ | ~10,000+ | $1.00-5.00 |

**Cost drivers:**
- CloudWatch metrics (14-day lookback per resource)
- Cost Explorer queries (per service, per region)
- Number of regions scanned

### AI/LLM Costs (Phase 3+)

| Provider | Model | Est. Cost Per Analysis |
|----------|-------|------------------------|
| OpenAI | GPT-4o | ~$0.01-0.05 per findings summary |
| Anthropic | Claude Sonnet | ~$0.01-0.03 per findings summary |
| Anthropic | Claude Opus | ~$0.05-0.15 per detailed analysis |

**Note:** AI costs are optional. Core scanning works without AI.

### Rate Limiting Considerations

| Service | Limit | Mitigation |
|---------|-------|------------|
| Cost Explorer | 5 requests/second | Built-in throttling, batch requests |
| CloudWatch | 400 requests/second | Parallel with backoff |
| EC2 Describe | 100 requests/second | Pagination, caching |

### Cost Transparency Features (Required)

1. **`--dry-run` flag** - Show estimated API calls and cost before scanning
2. **`--estimate-cost` flag** - Calculate cost without running scan
3. **Post-scan summary** - Show actual API calls made and estimated cost
4. **README section** - Clear cost documentation with examples
5. **`--skip-metrics` flag** - Skip CloudWatch (faster, cheaper, less accurate)

### Example CLI Output

```bash
$ finops-playbook scan --dry-run

Dry Run Summary
===============
Accounts: 2 (prod, staging)
Regions: 3 (us-east-1, us-west-2, eu-west-1)
Resources to scan: ~150

Estimated API Calls:
  - EC2 Describe: 6 calls (free)
  - RDS Describe: 6 calls (free)
  - CloudWatch GetMetricStatistics: ~450 calls ($0.45)
  - Cost Explorer: 12 calls ($0.12)
  - Pricing API: 30 calls (free)

Estimated Total Cost: $0.57

Run without --dry-run to proceed.
```

## Future Considerations

1. **Web interface** - Dashboard for visualizing trends (post Phase 4)
2. **Multi-cloud** - GCP/Azure support (future product expansion)
3. **SaaS offering** - Hosted version with scheduling (if demand exists)

## Files to Create (Phase 1)

| File | Purpose |
|------|---------|
| `specs/finops-playbook/01-overview.md` | Project spec (write first) |
| `specs/finops-playbook/02-architecture.md` | System design spec |
| `specs/finops-playbook/03-rule-schema.md` | YAML rule format spec |
| GitHub repo: `innomize/finops-playbook` | Public repository |
| `README.md` | Project overview, installation |
| `CLAUDE.md` | Development patterns and constraints |
| `pyproject.toml` | Package configuration |
| `finops_playbook/core/result.py` | Result type (from mizemind) |
| `finops_playbook/core/ui.py` | Rich output utilities |
| `finops_playbook/cli.py` | Click entry point |
| `rules/compute.yaml` | First 5 compute rules |
| `rules/storage.yaml` | First 5 storage rules |

## Verification (Phase 1 MVP)

- [ ] `pip install -e .` installs without errors
- [ ] `finops-playbook --help` shows available commands
- [ ] `finops-playbook scan --profile default` runs against real AWS account
- [ ] `finops-playbook scan --output json` produces valid JSON
- [ ] `finops-playbook scan --output markdown` generates readable report
- [ ] At least 10 checks return accurate findings
- [ ] Cost estimates are within 20% of manual calculation
- [ ] Multi-account scan with `--profile` flag works
- [ ] README installation steps work on clean Python 3.11+ environment

## Next Steps After Approval

### Immediate (Spec-Driven)

1. **Write specs first** - Create `specs/finops-playbook/` with overview and architecture specs
2. **Define rule schema** - Finalize YAML format before implementation
3. **Create repository** - GitHub repo with MIT license
4. **Copy patterns** - Port Result type, UI module from mizemind-cli
5. **Implement MVP** - 10 checks with cost estimation

### Content Synergy

- Link each rule to relevant blog posts
- Use findings data to inform future content
- Share tool progress on LinkedIn (build in public)

## Source Materials

| Resource | Location | Use |
|----------|----------|-----|
| Playbook article | `content/innomize/aws-cost-audit-playbook.md` | Methodology source |
| Internal checklist | `content/innomize/internal/aws-cost-audit-checklist.md` | Check definitions, AWS commands |
| mizemind-cli | `/Users/hoangle/Documents/MizeStudio/.../mizemind-cli` | Architecture patterns |
| Part 1 (Hidden Costs) | innomizetech.com blog | Rule documentation links |
| Part 2 (Strategies) | innomizetech.com blog | Remediation guidance |
