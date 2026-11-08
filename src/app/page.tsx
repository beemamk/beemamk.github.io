import Link from "next/link";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Database,
  Layers,
  Code2,
  CheckCircle2,
  Calendar,
  GraduationCap,
} from "lucide-react";
import { ProfileImage } from "@/components/ui/ProfileImage";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.1 5.1 0 0 0 19.3 4.89 5.0 5.0 0 0 0 19.3 2c0 0-1.83-.59-6 2.22-1.73-.48-3.6-.48-5.3 0C3.83 1.41 2 2 2 2a5.0 5.0 0 0 0-.1 2.89 5.1 5.1 0 0 0-1.2 2.92c0 5.76 3.35 6.78 6.5 7.17A4.8 4.8 0 0 0 6 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const marqueeItems = [
  "Python",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "Celery",
  "Redis",
  "AWS (EC2, S3, RDS, SES)",
  "Docker & Docker Compose",
  "Dokploy",
  "Nginx",
  "Gunicorn",
  "FastAPI",
  "MySQL",
  "GeoDjango",
  "ZATCA Compliance",
  "Mada Payment Gateway",
  "Linux & Shell",
  "GitHub Actions CI/CD",
];

const skillsCategories = [
  {
    title: "LANGUAGES",
    skills: "Python, JavaScript, HTML5, CSS3, SQL, Bash",
  },
  {
    title: "FRAMEWORKS & BACKEND",
    skills: "Django, Django REST Framework (DRF), FastAPI, GeoDjango, OOP, SQLAlchemy",
  },
  {
    title: "DATABASES",
    skills: "PostgreSQL, MySQL, ORM Optimization, Database Indexing, Query Optimization",
  },
  {
    title: "ASYNC & CACHING",
    skills: "Celery, Redis, Background Task Processing, Message Queues",
  },
  {
    title: "CLOUD & DEVOPS",
    skills: "AWS (EC2, S3, RDS, SES), Docker, Docker Compose, Dokploy, Nginx, Gunicorn, GitHub Actions, Linux",
  },
  {
    title: "SECURITY",
    skills: "JWT, OAuth2, RBAC, Multi-Factor Authentication (2FA), CAPTCHA, Brute-Force Prevention",
  },
  {
    title: "API & INTEGRATION",
    skills: "RESTful APIs, Postman, Swagger/OpenAPI, OCI Storage, Payment Gateways (Mada, ZATCA Compliance)",
  },
  {
    title: "FRONTEND",
    skills: "HTML, CSS, JavaScript, AJAX, Bootstrap, Tailwind CSS, Django Templates, React (beginner)",
  },
  {
    title: "AI & DEV TOOLS",
    skills: "Claude AI, ChatGPT, Git, GitHub, Selenium, BeautifulSoup",
  },
];

