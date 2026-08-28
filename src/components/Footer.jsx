import { ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-brand-mark">SK</div>

            <div>
              <strong>SIVA SANKAR KUMAR</strong>
              <span>DEVOPS & CLOUD ENGINEERING</span>
            </div>
          </div>

          <div className="footer-stack">
            <span>REACT</span>
            <span className="footer-dot">•</span>
            <span>FASTAPI</span>
            <span className="footer-dot">•</span>
            <span>DOCKER</span>
            <span className="footer-dot">•</span>
            <span>AWS</span>
            <span className="footer-dot">•</span>
            <span>TERRAFORM</span>
            <span className="footer-dot">•</span>
            <span>ANSIBLE</span>
            <span className="footer-dot">•</span>
            <span>KUBERNETES</span>
            <span className="footer-dot">•</span>
            <span>PROMETHEUS</span>
            <span className="footer-dot">•</span>
            <span>GRAFANA</span>
          </div>

          <button
            type="button"
            className="footer-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={15} />
          </button>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Siva Sankar Kumar. All rights reserved.
          </span>

          <span>
            BUILT WITH REACT
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
