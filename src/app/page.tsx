import Link from "next/link";
import { ArrowRight, Terminal, Server, Database, Cloud, Mail, FileText } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.1 5.1 0 0 0 19.3 4.89 5.0 5.0 0 0 0 19.3 2c0 0-1.83-.59-6 2.22-1.73-.48-3.6-.48-5.3 0C3.83 1.41 2 2 2 2a5.0 5.0 0 0 0-.1 2.89 5.1 5.1 0 0 0-1.2 2.92c0 5.76 3.35 6.78 6.5 7.17A4.8 4.8 0 0 0 6 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  return (
    <div className="flex-1 max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-24 w-full">
      {/* Hero Section */}
      <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-accent font-mono font-medium tracking-wide">
          Hi, I&apos;m Beema Beevi M K
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary leading-tight">
          Backend Engineer <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            Building Scalable APIs & Cloud Infrastructure
          </span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
          Architecting secure, production-grade backend systems for enterprise platforms and high-traffic applications. Specialized in Python, Django, distributed systems, and AWS.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/architecture"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View Architecture & Case Studies
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/Beema_Resume_.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-card border border-card-border hover:border-accent/50 text-text-primary px-6 py-3 rounded-md font-medium transition-colors"
          >
            <FileText size={18} />
            Download Resume
          </Link>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 text-text-secondary hover:text-accent bg-card border border-card-border hover:border-accent/50 rounded-md transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 text-text-secondary hover:text-accent bg-card border border-card-border hover:border-accent/50 rounded-md transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:example@email.com" className="p-2.5 text-text-secondary hover:text-accent bg-card border border-card-border hover:border-accent/50 rounded-md transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </section>

      {/* Quick Skills/Identity Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        <div className="bg-card border border-card-border rounded-xl p-6 space-y-4 hover:border-accent/30 transition-colors">
          <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
            <Terminal className="text-accent" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">API & Systems Design</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Designing microservices and macro-services using Django REST Framework with rigorous authentication and authorization protocols.
          </p>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-6 space-y-4 hover:border-accent/30 transition-colors">
          <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
            <Database className="text-accent" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">Data & Async Pipelines</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Optimizing PostgreSQL queries, eliminating N+1 bottlenecks, and building high-throughput background task workers with Celery and Redis.
          </p>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-6 space-y-4 hover:border-accent/30 transition-colors">
          <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
            <Cloud className="text-accent" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">Cloud Infrastructure</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Deploying robust, scalable AWS architectures using EC2, RDS, S3, and load balancers, orchestrated via GitHub Actions CI/CD.
          </p>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">Featured Engineering Work</h2>
          <Link href="/experience" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="space-y-6">
          <div className="border border-card-border bg-card rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start relative group">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-text-primary">Saudi Ministry Platform</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-medium border border-blue-500/20">
                  GovTech / Security
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Architected a highly secure, distributed backend handling complex delegation workflows and strict ZATCA-compliant financial reconciliation. Engineered an async export pipeline supporting 55+ concurrent data export types without blocking API threads.
              </p>
              <div className="flex gap-2 flex-wrap text-sm font-mono text-text-secondary pt-2">
                <span className="bg-background px-2 py-1 rounded">Django</span>
                <span className="bg-background px-2 py-1 rounded">PostgreSQL</span>
                <span className="bg-background px-2 py-1 rounded">Celery</span>
                <span className="bg-background px-2 py-1 rounded">Redis</span>
              </div>
            </div>
          </div>

          <div className="border border-card-border bg-card rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start relative group">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-text-primary">Eduport V2 APIs</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                  High Traffic B2C
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Spearheaded the V2 API architecture for an e-learning platform scaling to 500k+ downloads and 50k+ DAUs. Redesigned core schemas and implemented Redis caching layers, dramatically reducing latency and improving overall system throughput.
              </p>
              <div className="flex gap-2 flex-wrap text-sm font-mono text-text-secondary pt-2">
                <span className="bg-background px-2 py-1 rounded">Python</span>
                <span className="bg-background px-2 py-1 rounded">REST API</span>
                <span className="bg-background px-2 py-1 rounded">Query Optimization</span>
                <span className="bg-background px-2 py-1 rounded">Caching</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
