import { JsonLd } from "@/components/SiteJsonLd";
import type { IconMeta } from "@/lib/icons";
import type { IconDetail } from "@/lib/icon-copy";
import { humanizeName, metaDescription } from "@/lib/icon-copy";
import { SITE_URL, REPO_URL, absoluteUrl, slugify } from "@/lib/site";

/**
 * Per-icon JSON-LD @graph. The page's main entity is SoftwareSourceCode — the
 * deliverable is a usable React component, not a hosted image. An ImageObject
 * is attached as a secondary entity for the visual preview, and a
 * BreadcrumbList reflects the visible Home / Icons / Category / Name trail.
 */
export function IconJsonLd({
  meta,
  detail,
  heading,
}: {
  meta: IconMeta;
  detail?: IconDetail;
  heading: string;
}) {
  const url = absoluteUrl(`/icons/${meta.name}`);
  const human = humanizeName(meta.name);
  const description = metaDescription(meta);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#page`,
      url,
      name: heading,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      primaryImageOfPage: { "@id": `${url}#preview` },
      mainEntity: { "@id": `${url}#component` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${url}#component`,
      name: meta.name,
      alternateName: meta.aliases,
      description: `Animated React ${human} icon with a ${meta.mechanic || "physical"} motion${
        detail?.origin && detail.origin !== "its center"
          ? ` originating from ${detail.origin}`
          : ""
      }, triggered on ${meta.trigger}.`,
      url,
      codeRepository: REPO_URL,
      programmingLanguage: ["TypeScript", "TSX"],
      runtimePlatform: "React",
      codeSampleType: "code snippet",
      license: "https://opensource.org/license/mit",
      isPartOf: { "@id": `${SITE_URL}/#package` },
      keywords: [
        `animated ${human.toLowerCase()} icon`,
        `${meta.mechanic} icon`,
        ...meta.tags,
      ].join(", "),
      programmingModel: meta.mechanic,
    },
    {
      "@type": "ImageObject",
      "@id": `${url}#preview`,
      contentUrl: `${url}/opengraph-image`,
      encodingFormat: "image/png",
      caption: `Animated ${human} icon preview`,
      representativeOfPage: true,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Icons", item: `${SITE_URL}/icons` },
        {
          "@type": "ListItem",
          position: 3,
          name: meta.category,
          item: `${SITE_URL}/icons/category/${slugify(meta.category)}`,
        },
        { "@type": "ListItem", position: 4, name: human, item: url },
      ],
    },
  ];

  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
