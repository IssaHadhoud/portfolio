// TODO: keep this in sync with layout.js SITE_URL if you change domains
const SITE_URL = "https://issa-portfolio.example.com";

export default function sitemap() {
  const routes = ["", "/about", "/project", "/training", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
