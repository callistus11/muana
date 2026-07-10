import {
  Cloud,
  ShieldCheck,
  Database,
  BrainCircuit,
  Cpu,
  Code2,
  Layers,
  Building2,
  Landmark,
  Zap,
  HeartPulse,
  Pickaxe,
  Radio,
  Factory,
  ShoppingBag,
  GraduationCap,
  Scale,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/training", label: "Training" },
  { to: "/register", label: "Register" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = {
  id: string;
  name: string;
  short: string;
  description: string;
  capabilities: string[];
  cta: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    id: "cloud",
    name: "Cloud Transformation",
    short: "Modernize infrastructure with secure, scalable cloud platforms.",
    description:
      "Modernize infrastructure, applications, and operations with secure, scalable cloud platforms — from migration strategy to day‑two operations.",
    capabilities: [
      "Cloud migration strategy",
      "Landing zones & governance",
      "FinOps & cost optimization",
      "Hybrid & multi‑cloud architectures",
    ],
    cta: "Start with a Cloud Pilot",
    icon: Cloud,
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    short: "Protect critical systems, data, and users.",
    description:
      "Defend your business in an increasingly complex threat landscape with a pragmatic, risk‑aligned security program.",
    capabilities: [
      "Security posture assessments",
      "Threat detection & monitoring",
      "Compliance and risk management",
      "Incident readiness & response",
    ],
    cta: "Request a Security Review",
    icon: ShieldCheck,
  },
  {
    id: "data",
    name: "Data & Intelligence",
    short: "Turn data into a strategic asset.",
    description:
      "Design, build, and operate complete data ecosystems — from raw ingestion to advanced analytics and AI‑ready platforms.",
    capabilities: [
      "Data engineering & pipelines",
      "Platforms & lakehouse architecture",
      "Analytics & business intelligence",
      "Data governance & quality",
    ],
    cta: "Build Your First Dashboard",
    icon: Database,
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    short: "Deploy AI that drives real business value.",
    description:
      "From strategy and data readiness to model development and MLOps, we help enterprises operationalize AI at scale.",
    capabilities: [
      "AI strategy & roadmap",
      "ML model development",
      "MLOps & deployment",
      "Generative AI integration",
    ],
    cta: "Explore AI Use Cases",
    icon: BrainCircuit,
  },
  {
    id: "hpc",
    name: "High Performance Computing",
    short: "Unlock computational power for research and AI.",
    description:
      "Design and operate HPC and GPU‑accelerated environments for research, simulation, and data‑intensive AI workloads.",
    capabilities: [
      "HPC cluster design & deployment",
      "GPU acceleration & optimization",
      "Workload management & scheduling",
      "Cloud HPC & hybrid solutions",
    ],
    cta: "Assess Your HPC Needs",
    icon: Cpu,
  },
  {
    id: "apps",
    name: "Application Development",
    short: "Scalable, secure, high‑performance applications.",
    description:
      "Custom software engineering — from product discovery to production — built on modern, cloud‑native foundations.",
    capabilities: [
      "Custom & mobile apps",
      "APIs & integrations",
      "Microservices architecture",
      "DevOps & CI/CD",
    ],
    cta: "Build Your Application",
    icon: Code2,
  },
  {
    id: "training",
    name: "AI Training & Enablement",
    short: "Upskill your teams to operate what we build.",
    description:
      "Role‑based, hands‑on training that turns knowledge transfer into a measurable capability — not just a slide deck.",
    capabilities: [
      "Role‑based curriculum",
      "Hands‑on labs & projects",
      "Microsoft & NVIDIA alignment",
      "Virtual, onsite, hybrid delivery",
    ],
    cta: "Book Training Consultation",
    icon: Layers,
  },
];

export type Industry = {
  id: string;
  name: string;
  description: string;
  priorities: string[];
  icon: LucideIcon;
};

export const INDUSTRIES: Industry[] = [
  {
    id: "banking",
    name: "Banking & Financial Services",
    description:
      "Helping banks, payment providers, and financial institutions modernise core platforms, channels, and risk.",
    priorities: [
      "Strengthen cybersecurity across core and digital banking",
      "Reduce fraud exposure with data‑driven controls",
      "Meet evolving regulatory requirements",
    ],
    icon: Landmark,
  },
  {
    id: "public",
    name: "Public Sector",
    description: "Digital service delivery, secure cloud, and data platforms for government and public agencies.",
    priorities: ["Citizen service modernization", "Sovereign cloud & data residency", "Cyber resilience"],
    icon: Building2,
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    description: "From upstream operations to grid modernization with secure, intelligent data platforms.",
    priorities: ["OT/IT convergence security", "Predictive maintenance with AI", "Field operations enablement"],
    icon: Zap,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Secure, compliant platforms that unlock clinical data and accelerate care delivery.",
    priorities: ["Patient data protection", "Clinical AI assistants", "Interoperability & EHR integration"],
    icon: HeartPulse,
  },
  {
    id: "mining",
    name: "Mining",
    description: "Digitize operations from pit to port with industrial data, AI, and secure connectivity.",
    priorities: ["Operational analytics", "Worker safety with computer vision", "Remote operations centers"],
    icon: Pickaxe,
  },
  {
    id: "telco",
    name: "Telecommunications",
    description: "Network automation, customer analytics, and AI assistants for the next generation of operators.",
    priorities: ["Network observability", "Customer experience AI", "5G & edge enablement"],
    icon: Radio,
  },
  {
    id: "mfg",
    name: "Manufacturing",
    description: "Smart factory, supply chain analytics, and quality automation across the production lifecycle.",
    priorities: ["Industry 4.0 platforms", "Predictive quality", "Supply chain intelligence"],
    icon: Factory,
  },
  {
    id: "retail",
    name: "Retail & Consumer",
    description: "Unified commerce, personalization, and forecasting for modern retail organizations.",
    priorities: ["Omnichannel data", "Personalization engines", "Demand forecasting"],
    icon: ShoppingBag,
  },
  {
    id: "education",
    name: "Education",
    description: "Modern learning platforms, research computing, and analytics for institutions.",
    priorities: ["Research computing & HPC", "Learning analytics", "Cyber & identity"],
    icon: GraduationCap,
  },
  {
    id: "legal",
    name: "Legal & Professional Services",
    description: "Knowledge platforms, document AI, and secure collaboration for firms of every size.",
    priorities: ["Document intelligence", "Secure client portals", "Generative AI assistants"],
    icon: Scale,
  },
];

export const TRAINING_TRACKS = [
  {
    name: "Developers & Engineers",
    description: "Deep technical training on cloud platforms, programming, and implementation.",
    courses: ["Cloud Development Fundamentals", "Container Orchestration with Kubernetes", "DevOps & CI/CD Pipelines"],
    duration: "3–5 days per course",
    delivery: "Virtual · Onsite · Hybrid",
  },
  {
    name: "Architects & Designers",
    description: "Advanced training on enterprise architecture and modern design patterns.",
    courses: ["Cloud Architecture Design", "Enterprise Architecture Patterns", "Security Architecture"],
    duration: "4–6 days per course",
    delivery: "Virtual · Onsite · Workshop",
  },
  {
    name: "Operations & IT Teams",
    description: "Operational training on monitoring, automation, and day‑two operations.",
    courses: ["Cloud Operations & SRE", "Observability & Monitoring", "Identity & Access Management"],
    duration: "3–4 days per course",
    delivery: "Virtual · Onsite · Hybrid",
  },
  {
    name: "Executives & Leaders",
    description: "Strategy‑level enablement on AI, cloud economics, and digital transformation.",
    courses: ["AI for Executives", "Cloud Economics & FinOps", "Cybersecurity for the Boardroom"],
    duration: "1–2 days per course",
    delivery: "Onsite · Workshop",
  },
] as const;

export const REGIONS = {
  africa: ["Nigeria", "Kenya", "South Africa", "Egypt", "Morocco", "Ghana", "Rwanda", "Senegal", "Gambia", "Togo"],
  middleEast: ["UAE", "Saudi Arabia", "Qatar", "Bahrain", "Oman", "Kuwait"],
} as const;

export const STATS = [
  { value: "5", label: "Practice areas" },
  { value: "13+", label: "Countries served" },
  { value: "100%", label: "Pilot‑to‑scale model" },
  { value: "24h", label: "Response window" },
] as const;
