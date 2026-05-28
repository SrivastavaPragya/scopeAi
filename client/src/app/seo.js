export const siteConfig = {
  name: "ScopeAI",
  productName: "Startup Analyzer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  title: "ScopeAI - AI-Powered Startup Idea Analyzer",
  description:
    "Validate startup ideas with AI-powered market research, competitor analysis, pricing signals, risks, moats, and pitch deck generation.",
  ogImage: "/og-card.svg",
  keywords: [
    "AI startup analyzer",
    "startup idea validation",
    "market research AI",
    "competitor analysis",
    "startup validation tool",
    "pitch deck generator",
    "founder tools",
    "LangChain startup analysis",
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
}) {
  const socialTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const resolvedDescription = description || siteConfig.description;

  return {
    title: title || siteConfig.title,
    description: resolvedDescription,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: socialTitle,
      description: resolvedDescription,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} AI startup analyzer preview`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: resolvedDescription,
      images: [siteConfig.ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
