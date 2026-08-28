import {
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJenkins,
  SiTerraform,
  SiAnsible,
  SiLinux,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiCloudflare,
} from "react-icons/si";

import {
  Cloud,
  Network,
  ShieldCheck,
  Server,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "CLOUD",
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "EC2", icon: Server },
      { name: "ALB", icon: Network },
      { name: "VPC", icon: Network },
      { name: "Cloudflare", icon: SiCloudflare },
    ],
  },

  {
    number: "02",
    title: "CONTAINERS",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Docker Compose", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker Hub", icon: SiDocker },
      { name: "Nginx", icon: SiNginx },
    ],
  },

  {
    number: "03",
    title: "CI / CD",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Jenkins", icon: SiJenkins },
    ],
  },

  {
    number: "04",
    title: "AUTOMATION",
    skills: [
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "AWS SSM", icon: Cloud },
      { name: "Linux", icon: SiLinux },
    ],
  },

  {
    number: "05",
    title: "BACKEND",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "RabbitMQ", icon: SiRabbitmq },
    ],
  },

  {
    number: "06",
    title: "DEVSECOPS",
    skills: [
      { name: "IAM", icon: ShieldCheck },
      { name: "Infrastructure", icon: SiTerraform },
      { name: "Cloud Security", icon: SiCloudflare },
      { name: "Linux Security", icon: SiLinux },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-heading skills-heading">
          <div>
            <p className="section-label">03 / DEVOPS TOOLKIT</p>

            <h2>
              Tools I use to
              <br />
              <span>build and ship.</span>
            </h2>
          </div>

          <p>
            A practical stack built around cloud infrastructure,
            automation, containers, CI/CD, backend services and
            production deployment.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-top">
                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-card-category">
                  {group.title}
                </span>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div className="skill-item" key={skill.name}>
                      <Icon className="skill-logo" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-terminal">
          <div className="skills-terminal-icon">
            <Terminal size={18} />
          </div>

          <div>
            <span className="skills-terminal-label">
              CURRENT APPROACH
            </span>

            <p>
              Infrastructure as code → automated configuration →
              containerized services → Kubernetes orchestration →
              load balancing → monitoring.
            </p>
          </div>

          <span className="skills-orchestration">
            K8S
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;