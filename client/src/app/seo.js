export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og-image.png",
}) {
  const siteName = "Eva";
  const finalTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const baseUrl = "https://eva-validate.com"; // Default production domain placeholder
  const url = `${baseUrl}${path}`;

  return {
    title: finalTitle,
    description,
    keywords: [
      "Eva",
      "Eva AI",
      "startup idea validation",
      "market analysis",
      "competitor mapping",
      "pitch deck generator",
      "business validation",
      ...keywords,
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: finalTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
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
