const defaultOpenGraph = {
  siteName: "Pacific Maritime Industries Corp.",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "/assets/images/logos/black_with_text_Pacific_Maritime_Industries_Corporation.png",
      width: 1200,
      height: 630,
      alt: "Pacific Maritime Industries Corp. Logo",
    },
  ],
};

/**
 * Generates metadata object for Next.js page.
 * @param {Object} params
 * @param {string} params.title
 * @param {string} params.description
 * @param {string} params.path - e.g. '/about' or '/contact'
 * @returns {Object}
 */
export function generatePageMetadata({ title, description, path = "" }) {
  const baseUrl = "https://www.pacmaritime.com";
  const fullUrl = path ? `${baseUrl}${path}` : baseUrl;

  const baseTitle = "Pacific Maritime Industries Corp.";
  const formattedOgTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...defaultOpenGraph,
      title: formattedOgTitle,
      description: description,
      url: fullUrl,
    },
  };
}
