import { ArrowLeft, ArrowRight, CheckCircle2, Cloud, Code2, Database, GitBranch, Layers3, Server, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const stages = [
  {
    number: "01",
    title: "Developer Push",
    icon: <GitBranch size={22} />,
    description: "Code is pushed to GitHub, triggering the automated delivery workflow.",
    technologies: ["Git", "GitHub", "GitHub Actions"],
  },
  {
    number: "02",
    title: "Container Build",
    icon: <Code2 size={22} />,
    description: "Each application service is packaged into reproducible Docker images.",
    technologies: ["Docker", "Docker Hub"],
  },
  {
    number: "03",
    title: "Infrastructure",
    icon: <Cloud size={22} />,
    description: "AWS infrastructure is provisioned and managed as code.",
    technologies: ["AWS", "Terraform", "VPC", "EC2", "ALB"],
  },
  {
    number: "04",
    title: "Configuration",
    icon: <Server size={22} />,
    description: "Ansible configures servers, installs dependencies and deploys services.",
    technologies: ["Ansible", "AWS SSM", "Linux"],
  },
  {
    number: "05",
    title: "Microservices",
    icon: <Layers3 size={22} />,
    description: "The recruitment platform runs as independently deployable services.",
    technologies: ["FastAPI", "React", "Nginx", "Docker"],
  },
  {
    number: "06",
    title: "Data Layer",
    icon: <Database size={22} />,
    description: "Persistent and asynchronous workloads use dedicated infrastructure services.",
    technologies: ["PostgreSQL", "Redis", "RabbitMQ"],
  },
  {
    number: "07",
    title: "Monitoring",
    icon: <Workflow size={22} />,
    description: "Application and infrastructure health can be observed through metrics and dashboards.",
    technologies: ["Prometheus", "Grafana"],
  },
  {
    number: "08",
    title: "Secure Access",
    icon: <ShieldCheck size={22} />,
    description: "Traffic is routed through the load balancer and exposed securely through Cloudflare.",
    technologies: ["AWS ALB", "Cloudflare Tunnel", "HTTPS"],
  },
];

const services = [
  ["Frontend", "React + Vite", "User interface and client-side experience"],
  ["Auth Service", "FastAPI", "Authentication and user management"],
  ["Resume Service", "FastAPI", "Resume upload and processing"],
  ["Job Service", "FastAPI", "Job creation and management"],
  ["Matching Service", "FastAPI", "Resume/job skill matching"],
  ["AI Worker", "Python", "Asynchronous AI processing"],
  ["Notification", "FastAPI", "Notification workflows"],
];

const problems = [
  {
    title: "Nginx 502 Bad Gateway",
    problem: "Nginx was forwarding traffic to the frontend development port instead of the production container port.",
    fix: "Changed the upstream from port 5173 to the Nginx-served frontend port 80.",
  },
  {
    title: "PostgreSQL hostname resolution",
    problem: "Services deployed across different EC2 instances could not resolve the Docker Compose hostname postgres.",
    fix: "Reconfigured cross-host database connectivity using the reachable PostgreSQL host address.",
  },
  {
    title: "ALB target unhealthy",
    problem: "The Application Load Balancer target group expected port 5173 while the frontend container served traffic on port 80.",
    fix: "Updated the Terraform target group and health-check configuration to use port 80.",
  },
  {
    title: "Hardcoded localhost APIs",
    problem: "Frontend and AI worker requests were pointing to localhost, which only worked in the original local environment.",
    fix: "Moved API communication to Nginx proxy routes and environment-based service URLs.",
  },
  {
    title: "HTTPS without a domain",
    problem: "The AWS ALB did not initially have a public TLS certificate configured.",
    fix: "Used Cloudflare Tunnel to provide temporary HTTPS access without purchasing a domain.",
  },
];

function Aihirex() {
  return (
    <div className="project-detail-page aihirex-page">
      <header className="project-detail-nav">
        <div className="container project-detail-nav-inner">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <span className="project-detail-nav-label">01 / CASE STUDY</span>
        </div>
      </header>

      <main>
        <section className="project-detail-hero">
          <div className="container">
            <div className="project-detail-eyebrow">
              <span className="live-dot" />
              CLOUD • DEVOPS • MICROSERVICES
            </div>

            <h1>
              AIHireX
              <span>Recruitment Platform.</span>
            </h1>

            <p className="project-detail-lead">
              An AI-powered recruitment platform designed as a distributed
              microservices system and deployed on AWS using Docker,
              Terraform, Ansible and automated delivery practices.
            </p>

            <div className="detail-stats">
              <div>
                <strong>7+</strong>
                <span>APPLICATION SERVICES</span>
              </div>
              <div>
                <strong>AWS</strong>
                <span>CLOUD PLATFORM</span>
              </div>
              <div>
                <strong>IaC</strong>
                <span>TERRAFORM + ANSIBLE</span>
              </div>
              <div>
                <strong>CI/CD</strong>
                <span>AUTOMATED DELIVERY</span>
              </div>
            </div>
          </div>
        </section>

        <section className="architecture-section">
          <div className="container">
            <div className="detail-section-heading">
              <div>
                <p className="section-label">01 / ARCHITECTURE</p>
                <h2>From commit to production.</h2>
              </div>

              <p>
                Follow the complete delivery path from source code through
                infrastructure, services, data, monitoring and secure access.
              </p>
            </div>

            <div className="architecture-flow">
              {stages.map((stage, index) => (
                <div className="architecture-stage" key={stage.number}>
                  <div className="stage-card">
                    <div className="stage-top">
                      <span>{stage.number}</span>
                      <div className="stage-icon">{stage.icon}</div>
                    </div>

                    <h3>{stage.title}</h3>

                    <p>{stage.description}</p>

                    <div className="stage-tech">
                      {stage.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>

                  {index < stages.length - 1 && (
                    <div className="flow-arrow">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="detail-section-heading">
              <div>
                <p className="section-label">02 / MICROSERVICES</p>
                <h2>Independent services. One platform.</h2>
              </div>

              <p>
                Each major capability is isolated so services can be developed,
                deployed and troubleshot independently.
              </p>
            </div>

            <div className="service-list">
              {services.map(([name, stack, description], index) => (
                <article className="service-row" key={name}>
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>

                  <strong>{stack}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stack-section">
          <div className="container">
            <div className="detail-section-heading">
              <div>
                <p className="section-label">03 / TECHNOLOGY STACK</p>
                <h2>The infrastructure behind AIHireX.</h2>
              </div>
            </div>

            <div className="stack-matrix">
              {[
                ["Frontend", "React", "Vite", "Nginx"],
                ["Backend", "FastAPI", "Python", "Uvicorn"],
                ["Containers", "Docker", "Docker Hub", "Compose"],
                ["Cloud", "AWS", "EC2", "ALB"],
                ["Infrastructure", "Terraform", "Ansible", "AWS SSM"],
                ["Data", "PostgreSQL", "Redis", "RabbitMQ"],
                ["Automation", "Git", "GitHub Actions", "CI/CD"],
                ["Observability", "Prometheus", "Grafana", "Metrics"],
              ].map((group) => (
                <div className="stack-group" key={group[0]}>
                  <span>{group[0]}</span>
                  <div>
                    {group.slice(1).map((item) => (
                      <strong key={item}>{item}</strong>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="problems-section">
          <div className="container">
            <div className="detail-section-heading">
              <div>
                <p className="section-label">04 / ENGINEERING CHALLENGES</p>
                <h2>What broke — and how it was fixed.</h2>
              </div>

              <p>
                The project evolved through real deployment failures rather
                than stopping at a local Docker Compose environment.
              </p>
            </div>

            <div className="problem-grid">
              {problems.map((item, index) => (
                <article className="problem-card" key={item.title}>
                  <div className="problem-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{item.title}</h3>

                  <div>
                    <span>PROBLEM</span>
                    <p>{item.problem}</p>
                  </div>

                  <div>
                    <span>FIX</span>
                    <p>{item.fix}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="outcome-section">
          <div className="container">
            <div className="outcome-card">
              <div>
                <p className="section-label">05 / OUTCOME</p>
                <h2>
                  A local application transformed into a cloud deployment
                  exercise.
                </h2>
              </div>

              <div className="outcome-points">
                {[
                  "Containerized microservices architecture",
                  "AWS infrastructure managed through Terraform",
                  "Server configuration and deployment automated with Ansible",
                  "Reverse proxy and load balancing through Nginx and ALB",
                  "PostgreSQL, Redis and RabbitMQ integration",
                  "Prometheus and Grafana monitoring layer",
                  "Cloudflare Tunnel used for temporary HTTPS access",
                ].map((point) => (
                  <div key={point}>
                    <CheckCircle2 size={17} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="project-next-section">
          <div className="container">
            <Link to="/projects/bug-tracking" className="next-project-link">
              <span>
                <small>NEXT PROJECT</small>
                <strong>Bug Tracking System</strong>
              </span>
              <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Aihirex;
