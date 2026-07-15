import Link from "next/link";
import Reveal from "../component/Reveal";
import { getDictionary } from "../../dictionaries";

const techs = [
  "React.js",
  "Node.js",
  "Next.js",
  "ASP.NET Core",
  "MongoDB",
  "SQL Server",
  "REST APIs",
];

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.home;

  return (
    <div>
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="hero-tag">{t.tag}</span>
              <h1 className="hero-name">
                {t.firstName}
                <span>{t.lastName}</span>
              </h1>
              <p className="hero-role">
                <strong className="hero-typing">{t.role}</strong> · {t.roleSub}
              </p>
              <p className="hero-desc">{t.desc}</p>
              <div className="hero-btns">
                <Link href={`/${locale}/project`} className="btn-neon">
                  {t.viewProjects}
                </Link>
                <Link href={`/${locale}/resume`} className="btn-ghost">
                  {t.downloadResume}
                </Link>
                <Link href={`/${locale}/contact`} className="btn-ghost">
                  {t.getInTouch}
                </Link>
              </div>
              <div className="tech-stack">
                {techs.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
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
          <span>{t.scroll}</span>
          <span>↓</span>
        </div>
      </section>

      <section className="about-section">
        <Reveal type="up">
          <p className="section-label">{t.aboutLabel}</p>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="section-body">{t.aboutBody}</p>
        </Reveal>
      </section>

      <section className="featured-section">
        <Reveal type="up">
          <p className="section-label">{t.featuredLabel}</p>
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>
            {t.featuredTitle}
          </h2>
        </Reveal>
        <div className="row g-4">
          <div className="col-md-6">
            <Reveal type="left" delay={0.05}>
              <div className="project-card-home">
                <h3>{t.project1Title}</h3>
                <p>{t.project1Desc}</p>
              </div>
            </Reveal>
          </div>
          <div className="col-md-6">
            <Reveal type="right" delay={0.1}>
              <div className="project-card-home">
                <h3>{t.project2Title}</h3>
                <p>{t.project2Desc}</p>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal type="fade" delay={0.15}>
          <div style={{ marginTop: "2rem" }}>
            <Link href={`/${locale}/project`} className="btn-ghost">
              {t.seeAll}
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="certs-section">
        <Reveal type="up">
          <p className="section-label">{t.certsLabel}</p>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            {t.certsTitle}
          </h2>
          <p className="section-body" style={{ marginBottom: "2rem" }}>
            {t.certsBody}
          </p>
        </Reveal>
        <Reveal type="scale" delay={0.1}>
          <div className="cert-card" style={{ maxWidth: "560px" }}>
            <div className="cert-top">
              <div className="cert-logo">DJ</div>
              <div>
                <p className="cert-org">{t.certOrg}</p>
                <p className="cert-date">{t.certDate}</p>
              </div>
            </div>
            <p className="cert-desc">{t.certDesc}</p>
            <Link href={`/${locale}/training`} className="btn-ghost" style={{ fontSize: "0.72rem", padding: "0.6rem 1.25rem" }}>
              {t.viewDetails}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
