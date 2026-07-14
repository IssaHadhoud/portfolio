import Link from "next/link";
import Reveal from "./component/Reveal";

const techs = [
  "React.js",
  "Node.js",
  "Next.js",
  "ASP.NET Core",
  "MongoDB",
  "SQL Server",
  "REST APIs",
];

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="hero-tag">Available for work</span>
              <h1 className="hero-name">
                Issa
                <span>AbuHadhoud</span>
              </h1>
              <p className="hero-role">
                <strong className="hero-typing">Full-Stack Developer</strong> · MERN &amp; .NET
              </p>
              <p className="hero-desc">
                MIS graduate with hands-on experience building scalable web
                applications. Passionate about backend architecture, REST APIs,
                and turning complex problems into clean solutions.
              </p>
              <div className="hero-btns">
                <Link href="/project" className="btn-neon">
                  View Projects →
                </Link>
                <Link href="/resume" className="btn-ghost">
                  Download Resume
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Get in Touch
                </Link>
              </div>
              <div className="tech-stack">
                {techs.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
              <div className="social-icons">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.67-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.48-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13.88-.24 1.82-.37 2.76-.37.94 0 1.88.13 2.76.37 2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.22-2.58 5.15-5.03 5.42.39.34.74 1 .74 2.03 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.36-1.45 7.51-5.57 7.51-10.43C23.02 5.24 18.27.5 12 .5z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.25 8.25h4.32v2.02h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.68c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23h-4.5V8.25z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-center">
              <div className="hero-avatar">
                <img
                  src="/WhatsApp Image 2025-11-26 at 1.59.10 PM.jpeg"
                  alt="Issa AbuHadhoud"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </section>

      <section className="about-section">
        <Reveal type="up">
          <p className="section-label">About This Portfolio</p>
          <h2 className="section-title">Built to Showcase Real Work</h2>
          <p className="section-body">
            This portfolio highlights my journey as a MERN Stack and .NET developer —
            from dynamic frontends with React.js to robust backends with Node.js,
            ASP.NET Core, and cloud-ready databases. Every project here reflects
            real problem-solving, clean architecture, and continuous learning.
          </p>
        </Reveal>
      </section>

      <section className="featured-section">
        <Reveal type="up">
          <p className="section-label">Featured Work</p>
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>
            Selected Projects
          </h2>
        </Reveal>
        <div className="row g-4">
          <div className="col-md-6">
            <Reveal type="left" delay={0.05}>
              <div className="project-card-home">
                <h3>E-commerce Website</h3>
                <p>
                  Full-stack e-commerce platform built with the MERN stack.
                  Features user authentication, product management, and a
                  shopping cart powered by RESTful APIs.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="col-md-6">
            <Reveal type="right" delay={0.1}>
              <div className="project-card-home">
                <h3>Task Management System</h3>
                <p>
                  Task management app built with ASP.NET Core and SQL Server.
                  Supports create/update/delete tasks, team assignment, and
                  role-based access control.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal type="fade" delay={0.15}>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/project" className="btn-ghost">
              See All Projects →
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="certs-section">
        <Reveal type="up">
          <p className="section-label">Continuous Learning</p>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Training &amp; Certifications
          </h2>
          <p className="section-body" style={{ marginBottom: "2rem" }}>
            A quick look at my most recent hands-on training. See the full
            breakdown, technologies, and details on the Training page.
          </p>
        </Reveal>
        <Reveal type="scale" delay={0.1}>
          <div className="cert-card" style={{ maxWidth: "560px" }}>
            <div className="cert-top">
              <div className="cert-logo">DJ</div>
              <div>
                <p className="cert-org">MERN Stack Development Training</p>
                <p className="cert-date">📅 Jan 2026 – May 2026 · DOT Jordan</p>
              </div>
            </div>
            <p className="cert-desc">
              Intensive full-stack training covering MongoDB, Express.js,
              React.js, and Node.js — with real-world projects, REST APIs,
              and authentication systems.
            </p>
            <Link href="/training" className="btn-ghost" style={{ fontSize: "0.72rem", padding: "0.6rem 1.25rem" }}>
              View Details →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
