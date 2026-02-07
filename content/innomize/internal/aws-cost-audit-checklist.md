---
title: AWS Cost Audit Checklist
type: reference
status: active
author: Innomize
created: 2026-01-13
purpose: Internal checklist for client AWS cost audits
---

# AWS Cost Audit Checklist

Internal reference for Innomize team when conducting AWS cost audits.

## Pre-Audit Setup

### Access Requirements

- [ ] AWS Console access (read-only minimum)
- [ ] Cost Explorer enabled
- [ ] Trusted Advisor access (requires Business/Enterprise Support)
- [ ] Compute Optimizer enabled

### Client Information

| Field | Value |
|-------|-------|
| Client Name | |
| Account ID(s) | |
| Audit Date | |
| Auditor | |
| Monthly Spend (approx) | |
| Primary Region(s) | |

### Baseline Metrics

Capture before starting:

| Metric | Value |
|--------|-------|
| Total monthly spend (avg 3 months) | $ |
| Top service #1 | |
| Top service #2 | |
| Top service #3 | |
| Prod vs non-prod split | % / % |

## Compute Audit

### EC2 Instances

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Instances with <20% avg CPU | | $ | |
| [ ] Instances with <40% max CPU (2 weeks) | | $ | |
| [ ] Stopped instances (>7 days) | | $ | |
| [ ] Old-gen instance types (m4, c4, r4) | | $ | |
| [ ] Non-prod running 24/7 | | $ | |

**Commands**:
```bash
# List all instances
aws ec2 describe-instances --query 'Reservations[*].Instances[*].{ID:InstanceId,Type:InstanceType,State:State.Name}'

# Get CPU metrics
aws cloudwatch get-metric-statistics --namespace AWS/EC2 --metric-name CPUUtilization --dimensions Name=InstanceId,Value=INSTANCE_ID --start-time START --end-time END --period 86400 --statistics Average Maximum
```

### Lambda Functions

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Functions with >1GB memory, using <128MB | | $ | |
| [ ] Functions with >10s avg duration | | $ | |
| [ ] Functions invoked <100/month | | $ | |
| [ ] Provisioned concurrency unused | | $ | |

### ECS/Fargate

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Tasks over-provisioned (CPU/memory) | | $ | |
| [ ] Services with 0 desired count | | $ | |
| [ ] Fargate vs EC2 launch type comparison | | $ | |

## Storage Audit

### EBS Volumes

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Unattached volumes | | $ | |
| [ ] Volumes on stopped instances | | $ | |
| [ ] gp2 volumes (migrate to gp3) | | $ | |
| [ ] Provisioned IOPS underutilized | | $ | |

**Commands**:
```bash
# Unattached volumes
aws ec2 describe-volumes --filters Name=status,Values=available --query 'Volumes[*].{ID:VolumeId,Size:Size,Type:VolumeType}'

# gp2 volumes
aws ec2 describe-volumes --filters Name=volume-type,Values=gp2 --query 'Volumes[*].{ID:VolumeId,Size:Size}'
```

### EBS Snapshots

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Snapshots >90 days old | | $ | |
| [ ] Snapshots from deleted volumes | | $ | |
| [ ] Total snapshot storage | | $ | |

**Commands**:
```bash
# Old snapshots
aws ec2 describe-snapshots --owner-ids self --query 'Snapshots[?StartTime<`2025-10-13`].{ID:SnapshotId,Size:VolumeSize,Date:StartTime}'
```

### S3 Buckets

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Buckets >1TB without lifecycle policy | | $ | |
| [ ] Buckets with no access (90+ days) | | $ | |
| [ ] Versioning enabled with excess versions | | $ | |
| [ ] Cross-region replication costs | | $ | |

### RDS Storage

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Automated backups retention >7 days needed? | | $ | |
| [ ] Manual snapshots >90 days | | $ | |
| [ ] Storage autoscaling enabled? | | | |

## Database Audit

