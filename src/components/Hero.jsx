import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Terminal } from "lucide-react";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid" />

      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">
            <span className="status-dot" />
            DEVOPS • CLOUD • DEVSECOPS
          </div>

          <h1>
            Building systems.
            <br />
            <span>Automating infrastructure.</span>
          </h1>

          <p className="hero-description">
            I'm Siva Sankar Kumar Mutte, a DevOps-focused engineer building
            reliable applications, automated infrastructure, and
            production-ready cloud systems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button button-primary">
              Explore Projects
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="button button-secondary">
              Get in touch
            </a>
          </div>

          <div className="hero-tech">
            <span>AWS</span>
            <span>Terraform</span>
            <span>Ansible</span>
            <span>Docker</span>
            <span>CI/CD</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-terminal"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>

            <span className="terminal-title">
              <Terminal size={13} />
              ~/portfolio
            </span>
          </div>

          <div className="terminal-body">
            <div>
              <span className="terminal-prompt">$</span> whoami
            </div>

            <div className="terminal-output">
              devops-engineer
            </div>

            <div>
              <span className="terminal-prompt">$</span> cat focus.txt
            </div>

            <div className="terminal-output">
              AWS
              <br />
              Infrastructure as Code
              <br />
              Containerization
              <br />
              CI/CD
              <br />
              DevSecOps
            </div>

            <div>
              <span className="terminal-prompt">$</span> ./deploy.sh
              <span className="cursor">▋</span>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}

export default Hero;