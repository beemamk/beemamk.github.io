import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Zap } from "lucide-react";
import { MermaidDiagram } from "@/components/ui/MermaidDiagram";

const naturaXEngineChart = `
graph TD
    Input[Incoming Orders: CSV Batch / Webhooks] --> CeleryQueue[Celery Async Validation Queue]
    CeleryQueue --> Validator{Schema & Data Validator}
    Validator -- "Validation Error" --> ErrorQueue[Error Queue & Ingestion Audit Log]
    Validator -- "Valid Order" --> Engine[5-Rule Automated Exception Engine]
    
    Engine --> R1[Rule 1: In-Transit Lag]
    Engine --> R2[Rule 2: Payment Gateway Mismatch]
    Engine --> R3[Rule 3: Inventory Stockout Gap]
    Engine --> R4[Rule 4: Address Validation Failure]
    Engine --> R5[Rule 5: Duplicate Order Check]
    
    R1 & R2 & R3 & R4 & R5 --> Escalator[Severity Classifier & Task Generator]
    Escalator --> TaskDB[(PostgreSQL Exception Tasks)]
    TaskDB --> OpsDashboard[Real-time Ops Task Dashboard]
    
    CourierHook[Carrier Webhook / Customer Update] --> AutoResolver[Auto-Resolving Engine]
    AutoResolver --> DBUpdate[Close Task & Transition Order State]
    DBUpdate --> AuditTrail[(Immutable Audit Log)]
`;

const exportPipelineChart = `
sequenceDiagram
    participant Client as Client Application
    participant API as Django REST API (Gunicorn)
    participant Redis as Redis (Broker & Cache)
    participant Worker as Celery Background Worker
    participant DB as PostgreSQL Database
    participant Storage as OCI Cloud Storage
    
    Client->>API: POST /api/v1/export/ (Filters, Format)
    API->>Redis: Enqueue Export Task
    API-->>Client: 202 Accepted (Task UUID)
    Worker->>Redis: Fetch Task from Queue
    Worker->>DB: Stream & Chunk Aggregation Query
    DB-->>Worker: Data Result Set
    Worker->>Worker: Generate CSV / PDF Report
    Worker->>Storage: Stream Upload to Object Storage
    Storage-->>Worker: Return Signed Download URL
    Worker->>Redis: Update Status = COMPLETED (URL, TTL: 24h)
    Client->>API: GET /api/v1/export/status/{uuid}
    API->>Redis: Query Task Result Cache
    Redis-->>API: COMPLETED, Download URL
    API-->>Client: 200 OK (Signed Download URL)
`;

const awsArchitectureChart = `
graph TD
    User((Client / Mobile App)) --> Route53(Amazon Route 53 DNS)
    Route53 --> ALB(Application Load Balancer)
    ALB --> EC2_1[EC2 AZ-1: Nginx + Gunicorn + Django]
    ALB --> EC2_2[EC2 AZ-2: Nginx + Gunicorn + Django]
    EC2_1 --> RDS[(Amazon RDS Multi-AZ PostgreSQL)]
    EC2_2 --> RDS
    EC2_1 --> Redis[(ElastiCache Redis: Broker & Cache)]
    EC2_2 --> Redis
    EC2_1 --> S3[Amazon S3: Media & Static Assets]
    EC2_2 --> S3
    EC2_1 --> SES[Amazon SES: Transactional Email]
`;

