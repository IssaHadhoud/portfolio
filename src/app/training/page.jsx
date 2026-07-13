import Link from "next/link";
import Reveal from "../component/Reveal";

export const metadata = {
  title: "Training & Certifications",
  description:
    "MERN Stack Development training with DOT Jordan and a Software Engineer work-experience certificate from Gray Matter Ai, with downloadable certificates.",
  alternates: { canonical: "/training" },
  openGraph: {
    title: "Training & Certifications — Issa AbuHadhoud",
    description:
      "MERN Stack Development training with DOT Jordan and a Software Engineer work-experience certificate from Gray Matter Ai, with downloadable certificates.",
    url: "/training",
  },
};

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

const certificates = [
  {
    id: "dot-jordan",
    logo: "DJ",
    org: "DOT Jordan",
    title: "MERN Stack Development Training",
    date: "January 2026 – May 2026",
    type: "training",
    desc: "Successfully completed 130 hours of intensive MERN Stack Development training. Gained hands-on experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Worked on real-world projects, RESTful APIs, authentication systems, database design, and responsive user interfaces.",
    badges: mernTechnologies,
    file: "/DOT-Jordan-MERN-Certificate.pdf",
    credentialId: "DOT-AM-FS-4-25-YGA-Is0526",
  },
  {
    id: "gray-matter-ai",
    logo: "GM",
    org: "Gray Matter Ai",
    title: "Software Engineer — Work Experience",
    date: "4 June 2026 – 5 July 2026",
    type: "experience",
    desc: "Successfully served as a Software Engineer, demonstrating professionalism, technical expertise, and dedication throughout the employment period while contributing to embedded system software development projects and collaborating effectively with the engineering team.",
    badges: ["Embedded Systems", "Software Engineering", "Team Collaboration"],
    file: "/GrayMatterAI-Experience-Certificate.pdf",
    credentialId: null,
  },
];

const TrainingPage = () => {
  return (
    <div style={{ padding: "6rem 1.5rem", minHeight: "70vh" }}>
      <div className="container-fluid" style={{ maxWidth: "900px" }}>
        <Reveal type="up">
          <p className="section-label">Continuous Learning</p>
          <h1 className="section-title">Training &amp; Certifications</h1>
          <p className="section-body" style={{ marginBottom: "3rem" }}>
            Hands-on programs and real work experience that sharpened my
            full-stack skill set beyond the classroom. Certificates are
            available to view or download below.
          </p>
        </Reveal>

        <div className="cert-timeline">
          {certificates.map((cert, i) => (
            <Reveal type="scale" delay={i * 0.08} key={cert.id}>
              <div className="cert-card" style={{ marginBottom: "1.5rem" }}>
                <span className="cert-timeline-dot" />
                <svg
                  className="cert-icon-check"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>

                <div className="cert-top">
                  <div className="cert-logo">{cert.logo}</div>
                  <div>
                    <p className="cert-org">{cert.org}</p>
                    <p className="cert-date">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      {cert.date}
                    </p>
                  </div>
                </div>

                <p className="cert-title">{cert.title}</p>
                <p className="cert-desc">{cert.desc}</p>

                <div className="cert-badges" style={{ marginBottom: "1.4rem" }}>
                  {cert.badges.map((b) => (
                    <span key={b} className="tech-badge">
                      {b}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                  <a
                    href={cert.file}
                    download
                    className="btn-neon"
                    style={{ fontSize: "0.72rem", padding: "0.65rem 1.3rem" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                    </svg>
                    Download Certificate
                  </a>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                  >
                    View PDF ↗
                  </a>
                  {cert.credentialId && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--muted)",
                      }}
                    >
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal type="fade" delay={0.1}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <Link href="/project" className="btn-neon">
              See My Projects →
            </Link>
            <Link href="/about" className="btn-ghost">
              Back to About
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TrainingPage;
