import Link from "next/link";
import Reveal from "../../component/Reveal";
import { getDictionary } from "../../../dictionaries";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const m = dict.meta.resume;
  const path = `/${locale}/resume`;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: path, languages: { en: "/en/resume", ar: "/ar/resume" } },
    openGraph: { title: `${m.title} — ${dict.locale === "ar" ? "عيسى أبوهدهود" : "Issa AbuHadhoud"}`, description: m.description, url: path },
  };
}

export default async function ResumePage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.resume;
  const highlights = [t.highlights.role, t.highlights.education, t.highlights.focus];

  return (
    <div style={{ padding: "6rem 1.5rem", minHeight: "70vh" }}>
      <div className="container-fluid" style={{ maxWidth: "800px" }}>
        <Reveal type="up">
          <p className="section-label">{t.label}</p>
          <h1 className="section-title">{t.title}</h1>
          <p className="section-body" style={{ marginBottom: "2.5rem" }}>
            {t.body}
          </p>
        </Reveal>

        <Reveal type="scale" delay={0.05}>
          <div className="cert-card" style={{ marginBottom: "2rem" }}>
            <div className="cert-top">
              <div className="cert-logo">CV</div>
              <div>
                <p className="cert-org">{t.cvName}</p>
                <p className="cert-date">{t.cvDate}</p>
              </div>
            </div>

            <div style={{ marginBottom: "1.4rem" }}>
              {highlights.map((h) => (
                <div
                  key={h.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0.6rem 0",
                    borderBottom: "1px solid var(--border)",
                    fontSize: "0.88rem",
                  }}
                >
                  <span style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {h.label}
                  </span>
                  <span style={{ color: "var(--text)", textAlign: "right" }}>{h.value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="/resume.pdf" download className="btn-neon" style={{ fontSize: "0.72rem", padding: "0.65rem 1.3rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                </svg>
                {t.download}
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-github">
                {t.viewBrowser}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal type="fade" delay={0.1}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href={`/${locale}/training`} className="btn-ghost">
              {t.viewCerts}
            </Link>
            <Link href={`/${locale}/contact`} className="btn-ghost">
              {t.contactMe}
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
