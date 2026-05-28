import { absoluteUrl } from "./seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/analyze", priority: 0.95, changeFrequency: "weekly" },
  { path: "/api-docs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.75, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
