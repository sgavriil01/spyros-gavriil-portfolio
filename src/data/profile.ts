export const profile = {
  name: "Spyros Gavriil",
  location: "Nicosia, Cyprus",
  email: "spyrosgavriil01@gmail.com",
  github: "https://github.com/sgavriil01",
  linkedin: "https://linkedin.com/in/spyros-gavriil",
  cv: "/Spyros_Gavriil_CV_2026_27.pdf",
  profileImage: "/profile.png",
  tagline:
    "Computer Science student building reliable backend systems, APIs, and infrastructure-minded software.",
  bio: "I focus on practical backend systems, dependable APIs, and software that stays understandable as it grows.",
  status: "Software Engineering Intern at Intergo Telecom.",
  currentBuild: {
    name: "pozare",
    url: "https://pozare.app/",
    logo: "/logo.png",
    description:
      "A mobile-first event photo-sharing platform where guests upload photos through a QR code, with no app required.",
  },
  opportunity:
    "Seeking graduate software engineering roles worldwide, especially in fintech and trading technology.",
  education: {
    university: "University of Cyprus",
    degree: "Bachelor of Computer Science",
    graduation: "June 2027",
    gpa: "8.18 / 10",
  },
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  description: string;
  focus: string[];
  image?: string;
  github?: string;
  demo?: string;
  highlight?: boolean;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    id: "forgequeue",
    name: "ForgeQueue",
    summary: "Durable PostgreSQL-backed job queue in Go",
    stack: ["Go", "PostgreSQL", "Docker", "Prometheus", "Grafana", "k6"],
    image: "/projects/previews/forgequeue-grafana.png",
    description:
      "Built a durable job queue in Go with HTTP job submission, concurrent processing, retries, dead-letter jobs, lease-based recovery, and observability.",
    focus: [
      "Built concurrent job claiming with atomic FOR UPDATE SKIP LOCKED, scaling processing throughput 9.4× from 1 to 10 workers",
      "Implemented lease heartbeats, crash recovery, retries, and stale-worker protection",
      "Reduced job-claim query time 15× (2.51 to 0.17 ms) through indexing",
      "Added Prometheus/Grafana observability and 64 Go tests, including 18 database integration tests run in CI with race detection",
    ],
    github: "https://github.com/sgavriil01/forgequeue",
    highlight: true,
  },
  {
    id: "edge-llm-thesis",
    name: "LLM Execution Across the Edge Continuum",
    summary: "Undergraduate thesis on edge–cloud LLM routing",
    stack: ["Python", "NVIDIA Jetson", "Simulation", "Edge Computing"],
    description:
      "Undergraduate thesis extending a Python edge–cloud LLM simulator to study where LLM inference should run across edge devices and the cloud. The code is private, as it is part of ongoing thesis work.",
    focus: [
      "Added availability- and latency-aware routing, network-delay modeling, and concurrency-slot queues to the simulator",
      "Automated 339 simulation runs across routing, placement, and hardware scenarios",
      "Validated Jetson AGX Orin energy predictions to 5.10% held-out error",
    ],
    highlight: true,
  },
  {
    id: "exactly-once-rpc",
    name: "Exactly-Once RPC Processing",
    summary: "Crash-recoverable RPC system with durable deduplication",
    stack: ["Go", "bbolt", "CloudLab", "Distributed Systems"],
    description:
      "University team project: a crash-recoverable RPC system that guarantees exactly-once processing through durable request deduplication, result replay, and acknowledgement-based garbage collection.",
    focus: [
      "Co-developed durable request deduplication and result replay, preventing duplicate effects across 50,000 replayed requests",
      "Implemented acknowledgement-based garbage collection of stored results",
      "Evaluated on 3 CloudLab servers; the team's GC optimization cut p99 latency 67% (10.33 to 3.40 ms) at 1,024 clients",
    ],
    github: "https://github.com/tsembp/rifl-go",
    highlight: true,
  },
  {
    id: "osrh",
    name: "One-Stop Ride-Hail (OSRH)",
    summary: "Ride-hailing backend with optimized SQL procedures",
    stack: ["T-SQL", "SQL Server", "Flask", "React", "Python"],
    image: "/projects/previews/osrh.png",
    gallery: [
      "/projects/previews/1.png",
      "/projects/previews/2.png",
      "/projects/previews/3.png",
    ],
    description:
      "Built a ride-hailing platform with performance-focused SQL design and strict server-side security checks.",
    focus: [
      "Optimized indexed T-SQL procedures for sub-second performance on 10k+ rows",
      "Profiled and tuned transactional queries in SQL Server",
      "Implemented secure authorization controls to prevent privilege escalation",
    ],
    github: "https://github.com/tsembp/one-stop-ride-hail",
    highlight: true,
  },
  {
    id: "ai-finance-tracker",
    name: "Personal Finance Tracker",
    summary: "Python finance tracker with CSV storage and trend plots",
    stack: ["Python", "Tkinter", "pandas", "matplotlib", "CSV"],
    image: "/projects/previews/finance-tracker.svg",
    description:
      "Built a personal finance tracker for recording income and expenses, viewing transactions by date range, and plotting spending trends from CSV-backed data.",
    focus: [
      "Added transaction entry with date, amount, category, and description validation",
      "Used pandas and CSV storage for filtering and managing finance records",
      "Generated income and expense trend plots with matplotlib",
    ],
    github: "https://github.com/sgavriil01/Personal-Finance-Tracker",
    highlight: false,
  },
  {
    id: "sms-platform",
    name: "SMS Platform Microservice",
    summary: "Asynchronous SMS processing service with PostgreSQL and Redpanda",
    stack: ["Java 21", "Quarkus", "PostgreSQL", "Redpanda", "Docker"],
    image: "/projects/previews/Swagger-SMS.png",
    description:
      "Built a Java/Quarkus microservice that simulates an SMS messaging platform. Messages are validated, persisted with a PENDING state, published for asynchronous processing, and later updated to DELIVERED or FAILED.",
    focus: [
      "Designed REST APIs for sending, retrieving, listing, and searching SMS messages",
      "Used PostgreSQL as the source of truth for message state",
      "Implemented asynchronous message processing through Kafka-compatible Redpanda",
      "Added structured validation, Swagger/OpenAPI documentation, Docker Compose setup, and tests",
    ],
    github: "https://github.com/sgavriil01/sms-platform",
    highlight: true,
  },
  {
    id: "polyglot",
    name: "Polyglot Meeting Assistant",
    summary: "Multilingual meeting assistant with searchable transcripts",
    stack: ["FastAPI", "Whisper", "FAISS", "React", "Python"],
    image: "/projects/previews/Polyglot.png",
    description:
      "Built a multilingual meeting assistant that supports semantic search over transcripts using an asynchronous FastAPI backend and FAISS vector indexing.",
    focus: [
      "Integrated FAISS-based vector search for transcript retrieval",
      "Implemented bilingual transcription flow for English and Greek audio",
      "Designed parallel chunk processing for long audio recordings",
    ],
    github: "https://github.com/sgavriil01/polyglot-meeting-assistant",
    highlight: true,
  },
  {
    id: "spread-service",
    name: "Spread Management Service",
    summary: "Small Go service built to learn backend fundamentals in Go",
    stack: ["Go", "HTTP API", "Docker", "Unit Tests"],
    image: "/projects/previews/golang.png",
    description:
      "Built a small HTTP service in Go for managing spreads for trading instruments. This was mainly a learning project to practice Go basics, API design, routing, testing, and containerized service structure.",
    focus: [
      "Implemented basic HTTP endpoints for health checks, symbols, and spread management",
      "Practiced idiomatic Go project structure with cmd and internal packages",
      "Added unit tests and Docker support for local execution",
    ],
    github: "https://github.com/sgavriil01/spread-service",
    highlight: false,
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  description: string;
  highlights: string[];
  stack: string[];
  category: "work" | "open-source" | "achievement" | "education";
  logo?: string;
  logoSurface?: "light" | "dark";
  github?: string;
  link?: string;
  linkLabel?: string;
  incoming?: boolean;
};

