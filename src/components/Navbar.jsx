import { Menu } from "lucide-react";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M5.1 3.5A2.5 2.5 0 1 1 5.1 8a2.5 2.5 0 0 1 0-4.5ZM3 9.5h4.2V21H3V9.5Zm6.8 0H14v1.57h.06c.56-1.06 1.93-2.18 3.98-2.18 4.26 0 5.05 2.8 5.05 6.44V21h-4.2v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21H9.8V9.5Z" />
    </svg>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">

        <a href="#home" className="brand">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>SIVA</span>
        </a>

        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">

          <a
            href="https://github.com/Siva023-cpu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/siva-sankar-kumar-m-803633315/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          <button
            type="button"
            className="mobile-menu"
            aria-label="Open navigation"
          >
            <Menu size={22} />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
