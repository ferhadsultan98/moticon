import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { DocsShell } from "@/components/DocsShell";
import { JsonLd } from "@/components/SiteJsonLd";
import { DOC_CONTENT } from "@/components/docs/content";
import { DOC_PAGES, docBySlug } from "@/lib/docs";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return DOC_PAGES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = docBySlug(slug);
  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/docs/${doc.slug}` },
    openGraph: {
      title: `${doc.title} — moticon`,
      description: doc.description,
      url: absoluteUrl(`/docs/${doc.slug}`),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${doc.title} — moticon`,
      description: doc.description,
    },
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = docBySlug(slug);
  const Content = DOC_CONTENT[slug];
  if (!doc || !Content) notFound();

  const url = absoluteUrl(`/docs/${doc.slug}`);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TechArticle",
              "@id": `${url}#article`,
              headline: doc.title,
              description: doc.description,
              url,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#package` },
              inLanguage: "en",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Docs", item: `${SITE_URL}/docs` },
                { "@type": "ListItem", position: 3, name: doc.nav, item: url },
              ],
            },
          ],
        }}
      />
      <DocsShell current={doc}>
        <Content />
      </DocsShell>
      <Footer />
    </>
  );
}
