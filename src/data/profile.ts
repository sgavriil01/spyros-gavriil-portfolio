export const profile = {
  name: "Spyros Gavriil",
  location: "Nicosia, Cyprus",
  email: "spyrosgavriil01@gmail.com",
  github: "https://github.com/sgavriil01",
  linkedin: "https://linkedin.com/in/spyros-gavriil",
  cv: "/Spyros_Gavriil_CV_2025_26.pdf",
  profileImage: "/profile.png",
  tagline:
    "Computer Science student building reliable backend systems, APIs, and data-driven software.",
  bio: "I focus on software that is practical, dependable, and understandable for both technical and non-technical users.",
  status: "Incoming Software Engineering Intern at Intergo Telecom.",
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
    highlight: true,
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
  category: "work" | "open-source" | "education";
  github?: string;
  link?: string;
  incoming?: boolean;
};

export const experience: Experience[] = [
  {
    id: "intergo",
    company: "Intergo Telecom",
    role: "Incoming Software Engineering Intern",
    dates: "Incoming",
    location: "Paphos, Cyprus",
    description:
      "Joining Intergo Telecom as a Software Engineering Intern to work on production software systems in a telecom environment.",
    highlights: [
      "Incoming internship role",
      "Focus on practical engineering in production systems",
    ],
    stack: ["Software Engineering", "Backend", "Telecom Systems"],
    category: "work",
    incoming: true,
  },
  {
    id: "cyens",
    company: "CYENS Centre of Excellence",
    role: "AI Software Engineering Intern",
    dates: "Jun 2025 - Sep 2025",
    location: "Nicosia, Cyprus",
    description:
      "Led engineering work for an AI storytelling platform and improved reliability before deployment in a live school study.",
    highlights: [
      "Improved generation consistency and multilingual logic for branching narratives",
      "Rebuilt media pipelines (TTS + image generation) to 100% reliability",
      "Resolved 10+ critical defects and redesigned navigation flows",
    ],
    stack: ["Python", "LangChain", "LLM Pipelines", "TTS"],
    category: "work",
    link: "https://www.cyens.org.cy",
  },
  {
    id: "pyrefly",
    company: "Meta Platforms - Pyrefly",
    role: "Open Source Contributor",
    dates: "Jan 2026 - March 2026",
    location: "Remote",
    description:
      "Contributed to Meta's open-source type checker Pyrefly, with focus on type checking behavior and LSP features.",
    highlights: [
      "Authored 3 PRs (1 merged, 1 imported, 1 under review)",
      "Collaborated with maintainers through CI and code review cycles",
      "Worked in a production Rust codebase on developer tooling features",
    ],
    stack: ["Rust", "Type Systems", "LSP", "Open Source"],
    category: "open-source",
    github: "https://github.com/facebook/pyrefly/pulls?q=is%3Apr+author%3Asgavriil01",
    link: "https://github.com/facebook/pyrefly",
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
      "Operating Systems, Data Structures, Algorithms, Databases, and core Mathematics",
    ],
    stack: ["Computer Science", "Systems", "Databases"],
    category: "education",
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
    skills: ["Python", "Java", "SQL", "C"],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      "Spring Boot",
      "FastAPI",
      "Flask",
      "LangChain",
      "Streamlit",
    ],
  },
  {
    label: "Databases & Storage",
    skills: ["PostgreSQL", "SQL Server", "MySQL"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "Docker", "Postman", "JUnit", "Supabase", "Jira", "Linux"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["CI/CD Pipelines", "Vercel", "Docker", "RESTful API Design"],
  },
];
