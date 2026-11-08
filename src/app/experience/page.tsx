import Link from "next/link";
import { Briefcase, Calendar, ShieldCheck, Zap, Code2 } from "lucide-react";

export default function Experience() {
  return (
    <div className="flex-1 max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-16 w-full">
      <div className="space-y-4">
        <p className="text-xs font-mono text-accent tracking-widest uppercase">
          CAREER TIMELINE
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
          Professional <span className="text-accent">Experience</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          3+ years of hands-on backend engineering experience designing secure, scalable systems for enterprise government platforms and high-traffic consumer applications.
        </p>
      </div>

      <div className="space-y-12">
        {/* Experience 1: Veuz Concepts */}
        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-card-border ml-[23px]" />
          <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative">
            <div className="md:col-span-1 pt-2 md:text-right hidden md:block">
              <span className="text-sm font-mono text-accent font-semibold">Aug 2025 – May 2026</span>
            </div>

            <div className="hidden md:flex absolute left-0 w-[47px] h-full items-start justify-center top-2">
              <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
            </div>

            <div className="md:col-span-3 space-y-6 bg-card border border-card-border p-6 md:p-8 rounded-2xl relative hover:border-accent/40 transition-colors">
              <div className="md:hidden text-sm font-mono text-accent mb-2 flex items-center gap-2">
                <Calendar size={14} /> Aug 2025 – May 2026
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-text-primary">Python / Django Backend Engineer</h2>
                <div className="text-text-secondary font-medium flex items-center gap-2 text-sm">
                  <Briefcase size={16} className="text-accent" /> Veuz Concepts · Nadena Sports & Recreation Platform (KSA Ministry)
                </div>
              </div>

              <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
                <p>
                  Architected and deployed highly secure, scalable backend infrastructure for an international government ministry. Engineered systems handling complex delegation workflows, scheduling, and strict regional financial compliance.
                </p>
                <ul className="space-y-2.5 list-none">
                  <li className="flex items-start gap-2.5">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span><strong>14+ High-Throughput REST APIs:</strong> Built core DRF endpoints powering mobile and web applications with QR attendance, trainer scheduling, and delegation workflows.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span><strong>Async Celery + Redis Export Pipeline:</strong> Handled 55+ complex data export types safely integrated with OCI cloud storage, completely eliminating API thread blocking and timeouts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="text-emerald-400 mt-1 shrink-0" size={16} />
                    <span><strong>ZATCA & Mada Financial Reconciliation:</strong> Built finance management engine with secure transaction mirrors, revenue aggregation, cash deposit tracking, and automated Mada reconciliation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="text-emerald-400 mt-1 shrink-0" size={16} />
                    <span><strong>Defense-in-Depth Security:</strong> Implemented OTP 2FA, sliding JWT session rotation, CAPTCHA, and timing-attack protections.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="text-blue-400 mt-1 shrink-0" size={16} />
                    <span><strong>Containerized Linux Deployments:</strong> Packaged services using Docker & Docker Compose; managed deployments via Dokploy on Linux servers.</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-2 flex-wrap pt-4 border-t border-card-border">
                {["Django REST Framework", "PostgreSQL", "Celery", "Redis", "OCI Storage", "Docker", "Dokploy", "ZATCA"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-secondary border border-card-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience 2: Zecser Business LLP */}
        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-card-border ml-[23px]" />
          <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative">
            <div className="md:col-span-1 pt-2 md:text-right hidden md:block">
              <span className="text-sm font-mono text-text-muted">Mar 2025 – May 2025</span>
            </div>

            <div className="hidden md:flex absolute left-0 w-[47px] h-full items-start justify-center top-2">
              <div className="w-3 h-3 rounded-full bg-card-border ring-4 ring-background" />
            </div>

            <div className="md:col-span-3 space-y-6 bg-card border border-card-border p-6 md:p-8 rounded-2xl relative hover:border-accent/40 transition-colors">
              <div className="md:hidden text-sm font-mono text-text-muted mb-2 flex items-center gap-2">
                <Calendar size={14} /> Mar 2025 – May 2025
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-text-primary">Python / Django Developer</h2>
                <div className="text-text-secondary font-medium flex items-center gap-2 text-sm">
                  <Briefcase size={16} className="text-accent" /> Zecser Business LLP · Remote Contract (Client Recharge Application)
                </div>
              </div>

              <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
                <p>
                  Led system architecture and codebase initialization for a proprietary recharge platform, defining clean project structure and coding standards that reduced developer onboarding time by 20%.
                </p>
                <ul className="space-y-2.5 list-none">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="text-emerald-400 mt-1 shrink-0" size={16} />
                    <span><strong>Cloud Infrastructure:</strong> Deployed production applications on AWS EC2 with Docker, Nginx reverse proxy, and Gunicorn WSGI on Linux.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="text-emerald-400 mt-1 shrink-0" size={16} />
                    <span><strong>AWS Services Integration:</strong> Configured AWS S3, RDS (managed PostgreSQL), and SES for reliable cloud storage and transactional messaging.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span><strong>Engineering Mentorship & CI/CD:</strong> Mentored junior developers, established standardized Git workflows, and authored automated GitHub Actions CI/CD pipelines.</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-2 flex-wrap pt-4 border-t border-card-border">
                {["Python", "Django", "AWS EC2", "AWS S3", "RDS PostgreSQL", "Docker", "Nginx", "Gunicorn"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-secondary border border-card-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience 3: Eduport */}
        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-card-border ml-[23px]" />
          <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative">
            <div className="md:col-span-1 pt-2 md:text-right hidden md:block">
              <span className="text-sm font-mono text-text-muted">Jan 2024 – Feb 2025</span>
            </div>

            <div className="hidden md:flex absolute left-0 w-[47px] h-full items-start justify-center top-2">
              <div className="w-3 h-3 rounded-full bg-card-border ring-4 ring-background" />
            </div>

            <div className="md:col-span-3 space-y-6 bg-card border border-card-border p-6 md:p-8 rounded-2xl relative hover:border-accent/40 transition-colors">
              <div className="md:hidden text-sm font-mono text-text-muted mb-2 flex items-center gap-2">
                <Calendar size={14} /> Jan 2024 – Feb 2025
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-text-primary">Python / Django Developer</h2>
                <div className="text-text-secondary font-medium flex items-center gap-2 text-sm">
                  <Briefcase size={16} className="text-accent" /> Eduport · B2C E-Learning Platform (500K+ Downloads · 50K+ DAU)
                </div>
              </div>

              <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
                <p>
                  Engineered core REST APIs for platform v2.0, redesigning database schemas and relational models to support high user concurrency at scale.
                </p>
                <ul className="space-y-2.5 list-none">
                  <li className="flex items-start gap-2.5">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span><strong>Database Tuning & N+1 Elimination:</strong> Systematically eliminated N+1 query bottlenecks and redesigned core schemas, significantly reducing average API latency.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span><strong>Redis Caching Architecture:</strong> Implemented comprehensive Redis caching layers to drastically reduce database load by over 60% during peak concurrent traffic.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="text-emerald-400 mt-1 shrink-0" size={16} />
                    <span><strong>Cross-Functional Collaboration:</strong> Collaborated with mobile frontend, product, and QA teams to ship zero-regression feature releases.</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-2 flex-wrap pt-4 border-t border-card-border">
                {["Python", "Django", "PostgreSQL", "Redis", "Query Optimization", "Schema Design"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-secondary border border-card-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience 4: Brototype Bootcamp */}
        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-transparent ml-[23px]" />
          <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative">
            <div className="md:col-span-1 pt-2 md:text-right hidden md:block">
              <span className="text-sm font-mono text-text-muted">Dec 2022 – Nov 2023</span>
            </div>

            <div className="hidden md:flex absolute left-0 w-[47px] h-full items-start justify-center top-2">
              <div className="w-3 h-3 rounded-full bg-card-border ring-4 ring-background" />
            </div>

            <div className="md:col-span-3 space-y-6 bg-card border border-card-border p-6 md:p-8 rounded-2xl relative hover:border-accent/40 transition-colors">
              <div className="md:hidden text-sm font-mono text-text-muted mb-2 flex items-center gap-2">
                <Calendar size={14} /> Dec 2022 – Nov 2023
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-text-primary">Software Development Bootcamp</h2>
                <div className="text-text-secondary font-medium flex items-center gap-2 text-sm">
                  <Code2 size={16} className="text-accent" /> Brototype, Kochi · Intensive Full-Time Training
                </div>
              </div>

              <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
                <p>
                  1-year intensive, self-driven program with strict schedules, weekly project deliverables, and mandatory reviewer evaluations.
                </p>
                <ul className="space-y-2.5 list-none">
                  <li className="flex items-start gap-2.5">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span>Built an E-commerce web application using Django, Django Templates, HTML, CSS, AJAX, and Bootstrap.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span>Built a School Management System using React, Django REST Framework, and Tailwind CSS.</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-2 flex-wrap pt-4 border-t border-card-border">
                {["Django", "React", "DRF", "PostgreSQL", "AJAX", "Bootstrap", "Tailwind CSS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-secondary border border-card-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-card-border flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <span>← Back to Selected Work</span>
        </Link>
        <Link
          href="/architecture"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <span>Explore System Architecture →</span>
        </Link>
      </div>
    </div>
  );
}
