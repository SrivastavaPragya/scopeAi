import { absoluteUrl } from "./seo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/full-analysis"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