export default function Architecture() {
  return (
    <div className="flex-1 max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-16 w-full">
      <div className="space-y-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-accent transition-colors mb-2"
        >
          <ArrowLeft size={14} /> Back to Selected Work
        </Link>
        <p className="text-xs font-mono text-accent tracking-widest uppercase">
          SYSTEM DESIGN & CLOUD ARCHITECTURE
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
          Production <span className="text-accent">Architectures</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
          Deep-dive technical diagrams illustrating distributed task queues, automated exception recovery workflows, and fault-tolerant AWS cloud deployments.
        </p>
      </div>

      <div className="space-y-20">
        {/* Architecture 1: NaturaX Order Automation Engine */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                CASE STUDY 01
              </span>
              <a
                href="https://github.com/beemamk/Order_flow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-text-secondary hover:text-accent inline-flex items-center gap-1"
              >
                <span>github.com/beemamk/Order_flow</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              NaturaX D2C Automated Exception & Self-Healing Pipeline
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-3xl text-sm md:text-base">
              A 5-rule automated exception engine designed to eliminate manual customer support intervention for stuck e-commerce orders. Asynchronously ingests order batches via Celery, applies multi-condition business logic, surfaces actionable tasks on a real-time dashboard, and auto-resolves state upon receiving courier webhooks.
            </p>
          </div>

          <MermaidDiagram chart={naturaXEngineChart} />

          <div className="bg-card border border-card-border rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
              <Zap size={18} className="text-accent" />
              Technical Highlights
            </h3>
            <ul className="text-sm text-text-secondary space-y-2.5 list-disc list-inside">
              <li>
                <strong>Non-Blocking CSV Ingestion:</strong> Large order dumps are parsed through a Celery worker pool, validating row-level schemas before touching core database tables.
              </li>
              <li>
                <strong>Self-Healing State Machine:</strong> Tasks auto-resolve without operator action when delayed carrier webhooks deliver confirmation packets.
              </li>
              <li>
                <strong>Strict Audit Logs:</strong> Every status transition, exception escalation, and resolution note is stored with timestamped operator IDs for post-mortem analysis.
              </li>
            </ul>
          </div>
        </section>

        {/* Architecture 2: Asynchronous Export Pipeline */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-green font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              CASE STUDY 02
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Configuration-Driven Asynchronous Export Pipeline
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-3xl text-sm md:text-base">
              Engineered for the Saudi Ministry (Nadena platform) to safely generate 55+ complex financial reconciliations, attendance audits, and government reports without thread starvation on web worker nodes.
            </p>
          </div>

          <MermaidDiagram chart={exportPipelineChart} />

          <div className="bg-card border border-card-border rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
              <ShieldCheck size={18} className="text-accent-green" />
              Performance & Scalability Impact
            </h3>
            <ul className="text-sm text-text-secondary space-y-2.5 list-disc list-inside">
              <li>
                <strong>Zero HTTP Timeouts:</strong> HTTP requests return immediately with a 202 Accepted and UUID, offloading all CPU and I/O overhead to Celery.
              </li>
              <li>
                <strong>Direct Cloud Storage Streaming:</strong> Generated files stream directly to OCI Object Storage, issuing short-lived pre-signed URLs to protect confidential government records.
              </li>
              <li>
                <strong>Progress Polling via Redis:</strong> Real-time percentage progress tracking cached in Redis with automatic 24-hour expiration.
              </li>
            </ul>
          </div>
        </section>

        {/* Architecture 3: AWS Production Deployment */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
              CASE STUDY 03
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Fault-Tolerant AWS Cloud Infrastructure
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-3xl text-sm md:text-base">
              Production AWS deployment model utilized for client recharge and enterprise web platforms. Designed for multi-AZ high availability, automated database backups, and rapid horizontal scaling behind Nginx and Gunicorn.
            </p>
          </div>

          <MermaidDiagram chart={awsArchitectureChart} />

          <div className="bg-card border border-card-border rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-base font-bold text-text-primary">
              Infrastructure Components
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-secondary">
              <div className="border border-card-border p-4 rounded-xl bg-background/50 space-y-1">
                <strong className="text-text-primary">Application Load Balancer:</strong>
                <p className="text-xs">Routes SSL/TLS traffic across Multi-AZ EC2 instances running Dockerized Nginx & Gunicorn.</p>
              </div>
              <div className="border border-card-border p-4 rounded-xl bg-background/50 space-y-1">
                <strong className="text-text-primary">Amazon RDS (PostgreSQL):</strong>
                <p className="text-xs">Configured in Multi-AZ with automated point-in-time snapshots and connection pooling.</p>
              </div>
              <div className="border border-card-border p-4 rounded-xl bg-background/50 space-y-1">
                <strong className="text-text-primary">Amazon ElastiCache (Redis):</strong>
                <p className="text-xs">Dual role as low-latency session/query cache and message broker for Celery workers.</p>
              </div>
              <div className="border border-card-border p-4 rounded-xl bg-background/50 space-y-1">
                <strong className="text-text-primary">Amazon S3 & SES:</strong>
                <p className="text-xs">Encrypted object storage for user uploads, coupled with SES for transactional emails.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="pt-8 border-t border-card-border flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <span>← Back to Selected Work</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <span>Contact Beema Beevi M K →</span>
        </Link>
      </div>
    </div>
  );
}
