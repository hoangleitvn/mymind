---
type: brainstorm
status: active
created: 2026-01-09
tags: [llm, self-improving, research, arxiv, ai-engineering]
---

# Self-Improving LLM Research Papers

Collection of papers on self-improving, self-correcting, and self-optimizing language models.

## Core Paper - Context Evolution

### Agentic Context Engineering (ACE)
- **arXiv:** [2510.04618](https://arxiv.org/abs/2510.04618)
- **Date:** Oct 2025
- **Key Insight:** LLMs improve by evolving context/instructions rather than weights
- **Approach:** Treats context as "evolving playbook" - generation → reflection → curation
- **Results:** +10.6% on agent benchmarks, +8.6% on finance
- **Why it matters:** Model adjusts its own rules/instructions when something goes wrong, no retraining needed

## Self-Rewarding & Meta-Learning

### Self-Rewarding Language Models
- **arXiv:** [2401.10020](https://arxiv.org/abs/2401.10020)
- **Date:** Jan 2024
- **Key Insight:** Model uses LLM-as-a-Judge to provide its own rewards during training
- **Approach:** Iterative DPO training improves both instruction following AND reward quality

### Meta-Rewarding Language Models
- **arXiv:** [2407.19594](https://arxiv.org/abs/2407.19594)
- **Date:** Jul 2024
- **Key Insight:** Model judges its own judgments (meta-level)
- **Approach:** Addresses saturation problem in iterative training

### CREAM: Consistency Regularized Self-Rewarding
- **arXiv:** [2410.12735](https://arxiv.org/abs/2410.12735)
- **Date:** Oct 2024
- **Key Insight:** Uses reward consistency across iterations to regularize training

## Test-Time Self-Improvement

### Self-Improving LLM Agents at Test-Time
- **arXiv:** [2510.07841](https://arxiv.org/abs/2510.07841)
- **Date:** Oct 2025
- **Key Insight:** Test-time self-improvement without retraining
- **Approach:** Self-awareness → self-data augmentation → improvement

### SEAL: Self-Adapting Language Models
- **arXiv:** [2506.10943](https://arxiv.org/abs/2506.10943)
- **Date:** Jun 2025
- **Key Insight:** LLMs generate their own fine-tuning data and update directives

## Prompt & Instruction Optimization

### Self-Supervised Prompt Optimization (SPO)
- **arXiv:** [2502.06855](https://arxiv.org/abs/2502.06855)
- **Date:** Feb 2025
- **Key Insight:** Discovers effective prompts without external reference
- **Approach:** Pairwise output comparisons + LLM optimizer
- **Results:** 1.1% to 5.6% cost of existing methods

### OPRO: Large Language Models as Optimizers
- **arXiv:** [2309.03409](https://arxiv.org/abs/2309.03409)
- **Date:** Sep 2023
- **Key Insight:** Optimization task described in natural language
- **Approach:** LLM generates new solutions from prompts containing previous solutions with values

### Self-Evolving LLMs via Continual Instruction Tuning
- **arXiv:** [2509.18133](https://arxiv.org/abs/2509.18133)
- **Date:** Sep 2025
- **Key Insight:** Autonomous adaptation to dynamic tasks without heavy external intervention

### Tournament of Prompts (DEEVO)
- **arXiv:** [2506.00178](https://arxiv.org/abs/2506.00178)
- **Date:** May 2025
- **Key Insight:** Multi-Agent Debate as fitness function for prompt evolution

## Self-Debugging & Self-Correction

### Teaching Large Language Models to Self-Debug
- **arXiv:** [2304.05128](https://arxiv.org/abs/2304.05128)
- **Date:** Apr 2023
- **Key Insight:** Rubber duck debugging - model identifies mistakes by investigating execution results
- **Results:** +2-3% on Spider, +9% on hardest problems, up to +12% on TransCoder/MBPP

### Training LLMs to Better Self-Debug and Explain Code
- **arXiv:** [2405.18649](https://arxiv.org/abs/2405.18649)
- **Date:** May 2024
- **Key Insight:** RL with reward considering code explanation semantics + unit test passing

### LASSI: LLM-based Automated Self-Correcting Pipeline
- **arXiv:** [2407.01638](https://arxiv.org/abs/2407.01638)
- **Date:** Jul 2024
- **Key Insight:** Self-correcting loops with compilation/execution feedback
- **Results:** 80% OpenMP→CUDA, 85% CUDA→OpenMP translations correct

## Surveys

### Self-Improvement in Multimodal LLMs: A Survey
- **arXiv:** [2510.02665](https://arxiv.org/abs/2510.02665)
- **Date:** Oct 2025
- **Coverage:** Data collection, data organization, model optimization

### Efficient Prompting Methods for LLMs: A Survey
- **arXiv:** [2404.01077](https://arxiv.org/abs/2404.01077)
- **Date:** Apr 2024

## Resources

- [GitHub: self-correction-llm-papers](https://github.com/teacherpeterpan/self-correction-llm-papers) - Curated collection of self-correcting LLM papers

## My Interest / Application

**For Claude Code workflow:**
- ACE pattern: evolving context/playbook that improves from execution feedback
- Self-debugging: model identifies and fixes mistakes from execution results
- Prompt optimization: iteratively improve instructions based on outcomes

**Potential experiment:**
- Build spec-driven framework with self-improving rules
- Context evolves based on what works/fails
- Feedback loops without retraining
