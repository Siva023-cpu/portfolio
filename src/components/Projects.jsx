import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    type: "CLOUD • DEVOPS",
    title: "AIHireX",
    description:
      "AI-powered recruitment platform evolved from local development into a distributed AWS microservices deployment using infrastructure automation, containerization, CI/CD and monitoring.",
    stack: [
      "AWS",
      "Terraform",
      "Ansible",
      "Docker",
      "Nginx",
      "Prometheus",
      "Grafana",
    ],
    primary: true,
    link: "/projects/aihirex",
  },
  {
    number: "02",
    type: "DEVSECOPS",
    title: "Bug Tracking System",
    description:
      "Web-based defect management application focused on containerization, CI/CD automation, testing and security throughout the software delivery lifecycle.",
    stack: ["Python", "Flask", "Docker", "Jenkins"],
    primary: false,
    link: "/projects/bug-tracking",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">02 / FEATURED WORK</p>

            <h2>Projects built for the real world.</h2>
          </div>

          <p>
            Two projects. One focus: building, automating, deploying and
            operating reliable systems.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card ${
                project.primary ? "project-primary" : ""
              }`}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-content">
                <div className="project-tag">{project.type}</div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <Link to={project.link} className="project-link">
                  Explore architecture
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
