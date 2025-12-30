export const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/alexandrakeamy' },
  { label: 'GitHub', href: 'https://github.com/ajkeamy' },
];

export const featuredProjects = [
  {
    title: 'Agentic OSINT / Threat Intel Pipeline',
    blurb:
      'Deterministic orchestration (LangGraph-style) for RSS + search + scraping, producing structured intel summaries and reports.',
    tags: ['Agents', 'LangGraph', 'FastAPI', 'RAG'],
    links: [{ label: 'Projects', href: '/projects' }],
  },
  {
    title: 'Graph-RAG & Knowledge Graph Grounding',
    blurb:
      'Grounding patterns that improve traceability and reduce hallucinations using graph retrieval and evaluable outputs.',
    tags: ['Knowledge Graphs', 'Graph-RAG', 'Evaluation'],
    links: [{ label: 'Writing', href: '/writing' }],
  },
  {
    title: 'Secure / Constrained LLM Systems',
    blurb:
      'LLM systems designed for real constraints: air-gapped workflows, governance, and deployment beyond demos.',
    tags: ['Secure AI', 'LLMOps', 'Reliability'],
    links: [{ label: 'Contact', href: '/contact' }],
  },
];

export const contentTopics = [
  { title: 'Agentic AI (production-grade)', desc: 'Orchestration patterns, guardrails, eval loops, failure modes.' },
  { title: 'RAG that doesn’t lie', desc: 'Chunking, reranking, confidence, citations, traceability.' },
  { title: 'Secure deployments', desc: 'How design changes without internet access or with tight governance.' },
  { title: 'Build in public (credibly)', desc: 'Teaching what works, what breaks, and how to ship.' },
];
