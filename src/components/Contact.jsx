import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="contact-top">
          <p className="section-label">04 / GET IN TOUCH</p>

          <h2>
            Let's build
            <br />
            <span>reliable systems.</span>
          </h2>

          <p className="contact-description">
            I'm open to internships, entry-level opportunities,
            DevOps roles and projects where I can build, automate
            and improve reliable cloud infrastructure.
          </p>
        </div>

        <div className="contact-grid">

          <a
            href="mailto:mssk6304445254@gmail.com?subject=Opportunity%20for%20Siva%20Sankar"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <Mail size={20} />
            </div>

            <div className="contact-card-content">
              <span>EMAIL</span>
              <strong>mssk6304445254@gmail.com</strong>
            </div>

            <ArrowUpRight size={18} />
          </a>

          <a
            href="https://wa.me/919000185635"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <MessageCircle size={20} />
            </div>

            <div className="contact-card-content">
              <span>WHATSAPP</span>
              <strong>+91 9000185635</strong>
            </div>

            <ArrowUpRight size={18} />
          </a>

        </div>

        <div className="contact-bottom">

          <p>
            Have an opportunity or a project in mind?
            <br />
            Let's start a conversation.
          </p>

          <a
            href="mailto:mssk6304445254@gmail.com?subject=Portfolio%20Contact"
            className="contact-cta"
          >
            <span>SEND AN EMAIL</span>
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
