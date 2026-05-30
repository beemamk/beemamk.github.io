import { MermaidDiagram } from "@/components/ui/MermaidDiagram";

const exportPipelineChart = `
sequenceDiagram
    participant Client
    participant API as Django API (Gunicorn)
    participant Redis as Redis (Broker/Result)
    participant Worker as Celery Worker
    participant DB as PostgreSQL
    participant Storage as OCI Storage
    
    Client->>API: POST /api/v1/export/
    API->>Redis: Enqueue Export Task
    API-->>Client: 202 Accepted (Task ID)
    Worker->>Redis: Pick up Task
    Worker->>DB: Complex Aggregation Query
    DB-->>Worker: Data Result Set
    Worker->>Worker: Generate CSV/PDF
    Worker->>Storage: Upload File
    Storage-->>Worker: Return Pre-signed URL
    Worker->>Redis: Update Task Status = SUCCESS & URL
    Client->>API: GET /api/v1/export/status/{id}
    API->>Redis: Check Status
    Redis-->>API: SUCCESS, File URL
    API-->>Client: 200 OK (URL)
`;

const awsArchitectureChart = `
graph TD
    User((User)) --> Route53(Amazon Route 53)
    Route53 --> ALB(Application Load Balancer)
    ALB --> EC2_1[EC2: Nginx + Gunicorn]
    ALB --> EC2_2[EC2: Nginx + Gunicorn]
    EC2_1 --> RDS[(RDS PostgreSQL Multi-AZ)]
    EC2_2 --> RDS
    EC2_1 --> ElastiCache[(ElastiCache Redis)]
    EC2_2 --> ElastiCache
    EC2_1 --> S3[Amazon S3]
    EC2_2 --> S3
    EC2_1 --> SES[Amazon SES]
`;

export default function Architecture() {
  return (
    <div className="flex-1 max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16 w-full">
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
          System <span className="text-accent">Architecture</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          A showcase of distributed systems design, asynchronous processing pipelines, and scalable cloud infrastructure.
        </p>
      </div>

      <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        {/* Architecture 1 */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-text-primary">Asynchronous Export Pipeline</h2>
            <p className="text-text-secondary leading-relaxed max-w-3xl">
              To handle long-running operations like bulk data exports and financial reconciliations, I decouple heavy computations from the synchronous request-response cycle using <strong>Celery and Redis</strong>. This ensures API latency remains sub-100ms regardless of background workloads.
            </p>
          </div>
          
          <MermaidDiagram chart={exportPipelineChart} />
          
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
            <h3 className="text-accent font-semibold mb-2">Engineering Impact</h3>
            <p className="text-text-primary text-sm leading-relaxed">
              Before implementing this architecture, complex administrative exports caused synchronous timeouts, degrading the platform for active users. By decoupling the export process, API timeouts were completely eliminated, and users gained real-time progress tracking via Redis polling.
            </p>
          </div>
        </section>

        {/* Architecture 2 */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-text-primary">Standard AWS Production Architecture</h2>
            <p className="text-text-secondary leading-relaxed max-w-3xl">
              A standard scalable and fault-tolerant infrastructure design for enterprise web applications. Designed for high availability, utilizing managed services to minimize ops overhead while maximizing reliability.
            </p>
          </div>
          
          <MermaidDiagram chart={awsArchitectureChart} />
          
          <div className="bg-card border border-card-border rounded-xl p-6">
            <h3 className="text-text-primary font-semibold mb-2">Key Components</h3>
            <ul className="text-sm text-text-secondary space-y-2 list-disc list-inside">
              <li><strong>Load Balancing:</strong> ALB distributes incoming traffic across multiple EC2 instances across different availability zones.</li>
              <li><strong>Data Persistence:</strong> Amazon RDS (PostgreSQL) deployed in Multi-AZ for automatic failover and automated backups.</li>
              <li><strong>Caching & Task Broker:</strong> ElastiCache (Redis) handles session caching and acts as the Celery message broker.</li>
              <li><strong>Storage & Comms:</strong> S3 for secure static/media asset delivery, and SES for transactional email dispatching.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
