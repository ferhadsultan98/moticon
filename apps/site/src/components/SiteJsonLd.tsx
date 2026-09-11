import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  REPO_URL,
  NPM_URL,
  absoluteUrl,
} from "@/lib/site";

/**
 * Site-wide JSON-LD graph, rendered once in the root layout. Describes the
 * website, the person/publisher and the npm package (as SoftwareSourceCode —
 * the actual product is usable component source, not a hosted app). Per-page
 * graphs (icon pages, taxonomy pages) are rendered by their own components and
 * reference these @id values via `isPartOf` / `publisher`.
 */
export function SiteJsonLd() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
      // No SearchAction: the icon browser filters in-page (no URL-based search
      // endpoint), and Google retired the sitelinks search box. A schema
      // target that doesn't resolve to a real results page would be misleading.
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Farhad Sultanov",
      url: "https://www.linkedin.com/in/farhadsultan/",
      sameAs: ["https://github.com/ferhadsultan98"],
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${SITE_URL}/#package`,
      name: "@moticon/react",
      description: SITE_DESCRIPTION,
      url: `${SITE_URL}/`,
      codeRepository: REPO_URL,
      programmingLanguage: ["TypeScript", "TSX"],
      runtimePlatform: "React",
      license: "https://opensource.org/license/mit",
      author: { "@id": `${SITE_URL}/#person` },
      about: "Animated React icons, each with a hand-built physical animation.",
      sameAs: [NPM_URL, REPO_URL],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

/** Shared helper so per-page components render identical wrapper markup. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export { absoluteUrl };
