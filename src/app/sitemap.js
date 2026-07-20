const SITE_URL = "https://issaabuhadhoud.duckdns.org";
const locales = ["en", "ar"];
const routes = ["", "/about", "/project", "/training", "/resume", "/contact"];

export default function sitemap() {
  const entries = [];

  for (const route of routes) {
    entries.push({
      url: `${SITE_URL}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${route}`,
          ar: `${SITE_URL}/ar${route}`,
        },
      },
    });
    entries.push({
      url: `${SITE_URL}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${route}`,
          ar: `${SITE_URL}/ar${route}`,
        },
      },
    });
  }

  return entries;
}
