---
layout: about
title: about
permalink: /
subtitle: ' "Mathematics is the most beautiful and most powerful creation of the human spirit" - Stefan Banach'

profile:
  align: right
  image: headshot.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
  Taking the hardest path in life.

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm a GenAI researcher focused on agentic systems and foundational model development. Currently leading GenAI initiatives at C-DAC Bangalore, where I've built production systems deployed by high-value clients including Bharat Electronics Limited and Federal Bank of India.

My work spans the full stack of modern LLM systems—from creating the largest internal Indic parallel corpus (1.5M sentences in Hindi and Kannada) for the Bhasini project, to building custom agentic architectures and advanced RAG pipelines. I've optimized inference systems (5.7x latency reduction on text2sql), developed novel agent architectures, and built custom evaluation frameworks from scratch because existing tools didn't meet research-grade standards.

I'm transitioning from applied AI agents to foundational model research. Currently deep-diving into optimizer theory, training dynamics, and model architectures—the mathematical foundations that most practitioners skip. Understanding _why_ something works matters more than just making it work.

**Background:** B.Tech in Electrical Engineering, Tezpur University (2024). 1 year 10 months at C-DAC Bangalore (6 months intern + 1 year 4 months as Project Engineer - GenAI Lead).

**Philosophy:** Mathematics is the only discipline that has never betrayed me—it rewards obsession with clarity. I take the hardest path in everything: Arch Linux, custom Neovim configurations, mathematical first principles. Because true understanding demands it.

**Beyond code:** I've played guitar for 13 years, train in powerlifting, have professional cooking training, and prefer reading research papers to most human conversations. LLMs are more consistent reasoning partners than people.

---

## Technical Stack

### Foundations

- **Languages:** Python, Rust
- **Mathematics:** Optimization theory, information theory, statistical learning theory
- **Dev Environment:** Neovim ([dotfiles](https://github.com/bhaswata08/dotfiles)), Arch Linux

### LLM Development

- **Frameworks:** PyTorch, Transformers, vLLM
- **Training:** LoRA, QLoRA, GRPO (Group Relative Policy Optimization)
- **Optimization:** AWQ quantization, adversarial training
- **Fine-tuning:** Custom reasoning heads, domain-specific adaptations

### LLM Operations

- **Orchestration:** LangChain, LangGraph, DSPy (automated prompt optimization)
- **Observability:** LangSmith, LangFuse
- **Evaluation:** Custom frameworks built from scratch (because DeepEval's non-tool-calling JSON generation is fundamentally flawed)

### Retrieval & Agents

- **RAG Architectures:** GraphRAG, LightRAG, PathRAG, custom agentic splitter with LLM metadata tagging
- **Search:** BM25 sparse retrieval + dense embedding models, hybrid systems
- **Agents:** Custom multi-agent architectures, sliding parent document retrieval, chunk tagging systems

### Infrastructure & Deployment

- **Production:** Systems deployed at BEL, Federal Bank of India
- **Inference:** vLLM optimization, latency reduction (40s → 7s on text2sql)

---

## Key Projects

### Bhasini Indic Parallel Corpus

Built the largest internal parallel corpus for Hindi-Kannada translation (1.5M sentence pairs). Custom pipeline for data collection, cleaning, alignment, and quality assurance. Currently used in India's National Language Translation Mission (Bhasini project).

### Custom Agentic Splitter

Developed novel retrieval architecture using LLMs as metadata taggers with sliding parent document windows and intelligent chunk tagging. Significantly outperforms standard semantic chunking on domain-specific technical documentation.

### Text2SQL Optimization

Reduced chatbot query latency from 40s to 7s through query optimization, caching strategies, and inference pipeline restructuring. Deployed in production for financial sector client.

### Custom Evaluation Framework

Built research-grade LLM evaluation framework from scratch. Implements proper tool calling for structured outputs (unlike DeepEval's JSON-only approach) and supports custom metrics, adversarial testing, and statistical analysis.

### Sanskrit Sutra Classification

Trained adversarial model to eliminate length bias in Sanskrit sutra classification. Implemented custom reasoning head using GRPO with LoRA for improved interpretability and performance.

### Novel Agent Architectures

Designed and implemented custom multi-agent systems for complex reasoning tasks. Architectures focus on decomposition strategies, tool use optimization, and reliable information synthesis.

---

## Achievements

- **Open Source AI Hackathon Winner**
- **Production Deployments:** BEL (Bharat Electronics Limited), Federal Bank of India
- **Data Creation:** 1.5M parallel corpus for national language mission
- **Performance:** 5.7x inference optimization on production systems

---

## Research Interests

- **Foundational Model Training:** Scaling laws, training dynamics, optimization theory
- **Optimizer Theory:** Mathematical foundations of gradient descent, adaptive methods, convergence analysis
- **Agentic Architectures:** Multi-agent systems, reasoning decomposition, tool use
- **Training Stability:** Adversarial robustness, bias elimination, systematic evaluation

_Currently upskilling in foundational model training—moving from applied agent systems to core research in model development and training dynamics._

---

## Writing & Research Notes

I write about the mathematical foundations of modern AI systems—optimizer theory, training dynamics, and the theoretical underpinnings that most practitioners skip. My technical writing assumes comfort with graduate-level mathematics.

Current series: **Optimizer Theory Deep Dive** — tracking my exploration of optimization landscapes, convergence guarantees, and adaptive learning rate methods.

All posts available on this site with full LaTeX support for mathematical notation.

---

## What I'm Learning

- Foundational model training and scaling
- Optimizer theory and training dynamics
- Advanced training techniques and stability analysis
- Mathematical foundations of transformer architectures

---

## Career Goals

**Short-term:** Research position in foundational model development. Dream organization: Anthropic/Deepseek.

**Long-term:** Build a frontier model. Lead research in training dynamics and optimization theory.

**Open to:** Research collaborations, foundational model opportunities, and conversations about optimizer theory over coffee (or async over LLM chat—honestly prefer the latter).

---

## Contact

Available for research collaborations and frontier model opportunities.

[E-mail](bhaswata08@gmail.com)
