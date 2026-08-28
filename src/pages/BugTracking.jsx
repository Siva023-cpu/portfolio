import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Container,
  GitBranch,
  Lock,
  Server,
  ShieldCheck,
  Terminal,
  TestTube2,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const architectureStages = [
  {
    number: "01",
    title: "Developer",
    description: "Code changes are created and committed during development.",
    icon: Code2,
    tech: "Python / Flask",
  },
  {
    number: "02",
    title: "GitHub",
    description: "Source code and version history are maintained in Git.",
    icon: GitBranch,
    tech: "Git / GitHub",
  },
  {
    number: "03",
    title: "Jenkins",
    description: "A CI pipeline automatically starts after source changes.",
    icon: Workflow,
    tech: "Jenkins CI",
  },
  {
    number: "04",
    title: "Security",
    description:
      "Static analysis and dependency security checks run before delivery.",
    icon: ShieldCheck,
    tech: "Flake8 / Bandit / pip-audit",
  },
  {
    number: "05",
    title: "Tests",
    description:
      "Automated application checks validate the code before packaging.",
    icon: TestTube2,
    tech: "Automated Testing",
  },
  {
    number: "06",
    title: "Docker",
    description:
      "The application is packaged into a reproducible container image.",
    icon: Container,
    tech: "Docker",
  },
  {
    number: "07",
    title: "AWS",
    description:
      "The containerized application is deployed into the cloud environment.",
    icon: Server,
    tech: "AWS",
  },
  {
    number: "08",
    title: "Application",
    description:
      "The deployed Bug Tracking System becomes available for users.",
    icon: Zap,
    tech: "Flask Application",
  },
];

const pipelineStages = [
  {
    number: "01",
    title: "Checkout",
    command: "git checkout",
    description: "Jenkins retrieves the latest source code.",
    icon: GitBranch,
  },
  {
    number: "02",
    title: "Lint",
    command: "flake8",
    description: "Python code quality and style are checked.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Test",
    command: "pytest",
    description: "Application behaviour is validated automatically.",
    icon: TestTube2,
  },
  {
    number: "04",
    title: "Bandit",
    command: "bandit",
    description: "Python source code is scanned for security issues.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Dependency Audit",
    command: "pip-audit",
    description: "Python dependencies are checked for known vulnerabilities.",
    icon: Lock,
  },
  {
    number: "06",
    title: "Docker Build",
    command: "docker build",
    description: "A production-ready container image is created.",
    icon: Container,
  },
  {
    number: "07",
    title: "AWS Deploy",
    command: "aws deploy",
    description: "The containerized application is delivered to AWS.",
    icon: Server,
  },
  {
    number: "08",
    title: "Verify",
    command: "health check",
    description: "The deployment is validated after release.",
    icon: CheckCircle2,
  },
];