### RDS Instances

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Instances with <20% avg CPU | | $ | |
| [ ] Instances with 0 connections | | $ | |
| [ ] Multi-AZ in non-prod | | $ | |
| [ ] Provisioned IOPS underutilized | | $ | |
| [ ] Old-gen instance classes | | $ | |

### DynamoDB

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Provisioned tables with <20% utilization | | $ | |
| [ ] Tables that should be on-demand | | $ | |
| [ ] Unused GSIs | | $ | |
| [ ] Point-in-time recovery needed? | | | |

### ElastiCache

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Clusters with low utilization | | $ | |
| [ ] Non-prod clusters | | $ | |
| [ ] Reserved nodes coverage | | $ | |

## Network Audit

### Data Transfer

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Inter-region transfer >$100/month | | $ | |
| [ ] Internet egress costs | | $ | |
| [ ] Cross-AZ transfer | | $ | |

### NAT Gateways

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Number of NAT Gateways | | $ | |
| [ ] Data processing costs | | $ | |
| [ ] VPC endpoints could replace? | | $ | |

### Elastic IPs

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Unassociated Elastic IPs | | $ | |

**Commands**:
```bash
aws ec2 describe-addresses --query 'Addresses[?AssociationId==null].{IP:PublicIp,AllocationId:AllocationId}'
```

### Load Balancers

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] ALBs with zero requests (7 days) | | $ | |
| [ ] ALBs with no registered targets | | $ | |
| [ ] Classic Load Balancers | | $ | |

## Commitment Analysis

### Reserved Instances

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] RI utilization % | | | |
| [ ] Expiring RIs (next 30 days) | | | |
| [ ] Instance family mismatches | | | |

### Savings Plans

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Savings Plan utilization % | | | |
| [ ] Coverage gaps | | | |
| [ ] Expiring plans | | | |

### Coverage Opportunities

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] On-demand spend that could be covered | | $ | |
| [ ] Recommended commitment level | | $ | |

## CloudWatch / Monitoring

| Check | Finding | Impact | Notes |
|-------|---------|--------|-------|
| [ ] Log groups without retention policy | | $ | |
| [ ] Log groups >100GB | | $ | |
| [ ] Unused dashboards | | $ | |
| [ ] Unnecessary detailed monitoring | | $ | |

## Findings Summary

### Quick Wins (Do Immediately)

| Finding | Monthly Savings | Effort |
|---------|-----------------|--------|
| | $ | |
| | $ | |
| | $ | |

### Short-Term (This Month)

| Finding | Monthly Savings | Effort |
|---------|-----------------|--------|
| | $ | |
| | $ | |
| | $ | |

### Medium-Term (Next Quarter)

| Finding | Monthly Savings | Effort |
|---------|-----------------|--------|
| | $ | |
| | $ | |
| | $ | |

### Total Identified Savings

| Category | Monthly | Annual |
|----------|---------|--------|
| Quick Wins | $ | $ |
| Short-Term | $ | $ |
| Medium-Term | $ | $ |
| **Total** | **$** | **$** |

## Client Handoff Template

### Executive Summary

*[2-3 sentences on current state and opportunity]*

### Key Findings

1. **[Finding 1]**: [Impact]
2. **[Finding 2]**: [Impact]
3. **[Finding 3]**: [Impact]

### Recommended Actions

| Priority | Action | Savings | Timeline |
|----------|--------|---------|----------|
| 1 | | $ | |
| 2 | | $ | |
| 3 | | $ | |

### Next Steps

- [ ] Review findings with client
- [ ] Prioritize implementation
- [ ] Schedule implementation support (if needed)
- [ ] Set up monthly review cadence

## Monthly Review Template

### Date: ____

| Metric | Last Month | This Month | Change |
|--------|------------|------------|--------|
| Total Spend | $ | $ | % |
| Compute | $ | $ | % |
| Storage | $ | $ | % |
| Database | $ | $ | % |
| Network | $ | $ | % |

### Anomalies Detected

- [ ] None
- [ ] [Describe]

### Actions Taken

-

### Actions for Next Month

-

## Notes

*Additional observations, client-specific context, or follow-up items.*