export const experience: Experience[] = [
  {
    id: "pozare",
    company: "pozare",
    role: "Founding Engineer",
    dates: "Sep 2026 - Present",
    location: "Nicosia, Cyprus",
    description:
      "Building a mobile-first event photo-sharing platform that helps hosts collect and share every guest's perspective without requiring an app download.",
    highlights: [
      "Engineered Go/PostgreSQL backend services with Cloudflare object storage, presigned uploads, and asynchronous image-processing workflows",
      "Built background workers for thumbnail generation, upload rate limiting, and event-specific workflows",
      "Deployed containerized services on Railway",
    ],
    stack: ["Go", "PostgreSQL", "Cloudflare", "Docker", "Railway"],
    category: "work",
    logo: "/logo.png",
    logoSurface: "dark",
    link: "https://pozare.app/",
    linkLabel: "Visit pozare",
  },
  {
    id: "intergo",
    company: "Intergo Telecom",
    role: "Software Engineering Intern",
    dates: "Jun 2026 - Present",
    location: "Remote",
    description:
      "Backend engineering for SIP trunk management and billing in a telecom and CPaaS platform.",
    highlights: [
      "Primary author of a Java/Quarkus SIP trunk backend built from scratch, covering lifecycle, DID assignment, and call settings; backed by 315 automated tests",
      "Implemented billing webhook reconciliation and compensating actions for partial failures across external APIs and MongoDB",
      "Built 2 incremental billing sync workflows using per-customer Redis watermarks and stored-record fallbacks",
    ],
    stack: ["Java", "Quarkus", "MongoDB", "Redis", "REST APIs"],
    category: "work",
    logo: "/intergo-telecom.webp",
    logoSurface: "light",
    link: "https://intergotelecom.com/",
    linkLabel: "Company",
    incoming: false,
  },
  {
    id: "cyens",
    company: "CYENS Centre of Excellence",
    role: "Software Engineering Intern",
    dates: "Jun 2025 - Sep 2025",
    location: "Nicosia, Cyprus",
    description:
      "Developed features for an English/Greek AI storytelling platform.",
    highlights: [
      "Developed English/Greek AI storytelling workflows using OpenAI APIs, LangChain, and structured prompts for branching narratives",
      "Improved text-to-speech and image-generation pipelines and resolved 10+ defects",
      "Supported successful internal proof-of-concept testing",
    ],
    stack: ["Python", "OpenAI API", "LangChain", "TTS"],
    category: "work",
    logo: "/rise_ltd_cyprus_logo.jpg",
    logoSurface: "light",
    link: "https://www.cyens.org.cy",
    linkLabel: "Company",
  },
  {
    id: "pyrefly",
    company: "Meta Platforms - Pyrefly",
    role: "Open Source Contributor",
    dates: "Jan 2026 - Mar 2026",
    location: "Remote",
    description:
      "Contributed to Meta's open-source Python type checker and language server Pyrefly in Rust.",
    highlights: [
      "Authored 2 merged PRs for constructor signature display and union attribute suggestions",
      "Iterated on an additional LSP config-diagnostics PR through maintainer review",
      "Improved LSP behavior and type-checker diagnostics in a production Rust codebase",
    ],
    stack: ["Rust", "Type Systems", "LSP", "Open Source"],
    category: "open-source",
    logo: "/Meta_logo.jpg",
    logoSurface: "light",
    github: "https://github.com/facebook/pyrefly/pulls?q=is%3Apr+author%3Asgavriil01",
    link: "https://github.com/facebook/pyrefly",
    linkLabel: "Pyrefly",
  },
  {
    id: "boc-fintech-hackathon",
    company: "BoC Fintech Hackathon 6.0",
    role: "Technical Team Lead - 3rd Place",
    dates: "Oct 2025",
    location: "Cyprus",
    description:
      "Led the technical work for HYLION, a prototype platform for redistributing surplus PV solar energy to households in need.",
    highlights: [
      "Led technical planning and task delegation for a team of 4",
      "Built a fintech-energy prototype around surplus solar energy redistribution",
      "Placed 3rd in the competition",
    ],
    stack: ["Leadership", "Hackathon", "Fintech", "Energy Tech"],
    category: "achievement",
    logo: "/boc-logo-small.png",
    logoSurface: "dark",
    link: "https://www.bankofcyprus.com/",
    linkLabel: "Organiser",
  },
  {
    id: "ucy",
    company: "University of Cyprus",
    role: "BSc in Computer Science",
    dates: "Expected Graduation: Jun 2027",
    location: "Nicosia, Cyprus",
    description:
      "Strong academic background in systems and software foundations, with emphasis on practical engineering and core computer science topics.",
    highlights: [
      "GPA: 8.18 / 10",
      "Data Structures, Algorithms, Operating Systems, Datacenter Computing, Databases, and Mathematics",
    ],
    stack: ["Computer Science", "Systems", "Databases"],
    category: "education",
    logo: "/University_of_Cyprus.svg.webp",
    logoSurface: "dark",
    link: "https://www.ucy.ac.cy/",
    linkLabel: "University",
    incoming: false,
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Go", "Python", "Java", "SQL", "C"],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      "Quarkus",
      "Spring Boot",
      "FastAPI",
      "Kafka",
      "LangChain",
      "Streamlit",
    ],
  },
  {
    label: "Databases & Storage",
    skills: ["PostgreSQL", "MongoDB", "SQL Server", "MySQL", "Redis"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Linux", "Git", "Docker", "Kubernetes", "Jira", "Maven", "Postman", "JUnit"],
  },
  {
    label: "Backend & DevOps",
    skills: ["RESTful API Design", "CI/CD Pipelines", "Prometheus", "Grafana", "k6", "Vercel"],
  },
];
