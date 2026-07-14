const SITE_URL = "https://www.issaabuhadhoud.duckdns.org";

export default function sitemap() {
  const routes = ["", "/about", "/project", "/training", "/resume", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