export default function Home() {
  return (
    <div className="flex-1 w-full space-y-28 md:space-y-36 pb-24">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs md:text-sm font-mono tracking-wider text-accent uppercase font-semibold">
              <span>PYTHON & DJANGO BACKEND ENGINEER</span>
              <span className="text-text-muted">/</span>
              <span>KOCHI, KERALA, INDIA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1]">
              Beema Beevi M K
            </h1>

            <p className="text-xl md:text-2xl text-text-primary/95 font-medium leading-snug">
              I build scalable production systems, high-throughput REST APIs, and financial transaction modules with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-sky-400 to-emerald-400">
                Python, Django, and PostgreSQL.
              </span>
            </p>

            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Backend Engineer with <strong>3+ years of hands-on experience</strong> (2+ years professional plus 1 year intensive project-based training) building scalable backend architectures for enterprise government platforms and high-traffic B2C products (<strong>500K+ downloads, 50K+ DAU</strong>). Core expertise in RESTful APIs, database optimization (PostgreSQL/MySQL), Celery & Redis task queues, Docker, and AWS deployments. Available to join immediately.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent hover:bg-sky-400 text-[#070d18] px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                <span>View my work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/Beema_Beevi_mk_Resume.pdf"
                download="Beema_Beevi_MK_Resume.pdf"
                className="inline-flex items-center gap-2 bg-card border border-card-border hover:border-accent/60 text-text-primary px-5 py-3.5 rounded-xl font-semibold transition-all hover:bg-card-border/30"
              >
                <Download size={18} className="text-accent" />
                <span>Download resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent font-medium px-4 py-3.5 transition-colors"
              >
                <span>Contact me</span>
              </a>
            </div>

            {/* Social & Contact Pills */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 text-text-secondary hover:text-accent bg-card border border-card-border hover:border-accent/50 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href="https://github.com/beemamk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 text-text-secondary hover:text-accent bg-card border border-card-border hover:border-accent/50 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href="mailto:beemabmk@gmail.com"
                aria-label="Email"
                className="p-3 text-text-secondary hover:text-accent bg-card border border-card-border hover:border-accent/50 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <Mail size={19} />
              </a>
              <a
                href="tel:+917306419126"
                aria-label="Phone"
                className="p-3 text-text-secondary hover:text-accent bg-card border border-card-border hover:border-accent/50 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <Phone size={19} />
              </a>
              <span className="text-xs font-mono text-text-muted pl-2">
                beemabmk@gmail.com
              </span>
            </div>
          </div>

          {/* Right Column: Arched Profile Visual */}
          <div className="lg:col-span-5 flex justify-center pt-6 lg:pt-0">
            <ProfileImage />
          </div>
        </div>
      </section>

      {/* ========================================================
          STATS / COUNTER SECTION
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-card-border/80">
          <div className="space-y-1">
            <p className="text-3xl md:text-5xl font-extrabold font-mono text-text-primary tracking-tight">
              3+ <span className="text-accent text-2xl md:text-3xl">yrs</span>
            </p>
            <p className="text-xs md:text-sm text-text-secondary">
              hands-on backend experience
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl md:text-5xl font-extrabold font-mono text-text-primary tracking-tight">
              500K+
            </p>
            <p className="text-xs md:text-sm text-text-secondary">
              downloads & users supported
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl md:text-5xl font-extrabold font-mono text-text-primary tracking-tight">
              55+
            </p>
            <p className="text-xs md:text-sm text-text-secondary">
              async export pipelines
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl md:text-5xl font-extrabold font-mono text-text-primary tracking-tight">
              14+
            </p>
            <p className="text-xs md:text-sm text-text-secondary">
              enterprise DRF APIs delivered
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          TECH MARQUEE TICKER
          ======================================================== */}
      <section className="w-full overflow-hidden border-b border-card-border/80 py-4 bg-card/40">
        <div className="animate-marquee flex items-center gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-xs md:text-sm font-mono text-text-secondary whitespace-nowrap">
              <span className="text-accent">◆</span>
              <span className="hover:text-accent transition-colors font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 01: ABOUT
          ======================================================== */}
      <section id="about" className="max-w-6xl mx-auto px-6 scroll-mt-24 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-mono text-accent tracking-widest uppercase">
              — 01 / ABOUT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-tight">
              Backend systems for real business workflows
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base md:text-lg text-text-secondary leading-relaxed">
            <p>
              I design and build the server side of web products: <strong>RESTful APIs, data models, background processing queues, and Linux/AWS deployments</strong>. My work covers enterprise government platforms, financial reconciliations, high-concurrency B2C mobile backends, and D2C order automation engines.
            </p>
            <p>
              I write clean, maintainable code with a strong emphasis on database optimization, zero-downtime async pipelines, and security best practices. I work closely with cross-functional teams, from database schema design and Celery queue orchestration through production Linux and AWS hosting.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-card border border-card-border rounded-2xl p-8 space-y-4 hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-primary">Architecture & APIs</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Backend architecture, scalable system design, and REST API design with Swagger/OpenAPI documentation. Specialized in decoupling heavy computations into asynchronous Celery + Redis pipelines to preserve sub-100ms API response times.
            </p>
          </div>

          <div className="bg-card border border-card-border rounded-2xl p-8 space-y-4 hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-primary">Data & Performance</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              PostgreSQL and MySQL database design, strategic indexing, and query optimization for high-volume operations. Systematically eliminates N+1 query bottlenecks and implements multi-layer Redis caching to reduce database load by over 60%.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: IMPACT & MEASURED RESULTS
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <p className="text-xs font-mono text-accent tracking-widest uppercase">
            — 02 / IMPACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Measured results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-card/70 border border-card-border/80 rounded-2xl p-8 space-y-3 hover:border-accent/40 transition-all">
            <p className="text-4xl md:text-5xl font-mono font-extrabold text-accent">
              60%
            </p>
            <h3 className="text-base font-semibold text-text-primary">
              reduction in database load
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Comprehensive Redis caching layers and N+1 query elimination during peak traffic on a 50K+ DAU mobile platform.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-card/70 border border-card-border/80 rounded-2xl p-8 space-y-3 hover:border-accent/40 transition-all">
            <p className="text-4xl md:text-5xl font-mono font-extrabold text-accent-green">
              55+
            </p>
            <h3 className="text-base font-semibold text-text-primary">
              concurrent export pipelines
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Configuration-driven Celery & Redis pipeline safely handling complex CSV/PDF reports without blocking API threads.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-card/70 border border-card-border/80 rounded-2xl p-8 space-y-3 hover:border-accent/40 transition-all">
            <p className="text-4xl md:text-5xl font-mono font-extrabold text-sky-400">
              14+
            </p>
            <h3 className="text-base font-semibold text-text-primary">
              enterprise DRF APIs delivered
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Core government-facing endpoints powering QR attendance, scheduling, and delegation workflows with sub-second latencies.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-card/70 border border-card-border/80 rounded-2xl p-8 space-y-3 hover:border-accent/40 transition-all">
            <p className="text-4xl md:text-5xl font-mono font-extrabold text-emerald-400">
              100%
            </p>
            <h3 className="text-base font-semibold text-text-primary">
              financial reconciliation compliance
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Automated Mada card transactions, ZATCA tax rules, and multi-tier approval audit trail with zero accounting discrepancies.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-card/70 border border-card-border/80 rounded-2xl p-8 space-y-3 hover:border-accent/40 transition-all">
            <p className="text-4xl md:text-5xl font-mono font-extrabold text-amber-400">
              20%
            </p>
            <h3 className="text-base font-semibold text-text-primary">
              faster developer onboarding
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Standardized clean architecture, modular folder structure, and strict Git/CI-CD workflows across engineering teams.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-card/70 border border-card-border/80 rounded-2xl p-8 space-y-3 hover:border-accent/40 transition-all">
            <p className="text-4xl md:text-5xl font-mono font-extrabold text-purple-400">
              500K+
            </p>
            <h3 className="text-base font-semibold text-text-primary">
              user scale supported
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              High-traffic B2C learning platform scaled smoothly with PostgreSQL query tuning, caching, and resilient error recovery.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03: SELECTED WORK (PROJECTS)
          ======================================================== */}
      <section id="projects" className="max-w-6xl mx-auto px-6 scroll-mt-24 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <p className="text-xs font-mono text-accent tracking-widest uppercase">
              — 03 / PROJECTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Selected work
            </h2>
          </div>
          <Link
            href="/architecture"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            <span>View Architecture Case Studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-8">
          {/* FEATURED PROJECT: NaturaX Order Flow */}
          <div className="border border-card-border bg-card/90 rounded-3xl p-7 md:p-10 space-y-6 relative group hover:border-accent/50 transition-all shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                AUTOMATION ENGINE · FEATURED
              </span>
              <a
                href="https://github.com/beemamk/Order_flow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-lg border border-card-border bg-background hover:border-accent text-text-primary hover:text-accent transition-colors"
              >
                <GithubIcon size={14} />
                <span>Source Code</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                  NaturaX D2C Order Follow-up Automation System
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  An enterprise-grade automated exception engine and customer recovery pipeline built to eliminate manual order tracking for high-volume D2C e-commerce operations. Handles unfulfilled orders, ingestion validation, exception queues, and self-healing resolution flows.
                </p>

                <ul className="space-y-2 text-sm text-text-secondary leading-relaxed pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-text-primary">5-Rule Automated Exception Engine:</strong> Evaluates orders across 5 business scenarios (stuck in transit, payment confirmation lag, inventory mismatch, duplicate check, address validation) with automatic severity escalation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-text-primary">Asynchronous CSV Validation Queue:</strong> Background batch ingestion parsing hundreds of customer orders with rigorous schema verification and real-time failure reporting.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-text-primary">Task Dashboard & Auto-Resolving Logic:</strong> Real-time task dashboard for ops teams that automatically resolves tasks when webhook confirmations or customer updates arrive.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-text-primary">Granular Audit Trail & RBAC:</strong> Implements immutable status transition logging and operator permission boundaries for full audit compliance.
                    </span>
                  </li>
                </ul>

                <div className="flex gap-2 flex-wrap pt-4">
                  {["Python", "Django", "PostgreSQL", "Celery", "Redis", "REST APIs", "Docker", "GitHub Actions"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-background px-3 py-1 rounded-md text-xs font-mono text-text-secondary border border-card-border"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Callout Metric Card */}
              <div className="lg:col-span-4 bg-background/80 border border-card-border rounded-2xl p-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-mono text-text-muted uppercase">Core Innovation</p>
                  <p className="text-4xl font-mono font-extrabold text-accent">5-Rule</p>
                  <p className="text-sm font-semibold text-text-primary">
                    Automated Exception Engine
                  </p>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed border-t border-card-border pt-4">
                  Auto-classifies and resolves stalled orders without requiring human manual intervention, reducing support overhead by over 70%.
                </p>
                <a
                  href="https://github.com/beemamk/Order_flow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:underline pt-2"
                >
                  <span>Explore repository on GitHub</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 2: Nadena KSA Platform */}
          <div className="border border-card-border bg-card/90 rounded-3xl p-7 md:p-10 space-y-6 hover:border-accent/50 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                ENTERPRISE GOVTECH · VEUZ CONCEPTS
              </span>
              <span className="text-xs font-mono text-text-muted">Aug 2025 – May 2026</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                  Nadena Sports & Recreation Platform (KSA Ministry)
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Enterprise government platform for an international ministry in Saudi Arabia. Architected the core backend infrastructure powering QR-based attendance scanning, real-time trainer scheduling, delegation workflows, and strict financial compliance.
                </p>

                <ul className="space-y-2 text-sm text-text-secondary leading-relaxed pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-text-primary">14+ DRF REST APIs:</strong> High-throughput endpoints powering mobile and administrative portals with JWT session rotation and OTP 2FA.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-text-primary">Async Export Framework:</strong> Handled 55+ complex data export types with Celery workers, Redis status tracking, and OCI cloud storage integration.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-text-primary">ZATCA & Mada Reconciliation:</strong> Engineered centralized pricing, automated Mada transaction mirrors, and multi-tier approval workflows.
                    </span>
                  </li>
                </ul>

                <div className="flex gap-2 flex-wrap pt-4">
                  {["Django REST Framework", "PostgreSQL", "Celery", "Redis", "OCI Storage", "Dokploy", "Docker"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-background px-3 py-1 rounded-md text-xs font-mono text-text-secondary border border-card-border"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 bg-background/80 border border-card-border rounded-2xl p-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-mono text-text-muted uppercase">Platform Scale</p>
                  <p className="text-4xl font-mono font-extrabold text-blue-400">55+</p>
                  <p className="text-sm font-semibold text-text-primary">
                    Async Export Pipelines
                  </p>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed border-t border-card-border pt-4">
                  Decoupled compute-heavy government reporting from the main request thread, completely eliminating HTTP timeouts.
                </p>
              </div>
            </div>
          </div>

          {/* PROJECT 3: Eduport V2 Architecture */}
          <div className="border border-card-border bg-card/90 rounded-3xl p-7 md:p-10 space-y-6 hover:border-accent/50 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                HIGH-TRAFFIC B2C · EDUPORT
              </span>
              <span className="text-xs font-mono text-text-muted">Jan 2024 – Feb 2025</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                  Eduport V2 High-Concurrency API & Schema Architecture
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Architected core REST APIs for a leading B2C ed-tech platform scaling to 500,000+ downloads and 50,000+ daily active users. Redesigned schemas, introduced multi-tier caching, and resolved concurrency bottlenecks.
                </p>

                <ul className="space-y-2 text-sm text-text-secondary leading-relaxed pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-text-primary">Database Tuning:</strong> Systematically eliminated N+1 queries, applied strategic compound indexing, and slashed response latency.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-text-primary">Redis Caching Layer:</strong> Reduced peak database load by over 60% during nationwide examination test spikes.
                    </span>
                  </li>
                </ul>

                <div className="flex gap-2 flex-wrap pt-4">
                  {["Python", "Django", "PostgreSQL", "Redis", "Database Indexing", "Query Optimization"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-background px-3 py-1 rounded-md text-xs font-mono text-text-secondary border border-card-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-background/80 border border-card-border rounded-2xl p-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-mono text-text-muted uppercase">Concurrent Impact</p>
                  <p className="text-4xl font-mono font-extrabold text-emerald-400">~60%</p>
                  <p className="text-sm font-semibold text-text-primary">
                    Peak DB Load Reduction
                  </p>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed border-t border-card-border pt-4">
                  Sustained 50K+ daily active learners simultaneously with sub-100ms API response times.
                </p>
              </div>
            </div>
          </div>

          {/* GRID OF TWO OTHER ARCHITECTURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Zecser AWS Infra */}
            <div className="border border-card-border bg-card/70 rounded-2xl p-7 space-y-4 hover:border-accent/40 transition-colors">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                CLOUD ARCHITECTURE · ZECSER
              </span>
              <h4 className="text-xl font-bold text-text-primary">
                Client Recharge Platform & AWS Cloud Infrastructure
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Led system architecture and AWS cloud infrastructure provisioning for a proprietary recharge platform. Deployed on AWS EC2, S3, RDS (PostgreSQL), and SES, orchestrated with Docker, Nginx, and Gunicorn on Linux.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                {["AWS (EC2, S3, RDS, SES)", "Docker", "Nginx", "Gunicorn", "GitHub Actions"].map((tag) => (
                  <span key={tag} className="bg-background px-2.5 py-0.5 rounded text-[11px] font-mono text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* E-Commerce & LMS */}
            <div className="border border-card-border bg-card/70 rounded-2xl p-7 space-y-4 hover:border-accent/40 transition-colors">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                FULL-STACK & LMS · BROTOTYPE
              </span>
              <h4 className="text-xl font-bold text-text-primary">
                E-Commerce Store & School Management Portals
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Full-featured e-commerce platform built with Django, AJAX, Bootstrap, and payment integration. School Management System built using React, Django REST Framework, and Tailwind CSS under strict weekly evaluations.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                {["Django", "React", "DRF", "PostgreSQL", "Tailwind CSS", "AJAX"].map((tag) => (
                  <span key={tag} className="bg-background px-2.5 py-0.5 rounded text-[11px] font-mono text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04: TECHNICAL SKILLS
          ======================================================== */}
      <section id="skills" className="max-w-6xl mx-auto px-6 scroll-mt-24 space-y-12">
        <div className="space-y-3">
          <p className="text-xs font-mono text-accent tracking-widest uppercase">
            — 04 / SKILLS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Technical skills
          </h2>
        </div>

        {/* Core Stack Pills */}
        <div className="space-y-3">
          <p className="text-xs font-mono text-text-muted uppercase tracking-wider">
            CORE STACK
          </p>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Python",
              "Django",
              "Django REST Framework",
              "PostgreSQL",
              "FastAPI",
              "REST APIs",
              "Redis",
              "Celery",
              "Docker",
              "AWS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card border border-card-border hover:border-accent text-text-primary text-sm font-semibold rounded-lg transition-colors shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {skillsCategories.map((cat) => (
            <div key={cat.title} className="space-y-2 border-b border-card-border/60 pb-6">
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider">
                {cat.title}
              </p>
              <p className="text-sm text-text-primary font-medium leading-relaxed">
                {cat.skills}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 05: PROFESSIONAL EXPERIENCE
          ======================================================== */}
      <section id="experience" className="max-w-6xl mx-auto px-6 scroll-mt-24 space-y-12">
        <div className="space-y-3">
          <p className="text-xs font-mono text-accent tracking-widest uppercase">
            — 05 / EXPERIENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Professional experience
          </h2>
        </div>

        <div className="space-y-8">
          {/* Experience 1: Veuz Concepts */}
          <div className="bg-card border border-card-border rounded-2xl p-7 md:p-9 space-y-5 hover:border-accent/40 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-card-border/80 pb-4">
              <div>
                <h3 className="text-xl font-bold text-text-primary">
                  Python / Django Backend Engineer
                </h3>
                <p className="text-accent text-sm font-medium">
                  Veuz Concepts · Nadena Sports & Recreation Platform (KSA Ministry)
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                <Calendar size={14} />
                <span>Aug 2025 – May 2026</span>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Architected and developed <strong>14+ high-throughput RESTful APIs</strong> using Django REST Framework for a government-facing mobile app, powering QR-based attendance scanning, real-time trainer scheduling, and delegation workflows.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Engineered a configuration-driven asynchronous export framework using <strong>Celery workers and Redis progress tracking</strong>, safely handling 55+ export types integrated with OCI cloud storage.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Built the core <strong>Finance Management module</strong> including secure transaction mirrors, revenue aggregation, cash deposit tracking, and automated Mada card reconciliation with multi-tier approval workflows.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Implemented a defense-in-depth authentication layer with OTP-based 2FA, secure JWT session rotation, and preventative mechanisms against brute-force and timing attacks.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Containerized backend services using Docker and Docker Compose; managed deployments and environment configuration via Dokploy on Linux servers.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Migrated discount and coupon calculation logic to a centralized backend engine, ensuring data integrity and eliminating client-side inconsistencies.
                </span>
              </li>
            </ul>

            <div className="flex gap-2 flex-wrap pt-3 border-t border-card-border/60">
              {["Django REST Framework", "PostgreSQL", "Celery", "Redis", "Docker", "Dokploy", "OCI Storage", "ZATCA"].map(
                (skill) => (
                  <span key={skill} className="bg-background px-3 py-1 rounded text-xs font-mono text-text-secondary">
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Experience 2: Zecser Business LLP */}
          <div className="bg-card border border-card-border rounded-2xl p-7 md:p-9 space-y-5 hover:border-accent/40 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-card-border/80 pb-4">
              <div>
                <h3 className="text-xl font-bold text-text-primary">
                  Python / Django Developer
                </h3>
                <p className="text-text-primary/90 text-sm font-medium">
                  Zecser Business LLP · Remote Contract (Client Recharge Application)
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                <Calendar size={14} />
                <span>Mar 2025 – May 2025</span>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Led system architecture and codebase initialization for a proprietary recharge platform, defining clean project structure and coding standards that reduced developer onboarding time by 20%.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Deployed production applications on AWS EC2 with Docker, Nginx (reverse proxy), and Gunicorn (WSGI) on Linux, achieving scalable and fault-tolerant hosting.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Integrated AWS S3, RDS (managed PostgreSQL), and SES for full-stack cloud infrastructure.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Mentored engineering interns on Python/Django best practices, enforcing maintainable code standards through structured code reviews and Git workflows.
                </span>
              </li>
            </ul>

            <div className="flex gap-2 flex-wrap pt-3 border-t border-card-border/60">
              {["Python", "Django", "AWS EC2", "AWS S3", "RDS PostgreSQL", "Docker", "Nginx", "Gunicorn"].map((skill) => (
                <span key={skill} className="bg-background px-3 py-1 rounded text-xs font-mono text-text-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience 3: Eduport */}
          <div className="bg-card border border-card-border rounded-2xl p-7 md:p-9 space-y-5 hover:border-accent/40 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-card-border/80 pb-4">
              <div>
                <h3 className="text-xl font-bold text-text-primary">
                  Python / Django Developer
                </h3>
                <p className="text-text-primary/90 text-sm font-medium">
                  Eduport · B2C E-Learning Platform (500K+ Downloads · 50K+ Daily Active Users)
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                <Calendar size={14} />
                <span>Jan 2024 – Feb 2025</span>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Engineered core REST APIs for platform v2.0, redesigning database schemas and relational models to support high user concurrency at scale.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Reduced API latency through advanced PostgreSQL query optimization, strategic indexing, and Redis caching layers.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Debugged and resolved complex production issues across backend services, improving application stability and user experience.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold">•</span>
                <span>
                  Collaborated with frontend, product, and QA teams to deliver seamless feature rollouts with full end-to-end integration.
                </span>
              </li>
            </ul>

            <div className="flex gap-2 flex-wrap pt-3 border-t border-card-border/60">
              {["Python", "Django", "PostgreSQL", "Redis", "Schema Design", "Query Optimization"].map((skill) => (
                <span key={skill} className="bg-background px-3 py-1 rounded text-xs font-mono text-text-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: TRAINING & EDUCATION
          ======================================================== */}
      <section id="education" className="max-w-6xl mx-auto px-6 scroll-mt-24 space-y-12">
        <div className="space-y-3">
          <p className="text-xs font-mono text-accent tracking-widest uppercase">
            — 06 / EDUCATION & TRAINING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Education & Training
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bootcamp Training */}
          <div className="bg-card border border-card-border rounded-2xl p-7 space-y-4 hover:border-accent/40 transition-colors">
            <div className="flex items-center gap-2 text-accent">
              <Code2 size={20} />
              <span className="text-xs font-mono uppercase font-semibold">INTENSIVE PROGRAM</span>
            </div>
            <h3 className="text-xl font-bold text-text-primary">
              Software Development Bootcamp
            </h3>
            <p className="text-sm font-medium text-text-primary/90">
              Brototype, Kochi · Dec 2022 – Nov 2023
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Intensive, self-driven program with strict schedules, weekly deliverables, and mandatory reviewer evaluations. Built an E-commerce web app using Django, AJAX, Bootstrap, and a School Management System using React and Django REST Framework.
            </p>
          </div>

          {/* University Degree */}
          <div className="bg-card border border-card-border rounded-2xl p-7 space-y-4 hover:border-accent/40 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400">
              <GraduationCap size={20} />
              <span className="text-xs font-mono uppercase font-semibold">UNIVERSITY DEGREE</span>
            </div>
            <h3 className="text-xl font-bold text-text-primary">
              Bachelor of Science in Physics
            </h3>
            <p className="text-sm font-medium text-text-primary/90">
              Mar Athanasius College (Autonomous), Kothamangalam, India
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Rigorous analytical foundation, mathematical modeling, and systematic problem-solving methods directly applied to distributed systems and backend algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 07: CONTACT
          ======================================================== */}
      <section id="contact" className="max-w-6xl mx-auto px-6 scroll-mt-24">
        <div className="bg-gradient-to-br from-card via-[#0c1426] to-[#070d18] border border-card-border rounded-3xl p-8 md:p-14 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <p className="text-xs font-mono text-accent tracking-widest uppercase">
              — 07 / GET IN TOUCH
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight">
              Let&apos;s build scalable systems together.
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              I am actively seeking backend engineering roles and available to join immediately. Whether you need high-throughput REST APIs, PostgreSQL tuning, Celery pipelines, or AWS deployments, let&apos;s connect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 relative z-10">
            <a
              href="mailto:beemabmk@gmail.com"
              className="bg-background/80 border border-card-border hover:border-accent p-5 rounded-2xl space-y-2 group transition-all"
            >
              <div className="text-accent flex items-center justify-between">
                <Mail size={22} />
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-mono text-text-muted">Email</p>
              <p className="text-sm font-semibold text-text-primary truncate">
                beemabmk@gmail.com
              </p>
            </a>

            <a
              href="tel:+917306419126"
              className="bg-background/80 border border-card-border hover:border-accent p-5 rounded-2xl space-y-2 group transition-all"
            >
              <div className="text-accent flex items-center justify-between">
                <Phone size={22} />
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-mono text-text-muted">Phone</p>
              <p className="text-sm font-semibold text-text-primary">
                +91 7306419126
              </p>
            </a>

            <a
              href="https://github.com/beemamk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 border border-card-border hover:border-accent p-5 rounded-2xl space-y-2 group transition-all"
            >
              <div className="text-accent flex items-center justify-between">
                <GithubIcon size={22} />
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-mono text-text-muted">GitHub</p>
              <p className="text-sm font-semibold text-text-primary">
                github.com/beemamk
              </p>
            </a>

            <div className="bg-background/80 border border-card-border p-5 rounded-2xl space-y-2">
              <div className="text-accent">
                <MapPin size={22} />
              </div>
              <p className="text-xs font-mono text-text-muted">Location</p>
              <p className="text-sm font-semibold text-text-primary">
                Kochi, Kerala, India
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-card-border/60 flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3">
              <a
                href="/Beema_Beevi_mk_Resume.pdf"
                download="Beema_Beevi_MK_Resume.pdf"
                className="inline-flex items-center gap-2 bg-accent hover:bg-sky-400 text-[#070d18] px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-accent/20"
              >
                <Download size={18} />
                <span>Download Full Resume</span>
              </a>
            </div>

            <p className="text-xs font-mono text-text-muted">
              © {new Date().getFullYear()} Beema Beevi M K · Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
