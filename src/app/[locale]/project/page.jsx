import Link from "next/link";
import Reveal from "../../component/Reveal";
import { getDictionary } from "../../../dictionaries";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const m = dict.meta.project;
  const path = `/${locale}/project`;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: path, languages: { en: "/en/project", ar: "/ar/project" } },
    openGraph: { title: `${m.title} — ${dict.locale === "ar" ? "عيسى أبوهدهود" : "Issa AbuHadhoud"}`, description: m.description, url: path },
  };
}

const projectMeta = [
  { key: "madares", techs: ["Node.js", "Next.js", "Bootstrap"], img: "/Screenshot 2026-05-21 141206.png", link: "https://madares233.netlify.app/", github: "#" },
  { key: "ecommerce", techs: ["React", "Node.js", "MongoDB"], img: "/Screenshot 2026-05-26 161035.png", link: "https://shop233.netlify.app/", github: "#" },
];

export default async function ProjectPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.project;

  return (
    <div className="projects-page">
      <div className="container-fluid">
        <Reveal type="up">
          <div className="projects-header">
            <p className="section-label">{t.label}</p>
            <h1 className="section-title">{t.title}</h1>
          </div>
        </Reveal>
        <div className="row g-4">
          {projectMeta.map((p, i) => {
            const item = t.items[p.key];
            return (
              <div className="col-md-6 col-lg-4" key={p.key}>
                <Reveal type="scale" delay={i * 0.1}>
                  <div className="project-card">
                    <img src={p.img} alt={item.title} className="project-card-img" />
                    <div className="project-card-body">
                      <h5 className="project-card-title">{item.title}</h5>
                      <div style={{ marginBottom: "0.75rem" }}>
                        {p.techs.map((tc) => (
                          <span key={tc} className="badge-tech">
                            {tc}
                          </span>
                        ))}
                      </div>
                      <p className="project-card-desc">{item.desc}</p>
                      <div className="project-card-links">
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-neon"
                          style={{ fontSize: "0.72rem", padding: "0.6rem 1.25rem" }}
                        >
                          {t.liveDemo}
                        </a>
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.67-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.48-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13.88-.24 1.82-.37 2.76-.37.94 0 1.88.13 2.76.37 2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.22-2.58 5.15-5.03 5.42.39.34.74 1 .74 2.03 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.36-1.45 7.51-5.57 7.51-10.43C23.02 5.24 18.27.5 12 .5z" />
                          </svg>
                          {t.code}
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
        <Reveal type="fade">
          <div style={{ marginTop: "2.5rem" }}>
            <Link href={`/${locale}`} className="btn-ghost">
              {t.back}
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
