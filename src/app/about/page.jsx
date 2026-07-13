import Link from "next/link";
import Reveal from "../component/Reveal";
import SkillBar from "../component/SkillBar";

export const metadata = {
  title: "About",
  description:
    "MIS graduate and Full-Stack Developer skilled in React, Next.js, Node.js, ASP.NET Core, MongoDB, and SQL Server.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Issa AbuHadhoud",
    description:
      "MIS graduate and Full-Stack Developer skilled in React, Next.js, Node.js, ASP.NET Core, MongoDB, and SQL Server.",
    url: "/about",
  },
};

const skills = [
  {
    cat: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 82 },
      { name: "Bootstrap", level: 85 },
      { name: "HTML/CSS", level: 92 },
    ],
  },
  {
    cat: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "ASP.NET Core", level: 78 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    cat: "Databases",
    items: [
      { name: "MongoDB", level: 82 },
      { name: "SQL Server", level: 75 },
      { name: "Mongoose", level: 78 },
    ],
  },
  {
    cat: "Tools",
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "Postman", level: 80 },
    ],
  },
];

const AboutPage = () => {
  return (
    <div style={{ minHeight: "80vh", padding: "5rem 1.5rem" }}>
      <div className="container-fluid" style={{ maxWidth: "1000px" }}>
        <Reveal type="up">
          <div style={{ marginBottom: "3.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
            <p className="section-label">About Me</p>
            <h1 className="section-title">Issa AbuHadhoud</h1>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--neon2)",
                marginBottom: "1.5rem",
              }}
            >
              MIS Graduate · Full-Stack Developer · MERN &amp; .NET
            </p>
            <p className="section-body">
              I&apos;m a passionate full-stack developer with a background in
              Management Information Systems. My expertise spans both the
              MERN stack and .NET ecosystem — from building dynamic React
              interfaces to crafting robust ASP.NET Core backends. I care
              deeply about clean code, good architecture, and continuously
              expanding my technical toolkit.
            </p>
          </div>
        </Reveal>

        <Reveal type="up">
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            Skills &amp; Technologies
          </p>
        </Reveal>
        <div className="row g-3" style={{ marginBottom: "3rem" }}>
          {skills.map((group, i) => (
            <div className="col-md-6 col-lg-3" key={group.cat}>
              <Reveal type="up" delay={i * 0.08}>
                <div className="skill-card">
                  <p className="skill-cat">{group.cat}</p>
                  {group.items.map((item) => (
                    <SkillBar key={item.name} name={item.name} level={item.level} />
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal type="fade">
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/project" className="btn-neon">
              See My Projects →
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

export default AboutPage;
