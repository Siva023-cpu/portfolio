function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container section-grid">
        <div>
          <p className="section-label">01 / ABOUT</p>

          <h2>
            Engineering with an automation mindset.
          </h2>
        </div>

        <div className="section-text">
          <p>
            I focus on the engineering layer between application code and
            production infrastructure — containerizing applications,
            automating environments, creating deployment pipelines, and
            solving the networking and infrastructure problems that appear
            during real deployments.
          </p>

          <p>
            My main work is centered around two projects: AIHireX, a
            cloud-deployed microservices platform, and a Bug Tracking System
            built around DevSecOps and CI/CD practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;