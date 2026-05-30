import { Briefcase, Calendar, ShieldCheck, Zap } from "lucide-react";

export default function Experience() {
  return (
    <div className="flex-1 max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16 w-full">
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
          Engineering <span className="text-accent">Experience</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          A track record of designing secure, scalable systems for enterprise platforms and high-traffic consumer applications.
        </p>
      </div>

      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        {/* Experience 1 */}
        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-card-border ml-[23px]" />
          <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative">
            <div className="md:col-span-1 pt-2 md:text-right hidden md:block">
              <span className="text-sm font-mono text-text-secondary">Oct 2025 – Present</span>
            </div>
            
            <div className="hidden md:flex absolute left-0 w-[47px] h-full items-start justify-center top-2">
              <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
            </div>

            <div className="md:col-span-3 space-y-6 bg-card border border-card-border p-6 md:p-8 rounded-xl relative hover:border-accent/30 transition-colors">
              <div className="md:hidden text-sm font-mono text-text-secondary mb-2 flex items-center gap-2">
                <Calendar size={14} /> Oct 2025 – Present
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-text-primary">Backend Engineer</h3>
                <div className="text-accent font-medium flex items-center gap-2">
                  <Briefcase size={16} /> Veuz Concepts (Saudi Ministry Project)
                </div>
              </div>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Architected and deployed highly secure, scalable backend infrastructure for an international government ministry. Engineered systems handling complex delegation workflows, scheduling, and strict regional financial compliance.
                </p>
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-emerald-400 mt-1 shrink-0" size={16} />
                    <span><strong>ZATCA-Compliant Financial Engine:</strong> Engineered a centralized pricing and financial reconciliation engine processing complex transactions with 100% regulatory compliance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span><strong>Async Export Pipeline:</strong> Built a high-performance Celery + Redis pipeline to handle 55+ complex data export types, completely eliminating API thread blocking and timeouts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-emerald-400 mt-1 shrink-0" size={16} />
                    <span><strong>Advanced Security Protocols:</strong> Implemented rigorous RBAC, OTP, sliding JWT sessions, CAPTCHA, and specialized brute-force/timing-attack protections.</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-2 flex-wrap pt-4 border-t border-card-border">
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">Django REST Framework</span>
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">PostgreSQL</span>
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">Celery & Redis</span>
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">OCI Storage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-card-border ml-[23px]" />
          <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative">
            <div className="md:col-span-1 pt-2 md:text-right hidden md:block">
              <span className="text-sm font-mono text-text-secondary">Feb 2024 – Jan 2025</span>
            </div>
            
            <div className="hidden md:flex absolute left-0 w-[47px] h-full items-start justify-center top-2">
              <div className="w-3 h-3 rounded-full bg-card-border ring-4 ring-background" />
            </div>

            <div className="md:col-span-3 space-y-6 bg-card border border-card-border p-6 md:p-8 rounded-xl relative hover:border-accent/30 transition-colors">
              <div className="md:hidden text-sm font-mono text-text-secondary mb-2 flex items-center gap-2">
                <Calendar size={14} /> Feb 2024 – Jan 2025
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-text-primary">Software Engineer, Backend</h3>
                <div className="text-text-primary font-medium flex items-center gap-2">
                  <Briefcase size={16} /> Eduport
                </div>
              </div>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Spearheaded the V2 API architecture for a high-traffic B2C learning platform scaling to 500,000+ downloads and 50,000+ daily active users.
                </p>
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span><strong>Database Optimization:</strong> Systematically eliminated N+1 query bottlenecks and redesigned core schemas, reducing average API latency significantly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-amber-400 mt-1 shrink-0" size={16} />
                    <span><strong>Caching Architecture:</strong> Implemented comprehensive Redis caching layers to drastically reduce database load by over 60% during peak concurrent traffic.</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-2 flex-wrap pt-4 border-t border-card-border">
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">Python</span>
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">Redis</span>
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">Query Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-transparent ml-[23px]" />
          <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative">
            <div className="md:col-span-1 pt-2 md:text-right hidden md:block">
              <span className="text-sm font-mono text-text-secondary">Jan 2025 – May 2025</span>
            </div>
            
            <div className="hidden md:flex absolute left-0 w-[47px] h-full items-start justify-center top-2">
              <div className="w-3 h-3 rounded-full bg-card-border ring-4 ring-background" />
            </div>

            <div className="md:col-span-3 space-y-6 bg-card border border-card-border p-6 md:p-8 rounded-xl relative hover:border-accent/30 transition-colors">
              <div className="md:hidden text-sm font-mono text-text-secondary mb-2 flex items-center gap-2">
                <Calendar size={14} /> Jan 2025 – May 2025
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-text-primary">Backend Developer</h3>
                <div className="text-text-primary font-medium flex items-center gap-2">
                  <Briefcase size={16} /> Zecser Business LLP
                </div>
              </div>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Led the backend architectural design and AWS cloud infrastructure provisioning for enterprise initiatives.
                </p>
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-emerald-400 mt-1 shrink-0" size={16} />
                    <span><strong>Cloud Deployment:</strong> Managed robust AWS deployments utilizing EC2, S3, RDS, and SES, orchestrated behind Nginx and Gunicorn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-emerald-400 mt-1 shrink-0" size={16} />
                    <span><strong>Engineering Leadership:</strong> Established standardized Git workflows, automated CI/CD pipelines via GitHub Actions, and mentored junior developers.</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-2 flex-wrap pt-4 border-t border-card-border">
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">AWS (EC2, S3, RDS)</span>
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">Nginx & Gunicorn</span>
                <span className="px-3 py-1 bg-background rounded-md text-xs font-mono text-text-primary">GitHub Actions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
