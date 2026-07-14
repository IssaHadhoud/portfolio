import Link from "next/link";
import Reveal from "../component/Reveal";

export const metadata = {
  title: "Resume",
  description:
    "Download Issa AbuHadhoud's resume — Full-Stack Developer specializing in the MERN stack and ASP.NET Core.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume — Issa AbuHadhoud",
    description:
      "Download Issa AbuHadhoud's resume — Full-Stack Developer specializing in the MERN stack and ASP.NET Core.",
    url: "/resume",
  },
};

const highlights = [
  { label: "Role", value: "Full-Stack Developer (MERN & .NET)" },
  { label: "Education", value: "MIS Graduate" },
  { label: "Focus", value: "React, Node.js, ASP.NET Core, MongoDB, SQL Server" },
];

const ResumePage = () => {
  return (
    <div style={{ padding: "6rem 1.5rem", minHeight: "70vh" }}>
      <div className="container-fluid" style={{ maxWidth: "800px" }}>
        <Reveal type="up">
          <p className="section-label">Resume</p>
          <h1 className="section-title">Download My Resume</h1>
          <p className="section-body" style={{ marginBottom: "2.5rem" }}>
            Get a full overview of my experience, education, and technical
            skills as a PDF you can keep, print, or share.
          </p>
        </Reveal>

        <Reveal type="scale" delay={0.05}>
          <div className="cert-card" style={{ marginBottom: "2rem" }}>
            <div className="cert-top">
              <div className="cert-logo">CV</div>
              <div>
                <p className="cert-org">Issa AbuHadhoud</p>
                <p className="cert-date">Updated resume, ready to download</p>
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
              <a
                href="/resume.pdf"
                download
                className="btn-neon"
                style={{ fontSize: "0.72rem", padding: "0.65rem 1.3rem" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                </svg>
                Download Resume (PDF)
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-github">
                View in Browser ↗
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal type="fade" delay={0.1}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/training" className="btn-ghost">
              View Certifications
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Me
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ResumePage;
