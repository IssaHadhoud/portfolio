import Link from "next/link";
import Reveal from "../../component/Reveal";
import SkillBar from "../../component/SkillBar";
import { getDictionary } from "../../../dictionaries";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const m = dict.meta.about;
  const path = `/${locale}/about`;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: path, languages: { en: "/en/about", ar: "/ar/about" } },
    openGraph: { title: `${m.title} — ${dict.locale === "ar" ? "عيسى أبوهدهود" : "Issa AbuHadhoud"}`, description: m.description, url: path },
  };
}

const skillKeys = [
  { cat: "frontend", items: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 82 },
    { name: "Bootstrap", level: 85 },
    { name: "HTML/CSS", level: 92 },
  ]},
  { cat: "backend", items: [
    { name: "Node.js", level: 85 },
    { name: "ASP.NET Core", level: 78 },
    { name: "Express.js", level: 80 },
    { name: "REST APIs", level: 88 },
  ]},
  { cat: "databases", items: [
    { name: "MongoDB", level: 82 },
    { name: "SQL Server", level: 75 },
    { name: "Mongoose", level: 78 },
  ]},
  { cat: "tools", items: [
    { name: "Git", level: 88 },
    { name: "GitHub", level: 88 },
    { name: "Postman", level: 80 },
  ]},
];

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.about;

  return (
    <div style={{ minHeight: "80vh", padding: "5rem 1.5rem" }}>
      <div className="container-fluid" style={{ maxWidth: "1000px" }}>
        <Reveal type="up">
          <div style={{ marginBottom: "3.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
            <p className="section-label">{t.label}</p>
            <h1 className="section-title">{t.title}</h1>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--neon2)",
                marginBottom: "1.5rem",
              }}
            >
              {t.subtitle}
            </p>
            <p className="section-body">{t.body}</p>
          </div>
        </Reveal>

        <Reveal type="up">
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            {t.skillsLabel}
          </p>
        </Reveal>
        <div className="row g-3" style={{ marginBottom: "3rem" }}>
          {skillKeys.map((group, i) => (
            <div className="col-md-6 col-lg-3" key={group.cat}>
              <Reveal type="up" delay={i * 0.08}>
                <div className="skill-card">
                  <p className="skill-cat">{t.categories[group.cat]}</p>
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
            <Link href={`/${locale}/project`} className="btn-neon">
              {t.seeProjects}
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