const technologyGroups = [
  {
    title: "Application",
    items: ["Python", "Flask", "HTML", "CSS"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub"],
  },
  {
    title: "CI/CD",
    items: ["Jenkins", "Pipeline Automation"],
  },
  {
    title: "Containerization",
    items: ["Docker", "Dockerfile"],
  },
  {
    title: "Security",
    items: ["Flake8", "Bandit", "pip-audit"],
  },
  {
    title: "Cloud",
    items: ["AWS", "EC2"],
  },
];

const challenges = [
  {
    title: "Manual delivery",
    problem:
      "Repeated manual build and deployment steps made releases slower and more error-prone.",
    solution:
      "Jenkins was introduced to automate the delivery workflow.",
  },
  {
    title: "Code quality",
    problem:
      "Python code needed a consistent automated quality gate.",
    solution:
      "Flake8 was integrated into the CI workflow.",
  },
  {
    title: "Application security",
    problem:
      "Security issues in Python source code and dependencies needed to be detected early.",
    solution:
      "Bandit and pip-audit were added before the container build.",
  },
  {
    title: "Environment consistency",
    problem:
      "Running the application manually across environments could introduce differences.",
    solution:
      "Docker packaged the application and its runtime requirements consistently.",
  },
];

function BugTracking() {
  return (
    <div className="project-detail-page bug-tracking-page">
      <header className="project-detail-nav">
        <div className="container project-detail-nav-inner">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <div className="project-nav-label">
            PROJECT / 02
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="project-hero">
          <div className="container">
            <div className="project-hero-grid">
              <div>
                <p className="project-eyebrow">
                  02 / DEVSECOPS PROJECT
                </p>

                <h1>
                  Bug Tracking
                  <span> System.</span>
                </h1>

                <p className="project-hero-description">
                  A web-based defect management system built with Flask and
                  delivered through an automated CI/CD workflow with Docker,
                  Jenkins, security scanning, and AWS deployment.
                </p>

                <div className="project-hero-actions">
                  <a
                    href="https://github.com/Siva023-cpu"
                    target="_blank"
                    rel="noreferrer"
                    className="project-button project-button-primary"
                  >
                    VIEW SOURCE
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="#architecture"
                    className="project-button project-button-secondary"
                  >
                    VIEW ARCHITECTURE
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="project-terminal">
                <div className="project-terminal-header">
                  <div className="terminal-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>jenkins-pipeline</span>
                </div>

                <div className="project-terminal-body">
                  <p>
                    <span className="terminal-green">$</span> git push origin
                    main
                  </p>
                  <p className="terminal-muted">
                    Triggering Jenkins pipeline...
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> flake8
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> pytest
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> bandit
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> pip-audit
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> docker build
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> aws deploy
                  </p>
                  <p className="terminal-success">
                    Pipeline completed successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT SUMMARY */}
        <section className="project-summary-section">
          <div className="container">
            <div className="project-summary-grid">
              <div>
                <p className="project-section-label">
                  01 / PROJECT OVERVIEW
                </p>

                <h2>
                  From defect
                  <br />
                  <span>to delivery.</span>
                </h2>
              </div>

              <div className="project-summary-copy">
                <p>
                  The Bug Tracking System provides a structured way to record,
                  manage, update, and track software defects through their
                  lifecycle.
                </p>

                <p>
                  The project was also used as a DevSecOps implementation:
                  source control, continuous integration, automated quality
                  checks, security analysis, containerization, and AWS-based
                  deployment were connected into one delivery workflow.
                </p>
              </div>
            </div>

            <div className="project-stats">
              <div>
                <strong>01</strong>
                <span>Web Application</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Jenkins Pipeline (CI)</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Security Checks</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Cloud Deployment (AWS)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section
          id="architecture"
          className="project-architecture-section"
        >
          <div className="container">
            <div className="project-section-heading">
              <div>
                <p className="project-section-label">
                  02 / SYSTEM ARCHITECTURE
                </p>

                <h2>
                  The system,
                  <br />
                  <span>stage by stage.</span>
                </h2>
              </div>

              <p>
                Every stage has a clear responsibility, moving the application
                from source code to a running AWS deployment.
              </p>
            </div>

            <div className="architecture-flow">
              {architectureStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div className="architecture-step" key={stage.number}>
                    <div className="architecture-node">
                      <div className="architecture-node-number">
                        {stage.number}
                      </div>

                      <div className="architecture-node-icon">
                        <Icon size={23} />
                      </div>

                      <h3>{stage.title}</h3>

                      <p>{stage.description}</p>

                      <span>{stage.tech}</span>
                    </div>

                    {index < architectureStages.length - 1 && (
                      <div className="architecture-connector">
                        <div className="architecture-line" />
                        <ArrowRight size={17} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DELIVERY PIPELINE */}
        <section className="delivery-section">
          <div className="container">
            <div className="project-section-heading">
              <div>
                <p className="project-section-label">
                  03 / DELIVERY PIPELINE
                </p>

                <h2>
                  Automated delivery,
                  <br />
                  <span>with security gates.</span>
                </h2>
              </div>

              <p>
                The pipeline validates the application before packaging and
                deployment, reducing the chance of shipping broken or
                vulnerable code.
              </p>
            </div>

            <div className="pipeline">
              {pipelineStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div className="pipeline-row" key={stage.number}>
                    <div className="pipeline-number">
                      {stage.number}
                    </div>

                    <div className="pipeline-icon">
                      <Icon size={19} />
                    </div>

                    <div className="pipeline-main">
                      <div className="pipeline-title-row">
                        <h3>{stage.title}</h3>
                        <code>{stage.command}</code>
                      </div>

                      <p>{stage.description}</p>
                    </div>

                    <div className="pipeline-status">
                      <CheckCircle2 size={17} />
                      <span>PASS</span>
                    </div>

                    {index < pipelineStages.length - 1 && (
                      <div className="pipeline-connector" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pipeline-result">
              <div>
                <CheckCircle2 size={22} />
              </div>

              <div>
                <strong>DELIVERY GATE PASSED</strong>
                <p>
                  Quality, testing, security, containerization, and deployment
                  stages completed before the application was released.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section className="security-section">
          <div className="container">
            <div className="project-section-heading">
              <div>
                <p className="project-section-label">
                  04 / DEVSECOPS CONTROLS
                </p>

                <h2>
                  Security checks
                  <br />
                  <span>before deployment.</span>
                </h2>
              </div>

              <p>
                Security was treated as part of the delivery process rather
                than a separate activity after deployment.
              </p>
            </div>

            <div className="security-grid">
              <article>
                <div className="security-icon">
                  <Code2 size={21} />
                </div>

                <span>01</span>
                <h3>Flake8</h3>
                <p>
                  Automated Python linting used to maintain code quality and
                  identify style and structural problems.
                </p>
              </article>

              <article>
                <div className="security-icon">
                  <ShieldCheck size={21} />
                </div>

                <span>02</span>
                <h3>Bandit</h3>
                <p>
                  Static security analysis for Python source code to identify
                  common security weaknesses.
                </p>
              </article>

              <article>
                <div className="security-icon">
                  <Lock size={21} />
                </div>

                <span>03</span>
                <h3>pip-audit</h3>
                <p>
                  Dependency vulnerability scanning used to identify known
                  security issues in Python packages.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="stack-section">
          <div className="container">
            <div className="project-section-heading">
              <div>
                <p className="project-section-label">
                  05 / TECHNOLOGY STACK
                </p>

                <h2>
                  Tools used to
                  <br />
                  <span>build and deliver it.</span>
                </h2>
              </div>
            </div>

            <div className="technology-grid">
              {technologyGroups.map((group) => (
                <article key={group.title}>
                  <div className="technology-heading">
                    <Terminal size={17} />
                    <span>{group.title}</span>
                  </div>

                  <div className="technology-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="challenges-section">
          <div className="container">
            <div className="project-section-heading">
              <div>
                <p className="project-section-label">
                  06 / ENGINEERING CHALLENGES
                </p>

                <h2>
                  Problems encountered.
                  <br />
                  <span>Engineering solutions.</span>
                </h2>
              </div>
            </div>

            <div className="challenge-list">
              {challenges.map((challenge, index) => (
                <article key={challenge.title}>
                  <div className="challenge-number">
                    0{index + 1}
                  </div>

                  <div>
                    <h3>{challenge.title}</h3>

                    <p>
                      <strong>Problem:</strong>{" "}
                      {challenge.problem}
                    </p>

                    <p>
                      <strong>Solution:</strong>{" "}
                      {challenge.solution}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="project-final-section">
          <div className="container">
            <div className="project-final-box">
              <p className="project-section-label">
                07 / ENGINEERING OUTCOME
              </p>

              <h2>
                A bug tracker that became
                <span> a complete delivery exercise.</span>
              </h2>

              <p>
                The project demonstrates more than application development.
                It connects Python development, Git-based collaboration,
                Jenkins CI/CD, automated testing, security analysis, Docker
                containerization, and AWS deployment into one practical
                DevSecOps workflow.
              </p>

              <div className="final-actions">
                <a
                  href="https://github.com/Siva023-cpu"
                  target="_blank"
                  rel="noreferrer"
                  className="project-button project-button-primary"
                >
                  VIEW GITHUB
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/"
                  className="project-button project-button-secondary"
                >
                  BACK TO PORTFOLIO
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BugTracking;
