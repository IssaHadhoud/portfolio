import Link from "next/link";
import Reveal from "../../component/Reveal";
import { getDictionary } from "../../../dictionaries";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const m = dict.meta.training;
  const path = `/${locale}/training`;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: path, languages: { en: "/en/training", ar: "/ar/training" } },
    openGraph: { title: `${m.title} — ${dict.locale === "ar" ? "عيسى أبوهدهود" : "Issa AbuHadhoud"}`, description: m.description, url: path },
  };
}

const mernTechnologies = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "REST APIs",
  "Authentication",
  "Git",
  "GitHub",
  "Full-Stack Development",
];

const certMeta = [
  { key: "dotJordan", logo: "DJ", type: "training", badges: mernTechnologies, file: "/DOT-Jordan-MERN-Certificate.pdf", credentialId: "DOT-AM-FS-4-25-YGA-Is0526" },
  { key: "grayMatter", logo: "GM", type: "experience", badges: ["Embedded Systems", "Software Engineering", "Team Collaboration"], file: "/GrayMatterAI-Experience-Certificate.pdf", credentialId: null },
];

export default async function TrainingPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.training;

  return (
    <div style={{ padding: "6rem 1.5rem", minHeight: "70vh" }}>
      <div className="container-fluid" style={{ maxWidth: "900px" }}>
        <Reveal type="up">
          <p className="section-label">{t.label}</p>
          <h1 className="section-title">{t.title}</h1>
          <p className="section-body" style={{ marginBottom: "3rem" }}>
            {t.body}
          </p>
        </Reveal>

        <div className="cert-timeline">
          {certMeta.map((cert, i) => {
            const c = t.certs[cert.key];
            return (
              <Reveal type="scale" delay={i * 0.08} key={cert.key}>
                <div className="cert-card" style={{ marginBottom: "1.5rem" }}>
                  <span className="cert-timeline-dot" />
                  <svg className="cert-icon-check" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>

                  <div className="cert-top">
                    <div className="cert-logo">{cert.logo}</div>
                    <div>
                      <p className="cert-org">{c.org}</p>
                      <p className="cert-date">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        {c.date}
                      </p>
                    </div>
                  </div>

                  <p className="cert-title">{c.title}</p>
                  <p className="cert-desc">{c.desc}</p>

                  <div className="cert-badges" style={{ marginBottom: "1.4rem" }}>
                    {cert.badges.map((b) => (
                      <span key={b} className="tech-badge">
                        {b}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                    <a href={cert.file} download className="btn-neon" style={{ fontSize: "0.72rem", padding: "0.65rem 1.3rem" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                      </svg>
                      {t.download}
                    </a>
                    <a href={cert.file} target="_blank" rel="noopener noreferrer" className="btn-github">
                      {t.viewPdf}
                    </a>
                    {cert.credentialId && (
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted)" }}>
                        {t.idLabel}: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal type="fade" delay={0.1}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <Link href={`/${locale}/project`} className="btn-neon">
              {t.seeProjects}
            </Link>
            <Link href={`/${locale}/about`} className="btn-ghost">
              {t.backAbout}
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
